'use client';

import { useEffect, useRef, useState } from 'react';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const heroMediaRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    document.body.classList.add('loaded');
    const handler = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', handler);
    return () => {
      document.body.classList.remove('loaded');
      window.removeEventListener('keydown', handler);
    };
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const revealItems = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    revealItems.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

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

  const menuStories = [
    {
      label: 'Story',
      title: 'First Fridays x Hometown',
      image:
        'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=640&q=80',
    },
    {
      label: 'Story',
      title: 'The Mural District',
      image:
        'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=640&q=80',
    },
    {
      label: 'Story',
      title: 'Small Business Saturdays',
      image:
        'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=640&q=80',
    },
  ];

  return (
    <div className={menuOpen ? 'menu-open' : ''}>
      <div className="bg-grain" aria-hidden="true" />

      <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="wordmark">Hometown</div>
        <button
          className="menu-toggle"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span />
          <span />
        </button>
      </header>

      <div className={`menu-overlay ${menuOpen ? 'active' : ''}`} aria-hidden={!menuOpen}>
        <div className="menu-panel">
          <div className="menu-left">
            <div className="menu-brand">Hometown</div>
            <nav className="menu-nav">
              {[
                { label: 'Case Studies', href: '#case-studies' },
                { label: 'Programs', href: '#programs' },
                { label: 'Arts & Culture', href: '#culture' },
              ].map((item, index) => (
                <a
                  key={item.label}
                  href={item.href}
                  style={{ ['--i' as any]: index }}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="menu-links">
              {['Work with us', 'Team', 'Careers', 'Press'].map((label, index) => (
                <button key={label} className="menu-pill" style={{ ['--i' as any]: index + 3 }}>
                  {label}
                </button>
              ))}
            </div>
            <div className="menu-meta">
              <p>Keep up to date</p>
              <div className="menu-field">
                <input type="email" placeholder="Your email" />
                <button>Subscribe</button>
              </div>
              <div className="menu-social">
                <a href="#">X (Twitter)</a>
                <a href="#">LinkedIn</a>
                <a href="#">Instagram</a>
              </div>
            </div>
          </div>
          <div className="menu-right">
            {menuStories.map((story, index) => (
              <div key={story.title} className="menu-story" style={{ ['--i' as any]: index + 2 }}>
                <div className="menu-story-media" style={{ backgroundImage: `url(${story.image})` }} />
                <div className="menu-story-text">
                  <span>{story.label}</span>
                  <h4>{story.title}</h4>
                </div>
                <span className="menu-story-arrow">→</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <main>
        <section className="hero" id="top">
          <div className="hero-inner">
            <p className="eyebrow" data-hero style={{ ['--delay' as any]: '0.1s' }}>Kansas City • Boutique marketing</p>
            <h1 data-hero style={{ ['--delay' as any]: '0.2s' }}>
              <span className="mask"><span className="mask-text line">Make your business</span></span>
              <span className="mask"><span className="mask-text line">impossible to ignore.</span></span>
            </h1>
            <div className="hero-awards" data-hero style={{ ['--delay' as any]: '0.35s' }}>
              <span>KC Small Business Awards</span>
              <span>2021</span>
              <span>2022</span>
              <span>2023</span>
              <span>2024</span>
            </div>
            <div className="hero-actions" data-hero style={{ ['--delay' as any]: '0.45s' }}>
              <a className="button outline" href="#contact">Book the 48‑hour audit</a>
            </div>
          </div>
        </section>

        <section className="hero-media-block" aria-hidden="true">
          <div className="hero-media-wrap" ref={heroMediaRef}>
            <div className="hero-media" />
          </div>
        </section>

        <section className="section split" id="programs">
          <div className="section-intro reveal">
            <p className="eyebrow">Programs</p>
            <h2 className="mask-title"><span className="mask"><span className="mask-text">Eleven ways we help KC businesses command attention and premium.</span></span></h2>
            <p className="section-sub">Start with a targeted program or combine for a full‑stack retainer.</p>
            <a className="text-link" href="#contact">Explore Programs</a>
          </div>
          <div className="program-list reveal">
            <a className="program-row" href="#contact" style={{ ['--i' as any]: 0 }}>
              <span className="program-title">Website Launch</span>
              <span className="program-sub">Fast, elegant, search‑ready.</span>
              <span className="program-arrow">→</span>
            </a>
            <a className="program-row" href="#contact" style={{ ['--i' as any]: 1 }}>
              <span className="program-title">Local Visibility</span>
              <span className="program-sub">Own the map pack in KC.</span>
              <span className="program-arrow">→</span>
            </a>
            <a className="program-row" href="#contact" style={{ ['--i' as any]: 2 }}>
              <span className="program-title">Social Systems</span>
              <span className="program-sub">Presence without burnout.</span>
              <span className="program-arrow">→</span>
            </a>
            <a className="program-row" href="#contact" style={{ ['--i' as any]: 3 }}>
              <span className="program-title">Paid Growth</span>
              <span className="program-sub">Disciplined, local ad spend.</span>
              <span className="program-arrow">→</span>
            </a>
            <a className="program-row muted" href="#contact" style={{ ['--i' as any]: 4 }}>
              <span className="program-title">All Programs (11)</span>
              <span className="program-sub">Build a custom stack.</span>
              <span className="program-arrow">→</span>
            </a>
          </div>
        </section>

        <section className="section split" id="case-studies">
          <div className="section-intro reveal">
            <p className="eyebrow">Case Studies</p>
            <h2 className="mask-title"><span className="mask"><span className="mask-text">We make your business so irresistible, success is inevitable.</span></span></h2>
            <a className="text-link" href="#contact">Explore</a>
          </div>
          <div className="carousel reveal" aria-label="Case studies">
            <button className="carousel-btn prev" aria-label="Previous" onClick={() => scrollCarousel('prev')}>‹</button>
            <div className="carousel-track" ref={trackRef}>
              <article className="case-card">
                <div
                  className="case-media"
                  style={{
                    backgroundImage:
                      'url(https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=900&q=80)',
                  }}
                />
                <div className="case-tag">Crossroads</div>
                <h3>Artisan bakery</h3>
                <p>+63% orders after a two‑page relaunch and map pack cadence.</p>
              </article>
              <article className="case-card" style={{ ['--i' as any]: 1 }}>
                <div
                  className="case-media"
                  style={{
                    backgroundImage:
                      'url(https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=900&q=80)',
                  }}
                />
                <div className="case-tag">Brookside</div>
                <h3>Yoga studio</h3>
                <p>2× intro pass purchases via refined offer ladder and reels kit.</p>
              </article>
              <article className="case-card" style={{ ['--i' as any]: 2 }}>
                <div
                  className="case-media"
                  style={{
                    backgroundImage:
                      'url(https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80)',
                  }}
                />
                <div className="case-tag">River Market</div>
                <h3>Vintage shop</h3>
                <p>Tripled foot traffic from review engine + weekly drops.</p>
              </article>
              <article className="case-card" style={{ ['--i' as any]: 3 }}>
                <div
                  className="case-media"
                  style={{
                    backgroundImage:
                      'url(https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=80)',
                  }}
                />
                <div className="case-tag">West Plaza</div>
                <h3>Dental studio</h3>
                <p>41% lift in booked consults after funnel rebuild.</p>
              </article>
              <article className="case-card" style={{ ['--i' as any]: 4 }}>
                <div
                  className="case-media"
                  style={{
                    backgroundImage:
                      'url(https://images.unsplash.com/photo-1491972690050-ba117db4dc09?auto=format&fit=crop&w=900&q=80)',
                  }}
                />
                <div className="case-tag">Waldo</div>
                <h3>Neighborhood cafe</h3>
                <p>58% lift in repeat visits after loyalty and menu refresh.</p>
              </article>
              <article className="case-card" style={{ ['--i' as any]: 5 }}>
                <div
                  className="case-media"
                  style={{
                    backgroundImage:
                      'url(https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=80)',
                  }}
                />
                <div className="case-tag">Plaza</div>
                <h3>Salon collective</h3>
                <p>Booked calendar in 30 days with a new offer ladder.</p>
              </article>
            </div>
            <button className="carousel-btn next" aria-label="Next" onClick={() => scrollCarousel('next')}>›</button>
          </div>
        </section>

        <section className="story-row reveal">
          <span className="story-label">Story</span>
          <a href="#contact">The House of Hometown</a>
        </section>

        <section className="culture" id="culture">
          <div className="culture-inner reveal">
            <p className="eyebrow">Arts & Culture</p>
            <h2 className="mask-title"><span className="mask"><span className="mask-text">Learning to see.</span></span></h2>
            <a className="button outline" href="#contact">Explore</a>
          </div>
        </section>

        <section className="section" id="pricing">
          <div className="section-heading centered reveal">
            <p className="eyebrow">Pricing</p>
            <h2 className="mask-title"><span className="mask"><span className="mask-text">Three retainers for KC operators.</span></span></h2>
            <p className="section-sub">Pause anytime. All include reporting and a KC‑only team.</p>
          </div>
          <div className="pricing-grid reveal">
            <div className="price-card">
              <h3>KC Starter</h3>
              <p className="price">$349/mo</p>
              <p className="desc">Site polish + social presence for single‑location shops.</p>
              <ul>
                <li>1‑page site or refresh</li>
                <li>Google Business tune‑up</li>
                <li>8 social posts + replies</li>
                <li>Monthly signal summary</li>
              </ul>
              <a className="button outline" href="#contact">Start here</a>
            </div>
            <div className="price-card featured">
              <div className="badge">Most chosen</div>
              <h3>KC Boost</h3>
              <p className="price">$549/mo</p>
              <p className="desc">Lead growth with ads, reviews, and multi‑page performance.</p>
              <ul>
                <li>Multi‑page site + lead forms</li>
                <li>Weekly Google Business updates</li>
                <li>12 social posts + community</li>
                <li>Ads launch + $150 credit</li>
                <li>Review automation & replies</li>
              </ul>
              <a className="button primary" href="#contact">Get KC Boost</a>
            </div>
            <div className="price-card">
              <h3>Neighborhood All‑In</h3>
              <p className="price">$899/mo</p>
              <p className="desc">Fractional marketing lead and continuous optimization.</p>
              <ul>
                <li>Custom pages + testing</li>
                <li>Weekly content + short video</li>
                <li>Always‑on ads management</li>
                <li>Quarterly strategy sessions</li>
                <li>Priority turnaround</li>
              </ul>
              <a className="button outline" href="#contact">Talk with us</a>
            </div>
          </div>
        </section>

        <section className="section" id="process">
          <div className="section-heading centered reveal">
            <p className="eyebrow">Process</p>
            <h2 className="mask-title"><span className="mask"><span className="mask-text">Documented, calm, and timeboxed.</span></span></h2>
          </div>
          <div className="process-grid reveal">
            <div className="process-step">
              <span className="step-num">01</span>
              <h3>Audit & plan</h3>
              <p>48‑hour review of web, Google Business, socials, and ads with a concise plan + budget.</p>
            </div>
            <div className="process-step">
              <span className="step-num">02</span>
              <h3>Build & launch</h3>
              <p>Pages, creatives, automations. Approvals in one shared board. Launch within 7–14 days.</p>
            </div>
            <div className="process-step">
              <span className="step-num">03</span>
              <h3>Run & report</h3>
              <p>Weekly optimizations, monthly narrative report, clear rules for when we scale or pause.</p>
            </div>
          </div>
        </section>

        <section className="section" id="contact">
          <div className="cta reveal">
            <div>
              <p className="eyebrow">Start here</p>
            <h2 className="mask-title"><span className="mask"><span className="mask-text">Tell us about your KC business. We’ll send a mini‑plan in 48 hours.</span></span></h2>
              <p className="section-sub">Simple, clear, and focused on what moves the needle.</p>
            </div>
            <form className="cta-form" onSubmit={(event) => event.preventDefault()}>
              <label htmlFor="name">Your name</label>
              <input id="name" name="name" type="text" placeholder="Taylor at Westside Floral" required />
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" placeholder="you@business.com" required />
              <label htmlFor="business">Business name</label>
              <input id="business" name="business" type="text" placeholder="Westside Floral" required />
              <label htmlFor="need">What do you need most?</label>
              <textarea id="need" name="need" rows={3} placeholder="New site, keep Google updated, and disciplined ads." required />
              <button className="button primary" type="submit">Send my KC mini‑plan</button>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div>
          <div className="wordmark">Hometown</div>
          <p>Kansas City born. Serving KC Metro & nearby towns.</p>
          <p>hello@hometownkc.com · (816) 555‑1910</p>
        </div>
        <div className="footer-links">
          <a href="#programs">Programs</a>
          <a href="#case-studies">Case Studies</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Contact</a>
        </div>
      </footer>
    </div>
  );
}
