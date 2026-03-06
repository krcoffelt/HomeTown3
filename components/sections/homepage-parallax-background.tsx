"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function HomepageParallaxBackground() {
  const [isDesktop, setIsDesktop] = useState(false);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1800], [0, 180]);
  const scale = useTransform(scrollY, [0, 1800], [1.08, 1.18]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    const update = () => setIsDesktop(mediaQuery.matches);

    update();
    mediaQuery.addEventListener("change", update);
    return () => mediaQuery.removeEventListener("change", update);
  }, []);

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        style={isDesktop ? { y, scale } : undefined}
        className={isDesktop ? "absolute inset-[-8%] will-change-transform" : "absolute inset-0"}
      >
        <Image
          src="/images/Screenshot 2026-03-03 at 11.00.02 AM.webp"
          alt=""
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          className="object-cover object-center"
        />
      </motion.div>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(1,2,4,0.26)_0%,rgba(1,2,4,0.54)_38%,rgba(1,2,4,0.8)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.04)_0%,rgba(0,0,0,0.18)_24%,rgba(0,0,0,0.38)_56%,rgba(0,0,0,0.62)_100%)]" />
    </div>
  );
}
