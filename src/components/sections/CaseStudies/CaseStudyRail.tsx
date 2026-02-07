import { CaseStudy } from '@/types/caseStudy';
import CaseStudyCard from './CaseStudyCard';

type CaseStudyRailProps = {
  caseStudies: CaseStudy[];
};

export default function CaseStudyRail({ caseStudies }: CaseStudyRailProps) {
  return (
    <section className="section listing-page">
      <div className="listing-hero">
        <p className="eyebrow">Case Studies</p>
        <h1>Selected work across neighborhood businesses and local service teams.</h1>
        <p className="listing-lead">
          Each study outlines the context, execution choices, and measurable outcomes from the engagement.
        </p>
      </div>
      <div className="listing-grid">
        {caseStudies.map((caseStudy) => (
          <CaseStudyCard key={caseStudy.slug} caseStudy={caseStudy} />
        ))}
      </div>
    </section>
  );
}
