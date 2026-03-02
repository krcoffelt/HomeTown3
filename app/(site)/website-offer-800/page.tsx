import type { Metadata } from "next";
import { OfferPageTracker } from "@/components/analytics/offer-page-tracker";
import { SectionShell } from "@/components/layout/section-shell";
import { OfferLeadForm } from "@/components/sections/offer-lead-form";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
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
      <SectionShell className="relative overflow-hidden pb-10 pt-16 md:pt-24">
        <div className="mx-auto max-w-5xl">
          <p className="section-eyebrow text-[#9bb6ff]">Limited Offer</p>
          <h1 className="mt-5 text-balance text-[clamp(2.4rem,7vw,5.6rem)] font-semibold leading-[0.94] tracking-tight text-white">
            Kansas City service business website in ~14 days.
            <span className="block text-[#9bb6ff]">Now only $800.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
            Built for local service businesses that need a stronger first impression
            and more qualified leads without waiting months.
          </p>
          <ul className="mt-6 grid max-w-3xl gap-2 text-sm text-white/85 md:grid-cols-3">
            <li className="rounded-md border border-white/20 bg-white/6 px-3 py-2">What&apos;s included: custom design + mobile optimization + lead form</li>
            <li className="rounded-md border border-white/20 bg-white/6 px-3 py-2">What&apos;s not: paid ads management or long-term SEO retainers</li>
            <li className="rounded-md border border-white/20 bg-white/6 px-3 py-2">Turnaround: most projects launch in about 14 days</li>
          </ul>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button href="#claim-form" dataAnalytics="cta-offer-800">
              Claim My $800 Website
            </Button>
            <p className="section-eyebrow text-white/70">Takes 2 minutes</p>
          </div>
        </div>
      </SectionShell>

      <SectionShell className="pt-2">
        <div className="grid gap-4 md:grid-cols-3">
          <Card className="bg-surface">
            <p className="section-eyebrow text-muted">Proof</p>
            <p className="mt-4 text-lg text-text">10+ sites launched</p>
          </Card>
          <Card className="bg-surface">
            <p className="section-eyebrow text-muted">Local</p>
            <p className="mt-4 text-lg text-text">Kansas City-based</p>
          </Card>
          <Card className="bg-surface">
            <p className="section-eyebrow text-muted">Response Time</p>
            <p className="mt-4 text-lg text-text">Average response in less than 24 hours</p>
          </Card>
        </div>
      </SectionShell>

      <SectionShell className="pt-4">
        <div className="grid gap-4 md:grid-cols-2">
          <Card className="bg-surface">
            <p className="section-eyebrow text-muted">Client Story</p>
            <p className="mt-4 text-lg text-text">&quot;Clear process and easy communication. The site made us look way more established.&quot;</p>
            <p className="mt-3 text-sm text-muted">Christine Lesinger, LupiDocs</p>
          </Card>
          <Card className="bg-surface">
            <p className="section-eyebrow text-muted">Client Story</p>
            <p className="mt-4 text-lg text-text">&quot;The new site gave us a premium online presence that finally matches the quality of our business.&quot;</p>
            <p className="mt-3 text-sm text-muted">Jose Valdez and Christian Joseph, Plate Italiano Moderno</p>
          </Card>
        </div>
      </SectionShell>

      <SectionShell className="pt-4">
        <div className="grid gap-4 md:grid-cols-3">
          <Card className="bg-surface">
            <p className="section-eyebrow text-muted">Offer Price</p>
            <p className="mt-4 text-lg text-text">$800 this month</p>
          </Card>
          <Card className="bg-surface">
            <p className="section-eyebrow text-muted">Regular Price</p>
            <p className="mt-4 text-lg text-text">$1,000</p>
          </Card>
          <Card className="bg-surface">
            <p className="section-eyebrow text-muted">You Save</p>
            <p className="mt-4 text-lg text-text">Save $200 this month</p>
          </Card>
        </div>
        <div className="mt-8">
          <Button href="#claim-form" dataAnalytics="cta-offer-800">
            Claim My $800 Website
          </Button>
        </div>
      </SectionShell>

      <SectionShell className="pt-4">
        <div id="claim-form" className="scroll-mt-28" />
        <div className="mb-10 max-w-3xl">
          <p className="section-eyebrow text-muted">Start Here</p>
          <h2 className="mt-4 text-[clamp(2rem,5vw,3.6rem)] font-semibold leading-[0.96] tracking-tight text-ink">
            Tell us about your business and claim the $800 offer
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            2-step form. No pressure. Takes 2 minutes.
          </p>
        </div>
        <OfferLeadForm />
        <div className="mt-6 rounded-md border border-line bg-surface p-4">
          <p className="text-sm text-muted">Prefer to talk first?</p>
          <p className="mt-2 text-base text-text">
            Call{" "}
            <a href={`tel:${site.contactPhone}`} data-analytics="phone_click" className="underline underline-offset-4">
              {site.contactPhone}
            </a>{" "}
            or email{" "}
            <a href={`mailto:${site.contactEmail}`} data-analytics="email_click" className="underline underline-offset-4">
              {site.contactEmail}
            </a>
            .
          </p>
        </div>
      </SectionShell>

      <SectionShell className="pt-4">
        <Card className="bg-surface">
          <p className="section-eyebrow text-muted">Guarantee</p>
          <h3 className="mt-4 text-2xl font-semibold tracking-tight text-ink">If you are not fully satisfied, no payment.</h3>
          <p className="mt-3 max-w-3xl text-lg text-muted">
            We keep the process straightforward and transparent. If the direction
            is not right, you can walk away before payment.
          </p>
        </Card>
        <div className="mt-8">
          <Button href="#claim-form" dataAnalytics="cta-offer-800">
            Claim My $800 Website
          </Button>
        </div>
      </SectionShell>
    </>
  );
}
