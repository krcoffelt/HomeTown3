import { cn } from "@/lib/utils/cn";
import type { ReactNode, SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function IconBase({ className, children, viewBox = "0 0 24 24", ...props }: IconProps & { children: ReactNode; viewBox?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox={viewBox}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("h-5 w-5", className)}
      {...props}
    >
      {children}
    </svg>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M5 12h14" />
      <path d="m13 5 7 7-7 7" />
    </IconBase>
  );
}

export function CheckCircleIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="m8.5 12 2.5 2.5 4.5-5" />
    </IconBase>
  );
}

export function MapPinIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M12 21s6-5.33 6-11a6 6 0 1 0-12 0c0 5.67 6 11 6 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </IconBase>
  );
}

export function ClockIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7.5v5l3 2" />
    </IconBase>
  );
}

export function UsersIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M16 19a4 4 0 0 0-8 0" />
      <circle cx="12" cy="9" r="3" />
      <path d="M18.5 18a3.5 3.5 0 0 0-2.5-3.35" />
      <path d="M5.5 18A3.5 3.5 0 0 1 8 14.65" />
    </IconBase>
  );
}

export function ThumbsUpIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M7 11v8" />
      <path d="M10 19h6a2 2 0 0 0 2-1.64l1-5.5A2 2 0 0 0 17 9h-4l.6-2.4A2.5 2.5 0 0 0 11.18 3L7 8.5V19" />
      <path d="M4 11h3v8H4z" />
    </IconBase>
  );
}

export function MessageCircleIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M20 11.5A8.5 8.5 0 0 1 7.5 19L4 20l1.1-3.1A8.5 8.5 0 1 1 20 11.5Z" />
    </IconBase>
  );
}

export function GlobeIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3a14.5 14.5 0 0 1 0 18" />
      <path d="M12 3a14.5 14.5 0 0 0 0 18" />
    </IconBase>
  );
}

export function TargetIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="12" cy="12" r="1.5" />
    </IconBase>
  );
}

export function TrendingUpIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M4 19h16" />
      <path d="M6 15.5 10 11.5l3 3L19 8.5" />
      <path d="M14 8.5h5v5" />
    </IconBase>
  );
}

export function ZapIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />
    </IconBase>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </IconBase>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M22 16.2v2.6a1.8 1.8 0 0 1-1.96 1.8A17.9 17.9 0 0 1 3.4 3.96 1.8 1.8 0 0 1 5.2 2h2.6a1.8 1.8 0 0 1 1.78 1.52l.42 2.7a1.8 1.8 0 0 1-.51 1.5l-1.38 1.38a14.5 14.5 0 0 0 6.79 6.79l1.38-1.38a1.8 1.8 0 0 1 1.5-.51l2.7.42A1.8 1.8 0 0 1 22 16.2Z" />
    </IconBase>
  );
}

export function QuoteIcon(props: IconProps) {
  const { className, ...rest } = props;

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={cn("h-5 w-5", className)}
      {...rest}
    >
      <path d="M10.4 6.2C7.7 7.45 6 9.83 6 12.9V18h5.25c.41 0 .75-.34.75-.75v-4.5c0-.41-.34-.75-.75-.75H8.4c.16-1.52 1.09-2.92 2.79-4.17.24-.18.32-.5.19-.77l-.55-1.11a.58.58 0 0 0-.43-.32Z" />
      <path d="M18.4 6.2c-2.7 1.25-4.4 3.63-4.4 6.7V18h5.25c.41 0 .75-.34.75-.75v-4.5c0-.41-.34-.75-.75-.75H16.4c.16-1.52 1.09-2.92 2.79-4.17.24-.18.32-.5.19-.77l-.55-1.11a.58.58 0 0 0-.43-.32Z" />
    </svg>
  );
}

export function SendIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M22 2 11 13" />
      <path d="m22 2-7 20-4-9-9-4Z" />
    </IconBase>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </IconBase>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M6 6 18 18" />
      <path d="M18 6 6 18" />
    </IconBase>
  );
}
