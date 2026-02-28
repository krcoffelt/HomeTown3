import type { Metadata } from "next";
import { SectionShell } from "@/components/layout/section-shell";
import { ContactForm } from "@/components/sections/contact-form";
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
      <SectionShell className="relative overflow-hidden pb-10 pt-16 md:pt-24">
        <div className="mx-auto max-w-5xl">
          <p className="section-eyebrow text-[#9bb6ff]">Limited Offer</p>
          <h1 className="mt-5 text-balance text-[clamp(2.4rem,7vw,5.6rem)] font-semibold leading-[0.94] tracking-tight text-white">
            Custom Website Package.
            <span className="block text-[#9bb6ff]">Now Only $800.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
            For Kansas City service businesses that want a premium website that
            looks legit and gets more inquiries.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button href="#claim-form" dataAnalytics="cta-offer-800">
              Claim This Offer
            </Button>
            <p className="section-eyebrow text-white/70">Regular Price $999</p>
          </div>
        </div>
      </SectionShell>

      <SectionShell className="pt-2">
        <div className="grid gap-4 md:grid-cols-3">
          <Card className="bg-surface">
            <p className="section-eyebrow text-muted">What You Get</p>
            <p className="mt-4 text-lg text-text">
              Custom multi-page build, mobile optimization, conversion-focused
              structure, and lead form setup.
            </p>
          </Card>
          <Card className="bg-surface">
            <p className="section-eyebrow text-muted">Who It Is For</p>
            <p className="mt-4 text-lg text-text">
              Local service businesses in Kansas City that need a stronger first
              impression and cleaner lead flow.
            </p>
          </Card>
          <Card className="bg-surface">
            <p className="section-eyebrow text-muted">Timeline</p>
            <p className="mt-4 text-lg text-text">
              Most projects launch in about 2 weeks once content and assets are
              ready.
            </p>
          </Card>
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
            Quick form. No pressure. We will follow up with exact next steps.
          </p>
        </div>
        <ContactForm />
      </SectionShell>
    </>
  );
}
