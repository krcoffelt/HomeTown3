import type { Metadata } from 'next';
import { caseStudies } from '@/data/caseStudies';
import SiteShell from '@/components/site/SiteShell';
import { CaseStudyRail } from '@/components/sections/CaseStudies';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Case Studies',
  description: 'Review selected work and measurable outcomes across local business engagements.',
  path: '/case-studies',
});

export default function CaseStudiesPage() {
  return (
    <SiteShell>
      <main>
        <CaseStudyRail caseStudies={caseStudies} />
      </main>
    </SiteShell>
  );
}
