"use server";

import { getLeadSource, type LeadAttributionFields } from "@/lib/analytics/lead-attribution";
import { sendLeadNotification } from "@/lib/email/resend";
import { leadSchema } from "@/lib/validations/lead";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export interface SubmitLeadState {
  ok: boolean;
  message: string;
}

function spamGuard(formData: FormData) {
  return String(formData.get("companyWebsite") ?? "").trim();
}

function cleanOptional(value?: string) {
  const trimmed = value?.trim();
  return trimmed ? trimmed : undefined;
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
    const { error } = await supabase.from("leads").insert({
      name: values.name,
      business_name: values.businessName,
      email: values.email,
      phone: cleanOptional(values.phone),
      service_needed: values.serviceNeeded,
      project_details: values.projectDetails,
      landing_page: cleanOptional(values.landingPage),
      referrer_url: cleanOptional(values.referrerUrl),
      utm_source: cleanOptional(values.utmSource),
      utm_medium: cleanOptional(values.utmMedium),
      utm_campaign: cleanOptional(values.utmCampaign),
      utm_term: cleanOptional(values.utmTerm),
      utm_content: cleanOptional(values.utmContent),
      gclid: cleanOptional(values.gclid),
      lead_source: leadSource
    });

    if (error) {
      if (error.code === "42P01") {
        return {
          ok: false,
          message: "Leads table is not set up yet. Please run the Supabase schema SQL."
        };
      }
      if (error.code === "42501" || error.code === "401" || error.code === "403") {
        return {
          ok: false,
          message: "Supabase permissions are blocking inserts. Check service role key in env."
        };
      }

      return {
        ok: false,
        message: `Submission failed: ${error.message}`
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

    return {
      ok: true,
      message: "Thanks. Your request was sent successfully."
    };
  } catch (error) {
    if (error instanceof Error && error.message.startsWith("Missing env var:")) {
      return {
        ok: false,
        message: `${error.message}. Add it in Netlify environment variables.`
      };
    }

    return {
      ok: false,
      message: "Something went wrong. Please try again shortly."
    };
  }
}

export async function submitLead(
  _prevState: SubmitLeadState,
  formData: FormData
): Promise<SubmitLeadState> {
  if (spamGuard(formData)) {
    return {
      ok: true,
      message: "Thanks. Your request was sent successfully."
    };
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
    const issue = parsed.error.issues[0];
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
    const message = issue?.message ? `${field}: ${issue.message}` : "Please complete all required fields correctly.";
    return { ok: false, message };
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
  if (spamGuard(formData)) {
    return {
      ok: true,
      message: "Thanks. Your request was sent successfully."
    };
  }

  const name = String(formData.get("name") ?? "").trim();
  const businessName = String(formData.get("businessName") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const websiteOrSocial = String(formData.get("websiteOrSocial") ?? "").trim();

  if (!name || !businessName || !email || !phone) {
    return {
      ok: false,
      message: "Please complete the required fields before submitting."
    };
  }

  return insertLead({
    name,
    businessName,
    email,
    phone,
    landingPage: String(formData.get("landingPage") ?? ""),
    referrerUrl: String(formData.get("referrerUrl") ?? ""),
    utmSource: String(formData.get("utmSource") ?? ""),
    utmMedium: String(formData.get("utmMedium") ?? ""),
    utmCampaign: String(formData.get("utmCampaign") ?? ""),
    utmTerm: String(formData.get("utmTerm") ?? ""),
    utmContent: String(formData.get("utmContent") ?? ""),
    gclid: String(formData.get("gclid") ?? ""),
    serviceNeeded: "Website Design",
    projectDetails: [
      "$800 website offer inquiry.",
      "Lead came from the website-offer-800 landing page.",
      websiteOrSocial ? `Website or social link: ${websiteOrSocial}` : null
    ]
      .filter(Boolean)
      .join("\n\n")
  });
}
