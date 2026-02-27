import { serviceValuePillars } from '@/data/servicesPageContent';

export default function ServicesOverviewSection() {
  return (
    <section className="services-page-section" aria-labelledby="services-value-map-heading">
      <div className="section-intro">
        <p className="eyebrow">Value Map</p>
        <h2 id="services-value-map-heading">How each service contributes to growth.</h2>
      </div>

      <div className="services-value-map">
        {serviceValuePillars.map((pillar) => (
          <article key={pillar.title} className="services-value-row">
            <p className="services-value-title">{pillar.title}</p>
            <div className="services-value-columns">
              <div>
                <h3>Websites</h3>
                <p>{pillar.websites}</p>
              </div>
              <div>
                <h3>Social Media</h3>
                <p>{pillar.social}</p>
              </div>
              <div>
                <h3>Logos</h3>
                <p>{pillar.logos}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
