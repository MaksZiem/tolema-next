"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import PricingButton from "@/components/ui/PricingButton";
import useIsDesktop from "@/hooks/useIsDesktop";
import usePauseOffscreenVideos from "@/hooks/usePauseOffscreenVideos";

type Theme = "dark" | "gold" | "light";

interface OfferSectionProps {
  theme: Theme;
  titleLead: string;
  titleStrong: string;
  lead: string;
  tags: string[];
  videoPrimary: string;
  videoSecondary: string;
  buttonVariant: "default" | "reverse" | "black";
  reverse?: boolean;
}

const themes: Record<
  Theme,
  {
    bg: string;
    text: string;
    sub: string;
    rule: string;
    tick: string;
    tickAccent: string;
    tag: string;
    frame: string;
    navbar: "light" | "dark";
  }
> = {
  dark: {
    bg: "bg-black",
    text: "text-white",
    sub: "text-white/60",
    rule: "bg-white/15",
    tick: "bg-white/30",
    tickAccent: "bg-[#D4B876]",
    tag: "border-white/15 text-white/75",
    frame: "border-black",
    navbar: "light" as const,
  },
  gold: {
    bg: "bg-[#D4B876]",
    text: "text-black",
    sub: "text-black/70",
    rule: "bg-black/20",
    tick: "bg-black/30",
    tickAccent: "bg-white",
    tag: "border-black/20 text-black/75",
    frame: "border-[#D4B876]",
    navbar: "dark" as const,
  },
  light: {
    bg: "bg-white",
    text: "text-black",
    sub: "text-black/60",
    rule: "bg-black/15",
    tick: "bg-black/25",
    tickAccent: "bg-[#D4B876]",
    tag: "border-black/15 text-black/70",
    frame: "border-white",
    navbar: "dark" as const,
  },
};

// Podziałka z kreskami - sygnaturowy element nawiązujący do mierzenia/szacowania.
const ticks = Array.from({ length: 11 });

export default function OfferSection({
  theme,
  titleLead,
  titleStrong,
  lead,
  tags,
  videoPrimary,
  videoSecondary,
  buttonVariant,
  reverse = false,
}: OfferSectionProps) {
  const t = themes[theme];
  const dir = reverse ? -1 : 1;
  const isDesktop = useIsDesktop();
  const rootRef = useRef<HTMLDivElement>(null);
  // Sekcja jest "sticky" wewnątrz 300vh kontenera i montuje się od razu przy
  // starcie strony, więc bez tego oba filmy byłyby pobierane natychmiast
  // (razem z pozostałymi sekcjami) zamiast dopiero, gdy user się do nich zbliży.
  const isInView = useInView(rootRef, {
    once: true,
    margin: "800px 0px 800px 0px",
  });
  usePauseOffscreenVideos(rootRef);

  return (
    <motion.div
      ref={rootRef}
      data-navbar={t.navbar}
      style={{ willChange: "transform" }}
      className={`sticky top-0 h-screen w-full overflow-hidden ${t.bg} ${t.text} border-t border-gray-300/30`}
    >
      <div
        className={`mx-auto flex h-full max-w-[1400px] flex-col items-center justify-center gap-8 px-6 min-[1600px]:flex-row min-[1600px]:justify-normal min-[1600px]:gap-48 min-[1600px]:px-12 ${reverse ? "min-[1600px]:flex-row-reverse" : ""}`}
      >
        {/* ── Media (tylko desktop - na mobile bez filmików) ───── */}
        {isDesktop && (
          <div className="relative hidden h-[64vh] w-1/2 items-center justify-center min-[1600px]:flex">
            {/* Kadr główny */}
            <motion.figure
              className={`group relative z-10 h-[28rem] w-[38rem] max-w-full overflow-hidden`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
            >
              {isInView && (
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  controls={false}
                  disablePictureInPicture
                  disableRemotePlayback
                  tabIndex={-1}
                  draggable={false}
                  onContextMenu={(e) => e.preventDefault()}
                  className="h-full w-full object-cover grayscale transition-[filter] duration-700 group-hover:grayscale-0 pointer-events-none select-none"
                >
                  <source src={videoPrimary} type="video/mp4" />
                </video>
              )}
            </motion.figure>

            {/* Kadr drugi - przesunięty bardziej w prawo */}
            <motion.figure
              className={`absolute bottom-2 -right-20 z-20 h-[18rem] w-[24rem] max-w-[60%] overflow-hidden border-8 ${t.frame}`}
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
            >
              {isInView && (
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="none"
                  controls={false}
                  disablePictureInPicture
                  disableRemotePlayback
                  tabIndex={-1}
                  draggable={false}
                  onContextMenu={(e) => e.preventDefault()}
                  className="h-full w-full object-cover grayscale pointer-events-none select-none"
                >
                  <source src={videoSecondary} type="video/mp4" />
                </video>
              )}
            </motion.figure>
          </div>
        )}

        {/* ── Treść ───────────────────────────────────────────── */}
        <div className="flex w-full flex-col min-[1600px]:w-1/2">
          <motion.h2
            className="text-4xl min-[1600px]:text-6xl font-thin leading-[1.05] tracking-tight"
            initial={{ opacity: 0, x: 40 * dir }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.05 }}
            viewport={{ once: true }}
          >
            {titleLead} <span className="font-semibold">{titleStrong}</span>
          </motion.h2>

          {/* Podziałka + lead */}
          <motion.div
            className="mt-9 flex gap-6"
            initial={{ opacity: 0, x: 40 * dir }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
            viewport={{ once: true }}
          >
            <div className="flex shrink-0 flex-col justify-between py-1">
              {ticks.map((_, i) => (
                <motion.span
                  key={i}
                  className={`h-px ${i % 5 === 0 ? `w-5 ${t.tickAccent}` : `w-2.5 ${t.tick}`}`}
                  initial={{ scaleX: 0, originX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.04 }}
                  viewport={{ once: true }}
                />
              ))}
            </div>
            <p className={`max-w-[34rem] text-lg min-[1600px]:text-2xl font-light leading-relaxed ${t.sub}`}>
              {lead}
            </p>
          </motion.div>

          {/* Tagi zakresu */}
          <motion.ul
            className="mt-10 grid max-w-[34rem] grid-cols-2 gap-x-8"
            initial={{ opacity: 0, x: 40 * dir }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.25 }}
            viewport={{ once: true }}
          >
            {tags.map((tag) => (
              <li
                key={tag}
                className={`border-t py-2.5 text-sm font-light ${t.tag}`}
              >
                {tag}
              </li>
            ))}
          </motion.ul>

          <motion.div
            className="mt-2"
            initial={{ opacity: 0, x: 40 * dir }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.35 }}
            viewport={{ once: true }}
          >
            <PricingButton variant={buttonVariant} />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}