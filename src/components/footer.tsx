import { navLinks, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="relative border-t border-white/15 bg-ink px-5 py-12 sm:px-8">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 flex items-center gap-4 px-5 sm:px-8"
        aria-hidden
      >
        <div className="h-px flex-1 bg-white/20" />
        <span className="font-display text-[9px] uppercase tracking-[0.28em] text-white/35">
          конец · линия
        </span>
        <div className="h-px flex-1 bg-white/20" />
      </div>

      <div className="relative mx-auto max-w-5xl pt-6">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <p className="font-display text-base font-semibold text-paper">
              {site.name}
            </p>
            <p className="mt-1 text-sm text-muted">{site.address}</p>
          </div>
          <nav className="flex flex-wrap gap-x-7 gap-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="cursor-pointer text-sm text-muted transition-colors hover:text-paper"
              >
                {link.label}
              </a>
            ))}
            <a
              href={`tel:${site.phoneHref}`}
              className="cursor-pointer text-sm font-medium text-paper transition-colors hover:text-accent"
            >
              {site.phone}
            </a>
          </nav>
        </div>
        <div className="mt-8 flex flex-col gap-2 border-t border-white/15 pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}
          </p>
          <p>
            {site.hours} · {site.hoursSecondary}
          </p>
        </div>
      </div>
    </footer>
  );
}
