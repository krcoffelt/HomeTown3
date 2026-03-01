"use client";

import { GoogleTagManager } from "@next/third-parties/google";
import { useEffect, useState } from "react";

const SESSION_KEY = "hometown:gtm-loaded";

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

  if (!enabled || !gtmId) return null;

  return <GoogleTagManager gtmId={gtmId} />;
}
