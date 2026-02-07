import type { Metadata } from 'next';
import SiteShell from '@/components/site/SiteShell';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Careers',
  description: 'Explore current opportunities to join the Hometown team.',
  path: '/careers',
});

export default function CareersPage() {
  return (
    <SiteShell>
      <main className="section listing-page">
        <div className="listing-hero">
          <p className="eyebrow">Careers</p>
          <h1>Build meaningful work in public.</h1>
          <p className="listing-lead">
            We hire collaborators who can turn sharp strategy into clear execution. No open roles at the
            moment, but we review thoughtful introductions year-round.
          </p>
        </div>
      </main>
    </SiteShell>
  );
}
