import Link from 'next/link';

type DetailHeroProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  description?: string;
  backHref: string;
  backLabel: string;
};

export default function DetailHero({
  eyebrow,
  title,
  subtitle,
  description,
  backHref,
  backLabel,
}: DetailHeroProps) {
  return (
    <section className="section detail-hero">
      <Link className="detail-back" href={backHref}>
        {backLabel}
      </Link>
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      {subtitle ? <p className="detail-subtitle">{subtitle}</p> : null}
      {description ? <p className="detail-description">{description}</p> : null}
    </section>
  );
}
