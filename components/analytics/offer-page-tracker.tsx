"use client";

import { useEffect } from "react";
import { analyticsEvents, pushDataLayerEvent } from "@/lib/analytics/events";

export function OfferPageTracker() {
  useEffect(() => {
    pushDataLayerEvent(analyticsEvents.offerPageView);

    const onClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const taggedElement = target.closest<HTMLElement>("[data-analytics]");
      const tag = taggedElement?.dataset.analytics;

      if (tag === "cta-offer-800") pushDataLayerEvent(analyticsEvents.ctaClick);
      if (tag === "phone_click") pushDataLayerEvent(analyticsEvents.phoneClick);
      if (tag === "email_click") pushDataLayerEvent(analyticsEvents.emailClick);
    };

    document.addEventListener("click", onClick, { passive: true });

    return () => {
      document.removeEventListener("click", onClick);
    };
  }, []);

  return null;
}
