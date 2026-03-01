"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

const UnicornScene = dynamic(() => import("unicornstudio-react/next"), {
  ssr: false
});

export function UnicornHeroBackground() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [isEligible, setIsEligible] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [shouldRenderScene, setShouldRenderScene] = useState(false);

  useEffect(() => {
    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const syncEligibility = () => {
      const desktopViewport = window.innerWidth >= 768;
      setIsEligible(desktopViewport && !reducedMotionQuery.matches);
    };

    syncEligibility();
    window.addEventListener("resize", syncEligibility);
    reducedMotionQuery.addEventListener("change", syncEligibility);

    return () => {
      window.removeEventListener("resize", syncEligibility);
      reducedMotionQuery.removeEventListener("change", syncEligibility);
    };
  }, []);

  useEffect(() => {
    if (!isEligible || !wrapperRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "120px" }
    );

    observer.observe(wrapperRef.current);

    return () => observer.disconnect();
  }, [isEligible]);

  useEffect(() => {
    if (!isEligible || !isInView) return;

    let timeoutId: ReturnType<typeof setTimeout> | undefined;
    let idleId: number | undefined;

    const start = () => setShouldRenderScene(true);
    const requestIdleCallback = window.requestIdleCallback?.bind(window);

    if (requestIdleCallback) {
      idleId = requestIdleCallback(start, { timeout: 1200 });
    } else {
      timeoutId = setTimeout(start, 250);
    }

    return () => {
      if (idleId) window.cancelIdleCallback(idleId);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [isEligible, isInView]);

  return (
    <div ref={wrapperRef} className="h-full w-full bg-[radial-gradient(circle_at_50%_5%,rgba(155,182,255,0.26),rgba(15,20,27,0.2)_40%,rgba(5,7,11,0.9)_100%)]">
      {shouldRenderScene ? (
        <UnicornScene
          projectId="67bMayuIex6ZsrkBXpsY"
          sdkUrl="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.0.5/dist/unicornStudio.umd.js"
          width="100%"
          height="100%"
        />
      ) : null}
    </div>
  );
}
