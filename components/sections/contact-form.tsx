"use client";

import { useActionState } from "react";
import { submitLead, type SubmitLeadState } from "@/app/(site)/contact/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { services } from "@/data/services";

const initialState: SubmitLeadState = { ok: false, message: "" };

export function ContactForm() {
  const [state, action, pending] = useActionState(submitLead, initialState);

  return (
    <form id="form" action={action} className="grid gap-4 rounded-lg border border-line bg-surface p-6 shadow-soft">
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm text-muted">
            Name
          </label>
          <Input id="name" name="name" required />
        </div>
        <div>
          <label htmlFor="businessName" className="mb-2 block text-sm text-muted">
            Business Name
          </label>
          <Input id="businessName" name="businessName" required />
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label htmlFor="email" className="mb-2 block text-sm text-muted">
            Email
          </label>
          <Input id="email" name="email" type="email" required />
        </div>
        <div>
          <label htmlFor="phone" className="mb-2 block text-sm text-muted">
            Phone
          </label>
          <Input id="phone" name="phone" type="tel" />
        </div>
      </div>
      <div>
        <label htmlFor="serviceNeeded" className="mb-2 block text-sm text-muted">
          Service Needed
        </label>
        <Select id="serviceNeeded" name="serviceNeeded" required defaultValue="">
          <option value="" disabled>
            Select a service
          </option>
          {services.map((service) => (
            <option key={service.slug} value={service.title}>
              {service.title}
            </option>
          ))}
        </Select>
      </div>
      <div>
        <label htmlFor="projectDetails" className="mb-2 block text-sm text-muted">
          Project Details
        </label>
        <Textarea id="projectDetails" name="projectDetails" required />
      </div>
      {state.message ? (
        <p className={state.ok ? "text-[#4ade80]" : "text-[#f87171]"}>{state.message}</p>
      ) : null}
      <Button type="submit" className="mt-2 w-fit" variant="primary">
        {pending ? "Sending..." : "Get Started"}
      </Button>
    </form>
  );
}
