import { featuredHomeStory } from '@/data/stories';

export default function StoryFeatureSection() {
  return (
    <section className="story-row reveal">
      <span className="story-label">{featuredHomeStory.label}</span>
      <a href={featuredHomeStory.href}>{featuredHomeStory.title}</a>
    </section>
  );
}

