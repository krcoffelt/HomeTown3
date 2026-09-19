export const ANALYTICS_CONSENT_STORAGE_KEY = "hometown_analytics_consent_v1";

export type AnalyticsConsent = "granted" | "denied";

export function getAnalyticsConsent(): AnalyticsConsent | undefined {
  if (typeof window === "undefined") return undefined;

  try {
    const value = window.localStorage.getItem(ANALYTICS_CONSENT_STORAGE_KEY);
    return value === "granted" || value === "denied" ? value : undefined;
  } catch {
    return undefined;
  }
}

export function setAnalyticsConsent(consent: AnalyticsConsent) {
  if (typeof window === "undefined") return;

  try {
    window.localStorage.setItem(ANALYTICS_CONSENT_STORAGE_KEY, consent);
  } catch {
    // The in-memory event still lets the current page honor the user's choice.
  }

  window.dispatchEvent(new CustomEvent(`analytics-consent-${consent}`));
}
