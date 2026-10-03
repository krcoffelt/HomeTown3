import Image from "next/image";
import Link from "next/link";
import { SplitLines } from "@/components/motion/split-lines";
import { Button } from "@/components/ui/button";
import { StarIcon } from "@/components/ui/site-icons";
import { homepageCopy } from "@/data/copy";
import { projects } from "@/data/projects";

const reelSlugs = [
  "noble-hardwoods",
  "wrapped-up-moving",
  "plate-kc",
  "dragonfly-catering",
  "project-salvation",
  "zj-carpentry-and-more",
  "lupi-docs",
  "voxwhite"
];

function RotatingBadge() {
  const text = "Free marketing audit · Talk to Kyle · ";
  return (
    <Link
      href="#form"
      aria-label="Get a free marketing audit"
      className="group relative hidden h-36 w-36 shrink-0 items-center justify-center rounded-full md:flex"
    >
      <svg viewBox="0 0 100 100" className="spin-slow absolute inset-0 h-full w-full" aria-hidden="true">
        <defs>
          <path id="badge-circle" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" />
        </defs>
        <text className="fill-primary-foreground/70 font-mono text-[7.6px] uppercase">
          <textPath href="#badge-circle" textLength="238" lengthAdjust="spacing">
            {text}
          </textPath>
        </text>
      </svg>
      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-accent text-accent-foreground transition-transform duration-700 ease-out-expo group-hover:scale-110">
        <svg viewBox="0 0 24 24" className="h-6 w-6 rotate-90" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
          <path d="M5 12h14M13 5l7 7-7 7" />
        </svg>
      </span>
    </Link>
  );
}

export function HomeHero() {
  const reel = reelSlugs
    .map((slug) => projects.find((project) => project.slug === slug))
    .filter((project): project is (typeof projects)[number] => Boolean(project));

  return (
    <section className="grain relative overflow-hidden bg-ink text-primary-foreground">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -right-[15%] -top-[25%] h-[75vw] w-[75vw] glow [--glow-alpha:0.40]" />
        <div className="absolute -left-[20%] top-[40%] h-[40vw] w-[40vw] glow-warm" />
      </div>

      <div className="site-container relative flex min-h-[100svh] flex-col pb-10 pt-28 md:pb-12 md:pt-32">
        <div className="hero-rise mono-label flex flex-wrap items-center justify-between gap-x-8 gap-y-2 text-primary-foreground/50">
          <span className="inline-flex items-center gap-2.5">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
            Kansas City marketing agency
          </span>
          <span className="hidden sm:inline">Websites — SEO — Google &amp; Meta ads</span>
          <span className="hidden lg:inline">39.0997° N, 94.5786° W</span>
        </div>

        <div className="my-auto py-10 md:py-8">
          <SplitLines
            as="h1"
            trigger="load"
            delayMs={120}
            className="font-display text-[clamp(2.6rem,10.2vw,12rem)] font-semibold leading-[0.87] tracking-[-0.06em]"
            lines={[
              "Kansas City",
              <>
                <span className="serif-accent pr-[0.04em] text-[1.08em] tracking-[-0.03em]">marketing</span> agency
              </>,
              <>
                built for <span className="text-accent">real leads.</span>
              </>
            ]}
          />
        </div>

        <div className="grid items-end gap-10 border-t border-primary-foreground/12 pt-8 md:grid-cols-12 md:gap-8">
          <div className="hero-rise hero-rise-delay-2 md:col-span-6 lg:col-span-5">
            <p className="max-w-md text-lg leading-relaxed text-primary-foreground/70 md:text-xl md:leading-relaxed">
              {homepageCopy.heroSubtitle}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="#form" variant="primary" className="h-14 text-base" dataAnalytics="hero-audit">
                Get a free marketing audit
              </Button>
              <Button href="/work" variant="outline-light" className="h-14 text-base" arrow={false}>
                See the work
              </Button>
            </div>
          </div>

          <div className="hero-rise hero-rise-delay-3 flex items-end justify-between gap-6 md:col-span-6 lg:col-span-7 md:justify-end md:gap-12">
            <div className="flex items-center gap-4">
              <div>
                <div className="flex items-center gap-0.5 text-[#ffc94d]" aria-hidden="true">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <StarIcon key={index} className="h-4 w-4" />
                  ))}
                </div>
                <p className="mt-1 text-sm text-primary-foreground/60">
                  <span className="font-medium text-primary-foreground">5.0</span> from Google reviews
                </p>
              </div>
            </div>
            <RotatingBadge />
          </div>
        </div>
      </div>

      <div className="relative pb-16 md:pb-24" aria-label="Recent client websites">
        <div className="marquee-track flex w-max gap-4 md:gap-6">
          {[...reel, ...reel].map((project, index) => (
            <Link
              key={`${project.slug}-${index}`}
              href={project.metrics ? `/case-studies/${project.slug}` : "/work"}
              tabIndex={index >= reel.length ? -1 : undefined}
              aria-hidden={index >= reel.length ? true : undefined}
              className="group relative block w-[72vw] shrink-0 overflow-hidden rounded-xl bg-ink-soft sm:w-[44vw] lg:w-[30vw]"
            >
              <div className="relative aspect-[16/10]">
                <Image
                  src={project.featuredImageUrl}
                  alt={index >= reel.length ? "" : project.imageAlt}
                  fill
                  sizes="(max-width: 640px) 72vw, (max-width: 1024px) 44vw, 30vw"
                  className="object-cover object-top transition-transform duration-[1.2s] ease-out-expo group-hover:scale-[1.04]"
                />
              </div>
              <div className="flex items-center justify-between px-4 py-3 text-sm">
                <span className="font-medium">{project.clientName}</span>
                <span className="mono-label text-primary-foreground/45">{project.category}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
