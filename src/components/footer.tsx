import { navLinks, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="relative bg-ink px-4 py-10 sm:px-8 sm:py-12">
      <div className="relative mx-auto max-w-5xl">
        <div className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center sm:gap-6">
          <div>
            <p className="font-display text-base font-semibold text-paper">
              {site.name}
            </p>
            <p className="mt-1 text-sm text-muted">{site.address}</p>
          </div>
          <nav className="flex flex-wrap gap-x-5 gap-y-2 sm:gap-x-7 sm:gap-y-3">
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
        <div className="mt-6 flex flex-col gap-2 pt-5 text-xs text-muted sm:mt-8 sm:flex-row sm:items-center sm:justify-between sm:pt-6">
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
