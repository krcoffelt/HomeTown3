import { z } from "zod";
import { getIntakeClient, getIntakeSections, permissionFields, sections, type Answers } from "./config";

export const uploadSchema = z.object({ path: z.string().max(300), name: z.string().max(255), type: z.enum(["image/jpeg", "image/png", "image/webp", "video/mp4", "video/quicktime"]), size: z.number().int().positive().max(10 * 1024 * 1024) });
const answerSchema = z.union([z.string().max(10000), z.boolean(), z.array(z.string().max(500)).max(30)]);
export const submissionSchema = z.object({
  id: z.uuid(), clientSlug: z.string().max(100).refine(slug => !!getIntakeClient(slug), "Unknown client."),
  answers: z.record(z.string().max(100), answerSchema), uploads: z.array(uploadSchema).max(25),
  startedAt: z.number().finite(), websiteTrap: z.string().max(500).default("")
}).superRefine((value, ctx) => {
  const allowed = new Set([...sections.flatMap(s => s.fields.flatMap(f => [f.id, `${f.id}__confirmed`])), ...permissionFields.map(p => p.id)]);
  if (Object.keys(value.answers).some(key => !allowed.has(key))) ctx.addIssue({ code: "custom", message: "Unexpected form field." });
  for (const message of validateAnswers(value.answers, undefined, value.clientSlug)) ctx.addIssue({ code: "custom", message });
  for (const upload of value.uploads) {
    if (!new RegExp(`^${value.clientSlug}/${value.id}/[0-9a-f-]{36}\\.(jpg|png|webp|mp4|mov)$`).test(upload.path)) ctx.addIssue({ code: "custom", message: "Invalid media reference." });
  }
});
export function validateAnswers(answers: Answers, sectionIndex?: number, clientSlug?: string): string[] {
  const errors: string[] = [];
  const client = clientSlug ? getIntakeClient(clientSlug) : undefined;
  const clientSections = client ? getIntakeSections(client) : sections;
  const fields = sectionIndex === undefined ? clientSections.flatMap(s => s.fields) : clientSections[sectionIndex].fields;
  for (const field of fields) {
    const answer = answers[field.id];
    const text = typeof answer === "string" ? answer.trim() : "";
    if (field.required && !text) errors.push(`${field.label} is required.`);
    if (field.type === "checklist" && answer !== undefined && (!Array.isArray(answer) || answer.some(item => !field.options?.includes(item)))) errors.push(`Please check ${field.label}.`);
    if (field.type !== "checklist" && answer !== undefined && typeof answer !== "string") errors.push(`Please check ${field.label}.`);
    if (text && field.type === "email" && !z.email().safeParse(text).success) errors.push(`Please enter a valid ${field.label.toLowerCase()}.`);
    if (text && field.type === "url" && !/^https?:\/\/[^\s]+$/i.test(text)) errors.push(`${field.label} must start with https:// or http://.`);
    if (text && field.type === "select" && !field.options?.includes(text)) errors.push(`Please check ${field.label}.`);
    if (text && field.maxLength && text.length > field.maxLength) errors.push(`${field.label} is too long.`);
    if (text && field.type === "number" && (!/^\d+$/.test(text) || Number(text) > 100000000)) errors.push(`Please check ${field.label}.`);
    if (text && field.type === "time" && !/^([01]\d|2[0-3]):[0-5]\d$/.test(text)) errors.push(`Please check ${field.label}.`);
  }
  const phone = String(answers.mainPhone ?? "");
  if ((sectionIndex === undefined || sectionIndex === 1) && phone && (!/^[+()\d\s.-]{7,30}$/.test(phone) || !/^\d{7,15}$/.test(phone.replace(/\D/g, "")))) errors.push("Confirm the main phone or enter a corrected phone number.");
  if (sectionIndex === undefined || sectionIndex === sections.length - 1) {
    if (permissionFields.some(p => answers[p.id] !== true)) errors.push("Please accept all five permissions before submitting.");
    const date = String(answers.signatureDate ?? "");
    if (date && (!/^\d{4}-\d{2}-\d{2}$/.test(date) || Number.isNaN(Date.parse(date)) || new Date(date).toISOString().slice(0, 10) !== date)) errors.push("Please enter a valid signature date.");
    if (answers.reviewReplies === "No") errors.push("Your review reply answer conflicts with the required permission. Update it or contact Kyle before submitting.");
  }
  return errors;
}
