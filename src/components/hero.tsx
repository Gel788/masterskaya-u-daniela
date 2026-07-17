"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Button } from "./button";
import { ArrowRightIcon } from "./icons";
import { site } from "@/lib/site";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const introOpacity = useTransform(scrollYProgress, [0, 0.18], [1, 0]);
  const introY = useTransform(scrollYProgress, [0, 0.18], [0, -36]);
  const lightsOpacity = useTransform(scrollYProgress, [0.06, 0.42], [0.05, 1]);
  const bloomOpacity = useTransform(scrollYProgress, [0.18, 0.52], [0, 1]);
  const beamOpacity = useTransform(scrollYProgress, [0.28, 0.62], [0, 0.75]);
  const carScale = useTransform(scrollYProgress, [0, 1], [1.08, 1]);
  const captionOpacity = useTransform(scrollYProgress, [0.48, 0.7], [0, 1]);
  const cueOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

  return (
    <section id="top" ref={containerRef} className="relative h-[210vh]">
      <div className="sticky top-0 flex h-screen flex-col overflow-hidden bg-ink">
        <div className="absolute inset-x-0 bottom-0 top-[30%] sm:top-[24%]">
          <div className="absolute inset-0 opacity-[0.16] brightness-[0.35]">
            <Image
              src="/car-headlights.jpg"
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover object-[center_38%]"
              aria-hidden
            />
          </div>

          <motion.div
            className="absolute inset-0"
            style={{ scale: carScale, opacity: lightsOpacity }}
          >
            <Image
              src="/car-headlights.jpg"
              alt="Передние фары автомобиля"
              fill
              priority
              sizes="100vw"
              className="object-cover object-[center_38%]"
            />
          </motion.div>

          <motion.div
            className="pointer-events-none absolute left-[22%] top-[36%] h-36 w-36 -translate-x-1/2 rounded-full bg-accent-strong/90 blur-3xl mix-blend-screen sm:h-52 sm:w-52"
            style={{ opacity: bloomOpacity }}
          />
          <motion.div
            className="pointer-events-none absolute right-[22%] top-[36%] h-36 w-36 translate-x-1/2 rounded-full bg-accent-strong/90 blur-3xl mix-blend-screen sm:h-52 sm:w-52"
            style={{ opacity: bloomOpacity }}
          />
          <motion.div
            className="pointer-events-none absolute inset-x-[6%] top-[28%] h-[55%] bg-[radial-gradient(ellipse_at_center,rgba(142,197,255,0.28),transparent_62%)] mix-blend-screen"
            style={{ opacity: beamOpacity }}
          />
        </div>

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ink via-ink/85 to-transparent to-48%" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-ink to-transparent" />

        <motion.div
          className="relative z-20 mx-auto flex w-full max-w-5xl flex-1 flex-col items-center px-5 pt-28 text-center sm:px-8 sm:pt-32"
          style={{ opacity: introOpacity, y: introY }}
        >
          <p className="font-display text-[clamp(2rem,5.5vw,3.75rem)] font-extrabold tracking-[-0.04em] text-paper">
            {site.name}
          </p>
          <p className="mt-3 text-sm tracking-[0.08em] text-muted">
            {site.address}
          </p>
          <h1 className="font-display mt-9 max-w-3xl text-balance text-[clamp(1.45rem,3.6vw,2.35rem)] font-medium leading-[1.15] tracking-[-0.03em] text-paper/90">
            Кузовной ремонт,
            <br />
            после которого не видно ремонта
          </h1>
          <p className="mt-5 max-w-md text-balance text-[15px] leading-relaxed text-muted">
            Рихтовка · покраска · геометрия · полировка · керамика
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Button
              href={`tel:${site.phoneHref}`}
              icon={
                <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              }
            >
              {site.phone}
            </Button>
            <Button href="#services" variant="ghost">
              Услуги
            </Button>
          </div>
        </motion.div>

        <motion.p
          className="relative z-20 pb-16 text-center text-xs uppercase tracking-[0.24em] text-accent-strong/85"
          style={{ opacity: captionOpacity }}
        >
          Каждая деталь возвращается к жизни
        </motion.p>

        <motion.div
          className="absolute inset-x-0 bottom-6 z-20 flex flex-col items-center gap-2"
          style={{ opacity: cueOpacity }}
        >
          <span className="text-[11px] uppercase tracking-[0.2em] text-muted">
            Скролл — фары
          </span>
          <span className="scroll-cue-dot h-1 w-1 rounded-full bg-accent" />
        </motion.div>
      </div>
    </section>
  );
}
