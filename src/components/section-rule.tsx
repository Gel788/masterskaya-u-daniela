/** Horizontal section datum — white stripe with a workshop label */
export function SectionRule({ label }: { label: string }) {
  return (
    <div
      className="pointer-events-none absolute inset-x-0 top-0 z-[1] flex items-center gap-4 px-5 sm:px-8"
      aria-hidden
    >
      <div className="h-px flex-1 bg-white/20" />
      <span className="shrink-0 font-display text-[9px] uppercase tracking-[0.28em] text-white/35">
        {label}
      </span>
      <div className="h-px flex-1 bg-white/20" />
    </div>
  );
}
