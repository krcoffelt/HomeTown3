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
        <section className="hero" id="top">
          <div className="hero-copy">
            <p className="eyebrow">Kansas City • Small business marketing</p>
            <h1>Local, scrappy, and obsessed with getting KC businesses found.</h1>
            <p className="lede">
              Hometown KC gives neighborhood shops and service pros a Pinterest-pretty presence without big-agency price tags. Websites, socials,
              Google Business, reviews, ads—done-for-you and done on budget.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#contact">
                Book a free KC audit
              </a>
              <a className="button ghost" href="#pricing">
                See budget plans
              </a>
            </div>
            <div className="trust" aria-label="Performance stats">
              <div className="stat">
                <span>48 hrs</span>
                <small>launch-ready starter sites</small>
              </div>
              <div className="stat">
                <span>92%</span>
                <small>clients rank higher on Maps</small>
              </div>
              <div className="stat">
                <span>$0</span>
                <small>setup on any plan</small>
              </div>
            </div>
          </div>
          <div className="hero-mood" aria-label="Pinterest style inspiration board">
            <div className="pin board">KC coffee crawl itinerary</div>
            <div className="pin photo warm">Crossroads mural inspo</div>
            <div className="pin card">
              Google Business tune-up
              <br />
              <strong>Included</strong>
            </div>
            <div className="pin photo cool">Westside storefront glow-up</div>
            <div className="pin note">“They feel like part of our shop team.” — Sarah, Brookside</div>
          </div>
        </section>

        <section className="strip" id="services">
          <div className="section-heading">
            <p className="eyebrow">What we make for you</p>
            <h2>Services built to look good on the Plaza and on your P&amp;L.</h2>
            <p className="lede">Pick the pieces you need or let us bundle them. Every deliverable is optimized to convert and tracked so you see results.</p>
          </div>
          <div className="masonry">
            <article className="tile tall">
              <div className="tag">Web + SEO</div>
              <h3>Launch-worthy sites in days</h3>
              <p>Fast, mobile-first sites with local SEO baked in. Copywriting that sounds like your shop, not a template.</p>
              <ul>
                <li>48-hour starter builds</li>
                <li>On-page SEO for KC searches</li>
                <li>Lead forms wired to your inbox</li>
              </ul>
            </article>
            <article className="tile photo" aria-label="KC skyline illustration" />
            <article className="tile">
              <div className="tag">Social</div>
              <h3>Social that feels like your block</h3>
              <p>Monthly content calendars, Reel scripts, Canva-ready templates, and community replies so you stay present.</p>
            </article>
            <article className="tile wide">
              <div className="tag">Google Business</div>
              <h3>Map pack domination</h3>
              <p>Profile clean-up, photo strategy, weekly updates, and review replies that sound human.</p>
            </article>
            <article className="tile">
              <div className="tag">Reviews</div>
              <h3>Earn love, showcase it</h3>
              <p>Automated asks post-visit, balanced responses, and website widgets that show your KC love notes.</p>
            </article>
            <article className="tile">
              <div className="tag">Ads</div>
              <h3>Neighborhood-focused ads</h3>
              <p>Hyperlocal targeting for Google + Meta. Start with tiny budgets, scale only when ROI shows up.</p>
            </article>
            <article className="tile tall soft">
              <div className="tag">Design</div>
              <h3>Brand refreshes without the bloat</h3>
              <p>Menus, flyers, truck wraps, and story highlights that all feel like the same friendly voice.</p>
            </article>
          </div>
        </section>

        <section className="strip alt" id="pricing">
          <div className="section-heading">
            <p className="eyebrow">Budget-first pricing</p>
            <h2>Pick a plan, pause anytime. No setup fees. Local rates.</h2>
          </div>
          <div className="pricing-grid">
            <div className="price-card">
              <div className="badge">Most Popular</div>
              <h3>KC Starter</h3>
              <p className="price">$349/mo</p>
              <p className="desc">For shops that need a site + consistent socials.</p>
              <ul>
                <li>1-page site or refresh</li>
                <li>Google Business tune-up</li>
                <li>8 social posts + replies</li>
                <li>Monthly performance note</li>
              </ul>
              <a className="button primary" href="#contact">
                Get KC Starter
              </a>
            </div>
            <div className="price-card">
              <h3>KC Boost</h3>
              <p className="price">$549/mo</p>
              <p className="desc">Best for growing crews ready for ads + reviews.</p>
              <ul>
                <li>Multi-page site with lead forms</li>
                <li>Weekly Google Business updates</li>
                <li>12 social posts + community mgmt</li>
                <li>Ads launch + $150 ad credit</li>
                <li>Review automation &amp; replies</li>
              </ul>
              <a className="button ghost" href="#contact">
                Get KC Boost
              </a>
            </div>
            <div className="price-card">
              <h3>Neighborhood All-In</h3>
              <p className="price">$899/mo</p>
              <p className="desc">Fractional marketing lead without hiring.</p>
              <ul>
                <li>Custom site, landing pages, A/B tests</li>
                <li>Weekly content + video snippets</li>
                <li>Always-on ads management</li>
                <li>Quarterly strategy sessions</li>
                <li>Priority turnaround</li>
              </ul>
              <a className="button ghost" href="#contact">
                Talk to us
              </a>
            </div>
          </div>
          <p className="fineprint">
            Need a one-time project? <a href="#contact">Tell us what you need</a> — we quote fast.
          </p>
        </section>

        <section className="strip" id="work">
          <div className="section-heading">
            <p className="eyebrow">KC proof</p>
            <h2>Neighborhood wins we’re proud of.</h2>
          </div>
          <div className="wins">
            <div className="win-card">
              <div className="chip">Crossroads</div>
              <h3>Artisan bakery</h3>
              <p>+63% orders after a 2-page site and Google Business refresh.</p>
            </div>
            <div className="win-card">
              <div className="chip">Brookside</div>
              <h3>Yoga studio</h3>
              <p>2x intro pass purchases with a Pinterest-inspired landing page and reels kit.</p>
            </div>
            <div className="win-card">
              <div className="chip">River Market</div>
              <h3>Vintage shop</h3>
              <p>Tripled foot traffic from map pack visibility and weekly photo drops.</p>
            </div>
          </div>
        </section>

        <section className="strip alt" id="process">
          <div className="section-heading">
            <p className="eyebrow">How we work</p>
            <h2>Simple, calm, and transparent.</h2>
          </div>
          <div className="steps">
            <div className="step">
              <span className="step-num">01</span>
              <h3>KC audit</h3>
              <p>We review your presence (site, socials, Google Business) and share a punchy plan within 24 hours.</p>
            </div>
            <div className="step">
              <span className="step-num">02</span>
              <h3>Build fast</h3>
              <p>Design, copy, and setup shipped in days, not months. You approve in a clean, visual board.</p>
            </div>
            <div className="step">
              <span className="step-num">03</span>
              <h3>Run + report</h3>
              <p>We post, manage reviews, and optimize ads. You get a simple monthly note with what changed and what’s next.</p>
            </div>
          </div>
        </section>

        <section className="strip" id="contact">
          <div className="cta-card">
            <div className="cta-copy">
              <p className="eyebrow">Start here</p>
              <h2>Tell us about your KC business and we’ll send a tailored mini-plan.</h2>
              <ul className="cta-list">
                <li>48-hour response with recommendations</li>
                <li>Realistic budgets &amp; timelines</li>
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
              <textarea id="need" name="need" rows={3} placeholder="New site, keep Google updated, and light ads." required />
              <button className="button primary" type="submit">
                Send my KC mini-plan
              </button>
              <p className="fineprint">We reply in 48 hours. No spam—just a local hello.</p>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="logo-mark">HKC</div>
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
