import { SectionShell } from "@/components/layout/section-shell";
import { ContactForm } from "@/components/sections/contact-form";

export function ContactCta() {
  return (
    <SectionShell>
      <div className="mb-10 md:mb-12">
        <h2 className="editorial-display max-w-none whitespace-nowrap text-[clamp(1.65rem,5.1vw,5.4rem)]">
          Build your website today
        </h2>
      </div>
      <ContactForm />
    </SectionShell>
  );
}
