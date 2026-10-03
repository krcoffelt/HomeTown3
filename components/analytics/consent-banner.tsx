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
      className="fixed inset-x-3 bottom-3 z-50 rounded-[1.25rem] border border-foreground/10 bg-card p-5 shadow-[0_30px_80px_-30px_rgb(0_0_0/0.45)] sm:inset-x-auto sm:bottom-5 sm:right-5 sm:max-w-md sm:p-6"
    >
      <p className="mono-label text-muted-foreground">Cookies</p>
      <p className="mt-3 text-base font-medium tracking-[-0.01em] text-foreground">Help us improve Hometown&apos;s website</p>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        We use optional analytics and advertising tools to understand website performance. The site and contact
        forms work if you decline. Read our <Link href="/cookie-policy" className="underline">Cookie Policy</Link>.
      </p>
      <div className="mt-5 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
        <button
          type="button"
          className="rounded-full border border-foreground/15 px-5 py-2.5 text-sm font-medium text-foreground transition hover:border-foreground"
          onClick={() => chooseConsent("denied")}
        >
          Decline optional tools
        </button>
        <button
          type="button"
          className="rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:bg-accent"
          onClick={() => chooseConsent("granted")}
        >
          Accept analytics
        </button>
      </div>
    </aside>
  );
}
