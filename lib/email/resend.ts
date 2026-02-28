import type { LeadInput } from "@/lib/validations/lead";

export async function sendLeadNotification(_lead: LeadInput) {
  // Notifications are disabled in v1; leads are stored directly in Supabase.
  return;
}
