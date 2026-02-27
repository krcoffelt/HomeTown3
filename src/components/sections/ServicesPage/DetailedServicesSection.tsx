import { serviceCategories } from '@/data/servicesPageContent';

export default function DetailedServicesSection() {
  return (
    <section className="services-page-section" aria-labelledby="services-categories-heading">
      <div className="section-intro">
        <p className="eyebrow">Core Categories</p>
        <h2 id="services-categories-heading">Choose what you need now, add the rest when ready.</h2>
      </div>

      <div className="services-category-grid">
        {serviceCategories.map((category) => (
          <article key={category.title} className="services-category-card">
            {category.mediaTag ? <p className="services-category-tag">{category.mediaTag}</p> : null}
            <h3>{category.title}</h3>
            <p>{category.summary}</p>
            <ul aria-label={`${category.title} deliverables`}>
              {category.deliverables.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            {category.mediaCaption ? <p className="services-category-note">{category.mediaCaption}</p> : null}
            <a className="text-link" href="/contact">Start with {category.title}</a>
          </article>
        ))}
      </div>
    </section>
  );
}
