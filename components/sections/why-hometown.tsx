import { SectionShell } from "@/components/layout/section-shell";
import { Button } from "@/components/ui/button";

const pillars = [
  {
    title: "Direct communication",
    body: "You work directly with the builder so feedback and revisions move fast."
  },
  {
    title: "Premium visual quality",
    body: "Clean typography, modern layout systems, and mobile polish built into every page."
  },
  {
    title: "Conversion-first structure",
    body: "Every section is designed to move visitors toward inquiry, call, or form submit."
  },
  {
    title: "Kansas City local context",
    body: "Messaging and service framing tuned for how local customers evaluate trust."
  }
];

export function WhyHometown() {
  return (
    <SectionShell>
      <section className="rounded-[2rem] border border-white/14 bg-[linear-gradient(160deg,rgba(255,255,255,0.05),rgba(255,255,255,0.01)_40%,rgba(8,14,26,0.94)_100%)] px-7 py-8 md:px-10 md:py-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-3xl">
            <p className="kicker">Why Hometown</p>
            <h2 className="mt-4 text-[clamp(2rem,5vw,4.2rem)] font-semibold leading-[0.95] tracking-tight text-white">
              Premium execution built for local service businesses.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-white/84">
              Clear process, clear communication, and websites designed to convert.
            </p>
          </div>
          <Button href="/contact#form">Start Your Project</Button>
        </div>

        <div className="mt-9 grid gap-4 md:grid-cols-2">
          {pillars.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-white/16 bg-[#0b1220]/78 px-5 py-5 transition duration-300 hover:border-white/28 hover:bg-[#0d1729]/92"
            >
              <h3 className="text-[1.5rem] font-semibold tracking-tight text-white">
                {item.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-white/84">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </section>
    </SectionShell>
  );
}
