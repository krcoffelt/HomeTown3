import { HomeHero } from "@/components/sections/home-hero";
import { SocialProofStrip } from "@/components/sections/social-proof-strip";
import { WhyHometown } from "@/components/sections/why-hometown";
import { ServicesPreview } from "@/components/sections/services-preview";
import { FeaturedWork } from "@/components/sections/featured-work";
import { PricingPreview } from "@/components/sections/pricing-preview";
import { FAQSection } from "@/components/sections/faq-section";
import { ContactCta } from "@/components/sections/contact-cta";
import { HomepageParallaxBackground } from "@/components/sections/homepage-parallax-background";
import { createPageMetadata } from "@/lib/seo/metadata";
import { faqSchema } from "@/lib/seo/schema";

export const metadata = createPageMetadata(
  "Hometown Marketing Agency | Websites, Branding, Social and Local Marketing",
  "Marketing support for Kansas City businesses including websites, branding, social media, and local visibility services.",
  "/"
);

export default function HomePage() {
  const schema = faqSchema("home");
  return (
    <div className="relative isolate">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <HomepageParallaxBackground />
      <div className="relative z-10">
        <HomeHero />
        <SocialProofStrip />
        <WhyHometown />
        <ServicesPreview />
        <FeaturedWork />
        <PricingPreview />
        <FAQSection page="home" />
        <ContactCta />
      </div>
    </div>
  );
}
