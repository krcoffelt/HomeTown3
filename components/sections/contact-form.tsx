"use client";

import Link from "next/link";
import { useActionState, useEffect, useRef, useState } from "react";
import { submitLead, type SubmitLeadState } from "@/app/(site)/contact/actions";
import { LeadAttributionFields } from "@/components/analytics/lead-attribution-fields";
import { ArrowRightIcon, CheckCircleIcon } from "@/components/ui/site-icons";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { analyticsEvents, pushDataLayerEvent, pushLeadSuccessEvent } from "@/lib/analytics/events";

const initialState: SubmitLeadState = { ok: false, message: "", trackLead: false };
const initialValues = {
  name: "",
  businessName: "",
  email: "",
  phone: "",
  projectDetails: ""
};

interface ContactFormProps {
  dark?: boolean;
  detailsLabel?: string;
  detailsPlaceholder?: string;
  formId?: string;
  heading?: string;
  helperText?: string;
  serviceNeeded?: string;
  submitLabel?: string;
  successBody?: string;
  successEvent?: string;
  successTitle?: string;
}

export function ContactForm({
  dark: _dark = false,
  detailsLabel = "What should we audit?",
  detailsPlaceholder = "What do you sell, where do leads come from today, and what are you unsure is working?",
  formId = "contact-form",
  heading = "Where should we send your audit follow-up?",
  helperText = "We'll ask for a few more details next. Takes under a minute.",
  serviceNeeded = "Free Marketing Audit",
  submitLabel = "Request My Free Marketing Audit",
  successBody = "We'll review your details and reach out to schedule the consultation.",
  successEvent = analyticsEvents.contactLeadSubmitSuccess,
  successTitle = "Your audit request is in."
}: ContactFormProps) {
  const [state, action, pending] = useActionState(submitLead, initialState);
  const [values, setValues] = useState(initialValues);
  const [hasStarted, setHasStarted] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [startedAt, setStartedAt] = useState("");
  const emailRef = useRef<HTMLInputElement>(null);

  const labelClass = "mono-label text-muted-foreground";
  const inputClass =
    "h-12 rounded-none border-0 border-b border-foreground/15 bg-transparent px-0 text-[1.05rem] text-foreground placeholder:text-muted-foreground/55 focus-visible:border-accent focus-visible:outline-0";
  const textareaClass =
    "min-h-[120px] rounded-none border-0 border-b border-foreground/15 bg-transparent px-0 text-[1.05rem] text-foreground placeholder:text-muted-foreground/55 focus-visible:border-accent focus-visible:outline-0";
  const helperClass = "text-sm leading-relaxed text-muted-foreground";

  useEffect(() => {
    setStartedAt(String(Date.now()));
  }, []);

  useEffect(() => {
    if (!state.ok) return;
    setSubmitted(true);
    setValues(initialValues);
    setExpanded(false);
  }, [state.ok]);

  useEffect(() => {
    if (!state.trackLead || !state.conversionId) return;
    pushLeadSuccessEvent(successEvent, state.conversionId);
  }, [state.conversionId, state.trackLead, successEvent]);

  useEffect(() => {
    if (!state.message || state.ok) return;
    pushDataLayerEvent(analyticsEvents.formError);
  }, [state.message, state.ok]);

  const markStarted = () => {
    if (hasStarted) return;
    setHasStarted(true);
    pushDataLayerEvent(analyticsEvents.formStart);
  };

  const revealDetails = () => {
    markStarted();
    if (!emailRef.current?.checkValidity()) {
      emailRef.current?.reportValidity();
      return;
    }
    setExpanded(true);
  };

  if (submitted) {
    return (
      <div className="rounded-[1.5rem] bg-card p-8 text-foreground sm:p-12" role="status">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-foreground">
          <CheckCircleIcon className="h-7 w-7" />
        </div>
        <h3 className="mt-8 font-display text-3xl font-semibold tracking-[-0.04em] text-foreground md:text-4xl">
          {successTitle}
        </h3>
        <p className="mt-3 text-base leading-relaxed text-muted-foreground">
          {successBody}
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-[1.5rem] bg-card p-6 text-foreground sm:p-10">
      <div className="flex items-start justify-between gap-6 pb-2">
        <h3 className="max-w-[22ch] font-display text-[1.5rem] font-semibold leading-[1.1] tracking-[-0.035em] text-foreground sm:text-[1.85rem]">
          {heading}
        </h3>
        <span className="mono-label mt-2 shrink-0 text-muted-foreground">{expanded ? "2 / 2" : "1 / 2"}</span>
      </div>

      <form
        id={formId}
        action={action}
        aria-label="Contact form"
        className="grid gap-5 pt-4 sm:gap-6 sm:pt-5"
      >
        <input type="hidden" name="serviceNeeded" value={serviceNeeded} />
        <input type="hidden" name="startedAt" value={startedAt} />
        <LeadAttributionFields />

        <div className="absolute -left-[9999px] top-0 h-px w-px overflow-hidden opacity-0" aria-hidden="true">
          <label htmlFor="contact-hpt">Leave this field blank</label>
          <input id="contact-hpt" name="_hpt" type="text" tabIndex={-1} autoComplete="off" />
        </div>

        <div className="space-y-3">
          <label htmlFor="contact-email" className="sr-only">
            {expanded ? "Email" : "Where should we send your audit follow-up?"}
          </label>
          <Input
            id="contact-email"
            ref={emailRef}
            name="email"
            type="email"
            required
            autoComplete="email"
            value={values.email}
            placeholder="Email address"
            className={`${inputClass} h-16 text-xl sm:text-2xl`}
            onFocus={markStarted}
            onChange={(event) => setValues((prev) => ({ ...prev, email: event.target.value }))}
          />
          {!expanded ? (
            <p className={helperClass}>{helperText}</p>
          ) : null}
        </div>

        {expanded ? (
            <div>
              <div className="grid gap-7 pt-2">
                <div className="grid gap-7 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="contact-name" className={labelClass}>
                      Your Name
                    </label>
                    <Input
                      id="contact-name"
                      name="name"
                      required={expanded}
                      autoComplete="name"
                      value={values.name}
                      placeholder="Your name"
                      className={inputClass}
                      onFocus={markStarted}
                      onChange={(event) => setValues((prev) => ({ ...prev, name: event.target.value }))}
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="contact-businessName" className={labelClass}>
                      Business Name
                    </label>
                    <Input
                      id="contact-businessName"
                      name="businessName"
                      required={expanded}
                      autoComplete="organization"
                      value={values.businessName}
                      placeholder="Business name"
                      className={inputClass}
                      onFocus={markStarted}
                      onChange={(event) =>
                        setValues((prev) => ({ ...prev, businessName: event.target.value }))
                      }
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="contact-phone" className={labelClass}>
                    Phone
                  </label>
                  <Input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    required={expanded}
                    autoComplete="tel"
                    value={values.phone}
                    placeholder="Phone number"
                    className={inputClass}
                    onFocus={markStarted}
                    onChange={(event) => setValues((prev) => ({ ...prev, phone: event.target.value }))}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="contact-projectDetails" className={labelClass}>
                    {detailsLabel}
                  </label>
                  <Textarea
                    id="contact-projectDetails"
                    name="projectDetails"
                    required={expanded}
                    rows={4}
                    value={values.projectDetails}
                    placeholder={detailsPlaceholder}
                    className={textareaClass}
                    onFocus={markStarted}
                    onChange={(event) =>
                      setValues((prev) => ({ ...prev, projectDetails: event.target.value }))
                    }
                  />
                </div>
              </div>
            </div>
        ) : null}

        <div className="flex flex-col gap-3">
          {!expanded ? (
            <button
              key="continue"
              type="button"
              className="group inline-flex h-16 w-full items-center justify-between gap-2 rounded-full bg-ink pl-7 pr-2 text-base font-medium text-primary-foreground transition-colors duration-300 hover:bg-accent disabled:opacity-60"
              data-analytics="cta-contact"
              onClick={revealDetails}
            >
              Continue
              <span aria-hidden="true" className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-foreground text-ink">
                <ArrowRightIcon className="h-4 w-4 transition-transform duration-500 ease-out-expo group-hover:translate-x-0.5" />
              </span>
            </button>
          ) : (
            <button
              key="submit"
              type="submit"
              form={formId}
              className="group inline-flex h-16 w-full items-center justify-between gap-2 rounded-full bg-ink pl-7 pr-2 text-base font-medium text-primary-foreground transition-colors duration-300 hover:bg-accent disabled:opacity-60"
              data-analytics="cta-contact"
              disabled={pending}
            >
              {pending ? "Sending..." : submitLabel}
              <span aria-hidden="true" className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary-foreground text-ink">
                <ArrowRightIcon className="h-4 w-4 transition-transform duration-500 ease-out-expo group-hover:translate-x-0.5" />
              </span>
            </button>
          )}

          <p className="text-xs leading-relaxed text-muted-foreground">
            By submitting, you agree to our{" "}
            <Link href="/privacy-policy" className="underline underline-offset-2 transition hover:text-foreground">
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link href="/terms-of-service" className="underline underline-offset-2 transition hover:text-foreground">
              Terms of Service
            </Link>
            .
          </p>
        </div>

        {state.message ? (
          <p
            className={
              state.ok
                ? "rounded-2xl border border-green-200 bg-green-50 px-4 py-3 text-sm font-medium text-green-700"
                : "rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-600"
            }
          >
            {state.message}
          </p>
        ) : null}
      </form>
    </div>
  );
}
