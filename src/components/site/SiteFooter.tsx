'use client';

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer-top">
        <nav className="site-footer-nav" aria-label="Footer navigation">
          <a href="/case-studies">Case Studies</a>
          <a href="/programs">Programs</a>
          <a href="/arts-culture">Arts & Culture</a>
        </nav>
        <div className="site-footer-actions">
          <a className="footer-pill footer-pill-primary" href="/contact">Work with us</a>
          <a className="footer-pill" href="/team">Team</a>
          <a className="footer-pill" href="/careers">Careers</a>
          <a className="footer-pill" href="/press">Press</a>
        </div>
      </div>

      <form className="site-footer-newsletter" action="#" method="post">
        <label htmlFor="footer-email">Keep up to date</label>
        <div className="site-footer-field">
          <input id="footer-email" type="email" placeholder="Your email" />
          <button type="submit" aria-label="Subscribe to newsletter">→</button>
        </div>
      </form>

      <div className="site-footer-bottom">
        <div className="site-footer-social">
          <a href="https://x.com/hometown">X (Twitter)</a>
          <a href="https://www.linkedin.com/company/hometownkc/">LinkedIn</a>
          <a href="https://www.instagram.com/hometownkc/">Instagram</a>
        </div>
        <p className="site-footer-meta">Kansas City based. Working with small businesses everywhere.</p>
      </div>
    </footer>
  );
}
