import { CaseStudy } from '@/types/caseStudy';
import { DetailHero, DetailListSection, DetailMeta, NextItemNav } from '@/components/sections/Detail';

type CaseStudyDetailTemplateProps = {
  caseStudy: CaseStudy;
  previous?: CaseStudy;
  next?: CaseStudy;
};

export default function CaseStudyDetailTemplate({
  caseStudy,
  previous,
  next,
}: CaseStudyDetailTemplateProps) {
  return (
    <main className="detail-page">
      <DetailHero
        eyebrow="Case Study"
        title={caseStudy.title}
        subtitle={caseStudy.summary}
        description={caseStudy.challenge}
        backHref="/case-studies"
        backLabel="Back to case studies"
      />
      <section className="section detail-body">
        <DetailMeta
          items={[
            { label: 'Client', value: caseStudy.client },
            { label: 'Industry', value: caseStudy.industry },
            { label: 'Location', value: caseStudy.location },
            { label: 'Year', value: caseStudy.year },
          ]}
        />
        <div className="detail-panels">
          <div
            className="detail-media"
            style={{ backgroundImage: `url(${caseStudy.image})` }}
            role="img"
            aria-label={`${caseStudy.title} feature image`}
          />
          <article className="detail-panel">
            <h2>Challenge</h2>
            <p>{caseStudy.challenge ?? caseStudy.summary}</p>
          </article>
          <DetailListSection title="Approach" items={caseStudy.approach} />
          <DetailListSection title="Results" items={caseStudy.results} />
        </div>
      </section>
      <NextItemNav
        previous={previous ? { title: previous.title, href: previous.href } : undefined}
        next={next ? { title: next.title, href: next.href } : undefined}
      />
    </main>
  );
}
