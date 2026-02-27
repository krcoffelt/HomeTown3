'use client';

import { useState } from 'react';
import { homeFaqItems } from '@/data/homeAgencyContent';

export default function HomeFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section home-faq reveal" aria-labelledby="home-faq-heading">
      <div className="section-intro">
        <p className="eyebrow">FAQ</p>
        <h2 id="home-faq-heading">Quick answers before you start.</h2>
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
    </section>
  );
}
