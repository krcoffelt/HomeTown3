import TrackedPhoneLink from '@/components/ui/TrackedPhoneLink';
import { pricingTiers } from '@/data/homeAgencyContent';
import { siteConfig } from '@/lib/seo';

export default function ServicesPricingSection() {
  return (
    <section className="services-page-section" id="services-pricing" aria-labelledby="services-pricing-heading">
      <div className="section-intro">
        <p className="eyebrow">Pricing Summary</p>
        <h2 id="services-pricing-heading">Clear packages with the $800 website offer up front.</h2>
      </div>

      <div className="agency-pricing-grid services-pricing-grid">
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
          location="services_pricing_shared_phone"
          className="button outline"
        >
          Prefer to talk first? Call {siteConfig.phoneDisplay}
        </TrackedPhoneLink>
      </div>
    </section>
  );
}
