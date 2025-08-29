import { NavigationItem } from '@/types/navigation';

export const primaryNavigation: NavigationItem[] = [
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects', count: '27' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export const secondaryNavigation: NavigationItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export const contactInfo = {
  phone: '(312) 555-2468',
  email: 'hello@hometown.com',
};

export const legalLinks = [
  { label: 'Privacy Policy', href: '/legal/privacy-policy' },
  { label: 'Terms of Service', href: '/legal/terms-of-service' },
];

export const socialLinks = [
  { label: 'Twitter', href: 'https://twitter.com/hometown', icon: 'twitter' },
  { label: 'Instagram', href: 'https://instagram.com/hometown', icon: 'instagram' },
  { label: 'Dribbble', href: 'https://dribbble.com/hometown', icon: 'dribbble' },
];
