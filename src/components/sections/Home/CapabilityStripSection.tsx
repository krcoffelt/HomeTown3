import { capabilityItems } from '@/data/homeAgencyContent';

export default function CapabilityStripSection() {
  return (
    <section className="section home-capability-strip reveal" aria-labelledby="capability-heading">
      <div className="section-intro">
        <p className="eyebrow">Capabilities</p>
        <h2 id="capability-heading">Website-first execution with support where it matters.</h2>
      </div>
      <div className="home-capability-grid">
        {capabilityItems.map((item) => (
          <article key={item.title} className="home-capability-card">
            <h3>{item.title}</h3>
            <p>{item.summary}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
