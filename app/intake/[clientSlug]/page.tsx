import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getIntakeClient } from "@/lib/intake/config";
import { IntakeForm } from "@/components/intake/intake-form";

export const metadata: Metadata = {
  title: "Business listing intake",
  description: "Your private business listing intake with Hometown.",
  robots: { index: false, follow: false, googleBot: { index: false, follow: false, noimageindex: true } },
  referrer: "no-referrer"
};
export default async function IntakePage({ params }: { params: Promise<{ clientSlug: string }> }) {
  const { clientSlug } = await params;
  const client = getIntakeClient(clientSlug);
  if (!client) notFound();
  return <IntakeForm client={client} slug={clientSlug} />;
}
