import { servicesProcess } from '@/data/servicesPageContent';

export default function ServicesProcessSection() {
  return (
    <section className="services-page-section" aria-labelledby="services-process-heading">
      <div className="section-intro">
        <p className="eyebrow">Process</p>
        <h2 id="services-process-heading">Simple timeline built for quick launch momentum.</h2>
      </div>

      <ol className="services-process-grid" aria-label="Services process">
        {servicesProcess.map((step, index) => (
          <li key={step.title} className="services-process-card">
            <p className="services-process-number">0{index + 1}</p>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
