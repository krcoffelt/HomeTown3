import Image from 'next/image';

export default function ServicesTestimonialsSection() {
  return (
    <section className="services-page-section" aria-label="Proof highlights">
      <div className="services-proof-showcase">
        <div className="services-proof-image">
          <Image
            src="/images/hero-bg.jpg"
            alt="Team planning creative and website strategy together"
            width={1200}
            height={800}
          />
        </div>
        <div className="services-proof-strip">
          <article>
            <p>"We went from no website to qualified calls in the first week after launch."</p>
            <span>Home services owner, Kansas City</span>
          </article>
          <article>
            <p>"The process was direct, and every section clearly pushed visitors to our form."</p>
            <span>Local clinic operator, Johnson County</span>
          </article>
          <article>
            <p>"Starting with the website first made every social campaign easier to convert."</p>
            <span>Owner-led retail brand, Kansas City</span>
          </article>
        </div>
      </div>
    </section>
  );
}
