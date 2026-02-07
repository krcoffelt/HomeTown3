import type { Metadata } from 'next';
import SiteShell from '@/components/site/SiteShell';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Team',
  description: 'Meet the people behind Hometown programs, strategy, and delivery.',
  path: '/team',
});

export default function TeamPage() {
  return (
    <SiteShell>
      <main className="section listing-page">
        <div className="listing-hero">
          <p className="eyebrow">Team</p>
          <h1>Small team. Senior operators.</h1>
          <p className="listing-lead">
            We pair strategy, messaging, design, and channel execution so owner-led businesses can move
            faster without adding internal overhead.
          </p>
        </div>
      </main>
    </SiteShell>
  );
}
