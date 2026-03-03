import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SectionShell } from "@/components/layout/section-shell";
import { homepageCopy } from "@/data/copy";
import { UnicornHeroBackground } from "@/components/sections/unicorn-hero-background";

export function HomeHero() {
  return (
    <SectionShell className="relative overflow-hidden pb-10 pt-20 md:pb-16 md:pt-28">
      <div className="pointer-events-none absolute inset-0">
        <UnicornHeroBackground />
      </div>
      <div className="relative z-10">
        <div className="hero-reveal max-w-4xl">
          <Badge className="mb-6 border-white/20 bg-white/10 text-white">
            {homepageCopy.trustLabel}
          </Badge>
          <h1 className="display-xl max-w-4xl text-balance font-semibold text-white">
            Affordable websites for Kansas City{" "}
            <span className="font-serif italic font-normal">businesses</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-white">
            {homepageCopy.heroSubtitle}
          </p>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/82">
            Kansas City-based Hometown Marketing Agency. Clear strategy,
            premium execution, and a clean path to more inquiries.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Button href="/contact#form" className="bg-accent text-white">
              Get Started
            </Button>
            <p className="section-eyebrow text-white">NOW ONLY $800</p>
          </div>
          <p className="mt-4 text-sm text-white/82">
            Explore our{" "}
            <Link href="/services" className="underline underline-offset-4">
              Kansas City marketing services
            </Link>
            .
          </p>
        </div>
        <div className="hero-reveal hero-reveal-delay mt-12 section-frame">
          <div className="grid gap-5 md:grid-cols-3 md:gap-8">
            <div className="surface-plain px-5 py-5">
              <p className="kicker">What&apos;s Included</p>
              <p className="mt-3 text-lg font-medium text-white">
                Custom design, mobile optimization, and lead form setup.
              </p>
            </div>
            <div className="surface-plain px-5 py-5">
              <p className="kicker">What&apos;s Not</p>
              <p className="mt-3 text-lg font-medium text-white">
                Paid ads management or long-term SEO retainers.
              </p>
            </div>
            <div className="surface-plain px-5 py-5">
              <p className="kicker">Turnaround</p>
              <p className="mt-3 text-lg font-medium text-white">
                Most projects launch in about 14 days.
              </p>
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
