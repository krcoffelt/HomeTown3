import { z } from "zod";

export const leadSchema = z.object({
  name: z.string().min(2).max(80),
  businessName: z.string().min(2).max(120),
  email: z.string().email(),
  phone: z.string().max(30).optional(),
  serviceNeeded: z.enum([
    "Website Design",
    "Google Business Profile Setup",
    "Logo Design + Mini Brand Kit",
    "Social Media Management"
  ]),
  projectDetails: z.string().min(20).max(2000)
});

export type LeadInput = z.infer<typeof leadSchema>;
