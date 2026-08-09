"use client";

import { motion } from "framer-motion";
import RevealText from "@/components/ui/RevealText";

const lines = [
  { text: "Wiedza i praktyka" },
  { text: "Najwyższe standardy" },
  { text: "Zaangażowanie" },
];

// Padding-left i font-size na md+ skalują się razem jako % szerokości ekranu
// (clamp z jednostką vw) — proporcje zostają identyczne na każdej szerokości,
// więc tekst nigdy nie wychodzi poza viewport (był na sztywnych pikselach
// dobranych pod ~1920px, co powodowało poziomy scroll poniżej tej szerokości).
const heroWrapperClasses = [
  "relative z-10 flex justify-center text-center px-6 pt-28 text-4xl font-normal min-[1600px]:justify-start min-[1600px]:text-left min-[1600px]:px-0 min-[1600px]:pt-70 min-[1600px]:pl-[clamp(2rem,66.67vw,80rem)] min-[1600px]:text-[clamp(1.75rem,3.75vw,4.5rem)] min-[1600px]:leading-[1.05]",
  "relative z-10 flex justify-center text-center px-6 pt-2 text-3xl font-bold min-[1600px]:justify-start min-[1600px]:text-left min-[1600px]:px-0 min-[1600px]:pl-[clamp(2rem,58.33vw,70rem)] min-[1600px]:pt-5 min-[1600px]:text-[clamp(1.5rem,3.125vw,3.75rem)] min-[1600px]:leading-[1.05]",
  "relative z-10 flex justify-center text-center px-6 pt-4 text-3xl font-extralight min-[1600px]:justify-start min-[1600px]:text-left min-[1600px]:px-0 min-[1600px]:pl-[clamp(2rem,58.33vw,70rem)] min-[1600px]:pt-10 min-[1600px]:text-[clamp(1.5rem,3.125vw,3.75rem)] min-[1600px]:leading-[1.05]",
];

const inlineWrapperClasses = [
  "relative z-10 flex text-5xl min-[1600px]:text-6xl font-normal",
  "relative z-10 flex text-4xl min-[1600px]:text-5xl font-bold mt-1",
  "relative z-10 flex text-4xl min-[1600px]:text-5xl font-extralight mt-1",
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
