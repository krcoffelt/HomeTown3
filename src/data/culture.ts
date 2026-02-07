import { CultureFeature } from '@/types/culture';

export const cultureFeatures: CultureFeature[] = [
  {
    slug: 'arts-and-culture',
    title: 'Learning to see-and create.',
    subtitle: 'Stories and collaborations rooted in local culture.',
    href: '/arts-culture',
    ctaLabel: 'Explore',
    description:
      'A rotating editorial series focused on neighborhood creatives, operators, and the shared systems behind local momentum.',
    partner: 'Community-led collaborations',
    season: '2026',
    status: 'Ongoing',
  },
  {
    slug: 'maker-series',
    title: 'Maker Sessions',
    subtitle: 'Behind-the-scenes work sessions with independent makers and business owners.',
    href: '/arts-culture',
    ctaLabel: 'Read stories',
    description:
      'A monthly feature format documenting process, craft, and what creative operators need to sustain consistent growth.',
    partner: 'River Market + West Bottoms',
    season: 'Spring 2026',
    status: 'Upcoming',
  },
  {
    slug: 'district-spotlight',
    title: 'District Spotlights',
    subtitle: 'Editorial spotlights that pair local culture with practical growth playbooks.',
    href: '/arts-culture',
    ctaLabel: 'View series',
    description:
      'Long-form stories and visual studies of business districts building durable visibility through creative consistency.',
    partner: 'Crossroads + Waldo',
    season: '2025',
    status: 'Published',
  },
];

export const homeCultureFeature = cultureFeatures[0];
