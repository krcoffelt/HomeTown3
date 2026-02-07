import Link from 'next/link';
import { CultureFeature } from '@/types/culture';

type CultureFeatureCardProps = {
  feature: CultureFeature;
};

export default function CultureFeatureCard({ feature }: CultureFeatureCardProps) {
  return (
    <article className="culture-feature-card">
      <p className="culture-feature-status">{feature.status ?? 'Feature'}</p>
      <h2>{feature.title}</h2>
      <p className="culture-feature-subtitle">{feature.subtitle}</p>
      {feature.description ? <p className="culture-feature-copy">{feature.description}</p> : null}
      <div className="culture-feature-meta">
        {feature.partner ? <span>{feature.partner}</span> : null}
        {feature.season ? <span>{feature.season}</span> : null}
      </div>
      <Link className="text-link" href={feature.href}>
        {feature.ctaLabel}
      </Link>
    </article>
  );
}
