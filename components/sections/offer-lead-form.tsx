"use client";

import { useActionState, useState } from "react";
import { submitLead, type SubmitLeadState } from "@/app/(site)/contact/actions";
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
import { ShineBorder } from "@/components/ui/shine-border";

const initialState: SubmitLeadState = { ok: false, message: "" };
const initialValues = {
  name: "",
  businessName: "",
  email: ""
};

function pushDataLayerEvent(eventName: string) {
  if (typeof window === "undefined") return;
  const payload = { event: eventName };
  const dataLayerWindow = window as Window & { dataLayer?: Array<Record<string, string>> };
  dataLayerWindow.dataLayer = dataLayerWindow.dataLayer ?? [];
  dataLayerWindow.dataLayer.push(payload);
}

export function OfferLeadForm() {
  const [state, action, pending] = useActionState(submitLead, initialState);
  const [values, setValues] = useState(initialValues);
  const [step, setStep] = useState<1 | 2>(1);
  const [hasStarted, setHasStarted] = useState(false);

  const markStarted = () => {
    if (hasStarted) return;
    setHasStarted(true);
    pushDataLayerEvent("form_start");
  };

  const canContinue =
    values.name.trim().length >= 2 &&
    values.businessName.trim().length >= 2 &&
    values.email.includes("@");

  return (
    <Card className="relative overflow-hidden p-0 shadow-soft">
      <ShineBorder shineColor={["#6ea2ff", "#95f2ff", "#d8b5ff"]} />
      <CardHeader>
        <CardTitle>Claim My $800 Website</CardTitle>
        <CardDescription>2-step form. Takes 2 minutes.</CardDescription>
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
          <input type="hidden" name="serviceNeeded" value="Website Design" />
          <input type="hidden" name="projectDetails" value="Website offer landing page inquiry." />
          <input type="hidden" name="phone" value="" />

          {step === 1 ? (
            <>
              <div>
                <label htmlFor="offer-name" className="mb-2 block text-sm text-muted">
                  Name
                </label>
                <Input
                  id="offer-name"
                  name="name"
                  required
                  value={values.name}
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
                  required
                  value={values.businessName}
                  onFocus={markStarted}
                  onChange={(event) =>
                    setValues((prev) => ({ ...prev, businessName: event.target.value }))
                  }
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
                  required
                  value={values.email}
                  onFocus={markStarted}
                  onChange={(event) => setValues((prev) => ({ ...prev, email: event.target.value }))}
                />
              </div>
            </>
          ) : (
            <div className="rounded-md border border-line bg-surface-elevated p-4">
              <p className="text-sm font-medium text-ink">Step 2: Confirm and submit</p>
              <p className="mt-2 text-sm text-muted">
                We will review your info and send next steps within 24 hours.
              </p>
              <p className="mt-4 text-sm text-muted">
                <span className="text-ink">Name:</span> {values.name}
              </p>
              <p className="text-sm text-muted">
                <span className="text-ink">Business:</span> {values.businessName}
              </p>
              <p className="text-sm text-muted">
                <span className="text-ink">Email:</span> {values.email}
              </p>
            </div>
          )}

          {state.message ? (
            <p className={state.ok ? "text-[#4ade80]" : "text-[#f87171]"}>{state.message}</p>
          ) : null}
        </form>
      </CardContent>
      <CardFooter className="w-full gap-3">
        {step === 1 ? (
          <Button
            type="button"
            className="w-full"
            variant="primary"
            dataAnalytics="cta-offer-800"
            onClick={() => setStep(2)}
            disabled={!canContinue}
          >
            Continue
          </Button>
        ) : (
          <>
            <Button type="button" className="w-full" variant="secondary" onClick={() => setStep(1)}>
              Back
            </Button>
            <Button
              type="submit"
              form="offer-form"
              className="w-full"
              variant="primary"
              dataAnalytics="cta-offer-800"
            >
              {pending ? "Sending..." : "Claim My $800 Website"}
            </Button>
          </>
        )}
      </CardFooter>
    </Card>
  );
}
