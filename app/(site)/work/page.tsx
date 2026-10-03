import Link from "next/link";
import { PageIntro } from "@/components/layout/page-hero";
import { ContactCta } from "@/components/sections/contact-cta";
import { WorkGrid } from "@/components/sections/work-grid";
import { PageTransition } from "@/components/ui/page-transition";
import { Reveal } from "@/components/ui/reveal";
import { ArrowUpRightIcon } from "@/components/ui/site-icons";
import { StructuredData } from "@/components/seo/structured-data";
import { createPageMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema, webPageSchema } from "@/lib/seo/schema";
import { projects } from "@/data/projects";

const exploreLinks = [
  { href: "/services/website-design", label: "Website design Kansas City" },
  { href: "/industries/restaurant-website-design-kansas-city", label: "Restaurant website design" },
  { href: "/industries/construction-website-design-kansas-city", label: "Contractor website design" },
  { href: "/industries/home-services-website-design-kansas-city", label: "Home-service website design" },
  { href: "/locations/leawood-ks", label: "Leawood website design" },
  { href: "#form", label: "Get a free marketing audit" }
];

export const metadata = createPageMetadata(
  "Kansas City Website Design Work",
  "Recent custom website design projects and case studies for small businesses, service brands, restaurants, publishers, and ministries.",
  "/work"
);

export default function WorkPage() {
  const caseStudyProjects = projects.filter((project) => project.problem && project.result).slice(0, 4);
  const schema = [
    webPageSchema({
      name: "Our Work",
      description: "Recent website work for small businesses and organizations across several industries.",
      path: "/work"
    }),
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Work", path: "/work" }
    ])
  ];

  return (
    <PageTransition>
      <StructuredData data={schema} />
      <PageIntro
        badge={`Our work — ${projects.length} projects`}
        title="Real websites for real organizations"
        titleLines={[
          "Real websites",
          <>
            for <span className="serif-accent">real</span> organizations.
          </>
        ]}
        subtitle="Recent custom website design projects for small businesses, restaurants, contractors, publishers, ministries, and service brands."
      />

      <section aria-label="Projects" className="bg-background pb-48 pt-16 md:pt-24">
        <div className="site-container">
          <WorkGrid />
        </div>
      </section>

      {caseStudyProjects.length ? (
        <section aria-labelledby="case-studies-heading" className="grain bg-ink py-24 text-primary-foreground md:py-32">
          <div className="site-container">
            <div className="grid gap-8 md:grid-cols-12">
              <p className="eyebrow md:col-span-4">Case studies</p>
              <h2 id="case-studies-heading" className="section-title md:col-span-8">
                Projects with a clear problem, solution, and <span className="serif-accent">measured result.</span>
              </h2>
            </div>
            <ul className="mt-14 border-b border-primary-foreground/12 md:mt-20">
              {caseStudyProjects.map((project, index) => (
                <Reveal as="li" key={project.slug} delay={index * 0.06} className="border-t border-primary-foreground/12">
                  <Link href={`/case-studies/${project.slug}`} className="group grid gap-4 py-8 md:grid-cols-12 md:items-center md:gap-6 md:py-10">
                    <span className="text-[clamp(2rem,4vw,3.75rem)] font-semibold leading-none tracking-[-0.05em] transition-transform duration-700 ease-out-expo md:col-span-5 md:group-hover:translate-x-3">
                      {project.clientName}
                    </span>
                    <span className="leading-relaxed text-primary-foreground/60 md:col-span-6">{project.summary}</span>
                    <span className="hidden justify-end md:col-span-1 md:flex">
                      <span className="flex h-12 w-12 items-center justify-center rounded-full border border-primary-foreground/20 transition-colors duration-500 group-hover:border-accent group-hover:bg-accent">
                        <ArrowUpRightIcon className="h-4 w-4 transition-transform duration-500 group-hover:rotate-45" />
                      </span>
                    </span>
                  </Link>
                </Reveal>
              ))}
            </ul>

            <div className="mt-16 flex flex-col gap-6 md:flex-row md:items-center">
              <p className="mono-label shrink-0 text-primary-foreground/45 md:w-1/3">Explore</p>
              <div className="flex flex-wrap gap-2">
                {exploreLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/15 px-4 py-2 text-sm text-primary-foreground/80 transition-colors hover:border-primary-foreground hover:bg-primary-foreground hover:text-ink"
                  >
                    {link.label}
                    <ArrowUpRightIcon className="h-3.5 w-3.5" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      ) : null}

      <ContactCta
        title="Want your website to feel this intentional?"
        accentText="this intentional?"
        body="Send a few details about your business, what the current site is missing, and what would make the next version a win."
        links={[{ href: "/services/website-design", label: "Website Design Service" }]}
      />
    </PageTransition>
  );
}
