"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useActionState, useEffect, useRef, useState } from "react";
import { submitLead, type SubmitLeadState } from "@/app/(site)/contact/actions";
import { LeadAttributionFields } from "@/components/analytics/lead-attribution-fields";
import { ArrowRightIcon, CheckCircleIcon } from "@/components/ui/site-icons";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { analyticsEvents, pushDataLayerEvent } from "@/lib/analytics/events";

const initialState: SubmitLeadState = { ok: false, message: "" };
const initialValues = {
  name: "",
  businessName: "",
  email: "",
  phone: "",
  projectDetails: ""
};

interface ContactFormProps {
  dark?: boolean;
}

export function ContactForm({ dark: _dark = false }: ContactFormProps) {
  const [state, action, pending] = useActionState(submitLead, initialState);
  const [values, setValues] = useState(initialValues);
  const [hasStarted, setHasStarted] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [startedAt, setStartedAt] = useState("");
  const emailRef = useRef<HTMLInputElement>(null);

  const labelClass = "text-[0.78rem] font-semibold tracking-[0.01em] text-foreground";
  const inputClass =
    "h-12 rounded-xl border-black/10 bg-secondary text-foreground placeholder:text-muted-foreground/70 focus-visible:border-foreground/30";
  const textareaClass =
    "min-h-[140px] rounded-xl border-black/10 bg-secondary text-foreground placeholder:text-muted-foreground/70 focus-visible:border-foreground/30";
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
    if (!state.ok) return;
    pushDataLayerEvent(analyticsEvents.contactLeadSubmitSuccess);
  }, [state.ok]);

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
      <div className="rounded-[2.25rem] border border-black/8 bg-card p-8 text-center shadow-[var(--shadow-elevated)] sm:p-10">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-secondary text-accent">
          <CheckCircleIcon className="h-7 w-7" />
        </div>
        <h3 className="mt-5 font-display text-2xl font-bold tracking-tight text-foreground">
          Thanks — we&apos;ll be in touch.
        </h3>
        <p className="mt-3 text-base leading-relaxed text-muted-foreground">
          We usually reply within a few hours.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-[2.25rem] border border-black/8 bg-card p-6 shadow-[var(--shadow-elevated)] sm:p-8 md:p-10">
      <div className="pb-1">
        <h3 className="text-[1.3rem] font-bold tracking-tight text-foreground sm:text-[1.55rem]">
          What&apos;s the best email for you?
        </h3>
      </div>

      <form
        id="contact-form"
        action={action}
        aria-label="Contact form"
        className="grid gap-5 pt-4 sm:gap-6 sm:pt-5"
        onSubmit={() => pushDataLayerEvent(analyticsEvents.formSubmit)}
      >
        <input type="hidden" name="serviceNeeded" value="General Inquiry" />
        <input type="hidden" name="startedAt" value={startedAt} />
        <LeadAttributionFields />

        <div className="absolute -left-[9999px] top-0 h-px w-px overflow-hidden opacity-0" aria-hidden="true">
          <label htmlFor="contact-hpt">Leave this field blank</label>
          <input id="contact-hpt" name="_hpt" type="text" tabIndex={-1} autoComplete="off" />
        </div>

        <div className="space-y-3">
          <label htmlFor="contact-email" className="sr-only">
            {expanded ? "Email" : "What's the best email for you?"}
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
            className={`${inputClass} h-14 rounded-[1.1rem] border-black/10 bg-secondary px-5 text-lg`}
            onFocus={markStarted}
            onChange={(event) => setValues((prev) => ({ ...prev, email: event.target.value }))}
          />
          {!expanded ? (
            <p className={helperClass}>We&apos;ll ask for a few more details next. Takes under a minute.</p>
          ) : null}
        </div>

        <AnimatePresence initial={false}>
          {expanded ? (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{
                height: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
                opacity: { duration: 0.35, ease: "easeOut", delay: 0.05 }
              }}
              className="overflow-hidden"
            >
              <div className="grid gap-5 rounded-[1.25rem] border border-black/8 bg-background/60 p-4 sm:p-5">
                <div className="grid gap-5 sm:grid-cols-2">
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
                    Tell us about your business
                  </label>
                  <Textarea
                    id="contact-projectDetails"
                    name="projectDetails"
                    required={expanded}
                    rows={4}
                    value={values.projectDetails}
                    placeholder="What do you do, what do you need, and what would make this a win?"
                    className={textareaClass}
                    onFocus={markStarted}
                    onChange={(event) =>
                      setValues((prev) => ({ ...prev, projectDetails: event.target.value }))
                    }
                  />
                </div>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>

        <div className="flex flex-col gap-3">
          {!expanded ? (
            <button
              type="button"
              className="inline-flex h-14 w-full items-center justify-center gap-2 rounded-[1.1rem] bg-gradient-to-r from-black to-black/85 px-8 text-base font-bold tracking-[0.01em] text-primary-foreground transition-all duration-300 hover:shadow-[var(--shadow-hero)]"
              data-analytics="cta-contact"
              onClick={revealDetails}
            >
              Continue
              <ArrowRightIcon className="h-4 w-4" />
            </button>
          ) : (
            <button
              type="submit"
              form="contact-form"
              className="inline-flex h-14 w-full items-center justify-center gap-2 rounded-[1.1rem] bg-gradient-to-r from-black to-black/85 px-8 text-base font-bold tracking-[0.01em] text-primary-foreground transition-all duration-300 hover:shadow-[var(--shadow-hero)]"
              data-analytics="cta-contact"
              disabled={pending}
            >
              {pending ? "Sending..." : "Get Started"}
            </button>
          )}

          <p className="text-xs leading-relaxed text-muted-foreground">
            By submitting, you agree to our{" "}
            <Link href="/privacy-policy" className="transition hover:text-foreground">
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link href="/terms-of-service" className="transition hover:text-foreground">
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
