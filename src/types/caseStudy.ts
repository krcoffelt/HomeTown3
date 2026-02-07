export interface CaseStudy {
  slug: string;
  title: string;
  client?: string;
  industry?: string;
  year?: string;
  location: string;
  summary: string;
  challenge?: string;
  approach?: string[];
  results?: string[];
  image: string;
  href: string;
  layout?: 'wide' | 'tall';
}
