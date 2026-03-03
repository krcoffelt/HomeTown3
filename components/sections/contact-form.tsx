"use client";

import { useActionState, useEffect, useState } from "react";
import { submitLead, type SubmitLeadState } from "@/app/(site)/contact/actions";
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

export function ContactForm() {
  const [state, action, pending] = useActionState(submitLead, initialState);
  const [values, setValues] = useState(initialValues);

  useEffect(() => {
    if (!state.ok) return;
    setValues(initialValues);
  }, [state.ok]);

  return (
    <Card className="relative overflow-hidden rounded-[28px] border border-[#e7e7e7] bg-white p-0 text-[#151b2d] shadow-[0_20px_60px_rgba(0,0,0,0.25)]">
      <div aria-hidden="true" className="pointer-events-none absolute right-0 top-0 h-40 w-40 rounded-full bg-[#365fdb]/10 blur-2xl" />
      <CardHeader className="relative space-y-3 border-b border-[#e6e6e6] pb-7">
        <p className="section-eyebrow text-[#365fdb]">Get Started</p>
        <CardTitle className="text-[clamp(1.9rem,3vw,2.4rem)] leading-[1.02] text-[#10172b]">Tell us about your project</CardTitle>
        <CardDescription className="text-base text-[#36405d]">
          Quick form. Clear follow-up. Response in under 24 hours.
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-7">
        <form id="contact-form" action={action} className="grid gap-5">
          <input type="hidden" name="serviceNeeded" value="Website Design" />
          <input type="hidden" name="projectDetails" value="Homepage/contact form inquiry." />
          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label htmlFor="contact-name" className="mb-2 block text-xs font-semibold uppercase tracking-[0.08em] text-[#4a577b]">
                Name
              </label>
              <Input
                id="contact-name"
                name="name"
                value={values.name}
                required
                autoComplete="name"
                placeholder="Your full name"
                className="h-16 rounded-xl border border-[#d7dbe4] bg-[#f4f6fa] text-[#151b2d] placeholder:text-[#7a8298] focus-visible:outline-[#365fdb]"
                onChange={(event) => setValues((prev) => ({ ...prev, name: event.target.value }))}
              />
            </div>
            <div>
              <label htmlFor="contact-businessName" className="mb-2 block text-xs font-semibold uppercase tracking-[0.08em] text-[#4a577b]">
                Business Name
              </label>
              <Input
                id="contact-businessName"
                name="businessName"
                value={values.businessName}
                required
                autoComplete="organization"
                placeholder="Business name"
                className="h-16 rounded-xl border border-[#d7dbe4] bg-[#f4f6fa] text-[#151b2d] placeholder:text-[#7a8298] focus-visible:outline-[#365fdb]"
                onChange={(event) => setValues((prev) => ({ ...prev, businessName: event.target.value }))}
              />
            </div>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label htmlFor="contact-phone" className="mb-2 block text-xs font-semibold uppercase tracking-[0.08em] text-[#4a577b]">
                Phone Number
              </label>
              <Input
                id="contact-phone"
                name="phone"
                type="tel"
                value={values.phone}
                required
                autoComplete="tel"
                placeholder="(913) 991-6641"
                className="h-16 rounded-xl border border-[#d7dbe4] bg-[#f4f6fa] text-[#151b2d] placeholder:text-[#7a8298] focus-visible:outline-[#365fdb]"
                onChange={(event) => setValues((prev) => ({ ...prev, phone: event.target.value }))}
              />
            </div>
            <div>
              <label htmlFor="contact-email" className="mb-2 block text-xs font-semibold uppercase tracking-[0.08em] text-[#4a577b]">
                Email
              </label>
              <Input
                id="contact-email"
                name="email"
                type="email"
                value={values.email}
                required
                autoComplete="email"
                placeholder="you@business.com"
                className="h-16 rounded-xl border border-[#d7dbe4] bg-[#f4f6fa] text-[#151b2d] placeholder:text-[#7a8298] focus-visible:outline-[#365fdb]"
                onChange={(event) => setValues((prev) => ({ ...prev, email: event.target.value }))}
              />
            </div>
          </div>

          {state.message ? (
            <p className={state.ok ? "text-[#177d3f]" : "text-[#c53939]"}>{state.message}</p>
          ) : null}
        </form>
      </CardContent>
      <CardFooter className="w-full border-t border-[#e6e6e6]">
        <Button
          type="submit"
          form="contact-form"
          className="h-14 w-full rounded-xl bg-[linear-gradient(135deg,#264fd3,#3f6cff)] text-lg text-white shadow-[0_10px_26px_rgba(38,79,211,0.35)] hover:bg-[linear-gradient(135deg,#1f46c3,#355fef)]"
          variant="primary"
          disabled={pending}
        >
          {pending ? "Sending..." : "Get Started"}
        </Button>
      </CardFooter>
    </Card>
  );
}
