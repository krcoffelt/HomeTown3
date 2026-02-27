export type ServiceCategory = {
  title: string;
  summary: string;
  deliverables: string[];
  mediaTag?: string;
  mediaCaption?: string;
};

export type ServiceProcessStep = {
  title: string;
  description: string;
};

export type ServiceValuePillar = {
  title: string;
  websites: string;
  social: string;
  logos: string;
};

export const serviceCategories: ServiceCategory[] = [
  {
    title: 'Websites',
    summary: 'Launch-ready website setups for Kansas City businesses that need trust and leads quickly.',
    deliverables: [
      'Offer-focused page structure and copy',
      'Mobile optimization and fast load performance',
      'Lead form and click-to-call conversion setup',
      'Launch support and revision rounds',
    ],
    mediaTag: 'Primary',
    mediaCaption: 'Best first move when your business has no real website yet.',
  },
  {
    title: 'Social Media',
    summary: 'Monthly content execution that keeps your website connected to active local demand.',
    deliverables: [
      'Content planning aligned to services and seasons',
      'Post creative direction and caption support',
      'Offer-driven campaign ideas tied to landing pages',
      'Performance check-ins and optimization notes',
    ],
    mediaTag: 'Momentum',
    mediaCaption: 'Adds visibility once the site conversion path is in place.',
  },
  {
    title: 'Logos',
    summary: 'Clean identity support so your business looks established anywhere customers evaluate you.',
    deliverables: [
      'Primary and alternate logo lockups',
      'Color and typography starter system',
      'Simple brand usage guide',
      'Social profile logo assets',
    ],
    mediaTag: 'Credibility',
    mediaCaption: 'Unifies your visual presence across website, social, and profiles.',
  },
];

export const servicesProcess: ServiceProcessStep[] = [
  {
    title: 'Intake and scope',
    description: 'You submit the form with your goals, services, and business details.',
  },
  {
    title: 'Build and review',
    description: 'We produce copy and layout, then refine quickly with your feedback.',
  },
  {
    title: 'Launch and handoff',
    description: 'Your site goes live with conversion tracking and a clear next-step plan.',
  },
  {
    title: 'Growth support',
    description: 'Add social media or logo support as your business scales.',
  },
];

export const serviceValuePillars: ServiceValuePillar[] = [
  {
    title: 'Conversion Role',
    websites: 'Form + phone CTA architecture',
    social: 'Traffic and engagement support',
    logos: 'Trust and visual consistency',
  },
  {
    title: 'Best Use Case',
    websites: 'No current website or low conversion',
    social: 'Need consistent local visibility',
    logos: 'Brand looks inconsistent or outdated',
  },
  {
    title: 'Engagement Style',
    websites: 'One-time launch project',
    social: 'Monthly retainer support',
    logos: 'Project-based refresh',
  },
  {
    title: 'Time to Value',
    websites: '7-10 day launch window',
    social: '2-4 weeks for cadence to stabilize',
    logos: '1-2 weeks for core assets',
  },
];
