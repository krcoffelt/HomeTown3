import { FAQSection } from "@/components/sections/faq-section";
import { PageHero } from "@/components/layout/page-hero";
import { PricingSection } from "@/components/sections/pricing-section";
import { StructuredData } from "@/components/seo/structured-data";
import { PageTransition } from "@/components/ui/page-transition";
import { createPageMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema, faqSchema, webPageSchema } from "@/lib/seo/schema";

export const metadata = createPageMetadata(
  "Transparent pricing. No surprise invoices.",
  "Website package pricing and supporting marketing services for Kansas City small businesses.",
  "/pricing"
);

export default function PricingPage() {
  const schema = [
    webPageSchema({
      name: "Pricing",
      description: "Website package pricing and supporting marketing services for Kansas City small businesses.",
      path: "/pricing"
    }),
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Pricing", path: "/pricing" }
    ]),
    faqSchema("pricing")
  ];
  return (
    <PageTransition>
      <StructuredData data={schema} />
      <section className="noise bg-gradient-dark pt-32 pb-20 text-primary-foreground md:pt-40 md:pb-28">
        <div className="site-container">
          <PageHero
            badge="Pricing"
            title="Simple pricing. Clear next steps."
            subtitle="Start with the website. Add the marketing support that makes sense for your business after that."
            light
          />
        </div>
      </section>

      <PricingSection showIntro={false} />

      <FAQSection page="pricing" />
    </PageTransition>
  );
}
