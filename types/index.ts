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
  liveUrl?: string;
  quote?: string;
}

export interface ServiceItem {
  title: string;
  slug: string;
  price: string;
  shortDescription: string;
  description: string;
  features: string[];
  deliverables: string[];
  idealFor: string[];
  process: string[];
  metaTags: string[];
}
