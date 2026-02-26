const checklist = [
  'Clear timeline and deliverables before kickoff',
  'One team handling website, social media, and brand design',
  'Built to drive leads, not just look good',
];

export default function ConversionCtaSection() {
  return (
    <section className="section agency-final-cta reveal" id="start">
      <div className="agency-final-cta-card">
        <p className="eyebrow">Ready To Launch?</p>
        <h2>Start your $800 website and go live fast.</h2>
        <p>
          Tell us about your business in a few minutes and we&apos;ll map the fastest path to launch.
        </p>
        <ul aria-label="Why businesses choose Hometown">
          {checklist.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div className="agency-final-actions">
          <a className="button primary" href="/contact">Start My Website</a>
          <a className="button ghost" href="mailto:hello@hometownkc.com">Email The Team</a>
        </div>
      </div>
    </section>
  );
}
