export interface Testimonial {
  id: string;
  clientName: string;
  clientCompany: string;
  clientRole?: string;
  clientImage: string;
  rating: number;
  testimonialText: string;
  projectType?: string;
  date?: string;
}
