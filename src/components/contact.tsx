import { Button } from "./button";
import { ArrowRightIcon, ClockIcon, PhoneIcon, PinIcon } from "./icons";
import { Reveal } from "./reveal";
import { site } from "@/lib/site";

export function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-ink px-4 py-16 sm:px-8 sm:py-28 lg:py-36"
    >
      <div className="relative mx-auto max-w-5xl">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
            Контакты
          </p>
          <h2 className="font-display mt-3 max-w-2xl text-balance text-[clamp(1.65rem,6vw,3.5rem)] font-extrabold leading-[1.05] tracking-[-0.04em] text-paper sm:mt-4">
            Приезжайте
            <br />
            на диагностику
          </h2>
        </Reveal>

        <Reveal delay={0.08} y={16}>
          <a
            href={`tel:${site.phoneHref}`}
            className="group relative mt-8 block cursor-pointer rounded-2xl bg-white/[0.04] px-4 py-8 text-center transition-colors duration-300 hover:bg-white/[0.06] sm:mt-12 sm:px-10 sm:py-14"
          >
            <p className="text-xs uppercase tracking-[0.18em] text-muted sm:tracking-[0.22em]">
              Позвонить сейчас
            </p>
            <p className="font-display mt-3 break-words text-[clamp(1.35rem,8vw,4.25rem)] font-extrabold leading-none tracking-[-0.03em] text-paper transition-colors group-hover:text-accent-strong sm:mt-4 sm:tracking-[-0.04em]">
              {site.phone}
            </p>
            <p className="mt-3 text-sm text-muted sm:mt-4">
              <span className="block sm:inline">{site.address}</span>
              <span className="hidden sm:inline"> · </span>
              <span className="mt-1 block sm:mt-0 sm:inline">{site.hours}</span>
            </p>
          </a>
        </Reveal>

        <div className="mt-4 grid gap-3 sm:mt-6 sm:gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal delay={0.08}>
            <div className="h-full rounded-2xl bg-white/[0.03] p-5 sm:p-9">
              <dl className="space-y-5 sm:space-y-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/[0.04] text-accent sm:h-11 sm:w-11">
                    <PinIcon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <dt className="text-[11px] uppercase tracking-[0.16em] text-muted">
                      Адрес
                    </dt>
                    <dd className="mt-1 text-base font-semibold text-paper sm:text-lg">
                      {site.address}
                    </dd>
                  </div>
                </div>
                <div className="flex items-start gap-3 sm:gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/[0.04] text-accent sm:h-11 sm:w-11">
                    <PhoneIcon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <dt className="text-[11px] uppercase tracking-[0.16em] text-muted">
                      Телефон
                    </dt>
                    <dd className="mt-1 text-base font-semibold text-paper sm:text-lg">
                      <a
                        href={`tel:${site.phoneHref}`}
                        className="cursor-pointer break-all transition-colors hover:text-accent-strong"
                      >
                        {site.phone}
                      </a>
                    </dd>
                  </div>
                </div>
                <div className="flex items-start gap-3 sm:gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/[0.04] text-accent sm:h-11 sm:w-11">
                    <ClockIcon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <dt className="text-[11px] uppercase tracking-[0.16em] text-muted">
                      Режим
                    </dt>
                    <dd className="mt-1 text-base font-semibold text-paper sm:text-lg">
                      {site.hours}
                    </dd>
                    <p className="mt-0.5 text-sm text-muted">
                      {site.hoursSecondary}
                    </p>
                  </div>
                </div>
              </dl>

              <div className="mt-7 sm:mt-9">
                <Button
                  href={`tel:${site.phoneHref}`}
                  className="w-full sm:w-auto"
                  icon={
                    <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  }
                >
                  Позвонить
                </Button>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative flex min-h-[200px] items-center justify-center overflow-hidden rounded-2xl bg-white/[0.03] sm:min-h-[280px]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(142,197,255,0.12),transparent_55%)]" />
              <div className="relative flex flex-col items-center gap-2 px-5 text-center sm:gap-3 sm:px-6">
                <span className="relative flex h-12 w-12 items-center justify-center rounded-full bg-accent text-accent-ink sm:h-14 sm:w-14">
                  <PinIcon className="h-6 w-6 sm:h-7 sm:w-7" />
                </span>
                <p className="font-display text-base font-semibold text-paper sm:text-lg">
                  {site.address}
                </p>
                <p className="text-sm text-muted">Диагностика бесплатно</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
