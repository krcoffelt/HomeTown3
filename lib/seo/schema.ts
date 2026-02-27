import { site } from "@/data/site";
import { faqs } from "@/data/faqs";

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: site.name,
    description: site.description,
    areaServed: "Kansas City, Missouri",
    telephone: site.contactPhone,
    email: site.contactEmail,
    url: site.url
  };
}

export function faqSchema(page: "home" | "pricing") {
  const items = faqs.filter((item) => item.page === page);
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };
}

