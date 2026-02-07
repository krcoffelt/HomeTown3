import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import SiteShell from '@/components/site/SiteShell';
import { getCaseStudyBySlug, getCaseStudySiblings } from '@/data/caseStudies';
import { CaseStudyDetailTemplate } from '@/components/sections/CaseStudies';
import { createPageMetadata } from '@/lib/seo';

type CaseStudyDetailPageProps = {
  params: {
    slug: string;
  };
};

export function generateMetadata({ params }: CaseStudyDetailPageProps): Metadata {
  const caseStudy = getCaseStudyBySlug(params.slug);

  if (!caseStudy) {
    return createPageMetadata({
      title: 'Case Study',
      description: 'Case study details from Hometown.',
      path: '/case-studies',
    });
  }

  return createPageMetadata({
    title: caseStudy.title,
    description: caseStudy.summary,
    path: caseStudy.href,
    image: caseStudy.image,
  });
}

export default function CaseStudyDetailPage({ params }: CaseStudyDetailPageProps) {
  const caseStudy = getCaseStudyBySlug(params.slug);

  if (!caseStudy) {
    notFound();
  }

  const { previous, next } = getCaseStudySiblings(caseStudy.slug);

  return (
    <SiteShell>
      <CaseStudyDetailTemplate caseStudy={caseStudy} previous={previous} next={next} />
    </SiteShell>
  );
}
