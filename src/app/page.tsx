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
          <a href="#process">Process</a>
          <a href="#contact" className="pill">
            Book an Audit
          </a>
        </nav>
      </header>

      <main>
        <section className="hero hero-cover" id="top">
          <div className="hero-inner">
            <p className="eyebrow">Kansas City • Boutique marketing</p>
            <h1>Elevated marketing for KC businesses that need to look and feel premium—without agency bloat.</h1>
            <p className="lede">
              Websites, Google Business, social, and ads built with restraint, clear offers, and disciplined reporting.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#contact">Book the 48-hour audit</a>
              <a className="button ghost" href="#pricing">See retainers</a>
            </div>
            <div className="hero-bullets">
              <span>No setup fees</span>
              <span>KC-only team</span>
              <span>One Slack thread</span>
            </div>
          </div>
        </section>

        <section className="strip alt quick-stats" aria-label="Key metrics">
          <div className="stat-card">
            <p className="stat-label">Response</p>
            <p className="stat-value">48 hrs</p>
            <p className="stat-note">Audit + plan delivered</p>
          </div>
          <div className="stat-card">
            <p className="stat-label">ROI window</p>
            <p className="stat-value">60 days</p>
            <p className="stat-note">Typical lift period</p>
          </div>
          <div className="stat-card">
            <p className="stat-label">Setup fee</p>
            <p className="stat-value">$0</p>
            <p className="stat-note">Always waived</p>
          </div>
        </section>

        <section className="strip" id="services">
          <div className="section-heading centered">
            <p className="eyebrow">Services</p>
            <h2>Three pillars. Clear scope. Calm delivery.</h2>
            <p className="section-sub">Pick one or roll all three into a single retainer.</p>
          </div>
          <div className="pillar-grid">
            <article className="pillar">
              <div className="tag">Presence</div>
              <h3>Signature sites + local SEO</h3>
              <p>Luxury-grade one- to five-page builds with KC search intent, speed, and instant lead routing.</p>
              <ul>
                <li>Offer + copy workshop</li>
                <li>Schema, speed, on-page SEO</li>
                <li>Forms wired to inbox + SMS</li>
              </ul>
            </article>
            <article className="pillar">
              <div className="tag">Demand</div>
              <h3>Disciplined ads + funnels</h3>
              <p>Hyperlocal Google + Meta with controlled tests, negative lists, and conversion-first landers.</p>
              <ul>
                <li>Launch + $150 ad credit</li>
                <li>Landing page optimization</li>
                <li>Scale/stop rules in writing</li>
              </ul>
            </article>
            <article className="pillar">
              <div className="tag">Reputation</div>
              <h3>Google Business + reviews</h3>
              <p>Map pack dominance with weekly posts, photo cadence, and on-brand review replies.</p>
              <ul>
                <li>Profile clean-up + tracking</li>
                <li>Review request + reply playbook</li>
                <li>Photo/post calendar</li>
              </ul>
            </article>
          </div>
        </section>

        <section className="strip alt" id="pricing">
          <div className="section-heading centered">
            <p className="eyebrow">Pricing</p>
            <h2>Three retainers for KC operators.</h2>
            <p className="section-sub">Pause anytime. All include reporting and a KC-only team.</p>
          </div>
          <div className="pricing-grid luxe">
            <div className="price-card framed">
              <h3>KC Starter</h3>
              <p className="price">$349/mo</p>
              <p className="desc">Site polish + social presence for single-location shops.</p>
              <ul>
                <li>1-page site or refresh</li>
                <li>Google Business tune-up</li>
                <li>8 social posts + replies</li>
                <li>Monthly signal summary</li>
              </ul>
              <a className="button ghost" href="#contact">Start here</a>
            </div>
            <div className="price-card framed featured">
              <div className="badge">Most chosen</div>
              <h3>KC Boost</h3>
              <p className="price">$549/mo</p>
              <p className="desc">Lead growth with ads, reviews, and multi-page performance.</p>
              <ul>
                <li>Multi-page site + lead forms</li>
                <li>Weekly Google Business updates</li>
                <li>12 social posts + community</li>
                <li>Ads launch + $150 ad credit</li>
                <li>Review automation & replies</li>
              </ul>
              <a className="button primary" href="#contact">Get KC Boost</a>
            </div>
            <div className="price-card framed">
              <h3>Neighborhood All-In</h3>
              <p className="price">$899/mo</p>
              <p className="desc">Fractional marketing lead and continuous optimization.</p>
              <ul>
                <li>Custom pages + testing</li>
                <li>Weekly content + short video</li>
                <li>Always-on ads management</li>
                <li>Quarterly strategy sessions</li>
                <li>Priority turnaround</li>
              </ul>
              <a className="button ghost" href="#contact">Talk with us</a>
            </div>
          </div>
        </section>

        <section className="strip" id="process">
          <div className="section-heading centered">
            <p className="eyebrow">Process</p>
            <h2>Documented, calm, and timeboxed.</h2>
          </div>
          <div className="process-grid">
            <div className="process-step">
              <span className="step-num">01</span>
              <h3>Audit & plan</h3>
              <p>48-hour review of web, Google Business, socials, and ads with a concise plan + budget.</p>
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

        <section className="strip alt" id="work">
          <div className="section-heading centered">
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
          <p>Kansas City born. Serving KC Metro & nearby towns.</p>
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
