import { SectionShell } from "@/components/layout/section-shell";
import { ContactForm } from "@/components/sections/contact-form";

export function ContactCta() {
  return (
    <SectionShell>
      <div className="mb-10 max-w-3xl">
        <p className="text-sm uppercase tracking-[0.12em] text-muted">Contact</p>
        <h2 className="mt-4 text-[clamp(2rem,5vw,4rem)] font-semibold leading-[0.96] tracking-tight text-ink">
          Tell us about your project
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-muted">
          Low-pressure and straightforward. Share your business details and we
          will follow up with next steps.
        </p>
      </div>
      <ContactForm />
    </SectionShell>
  );
}
