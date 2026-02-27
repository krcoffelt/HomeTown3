import TrackedPhoneLink from '@/components/ui/TrackedPhoneLink';
import { siteConfig } from '@/lib/seo';

export default function ServicesCTASection() {
  return (
    <section className="section services-page-final-cta">
      <div className="services-page-final-cta-card">
        <p className="eyebrow">Start Here</p>
        <h2>Submit your project details and we can start your website build.</h2>
        <p>
          Form submission is the primary path. If you need answers now, call directly and we can scope immediately.
        </p>
        <div className="services-page-hero-actions">
          <a className="button primary" href="/contact">Start My Website</a>
          <TrackedPhoneLink
            href={`tel:${siteConfig.phoneE164}`}
            eventName="click_call_cta_section"
            location="services_final_cta"
            className="button ghost"
          >
            Call {siteConfig.phoneDisplay}
          </TrackedPhoneLink>
        </div>
        <p className="services-page-final-note">We prioritize the website first so conversions can start immediately.</p>
      </div>
    </section>
  );
}
