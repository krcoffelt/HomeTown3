import { CaseStudy } from '@/types/caseStudy';

export const caseStudies: CaseStudy[] = [
  {
    slug: 'artisan-bakery',
    title: 'Artisan bakery',
    client: 'Flour + Hearth',
    industry: 'Hospitality',
    year: '2025',
    location: 'Crossroads',
    summary: '+63% orders after a two-page relaunch and map pack cadence.',
    challenge:
      'The bakery had strong repeat customers but weak discovery from new residents and weekday commuters.',
    approach: [
      'Rebuilt the website around pre-order flows and local intent search terms.',
      'Introduced weekly product drop storytelling for social and email.',
      'Implemented a review request sequence tied to completed pickup orders.',
    ],
    results: [
      '63% increase in online pre-orders over 90 days.',
      '42% growth in Google Business profile actions.',
      'Marked improvement in weekday order consistency.',
    ],
    image:
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=900&q=80',
    href: '/case-studies/artisan-bakery',
    layout: 'wide',
  },
  {
    slug: 'yoga-studio',
    title: 'Yoga studio',
    client: 'Brookside Flow',
    industry: 'Wellness',
    year: '2025',
    location: 'Brookside',
    summary: '2x intro pass purchases via refined offer ladder and reels kit.',
    challenge:
      'The studio was posting regularly but lacked a clear conversion path from social attention to booked classes.',
    approach: [
      'Designed a three-tier intro offer ladder with stronger urgency messaging.',
      'Built weekly short-form video templates to highlight instructor personalities.',
      'Aligned landing pages and checkout flow to reduce drop-off.',
    ],
    results: [
      '2x increase in intro pass purchases in six weeks.',
      '32% lower cost per conversion from paid social.',
      'Higher retention from intro package into monthly plans.',
    ],
    image:
      'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=900&q=80',
    href: '/case-studies/yoga-studio',
  },
  {
    slug: 'vintage-shop',
    title: 'Vintage shop',
    client: 'River Revival',
    industry: 'Retail',
    year: '2024',
    location: 'River Market',
    summary: 'Tripled foot traffic from review engine + weekly drops.',
    challenge:
      'Inventory changed constantly, but their digital channels did not communicate new arrivals effectively.',
    approach: [
      'Built a weekly drop calendar with reusable launch copy.',
      'Set up a review generation program for in-store purchasers.',
      'Created map-pack and local-search pages for high-intent categories.',
    ],
    results: [
      '3x increase in store visits attributed to digital discovery.',
      'Review velocity increased from 2 to 11 reviews per month.',
      'Higher sell-through on first week for new collections.',
    ],
    image:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80',
    href: '/case-studies/vintage-shop',
    layout: 'tall',
  },
  {
    slug: 'dental-studio',
    title: 'Dental studio',
    client: 'Plaza Dental Studio',
    industry: 'Healthcare',
    year: '2025',
    location: 'West Plaza',
    summary: '41% lift in booked consults after funnel rebuild.',
    challenge:
      'Paid campaigns were generating clicks, but consultation booking completion rates were inconsistent.',
    approach: [
      'Reworked service-line pages around treatment outcomes and trust markers.',
      'Implemented simplified consultation booking with tighter form logic.',
      'Launched call tracking and conversion QA for channel attribution.',
    ],
    results: [
      '41% increase in booked consultations.',
      '27% improvement in lead-to-appointment quality.',
      'Clear visibility into source-level ROI reporting.',
    ],
    image:
      'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=80',
    href: '/case-studies/dental-studio',
  },
  {
    slug: 'neighborhood-cafe',
    title: 'Neighborhood cafe',
    client: 'Waldo Table',
    industry: 'Hospitality',
    year: '2024',
    location: 'Waldo',
    summary: '58% lift in repeat visits after loyalty and menu refresh.',
    challenge:
      'The cafe had a strong brand reputation but lacked systems to drive repeat customer behavior.',
    approach: [
      'Created a loyalty messaging program for email and SMS.',
      'Introduced seasonal menu launch campaigns with limited-time hooks.',
      'Refined location page content for local and branded search terms.',
    ],
    results: [
      '58% increase in repeat visits tracked through loyalty redemptions.',
      'Consistent campaign-driven spikes during menu launches.',
      'Higher average ticket from cross-sell prompts.',
    ],
    image:
      'https://images.unsplash.com/photo-1491972690050-ba117db4dc09?auto=format&fit=crop&w=900&q=80',
    href: '/case-studies/neighborhood-cafe',
    layout: 'wide',
  },
  {
    slug: 'salon-collective',
    title: 'Salon collective',
    client: 'Plaza Collective',
    industry: 'Beauty',
    year: '2025',
    location: 'Plaza',
    summary: 'Booked calendar in 30 days with a new offer ladder.',
    challenge:
      'Individual stylists were marketing independently, creating fragmented offers and inconsistent demand.',
    approach: [
      'Standardized service bundles and first-visit promotions across stylists.',
      'Launched booking-specific landing pages for top revenue services.',
      'Built weekly offer communication cadence across social and SMS.',
    ],
    results: [
      'Lead stylists reached fully booked calendars within 30 days.',
      'Appointment no-show rates decreased after confirmation workflow updates.',
      'Higher average spend per new-client booking.',
    ],
    image:
      'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=80',
    href: '/case-studies/salon-collective',
  },
];

export const homepageCaseStudies: CaseStudy[] = caseStudies;

export const getCaseStudyBySlug = (slug: string): CaseStudy | undefined =>
  caseStudies.find((caseStudy) => caseStudy.slug === slug);

export const getCaseStudySiblings = (
  slug: string
): { previous?: CaseStudy; next?: CaseStudy } => {
  const index = caseStudies.findIndex((caseStudy) => caseStudy.slug === slug);
  if (index < 0) return {};

  return {
    previous: index > 0 ? caseStudies[index - 1] : undefined,
    next: index < caseStudies.length - 1 ? caseStudies[index + 1] : undefined,
  };
};
