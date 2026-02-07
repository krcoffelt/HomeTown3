import { Story } from '@/types/story';
import { DetailHero, DetailListSection, DetailMeta, NextItemNav } from '@/components/sections/Detail';

type StoryDetailTemplateProps = {
  story: Story;
  previous?: Story;
  next?: Story;
};

export default function StoryDetailTemplate({ story, previous, next }: StoryDetailTemplateProps) {
  return (
    <main className="detail-page">
      <DetailHero
        eyebrow={story.label}
        title={story.title}
        subtitle={story.excerpt}
        description={story.location}
        backHref="/arts-culture"
        backLabel="Back to arts and culture"
      />
      <section className="section detail-body">
        <DetailMeta
          items={[
            { label: 'Published', value: story.publishedOn },
            { label: 'Reading time', value: story.readTime },
            { label: 'Location', value: story.location },
          ]}
        />
        <article className="story-article">
          {(story.body ?? [story.excerpt ?? 'Story details coming soon.']).map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </article>
        <DetailListSection title="Key highlights" items={story.highlights} />
      </section>
      <NextItemNav
        previous={previous ? { title: previous.title, href: previous.href } : undefined}
        next={next ? { title: next.title, href: next.href } : undefined}
      />
    </main>
  );
}
