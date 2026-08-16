import { ContactCta } from "@/components/sections/contact-cta";
import { StructuredData } from "@/components/seo/structured-data";
import { FeaturedWork } from "@/components/sections/featured-work";
import { FAQSection } from "@/components/sections/faq-section";
import { HomeHero } from "@/components/sections/home-hero";
import { HomeSteps } from "@/components/sections/home-steps";
import { ServicesPreview } from "@/components/sections/services-preview";
import { SocialProofStrip } from "@/components/sections/social-proof-strip";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { WhyHometown } from "@/components/sections/why-hometown";
import { PageTransition } from "@/components/ui/page-transition";
import { createPageMetadata } from "@/lib/seo/metadata";
import { faqSchema, webPageSchema } from "@/lib/seo/schema";

export const metadata = createPageMetadata(
  "Kansas City Marketing Agency for Small Businesses",
  "Small-business marketing built for real leads: conversion-focused websites, SEO, and Google and Meta ads with clear conversion tracking.",
  "/"
);

export default function HomePage() {
  const schema = [
    webPageSchema({
      name: "Hometown Marketing Agency",
      description: "Websites, SEO, and paid ads for small businesses that want real leads, clear data, and measurable growth.",
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
      <FAQSection page="home" ctaHref="#form" />
      <ContactCta />
    </PageTransition>
  );
}
