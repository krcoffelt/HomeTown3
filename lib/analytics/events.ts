export const analyticsEvents = {
  ctaClick: "cta_click",
  phoneClick: "phone_click",
  emailClick: "email_click",
  outboundWebsiteClick: "outbound_website_click",
  formStart: "form_start",
  formSubmit: "form_submit",
  formError: "form_error",
  offerPageView: "view_offer_page",
  offerLeadSubmitSuccess: "offer_lead_submit_success",
  contactLeadSubmitSuccess: "contact_lead_submit_success"
} as const;

export function pushDataLayerEvent(eventName: string) {
  if (typeof window === "undefined") return;

  const dataLayerWindow = window as Window & {
    dataLayer?: Array<Record<string, string>>;
  };

  dataLayerWindow.dataLayer = dataLayerWindow.dataLayer ?? [];
  dataLayerWindow.dataLayer.push({ event: eventName });
}
