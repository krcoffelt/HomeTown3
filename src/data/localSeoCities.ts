export type LocalSeoCity = {
  slug: string;
  name: string;
  state: 'MO' | 'KS';
  intro: string;
  nearbyAreas: string[];
  keywords: string[];
  faq: Array<{
    question: string;
    answer: string;
  }>;
};

export const localSeoCities: LocalSeoCity[] = [
  {
    slug: 'kansas-city',
    name: 'Kansas City',
    state: 'MO',
    intro:
      'We help Kansas City small businesses launch their first professional website quickly so they can start getting calls and form leads.',
    nearbyAreas: ['Brookside', 'Waldo', 'Crossroads', 'River Market'],
    keywords: [
      'kansas city website design',
      'small business website kansas city',
      'affordable website setup kansas city',
    ],
    faq: [
      {
        question: 'How fast can my Kansas City business website launch?',
        answer: 'Most projects launch in 7 to 10 days once we receive your business details and assets.',
      },
      {
        question: 'Is the $800 website package enough for a new business?',
        answer:
          'Yes. It covers the essentials to launch a professional website and capture phone calls and form leads.',
      },
    ],
  },
  {
    slug: 'overland-park',
    name: 'Overland Park',
    state: 'KS',
    intro:
      'Overland Park business owners use our $800 website package to launch online fast and turn local search into booked opportunities.',
    nearbyAreas: ['Downtown Overland Park', 'Leawood', 'Prairie Village'],
    keywords: [
      'overland park website design',
      'website setup overland park ks',
      'small business website overland park',
    ],
    faq: [
      {
        question: 'Do you build websites for Overland Park service businesses?',
        answer: 'Yes. We build websites for local service businesses, retail, and owner-led companies across Overland Park.',
      },
      {
        question: 'Can you write website copy if I do not have content yet?',
        answer: 'Yes. We include core messaging and conversion-focused copy in the setup process.',
      },
    ],
  },
  {
    slug: 'olathe',
    name: 'Olathe',
    state: 'KS',
    intro:
      'We build conversion-focused websites for Olathe businesses that need a reliable online presence and a clear lead path.',
    nearbyAreas: ['Downtown Olathe', 'Lenexa', 'Gardner'],
    keywords: [
      'olathe website design',
      'website setup olathe ks',
      'olathe small business website',
    ],
    faq: [
      {
        question: 'Will my Olathe website work well on mobile?',
        answer: 'Yes. Every website is built mobile-first for easy calls, form submissions, and local conversions.',
      },
      {
        question: 'Do you provide support after launch?',
        answer: 'Yes. We offer ongoing support options plus social media and logo add-ons when needed.',
      },
    ],
  },
  {
    slug: 'lees-summit',
    name: "Lee's Summit",
    state: 'MO',
    intro:
      "Lee's Summit businesses partner with us to get an affordable website live quickly and start collecting quality leads.",
    nearbyAreas: ["Downtown Lee's Summit", 'Blue Springs', 'Raytown'],
    keywords: [
      'lees summit website design',
      'website setup lees summit mo',
      'small business website lees summit',
    ],
    faq: [
      {
        question: 'Is the website package priced monthly or one-time?',
        answer: 'The base launch package is a one-time $800 setup for a fast, professional website launch.',
      },
      {
        question: 'Can I add more pages later?',
        answer: 'Yes. We can expand your site with additional pages and local service content as your business grows.',
      },
    ],
  },
  {
    slug: 'independence',
    name: 'Independence',
    state: 'MO',
    intro:
      'We help Independence businesses launch websites that build trust and make it easy for nearby customers to call or request service.',
    nearbyAreas: ['Sugar Creek', 'Blue Springs', 'Kansas City'],
    keywords: [
      'independence mo website design',
      'website setup independence mo',
      'independence small business website',
    ],
    faq: [
      {
        question: 'Do you only work with large companies?',
        answer: 'No. We focus on local owner-led businesses that need practical, affordable website setup.',
      },
      {
        question: 'Can you add social media help after launch?',
        answer: 'Yes. Social management can be added after your website is live.',
      },
    ],
  },
  {
    slug: 'shawnee',
    name: 'Shawnee',
    state: 'KS',
    intro:
      'Shawnee businesses choose our website setup service to launch quickly, look credible, and convert local interest into action.',
    nearbyAreas: ['Merriam', 'Lenexa', 'Overland Park'],
    keywords: [
      'shawnee ks website design',
      'website setup shawnee ks',
      'shawnee small business website',
    ],
    faq: [
      {
        question: 'Will my website include a contact form?',
        answer: 'Yes. Every build includes a conversion-focused form designed to capture qualified local leads.',
      },
      {
        question: 'How involved do I need to be during the project?',
        answer: 'Minimal. We use a short intake and quick review process so you can stay focused on operations.',
      },
    ],
  },
  {
    slug: 'lenexa',
    name: 'Lenexa',
    state: 'KS',
    intro:
      'We launch clean, affordable websites for Lenexa businesses that need to establish a professional digital presence fast.',
    nearbyAreas: ['Shawnee', 'Olathe', 'Overland Park'],
    keywords: [
      'lenexa website design',
      'website setup lenexa ks',
      'lenexa small business website',
    ],
    faq: [
      {
        question: 'Do you handle both design and copy?',
        answer: 'Yes. We handle layout, messaging, and lead-focused page structure in one streamlined process.',
      },
      {
        question: 'Can this package work for a new business launch?',
        answer: 'Yes. It is built for businesses getting online for the first time and needing a fast launch.',
      },
    ],
  },
  {
    slug: 'blue-springs',
    name: 'Blue Springs',
    state: 'MO',
    intro:
      'Blue Springs local businesses use our website launch package to stand out online and convert traffic into calls and form inquiries.',
    nearbyAreas: ["Lee's Summit", 'Independence', 'Grain Valley'],
    keywords: [
      'blue springs website design',
      'website setup blue springs mo',
      'blue springs small business website',
    ],
    faq: [
      {
        question: 'Can you help if I have no current website at all?',
        answer: 'Yes. This service is specifically built for businesses starting from zero and needing to launch quickly.',
      },
      {
        question: 'What is the next step after launch?',
        answer: 'After launch, we can support growth with social media management and logo updates if needed.',
      },
    ],
  },
];

export const getLocalSeoCityBySlug = (slug: string): LocalSeoCity | undefined =>
  localSeoCities.find((city) => city.slug === slug);
