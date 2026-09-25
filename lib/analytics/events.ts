import { getAnalyticsConsent } from "@/lib/analytics/consent";

export const analyticsEvents = {
  ctaClick: "cta_click",
  phoneClick: "phone_click",
  emailClick: "email_click",
  outboundWebsiteClick: "outbound_website_click",
  formStart: "form_start",
  formSubmit: "form_submit",
  formError: "form_error",
  auditPageView: "view_marketing_audit_page",
  auditLeadSubmitSuccess: "marketing_audit_lead_submit_success",
  offerPageView: "view_offer_page",
  offerLeadSubmitSuccess: "offer_lead_submit_success",
  contactLeadSubmitSuccess: "contact_lead_submit_success"
} as const;

export function pushDataLayerEvent(eventName: string, properties?: Record<string, string>) {
  if (typeof window === "undefined" || getAnalyticsConsent() !== "granted") return;

  const dataLayerWindow = window as Window & {
    dataLayer?: Array<Record<string, string>>;
  };

  dataLayerWindow.dataLayer = dataLayerWindow.dataLayer ?? [];
  dataLayerWindow.dataLayer.push({ event: eventName, ...properties });
}

const emittedLeadConversions = new Set<string>();
const pendingLeadConversions = new Map<string, string>();
let consentListenerWindow: Window | undefined;

function emitLeadSuccessEvent(successEvent: string, conversionId: string) {
  if (emittedLeadConversions.has(conversionId) || getAnalyticsConsent() !== "granted") return;

  emittedLeadConversions.add(conversionId);
  pendingLeadConversions.delete(conversionId);
  pushDataLayerEvent(successEvent, { event_id: conversionId });
}

function flushPendingLeadConversions() {
  if (getAnalyticsConsent() !== "granted") return;

  for (const [conversionId, successEvent] of pendingLeadConversions) {
    emitLeadSuccessEvent(successEvent, conversionId);
  }
}

function installConsentListeners() {
  if (typeof window === "undefined" || consentListenerWindow === window) return;

  consentListenerWindow = window;
  window.addEventListener("analytics-consent-granted", flushPendingLeadConversions);
  window.addEventListener("analytics-consent-denied", () => pendingLeadConversions.clear());
}

export function pushLeadSuccessEvent(successEvent: string, conversionId: string) {
  installConsentListeners();

  if (emittedLeadConversions.has(conversionId)) return;
  if (getAnalyticsConsent() !== "granted") {
    pendingLeadConversions.set(conversionId, successEvent);
    return;
  }

  emitLeadSuccessEvent(successEvent, conversionId);
}

export function pushLeadSuccessEvents(successEvent: string) {
  pushDataLayerEvent(successEvent);
  pushDataLayerEvent(analyticsEvents.formSubmit);
}
