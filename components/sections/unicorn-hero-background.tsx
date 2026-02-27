"use client";

import dynamic from "next/dynamic";

const UnicornScene = dynamic(() => import("unicornstudio-react/next"), {
  ssr: false
});

export function UnicornHeroBackground() {
  return (
    <div className="h-full w-full">
      <UnicornScene
        projectId="67bMayuIex6ZsrkBXpsY"
        sdkUrl="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.0.5/dist/unicornStudio.umd.js"
        width="100%"
        height="100%"
      />
    </div>
  );
}

