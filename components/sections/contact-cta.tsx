import { SectionShell } from "@/components/layout/section-shell";
import { ContactForm } from "@/components/sections/contact-form";

export function ContactCta() {
  return (
    <SectionShell className="page-section-cta noise bg-gradient-dark text-primary-foreground">
      <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-1/2 hidden h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[120px] md:block" />
      <div className="relative mx-auto max-w-5xl text-center">
        <h2 className="mx-auto max-w-4xl text-balance text-4xl font-bold leading-[1.1] tracking-tight text-primary-foreground md:text-5xl lg:text-6xl">
          Ready to stop losing customers to competitors with <span className="gradient-text">better websites?</span>
        </h2>
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-primary-foreground/70">
          Tell us about your business. We&apos;ll put together a free, no-pressure game plan to get you more customers.
        </p>
        <div id="form" className="mt-12 text-left">
          <ContactForm dark />
        </div>
      </div>
    </SectionShell>
  );
}
