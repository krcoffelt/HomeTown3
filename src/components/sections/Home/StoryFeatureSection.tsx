import { featuredHomeStory } from '@/data/stories';
import { homeCultureFeature } from '@/data/culture';

export default function StoryFeatureSection() {
  const mediaStyle = featuredHomeStory.image
    ? { backgroundImage: `url(${featuredHomeStory.image})` }
    : undefined;

  return (
    <section className="story-culture reveal">
      <article className="story-culture-story">
        <div
          className={`story-culture-media${mediaStyle ? '' : ' placeholder'}`}
          style={mediaStyle}
          aria-hidden="true"
        />
        <div className="story-culture-controls" aria-hidden="true">
          <button type="button" aria-label="Previous story">‹</button>
          <button type="button" aria-label="Next story">›</button>
        </div>
        <p className="story-culture-label">{featuredHomeStory.label}</p>
        <a className="story-culture-link" href={featuredHomeStory.href}>
          <span>{featuredHomeStory.title}</span>
          <span>→</span>
        </a>
      </article>
      <div className="story-culture-aside">
        <p className="eyebrow">Arts & Culture</p>
        <h2 className="mask-title">
          <span className="mask">
            <span className="mask-text">{homeCultureFeature.title}</span>
          </span>
        </h2>
        <a className="text-link" href={homeCultureFeature.href}>{homeCultureFeature.ctaLabel}</a>
      </div>
    </section>
  );
}
