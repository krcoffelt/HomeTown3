import { faqs } from "@/data/faqs";
import { services } from "@/data/services";
import { site } from "@/data/site";
import type { ServiceItem } from "@/types";

function absoluteUrl(path: string) {
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }

  return `${site.url}${path}`;
}

const organizationId = `${site.url}/#organization`;
const localBusinessId = `${site.url}/#localbusiness`;
const websiteId = `${site.url}/#website`;

function contactPointSchema() {
  return {
    "@type": "ContactPoint",
    contactType: "sales",
    areaServed: "Kansas City metro",
    availableLanguage: ["English"],
    email: site.contactEmail,
    telephone: site.contactPhone,
    url: `${site.url}/contact`
  };
}

function maybe<T>(value: T | null | undefined | false) {
  return value ? value : undefined;
}

function priceFromLabel(label: string) {
  const match = label.replaceAll(",", "").match(/\$([0-9]+(?:\.[0-9]+)?)/);
  return match?.[1];
}

const knowsAbout = [
  "Kansas City website design",
  "web design Kansas City",
  "small business website design",
  "local business website design",
  "website redesign",
  "local SEO",
  "SEO agency services",
  "Google Ads management",
  "contractor website design",
  "home services website design",
  "restaurant website design"
];

function areaServedSchema() {
  return site.serviceAreas.map((area) => ({
    "@type": "AdministrativeArea",
    name: area
  }));
}

function offerCatalogSchema() {
  return {
    "@type": "OfferCatalog",
    name: "Hometown Marketing Agency services",
    itemListElement: services.map((service) => {
      const serviceUrl = `${site.url}/services/${service.slug}`;
      const startingPrice = priceFromLabel(service.price);

      return {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          serviceType: service.title,
          url: serviceUrl
        },
        price: maybe(startingPrice),
        priceCurrency: maybe(startingPrice ? "USD" : undefined),
        url: serviceUrl,
        description: service.price
      };
    })
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": organizationId,
    name: site.brand.fullName,
    alternateName: site.brand.shortName,
    url: site.url,
    description: site.description,
    email: site.contactEmail,
    telephone: site.contactPhone,
    logo: absoluteUrl(site.brand.visibleLogo),
    image: absoluteUrl(site.brand.socialImage),
    areaServed: areaServedSchema(),
    knowsAbout,
    hasOfferCatalog: offerCatalogSchema(),
    contactPoint: [contactPointSchema()],
    sameAs: maybe(site.sameAs.length ? site.sameAs : undefined)
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": websiteId,
    name: site.brand.fullName,
    alternateName: site.brand.shortName,
    url: site.url,
    description: site.description,
    publisher: {
      "@id": organizationId
    }
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": localBusinessId,
    name: site.brand.fullName,
    alternateName: site.brand.shortName,
    description: site.description,
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
    url: site.url,
    priceRange: "$$",
    image: absoluteUrl(site.brand.socialImage),
    logo: absoluteUrl(site.brand.visibleLogo),
    contactPoint: [contactPointSchema()],
    areaServed: areaServedSchema(),
    knowsAbout,
    hasOfferCatalog: offerCatalogSchema(),
    sameAs: maybe(site.sameAs.length ? site.sameAs : undefined),
    geo: maybe(
      site.geo && {
        "@type": "GeoCoordinates",
        latitude: site.geo.latitude,
        longitude: site.geo.longitude
      }
    ),
    parentOrganization: {
      "@id": organizationId
    }
  };
}

export function faqSchema(page: "home" | "pricing") {
  const items = faqs.filter((item) => item.page === page);
  return faqItemsSchema(items);
}

export function faqItemsSchema(items: Array<{ question: string; answer: string }>) {
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

export function webPageSchema({
  name,
  description,
  path
}: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${absoluteUrl(path)}#webpage`,
    url: absoluteUrl(path),
    name,
    description,
    isPartOf: {
      "@id": websiteId
    },
    about: {
      "@id": organizationId
    }
  };
}

export function blogPostingSchema({
  headline,
  description,
  path,
  datePublished,
  dateModified,
  image
}: {
  headline: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
}) {
  const url = absoluteUrl(path);

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline,
    description,
    url,
    datePublished,
    dateModified: dateModified ?? datePublished,
    image: maybe(image ? absoluteUrl(image) : undefined),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${url}#webpage`
    },
    author: {
      "@id": organizationId
    },
    publisher: {
      "@id": organizationId
    }
  };
}

export function creativeWorkSchema({
  name,
  description,
  path,
  image,
  dateModified,
  about
}: {
  name: string;
  description: string;
  path: string;
  image: string;
  dateModified?: string;
  about?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name,
    description,
    url: absoluteUrl(path),
    image: absoluteUrl(image),
    dateModified: maybe(dateModified),
    about: maybe(about),
    creator: {
      "@id": organizationId
    },
    publisher: {
      "@id": organizationId
    }
  };
}

export function breadcrumbSchema(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path)
    }))
  };
}

export function serviceSchema(service: ServiceItem) {
  const serviceUrl = `${site.url}/services/${service.slug}`;
  const startingPrice = priceFromLabel(service.price);

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${serviceUrl}#service`,
    name: service.title,
    description: service.seoDescription ?? service.description,
    serviceType: service.title,
    url: serviceUrl,
    areaServed: site.serviceAreas.map((area) => ({
      "@type": "AdministrativeArea",
      name: area
    })),
    provider: {
      "@id": localBusinessId
    },
    offers: {
      "@type": "Offer",
      price: maybe(startingPrice),
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: serviceUrl,
      description: service.price
    }
  };
}

export function websiteOfferSchema() {
  const offerUrl = `${site.url}/website-offer-800`;

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${offerUrl}#offer`,
    name: "Professional Small Business Websites for $800",
    serviceType: "Small Business Website Design",
    description:
      "A flat-rate website package for small businesses that need a clean, credible, lead-focused website fast.",
    url: offerUrl,
    areaServed: site.serviceAreas.map((area) => ({
      "@type": "AdministrativeArea",
      name: area
    })),
    provider: {
      "@id": localBusinessId
    },
    offers: {
      "@type": "Offer",
      price: "800",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: offerUrl,
      category: "Website Design",
      description: "Custom multi-page small business website package."
    }
  };
}
