'use client';

import { useEffect, useRef, useState } from 'react';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const trackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
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

  const scrollCarousel = (direction: 'prev' | 'next') => {
    if (!trackRef.current) return;
    const offset = direction === 'next' ? 320 : -320;
    trackRef.current.scrollBy({ left: offset, behavior: 'smooth' });
  };

  return (
    <div className={menuOpen ? 'menu-open' : ''}>
      <div className="bg-grain" aria-hidden="true" />

      <header className="site-header">
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
        <div className="menu-content">
          <div className="menu-brand">Hometown</div>
          <nav className="menu-nav">
            <a href="#programs" onClick={() => setMenuOpen(false)}>Programs</a>
            <a href="#case-studies" onClick={() => setMenuOpen(false)}>Case Studies</a>
            <a href="#pricing" onClick={() => setMenuOpen(false)}>Pricing</a>
            <a href="#process" onClick={() => setMenuOpen(false)}>Process</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          </nav>
          <div className="menu-links">
            <button className="menu-pill">Work with us</button>
            <button className="menu-pill">Team</button>
            <button className="menu-pill">Careers</button>
            <button className="menu-pill">Press</button>
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
      </div>

      <main>
        <section className="hero" id="top">
          <div className="hero-inner">
            <p className="eyebrow">Kansas City • Boutique marketing</p>
            <h1>Make your business impossible to ignore.</h1>
            <p className="lede">Hometown helps KC small businesses look premium, get found, and convert—without agency bloat.</p>
            <div className="hero-actions">
              <a className="button primary" href="#contact">Book the 48‑hour audit</a>
            </div>
            <div className="hero-awards">
              <span>KC Small Business Awards</span>
              <span>2021</span>
              <span>2022</span>
              <span>2023</span>
              <span>2024</span>
            </div>
          </div>
          <div className="hero-media" aria-hidden="true" />
          <div className="hero-badges">
            <span>Crossroads</span>
            <span>Brookside</span>
            <span>River Market</span>
            <span>Waldo</span>
            <span>Plaza</span>
            <span>Westport</span>
          </div>
        </section>

        <section className="section split" id="programs">
          <div className="section-intro reveal">
            <p className="eyebrow">Programs</p>
            <h2>Eleven ways we help KC businesses command attention and premium.</h2>
            <p className="section-sub">Start with a targeted program or combine for a full‑stack retainer.</p>
            <a className="text-link" href="#contact">Explore Programs</a>
          </div>
          <div className="program-list reveal">
            <a className="program-row" href="#contact">
              <span>Website Launch</span>
              <span>Fast, elegant, search‑ready.</span>
            </a>
            <a className="program-row" href="#contact">
              <span>Local Visibility</span>
              <span>Own the map pack in KC.</span>
            </a>
            <a className="program-row" href="#contact">
              <span>Social Systems</span>
              <span>Presence without burnout.</span>
            </a>
            <a className="program-row" href="#contact">
              <span>Review Engine</span>
              <span>More reviews, better replies.</span>
            </a>
            <a className="program-row" href="#contact">
              <span>Paid Growth</span>
              <span>Disciplined, local ad spend.</span>
            </a>
            <a className="program-row" href="#contact">
              <span>Design Refresh</span>
              <span>Consistent, premium visuals.</span>
            </a>
            <a className="program-row muted" href="#contact">
              <span>All Programs (11)</span>
              <span>Build a custom stack.</span>
            </a>
          </div>
        </section>

        <section className="section split" id="case-studies">
          <div className="section-intro reveal">
            <p className="eyebrow">Case Studies</p>
            <h2>We make your business so irresistible, success is inevitable.</h2>
            <a className="text-link" href="#contact">Explore</a>
          </div>
          <div className="carousel reveal" aria-label="Case studies">
            <button className="carousel-btn prev" aria-label="Previous" onClick={() => scrollCarousel('prev')}>‹</button>
            <div className="carousel-track" ref={trackRef}>
              <article className="case-card">
                <div className="case-media" />
                <div className="case-tag">Crossroads</div>
                <h3>Artisan bakery</h3>
                <p>+63% orders after a two‑page relaunch and map pack cadence.</p>
              </article>
              <article className="case-card">
                <div className="case-media" />
                <div className="case-tag">Brookside</div>
                <h3>Yoga studio</h3>
                <p>2× intro pass purchases via refined offer ladder and reels kit.</p>
              </article>
              <article className="case-card">
                <div className="case-media" />
                <div className="case-tag">River Market</div>
                <h3>Vintage shop</h3>
                <p>Tripled foot traffic from review engine + weekly drops.</p>
              </article>
              <article className="case-card">
                <div className="case-media" />
                <div className="case-tag">West Plaza</div>
                <h3>Dental studio</h3>
                <p>41% lift in booked consults after funnel rebuild.</p>
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
            <h2>Learning to see.</h2>
            <a className="button ghost" href="#contact">Explore</a>
          </div>
        </section>

        <section className="section" id="pricing">
          <div className="section-heading centered reveal">
            <p className="eyebrow">Pricing</p>
            <h2>Three retainers for KC operators.</h2>
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
              <a className="button ghost" href="#contact">Start here</a>
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
              <a className="button ghost" href="#contact">Talk with us</a>
            </div>
          </div>
        </section>

        <section className="section" id="process">
          <div className="section-heading centered reveal">
            <p className="eyebrow">Process</p>
            <h2>Documented, calm, and timeboxed.</h2>
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
              <h2>Tell us about your KC business. We’ll send a mini‑plan in 48 hours.</h2>
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
