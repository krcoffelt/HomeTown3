import type { Metadata } from 'next';
import { cultureFeatures } from '@/data/culture';
import { stories } from '@/data/stories';
import SiteShell from '@/components/site/SiteShell';
import { ArtsCultureTemplate } from '@/components/sections/Culture';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Arts & Culture',
  description: 'Stories and collaborations rooted in Kansas City arts and culture.',
  path: '/arts-culture',
  noIndex: true,
});

export default function ArtsCulturePage() {
  return (
    <SiteShell>
      <ArtsCultureTemplate cultureFeatures={cultureFeatures} stories={stories} />
    </SiteShell>
  );
}
