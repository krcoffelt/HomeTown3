import { ContactCta } from "@/components/sections/contact-cta";
import { StructuredData } from "@/components/seo/structured-data";
import { FeaturedWork } from "@/components/sections/featured-work";
import { FAQSection } from "@/components/sections/faq-section";
import { HomeHero } from "@/components/sections/home-hero";
import { HomeSteps } from "@/components/sections/home-steps";
import { PricingPreview } from "@/components/sections/pricing-preview";
import { ServicesPreview } from "@/components/sections/services-preview";
import { SocialProofStrip } from "@/components/sections/social-proof-strip";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { WhyHometown } from "@/components/sections/why-hometown";
import { PageTransition } from "@/components/ui/page-transition";
import { createPageMetadata } from "@/lib/seo/metadata";
import { faqSchema, webPageSchema } from "@/lib/seo/schema";

export const metadata = createPageMetadata(
  "Kansas City Marketing Agency for Small Businesses",
  "Kansas City websites and marketing for small businesses. Custom websites starting at $800, local SEO, Google Ads, social media, and design.",
  "/"
);

export default function HomePage() {
  const schema = [
    webPageSchema({
      name: "Hometown Marketing Agency",
      description: "Affordable websites and marketing for Kansas City small businesses.",
      path: "/"
    }),
    faqSchema("home")
  ];

  return (
    <PageTransition>
      <StructuredData data={schema} />
      <HomeHero />
      <SocialProofStrip />
      <WhyHometown />
      <HomeSteps />
      <ServicesPreview />
      <FeaturedWork />
      <TestimonialsSection />
      <PricingPreview />
      <FAQSection page="home" />
      <ContactCta />
    </PageTransition>
  );
}
