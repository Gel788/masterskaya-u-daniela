import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function SprayIcon(props: IconProps) {
  return (
    <svg {...base} stroke="currentColor" {...props}>
      <path d="M9 8.5V5a1.5 1.5 0 0 1 1.5-1.5h1A1.5 1.5 0 0 1 13 5v3.5" />
      <path d="M7.5 8.5h8l1.2 10.6a1.5 1.5 0 0 1-1.49 1.65H7.79a1.5 1.5 0 0 1-1.49-1.65L7.5 8.5Z" />
      <path d="M4.5 6.5h1.2M4 9.5h1.6M4.8 12.5h1.4" />
      <path d="M10 13.2h4M9.6 16.2h4.8" />
    </svg>
  );
}

export function HammerIcon(props: IconProps) {
  return (
    <svg {...base} stroke="currentColor" {...props}>
      <path d="M14.5 6.5 18 3l3 3-3.5 3.5" />
      <path d="M16 5 19 8" />
      <path d="M14 9 5.5 17.5a2 2 0 0 0 0 2.9l.1.1a2 2 0 0 0 2.9 0L17 12" />
      <path d="M11.2 6.8a5 5 0 0 0 6 6" />
    </svg>
  );
}

export function ArchIcon(props: IconProps) {
  return (
    <svg {...base} stroke="currentColor" {...props}>
      <path d="M3 19V11a9 9 0 0 1 18 0v8" />
      <path d="M6.5 19v-8a5.5 5.5 0 0 1 11 0v8" />
      <path d="M3 19h4M17 19h4" />
    </svg>
  );
}

export function StretchIcon(props: IconProps) {
  return (
    <svg {...base} stroke="currentColor" {...props}>
      <rect x="3.5" y="10" width="17" height="6.5" rx="1" />
      <path d="M3.5 13.2h17" />
      <path d="M7 6.5v3.5M17 6.5v3.5M7 16.5V20M17 16.5V20" />
      <path d="M5 4.5h4M15 4.5h4M5 20h4M15 20h4" />
    </svg>
  );
}

export function PolishIcon(props: IconProps) {
  return (
    <svg {...base} stroke="currentColor" {...props}>
      <circle cx="12" cy="12" r="4.5" />
      <path d="M12 3.5v2.2M12 18.3v2.2M3.5 12h2.2M18.3 12h2.2" />
      <path d="M6.3 6.3 7.9 7.9M16.1 16.1l1.6 1.6M6.3 17.7l1.6-1.6M16.1 7.9l1.6-1.6" />
    </svg>
  );
}

export function CeramicIcon(props: IconProps) {
  return (
    <svg {...base} stroke="currentColor" {...props}>
      <path d="M12 3.5 19 7v5.2c0 4.3-2.9 7.6-7 8.3-4.1-.7-7-4-7-8.3V7l7-3.5Z" />
      <path d="M9 12.2l2 2 4-4.4" />
    </svg>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <svg {...base} stroke="currentColor" {...props}>
      <path d="M5.5 4h3.2l1.3 4-2 1.6a11.5 11.5 0 0 0 5.4 5.4l1.6-2 4 1.3v3.2c0 .9-.8 1.6-1.7 1.5-8-1-13.8-6.8-14.8-14.8C4 4.8 4.6 4 5.5 4Z" />
    </svg>
  );
}

export function PinIcon(props: IconProps) {
  return (
    <svg {...base} stroke="currentColor" {...props}>
      <path d="M12 21s7-6.1 7-11.6A7 7 0 0 0 5 9.4C5 14.9 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.4" />
    </svg>
  );
}

export function ClockIcon(props: IconProps) {
  return (
    <svg {...base} stroke="currentColor" {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <svg {...base} stroke="currentColor" {...props}>
      <path d="M5 12.5 9.5 17 19 6.5" />
    </svg>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <svg {...base} stroke="currentColor" {...props}>
      <path d="M4.5 12h15M13.5 5.5 19 11l-5.5 5.5" />
    </svg>
  );
}

export const serviceIcons = {
  spray: SprayIcon,
  hammer: HammerIcon,
  arch: ArchIcon,
  stretch: StretchIcon,
  polish: PolishIcon,
  ceramic: CeramicIcon,
};
