export type ServiceCategory = {
  title: string;
  summary: string;
  deliverables: string[];
};

export type ServiceProcessStep = {
  title: string;
  description: string;
};

export type DeliverableMatrixRow = {
  item: string;
  websites: string;
  social: string;
  logos: string;
};

export const serviceCategories: ServiceCategory[] = [
  {
    title: 'Websites',
    summary: 'Conversion-focused website setup for Kansas City businesses that need to launch quickly and look credible.',
    deliverables: [
      'Offer-focused page structure and copy',
      'Mobile optimization and fast load performance',
      'Lead form and click-to-call conversion setup',
      'Launch support and revision rounds',
    ],
  },
  {
    title: 'Social Media',
    summary: 'Monthly content support that keeps your website connected to active local buyers.',
    deliverables: [
      'Content planning aligned to services and seasons',
      'Post creative direction and caption support',
      'Offer-driven campaign ideas tied to landing pages',
      'Performance check-ins and optimization notes',
    ],
  },
  {
    title: 'Logos',
    summary: 'Clean visual identity support so your business appears established everywhere customers evaluate you.',
    deliverables: [
      'Primary and alternate logo lockups',
      'Color and typography starter system',
      'Simple brand usage guide',
      'Social profile logo assets',
    ],
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

export const deliverablesMatrix: DeliverableMatrixRow[] = [
  {
    item: 'Primary conversion path',
    websites: 'Form + phone CTA architecture',
    social: 'Traffic and engagement support',
    logos: 'Trust and visual consistency',
  },
  {
    item: 'Best use case',
    websites: 'No current website or low conversion',
    social: 'Need consistent local visibility',
    logos: 'Brand looks inconsistent or outdated',
  },
  {
    item: 'Typical engagement style',
    websites: 'One-time launch project',
    social: 'Monthly retainer support',
    logos: 'Project-based refresh',
  },
  {
    item: 'Time to value',
    websites: '7-10 day launch window',
    social: '2-4 weeks for cadence to stabilize',
    logos: '1-2 weeks for core assets',
  },
];
