import { permanentRedirect } from "next/navigation";

export default function LegacyWebsiteOfferPage() {
  permanentRedirect("/contact");
}
