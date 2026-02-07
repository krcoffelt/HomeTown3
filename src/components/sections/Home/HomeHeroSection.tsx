'use client';

import type { CSSProperties } from 'react';

const proofItems = ['Retail', 'Food & Beverage', 'Home Services', 'Wellness', 'Professional Services'];
const heroHeadingStyle = { '--delay': '0.15s' } as CSSProperties;
const heroProofStyle = { '--delay': '0.35s' } as CSSProperties;

export default function HomeHeroSection() {
  return (
    <section className="hero" id="top">
      <div className="hero-inner">
        <h1 data-hero style={heroHeadingStyle}>
          <span className="mask">
            <span className="mask-text line">Make your business the first call locals make.</span>
          </span>
        </h1>
        <div className="hero-proof" data-hero style={heroProofStyle}>
          <p className="hero-proof-label">Kansas City Marketing Studio</p>
          <ul className="hero-proof-list" aria-label="Industries served">
            {proofItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
