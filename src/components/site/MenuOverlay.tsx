'use client';

import { type CSSProperties, type MouseEvent, useEffect, useRef } from 'react';
import TrackedPhoneLink from '@/components/ui/TrackedPhoneLink';
import { siteConfig } from '@/lib/seo';

type MenuOverlayProps = {
  menuOpen: boolean;
  onCloseMenu: () => void;
};

const mainNavItems = [
  { label: '$800 Websites', href: '/#website-package' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact' },
];

const supportLinks = [
  { label: 'Kansas City City Pages', href: '/#kc-metro' },
  { label: 'How We Build', href: '/#process' },
];

const socialItems = [
  { label: 'Instagram', href: 'https://www.instagram.com/hometown.kc/' },
  { label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61581320222706' },
];

const quickStartChecklist = [
  'Start with the contact form so we can scope quickly',
  'Get a build timeline and launch date',
  'Go live with a conversion-focused $800 website',
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
          <div className="menu-brand">Hometown Kansas City</div>
          <p className="menu-lead">
            For Kansas City businesses without a website yet.
          </p>
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
              style={{ '--i': 4 } as CSSProperties}
              onClick={onCloseMenu}
              tabIndex={interactiveTabIndex}
            >
              Start My Website
            </a>
            <TrackedPhoneLink
              href={`tel:${siteConfig.phoneE164}`}
              eventName="click_call_cta_section"
              location="menu_overlay"
              className="menu-pill"
              tabIndex={interactiveTabIndex}
            >
              Call {siteConfig.phoneDisplay}
            </TrackedPhoneLink>
            {supportLinks.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                className="menu-pill"
                style={{ '--i': index + 5 } as CSSProperties}
                onClick={onCloseMenu}
                tabIndex={interactiveTabIndex}
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="menu-meta">
            <p>Need a quick answer? Call now or submit the form and we can start your build right away.</p>
            <a className="menu-pill menu-pill-muted" href={`mailto:${siteConfig.email}`} tabIndex={interactiveTabIndex}>
              {siteConfig.email}
            </a>
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
          <article className="menu-quick-card">
            <p className="menu-quick-label">Kickoff Checklist</p>
            <h4>Simple and fast setup</h4>
            <ul>
              {quickStartChecklist.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <a
              className="menu-primary"
              href="/contact"
              onClick={onCloseMenu}
              tabIndex={interactiveTabIndex}
            >
              Start My Website
            </a>
          </article>
        </div>
      </div>
    </div>
  );
}
