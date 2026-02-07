import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import SiteShell from '@/components/site/SiteShell';
import { getProgramBySlug, getProgramSiblings } from '@/data/programs';
import { ProgramDetailTemplate } from '@/components/sections/Programs';
import { createPageMetadata } from '@/lib/seo';

type ProgramDetailPageProps = {
  params: {
    slug: string;
  };
};

export function generateMetadata({ params }: ProgramDetailPageProps): Metadata {
  const program = getProgramBySlug(params.slug);

  if (!program) {
    return createPageMetadata({
      title: 'Program',
      description: 'Program details from Hometown.',
      path: '/programs',
    });
  }

  return createPageMetadata({
    title: program.title,
    description: program.overview ?? program.subtitle,
    path: program.href,
  });
}

export default function ProgramDetailPage({ params }: ProgramDetailPageProps) {
  const program = getProgramBySlug(params.slug);

  if (!program) {
    notFound();
  }

  const { previous, next } = getProgramSiblings(program.slug);

  return (
    <SiteShell>
      <ProgramDetailTemplate program={program} previous={previous} next={next} />
    </SiteShell>
  );
}
