const includedItems = [
  'Custom one-page or five-section website',
  'Mobile optimization + contact form setup',
  'On-brand copywriting based on your business',
  'Basic local SEO setup and analytics install',
  'Two rounds of revisions before launch',
];

const addOns = [
  { title: 'Extra pages', detail: 'Add service or location pages as needed.' },
  { title: 'Monthly social', detail: 'Turn the new website into a full visibility engine.' },
  { title: 'Logo refresh', detail: 'Update visual identity before traffic ramps up.' },
];

export default function WebsitePackageSection() {
  return (
    <section className="section agency-package reveal" id="website-package">
      <div className="agency-package-intro">
        <p className="eyebrow">$800 Website Offer</p>
        <h2 className="mask-title">
          <span className="mask">
            <span className="mask-text">A clear package, a clear price, and a fast launch.</span>
          </span>
        </h2>
        <p className="section-sub">
          If you need a polished site quickly, this is the most direct path to launch.
        </p>
      </div>

      <div className="agency-package-grid">
        <article className="agency-package-card agency-package-card-featured">
          <p className="agency-package-price">$800</p>
          <p className="agency-package-copy">Everything you need to launch with confidence.</p>
          <ul aria-label="Included in the website package">
            {includedItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="agency-package-actions">
            <a className="button primary" href="/contact">Claim This Package</a>
            <a className="button outline" href="#start">Talk Before You Decide</a>
          </div>
        </article>

        <article className="agency-package-card">
          <h3>Add-ons when you are ready</h3>
          <ul className="agency-addon-list" aria-label="Available add-ons">
            {addOns.map((addOn) => (
              <li key={addOn.title}>
                <p>{addOn.title}</p>
                <span>{addOn.detail}</span>
              </li>
            ))}
          </ul>
          <p className="agency-package-note">
            Start with the website now. Layer in social media or logo work as your budget expands.
          </p>
        </article>
      </div>
    </section>
  );
}
