"use client";

import { useEffect, useState } from "react";

const SESSION_KEY = "hometown:gtm-loaded";
const SCRIPT_ID = "hometown-gtm-script";

interface GtmLoaderProps {
  gtmId: string;
}

export function GtmLoader({ gtmId }: GtmLoaderProps) {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (!gtmId) return;

    if (window.sessionStorage.getItem(SESSION_KEY) === "1") {
      setEnabled(true);
      return;
    }

    const loadGtm = () => {
      if (window.sessionStorage.getItem(SESSION_KEY) === "1") {
        setEnabled(true);
        return;
      }
      window.sessionStorage.setItem(SESSION_KEY, "1");
      setEnabled(true);
    };

    const onConsentGranted = () => loadGtm();
    const onFirstInteraction = () => loadGtm();

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
  }, [gtmId]);

  useEffect(() => {
    if (!enabled || !gtmId) return;

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
  }, [enabled, gtmId]);

  return null;
}
