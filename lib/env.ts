const required = [
  "NEXT_PUBLIC_SUPABASE_URL",
  "NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY",
  "SUPABASE_SERVICE_ROLE_KEY",
  "RESEND_API_KEY",
  "LEAD_FROM_EMAIL",
  "LEAD_NOTIFY_EMAIL"
] as const;

export type RequiredEnv = (typeof required)[number];

const aliases: Partial<Record<RequiredEnv, readonly string[]>> = {
  LEAD_FROM_EMAIL: ["FROM_EMAIL"],
  LEAD_NOTIFY_EMAIL: ["LEAD_NOTIFICATION_EMAIL"]
};

export function getEnv(name: RequiredEnv): string {
  const value = process.env[name] ?? aliases[name]?.map((alias) => process.env[alias]).find(Boolean);
  if (!value) {
    throw new Error(`Missing env var: ${name}`);
  }
  return value;
}
