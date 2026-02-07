import { Program } from '@/types/program';
import ProgramCard from './ProgramCard';

type ProgramListProps = {
  programs: Program[];
};

export default function ProgramList({ programs }: ProgramListProps) {
  return (
    <section className="section listing-page">
      <div className="listing-hero">
        <p className="eyebrow">Programs</p>
        <h1>Marketing programs designed for practical, measurable growth.</h1>
        <p className="listing-lead">
          Start with one track or combine multiple programs into a focused monthly operating plan.
        </p>
      </div>
      <div className="listing-grid">
        {programs.map((program) => (
          <ProgramCard key={program.slug} program={program} />
        ))}
      </div>
    </section>
  );
}
