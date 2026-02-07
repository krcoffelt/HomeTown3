'use client';

import { useEffect, useRef } from 'react';
import { homepageCaseStudies } from '@/data/caseStudies';

export default function CaseStudiesPreviewSection() {
  const trackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let isDown = false;
    let startX = 0;
    let startScroll = 0;

    const onPointerDown = (event: PointerEvent) => {
      isDown = true;
      startX = event.clientX;
      startScroll = track.scrollLeft;
      track.classList.add('dragging');
      track.setPointerCapture?.(event.pointerId);
    };

    const onPointerMove = (event: PointerEvent) => {
      if (!isDown) return;
      const delta = event.clientX - startX;
      track.scrollLeft = startScroll - delta;
    };

    const onPointerUp = (event: PointerEvent) => {
      isDown = false;
      track.classList.remove('dragging');
      track.releasePointerCapture?.(event.pointerId);
    };

    track.addEventListener('pointerdown', onPointerDown);
    track.addEventListener('pointermove', onPointerMove);
    track.addEventListener('pointerup', onPointerUp);
    track.addEventListener('pointercancel', onPointerUp);

    return () => {
      track.removeEventListener('pointerdown', onPointerDown);
      track.removeEventListener('pointermove', onPointerMove);
      track.removeEventListener('pointerup', onPointerUp);
      track.removeEventListener('pointercancel', onPointerUp);
    };
  }, []);

  const scrollCarousel = (direction: 'prev' | 'next') => {
    if (!trackRef.current) return;
    const offset = direction === 'next' ? 320 : -320;
    trackRef.current.scrollBy({ left: offset, behavior: 'smooth' });
  };

  return (
    <section className="section split" id="case-studies">
      <div className="section-intro reveal">
        <p className="eyebrow">Case Studies</p>
        <h2 className="mask-title"><span className="mask"><span className="mask-text">Proof over promises. Real results for KC businesses.</span></span></h2>
        <a className="text-link" href="/case-studies">Explore</a>
      </div>
      <div className="carousel reveal" aria-label="Case studies">
        <button className="carousel-btn prev" aria-label="Previous" onClick={() => scrollCarousel('prev')}>‹</button>
        <div className="carousel-track" ref={trackRef}>
          {homepageCaseStudies.map((caseStudy, index) => (
            <a
              key={caseStudy.slug}
              href={caseStudy.href}
              className={`case-card${caseStudy.layout ? ` ${caseStudy.layout}` : ''}`}
              style={{ ['--i' as any]: index }}
            >
              <div className="case-media" style={{ backgroundImage: `url(${caseStudy.image})` }} />
              <div className="case-tag">{caseStudy.location}</div>
              <h3>{caseStudy.title}</h3>
              <p>{caseStudy.summary}</p>
            </a>
          ))}
        </div>
        <button className="carousel-btn next" aria-label="Next" onClick={() => scrollCarousel('next')}>›</button>
      </div>
    </section>
  );
}

