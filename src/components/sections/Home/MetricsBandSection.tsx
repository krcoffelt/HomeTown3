import { metricsBand } from '@/data/homeAgencyContent';

export default function MetricsBandSection() {
  return (
    <section className="section home-metrics-band reveal" aria-label="Performance highlights">
      <div className="home-metrics-grid">
        {metricsBand.map((item) => (
          <article key={item.label} className="home-metric-card">
            <p className="home-metric-value">{item.value}</p>
            <p className="home-metric-label">{item.label}</p>
            <p className="home-metric-note">{item.note}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
