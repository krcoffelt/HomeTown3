"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getAnalyticsConsent, setAnalyticsConsent, type AnalyticsConsent } from "@/lib/analytics/consent";

type ConsentState = AnalyticsConsent | "pending";

export function ConsentBanner() {
  const [consent, setConsent] = useState<ConsentState>("pending");

  useEffect(() => {
    setConsent(getAnalyticsConsent() ?? "pending");
  }, []);

  if (consent !== "pending") return null;

  const chooseConsent = (nextConsent: AnalyticsConsent) => {
    setAnalyticsConsent(nextConsent);
    setConsent(nextConsent);
  };

  return (
    <aside
      aria-label="Analytics and advertising consent"
      className="fixed inset-x-3 bottom-3 z-50 rounded-2xl border border-black/10 bg-card p-4 shadow-[var(--shadow-elevated)] sm:inset-x-auto sm:right-5 sm:max-w-lg sm:p-5"
    >
      <p className="text-sm font-semibold text-foreground">Help us improve Hometown&apos;s website</p>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        We use optional analytics and advertising tools to understand website performance. The site and contact
        forms work if you decline. Read our <Link href="/cookie-policy" className="underline">Cookie Policy</Link>.
      </p>
      <div className="mt-4 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
        <button
          type="button"
          className="rounded-xl border border-black/15 px-4 py-2 text-sm font-semibold text-foreground transition hover:bg-secondary"
          onClick={() => chooseConsent("denied")}
        >
          Decline optional tools
        </button>
        <button
          type="button"
          className="rounded-xl bg-foreground px-4 py-2 text-sm font-semibold text-background transition hover:opacity-85"
          onClick={() => chooseConsent("granted")}
        >
          Accept analytics
        </button>
      </div>
    </aside>
  );
}
