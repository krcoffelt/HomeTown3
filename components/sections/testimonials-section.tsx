import { SectionShell } from "@/components/layout/section-shell";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { testimonials } from "@/data/copy";

export function TestimonialsSection() {
  const [featured, ...rest] = testimonials.slice(0, 5);

  return (
    <SectionShell className="bg-background">
      <SectionHeading
        badge="Real Reviews"
        title="Don't just take our word for it"
        subtitle="5.0 on Google with real reviews from Kansas City-area clients."
      />
      <div className="grid gap-5 lg:grid-cols-5">
        <Reveal className="lg:col-span-2">
          <TestimonialCard
            name={featured.name}
            text={featured.text}
            highlight={featured.highlight}
            featured
          />
        </Reveal>
        <div className="grid gap-5 sm:grid-cols-2 lg:col-span-3">
          {rest.map((testimonial, index) => (
            <Reveal key={testimonial.name} delay={index * 0.05}>
              <TestimonialCard
                name={testimonial.name}
                text={testimonial.text}
                highlight={testimonial.highlight}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
