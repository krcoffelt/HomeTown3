import { Button } from "@/components/ui/button";
import { Accordion } from "@/components/ui/accordion";
import { SectionShell } from "@/components/layout/section-shell";
import { faqs } from "@/data/faqs";

interface FAQSectionProps {
  page: "home";
  ctaHref?: string;
}

export function FAQSection({ page, ctaHref = "/contact#form" }: FAQSectionProps) {
  const items = faqs.filter((faq) => faq.page === page);

  return (
    <SectionShell className="bg-background">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="lg:sticky lg:top-32 lg:col-span-4 lg:self-start">
          <p className="eyebrow">FAQ</p>
          <h2 data-reveal="up" className="section-title mt-6">
            Questions, <span className="serif-accent">answered.</span>
          </h2>
          <p className="mt-6 max-w-sm text-lg leading-relaxed text-muted-foreground">
            Still not sure where to start? That&apos;s exactly what the free audit is for.
          </p>
          <div className="mt-8">
            <Button href={ctaHref} variant="dark">
              Get a free audit
            </Button>
          </div>
        </div>
        <div className="lg:col-span-8">
          <Accordion items={items} />
        </div>
      </div>
    </SectionShell>
  );
}
