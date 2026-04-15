import { ContactCta } from "@/components/sections/contact-cta";
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
import { faqSchema } from "@/lib/seo/schema";

export const metadata = createPageMetadata(
  "Hometown Marketing Agency — Affordable Websites & Marketing for Kansas City Small Businesses",
  "Kansas City's go-to marketing partner for small businesses. Custom websites starting at $800, social media management, Google Ads, and more.",
  "/"
);

export default function HomePage() {
  const schema = faqSchema("home");

  return (
    <PageTransition>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <HomeHero />
      <SocialProofStrip />
      <WhyHometown />
      <HomeSteps />
      <ServicesPreview />
      <TestimonialsSection />
      <PricingPreview />
      <FAQSection page="home" />
      <ContactCta />
    </PageTransition>
  );
}
