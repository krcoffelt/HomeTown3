import type { Metadata } from 'next';
import SiteShell from '@/components/site/SiteShell';
import { createPageMetadata } from '@/lib/seo';
import { contactInfo } from '@/data/navigation';

export const metadata: Metadata = createPageMetadata({
  title: 'Press',
  description: 'Press materials and recent mentions for Hometown.',
  path: '/press',
  noIndex: true,
});

export default function PressPage() {
  return (
    <SiteShell>
      <main className="section listing-page">
        <div className="listing-hero">
          <p className="eyebrow">Press</p>
          <h1>News, mentions, and media requests.</h1>
          <p className="listing-lead">
            For speaking invitations, podcast requests, and press kits, reach us at
            {' '}
            <a className="text-link" href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>.
          </p>
        </div>
      </main>
    </SiteShell>
  );
}
