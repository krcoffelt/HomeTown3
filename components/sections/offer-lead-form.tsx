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
  const [showDetails, setShowDetails] = useState(false);
  const emailRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!state.ok) return;
    setValues(initialValues);
    setShowDetails(false);
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

  const revealDetails = () => {
    markStarted();
    if (!emailRef.current?.checkValidity()) {
      emailRef.current?.reportValidity();
      return;
    }
    setShowDetails(true);
  };

  return (
    <div className="overflow-hidden rounded-[2rem] border border-black/8 bg-white shadow-[0_24px_64px_rgba(15,23,42,0.14)]">
      <div className="border-b border-black/6 bg-[#f8fafd] px-5 py-5 sm:px-8">
        <h3 className="text-[1.45rem] font-bold tracking-tight text-foreground sm:text-[1.85rem]">
          Start with your email.
        </h3>
        <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
          We&apos;ll reply within 24 hours. No pressure if it&apos;s not the right fit.
        </p>
      </div>

      <form
        id="offer-form"
        action={action}
        className="grid gap-4 px-5 py-5 sm:px-8 sm:py-8"
        onSubmit={() => pushDataLayerEvent(analyticsEvents.formSubmit)}
      >
        <LeadAttributionFields />

        <div className="absolute -left-[9999px] top-0 h-px w-px overflow-hidden opacity-0" aria-hidden="true">
          <label htmlFor="offer-hpt">Leave this field blank</label>
          <input id="offer-hpt" name="_hpt" type="text" tabIndex={-1} autoComplete="off" />
        </div>

        <div className="rounded-[1.5rem] border border-black/8 bg-[#fbfcfe] p-4 shadow-[0_12px_30px_rgba(15,23,42,0.05)] sm:p-5">
          <label
            htmlFor="offer-email"
            className="text-[0.76rem] font-semibold tracking-[0.01em] text-foreground/70"
          >
            Email
          </label>
          <div className="mt-3 flex flex-col gap-3">
            <Input
              id="offer-email"
              ref={emailRef}
              name="email"
              type="email"
              required
              autoComplete="email"
              value={values.email}
              placeholder="Email address"
              className="h-14 flex-1 rounded-[1.15rem] border-black/10 bg-white px-5 text-[1rem]"
              onFocus={markStarted}
              onChange={(event) => setValues((prev) => ({ ...prev, email: event.target.value }))}
            />
            {!showDetails ? (
              <Button
                type="button"
                className="h-14 w-full rounded-full px-8"
                dataAnalytics="cta-offer-800"
                onClick={revealDetails}
              >
                Continue
              </Button>
            ) : (
              <div className="rounded-[1.15rem] border border-accent/15 bg-accent/[0.06] px-4 py-3 text-sm font-medium text-foreground/78">
                Tell us a little more below and we&apos;ll send your quote.
              </div>
            )}
          </div>
          <p className="mt-3 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Reply within 24 hours · No pressure
          </p>
        </div>

        {showDetails ? (
          <div className="rounded-[1.5rem] border border-black/8 bg-white p-5 shadow-[0_12px_30px_rgba(15,23,42,0.05)] sm:p-6">
              <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-accent">
                A few more details
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Keep it simple. Just enough for us to understand the project.
              </p>
              <div className="mt-5 grid gap-4">
                <div className="space-y-2">
                  <label
                    htmlFor="offer-name"
                    className="text-[0.76rem] font-semibold tracking-[0.01em] text-foreground/70"
                  >
                    Name
                  </label>
                  <Input
                    id="offer-name"
                    name="name"
                    required={showDetails}
                    autoComplete="name"
                    value={values.name}
                    placeholder="Your name"
                    className="h-13 rounded-[1.05rem] border-black/10 bg-[#fbfcfe]"
                    onFocus={markStarted}
                    onChange={(event) => setValues((prev) => ({ ...prev, name: event.target.value }))}
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="offer-businessName"
                    className="text-[0.76rem] font-semibold tracking-[0.01em] text-foreground/70"
                  >
                    Business Name
                  </label>
                  <Input
                    id="offer-businessName"
                    name="businessName"
                    required={showDetails}
                    autoComplete="organization"
                    value={values.businessName}
                    placeholder="Business name"
                    className="h-13 rounded-[1.05rem] border-black/10 bg-[#fbfcfe]"
                    onFocus={markStarted}
                    onChange={(event) =>
                      setValues((prev) => ({ ...prev, businessName: event.target.value }))
                    }
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="offer-phone"
                    className="text-[0.76rem] font-semibold tracking-[0.01em] text-foreground/70"
                  >
                    Phone
                  </label>
                  <Input
                    id="offer-phone"
                    name="phone"
                    type="tel"
                    required={showDetails}
                    autoComplete="tel"
                    value={values.phone}
                    placeholder="Phone number"
                    className="h-13 rounded-[1.05rem] border-black/10 bg-[#fbfcfe]"
                    onFocus={markStarted}
                    onChange={(event) => setValues((prev) => ({ ...prev, phone: event.target.value }))}
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="offer-projectDetails"
                    className="text-[0.76rem] font-semibold tracking-[0.01em] text-foreground/70"
                  >
                    Project Details
                  </label>
                  <Textarea
                    id="offer-projectDetails"
                    name="projectDetails"
                    rows={4}
                    value={values.projectDetails}
                    placeholder="What does your business do, and what do you want the site to help with?"
                    className="min-h-[132px] rounded-[1.2rem] border-black/10 bg-[#fbfcfe]"
                    onFocus={markStarted}
                    onChange={(event) =>
                      setValues((prev) => ({ ...prev, projectDetails: event.target.value }))
                    }
                  />
                </div>
              </div>

              <Button
                type="submit"
                form="offer-form"
                className="mt-5 h-14 w-full rounded-full px-8"
                dataAnalytics="cta-offer-800"
                disabled={pending}
              >
                {pending ? "Sending..." : "Get My Website Quote"}
              </Button>
          </div>
        ) : null}

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

        <p className="px-1 text-xs leading-relaxed text-muted-foreground">
          By submitting, you agree to our{" "}
          <Link
            href="/privacy-policy"
            className="transition hover:text-foreground"
          >
            Privacy Policy
          </Link>{" "}
          and{" "}
          <Link
            href="/terms-of-service"
            className="transition hover:text-foreground"
          >
            Terms of Service
          </Link>
          .
        </p>
      </form>
    </div>
  );
}
