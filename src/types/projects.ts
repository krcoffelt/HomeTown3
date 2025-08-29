// Project-related type definitions

export interface Project {
  id: string;
  name: string;
  categories: string[];
  year: string;
  description?: string;
  image?: string;
  url: string;
  featured?: boolean;
}

export interface FilterState {
  search: string;
  selectedCategory: string;
}

export interface ProjectFilters {
  search: string;
  selectedCategory: string;
  selectedYears?: string[];
  sortBy?: 'name' | 'year' | 'category';
  sortOrder?: 'asc' | 'desc';
}

// Available categories from the original Fabrica site
export const PROJECT_CATEGORIES = ['All', 'Branding', 'Development', 'SEO', 'Web design'] as const;

export type ProjectCategory = typeof PROJECT_CATEGORIES[number];

// Sample projects data matching the original Fabrica site
export const SAMPLE_PROJECTS: Project[] = [
  {
    id: 'boltshift',
    name: 'Boltshift.',
    categories: ['Branding', 'Web design'],
    year: '2025',
    url: '/projects/boltshift'
  },
  {
    id: 'ephemeral',
    name: 'Ephemeral.',
    categories: ['Development', 'SEO'],
    year: '2025',
    url: '/projects/ephemeral'
  },
  {
    id: 'powersurge',
    name: 'Powersurge.',
    categories: ['Branding', 'SEO'],
    year: '2024',
    url: '/projects/powersurge'
  },
  {
    id: 'mastermail',
    name: 'Mastermail.',
    categories: ['SEO'],
    year: '2024',
    url: '/projects/mastermail'
  },
  {
    id: 'warpspeed',
    name: 'Warpspeed.',
    categories: ['Web design', 'Development'],
    year: '2023',
    url: '/projects/warpspeed'
  },
  {
    id: 'cloudwatch',
    name: 'CloudWatch.',
    categories: ['Development', 'Web design', 'Branding'],
    year: '2020',
    url: '/projects/cloudwatch'
  }
];
