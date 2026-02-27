import type { CSSProperties } from 'react';

const services = [
  {
    title: 'Websites',
    subtitle: 'Main Offer',
    description: 'Conversion-focused websites that explain your value in seconds and make it easy to book or buy.',
    bullets: ['Flat $800 launch package', 'Mobile-first build', 'Copy + layout included'],
    linkLabel: 'Start website project',
    href: '/contact',
  },
  {
    title: 'Social Media',
    subtitle: 'Growth Support',
    description: 'Done-for-you monthly content systems that keep your business visible and trusted in your local market.',
    bullets: ['Content calendar planning', 'Reels + static post design', 'Caption and posting support'],
    linkLabel: 'Add social support',
    href: '/contact',
  },
  {
    title: 'Logos',
    subtitle: 'Brand Foundation',
    description: 'Simple, memorable logo packages to help your business look established and consistent across channels.',
    bullets: ['Primary + alternate logo', 'Color + type direction', 'Social profile kit'],
    linkLabel: 'Request logo package',
    href: '/contact',
  },
];

export default function AgencyServicesSection() {
  return (
    <section className="section agency-services reveal" id="services">
      <div className="section-intro reveal">
        <p className="eyebrow">Service Rail</p>
        <h2 className="mask-title">
          <span className="mask">
            <span className="mask-text">Websites first. Social and logos ready when you need them.</span>
          </span>
        </h2>
        <p className="section-sub">
          Each service is scoped for local Kansas City businesses that want practical execution and clear outcomes.
        </p>
      </div>

      <div className="agency-service-grid">
        {services.map((service, index) => (
          <article key={service.title} className="agency-service-card reveal" style={{ '--i': index } as CSSProperties}>
            <p className="agency-service-subtitle">{service.subtitle}</p>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <ul aria-label={`${service.title} deliverables`}>
              {service.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
            <a className="text-link" href={service.href}>{service.linkLabel}</a>
          </article>
        ))}
      </div>
    </section>
  );
}
