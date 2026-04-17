"use client";

import Link from "next/link";
import { useActionState, useEffect, useState } from "react";
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

  useEffect(() => {
    if (!state.ok) return;
    setValues(initialValues);
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

  return (
    <div className="rounded-[2rem] border border-black/8 bg-white p-6 shadow-[0_30px_80px_rgba(0,0,0,0.28)] sm:p-8">
      <div className="mb-6">
        <p className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-accent">
          Start here
        </p>
        <h3 className="mt-3 text-[1.65rem] font-bold tracking-tight text-foreground sm:text-[2rem]">
          Tell us about your business.
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          We&apos;ll reply within 24 hours with next steps and a quote.
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

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <label
              htmlFor="offer-name"
              className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-muted-foreground"
            >
              Name
            </label>
            <Input
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
              onChange={(event) =>
                setValues((prev) => ({ ...prev, businessName: event.target.value }))
              }
            />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <label
              htmlFor="offer-email"
              className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-muted-foreground"
            >
              Email
            </label>
            <Input
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

          <div className="space-y-2">
            <label
              htmlFor="offer-phone"
              className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-muted-foreground"
            >
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
            placeholder="Tell us about your business, what the site needs to do, and anything helpful about timing."
            onFocus={markStarted}
            onChange={(event) =>
              setValues((prev) => ({ ...prev, projectDetails: event.target.value }))
            }
          />
        </div>

        {state.message ? (
          <p className={state.ok ? "text-green-600" : "text-red-500"}>{state.message}</p>
        ) : null}

        <Button
          type="submit"
          form="offer-form"
          className="h-12 w-full rounded-full px-8 sm:w-auto"
          dataAnalytics="cta-offer-800"
          disabled={pending}
        >
          {pending ? "Sending..." : "Get My Website Quote"}
        </Button>

        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          Reply within 24 hours · No pressure
        </p>
        <p className="text-xs leading-relaxed text-muted-foreground">
          By submitting, you agree to our{" "}
          <Link
            href="/privacy-policy"
            className="underline decoration-current/30 underline-offset-4 transition hover:text-foreground"
          >
            Privacy Policy
          </Link>{" "}
          and{" "}
          <Link
            href="/terms-of-service"
            className="underline decoration-current/30 underline-offset-4 transition hover:text-foreground"
          >
            Terms of Service
          </Link>
          .
        </p>
      </form>
    </div>
  );
}
