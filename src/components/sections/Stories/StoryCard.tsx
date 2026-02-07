import Link from 'next/link';
import { Story } from '@/types/story';

type StoryCardProps = {
  story: Story;
};

export default function StoryCard({ story }: StoryCardProps) {
  return (
    <Link className="story-card" href={story.href}>
      {story.image ? (
        <div className="story-card-media" style={{ backgroundImage: `url(${story.image})` }} />
      ) : (
        <div className="story-card-media placeholder" />
      )}
      <div className="story-card-body">
        <p className="story-card-kicker">{story.label}</p>
        <h2>{story.title}</h2>
        {story.excerpt ? <p>{story.excerpt}</p> : null}
        <div className="story-card-meta">
          {story.publishedOn ? <span>{story.publishedOn}</span> : null}
          {story.readTime ? <span>{story.readTime}</span> : null}
        </div>
      </div>
    </Link>
  );
}
