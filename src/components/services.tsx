import { services } from "@/lib/site";
import { serviceIcons } from "./icons";
import { Reveal } from "./reveal";
import { SectionRule } from "./section-rule";

export function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden border-t border-white/15 bg-ink px-5 py-28 sm:px-8 sm:py-36"
    >
      <SectionRule label="02 · услуги" />

      <div className="relative mx-auto max-w-5xl pt-6">
        <Reveal>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                Услуги
              </p>
              <h2 className="font-display mt-4 text-balance text-[clamp(2rem,5vw,3.5rem)] font-extrabold leading-[1.02] tracking-[-0.04em] text-paper">
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

        <ul className="mt-16">
          {services.map((service, i) => {
            const Icon = serviceIcons[service.icon];
            return (
              <Reveal key={service.id} delay={0.04 * i} y={18}>
                <li className="group relative border-t border-white/15 last:border-b">
                  <div className="absolute inset-y-0 left-0 w-0 bg-white/[0.04] transition-[width] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-full" />
                  <div className="relative grid gap-5 py-9 sm:grid-cols-[5.5rem_minmax(0,1.15fr)_minmax(0,1.45fr)] sm:items-center sm:gap-10 sm:py-11">
                    <span className="font-display text-3xl font-extrabold tabular-nums tracking-[-0.04em] text-white/15 transition-colors duration-300 group-hover:text-white/40">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="flex items-center gap-4">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center border border-white/20 text-accent transition-all duration-300 group-hover:border-white/45">
                        <Icon className="h-5 w-5" />
                      </span>
                      <h3 className="font-display text-xl font-semibold leading-snug tracking-tight text-paper sm:text-2xl">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-[15px] leading-relaxed text-muted">
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
