import Link from 'next/link';
import { Program } from '@/types/program';

type ProgramCardProps = {
  program: Program;
};

export default function ProgramCard({ program }: ProgramCardProps) {
  return (
    <Link className="listing-card" href={program.href}>
      <p className="listing-card-kicker">Program</p>
      <h2>{program.title}</h2>
      <p className="listing-card-subtitle">{program.subtitle}</p>
      {program.overview ? <p className="listing-card-copy">{program.overview}</p> : null}
      <div className="listing-card-meta">
        {program.duration ? <span>{program.duration}</span> : null}
        {program.investment ? <span>{program.investment}</span> : null}
      </div>
    </Link>
  );
}
