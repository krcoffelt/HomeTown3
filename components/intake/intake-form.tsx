"use client";

import Link from "next/link";
import { useEffect, useRef, useState, useMemo, type FormEvent } from "react";
import { Wordmark } from "@/components/layout/wordmark";
import { Button } from "@/components/ui/button";
import { days, platforms, getIntakeSections, initialAnswers, permissionFields, type Answers, type ClientConfig, type IntakeField } from "@/lib/intake/config";
import { uploadSchema, validateAnswers } from "@/lib/intake/validation";
import type { z } from "zod";
import styles from "./intake-form.module.css";

type Upload = z.infer<typeof uploadSchema>;
type Draft = { version: 1; id: string; answers: Answers; step: number; uploads: Upload[]; startedAt: number; savedAt: number };
const control = "mt-2 block min-h-12 w-full min-w-0 rounded-xl border border-input bg-white px-4 py-3 text-base text-ink focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/25";
const checkbox = "h-5 w-5 shrink-0 accent-accent";
const draftLifetime = 30 * 24 * 60 * 60 * 1000;

export function IntakeForm({ client, slug }: { client: ClientConfig; slug: string }) {
  const compact = client.appearance === "dark";
  const sections = useMemo(() => getIntakeSections(client), [client]);
  const [answers, setAnswers] = useState<Answers>(() => initialAnswers(client));
  const [step, setStep] = useState(0);
  const [id, setId] = useState("");
  const [startedAt, setStartedAt] = useState(0);
  const [ready, setReady] = useState(false);
  const [draftStatus, setDraftStatus] = useState("Loading your draft…");
  const [uploads, setUploads] = useState<Upload[]>([]);
  const [uploading, setUploading] = useState(false);
  const [uploadMessage, setUploadMessage] = useState("");
  const [busy, setBusy] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);
  const heading = useRef<HTMLHeadingElement>(null);
  const errorBox = useRef<HTMLDivElement>(null);
  const trap = useRef<HTMLInputElement>(null);
  const busyRef = useRef(false);
  const key = `hometown-listing-intake:v1:${slug}`;
  const section = sections[step];

  useEffect(() => {
    let restored = false;
    try {
      const raw = localStorage.getItem(key);
      if (raw) {
        const draft: Draft = JSON.parse(raw);
        if (draft.version === 1 && draft.savedAt > Date.now() - draftLifetime && draft.answers && typeof draft.answers === "object" && /^[0-9a-f-]{36}$/.test(draft.id)) {
          setAnswers({ ...initialAnswers(client), ...draft.answers });
          setStep(Number.isInteger(draft.step) ? Math.max(0, Math.min(sections.length - 1, draft.step)) : 0);
          setId(draft.id);
          setStartedAt(Number.isFinite(draft.startedAt) ? draft.startedAt : Date.now());
          setUploads(Array.isArray(draft.uploads) ? draft.uploads.filter(u => uploadSchema.safeParse(u).success) : []);
          setDraftStatus("Draft restored on this device");
          restored = true;
        } else localStorage.removeItem(key);
      }
    } catch { setDraftStatus("Browser saving unavailable. Keep this tab open."); }
    if (!restored) {
      setId(crypto.randomUUID());
      setStartedAt(Date.now());
    }
    setReady(true);
  }, [key, client, sections.length]);

  useEffect(() => {
    if (!ready || success) return;
    const draft: Draft = { version: 1, id, answers, step, uploads, startedAt, savedAt: Date.now() };
    try {
      localStorage.setItem(key, JSON.stringify(draft));
      setDraftStatus("Draft saved on this device");
    } catch { setDraftStatus("Browser saving unavailable. Keep this tab open."); }
  }, [answers, step, ready, key, id, uploads, startedAt, success]);

  useEffect(() => { if (errors.length) errorBox.current?.focus(); }, [errors]);
  function change(field: string, value: Answers[string]) { setAnswers(previous => ({ ...previous, [field]: value })); }
  function navigate(index: number) {
    setStep(index); setErrors([]);
    requestAnimationFrame(() => { heading.current?.focus(); heading.current?.scrollIntoView({ block: "start" }); });
  }
  function next() {
    const issues = validateAnswers(answers, step, slug);
    if (issues.length) { setErrors(issues); return; }
    navigate(step + 1);
  }
  async function addFiles(files: File[]) {
    if (!files?.length) return;
    if (files.length + uploads.length > 25) { setUploadMessage("Choose up to 25 files total, or use a shared folder link."); return; }
    const allowed: Record<string, string> = { "image/jpeg": "jpg", "image/png": "png", "image/webp": "webp", "video/mp4": "mp4", "video/quicktime": "mov" };
    if (Array.from(files).some(f => !allowed[f.type] || !f.size || f.size > 10 * 1024 * 1024)) { setUploadMessage("Use JPG, PNG, WebP, MP4, or MOV files up to 10 MB each. Use a folder link for larger videos."); return; }
    setUploading(true); setUploadMessage("Uploading privately… Keep this page open.");
    try {
      const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
      const publicKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY;
      if (!url || !publicKey) throw new Error("unavailable");
      const { createClient } = await import("@supabase/supabase-js");
      const supabase = createClient(url, publicKey, { auth: { persistSession: false, autoRefreshToken: false } });
      for (const file of Array.from(files)) {
        const path = `${slug}/${id}/${crypto.randomUUID()}.${allowed[file.type]}`;
        const { error } = await supabase.storage.from("listing-intake-media").upload(path, file, { contentType: file.type, upsert: false });
        if (error) throw new Error("upload failed");
        setUploads(previous => [...previous, { path, name: file.name, type: file.type as Upload["type"], size: file.size }]);
      }
      setUploadMessage("Files uploaded privately. They’ll be included with your intake.");
    } catch { setUploadMessage("Some files could not upload. Files listed below are saved; retry the others or share a folder link."); }
    finally { setUploading(false); }
  }
  async function submit(event: FormEvent) {
    event.preventDefault();
    if (step !== sections.length - 1) { next(); return; }
    if (busyRef.current || uploading) return;
    const issues = validateAnswers(answers, undefined, slug);
    if (issues.length) { setErrors(issues); return; }
    busyRef.current = true; setBusy(true); setErrors([]);
    try {
      const response = await fetch("/api/intake", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id, clientSlug: slug, answers, uploads, startedAt, websiteTrap: trap.current?.value ?? "" }) });
      const result = await response.json();
      if (!response.ok || !result.ok) { setErrors([result.message || "We couldn’t save your intake. Please try again."]); return; }
      setSuccess(true);
      try { localStorage.removeItem(key); } catch { /* Submission is already saved. */ }
      window.scrollTo({ top: 0 });
    } catch { setErrors(["We couldn’t confirm your submission. Your draft is saved on this device; retrying won’t create a second intake."]); }
    finally { busyRef.current = false; setBusy(false); }
  }
  function clearDraft() {
    try { localStorage.removeItem(key); } catch { /* Still clear the visible form. */ }
    setAnswers(initialAnswers(client)); setStep(0); setUploads([]); setId(crypto.randomUUID()); setStartedAt(Date.now()); setErrors([]);
  }
  function fieldControl(field: IntakeField) {
    const value = answers[field.id];
    const common = { id: field.id, name: field.id, required: field.required, "aria-describedby": field.hint ? `${field.id}-hint` : undefined };
    if (field.type === "checklist") return <fieldset className="mt-3 space-y-3"><legend className="sr-only">{field.label}</legend>{field.options?.map(option => <label key={option} className="flex items-start gap-3 text-base"><input type="checkbox" className={checkbox} checked={Array.isArray(value) && value.includes(option)} onChange={e => change(field.id, e.target.checked ? [...(Array.isArray(value) ? value : []), option] : (Array.isArray(value) ? value : []).filter(v => v !== option))} />{option}</label>)}</fieldset>;
    const shared = { ...common, className: control, value: typeof value === "string" ? value : "", onChange: (e: { target: { value: string } }) => change(field.id, e.target.value) };
    if (field.type === "textarea") return <textarea {...shared} rows={field.id === "longDescription" ? 6 : 3} placeholder={compact && client.prefill[field.id] !== undefined ? "Enter corrected details" : undefined} maxLength={field.maxLength ?? 10000} />;
    if (field.type === "select") return <select {...shared}><option value="">Choose an answer</option>{field.options?.map(option => <option key={option}>{option}</option>)}</select>;
    return <input {...shared} type={field.type ?? "text"} placeholder={compact && client.prefill[field.id] !== undefined ? "Enter corrected value" : undefined} min={field.type === "number" ? 0 : undefined} maxLength={field.type === "number" ? undefined : 1000} autoComplete={field.id === "ownerName" ? "name" : field.id === "ownerEmail" ? "email" : "off"} />;
  }
  function renderField(field: IntakeField) {
    const prefill = client.prefill[field.id];
    const confirmed = answers[`${field.id}__confirmed`] === true;
    return <div key={field.id} className={compact ? `${styles.field} ${field.type === "textarea" || field.type === "checklist" || field.id === "listingName" ? styles.wide : ""}` : "min-w-0 border-b border-border/70 py-6 first:pt-0 last:border-0"}>
      <label htmlFor={field.id} className="text-lg font-medium">{field.label}{field.required && <span className="ml-1 text-accent" aria-label="required">*</span>}</label>
      {field.hint && <p id={`${field.id}-hint`} className="mt-1 text-sm leading-relaxed text-muted-foreground">{field.hint}</p>}
      {prefill !== undefined && <div className={compact ? styles.prefill : "mt-3 rounded-xl bg-background p-4"}>
        {!compact && <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{client.needsConfirmation.includes(field.id) ? "Please confirm" : "What we have"}</p>}
        <p className="mt-2 whitespace-pre-wrap break-words text-base">{Array.isArray(prefill) ? prefill.join(", ") : prefill}</p>
        <label className="mt-3 flex items-center gap-3 text-sm font-medium"><input id={confirmed ? field.id : undefined} type="checkbox" aria-label={`${field.label}: correct as is`} className={checkbox} checked={confirmed} onChange={e => setAnswers(previous => ({ ...previous, [`${field.id}__confirmed`]: e.target.checked, [field.id]: e.target.checked ? prefill : (Array.isArray(prefill) ? [] : "") }))} />Correct as is <span className="sr-only">— {field.label}</span></label>
      </div>}
      {(!prefill || !confirmed) && <div>{prefill && !compact && <p className="mt-3 text-sm text-muted-foreground">Confirm above, or enter the correct information below.</p>}{fieldControl(field)}</div>}
      {field.type === "textarea" && field.maxLength && !confirmed && <p className="mt-1 text-right text-xs text-muted-foreground">{String(answers[field.id] ?? "").length} / {field.maxLength}</p>}
    </div>;
  }

  function renderCompactHours() {
    return <div>
      {days.map(day => {
        const keys = [`${day}Status`, `${day}Open`, `${day}Close`];
        const prefilled = client.prefill[keys[0]] !== undefined;
        const confirmed = prefilled && keys.every(key => client.prefill[key] === undefined || answers[`${key}__confirmed`] === true);
        const status = String(answers[keys[0]] ?? "");
        const current = client.prefill[keys[0]] === "Open" ? `${client.prefill[keys[1]]}–${client.prefill[keys[2]]}` : client.prefill[keys[0]];
        return <fieldset key={day} className={styles.hoursDay}>
          <legend>{day}</legend>
          {prefilled && <div className="flex flex-wrap items-center justify-between gap-3 text-sm">
            <span className="text-muted-foreground">{String(current)}</span>
            <label className="flex items-center gap-2"><input type="checkbox" className={checkbox} aria-label={`${day}: correct as is`} checked={confirmed} onChange={e => setAnswers(previous => ({ ...previous, ...Object.fromEntries(keys.flatMap(key => [[key, e.target.checked ? client.prefill[key] ?? "" : ""], [`${key}__confirmed`, e.target.checked]])) }))} />Correct as is</label>
          </div>}
          {!confirmed && <div className={styles.hoursControls}>
            <label htmlFor={keys[0]}>Availability{fieldControl({ id: keys[0], label: `${day} availability`, type: "select", options: ["Open", "Closed", "By appointment"] })}</label>
            {status === "Open" && <><label htmlFor={keys[1]}>Opens{fieldControl({ id: keys[1], label: `${day} opens`, type: "time" })}</label><label htmlFor={keys[2]}>Closes{fieldControl({ id: keys[2], label: `${day} closes`, type: "time" })}</label></>}
          </div>}
        </fieldset>;
      })}
      <div className={`${styles.fields} mt-7`}>{section.fields.filter(field => ["holidayClosures", "emergencyWeekend"].includes(field.id)).map(renderField)}</div>
    </div>;
  }
  function renderCompactAccounts() {
    return <>
      <div className={styles.fields}>{section.fields.filter(field => field.id.startsWith("social")).map(renderField)}</div>
      <div className="mt-7">{platforms.map(platform => <details className={styles.account} key={platform}>
        <summary>{platform}<span>{answers[`account${platform}Exists`] === "Yes" ? "Account exists" : answers[`account${platform}Exists`] === "No" ? "No account" : "Add details"}</span></summary>
        <div className={styles.fields}>{section.fields.filter(field => field.id.startsWith(`account${platform}`)).map(field => renderField({ ...field, label: field.id.endsWith("Exists") ? "Account exists?" : field.id.endsWith("Email") ? "Account email" : "Add Hometown as manager?" }))}</div>
      </details>)}</div>
    </>;
  }
  const compactHelp: Record<number, string> = {
    2: "Your home address stays private. Mailing details are only for verification.",
    4: "Verification and account recovery details stay private.",
    8: "Include a square logo (500px+), cover, 10–20 before-and-after job photos, a team photo, and videos.",
    9: "Share account emails and manager access. Never share passwords.",
    11: "All permissions and a signature are required. Contact Kyle if you prefer to withhold a permission."
  };

  return <div className={compact ? styles.dark : "min-h-screen"}>
    <header className="border-b border-border"><div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-6 sm:px-8"><Link href="/" aria-label="Hometown home" className="text-2xl font-bold tracking-tighter"><Wordmark /><span className="text-accent">.</span></Link><span className="text-right text-sm text-muted-foreground">{compact ? "Listing intake" : <>Client onboarding<br />Business listings</>}</span></div></header>
    {success ? <main className="mx-auto max-w-2xl px-5 py-24"><p className="eyebrow">Intake received</p><h1 className="mt-5 text-5xl font-medium tracking-tight sm:text-6xl">Thanks, you’re all set<span className="text-accent">.</span></h1><p className="mt-6 text-lg leading-relaxed text-muted-foreground">We’ve saved your answers for {client.name}. Kyle will review everything and follow up if we need a verification code or manager invitation.</p><p className="mt-4 text-sm text-muted-foreground">Your home address stays private. You can close this tab.</p><a className="mt-8 inline-block font-medium underline underline-offset-4" href="mailto:kyle@hometownkc.agency">Need to make a change? Email Kyle</a></main> : <main className={compact ? "mx-auto max-w-6xl px-5 pb-12 pt-8 sm:px-8 sm:pt-10" : "mx-auto max-w-6xl px-5 pb-16 pt-10 sm:px-8 sm:pt-16"}>
      {compact ? <div className="mb-8 max-w-3xl">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-5xl">{client.name}</h1>
        <p className="mt-3 text-base leading-relaxed text-muted-foreground">Consistent listing details help your local rankings. About 20 minutes.</p>
        <p className="mt-1 text-sm text-muted-foreground">Your home address stays private.</p>
      </div> : <div className="mb-10 max-w-3xl"><p className="eyebrow">Prepared for {client.name}</p><h1 className="mt-5 text-4xl font-medium leading-[1.03] tracking-[-0.045em] sm:text-6xl">A consistent presence.<br /><span className="font-serif italic">A stronger local business.</span></h1><p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">Hi {client.greeting}. Keeping your business information consistent across Google, Yelp, Houzz, Angi, and other directories helps your local rankings and makes it easier for customers to find you. This takes about 20 minutes.</p><p className="mt-3 text-sm font-medium">Your home address will never be shown publicly.</p></div>}
      <div className="mb-8 border-y border-border py-4"><div className="flex flex-wrap justify-between gap-2 text-sm"><span>{compact ? `${step + 1} of ${sections.length}` : `Section ${step + 1} of ${sections.length} · ${section.title}`}</span><span role="status" className="text-muted-foreground">{draftStatus}</span></div><div role="progressbar" aria-label="Intake progress" aria-valuenow={step + 1} aria-valuemin={0} aria-valuemax={sections.length} className="mt-3 h-1.5 overflow-hidden rounded-full bg-border"><div className="h-full rounded-full bg-accent" style={{ width: `${((step + 1) / sections.length) * 100}%` }} /></div></div>
      <div className="grid items-start gap-8 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-14">
        <aside className="lg:sticky lg:top-8"><nav aria-label="Intake sections"><label htmlFor="section-picker" className={compact ? "sr-only" : "text-sm lg:hidden"}>Jump to a section</label><select id="section-picker" className={`${control} lg:hidden`} disabled={busy || uploading || !ready} value={step} onChange={e => navigate(Number(e.target.value))}>{sections.map((s, i) => <option key={s.title} value={i}>{i + 1}. {s.title}</option>)}</select><ol className="hidden space-y-1 lg:block">{sections.map((s, i) => <li key={s.title}><button type="button" disabled={busy || uploading || !ready} onClick={() => navigate(i)} aria-current={step === i ? "step" : undefined} className={`flex w-full items-baseline gap-3 rounded-lg px-3 py-2.5 text-left text-sm ${step === i ? (compact ? "bg-white text-slate-950" : "bg-ink text-white") : "text-muted-foreground hover:bg-secondary"}`}><span className={`font-mono text-[10px] ${step === i ? (compact ? "text-slate-600" : "text-white/70") : "text-muted-foreground"}`}>{String(i + 1).padStart(2, "0")}</span>{s.title}</button></li>)}</ol></nav><div className={compact ? "hidden" : "mt-6 border-t border-border pt-5 text-sm leading-relaxed text-muted-foreground"}><p>Drafts stay in this browser for 30 days. Use your own device for private details.</p><button type="button" onClick={clearDraft} disabled={busy || uploading || !ready} className="mt-3 underline underline-offset-4">Clear draft & start over</button><p className="mt-4">Need a hand?<br /><a href="mailto:kyle@hometownkc.agency" className="font-medium text-foreground underline underline-offset-4">Email Kyle</a></p></div></aside>
        <form onSubmit={submit} noValidate className={compact ? "min-w-0 border-t border-border pt-6 lg:border-0 lg:pt-0" : "min-w-0 rounded-2xl border border-border bg-card p-5 shadow-card sm:p-9"}>
          <fieldset disabled={!ready || busy || uploading} className="min-w-0">
            <div className="mb-7">
              {!compact && <p className="font-mono text-[10px] uppercase tracking-widest text-accent">The details / {String(step + 1).padStart(2, "0")}</p>}
              <div className="flex items-baseline justify-between gap-4"><h2 ref={heading} tabIndex={-1} className={`${compact ? "" : "mt-3 "}scroll-mt-6 text-3xl font-medium tracking-tight focus:outline-none`}>{section.title}</h2>{compact && (section.fields.some(field => field.required) || step === 11) && <span className="shrink-0 text-xs text-muted-foreground">* Required</span>}</div>
              {(!compact || compactHelp[step]) && <p className="mt-3 text-base leading-relaxed text-muted-foreground">{compact ? compactHelp[step] : section.intro}</p>}
              {!compact && <p className="mt-2 text-xs text-muted-foreground">* Required. Other answers can be left blank if unknown.</p>}
            </div>
            <div hidden aria-hidden="true"><label>Leave this blank<input ref={trap} name="websiteTrap" tabIndex={-1} autoComplete="off" /></label></div>
            {errors.length > 0 && <div ref={errorBox} tabIndex={-1} role="alert" className="mb-6 rounded-xl border border-destructive/40 bg-destructive/5 p-4 text-sm"><p className="font-semibold">Please check your answers</p><ul className="mt-2 list-disc space-y-1 pl-5">{errors.map((error, i) => <li key={i}>{error}</li>)}</ul></div>}
            {step === sections.length - 1 && <div className="mb-8 space-y-5">{permissionFields.map(permission => <label key={permission.id} className="flex items-start gap-3 text-base leading-relaxed"><input name={permission.id} type="checkbox" required className={`${checkbox} mt-1`} checked={answers[permission.id] === true} onChange={e => change(permission.id, e.target.checked)} /><span>{permission.label} <span className="text-accent">*</span></span></label>)}{!compact && <p className="text-sm text-muted-foreground">Your signature records these permissions for {client.name}. Please use the section menu to review your answers before submitting.</p>}</div>}
            {compact && step === 3 ? renderCompactHours() : compact && step === 9 ? renderCompactAccounts() : <div className={compact ? styles.fields : undefined}>{section.fields.map(renderField)}</div>}
            {step === 8 && <div className="mt-4 rounded-xl border border-dashed border-input p-5"><label htmlFor="mediaUpload" className="text-lg font-medium">Optional private uploads</label><p id="mediaUpload-hint" className="mt-2 text-sm leading-relaxed text-muted-foreground">{compact ? "25 files max · 10 MB each · JPG, PNG, WebP, MP4, MOV. Uploads are private and save when selected." : "Up to 25 files, 10 MB each. JPG, PNG, WebP, MP4, or MOV. Choose all files for this batch; you can add more later. Files upload when selected and remain private. If you leave without submitting, Kyle may see unlinked uploads."}</p><input id="mediaUpload" type="file" multiple accept="image/jpeg,image/png,image/webp,video/mp4,video/quicktime" aria-describedby="mediaUpload-hint" className={`mt-4 block w-full min-w-0 text-sm file:mr-3 file:rounded-full file:border-0 file:px-4 file:py-2 ${compact ? "file:bg-white file:text-slate-950" : "file:bg-ink file:text-white"}`} onChange={e => { void addFiles(Array.from(e.target.files ?? [])); e.target.value = ""; }} /></div>}
          </fieldset>
          {step === 8 && <div className="mt-4 text-sm"><p role="status">{uploadMessage}</p>{uploads.length > 0 && <ul className="mt-3 list-disc space-y-1 break-all pl-5">{uploads.map(file => <li key={file.path}>{file.name} <span className="text-muted-foreground">· uploaded</span></li>)}</ul>}</div>}
          <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-6"><Button variant="ghost" disabled={step === 0 || busy || uploading || !ready} onClick={() => navigate(step - 1)}><span>Back</span></Button>{step === sections.length - 1 ? <Button type="submit" arrow={!compact} className={compact ? "rounded-lg bg-white px-6 text-slate-950 hover:bg-slate-200" : undefined} disabled={busy || uploading || !ready}><span>{busy ? "Saving your intake…" : "Send my intake"}</span></Button> : <Button type="submit" arrow={!compact} className={compact ? "rounded-lg bg-white px-6 text-slate-950 hover:bg-slate-200" : undefined} disabled={!ready || busy || uploading}><span>Continue</span></Button>}</div>
        </form>
      </div>
    </main>}
    <footer className="border-t border-border px-5 py-6 text-center text-sm text-muted-foreground">{compact ? <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4"><a href="mailto:kyle@hometownkc.agency" className="underline underline-offset-4">Questions? Email Kyle</a>{!success && <div className="flex flex-wrap items-center gap-4"><span className="text-xs">Drafts stay on this device for 30 days.</span><button type="button" onClick={clearDraft} disabled={busy || uploading || !ready} className="underline underline-offset-4">Clear draft & start over</button></div>}</div> : "Hometown · Kansas City · Built around your business"}</footer>
  </div>;
}
