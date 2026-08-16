import { permanentRedirect } from "next/navigation";

export default function LegacyWebsiteCostPage() {
  permanentRedirect("/services/website-design");
}
