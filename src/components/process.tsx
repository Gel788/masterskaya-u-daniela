import { processSteps } from "@/lib/site";
import { Reveal } from "./reveal";

export function Process() {
  return (
    <section
      id="process"
      className="relative bg-ink px-4 py-16 sm:px-8 sm:py-24 lg:py-32"
    >
      <div className="relative mx-auto max-w-5xl">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
            Как работаем
          </p>
          <h2 className="font-display mt-3 max-w-2xl text-balance text-[clamp(1.65rem,6vw,3.5rem)] font-extrabold leading-[1.05] tracking-[-0.04em] text-paper sm:mt-4">
            Три шага до идеального кузова
          </h2>
        </Reveal>

        <ol className="mt-10 grid gap-3 sm:mt-16 sm:gap-5 md:grid-cols-3">
          {processSteps.map((step, i) => (
            <Reveal key={step.id} delay={0.06 * i} y={20}>
              <li className="relative flex h-full flex-col rounded-2xl bg-white/[0.03] p-5 sm:p-8">
                <span className="font-display text-4xl font-extrabold leading-none tracking-[-0.06em] text-white/[0.1] sm:text-[clamp(3rem,6vw,4.5rem)]">
                  {step.id}
                </span>
                <h3 className="font-display mt-4 text-lg font-semibold tracking-tight text-paper sm:mt-6 sm:text-xl">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted sm:mt-3 sm:text-[15px]">
                  {step.text}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
