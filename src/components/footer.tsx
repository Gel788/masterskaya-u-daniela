import { navLinks, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-8 sm:px-8 sm:py-10">
      <div className="mx-auto flex max-w-5xl flex-col gap-5">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-display text-sm font-semibold text-paper">
            {site.name}
          </p>
          <nav className="flex flex-wrap gap-x-5 gap-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted transition-colors hover:text-paper"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="flex flex-col gap-1 text-xs text-muted sm:flex-row sm:justify-between">
          <p>
            {site.address} · {site.phone}
          </p>
          <p>
            © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
