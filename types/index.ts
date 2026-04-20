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
  liveUrl?: string;
  quote?: string;
  updatedAt?: string;
}

export interface ServiceItem {
  title: string;
  slug: string;
  price: string;
  shortDescription: string;
  description: string;
  seoDescription?: string;
  features: string[];
  deliverables: string[];
  idealFor: string[];
  process: string[];
  metaTags: string[];
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
  priorityServices: string[];
  faqItems: Array<{
    question: string;
    answer: string;
  }>;
  relatedProjectSlugs: string[];
  ctaLabel: string;
  updatedAt?: string;
}
