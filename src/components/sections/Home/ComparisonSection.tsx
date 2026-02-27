import { comparisonRows } from '@/data/homeAgencyContent';

export default function ComparisonSection() {
  return (
    <section className="section home-comparison reveal" aria-labelledby="comparison-heading">
      <div className="section-intro">
        <p className="eyebrow">Why This Works</p>
        <h2 id="comparison-heading">Done-for-you launch beats piecing it together alone.</h2>
      </div>

      <div className="home-comparison-table-wrap">
        <table className="home-comparison-table">
          <thead>
            <tr>
              <th>Category</th>
              <th>Hometown Setup</th>
              <th>DIY Route</th>
            </tr>
          </thead>
          <tbody>
            {comparisonRows.map((row) => (
              <tr key={row.feature}>
                <td>{row.feature}</td>
                <td>{row.doneForYou}</td>
                <td>{row.diy}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
