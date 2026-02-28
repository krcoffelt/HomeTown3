"use server";

import { leadSchema } from "@/lib/validations/lead";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export interface SubmitLeadState {
  ok: boolean;
  message: string;
}

export async function submitLead(
  _prevState: SubmitLeadState,
  formData: FormData
): Promise<SubmitLeadState> {
  const parsed = leadSchema.safeParse({
    name: String(formData.get("name") ?? ""),
    businessName: String(formData.get("businessName") ?? ""),
    email: String(formData.get("email") ?? ""),
    phone: String(formData.get("phone") ?? ""),
    serviceNeeded: String(formData.get("serviceNeeded") ?? ""),
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
      projectDetails: "Project Details"
    };
    const field = issue?.path?.[0] ? fieldMap[String(issue.path[0])] ?? "Form" : "Form";
    const message = issue?.message ? `${field}: ${issue.message}` : "Please complete all required fields correctly.";
    return { ok: false, message };
  }

  try {
    const supabase = createSupabaseServerClient();
    const { error } = await supabase.from("leads").insert({
      name: parsed.data.name,
      business_name: parsed.data.businessName,
      email: parsed.data.email,
      phone: parsed.data.phone,
      service_needed: parsed.data.serviceNeeded,
      project_details: parsed.data.projectDetails
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
