"use client";

import { useEffect } from "react";
import { analyticsEvents, pushDataLayerEvent } from "@/lib/analytics/events";

export function MarketingAuditPageTracker() {
  useEffect(() => {
    pushDataLayerEvent(analyticsEvents.auditPageView);
  }, []);

  return null;
}
