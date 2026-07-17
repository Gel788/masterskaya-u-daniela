import { services } from "@/lib/site";
import { serviceIcons } from "./icons";
import { Reveal } from "./reveal";

export function Services() {
  return (
    <section id="services" className="bg-ink px-5 py-14 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
            Услуги
          </p>
          <h2 className="font-display mt-2 text-[1.65rem] font-bold leading-tight tracking-[-0.03em] text-paper sm:mt-3 sm:text-[clamp(2rem,4vw,3rem)] sm:font-extrabold">
            Полный цикл кузовных работ
          </h2>
          <p className="mt-3 max-w-md text-[13px] leading-relaxed text-muted sm:text-sm">
            От стапеля до керамики — шесть направлений под одной крышей.
          </p>
        </Reveal>

        <ul className="mt-8 divide-y divide-white/10 border-y border-white/10 sm:mt-12">
          {services.map((service, i) => {
            const Icon = serviceIcons[service.icon];
            return (
              <Reveal key={service.id} delay={0.03 * i} y={12}>
                <li className="flex gap-3.5 py-5 sm:grid sm:grid-cols-[4rem_1fr_1.3fr] sm:items-start sm:gap-8 sm:py-8">
                  <span className="font-display w-8 shrink-0 pt-0.5 text-sm font-bold tabular-nums text-white/25 sm:w-auto sm:text-2xl">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="min-w-0 flex-1 sm:contents">
                    <div className="flex items-start gap-3 sm:items-center">
                      <span className="mt-0.5 hidden h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/[0.04] text-accent sm:mt-0 sm:flex">
                        <Icon className="h-5 w-5" />
                      </span>
                      <h3 className="font-display text-[15px] font-semibold leading-snug text-paper sm:text-xl">
                        {service.title}
                      </h3>
                    </div>
                    <p className="mt-1.5 text-[13px] leading-relaxed text-muted sm:mt-0 sm:text-[15px]">
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
