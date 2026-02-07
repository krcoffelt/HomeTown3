export default function ContactCtaSection() {
  return (
    <section className="section" id="contact">
      <div className="cta reveal">
        <div>
          <p className="eyebrow">Start here</p>
          <h2 className="mask-title"><span className="mask"><span className="mask-text">Tell us about your business. We'll send a clear mini-plan in 48 hours.</span></span></h2>
          <p className="section-sub">Simple, clear, and focused on what moves the needle.</p>
        </div>
        <form className="cta-form" onSubmit={(event) => event.preventDefault()}>
          <label htmlFor="name">Your name</label>
          <input id="name" name="name" type="text" placeholder="Taylor at Westside Floral" required />
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" placeholder="you@business.com" required />
          <label htmlFor="business">Business name</label>
          <input id="business" name="business" type="text" placeholder="Westside Floral" required />
          <label htmlFor="need">What do you need most?</label>
          <textarea id="need" name="need" rows={3} placeholder="New site, keep Google updated, and disciplined ads." required />
          <button className="button primary" type="submit">Send my KC mini-plan</button>
        </form>
      </div>
    </section>
  );
}

