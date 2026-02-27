import Image from 'next/image';
import TrackedPhoneLink from '@/components/ui/TrackedPhoneLink';
import { servicesMediaProof } from '@/data/mediaProof';
import { siteConfig } from '@/lib/seo';

export default function ServicesHeroSection() {
  return (
    <section className="services-page-hero">
      <div className="services-page-hero-copy">
        <p className="eyebrow">Services</p>
        <h1>Website-first services for Kansas City businesses.</h1>
        <p className="listing-lead">
          Start with the fastest conversion win, then layer social and brand support without restarting your system.
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
        <p className="services-page-hero-note">Website launch is the highest-leverage first step for most businesses.</p>
      </div>
      <article className="services-page-hero-proof">
        <div className="services-page-hero-proof-media">
          <Image src={servicesMediaProof.src} alt={servicesMediaProof.alt} width={1200} height={800} />
        </div>
        <p>{servicesMediaProof.tag}</p>
        <span>{servicesMediaProof.caption}</span>
      </article>
    </section>
  );
}
