import { SectionShell } from "@/components/layout/section-shell";
import { ContactForm } from "@/components/sections/contact-form";

export function ContactCta() {
  return (
    <SectionShell>
      <div className="mb-10 max-w-3xl md:mb-12">
        <h2 className="editorial-display max-w-3xl">
          Build your website today
        </h2>
      </div>
      <ContactForm />
    </SectionShell>
  );
}
