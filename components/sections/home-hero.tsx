"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircleIcon, MapPinIcon } from "@/components/ui/site-icons";
import { homepageCopy } from "@/data/copy";

const heroItemTransition = {
  ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
  duration: 0.6
};

export function HomeHero() {
  const heroRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroImageY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section ref={heroRef} className="relative min-h-[92vh] overflow-hidden">
      <motion.div style={{ y: heroImageY }} className="absolute inset-0 scale-110" aria-hidden="true">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/hero-bg.jpg" alt="" className="h-full w-full object-cover" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/75 to-black/60" />
      <div aria-hidden="true" className="pointer-events-none absolute left-[-4rem] top-[12rem] h-[500px] w-[500px] rounded-full bg-primary/8 blur-[150px]" />
      <div aria-hidden="true" className="pointer-events-none absolute right-[-2rem] top-[8rem] h-[400px] w-[400px] rounded-full bg-primary-glow/6 blur-[120px]" />

      <div className="site-container relative z-10 flex min-h-[92vh] items-center pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="max-w-6xl text-primary-foreground">
          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...heroItemTransition, duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/15 bg-primary-foreground/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] backdrop-blur-sm"
          >
            <MapPinIcon className="h-4 w-4" />
            {homepageCopy.heroBadge}
          </motion.div>

          <motion.h1
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...heroItemTransition, delay: 0.15, duration: 0.7 }}
            className="hero-title mt-8 max-w-6xl"
          >
            <span className="block">{homepageCopy.heroTitleLineOne}</span>
            <span className="block pb-[0.08em] gradient-text">{homepageCopy.heroTitleLineTwo}</span>
          </motion.h1>

          <motion.p
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...heroItemTransition, delay: 0.35 }}
            className="mt-8 max-w-3xl text-lg leading-relaxed text-primary-foreground/82 md:text-xl"
          >
            {homepageCopy.heroSubtitle}
          </motion.p>

          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...heroItemTransition, delay: 0.5 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Button href="/contact#form" className="h-14 px-8">Get Your Free Quote</Button>
            <Button href="/work" variant="secondary" className="h-14 px-8 border-primary-foreground/20 bg-transparent text-primary-foreground hover:border-primary-foreground hover:bg-primary-foreground/8">
              See Our Work
            </Button>
          </motion.div>

          <motion.div
            initial={false}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-10 flex flex-wrap gap-6"
          >
            {homepageCopy.trustSignals.map((signal) => (
              <div key={signal} className="flex items-center gap-2 text-sm text-primary-foreground/82">
                <CheckCircleIcon className="h-4 w-4 text-accent" />
                <span>{signal}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
