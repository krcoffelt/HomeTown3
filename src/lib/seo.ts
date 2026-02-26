import type { Metadata } from 'next';

export const siteConfig = {
  name: 'Hometown',
  title: 'Hometown — Kansas City $800 Website Agency',
  description:
    'Affordable website setup for Kansas City metro small businesses that need to launch quickly and start getting leads.',
  url: 'https://hometownkc.agency',
  ogImage: '/opengraph-image',
  phoneDisplay: '913-991-6641',
  phoneE164: '+19139916641',
  email: 'krcoffelt@gmail.com',
  serviceAreas: [
    'Kansas City, MO',
    'Kansas City, KS',
    'Overland Park, KS',
    'Olathe, KS',
    "Lee's Summit, MO",
    'Independence, MO',
    'Shawnee, KS',
    'Lenexa, KS',
    'Blue Springs, MO',
  ],
  primaryOffer: '$800 Website Setup',
  defaultKeywords: [
    'kansas city website design',
    'affordable website design kansas city',
    'small business website kansas city',
    'website setup kansas city metro',
    '$800 website',
  ],
  xHandle: '@hometown',
} as const;

const toAbsoluteUrl = (value: string): string =>
  value.startsWith('http://') || value.startsWith('https://')
    ? value
    : `${siteConfig.url}${value.startsWith('/') ? value : `/${value}`}`;

type PageMetadataInput = {
  title: string;
  description: string;
  path?: string;
  canonicalPath?: string;
  image?: string;
  openGraphImage?: string;
  keywords?: string[];
  noIndex?: boolean;
};

export function createPageMetadata({
  title,
  description,
  path = '/',
  canonicalPath,
  image,
  openGraphImage,
  keywords,
  noIndex = false,
}: PageMetadataInput): Metadata {
  const resolvedPath = canonicalPath ?? path;
  const ogImage = toAbsoluteUrl(openGraphImage ?? image ?? siteConfig.ogImage);

  return {
    title,
    description,
    keywords: keywords ?? [...siteConfig.defaultKeywords],
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
    alternates: {
      canonical: resolvedPath,
    },
    openGraph: {
      title,
      description,
      url: resolvedPath,
      type: 'website',
      siteName: siteConfig.name,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      creator: siteConfig.xHandle,
      images: [ogImage],
    },
  };
}
