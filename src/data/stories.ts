import { Story } from '@/types/story';

export const stories: Story[] = [
  {
    slug: 'first-fridays-x-hometown',
    label: 'Story',
    title: 'First Fridays x Hometown',
    href: '/story/first-fridays-x-hometown',
    excerpt:
      'How a local collaboration model turned monthly art walks into predictable demand for independent operators.',
    publishedOn: 'January 2026',
    readTime: '6 min read',
    location: 'Crossroads, Kansas City',
    body: [
      'First Fridays has always generated attention, but many businesses struggled to convert foot traffic into repeat visits. We partnered with operators to define stronger in-store conversion moments and post-event follow-up systems.',
      'The team created a rotating campaign kit with storefront signage, short-form video hooks, and limited-time offers that aligned with each district activation. This removed the usual weekly scramble and gave every participant an execution playbook.',
      'By the third cycle, participating businesses reported steadier post-event sales and clearer visibility into what channels actually drove in-person actions. The program became a reusable operating rhythm instead of a one-off event sprint.',
    ],
    highlights: [
      'Created repeatable event activation playbooks for 14 businesses.',
      'Introduced offer structures tied to post-event retention.',
      'Documented channel-level attribution for future campaign planning.',
    ],
    image:
      'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=640&q=80',
  },
  {
    slug: 'the-mural-district',
    label: 'Story',
    title: 'The Mural District',
    href: '/story/the-mural-district',
    excerpt:
      'Designing an editorial content series that connected local artists, storefronts, and neighborhood identity.',
    publishedOn: 'November 2025',
    readTime: '5 min read',
    location: 'River Market, Kansas City',
    body: [
      'The district had strong visual character but little connective storytelling between artists and nearby businesses. We built a multi-week editorial rollout that paired mural features with operator interviews.',
      'Each installment included concise social shorts, map-ready pages, and newsletter summaries to drive both in-person visits and online discovery. Rather than posting disconnected highlights, the district was framed as a cohesive cultural route.',
      'The sequence improved local search relevance for participating businesses and expanded community engagement from visitors who had not previously explored the area.',
    ],
    highlights: [
      'Launched an 8-week editorial series across web, social, and email.',
      'Improved discoverability for participating storefronts in local search.',
      'Established reusable storytelling templates for future district campaigns.',
    ],
    image:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=640&q=80',
  },
  {
    slug: 'small-business-saturdays',
    label: 'Story',
    title: 'Small Business Saturdays',
    href: '/story/small-business-saturdays',
    excerpt:
      'A coordinated campaign cadence that helped neighborhood businesses share momentum instead of competing for attention.',
    publishedOn: 'October 2025',
    readTime: '7 min read',
    location: 'Waldo + Brookside, Kansas City',
    body: [
      'Independent businesses often run isolated promotions with limited production resources. We coordinated a shared Saturday framework that gave each participant aligned timing, creative guardrails, and promotion windows.',
      'Campaign materials were intentionally simple: weekly offer cards, short launch copy, and lightweight analytics checkpoints. Teams could ship quickly without sacrificing consistency.',
      'The result was stronger cross-promotion behavior and higher confidence in repeat weekend activations, especially for operators without internal marketing teams.',
    ],
    highlights: [
      'Unified campaign system adopted by 20+ neighborhood operators.',
      'Reduced content production time through shared templates.',
      'Improved weekend conversion consistency over six campaign cycles.',
    ],
    image:
      'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=640&q=80',
  },
  {
    slug: 'built-in-kc-working-everywhere',
    label: 'Story',
    title: 'Built in KC. Working everywhere.',
    href: '/story/built-in-kc-working-everywhere',
    excerpt:
      'Why our local-first operating model still scales effectively for distributed teams and multi-location brands.',
    publishedOn: 'February 2026',
    readTime: '4 min read',
    location: 'Kansas City',
    body: [
      'Our process started with neighborhood businesses that needed practical systems and direct accountability. That operating model translates well across markets because it focuses on decision clarity and execution cadence.',
      'As projects expanded across locations, we kept the same discipline: clear offer architecture, channel ownership, and weekly performance reviews. Scaling came from stronger systems, not bigger complexity.',
      'The lesson remains consistent. Local context improves strategy, but durable growth comes from repeatable execution patterns teams can run every month.',
    ],
    highlights: [
      'Local-first operating model adapted for multi-market execution.',
      'Standardized decision frameworks for channel prioritization.',
      'Improved collaboration between owner-led teams and internal staff.',
    ],
  },
];

export const menuStories = stories.slice(0, 3);
export const featuredHomeStory = stories[3];

export const getStoryBySlug = (slug: string): Story | undefined =>
  stories.find((story) => story.slug === slug);

export const getStorySiblings = (slug: string): { previous?: Story; next?: Story } => {
  const index = stories.findIndex((story) => story.slug === slug);
  if (index < 0) return {};

  return {
    previous: index > 0 ? stories[index - 1] : undefined,
    next: index < stories.length - 1 ? stories[index + 1] : undefined,
  };
};
