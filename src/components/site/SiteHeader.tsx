'use client';

import TrackedPhoneLink from '@/components/ui/TrackedPhoneLink';
import { siteConfig } from '@/lib/seo';

type SiteHeaderProps = {
  scrolled: boolean;
  menuOpen: boolean;
  onToggleMenu: () => void;
};

const navItems = [
  { label: '$800 Websites', href: '/#website-package' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact' },
];

export default function SiteHeader({ scrolled, menuOpen, onToggleMenu }: SiteHeaderProps) {
  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''} ${menuOpen ? 'menu-is-open' : ''}`}>
      <a className="site-mark" href="/" aria-label="Go to homepage">
        <span className="site-mark-word">Hometown</span>
        <span className="site-mark-kicker">Marketing Agency</span>
      </a>
      <nav className="site-header-nav" aria-label="Primary navigation">
        {navItems.map((item) => (
          <a key={item.label} href={item.href}>{item.label}</a>
        ))}
      </nav>
      <div className="site-header-actions">
        <a className="site-header-cta" href="/contact">Start My Website</a>
        <TrackedPhoneLink
          className="site-header-phone"
          href={`tel:${siteConfig.phoneE164}`}
          eventName="click_call_header"
          location="site_header"
        >
          <span className="phone-label-full">Call {siteConfig.phoneDisplay}</span>
          <span className="phone-label-short">Call</span>
        </TrackedPhoneLink>
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
