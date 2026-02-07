'use client';

import { ReactNode, useEffect, useState } from 'react';
import MenuOverlay from '@/components/site/MenuOverlay';
import SiteFooter from '@/components/site/SiteFooter';
import SiteHeader from '@/components/site/SiteHeader';

type SiteShellProps = {
  children: ReactNode;
};

export default function SiteShell({ children }: SiteShellProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };

    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className={menuOpen ? 'menu-open' : ''}>
      <div className="bg-grain" aria-hidden="true" />
      <SiteHeader
        scrolled={scrolled}
        menuOpen={menuOpen}
        onToggleMenu={() => setMenuOpen((prev) => !prev)}
      />
      <MenuOverlay menuOpen={menuOpen} onCloseMenu={() => setMenuOpen(false)} />
      {children}
      <SiteFooter />
    </div>
  );
}

