import Image from "next/image";
import Link from "next/link";
import { SectionShell } from "@/components/layout/section-shell";
import { projects } from "@/data/projects";

export function FeaturedWork() {
  return (
    <SectionShell>
      <div className="mb-10 flex items-end justify-between gap-5">
        <h2 className="display-lg font-semibold text-white">
          Featured Work
        </h2>
        <Link href="/work" className="section-eyebrow text-white/75">
          See all projects
        </Link>
      </div>
      <div className="surface-secondary divide-y divide-white/12 px-6 py-2 md:px-10">
        {projects.map((project, index) => (
          <article key={project.slug} className="grid gap-5 py-7 md:grid-cols-12 md:items-center">
            <div className={`relative w-full overflow-hidden rounded-xl border border-white/10 ${index === 0 ? "h-64 md:col-span-5 md:h-72" : "h-56 md:col-span-5 md:h-64"}`}>
              <Image
                src={project.featuredImageUrl}
                alt={`${project.title} website preview`}
                fill
                sizes="(max-width: 768px) 100vw, 42vw"
                className="object-cover"
              />
            </div>
            <div className="md:col-span-7">
              <p className="kicker">
                {project.industry}
              </p>
              <h3 className="mt-3 text-[clamp(1.8rem,3.2vw,2.6rem)] font-medium tracking-tight text-white">
                {project.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-white/78">
                {project.summary}
              </p>
              <a
                className="mt-4 inline-flex text-sm font-medium text-[#9bb6ff] underline-offset-4 hover:underline"
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
              >
                View project
              </a>
            </div>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
