import type { CSSProperties } from 'react';
import { allProgramsLink, homepagePrograms } from '@/data/programs';

export default function ProgramsPreviewSection() {
  return (
    <section className="section split" id="services">
      <div className="section-intro reveal">
        <p className="eyebrow">Programs</p>
        <h2 className="mask-title"><span className="mask"><span className="mask-text">Eleven ways we help local businesses earn attention, trust, and repeat demand.</span></span></h2>
        <p className="section-sub">Pick one engagement or combine a complete monthly growth system.</p>
        <a className="text-link" href="/programs">Explore Programs</a>
      </div>
      <div className="program-list reveal">
        {homepagePrograms.map((program, index) => (
          <a
            key={program.slug}
            className={`program-row${program.featured ? ' featured' : ''}`}
            href={program.href}
            style={{ '--i': index } as CSSProperties}
          >
            <span className="program-title">{program.title}</span>
            <span className="program-sub">{program.subtitle}</span>
            <span className="program-arrow">→</span>
          </a>
        ))}
        <a
          className={`program-row${allProgramsLink.muted ? ' muted' : ''}`}
          href={allProgramsLink.href}
          style={{ '--i': homepagePrograms.length } as CSSProperties}
        >
          <span className="program-title">{allProgramsLink.title}</span>
          <span className="program-sub">{allProgramsLink.subtitle}</span>
          <span className="program-arrow">→</span>
        </a>
      </div>
    </section>
  );
}
