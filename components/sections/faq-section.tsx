import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { SectionHeading } from "@/components/ui/section-heading";
import { Accordion } from "@/components/ui/accordion";
import { SectionShell } from "@/components/layout/section-shell";
import { faqs } from "@/data/faqs";

interface FAQSectionProps {
  page: "home" | "pricing";
  ctaHref?: string;
}

export function FAQSection({ page, ctaHref = "/contact#form" }: FAQSectionProps) {
  const items = faqs.filter((faq) => faq.page === page);

  return (
    <SectionShell className="bg-background">
      <div className="grid gap-12 lg:grid-cols-5">
        <div className="lg:col-span-2 lg:sticky lg:top-32 lg:self-start">
          <SectionHeading
            badge="FAQ"
            title="Questions? We've got answers."
            subtitle="If you don't see your question here, just ask us. We love talking shop."
            centered={false}
          />
          <MagneticButton>
            <Button href={ctaHref} variant="secondary">Ask a Question</Button>
          </MagneticButton>
        </div>
        <div className="lg:col-span-3">
          <Accordion items={items} />
        </div>
      </div>
    </SectionShell>
  );
}
