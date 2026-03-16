import { z } from "zod";

export const leadSchema = z.object({
  name: z.string().min(2).max(80),
  businessName: z.string().min(2).max(120),
  email: z.string().email(),
  phone: z.string().max(30).optional(),
  serviceNeeded: z.string().min(1).max(120),
  landingPage: z.string().max(2048).optional(),
  referrerUrl: z.string().max(2048).optional(),
  utmSource: z.string().max(255).optional(),
  utmMedium: z.string().max(255).optional(),
  utmCampaign: z.string().max(255).optional(),
  utmTerm: z.string().max(255).optional(),
  utmContent: z.string().max(255).optional(),
  gclid: z.string().max(255).optional(),
  projectDetails: z
    .string()
    .min(3, "Please add a few words about the project.")
    .max(2000)
});

export type LeadInput = z.infer<typeof leadSchema>;
