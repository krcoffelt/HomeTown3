import { deliverablesMatrix } from '@/data/servicesPageContent';

export default function ServicesOverviewSection() {
  return (
    <section className="services-page-section" aria-labelledby="deliverables-matrix-heading">
      <div className="section-intro">
        <p className="eyebrow">Deliverables Matrix</p>
        <h2 id="deliverables-matrix-heading">Compare how each service contributes to growth.</h2>
      </div>

      <div className="services-matrix-wrap">
        <table className="services-matrix">
          <thead>
            <tr>
              <th>Category</th>
              <th>Websites</th>
              <th>Social Media</th>
              <th>Logos</th>
            </tr>
          </thead>
          <tbody>
            {deliverablesMatrix.map((row) => (
              <tr key={row.item}>
                <td>{row.item}</td>
                <td>{row.websites}</td>
                <td>{row.social}</td>
                <td>{row.logos}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
