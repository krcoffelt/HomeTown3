'use client';

import { useState } from 'react';
import TrackedPhoneLink from '@/components/ui/TrackedPhoneLink';
import { homeFaqItems } from '@/data/homeAgencyContent';
import { siteConfig } from '@/lib/seo';

export default function HomeFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section home-faq reveal" aria-labelledby="home-faq-heading">
      <div className="section-intro">
        <p className="eyebrow">FAQ</p>
        <h2 id="home-faq-heading">Questions local business owners ask before kickoff.</h2>
      </div>

      <div className="home-faq-list">
        {homeFaqItems.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <article key={item.question} className={`home-faq-item ${isOpen ? 'is-open' : ''}`}>
              <button
                type="button"
                className="home-faq-trigger"
                aria-expanded={isOpen}
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <span>{item.question}</span>
                <span aria-hidden="true">{isOpen ? '−' : '+'}</span>
              </button>
              {isOpen ? <p>{item.answer}</p> : null}
            </article>
          );
        })}
      </div>

      <div className="home-inline-cta">
        <a className="button primary" href="/contact">Start My Website</a>
        <TrackedPhoneLink
          href={`tel:${siteConfig.phoneE164}`}
          eventName="click_call_cta_section"
          location="home_faq"
          className="button ghost"
        >
          Call {siteConfig.phoneDisplay}
        </TrackedPhoneLink>
      </div>
    </section>
  );
}
