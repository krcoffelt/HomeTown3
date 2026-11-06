import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";
import { getEnv } from "@/lib/env";
import { submissionSchema } from "@/lib/intake/validation";
import { getIntakeClient } from "@/lib/intake/config";

export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  if (origin) {
    try {
      const source = new URL(origin);
      // Next.js can use an internal hostname in request.url behind a proxy.
      const targetHosts = [new URL(request.url).host, request.headers.get("host")];
      if (!["http:", "https:"].includes(source.protocol) || !targetHosts.includes(source.host)) throw new Error("foreign origin");
    } catch { return NextResponse.json({ message: "Please submit from the intake page." }, { status: 403 }); }
  }
  if (Number(request.headers.get("content-length") ?? 0) > 150000) return NextResponse.json({ message: "Submission is too large." }, { status: 413 });
  let input: unknown;
  try {
    const body = await request.text();
    if (body.length > 150000) return NextResponse.json({ message: "Submission is too large." }, { status: 413 });
    input = JSON.parse(body);
  } catch { return NextResponse.json({ message: "Invalid submission." }, { status: 400 }); }
  const parsed = submissionSchema.safeParse(input);
  if (!parsed.success) return NextResponse.json({ message: parsed.error.issues[0]?.message ?? "Please check your answers." }, { status: 400 });
  const { id, clientSlug, answers, uploads, startedAt, websiteTrap } = parsed.data;
  if (websiteTrap || Date.now() - startedAt < 1000 || startedAt > Date.now()) return NextResponse.json({ message: "Please try submitting again in a moment." }, { status: 400 });
  try {
    // Use the anon key so the insert is subject to RLS. Never request a row representation.
    const supabase = createClient(getEnv("NEXT_PUBLIC_SUPABASE_URL"), getEnv("NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY"), { auth: { persistSession: false, autoRefreshToken: false } });
    const { error } = await supabase.from("listing_intakes").insert({
      id, client_slug: clientSlug, owner_name: String(answers.ownerName).trim(), owner_email: String(answers.ownerEmail).trim(),
      data: { version: 1, clientName: getIntakeClient(clientSlug)!.name, answers, uploads, prefill: getIntakeClient(clientSlug)!.prefill, privacy: { homeAddressPublic: false } }
    });
    // A stable UUID makes retries safe after a network timeout; no update/upsert permission needed.
    if (error && !(error.code === "23505" && error.message.includes("listing_intakes_pkey"))) {
      console.error(JSON.stringify({ event: "listing_intake_insert_failed", code: error.code }));
      return NextResponse.json({ message: "We couldn’t save your intake. Your draft is still here. Please retry or contact Kyle." }, { status: 503 });
    }
    return NextResponse.json({ ok: true });
  } catch {
    console.error(JSON.stringify({ event: "listing_intake_unavailable" }));
    return NextResponse.json({ message: "Intake submission is temporarily unavailable. Your draft is still here." }, { status: 503 });
  }
}
