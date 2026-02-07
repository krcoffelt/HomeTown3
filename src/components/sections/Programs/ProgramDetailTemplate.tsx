import Link from 'next/link';
import { Program } from '@/types/program';
import { DetailHero, DetailListSection, DetailMeta, NextItemNav } from '@/components/sections/Detail';

type ProgramDetailTemplateProps = {
  program: Program;
  previous?: Program;
  next?: Program;
};

export default function ProgramDetailTemplate({
  program,
  previous,
  next,
}: ProgramDetailTemplateProps) {
  return (
    <main className="detail-page">
      <DetailHero
        eyebrow="Program"
        title={program.title}
        subtitle={program.subtitle}
        description={program.overview}
        backHref="/programs"
        backLabel="Back to programs"
      />
      <section className="section detail-body">
        <DetailMeta
          items={[
            { label: 'Duration', value: program.duration },
            { label: 'Investment', value: program.investment },
          ]}
        />
        <div className="detail-panels">
          <article className="detail-panel">
            <h2>Overview</h2>
            <p>{program.overview ?? program.subtitle}</p>
          </article>
          <DetailListSection title="Deliverables" items={program.deliverables} />
          <DetailListSection title="Expected outcomes" items={program.outcomes} />
          <DetailListSection title="Ideal for" items={program.idealFor} />
          <div className="detail-cta-row">
            <Link className="button primary" href="/contact">
              {program.ctaLabel ?? 'Discuss this program'}
            </Link>
          </div>
        </div>
      </section>
      <NextItemNav
        previous={previous ? { title: previous.title, href: previous.href } : undefined}
        next={next ? { title: next.title, href: next.href } : undefined}
      />
    </main>
  );
}
