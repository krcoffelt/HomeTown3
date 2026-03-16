export interface LeadAttributionFields {
  landingPage?: string;
  referrerUrl?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmTerm?: string;
  utmContent?: string;
  gclid?: string;
  leadSource?: string;
}

export const leadAttributionFieldNames = [
  "landingPage",
  "referrerUrl",
  "utmSource",
  "utmMedium",
  "utmCampaign",
  "utmTerm",
  "utmContent",
  "gclid"
] as const;

function normalizeValue(value?: string | null) {
  const trimmed = value?.trim();
  return trimmed ? trimmed : undefined;
}

function slugify(value: string) {
  return value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/^_+|_+$/g, "");
}

function getReferrerHostname(referrerUrl?: string) {
  if (!referrerUrl) return undefined;

  try {
    return new URL(referrerUrl).hostname.toLowerCase();
  } catch {
    return undefined;
  }
}

export function getLeadSource(fields: LeadAttributionFields) {
  const gclid = normalizeValue(fields.gclid);
  const utmSource = normalizeValue(fields.utmSource)?.toLowerCase();
  const utmMedium = normalizeValue(fields.utmMedium)?.toLowerCase();
  const referrerHostname = getReferrerHostname(fields.referrerUrl);

  if (gclid) return "google_ads";

  if (utmSource === "google" && utmMedium && /(cpc|ppc|paid|paid_search)/.test(utmMedium)) {
    return "google_ads";
  }

  if (utmSource) {
    const source = slugify(utmSource);
    const medium = utmMedium ? slugify(utmMedium) : "";
    return medium ? `${source}_${medium}` : source;
  }

  if (referrerHostname?.includes("google.")) return "organic_google";
  if (!referrerHostname) return "direct";

  return `referral_${slugify(referrerHostname)}`;
}
