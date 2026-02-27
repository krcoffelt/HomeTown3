import { SectionShell } from "@/components/layout/section-shell";
import { Accordion } from "@/components/ui/accordion";
import { faqs } from "@/data/faqs";

interface FAQSectionProps {
  page: "home" | "pricing";
}

export function FAQSection({ page }: FAQSectionProps) {
  const items = faqs.filter((faq) => faq.page === page);
  return (
    <SectionShell>
      <p className="section-eyebrow mb-4 text-muted">FAQ</p>
      <h2 className="mb-8 text-[clamp(2.2rem,4.8vw,4rem)] font-semibold leading-[0.98] tracking-tight text-ink">
        Frequently Asked Questions
      </h2>
      <Accordion items={items} />
    </SectionShell>
  );
}
