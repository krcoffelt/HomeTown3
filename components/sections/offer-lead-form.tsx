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
    <Card className="relative overflow-hidden rounded-[28px] border border-[#e4dece] bg-[linear-gradient(145deg,#faf6ed,#f3ecdf_45%,#efe7d9)] p-0 text-[#151b2d] shadow-[0_20px_60px_rgba(0,0,0,0.25)]">
      <div aria-hidden="true" className="pointer-events-none absolute right-0 top-0 h-40 w-40 rounded-full bg-[#365fdb]/10 blur-2xl" />
      <CardHeader className="relative space-y-3 border-b border-[#ddd4c2] pb-7">
        <p className="section-eyebrow text-[#365fdb]">Limited Offer</p>
        <CardTitle className="text-[clamp(1.9rem,3vw,2.4rem)] leading-[1.02] text-[#10172b]">Get your Website for only $800</CardTitle>
        <CardDescription className="text-base text-[#36405d]">
          Quick form. Clear follow-up. Response in under 24 hours.
        </CardDescription>
        <div className="inline-flex w-fit items-center rounded-full border border-[#d6cdb8] bg-[#fffdf8] px-3 py-1 text-xs font-medium tracking-wide text-[#253055]">
          2-minute form
        </div>
      </CardHeader>
      <CardContent className="pt-7">
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
              <label htmlFor="offer-name" className="mb-2 block text-xs font-semibold uppercase tracking-[0.08em] text-[#4a577b]">
                Name
              </label>
              <Input
                id="offer-name"
                name="name"
                value={values.name}
                required
                autoComplete="name"
                placeholder="Your full name"
                className="h-13 rounded-xl border border-[#d8cfbc] bg-[#fffdf8] text-[#151b2d] placeholder:text-[#7a8298] focus-visible:outline-[#365fdb]"
                onFocus={markStarted}
                onChange={(event) => setValues((prev) => ({ ...prev, name: event.target.value }))}
              />
            </div>
            <div>
              <label htmlFor="offer-businessName" className="mb-2 block text-xs font-semibold uppercase tracking-[0.08em] text-[#4a577b]">
                Business Name
              </label>
              <Input
                id="offer-businessName"
                name="businessName"
                value={values.businessName}
                required
                autoComplete="organization"
                placeholder="Business name"
                className="h-13 rounded-xl border border-[#d8cfbc] bg-[#fffdf8] text-[#151b2d] placeholder:text-[#7a8298] focus-visible:outline-[#365fdb]"
                onFocus={markStarted}
                onChange={(event) => setValues((prev) => ({ ...prev, businessName: event.target.value }))}
              />
            </div>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label htmlFor="offer-phone" className="mb-2 block text-xs font-semibold uppercase tracking-[0.08em] text-[#4a577b]">
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
                className="h-13 rounded-xl border border-[#d8cfbc] bg-[#fffdf8] text-[#151b2d] placeholder:text-[#7a8298] focus-visible:outline-[#365fdb]"
                onFocus={markStarted}
                onChange={(event) => setValues((prev) => ({ ...prev, phone: event.target.value }))}
              />
            </div>
            <div>
              <label htmlFor="offer-email" className="mb-2 block text-xs font-semibold uppercase tracking-[0.08em] text-[#4a577b]">
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
                className="h-13 rounded-xl border border-[#d8cfbc] bg-[#fffdf8] text-[#151b2d] placeholder:text-[#7a8298] focus-visible:outline-[#365fdb]"
                onFocus={markStarted}
                onChange={(event) => setValues((prev) => ({ ...prev, email: event.target.value }))}
              />
            </div>
          </div>

          {state.message ? (
            <p className={state.ok ? "text-[#177d3f]" : "text-[#c53939]"}>{state.message}</p>
          ) : null}
        </form>
      </CardContent>
      <CardFooter className="w-full border-t border-[#ddd4c2]">
        <Button
          type="submit"
          form="offer-form"
          className="h-14 w-full rounded-xl bg-[linear-gradient(135deg,#264fd3,#3f6cff)] text-lg text-white shadow-[0_10px_26px_rgba(38,79,211,0.35)] hover:bg-[linear-gradient(135deg,#1f46c3,#355fef)]"
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
