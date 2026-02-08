'use client';

import { type CSSProperties, type MouseEvent, useEffect, useRef } from 'react';
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
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!menuOpen) return;

    const previousActiveElement = document.activeElement as HTMLElement | null;
    const panel = panelRef.current;
    if (!panel) return;

    const focusableSelector =
      'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';
    const focusableElements = Array.from(
      panel.querySelectorAll<HTMLElement>(focusableSelector)
    );

    focusableElements[0]?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        onCloseMenu();
        return;
      }

      if (event.key !== 'Tab') return;
      if (focusableElements.length === 0) return;

      const first = focusableElements[0];
      const last = focusableElements[focusableElements.length - 1];
      const active = document.activeElement as HTMLElement | null;

      if (event.shiftKey && active === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = originalOverflow;
      previousActiveElement?.focus();
    };
  }, [menuOpen, onCloseMenu]);

  const interactiveTabIndex = menuOpen ? 0 : -1;

  const handleOverlayClick = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target === overlayRef.current) {
      onCloseMenu();
    }
  };

  return (
    <div
      ref={overlayRef}
      className={`menu-overlay ${menuOpen ? 'active' : ''}`}
      aria-hidden={!menuOpen}
      onClick={handleOverlayClick}
    >
      <button className="menu-close" aria-label="Close menu" onClick={onCloseMenu} tabIndex={interactiveTabIndex}>
        <span />
        <span />
      </button>
      <div ref={panelRef} className="menu-panel" role="dialog" aria-modal="true" aria-label="Main menu">
        <div className="menu-left">
          <div className="menu-brand">Hometown</div>
          <nav className="menu-nav">
            {mainNavItems.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                style={{ '--i': index } as CSSProperties}
                onClick={onCloseMenu}
                tabIndex={interactiveTabIndex}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="menu-links">
            <a
              className="menu-primary"
              href="/contact"
              style={{ '--i': 3 } as CSSProperties}
              onClick={onCloseMenu}
              tabIndex={interactiveTabIndex}
            >
              Work with us
            </a>
            {utilityItems.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                className="menu-pill"
                style={{ '--i': index + 4 } as CSSProperties}
                onClick={onCloseMenu}
                tabIndex={interactiveTabIndex}
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="menu-meta">
            <p>Keep up to date</p>
            <div className="menu-field">
              <input type="email" placeholder="Your email" tabIndex={interactiveTabIndex} />
              <button tabIndex={interactiveTabIndex}>Subscribe</button>
            </div>
            <div className="menu-social">
              {socialItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  tabIndex={interactiveTabIndex}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="menu-right">
          {menuOpen
            ? menuStories.map((story, index) => (
                <a
                  key={story.slug}
                  href={story.href}
                  className="menu-story"
                  style={{ '--i': index + 2 } as CSSProperties}
                  tabIndex={interactiveTabIndex}
                >
                  <div className="menu-story-media" style={{ backgroundImage: `url(${story.image})` }} />
                  <div className="menu-story-text">
                    <span>{story.label}</span>
                    <h4>{story.title}</h4>
                  </div>
                  <span className="menu-story-arrow">→</span>
                </a>
              ))
            : null}
        </div>
      </div>
    </div>
  );
}
