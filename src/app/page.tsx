import type { Metadata } from 'next';
import HomePageClient from '@/components/pages/HomePageClient';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Hometown — Kansas City Marketing Studio',
  description:
    'Kansas City marketing for small businesses: websites, local visibility, social systems, and ads that convert.',
  path: '/',
});

export default function HomePage() {
  return <HomePageClient />;
}
