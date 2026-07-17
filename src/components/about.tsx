import { CheckIcon } from "./icons";
import { Reveal } from "./reveal";
import { SectionRule } from "./section-rule";

const points = [
  {
    title: "Цвет в код",
    text: "Компьютерный подбор краски точно по коду кузова — без разнотона.",
  },
  {
    title: "Свой цех",
    text: "Малярный участок и стапель для геометрии — всё на месте.",
  },
  {
    title: "Гарантия",
    text: "Фиксируем качество кузовных и покрасочных работ.",
  },
  {
    title: "Честная смета",
    text: "Стоимость и сроки до старта — без скрытых доплат.",
  },
];

export function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-t border-white/15 bg-ink px-5 py-28 sm:px-8 sm:py-36"
    >
      <SectionRule label="03 · мастерская" />

      <div className="relative mx-auto max-w-5xl pt-6">
        <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-start lg:gap-20">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
              О мастерской
            </p>
            <h2 className="font-display mt-4 text-balance text-[clamp(2rem,5vw,3.5rem)] font-extrabold leading-[1.02] tracking-[-0.04em] text-paper">
              Ремонт,
              <br />
              которого не видно
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted sm:text-lg">
              Восстанавливаем кузов от локальной покраски до геометрии после
              удара. Ровный металл, точный цвет, заводская сборка.
            </p>

            <figure className="mt-10 border border-white/20 bg-black p-7 sm:p-9">
              <div className="mb-5 flex items-center gap-3" aria-hidden>
                <span className="h-px flex-1 bg-white/25" />
                <span className="font-display text-[9px] uppercase tracking-[0.28em] text-white/35">
                  цитата
                </span>
                <span className="h-px flex-1 bg-white/25" />
              </div>
              <blockquote className="font-display text-[clamp(1.25rem,2.5vw,1.75rem)] leading-snug tracking-tight text-paper">
                «Хороший кузовной ремонт — тот, который невозможно найти
                глазами».
              </blockquote>
              <figcaption className="mt-6 text-sm text-muted">
                Мастерская у Даниела · Белозерская, 10
              </figcaption>
            </figure>
          </Reveal>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {points.map((point, i) => (
              <Reveal key={point.title} delay={0.06 * i} y={16}>
                <article className="group h-full border border-white/15 bg-black p-5 transition-colors duration-300 hover:border-white/35 sm:p-6">
                  <div className="flex items-start gap-3.5">
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center border border-white/20 text-accent">
                      <CheckIcon className="h-4 w-4" />
                    </span>
                    <div>
                      <h3 className="font-display text-base font-semibold tracking-tight text-paper">
                        {point.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted">
                        {point.text}
                      </p>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
