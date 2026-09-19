import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { submitLead, type SubmitLeadState } from "@/app/(site)/contact/actions";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { sendLeadNotification } from "@/lib/email/resend";

vi.mock("@/lib/supabase/server", () => ({ createSupabaseServerClient: vi.fn() }));
vi.mock("@/lib/email/resend", () => ({ sendLeadNotification: vi.fn() }));

const initialState: SubmitLeadState = { ok: false, message: "", trackLead: false };
const createSupabase = vi.mocked(createSupabaseServerClient);
const sendNotification = vi.mocked(sendLeadNotification);

function validFormData() {
  const formData = new FormData();
  formData.set("name", "Council Test");
  formData.set("businessName", "Hometown Council Test");
  formData.set("email", "kyle@hometownkc.agency");
  formData.set("phone", "8165550100");
  formData.set("serviceNeeded", "Free Marketing Audit");
  formData.set("projectDetails", "COUNCIL-TEST-20260918-1200");
  formData.set("startedAt", String(Date.now() - 2000));
  return formData;
}

describe("lead form tracking state", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    const insert = vi.fn().mockResolvedValue({ error: null });
    createSupabase.mockReturnValue({
      from: vi.fn().mockReturnValue({ insert })
    } as never);
    sendNotification.mockResolvedValue(undefined);
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("shows a friendly success without tracking honeypot submissions as leads", async () => {
    const formData = new FormData();
    formData.set("_hpt", "spam");

    const result = await submitLead(initialState, formData);

    expect(result).toMatchObject({ ok: true, trackLead: false });
    expect(createSupabase).not.toHaveBeenCalled();
  });

  it("does not track validation failures as leads", async () => {
    const result = await submitLead(initialState, new FormData());

    expect(result).toMatchObject({ ok: false, trackLead: false });
    expect(createSupabase).not.toHaveBeenCalled();
  });

  it("returns a conversion id only after Supabase persistence succeeds", async () => {
    const result = await submitLead(initialState, validFormData());

    expect(result.ok).toBe(true);
    expect(result.trackLead).toBe(true);
    expect(result.conversionId).toEqual(expect.any(String));
    expect(sendNotification).toHaveBeenCalledTimes(1);
  });

  it("does not mark a lead successful when Supabase persistence fails", async () => {
    createSupabase.mockReturnValue({
      from: vi.fn().mockReturnValue({
        insert: vi.fn().mockResolvedValue({ error: { code: "PGRST_TEST", message: "insert failed" } })
      })
    } as never);

    const result = await submitLead(initialState, validFormData());

    expect(result).toMatchObject({ ok: false, trackLead: false });
    expect(sendNotification).not.toHaveBeenCalled();
  });

  it("keeps the conversion eligible when notification delivery fails after persistence", async () => {
    sendNotification.mockRejectedValueOnce(new Error("notification unavailable"));

    const result = await submitLead(initialState, validFormData());

    expect(result.ok).toBe(true);
    expect(result.trackLead).toBe(true);
    expect(result.conversionId).toEqual(expect.any(String));
  });
});
