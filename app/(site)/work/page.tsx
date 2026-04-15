import { PageHero } from "@/components/layout/page-hero";
import { SectionShell } from "@/components/layout/section-shell";
import { WorkGrid } from "@/components/sections/work-grid";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { PageTransition } from "@/components/ui/page-transition";
import { ArrowRightIcon } from "@/components/ui/site-icons";
import { createPageMetadata } from "@/lib/seo/metadata";
import Link from "next/link";

export const metadata = createPageMetadata(
  "Real results for real KC businesses",
  "Every project is custom. Every client gets our full attention. Here's a taste of what we've built.",
  "/work"
);

export default function WorkPage() {
  return (
    <PageTransition>
      <section className="noise bg-black pt-32 pb-20 text-primary-foreground md:pt-40 md:pb-28">
        <div className="site-container">
          <PageHero
            badge="Our Work"
            title="Real results for real KC businesses"
            subtitle="Every project is custom. Every client gets our full attention. Here's a taste of what we've built."
            light
          />
        </div>
      </section>

      <SectionShell>
        <WorkGrid />
        <div className="mt-14 flex justify-center">
          <MagneticButton>
            <Link
              href="/contact#form"
              className="inline-flex items-center gap-2 rounded-full border border-foreground/12 px-6 py-3 text-sm font-bold text-foreground transition hover:-translate-y-0.5 hover:border-foreground hover:shadow-elevated"
            >
              Start Your Project
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </MagneticButton>
        </div>
      </SectionShell>
    </PageTransition>
  );
}
