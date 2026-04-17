"use client";

import Link from "next/link";
import { useActionState, useEffect, useRef, useState } from "react";
import { submitOfferLead, type SubmitLeadState } from "@/app/(site)/contact/actions";
import { LeadAttributionFields } from "@/components/analytics/lead-attribution-fields";
import { Button } from "@/components/ui/button";
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

const GOOGLE_ADS_OFFER_CONVERSION_SEND_TO = process.env.NEXT_PUBLIC_GOOGLE_ADS_OFFER_CONVERSION_SEND_TO;

function fireOfferLeadConversion() {
  if (typeof window === "undefined") return;
  if (!GOOGLE_ADS_OFFER_CONVERSION_SEND_TO) return;

  const googleWindow = window as Window & {
    gtag?: (command: string, eventName: string, params: Record<string, string>) => void;
  };
  googleWindow.gtag?.("event", "conversion", { send_to: GOOGLE_ADS_OFFER_CONVERSION_SEND_TO });
}

export function OfferLeadForm() {
  const [state, action, pending] = useActionState(submitOfferLead, initialState);
  const [values, setValues] = useState(initialValues);
  const [hasStarted, setHasStarted] = useState(false);
  const [showFullForm, setShowFullForm] = useState(false);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const nameInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!state.ok) return;
    setValues(initialValues);
    setShowFullForm(false);
  }, [state.ok]);

  useEffect(() => {
    if (!state.ok) return;
    pushDataLayerEvent(analyticsEvents.offerLeadSubmitSuccess);
    fireOfferLeadConversion();
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

  const revealFullForm = () => {
    markStarted();
    if (!emailInputRef.current?.reportValidity()) return;
    setShowFullForm(true);
  };

  useEffect(() => {
    if (!showFullForm) return;
    nameInputRef.current?.focus();
  }, [showFullForm]);

  return (
    <div className="rounded-[2rem] border border-black/8 bg-white/94 p-5 shadow-[0_22px_60px_rgba(15,23,42,0.08)] sm:p-7">
      <div className="mb-4">
        <p className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-accent">Start here</p>
        <h3 className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-[2rem]">
          {showFullForm ? "A few quick details." : "Start with your email."}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {showFullForm
            ? "This helps us send the clearest next step."
            : "We&apos;ll reply within 24 hours if it looks like a fit."}
        </p>
      </div>

      <form
        id="offer-form"
        action={action}
        className="grid gap-4"
        onSubmit={() => pushDataLayerEvent(analyticsEvents.formSubmit)}
      >
        <LeadAttributionFields />

        <div className="absolute -left-[9999px] top-0 h-px w-px overflow-hidden opacity-0" aria-hidden="true">
          <label htmlFor="offer-hpt">Leave this field blank</label>
          <input id="offer-hpt" name="_hpt" type="text" tabIndex={-1} autoComplete="off" />
        </div>

        <div className="space-y-2">
          <label htmlFor="offer-email" className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-muted-foreground">
            Email
          </label>
          <Input
            ref={emailInputRef}
            id="offer-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            value={values.email}
            placeholder="Email address"
            onFocus={markStarted}
            onChange={(event) => setValues((prev) => ({ ...prev, email: event.target.value }))}
          />
        </div>

        {showFullForm ? (
          <>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="offer-name" className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-muted-foreground">
                  Name
                </label>
                <Input
                  ref={nameInputRef}
                  id="offer-name"
                  name="name"
                  required
                  autoComplete="name"
                  value={values.name}
                  placeholder="Your name"
                  onFocus={markStarted}
                  onChange={(event) => setValues((prev) => ({ ...prev, name: event.target.value }))}
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="offer-businessName"
                  className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-muted-foreground"
                >
                  Business Name
                </label>
                <Input
                  id="offer-businessName"
                  name="businessName"
                  required
                  autoComplete="organization"
                  value={values.businessName}
                  placeholder="Business name"
                  onFocus={markStarted}
                  onChange={(event) => setValues((prev) => ({ ...prev, businessName: event.target.value }))}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="offer-phone" className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-muted-foreground">
                Phone
              </label>
              <Input
                id="offer-phone"
                name="phone"
                type="tel"
                required
                autoComplete="tel"
                value={values.phone}
                placeholder="Phone number"
                onFocus={markStarted}
                onChange={(event) => setValues((prev) => ({ ...prev, phone: event.target.value }))}
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="offer-projectDetails"
                className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-muted-foreground"
              >
                Project Details
              </label>
              <Textarea
                id="offer-projectDetails"
                name="projectDetails"
                rows={4}
                value={values.projectDetails}
                placeholder="Anything helpful about your business, timeline, or what you want the site to do."
                onFocus={markStarted}
                onChange={(event) => setValues((prev) => ({ ...prev, projectDetails: event.target.value }))}
              />
            </div>
          </>
        ) : null}

        {state.message ? <p className={state.ok ? "text-green-600" : "text-red-500"}>{state.message}</p> : null}

        {showFullForm ? (
          <Button type="submit" form="offer-form" className="h-12 rounded-xl px-8" dataAnalytics="cta-offer-800" disabled={pending}>
            {pending ? "Sending..." : "Send Request"}
          </Button>
        ) : (
          <Button type="button" className="h-12 rounded-xl px-8" onClick={revealFullForm}>
            Continue
          </Button>
        )}

        <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">No pressure. Fast response.</p>
        <p className="text-xs leading-relaxed text-muted-foreground">
          By submitting, you agree to our{" "}
          <Link href="/privacy-policy" className="underline decoration-current/30 underline-offset-4 transition hover:text-foreground">
            Privacy Policy
          </Link>{" "}
          and{" "}
          <Link href="/terms-of-service" className="underline decoration-current/30 underline-offset-4 transition hover:text-foreground">
            Terms of Service
          </Link>.
        </p>
      </form>
    </div>
  );
}
