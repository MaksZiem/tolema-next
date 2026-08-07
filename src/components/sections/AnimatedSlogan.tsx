"use client";

import { motion } from "framer-motion";
import RevealText from "@/components/ui/RevealText";

const lines = [
  { text: "Wiedza i praktyka" },
  { text: "Najwyższe standardy" },
  { text: "Zaangażowanie" },
];

const heroWrapperClasses = [
  "relative z-10 flex pt-70 pl-320 text-7xl font-normal",
  "relative z-10 flex pl-280 h-20 pt-5 text-6xl font-bold",
  "relative z-10 flex pl-280 h-20 pt-10 text-6xl font-extralight",
];

const inlineWrapperClasses = [
  "relative z-10 flex text-5xl md:text-6xl font-normal",
  "relative z-10 flex text-4xl md:text-5xl font-bold mt-1",
  "relative z-10 flex text-4xl md:text-5xl font-extralight mt-1",
];

export default function AnimatedSlogan({
  variant = "hero",
}: {
  variant?: "hero" | "inline";
}) {
  const wrapperClasses = variant === "hero" ? heroWrapperClasses : inlineWrapperClasses;

  return (
    <>
      {lines.map(({ text }, i) => (
        <motion.div
          key={text}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className={wrapperClasses[i]}
        >
          <RevealText text={text} />
        </motion.div>
      ))}
    </>
  );
}
