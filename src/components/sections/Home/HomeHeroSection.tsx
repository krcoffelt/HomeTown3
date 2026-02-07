'use client';

import { useEffect, useRef } from 'react';

export default function HomeHeroSection() {
  const heroMediaRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const heroMedia = heroMediaRef.current;
    if (!heroMedia) return;

    const update = () => {
      const offset = window.scrollY * 0.08;
      heroMedia.style.setProperty('--parallax', `${offset}px`);
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  return (
    <>
      <section className="hero" id="top">
        <div className="hero-inner">
          <h1 data-hero style={{ ['--delay' as any]: '0.15s' }}>
            <span className="mask"><span className="mask-text line">Make your business the</span></span>
            <span className="mask"><span className="mask-text line">first call locals make.</span></span>
          </h1>
          <div className="hero-awards" data-hero style={{ ['--delay' as any]: '0.35s' }}>
            <span>Clients across KC</span>
            <span>Retail</span>
            <span>Food</span>
            <span>Home</span>
            <span>Wellness</span>
          </div>
        </div>
      </section>

      <section className="hero-media-block" aria-hidden="true">
        <div className="hero-media-wrap" ref={heroMediaRef}>
          <div className="hero-media" />
        </div>
        <div className="hero-actions" data-hero style={{ ['--delay' as any]: '0.55s' }}>
          <a className="button outline" href="#contact">Book the 48-hour audit</a>
        </div>
      </section>
    </>
  );
}

