interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
  dark?: boolean;
}

export function Accordion({ items, dark = false }: AccordionProps) {
  const rule = dark ? "border-primary-foreground/12" : "border-foreground/12";
  const muted = dark ? "text-primary-foreground/65" : "text-muted-foreground";

  return (
    <div className={`border-b ${rule}`}>
      {items.map((item, index) => (
        <details key={item.question} className={`group border-t ${rule}`} open={index === 0}>
          <summary className="flex cursor-pointer list-none items-start gap-5 py-6 text-left md:gap-8 md:py-8 [&::-webkit-details-marker]:hidden">
            <span className="flex-1 text-xl font-medium leading-snug tracking-[-0.025em] md:text-[1.65rem]">{item.question}</span>
            <span
              aria-hidden="true"
              className={`relative mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-colors duration-300 ${
                dark
                  ? "border-primary-foreground/20 group-open:border-primary-foreground group-open:bg-primary-foreground group-open:text-ink"
                  : "border-foreground/15 group-open:border-foreground group-open:bg-foreground group-open:text-background"
              }`}
            >
              <span className="absolute h-[1.5px] w-3.5 bg-current" />
              <span className="absolute h-3.5 w-[1.5px] bg-current transition-transform duration-500 ease-out-expo group-open:rotate-90 group-open:scale-y-0" />
            </span>
          </summary>
          <div className="pb-8 pr-12">
            <p className={`max-w-2xl text-base leading-relaxed md:text-lg md:leading-relaxed ${muted}`}>{item.answer}</p>
          </div>
        </details>
      ))}
    </div>
  );
}
