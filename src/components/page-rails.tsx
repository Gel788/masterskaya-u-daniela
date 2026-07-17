/**
 * White "geometry rails" — like a body-shop measuring frame:
 * vertical side rails = кузовная ось / габарит,
 * center tick = осевая линия,
 * horizontal ticks = уровни секций на странице.
 * Decorative only — sits behind content, never touches the header.
 */
export function PageRails() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 hidden md:block"
      aria-hidden
    >
      {/* content-width side rails */}
      <div className="absolute inset-y-0 left-1/2 w-full max-w-5xl -translate-x-1/2 px-8">
        <div className="relative h-full">
          {/* left rail */}
          <div className="absolute inset-y-0 left-0 w-px bg-white/[0.14]" />
          {/* right rail */}
          <div className="absolute inset-y-0 right-0 w-px bg-white/[0.14]" />

          {/* center axis */}
          <div className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-white/[0.06]" />

          {/* corner ticks — габарит кузова */}
          <span className="absolute left-0 top-24 h-px w-3 bg-white/35" />
          <span className="absolute right-0 top-24 h-px w-3 bg-white/35" />
          <span className="absolute bottom-24 left-0 h-px w-3 bg-white/35" />
          <span className="absolute bottom-24 right-0 h-px w-3 bg-white/35" />

          {/* vertical ticks on rails */}
          <span className="absolute left-0 top-[38%] h-3 w-px bg-white/30" />
          <span className="absolute right-0 top-[38%] h-3 w-px bg-white/30" />
          <span className="absolute left-0 top-[62%] h-3 w-px bg-white/30" />
          <span className="absolute right-0 top-[62%] h-3 w-px bg-white/30" />
        </div>
      </div>

      {/* outer page edge rails */}
      <div className="absolute inset-y-0 left-6 w-px bg-white/[0.08] lg:left-10" />
      <div className="absolute inset-y-0 right-6 w-px bg-white/[0.08] lg:right-10" />

      {/* top / bottom datum lines */}
      <div className="absolute inset-x-6 top-[5.5rem] h-px bg-white/[0.1] lg:inset-x-10" />
      <div className="absolute inset-x-6 bottom-8 h-px bg-white/[0.1] lg:inset-x-10" />

      {/* labels — смысл линий */}
      <p className="absolute left-8 top-[5.75rem] font-display text-[9px] uppercase tracking-[0.28em] text-white/30 lg:left-12">
        Осевая · габарит
      </p>
      <p className="absolute bottom-9 right-8 font-display text-[9px] uppercase tracking-[0.28em] text-white/30 lg:right-12">
        Белозерская 10
      </p>
    </div>
  );
}
