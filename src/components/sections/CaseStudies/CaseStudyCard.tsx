import Link from 'next/link';
import { CaseStudy } from '@/types/caseStudy';

type CaseStudyCardProps = {
  caseStudy: CaseStudy;
};

export default function CaseStudyCard({ caseStudy }: CaseStudyCardProps) {
  return (
    <Link className="listing-card case-listing-card" href={caseStudy.href}>
      <div className="case-listing-media" style={{ backgroundImage: `url(${caseStudy.image})` }} />
      <p className="listing-card-kicker">{caseStudy.location}</p>
      <h2>{caseStudy.title}</h2>
      <p className="listing-card-copy">{caseStudy.summary}</p>
      <div className="listing-card-meta">
        {caseStudy.client ? <span>{caseStudy.client}</span> : null}
        {caseStudy.industry ? <span>{caseStudy.industry}</span> : null}
        {caseStudy.year ? <span>{caseStudy.year}</span> : null}
      </div>
    </Link>
  );
}
