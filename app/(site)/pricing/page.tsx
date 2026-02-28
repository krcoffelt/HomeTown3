import { PageHero } from "@/components/layout/page-hero";
import { SectionShell } from "@/components/layout/section-shell";
import { FAQSection } from "@/components/sections/faq-section";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
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
      <SectionShell className="pb-10 pt-16 md:pt-24">
        <PageHero
          eyebrow="Pricing"
          title={
            <>
              Simple website pricing for Kansas City{" "}
              <span className="serif italic font-normal">small businesses</span>
            </>
          }
          subtitle="Straightforward packages with no agency complexity."
        />
      </SectionShell>
      <SectionShell className="pt-6">
        <div className="grid gap-4 md:grid-cols-3">
          <Card className="md:col-span-2 bg-canvas text-[#0f1219]">
            <h2 className="text-3xl font-medium text-black">Hometown Website Package</h2>
            <p className="mt-4 text-6xl font-semibold tracking-tight text-black">$800</p>
            <p className="mt-1 text-lg text-black/65">This month (Regularly $999)</p>
            <ul className="mt-6 space-y-2 text-base text-black/85">
              <li>Custom homepage and key service pages</li>
              <li>Responsive build for desktop and mobile</li>
              <li>Conversion-focused section structure</li>
              <li>Contact form lead capture setup</li>
            </ul>
          </Card>
          <Card className="bg-surface">
            <h3 className="text-2xl font-medium text-ink">Add-ons</h3>
            <ul className="mt-5 space-y-3 text-text">
              <li>Google Business Profile Setup - $250</li>
              <li>Logo Design + Mini Brand Kit - $250</li>
              <li>Social Media Management - $499/month</li>
            </ul>
          </Card>
        </div>
      </SectionShell>
      <FAQSection page="pricing" />
      <SectionShell className="pt-6">
        <Card className="flex items-center justify-between gap-4">
          <p className="text-lg text-text">
            Ready to launch your new site and start with Hometown Marketing
            Agency?
          </p>
          <Button href="/contact#form">Get Started</Button>
        </Card>
      </SectionShell>
    </>
  );
}
