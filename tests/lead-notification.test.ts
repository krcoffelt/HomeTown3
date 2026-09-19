import { beforeEach, describe, expect, it, vi } from "vitest";
import { Resend } from "resend";
import { sendLeadNotification } from "@/lib/email/resend";

const send = vi.fn();

vi.mock("resend", () => ({
  Resend: vi.fn().mockImplementation(function MockResend() {
    return { emails: { send } };
  })
}));

vi.mock("@/lib/env", () => ({
  getEnv: (key: string) =>
    ({
      RESEND_API_KEY: "test-key",
      LEAD_FROM_EMAIL: "leads@hometownkc.agency",
      LEAD_NOTIFY_EMAIL: "kyle@hometownkc.agency"
    })[key]
}));

const lead = {
  name: "Council Test",
  businessName: "Hometown Council Test",
  email: "council-test@example.com",
  phone: "8165550100",
  serviceNeeded: "Free Marketing Audit",
  projectDetails: "COUNCIL-TEST-20260918-1200"
};

describe("lead notification provider result", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("resolves after the provider accepts the notification", async () => {
    send.mockResolvedValue({ data: { id: "message-id" }, error: null });

    await expect(sendLeadNotification(lead)).resolves.toBeUndefined();
    expect(Resend).toHaveBeenCalledWith("test-key");
    expect(send).toHaveBeenCalledWith(expect.objectContaining({
      to: ["kyle@hometownkc.agency"],
      replyTo: "council-test@example.com"
    }));
  });

  it("surfaces a returned provider error to the stored-lead warning path", async () => {
    send.mockResolvedValue({ data: null, error: { name: "validation_error", message: "Rejected" } });

    await expect(sendLeadNotification(lead)).rejects.toThrow("Lead notification provider rejected the email.");
  });
});
