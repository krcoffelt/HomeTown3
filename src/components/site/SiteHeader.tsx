'use client';

type SiteHeaderProps = {
  scrolled: boolean;
  menuOpen: boolean;
  onToggleMenu: () => void;
};

export default function SiteHeader({ scrolled, menuOpen, onToggleMenu }: SiteHeaderProps) {
  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''} ${menuOpen ? 'menu-is-open' : ''}`}>
      <a className="site-mark" href="/" aria-label="Go to homepage">
        <span className="site-mark-word">Hometown</span>
      </a>
      <nav className="site-header-nav" aria-label="Primary navigation">
        <a href="/#website-package">$800 Websites</a>
        <a href="/#services">Social Media</a>
        <a href="/#services">Logos</a>
        <a href="/#process">Process</a>
      </nav>
      <div className="site-header-actions">
        <a className="site-header-cta" href="/contact">Start Website</a>
        <a className="site-header-phone" href="tel:+18165551910">(816) 555-1910</a>
      </div>
      <button
        className="menu-toggle"
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
        onClick={onToggleMenu}
      >
        <span className="menu-toggle-line" />
        <span className="menu-toggle-line" />
      </button>
    </header>
  );
}
