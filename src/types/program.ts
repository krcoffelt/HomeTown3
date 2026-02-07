export interface Program {
  slug: string;
  title: string;
  subtitle: string;
  href: string;
  overview?: string;
  duration?: string;
  investment?: string;
  idealFor?: string[];
  deliverables?: string[];
  outcomes?: string[];
  ctaLabel?: string;
  featured?: boolean;
  muted?: boolean;
}
