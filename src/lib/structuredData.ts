import { siteConfig } from '@/lib/seo';

type FaqItem = {
  question: string;
  answer: string;
};

type BreadcrumbItem = {
  name: string;
  url: string;
};

const withAbsoluteUrl = (path: string): string =>
  path.startsWith('http://') || path.startsWith('https://')
    ? path
    : `${siteConfig.url}${path.startsWith('/') ? path : `/${path}`}`;

export function buildProfessionalServiceSchema(overrides?: {
  pagePath?: string;
  areaServed?: string[];
  description?: string;
}) {
  const targetUrl = withAbsoluteUrl(overrides?.pagePath ?? '/');

  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: siteConfig.name,
    url: siteConfig.url,
    sameAs: [
      'https://x.com/hometown',
      'https://www.linkedin.com/company/hometownkc/',
      'https://www.instagram.com/hometownkc/',
    ],
    description: overrides?.description ?? siteConfig.description,
    telephone: siteConfig.phoneE164,
    email: siteConfig.email,
    areaServed: (overrides?.areaServed ?? siteConfig.serviceAreas).map((area) => ({
      '@type': 'City',
      name: area,
    })),
    serviceType: ['Website Setup', 'Social Media Management', 'Logo Design'],
    makesOffer: {
      '@type': 'Offer',
      name: siteConfig.primaryOffer,
      priceCurrency: 'USD',
      price: '800',
      url: targetUrl,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'sales',
      telephone: siteConfig.phoneE164,
      email: siteConfig.email,
      areaServed: 'Kansas City Metro',
      availableLanguage: 'English',
    },
  };
}

export function buildWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteConfig.url,
    inLanguage: 'en-US',
    potentialAction: {
      '@type': 'ContactAction',
      target: withAbsoluteUrl('/contact'),
      name: 'Start My Website',
    },
  };
}

export function buildFaqSchema(faqItems: FaqItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

export function buildBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: withAbsoluteUrl(item.url),
    })),
  };
}
