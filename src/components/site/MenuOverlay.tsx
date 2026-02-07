'use client';

import { menuStories } from '@/data/stories';

type MenuOverlayProps = {
  menuOpen: boolean;
  onCloseMenu: () => void;
};

const mainNavItems = [
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Programs', href: '/programs' },
  { label: 'Arts & Culture', href: '/arts-culture' },
];

const utilityItems = [
  { label: 'Team', href: '/team' },
  { label: 'Careers', href: '/careers' },
  { label: 'Press', href: '/press' },
];

const socialItems = [
  { label: 'X (Twitter)', href: 'https://x.com/hometown' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/hometownkc/' },
  { label: 'Instagram', href: 'https://www.instagram.com/hometownkc/' },
];

export default function MenuOverlay({ menuOpen, onCloseMenu }: MenuOverlayProps) {
  return (
    <div className={`menu-overlay ${menuOpen ? 'active' : ''}`} aria-hidden={!menuOpen}>
      <button className="menu-close" aria-label="Close menu" onClick={onCloseMenu}>
        <span />
        <span />
      </button>
      <div className="menu-panel">
        <div className="menu-left">
          <div className="menu-brand">Hometown</div>
          <nav className="menu-nav">
            {mainNavItems.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                style={{ ['--i' as any]: index }}
                onClick={onCloseMenu}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="menu-links">
            <a
              className="menu-primary"
              href="/contact"
              style={{ ['--i' as any]: 3 }}
              onClick={onCloseMenu}
            >
              Work with us
            </a>
            {utilityItems.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                className="menu-pill"
                style={{ ['--i' as any]: index + 4 }}
                onClick={onCloseMenu}
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="menu-meta">
            <p>Keep up to date</p>
            <div className="menu-field">
              <input type="email" placeholder="Your email" />
              <button>Subscribe</button>
            </div>
            <div className="menu-social">
              {socialItems.map((item) => (
                <a key={item.label} href={item.href} target="_blank" rel="noreferrer">
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="menu-right">
          {menuStories.map((story, index) => (
            <a key={story.slug} href={story.href} className="menu-story" style={{ ['--i' as any]: index + 2 }}>
              <div className="menu-story-media" style={{ backgroundImage: `url(${story.image})` }} />
              <div className="menu-story-text">
                <span>{story.label}</span>
                <h4>{story.title}</h4>
              </div>
              <span className="menu-story-arrow">→</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

