'use client';

import TrackedPhoneLink from '@/components/ui/TrackedPhoneLink';
import { siteConfig } from '@/lib/seo';

const checklist = [
  'Clear timeline and deliverables before kickoff',
  'One team handling website, social media, and brand design',
  'Built to drive leads, not just look good',
];

export default function ConversionCtaSection() {
  return (
    <section className="section agency-final-cta reveal" id="start">
      <div className="agency-final-cta-card">
        <p className="eyebrow">Ready To Launch?</p>
        <h2>Start your $800 website and go live fast.</h2>
        <p>
          Tell us about your business in a few minutes and we&apos;ll map the fastest path to launch.
        </p>
        <ul aria-label="Why businesses choose Hometown">
          {checklist.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div className="agency-final-actions">
          <a className="button primary" href="/contact">Start My Website</a>
          <TrackedPhoneLink
            href={`tel:${siteConfig.phoneE164}`}
            eventName="click_call_cta_section"
            location="homepage_final_cta"
            className="button ghost"
          >
            Call {siteConfig.phoneDisplay}
          </TrackedPhoneLink>
        </div>
        <p className="agency-final-email">
          Prefer email? <a className="text-link" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
        </p>
      </div>
    </section>
  );
}
