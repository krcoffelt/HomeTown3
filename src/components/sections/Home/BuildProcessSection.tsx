import type { CSSProperties } from 'react';

const processSteps = [
  {
    title: 'Quick Intake',
    detail: 'You send your services, photos, and goals in one short form.',
  },
  {
    title: 'Design + Copy',
    detail: 'We write your core messaging and build a clean, conversion-ready layout.',
  },
  {
    title: 'Review',
    detail: 'You send feedback and we complete revisions quickly.',
  },
  {
    title: 'Launch',
    detail: 'Your site goes live with analytics and a clear CTA path.',
  },
];

export default function BuildProcessSection() {
  return (
    <section className="section agency-process" id="process">
      <div className="section-intro reveal">
        <p className="eyebrow">How It Works</p>
        <h2 className="mask-title">
          <span className="mask">
            <span className="mask-text">Four steps from idea to live website.</span>
          </span>
        </h2>
      </div>

      <ol className="agency-process-grid" aria-label="Website process">
        {processSteps.map((step, index) => (
          <li key={step.title} className="agency-process-card reveal" style={{ '--i': index } as CSSProperties}>
            <span className="agency-process-num">0{index + 1}</span>
            <h3>{step.title}</h3>
            <p>{step.detail}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
