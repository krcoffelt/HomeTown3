export interface NavigationItem {
  label: string;
  href: string;
  count?: string; // For "Projects (27)"
}

export interface NavigationProps {
  items: NavigationItem[];
  currentPage?: string;
  isMobile?: boolean;
}

export interface NavigationState {
  currentPage: string;
  isMobileMenuOpen: boolean;
  isScrolled: boolean; // For potential scroll effects
}

export interface ResponsiveState {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
}

export interface HeaderProps {
  currentPage?: string;
}

export interface BaseLayoutProps {
  children: React.ReactNode;
  currentPage?: string;
}
