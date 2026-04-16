import { cn } from "@/lib/utils/cn";

interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

export function Accordion({ items }: AccordionProps) {
  return (
    <div className="grid gap-4">
      {items.map((item, index) => (
        <details
          key={item.question}
          className="group overflow-hidden rounded-2xl border border-border bg-card text-foreground open:border-foreground open:bg-foreground open:text-primary-foreground"
          open={index === 0}
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-5 text-left md:px-8 md:py-7">
            <span className="text-lg font-bold leading-tight md:text-2xl">{item.question}</span>
            <span
              className={cn(
                "inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border text-2xl transition",
                "border-border bg-secondary group-open:border-primary-foreground/20 group-open:bg-primary-foreground/10"
              )}
            >
              <span className="group-open:hidden">+</span>
              <span className="hidden group-open:inline">−</span>
            </span>
          </summary>
          <div className="border-t border-primary-foreground/10 px-5 py-5 md:px-8 md:py-6">
            <p className="text-base leading-relaxed text-muted-foreground group-open:text-primary-foreground/75">
              {item.answer}
            </p>
          </div>
        </details>
      ))}
    </div>
  );
}
