import { describe, expect, it, beforeEach } from "vitest";
import { pushDataLayerEvent } from "@/lib/analytics/events";
import { getLeadSource } from "@/lib/analytics/lead-attribution";

describe("lead attribution", () => {
  it("prioritizes Google Ads click IDs", () => {
    expect(getLeadSource({ gclid: "abc123", utmSource: "newsletter", utmMedium: "email" })).toBe("google_ads");
  });

  it("detects paid Google traffic from UTM fields", () => {
    expect(getLeadSource({ utmSource: "google", utmMedium: "paid_search" })).toBe("google_ads");
  });

  it("combines regular source and medium fields", () => {
    expect(getLeadSource({ utmSource: "Facebook Ads", utmMedium: "Paid Social" })).toBe("facebook_ads_paid_social");
  });

  it("classifies Google referrers as organic search", () => {
    expect(getLeadSource({ referrerUrl: "https://www.google.com/search?q=hometown" })).toBe("organic_google");
  });

  it("falls back to direct without attribution", () => {
    expect(getLeadSource({})).toBe("direct");
  });
});

describe("analytics events", () => {
  beforeEach(() => {
    delete (window as Window & { dataLayer?: Array<Record<string, string>> }).dataLayer;
  });

  it("creates and pushes to the dataLayer in the browser", () => {
    pushDataLayerEvent("quote_click");

    expect((window as Window & { dataLayer?: Array<Record<string, string>> }).dataLayer).toEqual([{ event: "quote_click" }]);
  });

  it("appends to an existing dataLayer", () => {
    const dataLayerWindow = window as Window & { dataLayer?: Array<Record<string, string>> };
    dataLayerWindow.dataLayer = [{ event: "existing_event" }];

    pushDataLayerEvent("phone_click");

    expect(dataLayerWindow.dataLayer).toEqual([{ event: "existing_event" }, { event: "phone_click" }]);
  });
});
