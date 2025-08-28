export interface ServiceCard {
  id: number;
  number: string;
  title: string;
  description: string;
  categories: string[];
  categoryCount: string;
}

export interface ServicesSectionProps {
  className?: string;
}
