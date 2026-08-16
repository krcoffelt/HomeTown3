import { ArrowRightIcon } from "@/components/ui/site-icons";
import { cn } from "@/lib/utils/cn";
import type { ReactNode } from "react";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
}

export function ServiceCard({ icon, title, description, className }: ServiceCardProps) {
  return (
    <article className={cn("group light-panel flex h-full flex-col gap-5 p-7 transition duration-300 hover:-translate-y-1 hover:shadow-elevated", className)}>
      <div className="flex items-start justify-between gap-4">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent transition group-hover:bg-accent group-hover:text-accent-foreground">
          {icon}
        </div>
        <ArrowRightIcon className="h-4 w-4 translate-x-[-4px] opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
      </div>
      <div>
        <h3 className="text-xl font-bold text-foreground">{title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{description}</p>
      </div>
    </article>
  );
}
