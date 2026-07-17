import { CheckIcon } from "./icons";
import { Reveal } from "./reveal";

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
      className="relative overflow-hidden bg-ink px-4 py-16 sm:px-8 sm:py-28 lg:py-36"
    >
      <div className="relative mx-auto max-w-5xl">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start lg:gap-20">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
              О мастерской
            </p>
            <h2 className="font-display mt-3 text-balance text-[clamp(1.65rem,6vw,3.5rem)] font-extrabold leading-[1.05] tracking-[-0.04em] text-paper sm:mt-4">
              Ремонт,
              <br />
              которого не видно
            </h2>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-muted sm:mt-6 sm:text-lg">
              Восстанавливаем кузов от локальной покраски до геометрии после
              удара. Ровный металл, точный цвет, заводская сборка.
            </p>

            <figure className="mt-8 rounded-2xl bg-white/[0.03] p-5 sm:mt-10 sm:p-9">
              <blockquote className="font-display text-[clamp(1.1rem,4vw,1.75rem)] leading-snug tracking-tight text-paper">
                «Хороший кузовной ремонт — тот, который невозможно найти
                глазами».
              </blockquote>
              <figcaption className="mt-5 text-sm text-muted sm:mt-6">
                Мастерская у Даниела · Белозерская, 10
              </figcaption>
            </figure>
          </Reveal>

          <div className="grid gap-3">
            {points.map((point, i) => (
              <Reveal key={point.title} delay={0.05 * i} y={14}>
                <article className="group h-full rounded-2xl bg-white/[0.03] p-4 transition-colors duration-300 hover:bg-white/[0.05] sm:p-6">
                  <div className="flex items-start gap-3 sm:gap-3.5">
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/12 text-accent">
                      <CheckIcon className="h-4 w-4" />
                    </span>
                    <div className="min-w-0">
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
