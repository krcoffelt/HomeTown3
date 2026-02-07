import Link from 'next/link';

type NavItem = {
  title: string;
  href: string;
};

type NextItemNavProps = {
  previous?: NavItem;
  next?: NavItem;
};

export default function NextItemNav({ previous, next }: NextItemNavProps) {
  if (!previous && !next) {
    return null;
  }

  return (
    <section className="section detail-next-wrap">
      <nav className="detail-next-nav" aria-label="Adjacent pages">
        {previous ? (
          <Link className="detail-next-link" href={previous.href}>
            <span className="detail-next-label">Previous</span>
            <span>{previous.title}</span>
          </Link>
        ) : (
          <span className="detail-next-empty" />
        )}
        {next ? (
          <Link className="detail-next-link align-right" href={next.href}>
            <span className="detail-next-label">Next</span>
            <span>{next.title}</span>
          </Link>
        ) : (
          <span className="detail-next-empty" />
        )}
      </nav>
    </section>
  );
}
