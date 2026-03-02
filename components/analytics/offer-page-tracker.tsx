"use client";

import { useEffect } from "react";

function pushDataLayerEvent(eventName: string) {
  const dataLayerWindow = window as Window & { dataLayer?: Array<Record<string, string>> };
  dataLayerWindow.dataLayer = dataLayerWindow.dataLayer ?? [];
  dataLayerWindow.dataLayer.push({ event: eventName });
}

export function OfferPageTracker() {
  useEffect(() => {
    pushDataLayerEvent("view_offer_page");

    const onClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const taggedElement = target.closest<HTMLElement>("[data-analytics]");
      const tag = taggedElement?.dataset.analytics;

      if (tag === "cta-offer-800") pushDataLayerEvent("cta_click");
      if (tag === "phone_click") pushDataLayerEvent("phone_click");
      if (tag === "email_click") pushDataLayerEvent("email_click");
    };

    document.addEventListener("click", onClick, { passive: true });

    return () => {
      document.removeEventListener("click", onClick);
    };
  }, []);

  return null;
}
