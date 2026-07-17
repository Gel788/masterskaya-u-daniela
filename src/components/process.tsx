import { processSteps } from "@/lib/site";
import { Reveal } from "./reveal";

export function Process() {
  return (
    <section id="process" className="bg-ink px-5 py-14 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
            Как работаем
          </p>
          <h2 className="font-display mt-2 text-[1.65rem] font-bold leading-tight tracking-[-0.03em] text-paper sm:mt-3 sm:text-[clamp(2rem,4vw,3rem)] sm:font-extrabold">
            Три шага до идеального кузова
          </h2>
        </Reveal>

        <ol className="mt-8 space-y-3 sm:mt-12 sm:grid sm:grid-cols-3 sm:gap-4 sm:space-y-0">
          {processSteps.map((step, i) => (
            <Reveal key={step.id} delay={0.05 * i} y={16}>
              <li className="flex gap-4 rounded-2xl bg-white/[0.035] p-4 sm:flex-col sm:gap-0 sm:p-6">
                <span className="font-display shrink-0 text-2xl font-bold tabular-nums text-white/20 sm:text-4xl sm:font-extrabold">
                  {step.id}
                </span>
                <div className="min-w-0 sm:mt-4">
                  <h3 className="font-display text-base font-semibold text-paper sm:text-lg">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-[13px] leading-relaxed text-muted sm:mt-2 sm:text-sm">
                    {step.text}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
