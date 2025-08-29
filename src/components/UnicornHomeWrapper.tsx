"use client";
import UnicornScene from "unicornstudio-react/next";

export default function UnicornHomeWrapper() {
  return (
    <div className="w-full h-full min-h-[560px]">
      <UnicornScene
        jsonFilePath="/unicorn/hero.json"
        width="100%"
        height="100%"
        dpi={1.5}
        fps={60}
        scale={1}
        production
        altText="Animated Hometown scene"
        ariaLabel="Decorative animation"
        lazyLoad={false}
      />
    </div>
  );
}
