import type { Metadata } from 'next';
import HomePageClient from '@/components/pages/HomePageClient';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Hometown — $800 Website Agency',
  description:
    'Launch a conversion-focused website for $800. Hometown also supports social media and logo design for local businesses.',
  path: '/',
});

export default function HomePage() {
  return <HomePageClient />;
}
