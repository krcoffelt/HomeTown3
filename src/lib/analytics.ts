export type ConversionEventName =
  | 'form_submit_contact'
  | 'click_call_header'
  | 'click_call_footer'
  | 'click_call_cta_section';

type ConversionPayload = {
  event: ConversionEventName;
  pagePath: string;
  location?: string;
  timestamp: string;
};

type AnalyticsWindow = Window & {
  dataLayer?: Array<Record<string, unknown>>;
};

export function trackConversionEvent(event: ConversionEventName, location?: string): void {
  if (typeof window === 'undefined') {
    return;
  }

  const payload: ConversionPayload = {
    event,
    pagePath: window.location.pathname,
    location,
    timestamp: new Date().toISOString(),
  };

  const analyticsWindow = window as AnalyticsWindow;
  if (!Array.isArray(analyticsWindow.dataLayer)) {
    analyticsWindow.dataLayer = [];
  }

  analyticsWindow.dataLayer.push(payload);
  window.dispatchEvent(new CustomEvent('hometown-conversion', { detail: payload }));
}
