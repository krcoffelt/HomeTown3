import { Story } from '@/types/story';
import StoryCard from './StoryCard';

type StoryListProps = {
  stories: Story[];
  title?: string;
  subtitle?: string;
};

export default function StoryList({ stories, title, subtitle }: StoryListProps) {
  return (
    <section className="section story-list-wrap">
      {title ? (
        <div className="listing-hero">
          <p className="eyebrow">Stories</p>
          <h2>{title}</h2>
          {subtitle ? <p className="listing-lead">{subtitle}</p> : null}
        </div>
      ) : null}
      <div className="story-grid">
        {stories.map((story) => (
          <StoryCard key={story.slug} story={story} />
        ))}
      </div>
    </section>
  );
}
