import type { CSSProperties } from 'react';
import { homepageCaseStudies } from '@/data/caseStudies';

export default function CaseStudiesPreviewSection() {
  return (
    <section className="section case-section" id="case-studies">
      <div className="section-intro reveal case-section-intro">
        <p className="eyebrow">Case Studies</p>
        <h2 className="mask-title">
          <span className="mask">
            <span className="mask-text">Proof over promises. Real results for KC businesses.</span>
          </span>
        </h2>
        <a className="text-link" href="/case-studies">Explore</a>
      </div>
      <div className="case-rail reveal" aria-label="Case studies">
        {homepageCaseStudies.map((caseStudy, index) => (
          <a
            key={caseStudy.slug}
            href={caseStudy.href}
            className={`case-rail-item${caseStudy.layout ? ` ${caseStudy.layout}` : ''}`}
            style={{ '--i': index } as CSSProperties}
          >
            <div className="case-rail-media" style={{ backgroundImage: `url(${caseStudy.image})` }} />
            <p className="case-rail-title">{caseStudy.title}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
