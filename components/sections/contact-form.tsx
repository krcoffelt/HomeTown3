"use client";

import { Suspense, useActionState, useEffect, useState } from "react";
import { submitLead, type SubmitLeadState } from "@/app/(site)/contact/actions";
import { LeadAttributionFields } from "@/components/analytics/lead-attribution-fields";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SendIcon } from "@/components/ui/site-icons";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils/cn";

const initialState: SubmitLeadState = { ok: false, message: "" };
const initialValues = {
  name: "",
  businessName: "",
  email: "",
  phone: "",
  projectDetails: ""
};

interface ContactFormProps {
  dark?: boolean;
}

export function ContactForm({ dark = false }: ContactFormProps) {
  const [state, action, pending] = useActionState(submitLead, initialState);
  const [values, setValues] = useState(initialValues);

  useEffect(() => {
    if (!state.ok) return;
    setValues(initialValues);
  }, [state.ok]);

  const labelClass = cn("mb-2 block text-xs font-bold uppercase tracking-[0.2em]", dark ? "text-primary-foreground/70" : "text-muted-foreground");
  const fieldClass = cn(
    dark
      ? "border-primary-foreground/12 bg-primary-foreground/[0.04] text-primary-foreground placeholder:text-primary-foreground/40 focus-visible:outline-primary-foreground"
      : "border-border bg-background text-foreground placeholder:text-muted-foreground"
  );

  return (
    <div className={cn("rounded-2xl border p-6 md:p-8", dark ? "border-primary-foreground/12 bg-accent text-accent-foreground" : "border-border bg-card shadow-elevated")}>
      <div className="mb-8">
        <p className={cn("text-xs font-bold uppercase tracking-[0.2em]", dark ? "text-accent-foreground/80" : "text-accent")}>Get Started</p>
        <h3 className={cn("mt-4 text-3xl font-bold tracking-tight", dark ? "text-accent-foreground" : "text-foreground")}>
          Tell us about your business
        </h3>
        <p className={cn("mt-3 text-base leading-relaxed", dark ? "text-accent-foreground/85" : "text-muted-foreground")}>
          Quick form. Clear follow-up. Response in under 24 hours.
        </p>
      </div>

      <form id="contact-form" action={action} className="grid gap-5">
        <input type="hidden" name="serviceNeeded" value="General Inquiry" />
        <Suspense fallback={null}>
          <LeadAttributionFields />
        </Suspense>
        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label htmlFor="contact-name" className={labelClass}>Your Name</label>
            <Input
              id="contact-name"
              name="name"
              required
              autoComplete="name"
              value={values.name}
              className={fieldClass}
              placeholder="Your full name"
              onChange={(event) => setValues((prev) => ({ ...prev, name: event.target.value }))}
            />
          </div>
          <div>
            <label htmlFor="contact-businessName" className={labelClass}>Business Name</label>
            <Input
              id="contact-businessName"
              name="businessName"
              required
              autoComplete="organization"
              value={values.businessName}
              className={fieldClass}
              placeholder="Your business name"
              onChange={(event) => setValues((prev) => ({ ...prev, businessName: event.target.value }))}
            />
          </div>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label htmlFor="contact-email" className={labelClass}>Email</label>
            <Input
              id="contact-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              value={values.email}
              className={fieldClass}
              placeholder="you@business.com"
              onChange={(event) => setValues((prev) => ({ ...prev, email: event.target.value }))}
            />
          </div>
          <div>
            <label htmlFor="contact-phone" className={labelClass}>Phone</label>
            <Input
              id="contact-phone"
              name="phone"
              type="tel"
              required
              autoComplete="tel"
              value={values.phone}
              className={fieldClass}
              placeholder="(913) 991-6641"
              onChange={(event) => setValues((prev) => ({ ...prev, phone: event.target.value }))}
            />
          </div>
        </div>
        <div>
          <label htmlFor="contact-projectDetails" className={labelClass}>Tell us about your business</label>
          <Textarea
            id="contact-projectDetails"
            name="projectDetails"
            required
            rows={4}
            value={values.projectDetails}
            className={fieldClass}
            placeholder="What do you do, what do you need, and what would make this a win?"
            onChange={(event) => setValues((prev) => ({ ...prev, projectDetails: event.target.value }))}
          />
        </div>
        {state.message ? (
          <p className={cn("text-sm", state.ok ? "text-green-500" : "text-red-500", dark && state.ok && "text-accent-foreground", dark && !state.ok && "text-red-200")}>
            {state.message}
          </p>
        ) : null}
        <Button type="submit" className={cn("h-12 rounded-xl px-8", dark ? "bg-foreground text-primary-foreground hover:bg-primary-glow" : "bg-[linear-gradient(135deg,hsl(var(--primary))_0%,hsl(var(--primary-glow))_100%)]")}>
          {pending ? "Sending..." : "Send Message"}
          <SendIcon className="h-4 w-4" />
        </Button>
      </form>
    </div>
  );
}
