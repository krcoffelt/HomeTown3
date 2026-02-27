import { Resend } from "resend";
import { getEnv } from "@/lib/env";
import type { LeadInput } from "@/lib/validations/lead";

export async function sendLeadNotification(lead: LeadInput) {
  const resend = new Resend(getEnv("RESEND_API_KEY"));
  const to = getEnv("LEAD_NOTIFICATION_EMAIL");
  const from = getEnv("FROM_EMAIL");

  await resend.emails.send({
    from,
    to,
    subject: `New Hometown Lead: ${lead.businessName}`,
    html: `
      <h1>New Lead Submission</h1>
      <p><strong>Name:</strong> ${lead.name}</p>
      <p><strong>Business:</strong> ${lead.businessName}</p>
      <p><strong>Email:</strong> ${lead.email}</p>
      <p><strong>Phone:</strong> ${lead.phone ?? "N/A"}</p>
      <p><strong>Service:</strong> ${lead.serviceNeeded}</p>
      <p><strong>Details:</strong> ${lead.projectDetails}</p>
    `
  });
}

