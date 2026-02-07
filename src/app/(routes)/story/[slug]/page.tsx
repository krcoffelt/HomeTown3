import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import SiteShell from '@/components/site/SiteShell';
import { getStoryBySlug, getStorySiblings } from '@/data/stories';
import { StoryDetailTemplate } from '@/components/sections/Stories';
import { createPageMetadata } from '@/lib/seo';

type StoryDetailPageProps = {
  params: {
    slug: string;
  };
};

export function generateMetadata({ params }: StoryDetailPageProps): Metadata {
  const story = getStoryBySlug(params.slug);

  if (!story) {
    return createPageMetadata({
      title: 'Story',
      description: 'Story details from Hometown.',
      path: '/arts-culture',
    });
  }

  return createPageMetadata({
    title: story.title,
    description: story.excerpt ?? 'Story from Hometown.',
    path: story.href,
    image: story.image,
  });
}

export default function StoryDetailPage({ params }: StoryDetailPageProps) {
  const story = getStoryBySlug(params.slug);

  if (!story) {
    notFound();
  }

  const { previous, next } = getStorySiblings(story.slug);

  return (
    <SiteShell>
      <StoryDetailTemplate story={story} previous={previous} next={next} />
    </SiteShell>
  );
}
