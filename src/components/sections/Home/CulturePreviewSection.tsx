import { homeCultureFeature } from '@/data/culture';

export default function CulturePreviewSection() {
  return (
    <section className="culture" id="culture">
      <div className="culture-inner reveal">
        <p className="eyebrow">Arts & Culture</p>
        <h2 className="mask-title"><span className="mask"><span className="mask-text">{homeCultureFeature.title}</span></span></h2>
        <a className="button outline" href={homeCultureFeature.href}>{homeCultureFeature.ctaLabel}</a>
      </div>
    </section>
  );
}

