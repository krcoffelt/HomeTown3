'use client';

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer-top">
        <nav className="site-footer-nav" aria-label="Footer navigation">
          <a href="/#website-package">$800 Websites</a>
          <a href="/#services">Social Media</a>
          <a href="/#services">Logos</a>
          <a href="/#process">Process</a>
        </nav>
        <div className="site-footer-actions">
          <a className="footer-pill footer-pill-primary" href="/contact">Start My Website</a>
          <a className="footer-pill" href="mailto:hello@hometownkc.com">hello@hometownkc.com</a>
          <a className="footer-pill" href="tel:+18165551910">(816) 555-1910</a>
        </div>
      </div>

      <div className="site-footer-bottom">
        <div className="site-footer-social">
          <a href="https://x.com/hometown">X (Twitter)</a>
          <a href="https://www.linkedin.com/company/hometownkc/">LinkedIn</a>
          <a href="https://www.instagram.com/hometownkc/">Instagram</a>
        </div>
        <p className="site-footer-meta">Kansas City based. Websites first, with social media and logo support.</p>
      </div>
    </footer>
  );
}
