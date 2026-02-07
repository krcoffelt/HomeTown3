import type { Metadata } from 'next';

export const siteConfig = {
  name: 'Hometown',
  title: 'Hometown — Kansas City Marketing Studio',
  description:
    'Kansas City marketing for small businesses: websites, local visibility, social systems, and ads that convert.',
  url: 'https://hometownkc.agency',
  ogImage: '/images/hero-bg.jpg',
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
  image?: string;
};

export function createPageMetadata({
  title,
  description,
  path = '/',
  image = siteConfig.ogImage,
}: PageMetadataInput): Metadata {
  const ogImage = toAbsoluteUrl(image);

  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url: path,
      type: 'website',
      siteName: siteConfig.title,
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
