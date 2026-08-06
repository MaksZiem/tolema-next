"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Footer from "@/components/layout/Footer";
import { processSteps } from "@/data/processSteps";

// ── Step item — number node lights up as it crosses the viewport centre ─

function StepItem({
  step,
  index,
}: {
  step: (typeof processSteps)[number];
  index: number;
}) {
  const ref = useRef<HTMLLIElement>(null);
  const active = useInView(ref, { margin: "-45% 0px -45% 0px" });

  return (
    <li ref={ref} className="relative flex gap-8 md:gap-12 pb-16 md:pb-20 last:pb-0">
      {/* Number node */}
      <div className="relative z-10 shrink-0">
        <motion.div
          animate={{
            backgroundColor: active ? "#D4B876" : "#ffffff",
            borderColor: active ? "#D4B876" : "rgba(0,0,0,0.15)",
            scale: active ? 1.08 : 1,
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-full border"
        >
          <motion.span
            animate={{ color: active ? "#000000" : "rgba(0,0,0,0.4)" }}
            transition={{ duration: 0.4 }}
            className="text-base md:text-lg font-light tabular-nums"
          >
            {String(index + 1).padStart(2, "0")}
          </motion.span>
        </motion.div>
      </div>

      {/* Content */}
      <motion.div
        className="pt-2 md:pt-3"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true, margin: "-15% 0px -15% 0px" }}
      >
        <h3 className="text-2xl md:text-3xl font-thin tracking-tight text-black">
          {step.name}
        </h3>
        <p className="mt-4 max-w-3xl text-lg font-light leading-relaxed text-black/65">
          {step.text}
        </p>
        {step.list && (
          <ul className="mt-6 max-w-3xl space-y-3 border-t border-black/10 pt-6">
            {step.list.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-base font-light text-black/60"
              >
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#D4B876]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}
      </motion.div>
    </li>
  );
}

// ── Timeline — vertical gold line draws in as the section is scrolled ──

function StepsTimeline() {
  const containerRef = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <ol ref={containerRef} className="relative">
      {/* Static track */}
      <div
        aria-hidden
        className="absolute left-7 md:left-8 top-2 bottom-2 w-px bg-black/10"
      />
      {/* Progress line — reveals as you scroll through the steps */}
      <motion.div
        aria-hidden
        style={{ height: lineHeight }}
        className="absolute left-7 md:left-8 top-2 w-px origin-top bg-[#D4B876]"
      />

      {processSteps.map((step, i) => (
        <StepItem key={step.name} step={step} index={i} />
      ))}
    </ol>
  );
}

// ── ProcessContent ────────────────────────────────────────────────────

export default function ProcessContent() {
  return (
    <main>
      {/* ── Steps ────────────────────────────────────────────── */}
      <section
        id="etapy-wyceny"
        className="relative bg-white px-8 pt-40 pb-32 text-black md:px-16 md:pt-38 lg:px-24"
        data-navbar="dark"
      >
        <div className="mx-auto max-w-[1000px]">
          <motion.div
            className="mb-6 flex items-center gap-5"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="h-px w-12 shrink-0 bg-[#D4B876]" />
            <span className="text-sm font-medium uppercase tracking-[0.4em] text-[#D4B876]">
              Proces wyceny
            </span>
          </motion.div>

          <motion.h1
            className="max-w-2xl text-4xl font-thin leading-[1.05] tracking-tight md:text-5xl"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            9 etapów <span className="font-semibold">rzetelnej wyceny</span>
          </motion.h1>

          <motion.p
            className="mt-6 max-w-xl text-lg font-light leading-relaxed text-black/65"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Dziewięć etapów, które dzielą zlecenie od gotowego operatu
            szacunkowego. Każda wycena nieruchomości — niezależnie od jej celu
            — przebiega według tego samego, uporządkowanego procesu.
          </motion.p>

          <div className="mt-20">
            <StepsTimeline />
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden bg-[#D4B876] px-8 py-28"
        data-navbar="dark"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-white/20 blur-3xl"
        />

        <div className="relative z-10 mx-auto max-w-[860px] text-center">
          <motion.span
            className="text-sm font-medium uppercase tracking-[0.38em] text-black/55"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Rozpocznij współpracę
          </motion.span>

          <motion.h2
            className="mt-5 text-5xl font-thin tracking-tight text-black"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Gotowy na <span className="font-semibold">zlecenie wyceny?</span>
          </motion.h2>

          <motion.p
            className="mx-auto mt-6 max-w-[540px] text-xl font-light leading-relaxed text-black/65"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Skontaktuj się, aby ustalić cel wyceny i zakres dokumentacji —
            resztą procesu zajmę się kompleksowo.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Link href="/contact">
              <button className="group relative mt-10 inline-flex items-center gap-3 overflow-hidden rounded-full border border-black/40 px-8 py-4 cursor-pointer">
                <span className="absolute inset-0 -translate-x-full bg-black transition-transform duration-500 ease-out group-hover:translate-x-0" />
                <span className="relative z-10 flex items-center gap-3 text-black transition-colors duration-300 group-hover:text-white">
                  <span className="text-lg font-light uppercase tracking-[0.18em]">
                    Kontakt
                  </span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-transform duration-300 ease-out group-hover:translate-x-1"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </span>
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
