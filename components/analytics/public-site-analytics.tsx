"use client";

import { usePathname } from "next/navigation";
import { GtmLoader } from "./gtm-loader";
import { ConsentBanner } from "./consent-banner";

export function PublicSiteAnalytics({ gtmId, googleAdsId }: { gtmId?: string; googleAdsId?: string }) {
  const pathname = usePathname();
  // Private intake answers should not be observed by marketing tags on direct visits.
  if (pathname.startsWith("/intake/")) return null;
  return <><GtmLoader gtmId={gtmId} googleAdsId={googleAdsId} /><ConsentBanner /></>;
}
