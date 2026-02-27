'use client';

import { useState } from 'react';
import TrackedPhoneLink from '@/components/ui/TrackedPhoneLink';
import { homeTestimonials } from '@/data/homeAgencyContent';
import { siteConfig } from '@/lib/seo';

export default function TestimonialsCarouselSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const prev = () => {
    setActiveIndex((current) => (current === 0 ? homeTestimonials.length - 1 : current - 1));
  };

  const next = () => {
    setActiveIndex((current) => (current === homeTestimonials.length - 1 ? 0 : current + 1));
  };

  const testimonial = homeTestimonials[activeIndex];

  return (
    <section className="section home-testimonials reveal" aria-labelledby="testimonial-heading">
      <div className="section-intro home-testimonial-intro">
        <p className="eyebrow">Client Feedback</p>
        <h2 id="testimonial-heading">Local businesses see real movement after launch.</h2>
      </div>

      <article className="home-testimonial-card" aria-live="polite">
        <p className="home-testimonial-quote">“{testimonial.quote}”</p>
        <p className="home-testimonial-result">{testimonial.result}</p>
        <p className="home-testimonial-meta">{testimonial.name} · {testimonial.business}</p>
        <div className="home-testimonial-controls" role="group" aria-label="Testimonial controls">
          <button type="button" onClick={prev} aria-label="Previous testimonial">Prev</button>
          <button type="button" onClick={next} aria-label="Next testimonial">Next</button>
        </div>
      </article>

      <div className="home-inline-cta">
        <a className="button primary" href="/contact">Start My Website</a>
        <TrackedPhoneLink
          href={`tel:${siteConfig.phoneE164}`}
          eventName="click_call_cta_section"
          location="home_testimonials"
          className="button ghost"
        >
          Call {siteConfig.phoneDisplay}
        </TrackedPhoneLink>
      </div>
    </section>
  );
}
