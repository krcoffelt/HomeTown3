import type { CSSProperties } from 'react';
import Image from 'next/image';
import { homepageCaseStudies } from '@/data/caseStudies';

export default function CaseStudiesPreviewSection() {
  const previewCaseStudies = homepageCaseStudies.slice(0, 3);

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
        {previewCaseStudies.map((caseStudy, index) => (
          <a
            key={caseStudy.slug}
            href={caseStudy.href}
            className={`case-rail-item${caseStudy.layout ? ` ${caseStudy.layout}` : ''}`}
            style={{ '--i': index } as CSSProperties}
          >
            <div className="case-rail-media">
              <Image
                src={caseStudy.image}
                alt={caseStudy.title}
                fill
                sizes="(max-width: 720px) 84vw, (max-width: 1200px) 38vw, 32vw"
                className="case-rail-media-img"
                loading="lazy"
                quality={65}
              />
            </div>
            <p className="case-rail-title">{caseStudy.title}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
