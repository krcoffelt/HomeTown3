export type MediaProofItem = {
  src: string;
  alt: string;
  caption?: string;
  tag?: string;
};

export const homeMediaProof: MediaProofItem[] = [
  {
    src: '/images/hero-bg.jpg',
    alt: 'Team collaborating in a workshop style setting',
    tag: 'Website Launches',
    caption: 'Built for owner-led teams that need credibility quickly.',
  },
  {
    src: '/images/services-hero-bg.png',
    alt: 'Creative desk with screens showing website and content planning',
    tag: 'Social + Brand',
    caption: 'One coordinated team across website, social, and brand assets.',
  },
];

export const servicesMediaProof: MediaProofItem = {
  src: '/images/services-hero-bg.png',
  alt: 'Mockups showing website and campaign creative output',
  tag: 'Delivery Rhythm',
  caption: 'Structured execution with weekly momentum and focused revisions.',
};

export const contactMediaProof: MediaProofItem = {
  src: '/images/HometownLogo2026_white.png',
  alt: 'Hometown Kansas City agency logo',
  tag: 'Local Team',
  caption: 'Kansas City businesses trust our website-first launch process.',
};
