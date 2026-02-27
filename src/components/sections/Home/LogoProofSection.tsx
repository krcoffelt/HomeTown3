import Image from 'next/image';
import { proofLogos } from '@/data/homeAgencyContent';
import { homeMediaProof } from '@/data/mediaProof';

export default function LogoProofSection() {
  return (
    <section className="section home-proof-wall reveal" aria-labelledby="proof-wall-heading">
      <div className="section-intro home-proof-intro">
        <p className="eyebrow">Trusted By Local Teams</p>
        <h2 id="proof-wall-heading">Built for Kansas City businesses that need a real website now.</h2>
        <p className="section-sub">
          We work with local service businesses and owner-led teams that need credibility, clarity,
          and a direct path to new leads.
        </p>
      </div>

      <div className="home-proof-grid" role="list" aria-label="Business categories and clients">
        {proofLogos.map((logo) => (
          <article key={logo.name} className="home-proof-logo" role="listitem">
            <p>{logo.name}</p>
            <span>{logo.category}</span>
            {logo.note ? <small>{logo.note}</small> : null}
          </article>
        ))}
      </div>

      <div className="home-proof-media-grid" aria-label="Recent creative proof">
        {homeMediaProof.map((item) => (
          <article key={item.src} className="home-proof-media-card">
            <div className="home-proof-media">
              <Image src={item.src} alt={item.alt} width={1200} height={800} />
            </div>
            <p>{item.tag}</p>
            <span>{item.caption}</span>
          </article>
        ))}
      </div>
    </section>
  );
}
