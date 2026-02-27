import Image from "next/image";
import Link from "next/link";
import { SectionShell } from "@/components/layout/section-shell";
import { Card } from "@/components/ui/card";
import { projects } from "@/data/projects";

export function FeaturedWork() {
  return (
    <SectionShell>
      <div className="mb-10 flex items-end justify-between gap-5">
        <h2 className="display-lg font-semibold text-ink">
          Featured Work
        </h2>
        <Link href="/work" className="section-eyebrow text-muted">
          See all projects
        </Link>
      </div>
      <div className="grid gap-5 md:grid-cols-6">
        {projects.map((project, index) => (
          <Card
            key={project.slug}
            className={`overflow-hidden p-0 ${index === 0 ? "md:col-span-4" : "md:col-span-2"}`}
          >
            <div className={`relative w-full ${index === 0 ? "h-80 md:h-[440px]" : "h-64 md:h-[320px]"}`}>
              <Image
                src={project.featuredImageUrl}
                alt={`${project.title} website preview`}
                fill
                sizes={index === 0 ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"}
                className="object-cover transition duration-500 hover:scale-[1.02]"
              />
            </div>
            <div className="p-6">
              <p className="section-eyebrow text-muted">
                {project.industry}
              </p>
              <h3 className="mt-2 text-2xl font-medium tracking-tight text-ink md:text-3xl">
                {project.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-muted">
                {project.summary}
              </p>
              <a
                className="mt-4 inline-flex text-sm font-medium text-ink underline-offset-4 hover:underline"
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
              >
                View project
              </a>
            </div>
          </Card>
        ))}
      </div>
    </SectionShell>
  );
}
