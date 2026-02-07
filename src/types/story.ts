export interface Story {
  slug: string;
  label: string;
  title: string;
  href: string;
  image?: string;
  excerpt?: string;
  publishedOn?: string;
  readTime?: string;
  location?: string;
  body?: string[];
  highlights?: string[];
}
