import { processSteps } from "@/lib/site";
import { Reveal } from "./reveal";
import { SectionRule } from "./section-rule";

export function Process() {
  return (
    <section
      id="process"
      className="relative border-t border-white/15 bg-ink px-5 py-24 sm:px-8 sm:py-32"
    >
      <SectionRule label="01 · процесс" />
      <div className="relative mx-auto max-w-5xl pt-6">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
            Как работаем
          </p>
          <h2 className="font-display mt-4 max-w-2xl text-balance text-[clamp(2rem,5vw,3.5rem)] font-extrabold leading-[1.02] tracking-[-0.04em] text-paper">
            Три шага до идеального кузова
          </h2>
        </Reveal>

        <ol className="mt-16 grid gap-6 md:grid-cols-3 md:gap-5">
          {processSteps.map((step, i) => (
            <Reveal key={step.id} delay={0.08 * i} y={24}>
              <li className="relative flex h-full flex-col border border-white/15 bg-black p-7 sm:p-8">
                <span className="font-display text-[clamp(3rem,6vw,4.5rem)] font-extrabold leading-none tracking-[-0.06em] text-white/[0.1]">
                  {step.id}
                </span>
                <h3 className="font-display mt-6 text-xl font-semibold tracking-tight text-paper">
                  {step.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted">
                  {step.text}
                </p>
                {i < processSteps.length - 1 ? (
                  <span
                    className="pointer-events-none absolute -right-3 top-1/2 hidden h-px w-6 bg-white/30 md:block"
                    aria-hidden
                  />
                ) : null}
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
