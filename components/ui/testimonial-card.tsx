import { QuoteIcon } from "@/components/ui/site-icons";
import { cn } from "@/lib/utils/cn";

interface TestimonialCardProps {
  name: string;
  text: string;
  highlight?: string;
  featured?: boolean;
}

function Stars() {
  return (
    <div className="flex items-center gap-1 text-yellow-500">
      {Array.from({ length: 5 }).map((_, index) => (
        <span key={index} className="text-lg leading-none">★</span>
      ))}
    </div>
  );
}

export function TestimonialCard({ name, text, highlight, featured = false }: TestimonialCardProps) {
  if (featured) {
    return (
      <article className="rounded-2xl bg-accent p-8 text-accent-foreground md:p-10">
        <QuoteIcon className="h-8 w-8" />
        <div className="mt-6">
          <Stars />
        </div>
        <p className="mt-6 text-2xl font-bold leading-tight">{highlight}</p>
        <p className="mt-4 text-base leading-relaxed text-accent-foreground/90">{text}</p>
        <div className="mt-8 flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
            {name.charAt(0)}
          </div>
          <div>
            <p className="font-bold">{name}</p>
            <p className="text-sm text-accent-foreground/80">Google Review</p>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="group relative rounded-2xl border border-border bg-card p-6 transition duration-300 hover:-translate-y-1 hover:shadow-elevated">
      <span className="absolute inset-y-6 left-0 w-[3px] rounded-r-full bg-accent opacity-0 transition duration-300 group-hover:opacity-100" />
      <Stars />
      <p className="mt-4 text-base font-bold leading-snug text-foreground">{highlight}</p>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p>
      <div className="mt-6 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-sm font-bold text-foreground">
          {name.charAt(0)}
        </div>
        <div>
          <p className="text-sm font-bold text-foreground">{name}</p>
          <p className="text-xs text-muted-foreground">Google Review</p>
        </div>
      </div>
    </article>
  );
}
