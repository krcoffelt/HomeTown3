"use client";

import type { ReactNode } from "react";
import { pushDataLayerEvent } from "@/lib/analytics/events";

interface TrackedAnchorProps {
  href: string;
  eventName?: string;
  className?: string;
  children: ReactNode;
  target?: string;
  rel?: string;
}

export function TrackedAnchor({ href, eventName, className, children, target, rel }: TrackedAnchorProps) {
  return (
    <a
      href={href}
      className={className}
      target={target}
      rel={rel}
      onClick={eventName ? () => pushDataLayerEvent(eventName) : undefined}
    >
      {children}
    </a>
  );
}
