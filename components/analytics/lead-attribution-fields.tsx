"use client";

import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
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
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [mounted, setMounted] = useState(false);
  const [values, setValues] = useState<LeadAttributionFields>(emptyValues);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const stored = readStoredAttribution();
    const queryString = searchParams.toString();
    const currentLandingPage = `${pathname}${queryString ? `?${queryString}` : ""}`;
    const currentValues: LeadAttributionFields = {
      landingPage: currentLandingPage,
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
  }, [mounted, pathname, searchParams]);

  if (!mounted) {
    return null;
  }

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
