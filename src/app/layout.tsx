import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { siteConfig } from '@/lib/seo';
import './globals.css';

const defaultOgImage = `${siteConfig.url}${siteConfig.ogImage}`;
const displayFont = localFont({
  src: [
    {
      path: '../../public/fonts/TimesNewRomanMTStd-Cond.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/TimesNewRomanMTStd-BoldCond.otf',
      weight: '600',
      style: 'normal',
    },
  ],
  variable: '--font-display',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.title,
    url: '/',
    images: [
      {
        url: defaultOgImage,
        width: 1200,
        height: 630,
        alt: siteConfig.title,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    creator: siteConfig.xHandle,
    images: [defaultOgImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${displayFont.variable} antialiased`}>{children}</body>
    </html>
  );
}
