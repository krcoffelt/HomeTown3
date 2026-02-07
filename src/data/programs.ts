import { Program } from '@/types/program';

const baseIdealFor = [
  'Owner-led teams with limited marketing bandwidth',
  'Businesses that need practical systems quickly',
  'Operators who want measurable monthly progress',
];

const withDetail = (
  program: Pick<Program, 'slug' | 'title' | 'subtitle' | 'href' | 'featured'>,
  detail: Pick<Program, 'overview' | 'duration' | 'investment' | 'deliverables' | 'outcomes'>
): Program => ({
  ...program,
  ...detail,
  idealFor: baseIdealFor,
  ctaLabel: 'Discuss this program',
});

export const programs: Program[] = [
  withDetail(
    {
      slug: 'website-launch',
      title: 'Website Launch',
      subtitle: 'Fast, clean, conversion-ready.',
      href: '/programs/website-launch',
      featured: true,
    },
    {
      overview: 'Launch or relaunch a focused website that converts local intent into booked actions.',
      duration: '2-4 weeks',
      investment: '$2,000-$6,000 setup',
      deliverables: ['Messaging framework', 'Page architecture', 'Lead capture and routing'],
      outcomes: ['Higher call volume', 'Better quote quality', 'Clearer service positioning'],
    }
  ),
  withDetail(
    {
      slug: 'local-visibility',
      title: 'Local Visibility',
      subtitle: 'Own search, maps, and reviews.',
      href: '/programs/local-visibility',
    },
    {
      overview: 'Build dominant presence in local search, map results, and reputation channels.',
      duration: '4-8 weeks rollout',
      investment: '$1,200-$3,500 monthly',
      deliverables: ['Google Business optimization', 'Review response operations', 'Local search content plan'],
      outcomes: ['More map discovery', 'Stronger trust signals', 'Higher conversion from branded search'],
    }
  ),
  withDetail(
    {
      slug: 'social-systems',
      title: 'Social Systems',
      subtitle: 'Show up consistently without the scramble.',
      href: '/programs/social-systems',
    },
    {
      overview: 'Turn social posting into a repeatable operating system with approvals and feedback loops.',
      duration: '3-6 weeks setup',
      investment: '$900-$2,500 monthly',
      deliverables: ['Monthly content calendar', 'Post templates and hooks', 'Community response playbook'],
      outcomes: ['Consistent publishing', 'Improved engagement quality', 'Less owner workload'],
    }
  ),
  withDetail(
    {
      slug: 'paid-growth',
      title: 'Paid Growth',
      subtitle: 'Tight targeting, careful spend, clear results.',
      href: '/programs/paid-growth',
    },
    {
      overview: 'Deploy accountable ad programs with strict budget controls and weekly optimization.',
      duration: '2-3 weeks setup then ongoing',
      investment: '$1,500+ management plus ad spend',
      deliverables: ['Offer and funnel mapping', 'Ad account architecture', 'Weekly performance briefs'],
      outcomes: ['Lower acquisition cost', 'More qualified leads', 'Predictable campaign cadence'],
    }
  ),
  withDetail(
    {
      slug: 'review-engine',
      title: 'Review Engine',
      subtitle: 'Build trust with repeatable review generation.',
      href: '/programs/review-engine',
    },
    {
      overview: 'Create a consistent review pipeline that improves ratings and local conversion rates.',
      duration: '3-5 weeks setup',
      investment: '$700-$1,800 monthly',
      deliverables: ['Review request automation', 'Template library', 'Escalation and response workflow'],
      outcomes: ['Higher rating velocity', 'Stronger social proof', 'Better close rates from search traffic'],
    }
  ),
  withDetail(
    {
      slug: 'offer-positioning',
      title: 'Offer Positioning',
      subtitle: 'Clarify your value and increase close rates.',
      href: '/programs/offer-positioning',
    },
    {
      overview: 'Refine how services are packaged, priced, and presented so buyers understand value quickly.',
      duration: '2-4 weeks',
      investment: '$1,500-$4,000 project',
      deliverables: ['Offer architecture', 'Pricing narrative', 'Sales page messaging'],
      outcomes: ['Stronger differentiation', 'Higher proposal acceptance', 'Improved perceived value'],
    }
  ),
  withDetail(
    {
      slug: 'landing-pages',
      title: 'Landing Pages',
      subtitle: 'Purpose-built pages for offers and campaigns.',
      href: '/programs/landing-pages',
    },
    {
      overview: 'Build campaign-specific landing pages that match buyer intent and reduce drop-off.',
      duration: '1-3 weeks per page set',
      investment: '$800-$2,500 per page',
      deliverables: ['Offer-aligned page copy', 'Conversion-focused layout', 'Tracking and event setup'],
      outcomes: ['Better ad to page relevance', 'Higher conversion rates', 'Cleaner attribution'],
    }
  ),
  withDetail(
    {
      slug: 'email-retention',
      title: 'Email Retention',
      subtitle: 'Stay top of mind and bring customers back.',
      href: '/programs/email-retention',
    },
    {
      overview: 'Build lifecycle email systems that increase repeat business and customer lifetime value.',
      duration: '3-6 weeks setup',
      investment: '$700-$2,000 monthly',
      deliverables: ['Segment strategy', 'Automated sequence set', 'Monthly campaign plan'],
      outcomes: ['Higher repeat purchase rate', 'Improved retention', 'More predictable revenue from existing customers'],
    }
  ),
  withDetail(
    {
      slug: 'analytics-setup',
      title: 'Analytics Setup',
      subtitle: 'Clean tracking and reporting for decision making.',
      href: '/programs/analytics-setup',
    },
    {
      overview: 'Implement a reliable analytics layer so leaders can make decisions from trusted data.',
      duration: '2-4 weeks',
      investment: '$1,200-$3,500 project',
      deliverables: ['Event taxonomy', 'Dashboard baseline', 'Reporting QA checklist'],
      outcomes: ['Reduced data ambiguity', 'Faster optimization cycles', 'Clearer ROI conversations'],
    }
  ),
  withDetail(
    {
      slug: 'conversion-audits',
      title: 'Conversion Audits',
      subtitle: 'Find friction and prioritize fixes quickly.',
      href: '/programs/conversion-audits',
    },
    {
      overview: 'Audit website and funnel flow to identify the highest-impact conversion blockers.',
      duration: '1-2 weeks',
      investment: '$900-$2,200 audit',
      deliverables: ['Heuristic audit', 'Priority fix roadmap', 'Experiment backlog'],
      outcomes: ['Clear optimization order', 'Faster implementation', 'Higher conversion efficiency'],
    }
  ),
  withDetail(
    {
      slug: 'fractional-lead',
      title: 'Fractional Marketing Lead',
      subtitle: 'Strategic direction and execution oversight.',
      href: '/programs/fractional-lead',
    },
    {
      overview: 'Provide senior marketing leadership without full-time overhead for planning and execution.',
      duration: 'Monthly retainer',
      investment: '$2,500-$7,500 monthly',
      deliverables: ['Quarterly roadmap', 'Weekly leadership standup', 'Cross-channel coordination'],
      outcomes: ['Better team alignment', 'Reduced execution drift', 'Sustained growth discipline'],
    }
  ),
];

export const homepagePrograms: Program[] = programs.slice(0, 4);

export const allProgramsLink: Program = {
  slug: 'all-programs',
  title: 'All Programs (11)',
  subtitle: 'Build a custom stack.',
  href: '/programs',
  muted: true,
};

export const getProgramBySlug = (slug: string): Program | undefined =>
  programs.find((program) => program.slug === slug);

export const getProgramSiblings = (slug: string): { previous?: Program; next?: Program } => {
  const index = programs.findIndex((program) => program.slug === slug);
  if (index < 0) return {};

  return {
    previous: index > 0 ? programs[index - 1] : undefined,
    next: index < programs.length - 1 ? programs[index + 1] : undefined,
  };
};
