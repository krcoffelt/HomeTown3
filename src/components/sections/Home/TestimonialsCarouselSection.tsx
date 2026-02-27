'use client';

import { useState } from 'react';
import { homeTestimonials, metricsBand } from '@/data/homeAgencyContent';

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

      <div className="home-results-band" aria-label="Performance highlights">
        {metricsBand.map((metric) => (
          <article key={metric.label} className="home-result-card">
            <p className="home-result-value">{metric.value}</p>
            <p className="home-result-label">{metric.label}</p>
            <p className="home-result-note">{metric.note}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
