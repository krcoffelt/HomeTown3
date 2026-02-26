import type { Metadata } from 'next';
import { programs } from '@/data/programs';
import SiteShell from '@/components/site/SiteShell';
import { ProgramList } from '@/components/sections/Programs';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Programs',
  description: 'Explore practical marketing programs designed for measurable growth.',
  path: '/programs',
  noIndex: true,
});

export default function ProgramsPage() {
  return (
    <SiteShell>
      <main>
        <ProgramList programs={programs} />
      </main>
    </SiteShell>
  );
}
