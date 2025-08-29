export interface TeamMember {
  name: string;
  role: string;
  contactInfo: {
    calendly: string;
  };
}

export interface HeroSectionProps {
  onCTAClick: () => void;
  teamMember: TeamMember;
}

export interface ServiceTagProps {
  service: string;
  index: number;
  isVisible: boolean;
  className?: string;
}

