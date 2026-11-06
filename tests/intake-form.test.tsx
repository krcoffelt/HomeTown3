import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { cleanup, fireEvent, render, screen, waitFor } from "@testing-library/react";
import { IntakeForm } from "@/components/intake/intake-form";
import { createClient } from "@supabase/supabase-js";
vi.mock("@supabase/supabase-js", () => ({ createClient: vi.fn() }));
import { initialAnswers, intakeClients, permissionFields } from "@/lib/intake/config";
const client = intakeClients["acs-painting-kc"];
const key = "hometown-listing-intake:v1:acs-painting-kc";
const id = "d282aa7f-20ad-4030-9f57-ed6f01b453f9";
beforeEach(() => { localStorage.clear(); vi.stubGlobal("scrollTo", vi.fn()); });
afterEach(() => { cleanup(); vi.unstubAllGlobals(); });
function draft(step = 0) {
  return { version: 1, id, step, startedAt: Date.now() - 20000, savedAt: Date.now(), uploads: [], answers: { ...initialAnswers(client), ownerName: "Intake Test", ownerEmail: "test@example.com", mainPhone: "8165550100", signature: "Intake Test", signatureDate: "2026-10-29", ...Object.fromEntries(permissionFields.map(p => [p.id, true])) } };
}
describe("intake browser draft and response handling", () => {
  it("restores a draft’s answers and current section", async () => {
    localStorage.setItem(key, JSON.stringify(draft(4)));
    render(<IntakeForm client={client} slug="acs-painting-kc" />);
    expect(await screen.findByRole("textbox", { name: /Owner’s full name/ })).toHaveValue("Intake Test");
    expect(screen.getByRole("progressbar")).toHaveAttribute("aria-valuenow", "5");
    fireEvent.change(screen.getByRole("textbox", { name: /Owner’s full name/ }), { target: { value: "Updated Test" } });
    await waitFor(() => expect(JSON.parse(localStorage.getItem(key)!).answers.ownerName).toBe("Updated Test"));
  });
  it("recovers from malformed and expired drafts", async () => {
    localStorage.setItem(key, "broken json");
    const view = render(<IntakeForm client={client} slug="acs-painting-kc" />);
    await waitFor(() => expect(screen.getByRole("button", { name: "Continue" })).toBeEnabled());
    expect(screen.getByRole("heading", { name: "Business basics" })).toBeInTheDocument();
    view.unmount();
    localStorage.setItem(key, JSON.stringify({ ...draft(4), savedAt: 1 }));
    render(<IntakeForm client={client} slug="acs-painting-kc" />);
    expect(screen.getByRole("heading", { name: "Business basics" })).toBeInTheDocument();
  });
  it("keeps the same UUID and draft on failure, then clears it only after confirmed persistence", async () => {
    localStorage.setItem(key, JSON.stringify(draft(11)));
    const fetchMock = vi.fn().mockRejectedValueOnce(new Error("offline")).mockResolvedValueOnce({ ok: true, json: async () => ({ ok: true }) });
    vi.stubGlobal("fetch", fetchMock);
    render(<IntakeForm client={client} slug="acs-painting-kc" />);
    fireEvent.click(await screen.findByRole("button", { name: "Send my intake" }));
    expect(await screen.findByText(/We couldn’t confirm your submission/)).toBeInTheDocument();
    expect(localStorage.getItem(key)).not.toBeNull();
    fireEvent.click(screen.getByRole("button", { name: "Send my intake" }));
    expect(await screen.findByRole("heading", { name: /Thanks, you’re all set/ })).toBeInTheDocument();
    expect(localStorage.getItem(key)).toBeNull();
    expect(JSON.parse(fetchMock.mock.calls[0][1].body).id).toBe(id);
    expect(JSON.parse(fetchMock.mock.calls[1][1].body).id).toBe(id);
  });
  it("keeps selected files through async SDK loading and stores their private references", async () => {
    localStorage.setItem(key, JSON.stringify(draft(8)));
    vi.stubEnv("NEXT_PUBLIC_SUPABASE_URL", "https://example.supabase.co");
    vi.stubEnv("NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY", "anon-test-key");
    const upload = vi.fn().mockResolvedValue({ error: null });
    vi.mocked(createClient).mockReturnValue({ storage: { from: vi.fn().mockReturnValue({ upload }) } } as never);
    render(<IntakeForm client={client} slug="acs-painting-kc" />);
    const file = new File(["synthetic media"], "qa.png", { type: "image/png" });
    fireEvent.change(screen.getByLabelText("Optional private uploads"), { target: { files: [file] } });
    expect(await screen.findByText("qa.png")).toBeInTheDocument();
    expect(upload).toHaveBeenCalledWith(expect.stringContaining(`acs-painting-kc/${id}/`), file, expect.objectContaining({ upsert: false }));
    expect(JSON.parse(localStorage.getItem(key)!).uploads[0]).toMatchObject({ name: "qa.png", type: "image/png" });
    vi.unstubAllEnvs();
  });
  it("opens a correction input when a prefilled value is unchecked", async () => {
    render(<IntakeForm client={client} slug="acs-painting-kc" />);
    const confirm = await screen.findByRole("checkbox", { name: "Business listing name: correct as is" });
    fireEvent.click(confirm);
    expect(screen.getByRole("textbox", { name: "Business listing name" })).toHaveValue("");
    fireEvent.change(screen.getByRole("textbox", { name: "Business listing name" }), { target: { value: "Corrected business" } });
    expect(JSON.parse(localStorage.getItem(key)!).answers.listingName).toBe("Corrected business");
  });
});
