"use client";

import UnicornEmbed from "@/components/graphics/UnicornEmbed";
import Script from "next/script";

export default function UnicornHomeWrapper() {
  return (
    <div className="w-full h-full min-h-[560px]">
      {/* Load UnicornStudio only on pages that render the hero */}
      <Script
        src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js"
        strategy="afterInteractive"
      />
      {/* Render the Unicorn scene via embed project ID (CDN) */}
      <UnicornEmbed
        className="w-full h-full"
        projectId="jr3Je0XN8Fc3dt3e4tTi"
        dpi={1.5}
        scale={1}
        lazy={false}
        production={true}
      />
    </div>
  );
}
