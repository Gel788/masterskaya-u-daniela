import { Button } from "./button";
import { ArrowRightIcon, ClockIcon, PhoneIcon, PinIcon } from "./icons";
import { Reveal } from "./reveal";
import { SectionRule } from "./section-rule";
import { site } from "@/lib/site";

export function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-white/15 bg-ink px-5 py-28 sm:px-8 sm:py-36"
    >
      <SectionRule label="04 · контакты" />

      <div className="relative mx-auto max-w-5xl pt-6">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
            Контакты
          </p>
          <h2 className="font-display mt-4 max-w-2xl text-balance text-[clamp(2rem,5vw,3.5rem)] font-extrabold leading-[1.02] tracking-[-0.04em] text-paper">
            Приезжайте
            <br />
            на диагностику
          </h2>
        </Reveal>

        <Reveal delay={0.08} y={20}>
          <a
            href={`tel:${site.phoneHref}`}
            className="group relative mt-12 block cursor-pointer border border-white/25 bg-black px-6 py-10 text-center transition-colors duration-300 hover:border-white/50 sm:px-10 sm:py-14"
          >
            <div className="mb-6 flex items-center gap-3" aria-hidden>
              <span className="h-px flex-1 bg-white/25" />
              <span className="font-display text-[9px] uppercase tracking-[0.28em] text-white/40">
                линия связи
              </span>
              <span className="h-px flex-1 bg-white/25" />
            </div>
            <p className="text-xs uppercase tracking-[0.22em] text-muted">
              Позвонить сейчас
            </p>
            <p className="font-display mt-4 text-[clamp(1.85rem,7vw,4.25rem)] font-extrabold tracking-[-0.04em] text-paper transition-colors group-hover:text-accent-strong">
              {site.phone}
            </p>
            <p className="mt-4 text-sm text-muted">
              {site.address} · {site.hours}
            </p>
          </a>
        </Reveal>

        <div className="mt-6 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal delay={0.1}>
            <div className="h-full border border-white/15 bg-black p-7 sm:p-9">
              <dl className="space-y-6">
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-white/20 text-accent">
                    <PinIcon className="h-5 w-5" />
                  </span>
                  <div>
                    <dt className="text-[11px] uppercase tracking-[0.16em] text-muted">
                      Адрес
                    </dt>
                    <dd className="mt-1 text-lg font-semibold text-paper">
                      {site.address}
                    </dd>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-white/20 text-accent">
                    <PhoneIcon className="h-5 w-5" />
                  </span>
                  <div>
                    <dt className="text-[11px] uppercase tracking-[0.16em] text-muted">
                      Телефон
                    </dt>
                    <dd className="mt-1 text-lg font-semibold text-paper">
                      <a
                        href={`tel:${site.phoneHref}`}
                        className="cursor-pointer transition-colors hover:text-accent-strong"
                      >
                        {site.phone}
                      </a>
                    </dd>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-white/20 text-accent">
                    <ClockIcon className="h-5 w-5" />
                  </span>
                  <div>
                    <dt className="text-[11px] uppercase tracking-[0.16em] text-muted">
                      Режим
                    </dt>
                    <dd className="mt-1 text-lg font-semibold text-paper">
                      {site.hours}
                    </dd>
                    <p className="mt-0.5 text-sm text-muted">
                      {site.hoursSecondary}
                    </p>
                  </div>
                </div>
              </dl>

              <div className="mt-9">
                <Button
                  href={`tel:${site.phoneHref}`}
                  icon={
                    <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  }
                >
                  Позвонить
                </Button>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.14}>
            <div className="relative flex min-h-[280px] items-center justify-center overflow-hidden border border-white/15 bg-black">
              {/* map grid = measurement grid */}
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)",
                  backgroundSize: "42px 42px",
                }}
              />
              <div className="absolute inset-x-8 top-8 h-px bg-white/25" />
              <div className="absolute inset-x-8 bottom-8 h-px bg-white/25" />
              <div className="absolute inset-y-8 left-8 w-px bg-white/25" />
              <div className="absolute inset-y-8 right-8 w-px bg-white/25" />

              <div className="relative flex flex-col items-center gap-3 px-6 text-center">
                <span className="relative flex h-14 w-14 items-center justify-center border border-white/30 bg-black text-accent">
                  <PinIcon className="h-7 w-7" />
                </span>
                <p className="font-display text-lg font-semibold text-paper">
                  {site.address}
                </p>
                <p className="font-display text-[9px] uppercase tracking-[0.28em] text-white/40">
                  точка · диагностика
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
