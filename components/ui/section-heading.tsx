import { cn } from "@/lib/utils/cn";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
}

export function SectionHeading({
  badge,
  title,
  subtitle,
  centered = true,
  light = false,
  className
}: SectionHeadingProps) {
  return (
    <div className={cn("mb-14 max-w-2xl", centered && "mx-auto text-center", className)}>
      {badge ? <span className="section-badge">{badge}</span> : null}
      <h2 className={cn("mt-5 whitespace-pre-line section-title", light ? "text-primary-foreground" : "text-foreground")}>{title}</h2>
      {subtitle ? (
        <p className={cn("mt-5 text-base leading-relaxed md:text-lg", light ? "text-primary-foreground/65" : "text-muted-foreground")}>
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
