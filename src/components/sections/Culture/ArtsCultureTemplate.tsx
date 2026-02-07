import { CultureFeature } from '@/types/culture';
import { Story } from '@/types/story';
import CultureFeatureCard from './CultureFeatureCard';
import { StoryList } from '@/components/sections/Stories';

type ArtsCultureTemplateProps = {
  cultureFeatures: CultureFeature[];
  stories: Story[];
};

export default function ArtsCultureTemplate({ cultureFeatures, stories }: ArtsCultureTemplateProps) {
  const primaryFeature = cultureFeatures[0];
  const supportingFeatures = cultureFeatures.slice(1);

  return (
    <main className="culture-page">
      <section className="section culture-hero">
        <p className="eyebrow">Arts &amp; Culture</p>
        <h1>{primaryFeature?.title ?? 'Local stories and cultural collaborations.'}</h1>
        <p className="culture-hero-copy">
          {primaryFeature?.description ??
            'A living collection of stories that connects culture, business, and neighborhood momentum.'}
        </p>
      </section>
      <section className="section culture-feature-grid">
        {cultureFeatures.map((feature) => (
          <CultureFeatureCard key={feature.slug} feature={feature} />
        ))}
      </section>
      <StoryList
        stories={stories}
        title="Field notes and local stories"
        subtitle="Editorial coverage on how operators and creatives build lasting local impact."
      />
      {supportingFeatures.length ? (
        <section className="section culture-notes">
          <div className="culture-notes-grid">
            {supportingFeatures.map((feature) => (
              <article className="culture-note" key={feature.slug}>
                <h3>{feature.title}</h3>
                <p>{feature.subtitle}</p>
              </article>
            ))}
          </div>
        </section>
      ) : null}
    </main>
  );
}
