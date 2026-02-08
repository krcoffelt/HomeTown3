'use client';

import type { CSSProperties } from 'react';
import UnicornScene from 'unicornstudio-react/next';

const proofItems = ['Retail', 'Food & Beverage', 'Home Services', 'Wellness', 'Professional Services'];
const heroHeadingStyle = { '--delay': '0.15s' } as CSSProperties;
const heroProofStyle = { '--delay': '0.35s' } as CSSProperties;

export default function HomeHeroSection() {
  return (
    <section className="hero" id="top">
      <div className="hero-bg" aria-hidden="true">
        <UnicornScene
          projectId="67bMayuIex6ZsrkBXpsY"
          sdkUrl="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.0.5/dist/unicornStudio.umd.js"
          width="100%"
          height="100%"
          scale={1}
          dpi={1.5}
          fps={60}
          lazyLoad={true}
          production={true}
          className="hero-unicorn-scene"
          altText="Hero background animation"
          ariaLabel="Hero background animation"
        />
      </div>
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
