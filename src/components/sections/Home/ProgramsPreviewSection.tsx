import { allProgramsLink, homepagePrograms } from '@/data/programs';

export default function ProgramsPreviewSection() {
  return (
    <section className="section split" id="services">
      <div className="section-intro reveal">
        <p className="eyebrow">Services</p>
        <h2 className="mask-title"><span className="mask"><span className="mask-text">Practical marketing for real-world operators who want steady growth.</span></span></h2>
        <p className="section-sub">Start with one service or combine a full, simple monthly plan.</p>
        <a className="text-link" href="/programs">Explore Programs</a>
      </div>
      <div className="program-list reveal">
        {homepagePrograms.map((program, index) => (
          <a
            key={program.slug}
            className={`program-row${program.featured ? ' featured' : ''}`}
            href={program.href}
            style={{ ['--i' as any]: index }}
          >
            <span className="program-title">{program.title}</span>
            <span className="program-sub">{program.subtitle}</span>
            <span className="program-arrow">→</span>
          </a>
        ))}
        <a
          className={`program-row${allProgramsLink.muted ? ' muted' : ''}`}
          href={allProgramsLink.href}
          style={{ ['--i' as any]: homepagePrograms.length }}
        >
          <span className="program-title">{allProgramsLink.title}</span>
          <span className="program-sub">{allProgramsLink.subtitle}</span>
          <span className="program-arrow">→</span>
        </a>
      </div>
    </section>
  );
}

