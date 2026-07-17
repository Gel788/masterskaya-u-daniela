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
  const introY = useTransform(scrollYProgress, [0, 0.18], [0, -28]);
  const lightsOpacity = useTransform(scrollYProgress, [0.06, 0.42], [0.05, 1]);
  const bloomOpacity = useTransform(scrollYProgress, [0.18, 0.52], [0, 1]);
  const beamOpacity = useTransform(scrollYProgress, [0.28, 0.62], [0, 0.75]);
  const carScale = useTransform(scrollYProgress, [0, 1], [1.06, 1]);
  const captionOpacity = useTransform(scrollYProgress, [0.48, 0.7], [0, 1]);
  const cueOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

  return (
    <section id="top" ref={containerRef} className="relative h-[180vh] sm:h-[210vh]">
      <div className="sticky top-0 flex h-[100dvh] flex-col overflow-hidden bg-ink">
        {/* Car lower on mobile so copy has room */}
        <div className="absolute inset-x-0 bottom-0 top-[42%] sm:top-[26%]">
          <div className="absolute inset-0 opacity-[0.14] brightness-[0.35] sm:opacity-[0.16]">
            <Image
              src="/car-headlights.jpg"
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover object-[center_40%]"
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
              className="object-cover object-[center_40%]"
            />
          </motion.div>

          <motion.div
            className="pointer-events-none absolute left-[20%] top-[34%] h-24 w-24 -translate-x-1/2 rounded-full bg-accent-strong/90 blur-3xl mix-blend-screen sm:h-52 sm:w-52"
            style={{ opacity: bloomOpacity }}
          />
          <motion.div
            className="pointer-events-none absolute right-[20%] top-[34%] h-24 w-24 translate-x-1/2 rounded-full bg-accent-strong/90 blur-3xl mix-blend-screen sm:h-52 sm:w-52"
            style={{ opacity: bloomOpacity }}
          />
          <motion.div
            className="pointer-events-none absolute inset-x-[4%] top-[24%] h-[50%] bg-[radial-gradient(ellipse_at_center,rgba(142,197,255,0.28),transparent_62%)] mix-blend-screen"
            style={{ opacity: beamOpacity }}
          />
        </div>

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ink via-ink/90 to-transparent to-[55%] sm:to-48%" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-ink to-transparent sm:h-36" />

        <motion.div
          className="relative z-20 mx-auto flex w-full max-w-5xl flex-col items-center px-4 pt-[5.5rem] text-center sm:px-8 sm:pt-32"
          style={{ opacity: introOpacity, y: introY }}
        >
          <p className="font-display max-w-[18ch] text-[clamp(1.35rem,6.5vw,3.75rem)] font-extrabold leading-[1.05] tracking-[-0.04em] text-paper sm:max-w-none">
            {site.name}
          </p>
          <p className="mt-2 text-xs tracking-[0.06em] text-muted sm:mt-3 sm:text-sm sm:tracking-[0.08em]">
            {site.address}
          </p>
          <h1 className="font-display mt-5 max-w-[22ch] text-balance text-[clamp(1.15rem,4.2vw,2.35rem)] font-medium leading-[1.2] tracking-[-0.03em] text-paper/90 sm:mt-9 sm:max-w-3xl">
            Кузовной ремонт,
            <br />
            после которого не видно ремонта
          </h1>
          <p className="mt-3 hidden max-w-md text-balance text-[15px] leading-relaxed text-muted sm:mt-5 sm:block">
            Рихтовка · покраска · геометрия · полировка · керамика
          </p>
          <p className="mt-3 max-w-[20ch] text-sm leading-relaxed text-muted sm:hidden">
            Рихтовка, покраска, геометрия, полировка, керамика
          </p>
          <div className="mt-6 flex w-full max-w-sm flex-col items-stretch gap-2.5 sm:mt-9 sm:max-w-none sm:w-auto sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-3">
            <Button
              href={`tel:${site.phoneHref}`}
              className="w-full sm:w-auto"
              icon={
                <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              }
            >
              <span className="sm:hidden">Позвонить</span>
              <span className="hidden sm:inline">{site.phone}</span>
            </Button>
            <Button href="#services" variant="ghost" className="w-full sm:w-auto">
              Услуги
            </Button>
          </div>
        </motion.div>

        <motion.p
          className="relative z-20 mt-auto hidden pb-20 text-center text-xs uppercase tracking-[0.24em] text-accent-strong/85 sm:block"
          style={{ opacity: captionOpacity }}
        >
          Каждая деталь возвращается к жизни
        </motion.p>

        <motion.div
          className="absolute inset-x-0 bottom-5 z-20 flex flex-col items-center gap-1.5 sm:bottom-6"
          style={{ opacity: cueOpacity }}
        >
          <span className="text-[10px] uppercase tracking-[0.18em] text-muted sm:text-[11px] sm:tracking-[0.2em]">
            Скролл — фары
          </span>
          <span className="scroll-cue-dot h-1 w-1 rounded-full bg-accent" />
        </motion.div>
      </div>
    </section>
  );
}
