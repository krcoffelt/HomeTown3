export type LogLevel = "info" | "warn" | "error";

export type LogEvent =
  | "lead_database_insert_failed"
  | "lead_email_notification_failed"
  | "lead_submission_failed"
  | "lead_validation_failed"
  | "lead_spam_guard_matched"
  | "lead_timing_guard_matched";

type LogValue = string | number | boolean | null | undefined;

export type LogMetadata = Record<string, LogValue>;

type LogPayload = {
  level: LogLevel;
  event: LogEvent;
  message: string;
  timestamp: string;
  requestId?: string;
  route?: string;
  metadata?: Record<string, string | number | boolean | null>;
  error?: {
    name?: string;
    message?: string;
    code?: string;
  };
};

const sensitiveKeyPattern = /(email|phone|message|body|token|secret|password|key|gclid|fullName|name)/i;

export function createRequestId() {
  if (typeof globalThis.crypto?.randomUUID === "function") {
    return globalThis.crypto.randomUUID();
  }

  return `req_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`;
}

export function sanitizeMetadata(metadata?: LogMetadata) {
  if (!metadata) {
    return undefined;
  }

  return Object.entries(metadata).reduce<Record<string, string | number | boolean | null>>((sanitized, [key, value]) => {
    if (value === undefined) {
      return sanitized;
    }

    sanitized[key] = sensitiveKeyPattern.test(key) && !key.startsWith("has") ? "[redacted]" : value;
    return sanitized;
  }, {});
}

export function sanitizeError(error: unknown) {
  if (!error) {
    return undefined;
  }

  if (error instanceof Error) {
    return {
      name: error.name,
      message: error.message
    };
  }

  if (typeof error === "object") {
    const record = error as Record<string, unknown>;
    return {
      name: typeof record.name === "string" ? record.name : undefined,
      message: typeof record.message === "string" ? record.message : "Unknown error",
      code: typeof record.code === "string" ? record.code : undefined
    };
  }

  return {
    message: String(error)
  };
}

export function logEvent(input: Omit<LogPayload, "timestamp" | "metadata" | "error"> & { metadata?: LogMetadata; error?: unknown }) {
  const payload: LogPayload = {
    level: input.level,
    event: input.event,
    message: input.message,
    timestamp: new Date().toISOString(),
    requestId: input.requestId,
    route: input.route,
    metadata: sanitizeMetadata(input.metadata),
    error: sanitizeError(input.error)
  };

  const serialized = JSON.stringify(payload);

  if (input.level === "error") {
    console.error(serialized);
    return;
  }

  if (input.level === "warn") {
    console.warn(serialized);
    return;
  }

  console.log(serialized);
}
