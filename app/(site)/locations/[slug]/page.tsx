import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ContactCta } from "@/components/sections/contact-cta";
import { StructuredData } from "@/components/seo/structured-data";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon, CheckCircleIcon, GlobeIcon, MapPinIcon, TargetIcon, TrendingUpIcon, ZapIcon } from "@/components/ui/site-icons";
import { getLocationBySlug, locations } from "@/data/locations";
import { getProjectBySlug } from "@/data/projects";
import { getServiceBySlug } from "@/data/services";
import { createPageMetadata } from "@/lib/seo/metadata";
import { getLocationShareImage } from "@/lib/seo/routes";
import { breadcrumbSchema, faqItemsSchema, webPageSchema } from "@/lib/seo/schema";

interface LocationPageProps {
  params: Promise<{ slug: string }>;
}

const iconMap: Record<string, typeof GlobeIcon> = {
  "website-design": GlobeIcon,
  "google-ads-management": TargetIcon,
  "social-media-management": ZapIcon,
  "graphic-design": ZapIcon,
  "search-engine-optimization": TrendingUpIcon,
  "analytics-and-tracking": CheckCircleIcon,
  "brand-identity": MapPinIcon
};

export async function generateStaticParams() {
  return locations.map((location) => ({ slug: location.slug }));
}

export async function generateMetadata({ params }: LocationPageProps): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocationBySlug(slug);

  if (!location) {
    return createPageMetadata("Location Not Found", "The requested location page could not be found.", "/locations");
  }

  return createPageMetadata(
    location.seoTitle,
    location.seoDescription,
    `/locations/${location.slug}`,
    undefined,
    { image: getLocationShareImage(location.slug) }
  );
}

export default async function LocationDetailPage({ params }: LocationPageProps) {
  const { slug } = await params;
  const location = getLocationBySlug(slug);

  if (!location) {
    notFound();
  }

  const priorityServices = location.priorityServices
    .map((serviceSlug) => getServiceBySlug(serviceSlug))
    .filter((service): service is NonNullable<typeof service> => Boolean(service));

  const relatedProjects = location.relatedProjectSlugs
    .map((projectSlug) => getProjectBySlug(projectSlug))
    .filter((project): project is NonNullable<typeof project> => Boolean(project));

  const nearbyLocations = locations.filter((entry) => entry.slug !== location.slug);

  const schema = [
    webPageSchema({
      name: location.seoTitle,
      description: location.seoDescription,
      path: `/locations/${location.slug}`
    }),
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Locations", path: "/locations" },
      { name: `${location.city}, ${location.state}`, path: `/locations/${location.slug}` }
    ]),
    faqItemsSchema(location.faqItems)
  ];

  return (
    <div className="overflow-x-hidden bg-background">
      <StructuredData data={schema} />

      <section className="relative overflow-hidden bg-gradient-dark pt-32 pb-20 text-primary-foreground md:pt-40 md:pb-28">
        <div aria-hidden="true" className="pointer-events-none absolute right-0 top-0 h-[420px] w-[420px] rounded-full bg-accent/10 blur-[140px]" />
        <div aria-hidden="true" className="pointer-events-none absolute left-[-4rem] bottom-[-6rem] h-[320px] w-[320px] rounded-full bg-primary/5 blur-[120px]" />

        <div className="site-container relative">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-primary-foreground/78 sm:text-xs">
                <MapPinIcon className="h-3.5 w-3.5 text-accent" />
                {location.city}, {location.state}
              </span>
              <h1 className="mt-6 max-w-[15ch] font-display text-[2.2rem] font-bold leading-[0.98] tracking-[-0.04em] text-primary-foreground sm:text-6xl sm:leading-[1.01] lg:text-7xl">
                {location.heroTitle}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/72">
                {location.heroDescription}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href="#form" className="h-14 px-8" dataAnalytics="cta-location-primary">
                  {location.ctaLabel}
                </Button>
                <Button href="/website-offer-800" variant="secondary" className="h-14 px-8 text-primary-foreground hover:text-primary-foreground">
                  See the $800 Website Offer
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-[var(--shadow-hero)] backdrop-blur-sm md:p-8">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Built for {location.city}</p>
                <p className="mt-5 text-xl leading-relaxed text-primary-foreground">{location.localAngle}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-foreground py-12 text-background md:py-14">
        <div className="site-container">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-4">
            {location.trustHighlights.map((item, index) => (
              <div
                key={item}
                className={`px-4 text-center md:text-left ${index < location.trustHighlights.length - 1 ? "md:border-r md:border-background/10" : ""}`}
              >
                <div className="text-accent">●</div>
                <div className="mt-2 text-xs font-bold uppercase tracking-widest text-background/60">{item}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-20 md:py-28">
        <div className="site-container">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-3xl border border-border bg-card p-7 shadow-[var(--shadow-card)] md:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">How we help businesses in {location.city}</p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground">{location.introTitle}</h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">{location.introDescription}</p>
            </div>

            <div className="rounded-3xl border border-primary-foreground/10 bg-gradient-dark p-7 text-primary-foreground shadow-[var(--shadow-hero)] md:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary-foreground/58">What that looks like</p>
              <div className="mt-6 grid gap-4">
                {location.whyPoints.map((point) => (
                  <div key={point} className="flex items-start gap-3 text-sm leading-relaxed text-primary-foreground/78">
                    <CheckCircleIcon className="mt-0.5 h-4 w-4 text-accent" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="noise bg-secondary/30 py-20 md:py-28">
        <div className="site-container">
          <div className="mb-10 max-w-2xl">
            <span className="inline-block rounded-full bg-accent px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-accent-foreground sm:text-xs">
              Core Services
            </span>
            <h2 className="mt-5 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              The services that matter most for {location.city} businesses.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {priorityServices.map((service) => {
              const Icon = iconMap[service.slug] ?? GlobeIcon;
              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group rounded-3xl border border-border bg-card p-7 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-elevated)]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-accent">{service.price}</p>
                  <h3 className="mt-3 text-2xl font-bold tracking-tight text-foreground">{service.title}</h3>
                  <p className="mt-4 text-base leading-relaxed text-muted-foreground">{service.shortDescription}</p>
                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-foreground transition group-hover:text-accent">
                    View service
                    <ArrowRightIcon className="h-4 w-4" />
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {[
              { label: "Compare Website Pricing", href: "/pricing" },
              { label: "View Website Work", href: "/work" },
              { label: `Start a ${location.city} Project`, href: "#form" }
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full border border-border bg-card px-4 py-2 text-sm font-bold text-foreground transition hover:-translate-y-0.5 hover:border-accent"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {location.seoSections?.length ? (
        <section className="bg-background py-20 md:py-28">
          <div className="site-container">
            <div className="grid gap-6 lg:grid-cols-2">
              {location.seoSections.map((section) => (
                <article key={section.title} className="rounded-3xl border border-border bg-card p-7 shadow-[var(--shadow-card)] md:p-10">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">{section.eyebrow}</p>
                  <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground">{section.title}</h2>
                  <p className="mt-5 text-base leading-relaxed text-muted-foreground">{section.body}</p>
                  <div className="mt-7 grid gap-3">
                    {section.items.map((item) => (
                      <div key={item} className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
                        <CheckCircleIcon className="mt-0.5 h-4 w-4 text-accent" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </article>
              ))}
              <article className="rounded-3xl border border-primary-foreground/10 bg-gradient-dark p-7 text-primary-foreground shadow-[var(--shadow-hero)] md:p-10">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary-foreground/58">Primary SEO Focus</p>
                <h2 className="mt-4 text-3xl font-bold tracking-tight text-primary-foreground">
                  Website design first, then marketing that builds on the site.
                </h2>
                <p className="mt-5 text-base leading-relaxed text-primary-foreground/72">
                  The strongest starting point for {location.city} businesses is a custom website that makes the offer clear. SEO, ads, branding, and social work better once that foundation is credible.
                </p>
                <Button href="/services/website-design" className="mt-7">
                  Website Design in {location.city}
                </Button>
              </article>
            </div>
          </div>
        </section>
      ) : null}

      <section className="bg-background py-20 md:py-28">
        <div className="site-container">
          <div className="mb-10 max-w-2xl">
            <span className="inline-block rounded-full border border-border bg-card px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-muted-foreground sm:text-xs">
              Selected Work
            </span>
            <h2 className="mt-5 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Real work that backs up the promise.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {relatedProjects.map((project) => {
              const hasCaseStudy = Boolean(project.problem && project.solution && project.result);
              const projectHref = hasCaseStudy ? `/case-studies/${project.slug}` : project.liveUrl ?? "/work";
              const projectCard = (
                <>
                  <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
                    <Image
                      src={project.featuredImageUrl}
                      alt={project.imageAlt}
                      fill
                      sizes="(max-width: 768px) 92vw, 31vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">{project.category}</p>
                    <h3 className="mt-3 text-xl font-bold tracking-tight text-foreground">{project.clientName}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.summary}</p>
                    <div className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-foreground transition group-hover:text-accent">
                      {hasCaseStudy ? "Read case study" : "View live site"}
                      <ArrowRightIcon className="h-4 w-4" />
                    </div>
                  </div>
                </>
              );

              if (hasCaseStudy) {
                return (
                  <Link
                    key={project.slug}
                    href={projectHref}
                    className="group overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-elevated)]"
                  >
                    {projectCard}
                  </Link>
                );
              }

              return (
                <a
                  key={project.slug}
                  href={projectHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-elevated)]"
                >
                  {projectCard}
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-dark py-20 text-primary-foreground md:py-28">
        <div aria-hidden="true" className="pointer-events-none absolute right-[-6rem] top-[-6rem] h-[260px] w-[260px] rounded-full bg-accent/10 blur-[100px]" />
        <div className="site-container">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <span className="inline-block rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary-foreground/70 sm:text-xs">
                Why Hometown
              </span>
              <h2 className="mt-5 text-3xl font-bold tracking-tight text-primary-foreground md:text-4xl">
                {location.whyTitle}
              </h2>
              <p className="mt-5 text-base leading-relaxed text-primary-foreground/72">{location.whyDescription}</p>
            </div>

            <div className="grid gap-4">
              {location.whyPoints.map((point) => (
                <div key={point} className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-sm leading-relaxed text-primary-foreground/84">
                  {point}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary/40 py-20 md:py-28">
        <div className="site-container">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <span className="inline-block rounded-full border border-border bg-card px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-muted-foreground sm:text-xs">
              FAQs
            </span>
            <h2 className="mt-5 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Questions businesses in {location.city} usually ask.
            </h2>
          </div>

          <div className="mx-auto max-w-3xl rounded-2xl border border-border bg-card px-2 shadow-[var(--shadow-card)] md:px-6">
            {location.faqItems.map((item, index) => (
              <details
                key={item.question}
                className={`group border-b border-border ${index === location.faqItems.length - 1 ? "border-b-0" : ""}`}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-6 pl-3 text-left text-base font-bold text-card-foreground md:pl-4 md:text-lg">
                  {item.question}
                  <span className="text-muted-foreground transition group-open:rotate-45">+</span>
                </summary>
                <div className="pb-6 text-sm leading-relaxed text-muted-foreground md:text-base">{item.answer}</div>
              </details>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {nearbyLocations.map((entry) => (
              <Link
                key={entry.slug}
                href={`/locations/${entry.slug}`}
                className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition hover:-translate-y-0.5 hover:shadow-card"
              >
                {entry.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ContactCta
        title={location.ctaLabel}
        accentText={location.city}
        body={`If your business in ${location.city} needs a better website, stronger visibility, or clearer marketing, start here.`}
        links={[{ href: "/website-offer-800", label: "See the $800 Website Offer" }]}
      />
    </div>
  );
}
