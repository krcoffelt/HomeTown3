import { NavigationItem } from '@/types/navigation';

export const primaryNavigation: NavigationItem[] = [
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Programs', href: '/programs' },
  { label: 'Arts & Culture', href: '/arts-culture' },
  { label: 'Contact', href: '/contact' },
];

export const secondaryNavigation: NavigationItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Programs', href: '/programs' },
  { label: 'Arts & Culture', href: '/arts-culture' },
  { label: 'Team', href: '/team' },
  { label: 'Careers', href: '/careers' },
  { label: 'Press', href: '/press' },
  { label: 'Contact', href: '/contact' },
];

export const contactInfo = {
  phone: '(816) 555-1910',
  email: 'hello@hometownkc.com',
};

export const legalLinks = [
  { label: 'Privacy Policy', href: '/legal/privacy-policy' },
  { label: 'Terms of Service', href: '/legal/terms-of-service' },
];

export const socialLinks = [
  { label: 'X (Twitter)', href: 'https://x.com/hometown', icon: 'twitter' },
  { label: 'Instagram', href: 'https://www.instagram.com/hometownkc/', icon: 'instagram' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/hometownkc/', icon: 'linkedin' },
];
