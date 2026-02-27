import TrackedPhoneLink from '@/components/ui/TrackedPhoneLink';
import { proofLogos } from '@/data/homeAgencyContent';
import { siteConfig } from '@/lib/seo';

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
          </article>
        ))}
      </div>

      <div className="home-inline-cta">
        <a className="button primary" href="/contact">Start My Website</a>
        <TrackedPhoneLink
          href={`tel:${siteConfig.phoneE164}`}
          eventName="click_call_cta_section"
          location="home_proof_wall"
          className="button ghost"
        >
          Call {siteConfig.phoneDisplay}
        </TrackedPhoneLink>
      </div>
    </section>
  );
}
