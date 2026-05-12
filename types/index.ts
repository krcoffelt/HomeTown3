export type LeadStatus = "new" | "contacted" | "quoted" | "won" | "lost";

export type ProjectCategory = "Restaurant" | "Music" | "Publishing" | "Home Services";

export interface ProjectItem {
  title: string;
  slug: string;
  clientName: string;
  category: ProjectCategory;
  summary: string;
  description: string;
  servicesProvided: string[];
  featuredImageUrl: string;
  imageAlt: string;
  city?: string;
  problem?: string;
  solution?: string;
  result?: string;
  liveUrl?: string;
  quote?: string;
  updatedAt?: string;
}

export interface ServiceItem {
  title: string;
  slug: string;
  price: string;
  seoTitle?: string;
  heroTitle?: string;
  heroBadge?: string;
  shortDescription: string;
  description: string;
  seoDescription?: string;
  features: string[];
  deliverables: string[];
  idealFor: string[];
  process: string[];
  metaTags: string[];
  proofProjectSlugs?: string[];
  detailSections?: Array<{
    eyebrow: string;
    title: string;
    body: string;
    items?: string[];
  }>;
  faqItems?: Array<{
    question: string;
    answer: string;
  }>;
  relatedLinks?: Array<{
    label: string;
    href: string;
  }>;
  updatedAt?: string;
}

export interface LocationItem {
  title: string;
  slug: string;
  city: string;
  state: string;
  heroTitle: string;
  heroDescription: string;
  seoTitle: string;
  seoDescription: string;
  introTitle: string;
  introDescription: string;
  localAngle: string;
  whyTitle: string;
  whyDescription: string;
  trustHighlights: string[];
  whyPoints: string[];
  seoSections?: Array<{
    eyebrow: string;
    title: string;
    body: string;
    items: string[];
  }>;
  priorityServices: string[];
  faqItems: Array<{
    question: string;
    answer: string;
  }>;
  relatedProjectSlugs: string[];
  ctaLabel: string;
  updatedAt?: string;
}

export interface IndustryItem {
  title: string;
  slug: string;
  seoTitle: string;
  seoDescription: string;
  heroTitle: string;
  heroDescription: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  proofProjectSlugs: string[];
  sections: Array<{
    eyebrow: string;
    title: string;
    body: string;
    items: string[];
  }>;
  faqItems: Array<{
    question: string;
    answer: string;
  }>;
  updatedAt?: string;
}
