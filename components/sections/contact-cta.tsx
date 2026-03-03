import { SectionShell } from "@/components/layout/section-shell";
import { ContactForm } from "@/components/sections/contact-form";

export function ContactCta() {
  return (
    <SectionShell>
      <div className="mb-10 max-w-3xl md:mb-12">
        <p className="kicker">Contact</p>
        <h2 className="mt-4 editorial-display max-w-3xl">
          Tell us about your project
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-white/80">
          Low-pressure and straightforward. Share your business details and we
          will follow up with next steps.
        </p>
      </div>
      <ContactForm />
    </SectionShell>
  );
}
