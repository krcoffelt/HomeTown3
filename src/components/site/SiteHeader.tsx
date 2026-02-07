'use client';

type SiteHeaderProps = {
  scrolled: boolean;
  menuOpen: boolean;
  onToggleMenu: () => void;
};

export default function SiteHeader({ scrolled, menuOpen, onToggleMenu }: SiteHeaderProps) {
  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <img className="logo" src="/images/HometownLogo2026_white.png" alt="Hometown" />
      <button
        className="menu-toggle"
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
        onClick={onToggleMenu}
      >
        <span />
        <span />
      </button>
    </header>
  );
}

