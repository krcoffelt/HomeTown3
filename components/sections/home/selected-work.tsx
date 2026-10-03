import Image from "next/image";
import Link from "next/link";
import { SplitLines } from "@/components/motion/split-lines";
import { Button } from "@/components/ui/button";
import { ArrowUpRightIcon } from "@/components/ui/site-icons";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils/cn";

const featuredSlugs = ["wrapped-up-moving", "noble-hardwoods", "plate-kc", "dragonfly-catering", "project-salvation"];

function BrowserShot({ src, alt, dark }: { src: string; alt: string; dark: boolean }) {
  return (
    <div className={cn("overflow-hidden rounded-[0.9rem]", dark ? "bg-[#26261f]" : "bg-secondary")}>
      <div className="flex items-center gap-1.5 px-4 py-3" aria-hidden="true">
        {[0, 1, 2].map((dot) => (
          <span key={dot} className={cn("h-2.5 w-2.5 rounded-full", dark ? "bg-primary-foreground/15" : "bg-foreground/15")} />
        ))}
      </div>
      <div className="relative aspect-[16/10]">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 1024px) 92vw, 52vw"
          className="object-cover object-top transition-transform duration-[1.4s] ease-out-expo group-hover:scale-[1.03]"
        />
      </div>
    </div>
  );
}

export function SelectedWork() {
  const featured = featuredSlugs
    .map((slug) => projects.find((project) => project.slug === slug))
    .filter((project): project is (typeof projects)[number] => Boolean(project));

  return (
    <section aria-labelledby="work-heading" className="bg-background pb-24 md:pb-36">
      <div className="site-container">
        <div className="flex flex-col justify-between gap-8 border-t border-foreground/12 pt-10 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">Selected work</p>
            <SplitLines
              id="work-heading"
              lines={[
                <>
                  Work that <span className="serif-accent">works.</span>
                </>
              ]}
              className="display-lg mt-6"
            />
          </div>
          <div className="flex items-center gap-6">
            <p className="hidden max-w-xs text-muted-foreground lg:block">
              Custom builds for local businesses — measured by what they produce after launch.
            </p>
            <Button href="/work" variant="secondary">
              All projects
            </Button>
          </div>
        </div>

        <div className="mt-14 grid gap-5 md:mt-20 lg:gap-0">
          {featured.map((project, index) => {
            const dark = index % 2 === 0;
            const hasCaseStudy = Boolean(project.problem && project.result);
            const href = hasCaseStudy ? `/case-studies/${project.slug}` : "/work";
            return (
              <article
                key={project.slug}
                className="lg:sticky lg:mb-[10vh] lg:last:mb-0"
                style={{ top: `calc(6rem + ${index * 1.1}rem)` }}
              >
                <Link
                  href={href}
                  className={cn(
                    "group grid gap-8 overflow-hidden rounded-[1.75rem] p-5 shadow-[0_-24px_60px_-40px_rgb(0_0_0/0.45)] sm:p-7 lg:min-h-[78vh] lg:grid-cols-12 lg:gap-10 lg:p-10",
                    dark ? "bg-ink text-primary-foreground" : "border border-foreground/10 bg-card text-foreground"
                  )}
                >
                  <div className="flex flex-col lg:col-span-5">
                    <div className={cn("mono-label flex items-center justify-between", dark ? "text-primary-foreground/50" : "text-muted-foreground")}>
                      <span>{project.category}</span>
                    </div>
                    <h3 className="mt-8 font-display text-[clamp(2.4rem,4.6vw,4.5rem)] font-semibold leading-[0.95] tracking-[-0.05em] lg:mt-auto">
                      {project.clientName}
                    </h3>
                    <p className={cn("mt-5 max-w-md text-lg leading-relaxed", dark ? "text-primary-foreground/65" : "text-muted-foreground")}>
                      {project.summary}
                    </p>

                    {project.metrics ? (
                      <dl className={cn("mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-xl", dark ? "bg-primary-foreground/10" : "bg-foreground/10")}>
                        {project.metrics.slice(0, 2).map((metric) => (
                          <div key={metric.label} className={cn("p-4", dark ? "bg-ink" : "bg-card")}>
                            <dt className={cn("text-sm leading-snug", dark ? "text-primary-foreground/55" : "text-muted-foreground")}>{metric.label}</dt>
                            <dd className="mt-2 text-[clamp(1.5rem,2.4vw,2.25rem)] font-semibold tracking-[-0.04em]">{metric.value}</dd>
                          </div>
                        ))}
                      </dl>
                    ) : (
                      <ul className="mt-8 flex flex-wrap gap-2">
                        {project.servicesProvided.slice(0, 3).map((service) => (
                          <li
                            key={service}
                            className={cn("rounded-full border px-3 py-1.5 text-sm", dark ? "border-primary-foreground/15" : "border-foreground/15")}
                          >
                            {service}
                          </li>
                        ))}
                      </ul>
                    )}

                    <span className="mt-8 inline-flex items-center gap-3 font-medium">
                      <span className="roll" data-text={hasCaseStudy ? "Read the case study" : "View the project"}>
                        <span>{hasCaseStudy ? "Read the case study" : "View the project"}</span>
                      </span>
                      <span
                        className={cn(
                          "flex h-9 w-9 items-center justify-center rounded-full transition-colors",
                          dark ? "bg-primary-foreground text-ink group-hover:bg-accent group-hover:text-accent-foreground" : "bg-ink text-primary-foreground group-hover:bg-accent"
                        )}
                      >
                        <ArrowUpRightIcon className="h-4 w-4 transition-transform duration-500 group-hover:rotate-45" />
                      </span>
                    </span>
                  </div>
                  <div className="lg:col-span-7 lg:self-center">
                    <BrowserShot src={project.featuredImageUrl} alt={project.imageAlt} dark={dark} />
                  </div>
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
