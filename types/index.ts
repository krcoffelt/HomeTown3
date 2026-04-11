export type LeadStatus = "new" | "contacted" | "quoted" | "won" | "lost";

export interface ProjectItem {
  id?: string;
  title: string;
  slug: string;
  clientName: string;
  industry: string;
  summary: string;
  servicesProvided: string[];
  featuredImageUrl: string;
  liveUrl?: string;
  isFeatured: boolean;
  sortOrder: number;
}

export interface ServiceItem {
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  heroTitle?: string;
  heroSubtitle?: string;
  price?: string;
  isFeatured?: boolean;
  sortOrder?: number;
  deliverables?: string[];
  idealFor?: string[];
  process?: string[];
  faq?: Array<{
    question: string;
    answer: string;
  }>;
}
