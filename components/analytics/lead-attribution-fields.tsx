"use client";

import { useEffect, useState } from "react";
import { leadAttributionFieldNames, type LeadAttributionFields } from "@/lib/analytics/lead-attribution";

const STORAGE_KEY = "hometown_lead_attribution_v1";

const emptyValues: LeadAttributionFields = {
  landingPage: "",
  referrerUrl: "",
  utmSource: "",
  utmMedium: "",
  utmCampaign: "",
  utmTerm: "",
  utmContent: "",
  gclid: ""
};

function cleanValue(value?: string | null) {
  const trimmed = value?.trim();
  return trimmed ? trimmed : "";
}

function readStoredAttribution() {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (!stored) return undefined;
    return JSON.parse(stored) as LeadAttributionFields;
  } catch {
    return undefined;
  }
}

function writeStoredAttribution(values: LeadAttributionFields) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(values));
  } catch {
    // Ignore storage failures and still submit current values.
  }
}

export function LeadAttributionFields() {
  const [values, setValues] = useState<LeadAttributionFields>(emptyValues);

  useEffect(() => {
    try {
      const stored = readStoredAttribution();
      const { pathname, search, searchParams } = new URL(window.location.href);
      const currentValues: LeadAttributionFields = {
        landingPage: `${pathname}${search}`,
        referrerUrl: cleanValue(document.referrer),
        utmSource: cleanValue(searchParams.get("utm_source")),
        utmMedium: cleanValue(searchParams.get("utm_medium")),
        utmCampaign: cleanValue(searchParams.get("utm_campaign")),
        utmTerm: cleanValue(searchParams.get("utm_term")),
        utmContent: cleanValue(searchParams.get("utm_content")),
        gclid: cleanValue(searchParams.get("gclid"))
      };

      const hasTrackingParams = Boolean(
        currentValues.utmSource ||
          currentValues.utmMedium ||
          currentValues.utmCampaign ||
          currentValues.utmTerm ||
          currentValues.utmContent ||
          currentValues.gclid
      );

      const nextValues = hasTrackingParams
        ? currentValues
        : {
            landingPage: stored?.landingPage || currentValues.landingPage,
            referrerUrl: stored?.referrerUrl || currentValues.referrerUrl,
            utmSource: stored?.utmSource || currentValues.utmSource,
            utmMedium: stored?.utmMedium || currentValues.utmMedium,
            utmCampaign: stored?.utmCampaign || currentValues.utmCampaign,
            utmTerm: stored?.utmTerm || currentValues.utmTerm,
            utmContent: stored?.utmContent || currentValues.utmContent,
            gclid: stored?.gclid || currentValues.gclid
          };

      writeStoredAttribution(nextValues);
      setValues(nextValues);
    } catch {
      setValues(emptyValues);
    }
  }, []);

  return (
    <>
      {leadAttributionFieldNames.map((name) => (
        <input
          key={name}
          type="hidden"
          name={name}
          value={values[name] ?? ""}
        />
      ))}
    </>
  );
}
