"use client";

import { useEffect, useState } from "react";

const SESSION_KEY = "hometown:gtm-loaded";
const SCRIPT_ID = "hometown-gtm-script";
const GOOGLE_ADS_SESSION_KEY = "hometown:google-ads-loaded";
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
      if (window.sessionStorage.getItem(SESSION_KEY) === "1") {
        setGtmEnabled(true);
        return;
      }
      window.sessionStorage.setItem(SESSION_KEY, "1");
      setGtmEnabled(true);
    };

    const enableGoogleAds = () => {
      if (!googleAdsId) return;
      if (window.sessionStorage.getItem(GOOGLE_ADS_SESSION_KEY) === "1") {
        setGoogleAdsEnabled(true);
        return;
      }
      window.sessionStorage.setItem(GOOGLE_ADS_SESSION_KEY, "1");
      setGoogleAdsEnabled(true);
    };

    const onConsentGranted = () => {
      enableGtm();
      enableGoogleAds();
    };
    const onFirstInteraction = () => {
      enableGtm();
      enableGoogleAds();
    };

    window.addEventListener("analytics-consent-granted", onConsentGranted as EventListener);
    window.addEventListener("pointerdown", onFirstInteraction, { once: true, passive: true });
    window.addEventListener("keydown", onFirstInteraction, { once: true });
    window.addEventListener("scroll", onFirstInteraction, { once: true, passive: true });

    return () => {
      window.removeEventListener("analytics-consent-granted", onConsentGranted as EventListener);
      window.removeEventListener("pointerdown", onFirstInteraction);
      window.removeEventListener("keydown", onFirstInteraction);
      window.removeEventListener("scroll", onFirstInteraction);
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
