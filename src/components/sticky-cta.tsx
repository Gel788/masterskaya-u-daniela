"use client";

import { useEffect, useState } from "react";
import { PhoneIcon } from "./icons";
import { site } from "@/lib/site";

export function StickyCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const pastHero = window.scrollY > window.innerHeight * 0.9;
      const nearBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 280;
      setVisible(pastHero && !nearBottom);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 p-4 transition-all duration-300 md:hidden ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <a
        href={`tel:${site.phoneHref}`}
        className="flex min-h-12 w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-accent px-5 py-3.5 text-sm font-semibold text-accent-ink shadow-[0_12px_40px_-8px_rgba(110,182,255,0.7)]"
      >
        <PhoneIcon className="h-4 w-4" />
        Позвонить · {site.phone}
      </a>
    </div>
  );
}
