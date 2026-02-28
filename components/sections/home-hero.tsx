import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { SectionShell } from "@/components/layout/section-shell";
import { homepageCopy } from "@/data/copy";
import { UnicornHeroBackground } from "@/components/sections/unicorn-hero-background";

export function HomeHero() {
  return (
    <SectionShell className="relative overflow-hidden pb-14 pt-20 md:pb-20 md:pt-28">
      <div className="pointer-events-none absolute inset-0">
        <UnicornHeroBackground />
      </div>
      <div className="relative z-10 grid items-end gap-8 md:grid-cols-12 md:gap-10">
        <Reveal className="md:col-span-7">
          <Badge className="mb-6 border-white/20 bg-white/10 text-white">
            {homepageCopy.trustLabel}
          </Badge>
          <h1 className="display-xl max-w-3xl text-balance font-semibold text-white">
            Affordable websites for Kansas City{" "}
            <span className="font-serif italic font-normal">businesses</span>
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-white">
            {homepageCopy.heroSubtitle}
          </p>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/75">
            Kansas City-based Hometown Marketing Agency. Clear strategy,
            premium execution, and a clean path to more inquiries.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Button href="/contact#form" className="bg-accent text-white">
              Get Started
            </Button>
            <p className="section-eyebrow text-white">NOW ONLY $800</p>
          </div>
          <p className="mt-4 text-sm text-white/70">
            Explore our{" "}
            <Link href="/services" className="underline underline-offset-4">
              Kansas City marketing services
            </Link>
            .
          </p>
        </Reveal>
        <Reveal
          delay={0.08}
          className="relative overflow-hidden rounded-lg border border-white/12 bg-[#0f141b]/80 md:col-span-5"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.1),transparent_56%)]" />
          <div className="relative p-8 md:p-10">
            <p className="section-eyebrow text-white/70">Project Snapshot</p>
            <p className="mt-4 text-2xl font-medium leading-tight text-white md:text-[2rem]">
              <span className="block">Clear process.</span>
              <span className="block">Fast execution.</span>
              <span className="block">Premium local presence.</span>
            </p>
            <div className="mt-10 space-y-6">
              <div className="flex items-start gap-4">
                <span className="section-eyebrow text-[#9bb6ff]">01</span>
                <div>
                  <p className="text-base font-medium text-white">Strategy + Structure</p>
                  <p className="mt-1 text-sm text-white/70">
                    Messaging, page structure, and conversion flow tailored to your business.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="section-eyebrow text-[#9bb6ff]">02</span>
                <div>
                  <p className="text-base font-medium text-white">Design + Build</p>
                  <p className="mt-1 text-sm text-white/70">
                    Custom website design and development with mobile-first polish.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="section-eyebrow text-[#9bb6ff]">03</span>
                <div>
                  <p className="text-base font-medium text-white">Launch + Leads</p>
                  <p className="mt-1 text-sm text-white/70">
                    Go live with local SEO foundations and a clean inquiry path.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-3 border-t border-white/12 pt-6">
              <div>
                <p className="section-eyebrow text-white/55">Turnaround</p>
                <p className="mt-1 text-lg font-medium text-white">Typically 2 weeks</p>
              </div>
              <div>
                <p className="section-eyebrow text-white/55">Communication</p>
                <p className="mt-1 text-lg font-medium text-white">Direct with founder</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
