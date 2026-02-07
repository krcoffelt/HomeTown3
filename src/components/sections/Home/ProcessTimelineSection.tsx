const processSteps = [
  {
    number: '01',
    title: 'Audit & plan',
    description: '48-hour review of web, Google Business, social, and ads with a clear plan + budget.',
  },
  {
    number: '02',
    title: 'Build & launch',
    description: 'Pages, creatives, automations. Approvals in one board. Launch within 7-14 days.',
  },
  {
    number: '03',
    title: 'Run & report',
    description: 'Weekly optimizations, monthly report, clear rules for when we scale or pause.',
  },
];

export default function ProcessTimelineSection() {
  return (
    <section className="section" id="process">
      <div className="section-heading centered reveal">
        <p className="eyebrow">Process</p>
        <h2 className="mask-title"><span className="mask"><span className="mask-text">Documented, calm, and timeboxed.</span></span></h2>
      </div>
      <div className="process-grid reveal">
        {processSteps.map((step) => (
          <div key={step.number} className="process-step">
            <span className="step-num">{step.number}</span>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

