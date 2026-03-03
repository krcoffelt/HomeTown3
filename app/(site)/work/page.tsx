import Image from "next/image";
import { PageHero } from "@/components/layout/page-hero";
import { SectionShell } from "@/components/layout/section-shell";
import { projects } from "@/data/projects";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata = createPageMetadata(
  "Recent Website Projects | Hometown Marketing Agency",
  "View recent website projects built by Hometown Marketing Agency for Kansas City and local service businesses.",
  "/work"
);

export default function WorkPage() {
  return (
    <>
      <SectionShell className="pb-8 pt-16 md:pt-24">
        <PageHero
          eyebrow="Work"
          title={
            <>
              Recent projects for Kansas City{" "}
              <span className="serif italic font-normal">businesses</span>
            </>
          }
          subtitle="A focused look at how we build premium local business websites."
        />
      </SectionShell>

      <SectionShell className="pt-4">
        <div className="surface-secondary divide-y divide-white/12 px-6 py-2 !text-white md:px-10">
          {projects.map((project) => (
            <article key={project.slug} className="grid gap-6 py-8 !text-white md:grid-cols-12 md:items-center">
              <div className="relative h-56 overflow-hidden rounded-xl border border-white/10 md:col-span-5">
                <Image
                  src={project.featuredImageUrl}
                  alt={`${project.clientName} project preview`}
                  fill
                  sizes="(max-width: 768px) 100vw, 42vw"
                  className="object-cover"
                />
              </div>
              <div className="md:col-span-7">
                <p className="section-eyebrow !text-white">{project.industry}</p>
                <h2 className="mt-3 text-[clamp(1.8rem,3.2vw,2.8rem)] font-medium tracking-tight !text-white">
                  {project.clientName}
                </h2>
                <p className="mt-3 text-base leading-relaxed !text-white">{project.summary}</p>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex text-sm font-medium !text-white underline underline-offset-4"
                >
                  Visit live site
                </a>
              </div>
            </article>
          ))}
        </div>
      </SectionShell>
    </>
  );
}
