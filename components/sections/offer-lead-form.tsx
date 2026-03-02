"use client";

import { useActionState, useEffect, useState } from "react";
import { submitOfferLead, type SubmitLeadState } from "@/app/(site)/contact/actions";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const initialState: SubmitLeadState = { ok: false, message: "" };
const initialValues = {
  name: "",
  businessName: "",
  email: "",
  phone: ""
};

function pushDataLayerEvent(eventName: string) {
  if (typeof window === "undefined") return;
  const dataLayerWindow = window as Window & { dataLayer?: Array<Record<string, string>> };
  dataLayerWindow.dataLayer = dataLayerWindow.dataLayer ?? [];
  dataLayerWindow.dataLayer.push({ event: eventName });
}

export function OfferLeadForm() {
  const [state, action, pending] = useActionState(submitOfferLead, initialState);
  const [values, setValues] = useState(initialValues);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (!state.ok) return;
    setValues(initialValues);
  }, [state.ok]);

  const markStarted = () => {
    if (hasStarted) return;
    setHasStarted(true);
    pushDataLayerEvent("form_start");
  };

  return (
    <Card className="relative overflow-hidden border-white/20 bg-[linear-gradient(160deg,rgba(255,255,255,0.05),rgba(255,255,255,0.01)_42%,rgba(6,11,23,0.94)_100%)] p-0 shadow-soft">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-[radial-gradient(circle_at_30%_0%,rgba(141,175,255,0.35),transparent_60%)]"
      />
      <CardHeader className="relative border-b border-white/20">
        <CardTitle className="text-[clamp(1.7rem,3vw,2.2rem)] text-white">Get your Website for only $800</CardTitle>
        <CardDescription className="text-base text-white/85">
          Quick form. Clear follow-up. Response in under 24 hours.
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <form
          id="offer-form"
          action={action}
          className="grid gap-5"
          onSubmit={() => {
            pushDataLayerEvent("form_submit");
          }}
        >
          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label htmlFor="offer-name" className="mb-2 block text-sm font-medium text-white/90">
                Name
              </label>
              <Input
                id="offer-name"
                name="name"
                value={values.name}
                required
                autoComplete="name"
                placeholder="Your full name"
                className="h-14 rounded-lg border-white/30 bg-[#0f1a30]/85 text-white placeholder:text-white/55 focus-visible:outline-[#7da7ff]"
                onFocus={markStarted}
                onChange={(event) => setValues((prev) => ({ ...prev, name: event.target.value }))}
              />
            </div>
            <div>
              <label htmlFor="offer-businessName" className="mb-2 block text-sm font-medium text-white/90">
                Business Name
              </label>
              <Input
                id="offer-businessName"
                name="businessName"
                value={values.businessName}
                required
                autoComplete="organization"
                placeholder="Business name"
                className="h-14 rounded-lg border-white/30 bg-[#0f1a30]/85 text-white placeholder:text-white/55 focus-visible:outline-[#7da7ff]"
                onFocus={markStarted}
                onChange={(event) => setValues((prev) => ({ ...prev, businessName: event.target.value }))}
              />
            </div>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label htmlFor="offer-phone" className="mb-2 block text-sm font-medium text-white/90">
                Phone Number
              </label>
              <Input
                id="offer-phone"
                name="phone"
                type="tel"
                value={values.phone}
                required
                autoComplete="tel"
                placeholder="(913) 991-6641"
                className="h-14 rounded-lg border-white/30 bg-[#0f1a30]/85 text-white placeholder:text-white/55 focus-visible:outline-[#7da7ff]"
                onFocus={markStarted}
                onChange={(event) => setValues((prev) => ({ ...prev, phone: event.target.value }))}
              />
            </div>
            <div>
              <label htmlFor="offer-email" className="mb-2 block text-sm font-medium text-white/90">
                Email
              </label>
              <Input
                id="offer-email"
                name="email"
                type="email"
                value={values.email}
                required
                autoComplete="email"
                placeholder="you@business.com"
                className="h-14 rounded-lg border-white/30 bg-[#0f1a30]/85 text-white placeholder:text-white/55 focus-visible:outline-[#7da7ff]"
                onFocus={markStarted}
                onChange={(event) => setValues((prev) => ({ ...prev, email: event.target.value }))}
              />
            </div>
          </div>

          {state.message ? (
            <p className={state.ok ? "text-[#4ade80]" : "text-[#f87171]"}>{state.message}</p>
          ) : null}
        </form>
      </CardContent>
      <CardFooter className="w-full border-t border-white/20">
        <Button
          type="submit"
          form="offer-form"
          className="h-14 w-full rounded-lg text-lg"
          variant="primary"
          dataAnalytics="cta-offer-800"
          disabled={pending}
        >
          {pending ? "Sending..." : "Get Offer"}
        </Button>
      </CardFooter>
    </Card>
  );
}
