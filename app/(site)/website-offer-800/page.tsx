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

      <SectionShell className="pb-8 pt-16 md:pt-24">
        <div className="mx-auto max-w-5xl">
          <p className="kicker">Limited Offer</p>
          <h1 className="mt-5 editorial-display max-w-4xl">
            Get your Website for only $800
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/80">
            Built for local service businesses that need a stronger first impression
            and more qualified leads without waiting months.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button href="#claim-form" dataAnalytics="cta-offer-800">
              Claim My $800 Website
            </Button>
            <p className="section-eyebrow text-white/75">Takes 2 minutes</p>
          </div>
        </div>
      </SectionShell>

      <SectionShell className="pt-4">
        <div className="surface-primary px-7 py-6 md:px-10">
          <div className="grid gap-6 md:grid-cols-3 md:gap-8">
            <div>
              <p className="kicker">Proof</p>
              <p className="mt-3 text-xl font-medium text-white">10+ websites launched</p>
            </div>
            <div>
              <p className="kicker">Local</p>
              <p className="mt-3 text-xl font-medium text-white">Kansas City-based team</p>
            </div>
            <div>
              <p className="kicker">Response Time</p>
              <p className="mt-3 text-xl font-medium text-white">Average response under 24 hours</p>
            </div>
          </div>
        </div>
      </SectionShell>

      <SectionShell className="pt-4">
        <div className="surface-secondary divide-y divide-white/12 px-7 py-3 md:px-10">
          <article className="py-6">
            <p className="kicker">Christine Leninger - LupiDocs</p>
            <p className="mt-3 max-w-4xl text-xl leading-relaxed text-white">
              &ldquo;Clear process and easy communication. The site made us look way more established.&rdquo;
            </p>
            <a
              href="https://lupidocs.com"
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-block text-sm text-[#9bb6ff] underline underline-offset-4"
            >
              lupidocs.com
            </a>
          </article>
          <article className="py-6">
            <p className="kicker">Jose Valdez - Music Artist</p>
            <p className="mt-3 max-w-4xl text-xl leading-relaxed text-white">
              &ldquo;The website finally reflects the music brand and makes it easier for people to discover and reach out.&rdquo;
            </p>
            <a
              href="https://joseisaivaldez.com"
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-block text-sm text-[#9bb6ff] underline underline-offset-4"
            >
              joseisaivaldez.com
            </a>
          </article>
          <article className="py-6">
            <p className="kicker">Christian Joseph - Plate Italiano Moderno</p>
            <p className="mt-3 max-w-4xl text-xl leading-relaxed text-white">
              &ldquo;The new site gave us a premium online presence that finally matches the quality of our business.&rdquo;
            </p>
            <a
              href="https://plateitalianomoderno.com"
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-block text-sm text-[#9bb6ff] underline underline-offset-4"
            >
              plateitalianomoderno.com
            </a>
          </article>
        </div>
      </SectionShell>

      <SectionShell className="pt-4">
        <div className="surface-plain px-7 py-6 md:px-10">
          <div className="grid gap-4 md:grid-cols-3">
            <div>
              <p className="kicker">Offer Price</p>
              <p className="mt-2 text-2xl font-semibold text-[#7da2ff]">$800</p>
            </div>
            <div>
              <p className="kicker">Regular Price</p>
              <p className="mt-2 text-2xl text-white/80 line-through">$1,000</p>
            </div>
            <div>
              <p className="kicker">This Month</p>
              <p className="mt-2 text-2xl font-semibold text-white">Save $200</p>
            </div>
          </div>
          <div className="mt-6">
            <Button href="#claim-form" dataAnalytics="cta-offer-800">
              Claim My $800 Website
            </Button>
          </div>
        </div>
      </SectionShell>

      <SectionShell className="pt-4">
        <div id="claim-form" className="scroll-mt-28" />
        <div className="mb-10 max-w-3xl">
          <p className="kicker">Start Here</p>
          <h2 className="mt-4 text-[clamp(2rem,5vw,3.8rem)] font-semibold leading-[0.97] tracking-tight text-white">
            Tell us about your business and claim the $800 offer
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-white/80">
            Basic form. No pressure. Takes 2 minutes.
          </p>
        </div>
        <OfferLeadForm />
        <div className="mt-6 surface-plain px-6 py-5">
          <p className="text-sm text-white/70">Or give me a call</p>
          <p className="mt-2 text-xl font-semibold text-white">{site.contactPhone}</p>
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
              className="text-sm text-white/75 underline underline-offset-4"
            >
              or email {site.contactEmail}
            </a>
          </div>
        </div>
      </SectionShell>

      <SectionShell className="pt-4">
        <div className="surface-secondary px-7 py-7 md:px-10">
          <p className="kicker">Guarantee</p>
          <h3 className="mt-4 text-3xl font-semibold tracking-tight text-white">
            If you are not fully satisfied, no payment.
          </h3>
          <p className="mt-3 max-w-3xl text-lg text-white/80">
            We keep the process straightforward and transparent. If the direction
            is not right, you can walk away before payment.
          </p>
          <div className="mt-6">
            <Button href="#claim-form" dataAnalytics="cta-offer-800">
              Claim My $800 Website
            </Button>
          </div>
        </div>
      </SectionShell>
    </>
  );
}
