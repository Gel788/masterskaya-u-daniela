import { services } from "@/lib/site";
import { serviceIcons } from "./icons";
import { Reveal } from "./reveal";

export function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-ink px-4 py-16 sm:px-8 sm:py-28 lg:py-36"
    >
      <div className="relative mx-auto max-w-5xl">
        <Reveal>
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between lg:gap-6">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                Услуги
              </p>
              <h2 className="font-display mt-3 text-balance text-[clamp(1.65rem,6vw,3.5rem)] font-extrabold leading-[1.05] tracking-[-0.04em] text-paper sm:mt-4">
                Полный цикл
                <br />
                кузовных работ
              </h2>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-muted lg:pb-2 lg:text-right">
              От стапеля до керамики — шесть направлений под одной крышей.
            </p>
          </div>
        </Reveal>

        <ul className="mt-10 sm:mt-16">
          {services.map((service, i) => {
            const Icon = serviceIcons[service.icon];
            return (
              <Reveal key={service.id} delay={0.03 * i} y={14}>
                <li className="group relative border-t border-white/10 last:border-b">
                  <div className="relative flex flex-col gap-3 py-6 sm:grid sm:grid-cols-[5.5rem_minmax(0,1.15fr)_minmax(0,1.45fr)] sm:items-center sm:gap-10 sm:py-11">
                    <div className="flex items-center gap-3 sm:contents">
                      <span className="font-display text-xl font-extrabold tabular-nums tracking-[-0.04em] text-white/20 sm:text-3xl sm:text-white/15">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div className="flex min-w-0 flex-1 items-center gap-3 sm:gap-4">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/[0.04] text-accent sm:h-12 sm:w-12">
                          <Icon className="h-5 w-5" />
                        </span>
                        <h3 className="font-display text-base font-semibold leading-snug tracking-tight text-paper sm:text-2xl">
                          {service.title}
                        </h3>
                      </div>
                    </div>
                    <p className="pl-[2.75rem] text-sm leading-relaxed text-muted sm:pl-0 sm:text-[15px]">
                      {service.description}
                    </p>
                  </div>
                </li>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
