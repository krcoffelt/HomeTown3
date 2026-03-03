import type { Metadata } from "next";
import { OfferPageTracker } from "@/components/analytics/offer-page-tracker";
import { SectionShell } from "@/components/layout/section-shell";
import { OfferLeadForm } from "@/components/sections/offer-lead-form";
import { Button } from "@/components/ui/button";
import { site } from "@/data/site";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = {
  ...createPageMetadata(
    "Kansas City Website Offer | Now Only $800",
    "Limited-time $800 custom website offer for Kansas City service businesses.",
    "/website-offer-800",
    site.brand.shortName
  ),
  robots: {
    index: false,
    follow: false
  }
};

export default function WebsiteOfferLandingPage() {
  return (
    <>
      <OfferPageTracker />

      <SectionShell className="pb-6 pt-14 md:pb-8 md:pt-20">
        <div className="mx-auto max-w-6xl">
          <p className="kicker">Start Here</p>
          <h1 className="mt-4 max-w-5xl text-balance text-[clamp(2.5rem,7vw,5.6rem)] font-semibold leading-[0.95] tracking-tight text-white">
            We will build you a custom website for only $800.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/80">
            Satisfaction guaranteed.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button href="#claim-form" dataAnalytics="cta-offer-800">
              Claim My $800 Website
            </Button>
            <p className="section-eyebrow text-white/72">Takes 2 minutes</p>
          </div>
        </div>
      </SectionShell>

      <SectionShell className="pt-2">
        <div id="claim-form" className="scroll-mt-28" />
        <div className="mx-auto max-w-6xl">
          <OfferLeadForm />
          <div className="mt-5 text-center">
            <p className="text-sm text-white/70">
              Prefer to talk first?{" "}
              <a href={`tel:${site.contactPhone}`} data-analytics="phone_click" className="text-white underline underline-offset-4">
                {site.contactPhone}
              </a>{" "}
              or{" "}
              <a href={`mailto:${site.contactEmail}`} data-analytics="email_click" className="text-white underline underline-offset-4">
                email us
              </a>
              .
            </p>
          </div>
        </div>
      </SectionShell>
    </>
  );
}
