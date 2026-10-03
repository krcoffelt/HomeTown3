import { ContactCta } from "@/components/sections/contact-cta";
import { FAQSection } from "@/components/sections/faq-section";
import { HomeHero } from "@/components/sections/home-hero";
import { Manifesto } from "@/components/sections/home/manifesto";
import { Process } from "@/components/sections/home/process";
import { ProofBand } from "@/components/sections/home/proof-band";
import { Reviews } from "@/components/sections/home/reviews";
import { SelectedWork } from "@/components/sections/home/selected-work";
import { ServicesList } from "@/components/sections/home/services-list";
import { StructuredData } from "@/components/seo/structured-data";
import { PageTransition } from "@/components/ui/page-transition";
import { createPageMetadata } from "@/lib/seo/metadata";
import { faqSchema, webPageSchema } from "@/lib/seo/schema";

export const metadata = createPageMetadata(
  "Kansas City Marketing Agency for Real Leads",
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
      <ProofBand />
      <Manifesto />
      <SelectedWork />
      <ServicesList />
      <Process />
      <Reviews />
      <FAQSection page="home" ctaHref="#form" />
      <ContactCta />
    </PageTransition>
  );
}
