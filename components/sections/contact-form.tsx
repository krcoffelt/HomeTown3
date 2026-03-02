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
import { Select } from "@/components/ui/select";
import { ShineBorder } from "@/components/ui/shine-border";
import { Textarea } from "@/components/ui/textarea";
import { services } from "@/data/services";

const initialState: SubmitLeadState = { ok: false, message: "" };
const initialValues = {
  name: "",
  businessName: "",
  email: "",
  phone: "",
  serviceNeeded: "Website Design",
  projectDetails: ""
};

export function ContactForm() {
  const [state, action, pending] = useActionState(submitLead, initialState);
  const [values, setValues] = useState(initialValues);

  return (
    <Card className="relative overflow-hidden p-0 shadow-soft">
      <ShineBorder shineColor={["#6ea2ff", "#95f2ff", "#d8b5ff"]} />
      <CardHeader>
        <CardTitle>Let&apos;s get your website live</CardTitle>
        <CardDescription>Share the details below and we&apos;ll follow up with exact next steps.</CardDescription>
      </CardHeader>
      <CardContent>
        <form id="form" action={action} className="grid gap-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm text-muted">
                Name
              </label>
              <Input
                id="name"
                name="name"
                required
                value={values.name}
                onChange={(event) => setValues((prev) => ({ ...prev, name: event.target.value }))}
              />
            </div>
            <div>
              <label htmlFor="businessName" className="mb-2 block text-sm text-muted">
                Business Name
              </label>
              <Input
                id="businessName"
                name="businessName"
                required
                value={values.businessName}
                onChange={(event) => setValues((prev) => ({ ...prev, businessName: event.target.value }))}
              />
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label htmlFor="email" className="mb-2 block text-sm text-muted">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                value={values.email}
                onChange={(event) => setValues((prev) => ({ ...prev, email: event.target.value }))}
              />
            </div>
            <div>
              <label htmlFor="phone" className="mb-2 block text-sm text-muted">
                Phone
              </label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={values.phone}
                onChange={(event) => setValues((prev) => ({ ...prev, phone: event.target.value }))}
              />
            </div>
          </div>
          <div>
            <label htmlFor="serviceNeeded" className="mb-2 block text-sm text-muted">
              Service Needed
            </label>
            <Select
              id="serviceNeeded"
              name="serviceNeeded"
              required
              value={values.serviceNeeded}
              onChange={(event) => setValues((prev) => ({ ...prev, serviceNeeded: event.target.value }))}
            >
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
            <Textarea
              id="projectDetails"
              name="projectDetails"
              required
              value={values.projectDetails}
              onChange={(event) => setValues((prev) => ({ ...prev, projectDetails: event.target.value }))}
            />
          </div>
          {state.message ? (
            <p className={state.ok ? "text-[#4ade80]" : "text-[#f87171]"}>{state.message}</p>
          ) : null}
        </form>
      </CardContent>
      <CardFooter>
        <Button type="submit" form="form" className="w-full" variant="primary">
          {pending ? "Sending..." : "Get Started"}
        </Button>
      </CardFooter>
    </Card>
  );
}
