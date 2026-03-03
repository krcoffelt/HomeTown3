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
    <Card className="relative overflow-hidden rounded-[30px] border border-[#e2e5ed] bg-white p-0 text-[#151b2d] shadow-[0_18px_46px_rgba(5,9,18,0.14)]">
      <CardHeader className="relative space-y-3 border-b border-[#e5e8ef] pb-8">
        <p className="section-eyebrow text-[#365fdb]">Get Started</p>
        <CardTitle className="text-[clamp(2rem,3vw,2.6rem)] leading-[1.04] text-[#10172b]">Tell us about your project</CardTitle>
        <CardDescription className="text-[1.08rem] text-[#33415f]">
          Quick form. Clear follow-up. Response in under 24 hours.
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-8">
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
                className="h-[4.1rem] rounded-2xl border border-[#d5dbe7] bg-[#f2f4f8] px-5 text-[1.02rem] text-[#151b2d] placeholder:text-[#77819a] focus-visible:outline-[#365fdb]"
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
                className="h-[4.1rem] rounded-2xl border border-[#d5dbe7] bg-[#f2f4f8] px-5 text-[1.02rem] text-[#151b2d] placeholder:text-[#77819a] focus-visible:outline-[#365fdb]"
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
                className="h-[4.1rem] rounded-2xl border border-[#d5dbe7] bg-[#f2f4f8] px-5 text-[1.02rem] text-[#151b2d] placeholder:text-[#77819a] focus-visible:outline-[#365fdb]"
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
                className="h-[4.1rem] rounded-2xl border border-[#d5dbe7] bg-[#f2f4f8] px-5 text-[1.02rem] text-[#151b2d] placeholder:text-[#77819a] focus-visible:outline-[#365fdb]"
                onChange={(event) => setValues((prev) => ({ ...prev, email: event.target.value }))}
              />
            </div>
          </div>

          {state.message ? (
            <p className={state.ok ? "text-[#177d3f]" : "text-[#c53939]"}>{state.message}</p>
          ) : null}
        </form>
      </CardContent>
      <CardFooter className="w-full border-t border-[#e5e8ef]">
        <Button
          type="submit"
          form="contact-form"
          className="h-14 w-full rounded-2xl bg-[linear-gradient(135deg,#264fd3,#3f6cff)] text-lg text-white shadow-[0_10px_26px_rgba(38,79,211,0.35)] hover:bg-[linear-gradient(135deg,#1f46c3,#355fef)]"
          variant="primary"
          disabled={pending}
        >
          {pending ? "Sending..." : "Get Started"}
        </Button>
      </CardFooter>
    </Card>
  );
}
