import { PageHero } from "@/components/layout/page-hero";
import { SectionShell } from "@/components/layout/section-shell";
import { FAQSection } from "@/components/sections/faq-section";
import { Button } from "@/components/ui/button";
import { createPageMetadata } from "@/lib/seo/metadata";
import { faqSchema } from "@/lib/seo/schema";

export const metadata = createPageMetadata(
  "Website Pricing for Kansas City Small Businesses | Hometown Marketing Agency",
  "Transparent website package pricing and add-ons from Hometown Marketing Agency for Kansas City service businesses.",
  "/pricing"
);

export default function PricingPage() {
  const schema = faqSchema("pricing");
  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <SectionShell className="pb-8 pt-16 md:pt-24">
        <PageHero
          eyebrow="Pricing"
          title={
            <>
              Simple website pricing for Kansas City{" "}
              <span className="serif italic font-normal">small businesses</span>
            </>
          }
          subtitle="Clear pricing with no agency complexity."
        />
      </SectionShell>

      <SectionShell className="pt-4">
        <div className="surface-primary px-7 py-7 md:px-10 md:py-9">
          <p className="kicker">Website Design</p>
          <div className="mt-3 flex flex-wrap items-end gap-4">
            <p className="text-6xl font-semibold tracking-tight text-white">$800</p>
            <p className="mb-2 text-lg text-white/70 line-through">$1,000</p>
          </div>
          <p className="mt-5 max-w-3xl text-lg text-white/82">
            Custom multi-page website, mobile-first build, lead-focused structure,
            and contact form setup.
          </p>
        </div>
      </SectionShell>

      <SectionShell className="pt-4">
        <div className="surface-secondary px-7 py-3 md:px-10">
          <div className="service-row">
            <h3 className="text-[clamp(1.2rem,2.3vw,1.65rem)] font-medium text-white">Google Business Profile Setup</h3>
            <p className="text-white/78">$250</p>
          </div>
          <div className="service-row">
            <h3 className="text-[clamp(1.2rem,2.3vw,1.65rem)] font-medium text-white">Logo Design + Mini Brand Kit</h3>
            <p className="text-white/78">$250</p>
          </div>
          <div className="service-row">
            <h3 className="text-[clamp(1.2rem,2.3vw,1.65rem)] font-medium text-white">Social Media Management</h3>
            <p className="text-white/78">$499/month</p>
          </div>
        </div>
      </SectionShell>

      <FAQSection page="pricing" />

      <SectionShell className="pt-6">
        <div className="surface-plain flex flex-col items-start justify-between gap-5 px-7 py-7 md:flex-row md:items-center md:px-10">
          <p className="max-w-2xl text-lg text-white/84">
            Ready to launch your new site and start with Hometown Marketing Agency?
          </p>
          <Button href="/contact#form">Get Started</Button>
        </div>
      </SectionShell>
    </>
  );
}
