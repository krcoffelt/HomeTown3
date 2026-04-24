import { z } from "zod";

const attributionSchema = {
  landingPage: z.string().max(2048).optional(),
  referrerUrl: z.string().max(2048).optional(),
  utmSource: z.string().max(255).optional(),
  utmMedium: z.string().max(255).optional(),
  utmCampaign: z.string().max(255).optional(),
  utmTerm: z.string().max(255).optional(),
  utmContent: z.string().max(255).optional(),
  gclid: z.string().max(255).optional()
};

export const leadSchema = z.object({
  name: z.string().min(2).max(80),
  businessName: z.string().min(2).max(120),
  email: z.string().email(),
  phone: z.string().min(7, "Please add a phone number.").max(30),
  serviceNeeded: z.string().min(1).max(120),
  ...attributionSchema,
  projectDetails: z
    .string()
    .min(3, "Please add a few words about the project.")
    .max(2000)
});

export const offerLeadSchema = z.object({
  name: z.string().min(2).max(80),
  businessName: z.string().min(2).max(120),
  email: z.string().email(),
  phone: z.string().max(30).optional(),
  ...attributionSchema,
  projectDetails: z.string().max(2000).optional()
});

export type LeadInput = z.infer<typeof leadSchema>;
export type OfferLeadInput = z.infer<typeof offerLeadSchema>;
