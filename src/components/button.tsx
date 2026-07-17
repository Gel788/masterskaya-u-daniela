import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  icon?: ReactNode;
  className?: string;
};

export function Button({
  href,
  children,
  variant = "primary",
  icon,
  className = "",
}: ButtonProps) {
  const base =
    "group inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ink active:scale-[0.98]";

  const styles =
    variant === "primary"
      ? "bg-accent text-accent-ink shadow-[0_0_0_1px_rgba(142,197,255,0.25),0_14px_40px_-12px_rgba(142,197,255,0.55)] hover:bg-accent-strong"
      : "border border-line-strong text-paper hover:border-paper/35 hover:bg-white/[0.04]";

  const isExternal = href.startsWith("http") || href.startsWith("tel:");

  if (isExternal) {
    return (
      <a href={href} className={`${base} ${styles} ${className}`}>
        {children}
        {icon}
      </a>
    );
  }

  return (
    <Link href={href} className={`${base} ${styles} ${className}`}>
      {children}
      {icon}
    </Link>
  );
}
