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
            Get your Website for only $800
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
            Built for local service businesses that need a stronger first impression
            and more qualified leads without waiting months.
          </p>
          <div className="mt-6 max-w-5xl overflow-hidden rounded-2xl border border-white/18 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02)_38%,rgba(8,14,28,0.7)_100%)] backdrop-blur-sm">
            <div className="grid md:grid-cols-3 md:divide-x md:divide-white/14">
              <div className="px-5 py-4 md:px-6 md:py-5">
                <p className="section-eyebrow text-[#9bb6ff]">What&apos;s Included</p>
                <p className="mt-2 text-base leading-relaxed text-white">
                  Custom design, mobile optimization, and lead form setup.
                </p>
              </div>
              <div className="border-t border-white/10 px-5 py-4 md:border-t-0 md:px-6 md:py-5">
                <p className="section-eyebrow text-[#9bb6ff]">What&apos;s Not</p>
                <p className="mt-2 text-base leading-relaxed text-white">
                  Paid ads management or long-term SEO retainers.
                </p>
              </div>
              <div className="border-t border-white/10 px-5 py-4 md:border-t-0 md:px-6 md:py-5">
                <p className="section-eyebrow text-[#9bb6ff]">Turnaround</p>
                <p className="mt-2 text-base leading-relaxed text-white">
                  Most projects launch in about 14 days.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button href="#claim-form" dataAnalytics="cta-offer-800">
              Claim My $800 Website
            </Button>
            <p className="section-eyebrow text-white/70">Takes 2 minutes</p>
          </div>
        </div>
      </SectionShell>

      <SectionShell className="pt-2">
        <div className="overflow-hidden rounded-2xl border border-white/16 bg-[linear-gradient(155deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02)_36%,rgba(8,14,28,0.82)_100%)] backdrop-blur-sm">
          <div className="grid md:grid-cols-3 md:divide-x md:divide-white/12">
            <div className="px-6 py-6 md:px-8">
              <p className="section-eyebrow text-[#9bb6ff]">Proof</p>
              <p className="mt-3 text-[clamp(1.3rem,2.6vw,1.9rem)] font-medium leading-tight text-white">
                10+ websites launched
              </p>
            </div>
            <div className="border-t border-white/10 px-6 py-6 md:border-t-0 md:px-8">
              <p className="section-eyebrow text-[#9bb6ff]">Local</p>
              <p className="mt-3 text-[clamp(1.3rem,2.6vw,1.9rem)] font-medium leading-tight text-white">
                Kansas City-based team
              </p>
            </div>
            <div className="border-t border-white/10 px-6 py-6 md:border-t-0 md:px-8">
              <p className="section-eyebrow text-[#9bb6ff]">Response Time</p>
              <p className="mt-3 text-[clamp(1.3rem,2.6vw,1.9rem)] font-medium leading-tight text-white">
                Average response under 24 hours
              </p>
            </div>
          </div>
        </div>
      </SectionShell>

      <SectionShell className="pt-4">
        <div className="overflow-hidden rounded-2xl border border-white/16 bg-[linear-gradient(160deg,rgba(255,255,255,0.06),rgba(255,255,255,0.015)_42%,rgba(6,11,23,0.9)_100%)] backdrop-blur-sm">
          <div className="grid md:grid-cols-3 md:divide-x md:divide-white/12">
            <article className="px-6 py-6 md:px-8">
              <p className="section-eyebrow text-[#9bb6ff]">Testimonial</p>
              <p className="mt-4 text-[1.15rem] leading-relaxed text-white">
                &ldquo;Clear process and easy communication. The site made us look
                way more established.&rdquo;
              </p>
              <p className="mt-5 text-sm text-white/75">Christine Lesinger, LibiDoc</p>
            </article>
            <article className="border-t border-white/10 px-6 py-6 md:border-t-0 md:px-8">
              <p className="section-eyebrow text-[#9bb6ff]">Testimonial</p>
              <p className="mt-4 text-[1.15rem] leading-relaxed text-white">
                &ldquo;The new site gave us a premium online presence that finally
                matches the quality of our business.&rdquo;
              </p>
              <p className="mt-5 text-sm text-white/75">
                Christian Joseph, Play Italiano Moderno
              </p>
            </article>
            <article className="border-t border-white/10 px-6 py-6 md:border-t-0 md:px-8">
              <p className="section-eyebrow text-[#9bb6ff]">Testimonial</p>
              <p className="mt-4 text-[1.15rem] leading-relaxed text-white">
                &ldquo;The website finally reflects the music brand and makes it easier
                for people to discover and reach out.&rdquo;
              </p>
              <p className="mt-5 text-sm text-white/75">
                Jose Valdez, Jose Isai Valdez Music
              </p>
            </article>
          </div>
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
            Basic form. No pressure. Takes 2 minutes.
          </p>
        </div>
        <OfferLeadForm />
        <div className="mt-6 rounded-md border border-line bg-surface p-4">
          <p className="text-sm text-muted">Or give me a call</p>
          <p className="mt-2 text-xl font-semibold text-ink">{site.contactPhone}</p>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <a
              href={`tel:${site.contactPhone}`}
              data-analytics="phone_click"
              className="inline-flex items-center justify-center rounded-md bg-accent px-6 py-3 text-[0.98rem] font-medium tracking-[-0.01em] text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#3d67e4]"
            >
              Call Now
            </a>
            <a
              href={`mailto:${site.contactEmail}`}
              data-analytics="email_click"
              className="text-sm text-muted underline underline-offset-4"
            >
              or email {site.contactEmail}
            </a>
          </div>
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
