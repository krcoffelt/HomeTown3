import { HomeHero } from "@/components/sections/home-hero";
import { SocialProofStrip } from "@/components/sections/social-proof-strip";
import { WhyHometown } from "@/components/sections/why-hometown";
import { ServicesPreview } from "@/components/sections/services-preview";
import { FeaturedWork } from "@/components/sections/featured-work";
import { PricingPreview } from "@/components/sections/pricing-preview";
import { FAQSection } from "@/components/sections/faq-section";
import { ContactCta } from "@/components/sections/contact-cta";
import { createPageMetadata } from "@/lib/seo/metadata";
import { faqSchema } from "@/lib/seo/schema";

export const metadata = createPageMetadata(
  "Hometown Marketing Agency | Affordable Website Design for Kansas City Businesses",
  "Custom, premium-looking websites for Kansas City service businesses that want more leads.",
  "/"
);

export default function HomePage() {
  const schema = faqSchema("home");
  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <HomeHero />
      <SocialProofStrip />
      <WhyHometown />
      <ServicesPreview />
      <FeaturedWork />
      <PricingPreview />
      <FAQSection page="home" />
      <ContactCta />
    </>
  );
}
