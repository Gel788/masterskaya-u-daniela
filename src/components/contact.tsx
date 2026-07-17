import { Button } from "./button";
import { ArrowRightIcon, ClockIcon, PhoneIcon, PinIcon } from "./icons";
import { Reveal } from "./reveal";
import { site } from "@/lib/site";

export function Contact() {
  return (
    <section id="contact" className="bg-ink px-5 py-14 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
            Контакты
          </p>
          <h2 className="font-display mt-2 text-[1.65rem] font-bold leading-tight tracking-[-0.03em] text-paper sm:mt-3 sm:text-[clamp(2rem,4vw,3rem)] sm:font-extrabold">
            Приезжайте на диагностику
          </h2>
        </Reveal>

        <Reveal delay={0.06} y={12}>
          <a
            href={`tel:${site.phoneHref}`}
            className="mt-7 flex flex-col items-center rounded-2xl bg-white/[0.04] px-4 py-7 text-center transition-colors hover:bg-white/[0.06] sm:mt-10 sm:px-8 sm:py-10"
          >
            <span className="text-[11px] uppercase tracking-[0.16em] text-muted">
              Позвонить
            </span>
            <span className="font-display mt-2 text-[1.65rem] font-bold tracking-[-0.03em] text-paper sm:text-4xl lg:text-5xl">
              {site.phone}
            </span>
            <span className="mt-2 text-[13px] text-muted">{site.address}</span>
          </a>
        </Reveal>

        <div className="mt-3 grid gap-3 sm:mt-4 sm:grid-cols-3">
          {[
            { icon: PinIcon, label: "Адрес", value: site.address },
            {
              icon: PhoneIcon,
              label: "Телефон",
              value: site.phone,
              href: `tel:${site.phoneHref}`,
            },
            {
              icon: ClockIcon,
              label: "Режим",
              value: site.hours,
              secondary: site.hoursSecondary,
            },
          ].map(({ icon: Icon, label, value, href, secondary }) => (
            <Reveal key={label}>
              <div className="rounded-2xl bg-white/[0.035] p-4 sm:p-5">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/[0.04] text-accent">
                    <Icon className="h-4 w-4" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[10px] uppercase tracking-[0.14em] text-muted">
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        className="mt-0.5 block text-[14px] font-semibold text-paper hover:text-accent"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="mt-0.5 text-[14px] font-semibold text-paper">
                        {value}
                      </p>
                    )}
                    {secondary ? (
                      <p className="text-[12px] text-muted">{secondary}</p>
                    ) : null}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.08}>
          <div className="mt-6 flex justify-center sm:mt-8">
            <Button
              href={`tel:${site.phoneHref}`}
              icon={
                <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              }
            >
              Позвонить в мастерскую
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
