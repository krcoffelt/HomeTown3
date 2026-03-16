import type { LeadAttributionFields } from "@/lib/analytics/lead-attribution";
import { Resend } from "resend";
import { getEnv } from "@/lib/env";
import { site } from "@/data/site";
import type { LeadInput } from "@/lib/validations/lead";

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

type LeadNotificationInput = LeadInput & LeadAttributionFields;

function buildLeadEmailText(lead: LeadNotificationInput) {
  return [
    `New lead from ${site.brand.fullName}`,
    "",
    `Name: ${lead.name}`,
    `Business: ${lead.businessName}`,
    `Email: ${lead.email}`,
    `Phone: ${lead.phone || "Not provided"}`,
    `Service: ${lead.serviceNeeded}`,
    `Lead source: ${lead.leadSource || "Unknown"}`,
    `Landing page: ${lead.landingPage || "Unknown"}`,
    `Referrer: ${lead.referrerUrl || "Direct / unavailable"}`,
    `UTM source: ${lead.utmSource || "N/A"}`,
    `UTM medium: ${lead.utmMedium || "N/A"}`,
    `UTM campaign: ${lead.utmCampaign || "N/A"}`,
    `UTM term: ${lead.utmTerm || "N/A"}`,
    `UTM content: ${lead.utmContent || "N/A"}`,
    `GCLID: ${lead.gclid || "N/A"}`,
    "",
    "Project details:",
    lead.projectDetails
  ].join("\n");
}

function buildLeadEmailHtml(lead: LeadNotificationInput) {
  const rows = [
    ["Name", escapeHtml(lead.name)],
    ["Business", escapeHtml(lead.businessName)],
    ["Email", escapeHtml(lead.email)],
    ["Phone", escapeHtml(lead.phone || "Not provided")],
    ["Service", escapeHtml(lead.serviceNeeded)],
    ["Lead source", escapeHtml(lead.leadSource || "Unknown")],
    ["Landing page", escapeHtml(lead.landingPage || "Unknown")],
    ["Referrer", escapeHtml(lead.referrerUrl || "Direct / unavailable")],
    ["UTM source", escapeHtml(lead.utmSource || "N/A")],
    ["UTM medium", escapeHtml(lead.utmMedium || "N/A")],
    ["UTM campaign", escapeHtml(lead.utmCampaign || "N/A")],
    ["UTM term", escapeHtml(lead.utmTerm || "N/A")],
    ["UTM content", escapeHtml(lead.utmContent || "N/A")],
    ["GCLID", escapeHtml(lead.gclid || "N/A")]
  ];

  return `
    <div style="font-family: Arial, sans-serif; color: #10172b; line-height: 1.5;">
      <h1 style="margin: 0 0 16px; font-size: 22px;">New lead from ${escapeHtml(site.brand.fullName)}</h1>
      <table style="border-collapse: collapse; width: 100%; max-width: 640px; margin-bottom: 20px;">
        <tbody>
          ${rows
            .map(
              ([label, value]) => `
                <tr>
                  <td style="padding: 8px 12px; border: 1px solid #d9deea; font-weight: 700; width: 140px;">${label}</td>
                  <td style="padding: 8px 12px; border: 1px solid #d9deea;">${value}</td>
                </tr>
              `
            )
            .join("")}
        </tbody>
      </table>
      <h2 style="margin: 0 0 8px; font-size: 16px;">Project details</h2>
      <p style="margin: 0; white-space: pre-wrap;">${escapeHtml(lead.projectDetails)}</p>
    </div>
  `;
}

export async function sendLeadNotification(lead: LeadNotificationInput) {
  const resend = new Resend(getEnv("RESEND_API_KEY"));

  await resend.emails.send({
    from: getEnv("LEAD_FROM_EMAIL"),
    to: [getEnv("LEAD_NOTIFY_EMAIL")],
    replyTo: lead.email,
    subject: `New ${lead.serviceNeeded} lead from ${lead.name}`,
    text: buildLeadEmailText(lead),
    html: buildLeadEmailHtml(lead)
  });
}
