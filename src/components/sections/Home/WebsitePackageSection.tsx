import TrackedPhoneLink from '@/components/ui/TrackedPhoneLink';
import { pricingTiers } from '@/data/homeAgencyContent';
import { siteConfig } from '@/lib/seo';

export default function WebsitePackageSection() {
  return (
    <section className="section agency-package reveal" id="website-package">
      <div className="agency-package-intro">
        <p className="eyebrow">Pricing</p>
        <h2 className="mask-title">
          <span className="mask">
            <span className="mask-text">Choose a plan and start with the $800 website launch.</span>
          </span>
        </h2>
        <p className="section-sub">
          Form submission is the fastest path to kickoff. Phone support is always available.
        </p>
      </div>

      <div className="agency-pricing-grid">
        {pricingTiers.map((tier) => (
          <article
            key={tier.name}
            className={`agency-package-card ${tier.featured ? 'agency-package-card-featured' : ''}`}
          >
            {tier.badge ? <p className="agency-package-badge">{tier.badge}</p> : null}
            <p className="agency-package-tier-name">{tier.name}</p>
            <p className="agency-package-price">{tier.price}</p>
            <p className="agency-package-subtitle">{tier.subtitle}</p>
            <p className="agency-package-copy">{tier.description}</p>
            <ul aria-label={`${tier.name} plan features`}>
              {tier.features.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="agency-package-actions">
              <a className="button primary" href="/contact">{tier.ctaLabel}</a>
            </div>
          </article>
        ))}
      </div>
      <div className="pricing-phone-row">
        <TrackedPhoneLink
          href={`tel:${siteConfig.phoneE164}`}
          eventName="click_call_cta_section"
          location="home_pricing_shared_phone"
          className="button outline"
        >
          Prefer phone? Call {siteConfig.phoneDisplay}
        </TrackedPhoneLink>
      </div>
    </section>
  );
}
