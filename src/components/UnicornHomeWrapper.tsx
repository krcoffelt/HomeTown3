"use client";

import Script from "next/script";
import UnicornEmbed from "@/components/graphics/UnicornEmbed";

export default function UnicornHomeWrapper() {
  return (
    <div className="w-full h-full min-h-[560px]">
      {/* Load a local copy of UnicornStudio to avoid CDN flakiness */}
      <Script src="/vendor/unicornStudio.umd.v1.4.29.js" strategy="afterInteractive" />

      {/* Render the Unicorn scene from a local JSON file */}
      <UnicornEmbed
        className="w-full h-full"
        jsonPath="/unicorn/hero.json"
        dpi={1.5}
        scale={1}
        lazy={false}
        production={true}
      />
    </div>
  );
}
