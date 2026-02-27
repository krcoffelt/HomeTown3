import TrackedPhoneLink from '@/components/ui/TrackedPhoneLink';
import { siteConfig } from '@/lib/seo';

export default function ServicesHeroSection() {
  return (
    <section className="services-page-hero">
      <p className="eyebrow">Services</p>
      <h1>Website, social media, and logo execution for Kansas City businesses.</h1>
      <p className="listing-lead">
        Start with the website first, then layer in social and branding support as your pipeline grows.
      </p>
      <div className="services-page-hero-actions">
        <a className="button primary" href="/contact">Start My Website</a>
        <TrackedPhoneLink
          href={`tel:${siteConfig.phoneE164}`}
          eventName="click_call_cta_section"
          location="services_hero"
          className="button ghost"
        >
          Call {siteConfig.phoneDisplay}
        </TrackedPhoneLink>
      </div>
      <p className="services-page-hero-note">Website launch is the fastest first move. Add social or logo support next.</p>
    </section>
  );
}
