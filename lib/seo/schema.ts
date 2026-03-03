import { site } from "@/data/site";
import { faqs } from "@/data/faqs";

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: site.brand.fullName,
    alternateName: site.brand.shortName,
    description: site.description,
    areaServed: "Kansas City, Missouri",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.streetAddress,
      addressLocality: site.address.addressLocality,
      addressRegion: site.address.addressRegion,
      postalCode: site.address.postalCode,
      addressCountry: site.address.addressCountry
    },
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
