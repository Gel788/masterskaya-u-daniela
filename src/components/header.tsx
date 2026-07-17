"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { navLinks, site } from "@/lib/site";
import { PhoneIcon } from "./icons";

export function Header() {
  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, []);

  function openMenu() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setClosing(false);
    setOpen(true);
  }

  function closeMenu() {
    setOpen(false);
    setClosing(true);
    closeTimer.current = setTimeout(() => setClosing(false), 160);
  }

  const menuVisible = open || closing;

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-black/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
        <Link
          href="#top"
          onClick={closeMenu}
          className="font-display cursor-pointer text-[15px] font-semibold tracking-tight text-paper"
        >
          Мастерская <span className="text-muted">у Даниела</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="cursor-pointer text-sm text-paper/70 transition-colors hover:text-paper"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={`tel:${site.phoneHref}`}
          className="hidden cursor-pointer items-center gap-2 text-sm font-medium text-paper transition-colors hover:text-accent md:inline-flex"
        >
          <PhoneIcon className="h-4 w-4 text-accent" />
          {site.phone}
        </a>

        <div className="relative md:hidden">
          <button
            type="button"
            onClick={() => (open ? closeMenu() : openMenu())}
            aria-expanded={open}
            aria-label={open ? "Закрыть меню" : "Открыть меню"}
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-line-strong bg-surface/80 backdrop-blur"
          >
            <span className="relative block h-3.5 w-4">
              <span
                className={`absolute left-0 top-0 h-[1.5px] w-full bg-paper transition-transform ${
                  open ? "translate-y-[6px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 bottom-0 h-[1.5px] w-full bg-paper transition-transform ${
                  open ? "-translate-y-[6px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>

          {menuVisible ? (
            <nav
              data-origin="top-right"
              className={`t-dropdown absolute right-0 top-[calc(100%+8px)] w-56 rounded-2xl border border-line-strong bg-surface/95 p-2 backdrop-blur-xl ${
                open ? "is-open" : ""
              } ${closing ? "is-closing" : ""}`}
            >
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="block cursor-pointer rounded-xl px-3 py-2.5 text-sm text-paper/90 hover:bg-white/5"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={`tel:${site.phoneHref}`}
                onClick={closeMenu}
                className="mt-1 flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-accent px-3 py-2.5 text-sm font-semibold text-accent-ink"
              >
                <PhoneIcon className="h-4 w-4" />
                Позвонить
              </a>
            </nav>
          ) : null}
        </div>
      </div>
    </header>
  );
}
