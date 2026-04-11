import { SectionShell } from "@/components/layout/section-shell";
import { Button } from "@/components/ui/button";

const pillars = [
  {
    title: "Direct communication",
    body: "You work directly with the team handling the execution, so feedback and revisions move fast."
  },
  {
    title: "Website-first agency support",
    body: "Web, branding, local visibility, and creative support stay aligned instead of being split across disconnected vendors."
  },
  {
    title: "Conversion-first structure",
    body: "Every asset is built to support inquiry, trust, and cleaner messaging across the customer journey."
  },
  {
    title: "Kansas City local context",
    body: "Messaging and service framing tuned for how local customers evaluate trust."
  }
];

export function WhyHometown() {
  return (
    <SectionShell>
      <section className="rounded-[2rem] border border-[#dfe4ef] bg-white px-7 py-8 shadow-[0_14px_38px_rgba(6,10,20,0.14)] md:px-10 md:py-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-3xl">
            <p className="section-eyebrow text-[#305cde]">Why Hometown</p>
            <h2 className="mt-4 text-[clamp(2rem,5vw,4.2rem)] font-semibold leading-[0.95] tracking-tight text-[#10172b]">
              A lean marketing agency built for local service businesses.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-[#33415f]">
              Clear process, clear communication, and creative work that makes your business look more established.
            </p>
          </div>
          <Button href="/contact#form" className="bg-[#305cde] text-white">Start Your Project</Button>
        </div>

        <div className="mt-9 grid gap-4 md:grid-cols-2">
          {pillars.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-[#5f82f5] bg-[#305cde] px-5 py-5 transition duration-300 hover:-translate-y-0.5 hover:bg-[#2a53cf]"
            >
              <h3 className="text-[1.5rem] font-semibold tracking-tight text-white">
                {item.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed !text-white">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </section>
    </SectionShell>
  );
}
