type DetailMetaItem = {
  label: string;
  value?: string | null;
};

type DetailMetaProps = {
  items: DetailMetaItem[];
};

export default function DetailMeta({ items }: DetailMetaProps) {
  const visibleItems = items.filter((item) => item.value);

  if (!visibleItems.length) {
    return null;
  }

  return (
    <dl className="detail-meta" aria-label="Project metadata">
      {visibleItems.map((item) => (
        <div key={item.label} className="detail-meta-item">
          <dt>{item.label}</dt>
          <dd>{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}
