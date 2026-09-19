"use client";

import { useEffect, useState } from "react";
import { getAnalyticsConsent } from "@/lib/analytics/consent";

const SCRIPT_ID = "hometown-gtm-script";
const GOOGLE_ADS_SCRIPT_ID = "hometown-google-ads-script";

interface GtmLoaderProps {
  gtmId?: string;
  googleAdsId?: string;
}

export function GtmLoader({ gtmId, googleAdsId }: GtmLoaderProps) {
  const [gtmEnabled, setGtmEnabled] = useState(false);
  const [googleAdsEnabled, setGoogleAdsEnabled] = useState(false);

  useEffect(() => {
    const dataLayerWindow = window as Window & {
      dataLayer?: Array<Record<string, unknown>>;
      gtag?: (...args: unknown[]) => void;
    };
    dataLayerWindow.dataLayer = dataLayerWindow.dataLayer ?? [];
    dataLayerWindow.gtag =
      dataLayerWindow.gtag ??
      function gtag(...args: unknown[]) {
        dataLayerWindow.dataLayer?.push(args as unknown as Record<string, unknown>);
      };

    if (!gtmId && !googleAdsId) return;

    const enableGtm = () => {
      if (!gtmId) return;
      setGtmEnabled(true);
    };

    const enableGoogleAds = () => {
      if (!googleAdsId) return;
      setGoogleAdsEnabled(true);
    };

    const onConsentGranted = () => {
      enableGtm();
      enableGoogleAds();
    };
    window.addEventListener("analytics-consent-granted", onConsentGranted as EventListener);

    if (getAnalyticsConsent() === "granted") {
      onConsentGranted();
    }

    return () => {
      window.removeEventListener("analytics-consent-granted", onConsentGranted as EventListener);
    };
  }, [googleAdsId, gtmId]);

  useEffect(() => {
    if (!gtmEnabled || !gtmId) return;

    const currentScript = document.getElementById(SCRIPT_ID);
    if (currentScript) return;

    const dataLayerWindow = window as Window & {
      dataLayer?: Array<Record<string, unknown>>;
    };
    dataLayerWindow.dataLayer = dataLayerWindow.dataLayer ?? [];
    dataLayerWindow.dataLayer.push({
      "gtm.start": Date.now(),
      event: "gtm.js"
    });

    const script = document.createElement("script");
    script.id = SCRIPT_ID;
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtm.js?id=${encodeURIComponent(gtmId)}`;
    document.head.appendChild(script);
  }, [gtmEnabled, gtmId]);

  useEffect(() => {
    if (!googleAdsEnabled || !googleAdsId) return;

    const currentScript = document.getElementById(GOOGLE_ADS_SCRIPT_ID);
    if (currentScript) return;

    const dataLayerWindow = window as Window & {
      gtag?: (...args: unknown[]) => void;
    };

    dataLayerWindow.gtag?.("js", new Date());
    dataLayerWindow.gtag?.("config", googleAdsId);

    const script = document.createElement("script");
    script.id = GOOGLE_ADS_SCRIPT_ID;
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(googleAdsId)}`;
    document.head.appendChild(script);
  }, [googleAdsEnabled, googleAdsId]);

  return null;
}
