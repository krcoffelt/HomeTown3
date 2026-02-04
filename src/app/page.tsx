'use client';

import { FormEvent } from 'react';

export default function Home() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = (data.get('name') as string) || 'KC friend';
    alert(`Thanks, ${name}! We'll email your KC mini-plan within 48 hours.`);
    form.reset();
  };

  return (
    <div>
      <div className="bg-texture" aria-hidden="true" />

      <header className="topbar">
        <div className="logo-mark" aria-label="Hometown">Hometown</div>
        <nav className="nav-links" aria-label="Primary">
          <a href="#services">Services</a>
          <a href="#pricing">Pricing</a>
          <a href="#work">KC Wins</a>
          <a href="#contact" className="pill">
            Start a Project
          </a>
        </nav>
      </header>

      <main>
        <section className="hero luxe-hero" id="top">
          <div className="hero-copy">
            <div className="pill-dark">Kansas City • Boutique marketing</div>
            <h1>KC marketing that feels bespoke—without agency bloat.</h1>
            <p className="lede">
              We craft disciplined web, local, and demand programs for Kansas City owners who want an elevated presence, faster leads, and calm reporting.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#contact">
                Book the 48-hour audit
              </a>
              <a className="button ghost" href="#services">
                See how we work
              </a>
            </div>
            <div className="hero-points">
              <span>No setup fees</span>
              <span>KC-only team</span>
              <span>One Slack thread</span>
            </div>
          </div>

          <div className="score-card" aria-label="Before and after snapshot">
            <header>
              <p className="eyebrow">Presence score</p>
              <h3>From “hidden” to “booked.”</h3>
            </header>
            <div className="score-rows">
              <div className="score-row">
                <div>
                  <p className="meta-label">Before</p>
                  <p className="meta-value weak">62 / 100</p>
                </div>
                <div>
                  <p className="meta-label">After 60 days</p>
                  <p className="meta-value strong">91 / 100</p>
                </div>
              </div>
              <ul className="score-list">
                <li>Local SEO fixes + offer clarity</li>
                <li>Maps posts and photo cadence</li>
                <li>Retargeting with tight negative lists</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="strip" id="services">
          <div className="section-heading">
            <p className="eyebrow">What we deliver</p>
            <h2>Three pillars, zero fluff.</h2>
            <p className="section-sub">Each pillar has a fixed scope, measurable signals, and a calm handoff.</p>
          </div>
          <div className="pillar-grid">
            <article className="pillar">
              <div className="tag">Presence</div>
              <h3>Signature sites + local SEO</h3>
              <p>Luxury-grade single or multi-page builds with KC search intent and instant lead routing.</p>
              <div className="mini-list">
                <span>1–5 page builds</span>
                <span>Schema + speed</span>
                <span>Forms wired to your inbox</span>
              </div>
            </article>
            <article className="pillar">
              <div className="tag">Demand</div>
              <h3>Disciplined ads + funnels</h3>
              <p>Hyperlocal Google + Meta with controlled tests, negative lists, and conversion-first landing tweaks.</p>
              <div className="mini-list">
                <span>Launch + $150 ad credit</span>
                <span>Offer + landing pair</span>
                <span>Scale/stop rules in writing</span>
              </div>
            </article>
            <article className="pillar">
              <div className="tag">Reputation</div>
              <h3>Google Business + reviews</h3>
              <p>Map pack dominance with weekly posts, photo cadence, and on-brand review replies.</p>
              <div className="mini-list">
                <span>Profile clean-up</span>
                <span>Review ask &amp; reply system</span>
                <span>Photo/post calendar</span>
              </div>
            </article>
          </div>
        </section>

        <section className="strip alt" id="pricing">
          <div className="section-heading">
            <p className="eyebrow">Pricing built for KC</p>
            <h2>Three clear retainers. Pause anytime. No setup fees.</h2>
            <p className="section-sub">All plans include reporting, inbox wiring, and a KC-only team.</p>
          </div>
          <div className="pricing-grid luxe">
            <div className="price-card framed">
              <h3>KC Starter</h3>
              <p className="price">$349/mo</p>
              <p className="desc">Site polish + social presence, sized for single-location shops.</p>
              <ul>
                <li>1-page site or refresh</li>
                <li>Google Business tune-up</li>
                <li>8 social posts + replies</li>
                <li>Monthly signal summary</li>
              </ul>
              <a className="button ghost" href="#contact">
                Start here
              </a>
            </div>
            <div className="price-card framed featured">
              <div className="badge">Most chosen</div>
              <h3>KC Boost</h3>
              <p className="price">$549/mo</p>
              <p className="desc">Lead growth with ads, reviews, and multi-page site performance.</p>
              <ul>
                <li>Multi-page site + lead forms</li>
                <li>Weekly Google Business updates</li>
                <li>12 social posts + community mgmt</li>
                <li>Ads launch + $150 ad credit</li>
                <li>Review automation &amp; replies</li>
              </ul>
              <a className="button primary" href="#contact">
                Get KC Boost
              </a>
            </div>
            <div className="price-card framed">
              <h3>Neighborhood All-In</h3>
              <p className="price">$899/mo</p>
              <p className="desc">Fractional marketing lead and continuous optimization.</p>
              <ul>
                <li>Custom pages + testing</li>
                <li>Weekly content + short-form video</li>
                <li>Always-on ads management</li>
                <li>Quarterly strategy sessions</li>
                <li>Priority turnaround</li>
              </ul>
              <a className="button ghost" href="#contact">
                Talk with us
              </a>
            </div>
          </div>
          <p className="fineprint">
            One-time needs? <a href="#contact">Tell us the scope</a> — we quote fast.
          </p>
        </section>

        <section className="strip" id="work">
          <div className="section-heading">
            <p className="eyebrow">KC proof</p>
            <h2>Recent neighborhood wins.</h2>
          </div>
          <div className="wins luxe-wins">
            <div className="win-card">
              <div className="chip">Crossroads</div>
              <h3>Artisan bakery</h3>
              <p>+63% orders after a two-page relaunch and photo-led Google Business cadence.</p>
            </div>
            <div className="win-card">
              <div className="chip">Brookside</div>
              <h3>Yoga studio</h3>
              <p>2× intro pass purchases via refined offer ladder and quarterly reel kits.</p>
            </div>
            <div className="win-card">
              <div className="chip">River Market</div>
              <h3>Vintage shop</h3>
              <p>Tripled foot traffic from map pack visibility and weekly product drops.</p>
            </div>
          </div>
        </section>

        <section className="strip alt" id="process">
          <div className="section-heading">
            <p className="eyebrow">How we work</p>
            <h2>Intentional, documented, and calm.</h2>
          </div>
          <div className="process-grid">
            <div className="process-step">
              <span className="step-num">01</span>
              <h3>Audit &amp; plan</h3>
              <p>48-hour review of web, Google Business, socials, and ads. You get a concise plan with budgets.</p>
            </div>
            <div className="process-step">
              <span className="step-num">02</span>
              <h3>Build &amp; launch</h3>
              <p>We build pages, creatives, and automations. Approvals happen in one shared board.</p>
            </div>
            <div className="process-step">
              <span className="step-num">03</span>
              <h3>Run &amp; report</h3>
              <p>Weekly optimizations, monthly narrative report, and rules for when we scale or pause.</p>
            </div>
          </div>
        </section>

        <section className="strip" id="contact">
          <div className="cta-card luxe-cta">
            <div className="cta-copy">
              <p className="eyebrow">Start here</p>
              <h2>Tell us about your KC business. We’ll send a mini-plan and budget in 48 hours.</h2>
              <ul className="cta-list">
                <li>Tailored recommendations</li>
                <li>Clear scope + timing</li>
                <li>No pressure to commit</li>
              </ul>
            </div>
            <form className="cta-form" onSubmit={handleSubmit}>
              <label htmlFor="name">Your name</label>
              <input id="name" name="name" type="text" placeholder="Taylor at Westside Floral" required />
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" placeholder="you@business.com" required />
              <label htmlFor="business">Business name</label>
              <input id="business" name="business" type="text" placeholder="Westside Floral" required />
              <label htmlFor="need">What do you need most?</label>
              <textarea id="need" name="need" rows={3} placeholder="New site, keep Google updated, and disciplined ads." required />
              <button className="button primary" type="submit">
                Send my KC mini-plan
              </button>
              <p className="fineprint">We reply in 48 hours. No spam—just a local hello.</p>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="logo-mark">Hometown</div>
        <div className="footer-meta">
          <p>Kansas City born. Serving KC Metro &amp; nearby towns.</p>
          <p>hello@hometownkc.com · (816) 555-1910</p>
        </div>
        <div className="footer-links">
          <a href="#services">Services</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Start a Project</a>
        </div>
      </footer>
    </div>
  );
}
