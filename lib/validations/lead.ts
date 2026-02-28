import { z } from "zod";

export const leadSchema = z.object({
  name: z.string().min(2).max(80),
  businessName: z.string().min(2).max(120),
  email: z.string().email(),
  phone: z.string().max(30).optional(),
  serviceNeeded: z.string().min(1).max(120),
  projectDetails: z
    .string()
    .min(3, "Please add a few words about the project.")
    .max(2000)
});

export type LeadInput = z.infer<typeof leadSchema>;
