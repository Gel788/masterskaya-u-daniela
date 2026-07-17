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
  const introY = useTransform(scrollYProgress, [0, 0.18], [0, -24]);
  const lightsOpacity = useTransform(scrollYProgress, [0.06, 0.42], [0.05, 1]);
  const bloomOpacity = useTransform(scrollYProgress, [0.18, 0.52], [0, 1]);
  const beamOpacity = useTransform(scrollYProgress, [0.28, 0.62], [0, 0.75]);
  const carScale = useTransform(scrollYProgress, [0, 1], [1.06, 1]);
  const captionOpacity = useTransform(scrollYProgress, [0.48, 0.7], [0, 1]);
  const cueOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

  return (
    <section
      id="top"
      ref={containerRef}
      className="relative h-[165vh] sm:h-[200vh]"
    >
      <div className="sticky top-0 flex h-[100dvh] flex-col overflow-hidden bg-ink">
        {/* Car — unchanged visual treatment */}
        <div className="absolute inset-x-0 bottom-0 top-[48%] sm:top-[28%]">
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

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ink from-0% via-ink/95 via-40% to-transparent to-60% sm:via-ink/85 sm:to-50%" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ink to-transparent sm:h-36" />

        <motion.div
          className="relative z-20 mx-auto flex w-full max-w-3xl flex-col items-center px-5 pt-20 text-center sm:px-8 sm:pt-28"
          style={{ opacity: introOpacity, y: introY }}
        >
          <p className="hidden font-display text-[clamp(2rem,5vw,3.5rem)] font-extrabold tracking-[-0.04em] text-paper sm:block">
            {site.name}
          </p>
          <p className="text-[11px] uppercase tracking-[0.16em] text-muted sm:mt-3 sm:text-sm sm:normal-case sm:tracking-normal">
            {site.address}
          </p>
          <h1 className="font-display mt-4 max-w-[16rem] text-balance text-[1.5rem] font-semibold leading-[1.2] tracking-[-0.03em] text-paper sm:mt-7 sm:max-w-2xl sm:text-[clamp(1.75rem,4vw,2.5rem)] sm:font-medium">
            Кузовной ремонт, после которого не видно ремонта
          </h1>
          <p className="mt-3 max-w-[17rem] text-[13px] leading-relaxed text-muted sm:mt-4 sm:max-w-md sm:text-[15px]">
            Рихтовка, покраска, геометрия, полировка и керамика
          </p>
          <div className="mt-6 flex items-center justify-center gap-2.5 sm:mt-8 sm:gap-3">
            <Button
              href={`tel:${site.phoneHref}`}
              icon={
                <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              }
            >
              Позвонить
            </Button>
            <Button href="#services" variant="ghost">
              Услуги
            </Button>
          </div>
        </motion.div>

        <motion.p
          className="relative z-20 mt-auto hidden pb-16 text-center text-xs uppercase tracking-[0.24em] text-accent-strong/85 sm:block"
          style={{ opacity: captionOpacity }}
        >
          Каждая деталь возвращается к жизни
        </motion.p>

        <motion.div
          className="absolute inset-x-0 bottom-6 z-20 flex flex-col items-center gap-1.5 sm:bottom-7"
          style={{ opacity: cueOpacity }}
        >
          <span className="text-[10px] uppercase tracking-[0.2em] text-muted">
            Скролл — фары
          </span>
          <span className="scroll-cue-dot h-1 w-1 rounded-full bg-accent" />
        </motion.div>
      </div>
    </section>
  );
}
