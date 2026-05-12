"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircleIcon, MapPinIcon } from "@/components/ui/site-icons";
import { homepageCopy } from "@/data/copy";

export function HomeHero() {
  const prefersReducedMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 760], ["0%", "12%"]);
  const contentY = useTransform(scrollY, [0, 760], ["0%", "8%"]);
  const contentOpacity = useTransform(scrollY, [0, 620], [1, 0.42]);

  const entrance = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="relative min-h-[92vh] overflow-hidden bg-black">
      <motion.div
        aria-hidden="true"
        className="home-hero-bg absolute inset-0 bg-cover bg-center bg-no-repeat will-change-transform"
        style={prefersReducedMotion ? undefined : { y: backgroundY }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute left-[-4rem] top-[12rem] hidden h-[500px] w-[500px] rounded-full bg-primary/8 blur-[150px] md:block"
        animate={prefersReducedMotion ? undefined : { scale: [1, 1.08, 1], opacity: [0.55, 0.85, 0.55] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-2rem] top-[8rem] hidden h-[400px] w-[400px] rounded-full bg-primary-glow/6 blur-[120px] md:block"
        animate={prefersReducedMotion ? undefined : { scale: [1.04, 1, 1.04], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="site-container relative z-10 flex min-h-[92vh] items-center pt-32 pb-20 md:pt-40 md:pb-28">
        <motion.div
          className="max-w-6xl text-primary-foreground"
          initial={prefersReducedMotion ? false : "hidden"}
          animate="visible"
          style={prefersReducedMotion ? undefined : { y: contentY, opacity: contentOpacity }}
          transition={{ staggerChildren: 0.08, delayChildren: 0.1 }}
        >
          <motion.div
            variants={entrance}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/15 bg-primary-foreground/12 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em]"
          >
            <MapPinIcon className="h-4 w-4" />
            {homepageCopy.heroBadge}
          </motion.div>

          <motion.h1
            variants={entrance}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="hero-title mt-8 max-w-6xl"
          >
            <span className="block">{homepageCopy.heroTitleLineOne}</span>
            <span className="block pb-[0.08em] gradient-text">{homepageCopy.heroTitleLineTwo}</span>
          </motion.h1>

          <motion.p
            variants={entrance}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 max-w-3xl text-lg leading-relaxed text-primary-foreground/82 md:text-xl"
          >
            {homepageCopy.heroSubtitle}
          </motion.p>

          <motion.div
            variants={entrance}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Button href="/contact#form" className="h-14 px-8">Get Your Free Quote</Button>
            <Button href="/work" variant="secondary" className="h-14 px-8 border-primary-foreground/20 bg-transparent text-primary-foreground hover:border-primary-foreground hover:bg-primary-foreground/8">
              See Our Work
            </Button>
          </motion.div>

          <motion.div
            variants={entrance}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-wrap gap-6"
          >
            {homepageCopy.trustSignals.map((signal) => (
              <div key={signal} className="flex items-center gap-2 text-sm text-primary-foreground/82">
                <CheckCircleIcon className="h-4 w-4 text-accent" />
                <span>{signal}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
