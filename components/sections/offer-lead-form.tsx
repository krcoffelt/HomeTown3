"use client";

import { useActionState, useState } from "react";
import { submitOfferLead, type SubmitLeadState } from "@/app/(site)/contact/actions";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
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
  const payload = { event: eventName };
  const dataLayerWindow = window as Window & { dataLayer?: Array<Record<string, string>> };
  dataLayerWindow.dataLayer = dataLayerWindow.dataLayer ?? [];
  dataLayerWindow.dataLayer.push(payload);
}

export function OfferLeadForm() {
  const [state, action, pending] = useActionState(submitOfferLead, initialState);
  const [values, setValues] = useState(initialValues);
  const [hasStarted, setHasStarted] = useState(false);

  const markStarted = () => {
    if (hasStarted) return;
    setHasStarted(true);
    pushDataLayerEvent("form_start");
  };

  return (
    <Card className="p-0 shadow-soft">
      <CardHeader className="border-b border-line/70">
        <CardTitle>Get your Website for only $800</CardTitle>
        <CardDescription>Quick form. Takes about 2 minutes.</CardDescription>
      </CardHeader>
      <CardContent>
        <form
          id="offer-form"
          action={action}
          className="grid gap-4"
          onSubmit={() => {
            pushDataLayerEvent("form_submit");
          }}
        >
          <div>
            <label htmlFor="offer-name" className="mb-2 block text-sm text-muted">
              Name
            </label>
            <Input
              id="offer-name"
              name="name"
              value={values.name}
              placeholder="Your full name"
              onFocus={markStarted}
              onChange={(event) => setValues((prev) => ({ ...prev, name: event.target.value }))}
            />
          </div>
          <div>
            <label htmlFor="offer-businessName" className="mb-2 block text-sm text-muted">
              Business Name
            </label>
            <Input
              id="offer-businessName"
              name="businessName"
              value={values.businessName}
              placeholder="Business name"
              onFocus={markStarted}
              onChange={(event) => setValues((prev) => ({ ...prev, businessName: event.target.value }))}
            />
          </div>
          <div>
            <label htmlFor="offer-phone" className="mb-2 block text-sm text-muted">
              Phone Number
            </label>
            <Input
              id="offer-phone"
              name="phone"
              type="tel"
              value={values.phone}
              placeholder="(913) 991-6641"
              onFocus={markStarted}
              onChange={(event) => setValues((prev) => ({ ...prev, phone: event.target.value }))}
            />
          </div>
          <div>
            <label htmlFor="offer-email" className="mb-2 block text-sm text-muted">
              Email
            </label>
            <Input
              id="offer-email"
              name="email"
              type="email"
              value={values.email}
              placeholder="you@business.com"
              onFocus={markStarted}
              onChange={(event) => setValues((prev) => ({ ...prev, email: event.target.value }))}
            />
          </div>

          {state.message ? (
            <p className={state.ok ? "text-[#4ade80]" : "text-[#f87171]"}>{state.message}</p>
          ) : null}
        </form>
      </CardContent>
      <CardFooter className="w-full border-t border-line/70">
        <Button type="submit" form="offer-form" className="w-full" variant="primary" dataAnalytics="cta-offer-800">
          {pending ? "Sending..." : "Get Offer"}
        </Button>
      </CardFooter>
    </Card>
  );
}
