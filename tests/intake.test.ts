import { beforeEach, describe, expect, it, vi } from "vitest";
import { readFileSync } from "node:fs";
import { POST } from "@/app/api/intake/route";
import { initialAnswers, intakeClients, permissionFields } from "@/lib/intake/config";
import { submissionSchema, validateAnswers } from "@/lib/intake/validation";
import nextConfig from "@/next.config";
import { getPagesSitemapXml, getServicesSitemapXml, getLocationsSitemapXml, getContentSitemapXml, getImagesSitemapXml } from "@/lib/seo/sitemaps";
import { createClient } from "@supabase/supabase-js";
vi.mock("@supabase/supabase-js", () => ({ createClient: vi.fn() }));
const insert = vi.fn();
const id = "d282aa7f-20ad-4030-9f57-ed6f01b453f9";
function validSubmission() {
  return {
    id, clientSlug: "acs-painting-kc", startedAt: Date.now() - 5000, websiteTrap: "", uploads: [],
    answers: { ...initialAnswers(intakeClients["acs-painting-kc"]), ownerName: "Intake Test", ownerEmail: "intake-test@example.com", mainPhone: "8165550100", signature: "Intake Test", signatureDate: "2026-10-29", ...Object.fromEntries(permissionFields.map(p => [p.id, true])) }
  };
}
function request(body: unknown) { return new Request("https://hometownkc.agency/api/intake", { method: "POST", headers: { "Content-Type": "application/json", Origin: "https://hometownkc.agency" }, body: JSON.stringify(body) }); }
beforeEach(() => {
  vi.clearAllMocks();
  process.env.NEXT_PUBLIC_SUPABASE_URL = "https://example.supabase.co";
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY = "anon-test-key";
  process.env.SUPABASE_SERVICE_ROLE_KEY = "must-not-use";
  insert.mockResolvedValue({ error: null });
  vi.mocked(createClient).mockReturnValue({ from: vi.fn().mockReturnValue({ insert }) } as never);
});
describe("listing intake validation and persistence", () => {
  it("requires owner, an explicit phone answer, permissions, signature, and date", () => {
    const answers = initialAnswers(intakeClients["acs-painting-kc"]);
    expect(validateAnswers(answers).join(" ")).toMatch(/Owner’s full name/);
    expect(validateAnswers(answers).join(" ")).toMatch(/Main business phone/);
    expect(validateAnswers(answers).join(" ")).toMatch(/permissions/);
    expect(validateAnswers(answers).join(" ")).toMatch(/signature/i);
  });
  it("flags uncertain ACS details and preserves the supplied prefill", () => {
    const initial = initialAnswers(intakeClients["acs-painting-kc"]);
    expect(initial.legalName__confirmed).toBe(false);
    expect(initial.mainPhone).toBe("");
    expect(initial.publicEmail).toBe("services@acspaintingkc.com");
    expect(initial.SundayStatus).toBe("Closed");
  });
  it("accepts valid answers, and rejects unknown clients including inherited object keys", () => {
    expect(submissionSchema.safeParse(validSubmission()).success).toBe(true);
    for (const clientSlug of ["missing", "constructor", "__proto__"]) expect(submissionSchema.safeParse({ ...validSubmission(), clientSlug }).success).toBe(false);
  });
  it("rejects invalid email, protocol URLs, invalid dates, review conflicts, and invalid options", () => {
    for (const patch of [{ mainPhone: "((((((((" }, { ownerEmail: "bad" }, { website: "javascript:alert(1)" }, { signatureDate: "2026-02-30" }, { reviewReplies: "No" }, { services: ["unknown service"] }]) {
      const input = validSubmission(); Object.assign(input.answers, patch);
      expect(submissionSchema.safeParse(input).success).toBe(false);
    }
  });
  it("saves a single complete row with the anon key without reading a representation", async () => {
    const input = validSubmission();
    const response = await POST(request(input));
    expect(response.status).toBe(200);
    expect(createClient).toHaveBeenCalledWith("https://example.supabase.co", "anon-test-key", expect.any(Object));
    expect(insert).toHaveBeenCalledTimes(1);
    expect(insert).toHaveBeenCalledWith(expect.objectContaining({ id, client_slug: "acs-painting-kc", owner_name: "Intake Test", owner_email: "intake-test@example.com", data: expect.objectContaining({ answers: input.answers, privacy: { homeAddressPublic: false } }) }));
  });
  it("accepts the original host when Next.js uses an internal request hostname", async () => {
    const proxied = new Request("http://localhost:3000/api/intake", { method: "POST", headers: { Origin: "http://127.0.0.1:3000", Host: "127.0.0.1:3000", "Content-Type": "application/json" }, body: JSON.stringify(validSubmission()) });
    expect((await POST(proxied)).status).toBe(200);
  });
  it("rejects validation and cross-origin submissions before touching Supabase", async () => {
    expect((await POST(request({}))).status).toBe(400);
    const foreign = new Request("https://hometownkc.agency/api/intake", { method: "POST", headers: { Origin: "https://foreign.example" }, body: JSON.stringify(validSubmission()) });
    expect((await POST(foreign)).status).toBe(403);
    expect(insert).not.toHaveBeenCalled();
  });
  it("rejects spam and immediate submissions without a fake thank-you", async () => {
    for (const patch of [{ websiteTrap: "bot" }, { startedAt: Date.now() }]) expect((await POST(request({ ...validSubmission(), ...patch }))).status).toBe(400);
    expect(insert).not.toHaveBeenCalled();
  });
  it("supports safe retry after an uncertain response but surfaces actual database failures", async () => {
    insert.mockResolvedValueOnce({ error: { code: "23505", message: 'duplicate key value violates unique constraint "listing_intakes_pkey"' } });
    expect((await POST(request(validSubmission()))).status).toBe(200);
    insert.mockResolvedValueOnce({ error: { code: "42501", message: "permission denied" } });
    expect((await POST(request(validSubmission()))).status).toBe(503);
  });
  it("rejects oversized payloads and media paths belonging to another intake", async () => {
    const oversized = request({ extra: "x".repeat(151000) });
    expect((await POST(oversized)).status).toBe(413);
    const input = { ...validSubmission(), uploads: [{ path: "another-client/private.jpg", name: "job.jpg", size: 100, type: "image/jpeg" }] };
    expect(submissionSchema.safeParse(input).success).toBe(false);
  });
  it("marks the intake noindex and excludes it from every sitemap", async () => {
    const headers = await nextConfig.headers!();
    expect(headers.find(rule => rule.source === "/intake/:path*")?.headers).toContainEqual({ key: "X-Robots-Tag", value: "noindex, nofollow, noimageindex" });
    for (const xml of [getPagesSitemapXml(), getServicesSitemapXml(), getLocationsSitemapXml(), getContentSitemapXml(), getImagesSitemapXml()]) expect(xml).not.toContain("/intake/");
  });
  it("defines write-only table grants and a private media bucket", () => {
    const sql = readFileSync("supabase/migrations/0004_listing_intakes.sql", "utf8");
    expect(sql).toMatch(/enable row level security/);
    expect(sql).toMatch(/revoke all on public.listing_intakes from public, anon, authenticated/);
    expect(sql).toMatch(/grant insert \(id, client_slug, owner_name, owner_email, data\).*to anon/);
    expect(sql).not.toMatch(/for (select|update|delete) to anon/);
    expect(sql).toMatch(/'listing-intake-media', 'listing-intake-media', false/);
  });
});
