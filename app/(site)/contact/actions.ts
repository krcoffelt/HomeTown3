"use server";

import { getLeadSource, type LeadAttributionFields } from "@/lib/analytics/lead-attribution";
import { sendLeadNotification } from "@/lib/email/resend";
import { leadSchema, offerLeadSchema } from "@/lib/validations/lead";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import type { ZodError } from "zod";

export interface SubmitLeadState {
  ok: boolean;
  message: string;
}

const GENERIC_SUBMISSION_ERROR = "Submission failed. Please try again shortly or contact us directly.";
const SUCCESS_MESSAGE = "Thanks. Your request was sent successfully.";
const MIN_FORM_COMPLETION_MS = 1000;

function spamGuard(formData: FormData) {
  return String(formData.get("_hpt") ?? "").trim();
}

function cleanOptional(value?: string) {
  const trimmed = value?.trim();
  return trimmed ? trimmed : undefined;
}

function suspiciousTimingGuard(formData: FormData) {
  const rawStartedAt = String(formData.get("startedAt") ?? "").trim();
  if (!rawStartedAt) return false;

  const startedAt = Number(rawStartedAt);
  if (!Number.isFinite(startedAt) || startedAt <= 0) return false;

  const elapsedMs = Date.now() - startedAt;
  return elapsedMs >= 0 && elapsedMs < MIN_FORM_COMPLETION_MS;
}

function successState(): SubmitLeadState {
  return {
    ok: true,
    message: SUCCESS_MESSAGE
  };
}

function validationMessage(error: ZodError) {
  const issue = error.issues[0];
  const fieldMap: Record<string, string> = {
    name: "Name",
    businessName: "Business Name",
    email: "Email",
    phone: "Phone",
    serviceNeeded: "Service Needed",
    landingPage: "Landing Page",
    referrerUrl: "Referrer URL",
    utmSource: "UTM Source",
    utmMedium: "UTM Medium",
    utmCampaign: "UTM Campaign",
    utmTerm: "UTM Term",
    utmContent: "UTM Content",
    gclid: "GCLID",
    projectDetails: "Project Details"
  };
  const field = issue?.path?.[0] ? fieldMap[String(issue.path[0])] ?? "Form" : "Form";
  return issue?.message ? `${field}: ${issue.message}` : "Please complete all required fields correctly.";
}

const attributionColumns = [
  "landing_page",
  "referrer_url",
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "gclid",
  "lead_source"
] as const;

function isMissingAttributionColumnError(error: { code?: string; message?: string } | null) {
  if (!error) return false;
  if (error.code === "PGRST204") return true;

  const message = error.message?.toLowerCase() ?? "";
  return attributionColumns.some((column) => message.includes(column));
}

async function insertLead(values: {
  name: string;
  businessName: string;
  email: string;
  phone: string;
  serviceNeeded: string;
  projectDetails: string;
  landingPage?: string;
  referrerUrl?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmTerm?: string;
  utmContent?: string;
  gclid?: string;
}): Promise<SubmitLeadState> {
  try {
    const supabase = createSupabaseServerClient();
    const leadSource = getLeadSource(values);
    const baseInsert = {
      name: values.name,
      business_name: values.businessName,
      email: values.email,
      phone: cleanOptional(values.phone),
      service_needed: values.serviceNeeded,
      project_details: values.projectDetails
    };
    const attributionInsert = {
      landing_page: cleanOptional(values.landingPage),
      referrer_url: cleanOptional(values.referrerUrl),
      utm_source: cleanOptional(values.utmSource),
      utm_medium: cleanOptional(values.utmMedium),
      utm_campaign: cleanOptional(values.utmCampaign),
      utm_term: cleanOptional(values.utmTerm),
      utm_content: cleanOptional(values.utmContent),
      gclid: cleanOptional(values.gclid),
      lead_source: leadSource
    };

    let { error } = await supabase.from("leads").insert({
      ...baseInsert,
      ...attributionInsert
    });

    if (isMissingAttributionColumnError(error)) {
      const fallbackResult = await supabase.from("leads").insert(baseInsert);
      error = fallbackResult.error;
    }

    if (error) {
      console.error("Lead insert failed", error);
      return {
        ok: false,
        message: GENERIC_SUBMISSION_ERROR
      };
    }

    try {
      await sendLeadNotification({
        ...values,
        leadSource
      });
    } catch (error) {
      console.error("Lead notification email failed", error);
    }

    return successState();
  } catch (error) {
    console.error("Lead submission failed", error);
    return {
      ok: false,
      message: GENERIC_SUBMISSION_ERROR
    };
  }
}

export async function submitLead(
  _prevState: SubmitLeadState,
  formData: FormData
): Promise<SubmitLeadState> {
  if (spamGuard(formData) || suspiciousTimingGuard(formData)) {
    return successState();
  }

  const parsed = leadSchema.safeParse({
    name: String(formData.get("name") ?? ""),
    businessName: String(formData.get("businessName") ?? ""),
    email: String(formData.get("email") ?? ""),
    phone: String(formData.get("phone") ?? ""),
    serviceNeeded: String(formData.get("serviceNeeded") ?? ""),
    landingPage: String(formData.get("landingPage") ?? ""),
    referrerUrl: String(formData.get("referrerUrl") ?? ""),
    utmSource: String(formData.get("utmSource") ?? ""),
    utmMedium: String(formData.get("utmMedium") ?? ""),
    utmCampaign: String(formData.get("utmCampaign") ?? ""),
    utmTerm: String(formData.get("utmTerm") ?? ""),
    utmContent: String(formData.get("utmContent") ?? ""),
    gclid: String(formData.get("gclid") ?? ""),
    projectDetails: String(formData.get("projectDetails") ?? "")
  });

  if (!parsed.success) {
    return { ok: false, message: validationMessage(parsed.error) };
  }

  return insertLead({
    name: parsed.data.name,
    businessName: parsed.data.businessName,
    email: parsed.data.email,
    phone: parsed.data.phone ?? "",
    serviceNeeded: parsed.data.serviceNeeded,
    landingPage: parsed.data.landingPage,
    referrerUrl: parsed.data.referrerUrl,
    utmSource: parsed.data.utmSource,
    utmMedium: parsed.data.utmMedium,
    utmCampaign: parsed.data.utmCampaign,
    utmTerm: parsed.data.utmTerm,
    utmContent: parsed.data.utmContent,
    gclid: parsed.data.gclid,
    projectDetails: parsed.data.projectDetails
  });
}

export async function submitOfferLead(
  _prevState: SubmitLeadState,
  formData: FormData
): Promise<SubmitLeadState> {
  if (spamGuard(formData) || suspiciousTimingGuard(formData)) {
    return successState();
  }

  const parsed = offerLeadSchema.safeParse({
    name: String(formData.get("name") ?? "").trim(),
    businessName: String(formData.get("businessName") ?? "").trim(),
    email: String(formData.get("email") ?? "").trim(),
    phone: String(formData.get("phone") ?? "").trim(),
    landingPage: String(formData.get("landingPage") ?? ""),
    referrerUrl: String(formData.get("referrerUrl") ?? ""),
    utmSource: String(formData.get("utmSource") ?? ""),
    utmMedium: String(formData.get("utmMedium") ?? ""),
    utmCampaign: String(formData.get("utmCampaign") ?? ""),
    utmTerm: String(formData.get("utmTerm") ?? ""),
    utmContent: String(formData.get("utmContent") ?? ""),
    gclid: String(formData.get("gclid") ?? ""),
    projectDetails: String(formData.get("projectDetails") ?? "").trim()
  });

  if (!parsed.success) {
    return { ok: false, message: validationMessage(parsed.error) };
  }

  const projectDetails = cleanOptional(parsed.data.projectDetails);

  return insertLead({
    name: parsed.data.name,
    businessName: parsed.data.businessName,
    email: parsed.data.email,
    phone: parsed.data.phone ?? "",
    landingPage: parsed.data.landingPage,
    referrerUrl: parsed.data.referrerUrl,
    utmSource: parsed.data.utmSource,
    utmMedium: parsed.data.utmMedium,
    utmCampaign: parsed.data.utmCampaign,
    utmTerm: parsed.data.utmTerm,
    utmContent: parsed.data.utmContent,
    gclid: parsed.data.gclid,
    serviceNeeded: "Website Design",
    projectDetails: [
      "$800 website offer inquiry.",
      "Lead came from the website-offer-800 landing page.",
      projectDetails ? `Project details: ${projectDetails}` : null
    ]
      .filter(Boolean)
      .join("\n\n")
  });
}
