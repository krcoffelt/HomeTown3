import { afterEach, describe, expect, it, vi } from "vitest";
import { logEvent, sanitizeError, sanitizeMetadata } from "@/lib/logging/logger";

describe("structured logger", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("redacts sensitive metadata and drops undefined fields", () => {
    expect(
      sanitizeMetadata({
        email: "owner@example.com",
        phone: "555-555-5555",
        serviceNeeded: "Website Design",
        hasPhone: true,
        empty: undefined
      })
    ).toEqual({
      email: "[redacted]",
      phone: "[redacted]",
      serviceNeeded: "Website Design",
      hasPhone: true
    });
  });

  it("serializes errors without stack traces", () => {
    expect(sanitizeError(new Error("Boom"))).toEqual({
      name: "Error",
      message: "Boom"
    });
  });

  it("writes valid JSON log payloads", () => {
    const spy = vi.spyOn(console, "error").mockImplementation(() => undefined);

    logEvent({
      level: "error",
      event: "lead_database_insert_failed",
      message: "Lead database insert failed.",
      requestId: "req_test",
      route: "/contact",
      metadata: {
        serviceNeeded: "Website Design",
        email: "owner@example.com"
      },
      error: { code: "PGRST204", message: "Missing column" }
    });

    expect(spy).toHaveBeenCalledTimes(1);
    const payload = JSON.parse(String(spy.mock.calls[0]?.[0])) as {
      level: string;
      event: string;
      requestId: string;
      metadata: Record<string, unknown>;
      error: Record<string, unknown>;
    };

    expect(payload.level).toBe("error");
    expect(payload.event).toBe("lead_database_insert_failed");
    expect(payload.requestId).toBe("req_test");
    expect(payload.metadata.email).toBe("[redacted]");
    expect(payload.metadata.serviceNeeded).toBe("Website Design");
    expect(payload.error.code).toBe("PGRST204");
  });
});
