export type ProofLogo = {
  name: string;
  category: string;
  note?: string;
};

export type PainSolutionCard = {
  title: string;
  before: string;
  after: string;
  mediaTag?: string;
};

export type CapabilityItem = {
  title: string;
  summary: string;
};

export type MetricItem = {
  value: string;
  label: string;
  note: string;
  emphasis?: string;
};

export type HomeTestimonial = {
  quote: string;
  name: string;
  business: string;
  result: string;
};

export type PricingTier = {
  name: string;
  price: string;
  subtitle: string;
  description: string;
  features: string[];
  ctaLabel: string;
  featured?: boolean;
  badge?: string;
};

export type ComparisonRow = {
  feature: string;
  doneForYou: string;
  diy: string;
};

export type HomeFaq = {
  question: string;
  answer: string;
};

export const proofLogos: ProofLogo[] = [
  { name: 'Riverbend HVAC', category: 'Home Services', note: 'Lead flow stabilized after launch.' },
  { name: 'South Plaza Dental', category: 'Healthcare', note: 'Stronger trust from search visitors.' },
  { name: 'Summit Legal Group', category: 'Legal', note: 'Clearer conversion path for consultations.' },
  { name: 'Waldo Auto Care', category: 'Automotive', note: 'Faster routing from profile to phone.' },
  { name: 'Mainstreet Med Spa', category: 'Beauty', note: 'Consistent identity across channels.' },
  { name: 'Crossroads Kitchen Co.', category: 'Hospitality', note: 'Stronger weekend booking intent.' },
];

export const painSolutionCards: PainSolutionCard[] = [
  {
    title: 'No website, no trust signal',
    before: 'Potential customers search your business, cannot find a real website, and choose a competitor.',
    after: 'A clean Kansas City-focused website explains your offer fast and routes visitors directly to your form or phone line.',
    mediaTag: 'Credibility',
  },
  {
    title: 'No clear next step',
    before: 'People see your social profile but do not know how to contact you or what to do next.',
    after: 'Your site uses clear calls-to-action so visitors can submit the form or call in seconds.',
    mediaTag: 'Conversion',
  },
  {
    title: 'Inconsistent brand presence',
    before: 'Your logo, messaging, and social look disconnected and reduce confidence.',
    after: 'Website, social, and logo support are aligned so your business looks established from day one.',
    mediaTag: 'Consistency',
  },
];

export const capabilityItems: CapabilityItem[] = [
  {
    title: 'Website Launches',
    summary: 'Conversion-focused builds made for local Kansas City businesses that need to launch quickly.',
  },
  {
    title: 'Social Media Support',
    summary: 'Monthly posting systems that keep your new website connected to active local demand.',
  },
  {
    title: 'Logo Systems',
    summary: 'Simple, professional brand assets so your business looks credible everywhere customers find you.',
  },
  {
    title: 'Local SEO Setup',
    summary: 'Foundational search setup tuned for Kansas City service intent and contact conversions.',
  },
];

export const metricsBand: MetricItem[] = [
  {
    value: '7-10 Days',
    label: 'Launch window',
    note: 'Focused setup with clear milestones.',
    emphasis: 'Speed',
  },
  {
    value: '$800',
    label: 'Entry package',
    note: 'Simple first investment to get online.',
    emphasis: 'Clarity',
  },
  {
    value: '2-Click',
    label: 'Action path',
    note: 'Visitors reach form or call in seconds.',
    emphasis: 'Conversion',
  },
  {
    value: 'Kansas City',
    label: 'Market focus',
    note: 'Built for local businesses first.',
    emphasis: 'Local',
  },
];

export const homeTestimonials: HomeTestimonial[] = [
  {
    quote: 'We had no website at all. In a week, we had a real site and leads coming through the form.',
    name: 'Megan R.',
    business: 'Blue Valley Plumbing',
    result: '18 qualified inquiries in month one',
  },
  {
    quote: 'The process was simple. We approved copy, reviewed once, and launched with a clear call flow.',
    name: 'Jordan T.',
    business: 'Westside Exteriors',
    result: '41% increase in phone calls',
  },
  {
    quote: 'We started with the website and added social support after. Everything stayed cohesive.',
    name: 'Lena C.',
    business: 'Brookside Wellness Studio',
    result: '2x more monthly lead form submissions',
  },
];

export const pricingTiers: PricingTier[] = [
  {
    name: 'Websites',
    price: '$800',
    subtitle: 'One-time website setup',
    description: 'Launch a conversion-focused website for your Kansas City business.',
    features: [
      'Core site structure + page copy',
      'Mobile-first layout and speed setup',
      'Lead form and click-to-call integration',
      'Launch support and handoff',
    ],
    ctaLabel: 'Start Website Project',
    featured: true,
    badge: 'Core Offer',
  },
  {
    name: 'Google Business Profile',
    price: '$250',
    subtitle: 'One-time setup',
    description: 'Set up and optimize your Google Business Profile for local visibility.',
    features: [
      'Profile setup and optimization',
      'Core service/category configuration',
      'Business details and service area alignment',
      'Photo and posting structure guidance',
    ],
    ctaLabel: 'Book GBP Setup',
    badge: 'Local SEO',
  },
  {
    name: 'Social Media Management',
    price: '$500/mo',
    subtitle: 'Monthly management',
    description: 'Ongoing social media management to keep your brand active and visible.',
    features: [
      'Monthly content planning and posting',
      'Creative direction for local offers',
      'Caption writing and publishing support',
      'Monthly performance check-in',
    ],
    ctaLabel: 'Start Social Management',
  },
];

export const comparisonRows: ComparisonRow[] = [
  {
    feature: 'Clear messaging and conversion copy',
    doneForYou: 'Included and written for your market',
    diy: 'Requires research, copywriting, and revisions',
  },
  {
    feature: 'Mobile optimization and speed',
    doneForYou: 'Built into delivery and QA',
    diy: 'Often missed until after launch',
  },
  {
    feature: 'Form + phone CTA architecture',
    doneForYou: 'Placed across every key section',
    diy: 'Usually added late and inconsistently',
  },
  {
    feature: 'Local Kansas City SEO setup',
    doneForYou: 'Configured during build',
    diy: 'Separate learning curve and tools',
  },
];

export const homeFaqItems: HomeFaq[] = [
  {
    question: 'Is this for businesses that do not have a website yet?',
    answer: 'Yes. This offer is specifically for Kansas City businesses starting from zero or replacing a weak first version.',
  },
  {
    question: 'What is the fastest way to start?',
    answer: 'Use the contact form first. We review your details and map the fastest build path. If you want, call us right away.',
  },
  {
    question: 'Can we add social media or logo work later?',
    answer: 'Yes. Most clients start with the website and layer in social or logo support after launch.',
  },
  {
    question: 'Do you support businesses outside downtown Kansas City?',
    answer: 'Yes. We support businesses across the Kansas City area including Overland Park, Olathe, Lee\'s Summit, Independence, Lenexa, and Shawnee.',
  },
];
