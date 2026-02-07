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
