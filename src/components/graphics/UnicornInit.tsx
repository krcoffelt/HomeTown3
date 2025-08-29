'use client';

import { useEffect } from 'react';

export default function UnicornInit() {
  useEffect(() => {
    let cancelled = false;
    const boot = async () => {
      // wait until script is present
      for (let i = 0; i < 120 && !(window as any).UnicornStudio; i++) {
        await new Promise(r => setTimeout(r, 50));
        if (cancelled) return;
      }
      if (!(window as any).UnicornStudio || cancelled) return;

      // give layout a tick to settle so containers have size
      await new Promise(r => requestAnimationFrame(() => requestAnimationFrame(r)));

      try {
        await (window as any).UnicornStudio.init?.();
      } catch (e) {
        // ignore
      }
    };
    boot();
    return () => { cancelled = true; };
  }, []);

  return null;
}
