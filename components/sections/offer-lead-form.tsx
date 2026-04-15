"use client";

import { Suspense, useActionState, useEffect, useState } from "react";
import { submitOfferLead, type SubmitLeadState } from "@/app/(site)/contact/actions";
import { LeadAttributionFields } from "@/components/analytics/lead-attribution-fields";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const initialState: SubmitLeadState = { ok: false, message: "" };
const initialValues = {
  name: "",
  businessName: "",
  email: "",
  phone: "",
  websiteOrSocial: ""
};

const GOOGLE_ADS_OFFER_CONVERSION_SEND_TO = process.env.NEXT_PUBLIC_GOOGLE_ADS_OFFER_CONVERSION_SEND_TO;

function pushDataLayerEvent(eventName: string) {
  if (typeof window === "undefined") return;
  const dataLayerWindow = window as Window & { dataLayer?: Array<Record<string, string>> };
  dataLayerWindow.dataLayer = dataLayerWindow.dataLayer ?? [];
  dataLayerWindow.dataLayer.push({ event: eventName });
}

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
    pushDataLayerEvent("offer_lead_submit_success");
    fireOfferLeadConversion();
  }, [state.ok]);

  const markStarted = () => {
    if (hasStarted) return;
    setHasStarted(true);
    pushDataLayerEvent("form_start");
  };

  return (
    <div className="gradient-border rounded-2xl bg-card p-6 shadow-elevated md:p-8">
      <div className="mb-8">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Get Started</p>
        <h3 className="mt-4 text-3xl font-bold tracking-tight text-foreground">Tell me about your business and I&apos;ll follow up within 24 hours.</h3>
        <p className="mt-3 text-base leading-relaxed text-muted-foreground">
          I&apos;ll review the basics, confirm whether it fits the $800 package, and send you the clearest next step. No pressure, no hard sell.
        </p>
      </div>

      <form
        id="offer-form"
        action={action}
        className="grid gap-5"
        onSubmit={() => pushDataLayerEvent("form_submit")}
      >
        <Suspense fallback={null}>
          <LeadAttributionFields />
        </Suspense>
        <div className="grid gap-5 md:grid-cols-2">
          <div className="space-y-2">
            <label htmlFor="offer-name" className="text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">Name</label>
            <Input
              id="offer-name"
              name="name"
              required
              autoComplete="name"
              value={values.name}
              placeholder="Your full name"
              onFocus={markStarted}
              onChange={(event) => setValues((prev) => ({ ...prev, name: event.target.value }))}
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="offer-businessName" className="text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">Business Name</label>
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
        <div className="grid gap-5 md:grid-cols-2">
          <div className="space-y-2">
            <label htmlFor="offer-email" className="text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">Email</label>
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
            <label htmlFor="offer-phone" className="text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">Phone</label>
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
          <label htmlFor="offer-website" className="text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">Website or Social Link</label>
          <Input
            id="offer-website"
            name="websiteOrSocial"
            value={values.websiteOrSocial}
            placeholder="Current website, Facebook page, or Instagram link"
            onFocus={markStarted}
            onChange={(event) => setValues((prev) => ({ ...prev, websiteOrSocial: event.target.value }))}
          />
        </div>
        {state.message ? (
          <p className={state.ok ? "text-green-600" : "text-red-500"}>{state.message}</p>
        ) : null}
        <Button type="submit" form="offer-form" className="h-12 rounded-xl px-8" dataAnalytics="cta-offer-800" disabled={pending}>
          {pending ? "Sending..." : "Get My $800 Website"}
        </Button>
        <p className="text-sm text-muted-foreground">
          No pressure. Clear next steps. Fast response.
        </p>
      </form>
    </div>
  );
}
