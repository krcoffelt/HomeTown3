import Image from "next/image";
import { PageHero } from "@/components/layout/page-hero";
import { SectionShell } from "@/components/layout/section-shell";
import { Card } from "@/components/ui/card";
import { projects } from "@/data/projects";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata = createPageMetadata(
  "Recent Website Projects for Kansas City Businesses | Hometown",
  "View recent website projects built for Kansas City and local service businesses.",
  "/work"
);

export default function WorkPage() {
  return (
    <>
      <SectionShell className="pb-10 pt-16 md:pt-24">
        <PageHero
          eyebrow="Work"
          title={
            <>
              Recent projects for Kansas City{" "}
              <span className="serif italic font-normal">businesses</span>
            </>
          }
          subtitle="Visual proof of premium website execution built to improve trust and inquiry flow."
        />
      </SectionShell>
      <SectionShell className="pt-6">
        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project) => (
            <Card key={project.slug} className="overflow-hidden p-0">
              <div className="relative h-80 w-full">
                <Image
                  src={project.featuredImageUrl}
                  alt={`${project.clientName} project preview`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-medium text-ink">{project.clientName}</h2>
                <p className="mt-1 text-sm uppercase tracking-[0.12em] text-muted">
                  {project.industry}
                </p>
                <p className="mt-4 text-base leading-relaxed text-muted">
                  {project.summary}
                </p>
                <p className="mt-4 text-sm text-text">
                  What was built: {project.servicesProvided.join(", ")}
                </p>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex text-sm font-medium text-ink underline-offset-4 hover:underline"
                >
                  Visit live site
                </a>
              </div>
            </Card>
          ))}
        </div>
      </SectionShell>
    </>
  );
}
