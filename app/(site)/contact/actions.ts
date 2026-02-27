"use server";

import { leadSchema } from "@/lib/validations/lead";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { sendLeadNotification } from "@/lib/email/resend";

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
    return { ok: false, message: "Please complete all required fields correctly." };
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
      return {
        ok: false,
        message: "Submission failed. Please try again or email us directly."
      };
    }

    await sendLeadNotification(parsed.data);

    return {
      ok: true,
      message: "Thanks. Your request was sent successfully."
    };
  } catch {
    return {
      ok: false,
      message: "Something went wrong. Please try again shortly."
    };
  }
}

