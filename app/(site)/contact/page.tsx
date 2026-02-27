import { PageHero } from "@/components/layout/page-hero";
import { SectionShell } from "@/components/layout/section-shell";
import { ContactForm } from "@/components/sections/contact-form";
import { FounderNote } from "@/components/sections/founder-note";
import { createPageMetadata } from "@/lib/seo/metadata";
import { site } from "@/data/site";

export const metadata = createPageMetadata(
  "Contact Hometown | Kansas City Website Design",
  "Contact Hometown for premium website design and lead-focused web strategy for Kansas City businesses.",
  "/contact"
);

export default function ContactPage() {
  return (
    <>
      <SectionShell className="pb-10 pt-16 md:pt-24">
        <PageHero
          eyebrow="Contact"
          title={
            <>
              Start your project with{" "}
              <span className="serif italic font-normal">Hometown</span>
            </>
          }
          subtitle="Share your business details and we will send clear next steps."
        />
      </SectionShell>
      <SectionShell className="pt-6">
        <div className="grid gap-6 md:grid-cols-12">
          <div className="space-y-6 md:col-span-4">
            <FounderNote />
            <div className="rounded-md border border-line bg-surface p-5">
              <p className="text-sm uppercase tracking-[0.12em] text-muted">
                Fallback contact
              </p>
              <p className="mt-3 text-base text-text">
                Email: <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>
              </p>
              <p className="mt-2 text-base text-text">
                Phone: <a href={`tel:${site.contactPhone}`}>{site.contactPhone}</a>
              </p>
              <p className="mt-3 text-sm text-muted">{site.location}</p>
            </div>
          </div>
          <div className="md:col-span-8">
            <ContactForm />
          </div>
        </div>
      </SectionShell>
    </>
  );
}
