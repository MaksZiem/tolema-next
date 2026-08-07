"use client";

import { motion } from "framer-motion";

export default function RevealText({
  text,
  delay = 0.5,
  duration = 2,
}: {
  text: string;
  delay?: number;
  duration?: number;
}) {
  return (
    <div className="relative pb-4">
      <span className="text-black text-center">{text}</span>
      <motion.span
        initial={{ clipPath: "polygon(0 0, 0% 0, 0% 100%, 0 100%)" }}
        animate={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
        transition={{ duration, ease: "easeInOut", delay }}
        className="absolute top-0 left-0 text-white pb-4 text-center"
      >
        {text}
      </motion.span>
    </div>
  );
}
