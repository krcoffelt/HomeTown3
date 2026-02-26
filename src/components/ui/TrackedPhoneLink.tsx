'use client';

import { type MouseEvent, type ReactNode } from 'react';
import { trackConversionEvent, type ConversionEventName } from '@/lib/analytics';

type TrackedPhoneLinkProps = {
  href: string;
  eventName: ConversionEventName;
  location: string;
  className?: string;
  children: ReactNode;
  ariaLabel?: string;
  tabIndex?: number;
};

export default function TrackedPhoneLink({
  href,
  eventName,
  location,
  className,
  children,
  ariaLabel,
  tabIndex,
}: TrackedPhoneLinkProps) {
  const onClick = (_event: MouseEvent<HTMLAnchorElement>) => {
    trackConversionEvent(eventName, location);
  };

  return (
    <a href={href} className={className} onClick={onClick} aria-label={ariaLabel} tabIndex={tabIndex}>
      {children}
    </a>
  );
}
