import Image from "next/image";
import Link from "next/link";
import { SectionShell } from "@/components/layout/section-shell";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { ServiceCard } from "@/components/ui/service-card";
import { ArrowRightIcon, CheckCircleIcon, GlobeIcon, TargetIcon } from "@/components/ui/site-icons";
import { services } from "@/data/services";

const iconMap: Record<string, typeof GlobeIcon> = {
  "website-design": GlobeIcon,
  "google-ads-management": TargetIcon,
  "search-engine-optimization": GlobeIcon
};

const homepageServiceSlugs = ["website-design", "search-engine-optimization", "google-ads-management"];

export function ServicesPreview() {
  const homepageServices = homepageServiceSlugs
    .map((slug) => services.find((service) => service.slug === slug))
    .filter((service): service is (typeof services)[number] => Boolean(service));

  return (
    <SectionShell className="paper-texture bg-secondary">
      <div className="mb-14 grid items-center gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:gap-14">
        <SectionHeading
          badge="Services"
          title={"Websites, SEO,\nand paid ads that convert"}
          subtitle="Three connected growth channels for small businesses, measured by the calls, forms, qualified leads, rankings, and revenue signals they create."
          centered={false}
          className="mb-0"
        />
        <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border-2 border-foreground bg-background shadow-hero">
          <Image
            src="/images/brand-art/three-channels.png"
            alt="Three channels joining one clear path toward a business goal"
            fill
            loading="lazy"
            sizes="(max-width: 1024px) 100vw, 58vw"
            className="object-cover"
          />
        </div>
      </div>
      <div className="grid overflow-hidden rounded-2xl border-2 border-foreground bg-background shadow-card sm:grid-cols-2 lg:grid-cols-3">
        {homepageServices.map((service, index) => {
          const Icon = iconMap[service.slug] ?? CheckCircleIcon;
          return (
            <Reveal key={service.slug} delay={index * 0.05} className="border-b-2 border-foreground last:border-b-0 sm:[&:nth-child(odd)]:border-r-2 sm:[&:nth-child(2)]:border-b-0 lg:border-b-0 lg:border-r-2 lg:last:border-r-0">
              <Link href={`/services/${service.slug}`} className="block h-full">
                <ServiceCard
                  icon={<Icon className="h-5 w-5" />}
                  title={service.title}
                  description={service.shortDescription}
                />
              </Link>
            </Reveal>
          );
        })}
      </div>
      <div className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-3 border-t-2 border-foreground/20 pt-8">
        <MagneticButton>
          <Link
            href="/services/website-design"
            className="inline-flex items-center gap-2 rounded-full border border-foreground/12 px-6 py-3 text-sm font-bold text-foreground transition hover:-translate-y-0.5 hover:border-foreground hover:shadow-elevated"
          >
            Website Design Kansas City
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </MagneticButton>
        <Link
          href="/services/search-engine-optimization"
          className="inline-flex items-center gap-2 rounded-full border border-foreground/12 px-6 py-3 text-sm font-bold text-foreground transition hover:-translate-y-0.5 hover:border-foreground hover:shadow-elevated"
        >
          Small Business SEO Kansas City
        </Link>
        <Link
          href="/services/google-ads-management"
          className="inline-flex items-center gap-2 rounded-full border border-foreground/12 px-6 py-3 text-sm font-bold text-foreground transition hover:-translate-y-0.5 hover:border-foreground hover:shadow-elevated"
        >
          Google &amp; Meta Ads
        </Link>
        <Link
          href="/industries/restaurant-website-design-kansas-city"
          className="inline-flex items-center gap-2 rounded-full border border-foreground/12 px-6 py-3 text-sm font-bold text-foreground transition hover:-translate-y-0.5 hover:border-foreground hover:shadow-elevated"
        >
          Restaurant Website Design
        </Link>
        <Link
          href="/locations/leawood-ks"
          className="inline-flex items-center gap-2 rounded-full border border-foreground/12 px-6 py-3 text-sm font-bold text-foreground transition hover:-translate-y-0.5 hover:border-foreground hover:shadow-elevated"
        >
          Leawood Website Design
        </Link>
      </div>
    </SectionShell>
  );
}
