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
    <section id="about" className="bg-ink px-5 py-14 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
              О мастерской
            </p>
            <h2 className="font-display mt-2 text-[1.65rem] font-bold leading-tight tracking-[-0.03em] text-paper sm:mt-3 sm:text-[clamp(2rem,4vw,3rem)] sm:font-extrabold">
              Ремонт, которого не видно
            </h2>
            <p className="mt-4 text-[14px] leading-relaxed text-muted sm:text-base">
              Восстанавливаем кузов от локальной покраски до геометрии после
              удара. Ровный металл, точный цвет, заводская сборка.
            </p>
            <blockquote className="mt-6 border-l-2 border-accent/50 pl-4 font-display text-[1.05rem] leading-snug text-paper sm:mt-8 sm:text-xl">
              «Хороший кузовной ремонт — тот, который невозможно найти
              глазами».
            </blockquote>
          </Reveal>

          <ul className="grid gap-2.5">
            {points.map((point, i) => (
              <Reveal key={point.title} delay={0.04 * i} y={10}>
                <li className="flex gap-3 rounded-xl bg-white/[0.035] px-3.5 py-3.5 sm:gap-3.5 sm:px-5 sm:py-4">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                    <CheckIcon className="h-3.5 w-3.5" />
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-display text-[14px] font-semibold text-paper sm:text-base">
                      {point.title}
                    </h3>
                    <p className="mt-0.5 text-[12.5px] leading-relaxed text-muted sm:mt-1 sm:text-sm">
                      {point.text}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
