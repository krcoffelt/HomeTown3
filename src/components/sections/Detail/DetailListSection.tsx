type DetailListSectionProps = {
  title: string;
  items?: string[];
};

export default function DetailListSection({ title, items = [] }: DetailListSectionProps) {
  if (!items.length) {
    return null;
  }

  return (
    <article className="detail-panel">
      <h2>{title}</h2>
      <ul className="detail-list">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  );
}
