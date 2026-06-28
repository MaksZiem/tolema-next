// "use client";

// import { motion } from "framer-motion";
// import type { MotionValue } from "framer-motion";
// import PricingButton from "@/components/ui/PricingButton";

// type Theme = "dark" | "gold" | "light";

// interface OfferSectionProps {
//   y: MotionValue<number>;
//   theme: Theme;
//   eyebrow: string;
//   titleLead: string;
//   titleStrong: string;
//   lead: string;
//   tags: string[];
//   videoPrimary: string;
//   videoSecondary: string;
//   buttonVariant: "default" | "reverse" | "black";
// }

// const themes: Record<
//   Theme,
//   {
//     bg: string;
//     text: string;
//     sub: string;
//     eyebrow: string;
//     rule: string;
//     tick: string;
//     tickAccent: string;
//     tag: string;
//     glow: string;
//     ring: string;
//     meta: string;
//   }
// > = {
//   dark: {
//     bg: "bg-black",
//     text: "text-white",
//     sub: "text-white/60",
//     eyebrow: "text-[#D4B876]",
//     rule: "bg-white/15",
//     tick: "bg-white/30",
//     tickAccent: "bg-[#D4B876]",
//     tag: "border-white/20 text-white/75 hover:border-[#D4B876] hover:text-white",
//     glow: "bg-[#D4B876]/25",
//     ring: "ring-white/10",
//     meta: "text-white/50",
//   },
//   gold: {
//     bg: "bg-[#D4B876]",
//     text: "text-black",
//     sub: "text-black/70",
//     eyebrow: "text-black/80",
//     rule: "bg-black/20",
//     tick: "bg-black/30",
//     tickAccent: "bg-white",
//     tag: "border-black/25 text-black/75 hover:border-black hover:text-black",
//     glow: "bg-white/40",
//     ring: "ring-black/10",
//     meta: "text-black/55",
//   },
//   light: {
//     bg: "bg-white",
//     text: "text-black",
//     sub: "text-black/60",
//     eyebrow: "text-[#B8964E]",
//     rule: "bg-black/15",
//     tick: "bg-black/25",
//     tickAccent: "bg-[#D4B876]",
//     tag: "border-black/15 text-black/70 hover:border-[#D4B876] hover:text-black",
//     glow: "bg-[#D4B876]/30",
//     ring: "ring-black/5",
//     meta: "text-black/50",
//   },
// };

// // Podziałka z kreskami — sygnaturowy element nawiązujący do mierzenia/szacowania.
// const ticks = Array.from({ length: 11 });

// export default function OfferSection({
//   y,
//   theme,
//   eyebrow,
//   titleLead,
//   titleStrong,
//   lead,
//   tags,
//   videoPrimary,
//   videoSecondary,
//   buttonVariant,
// }: OfferSectionProps) {
//   const t = themes[theme];

//   return (
//     <motion.div
//       style={{ y }}
//       className={`sticky top-0 h-screen w-full overflow-hidden ${t.bg} ${t.text} border-t border-gray-300/30`}
//     >
//       <div className="mx-auto flex h-full max-w-[1400px] items-center gap-16 px-12">
//         {/* ── Media ───────────────────────────────────────────── */}
//         <div className="relative flex h-[64vh] w-1/2 items-center justify-center">
//           {/* Ambient glow — jedyny element atmosferyczny */}
//           <motion.div
//             aria-hidden
//             className={`absolute h-[26rem] w-[26rem] rounded-full blur-3xl ${t.glow}`}
//             animate={{ scale: [1, 1.12, 1], opacity: [0.5, 0.8, 0.5] }}
//             transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
//           />

//           {/* Kadr główny */}
//           <motion.figure
//             className={`group relative z-10 h-[28rem] w-[38rem] max-w-full overflow-hidden rounded-3xl shadow-2xl ring-1 ${t.ring}`}
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
//             viewport={{ once: true }}
//           >
//             <video
//               autoPlay
//               muted
//               loop
//               playsInline
//               className="h-full w-full object-cover grayscale transition-[filter] duration-700 group-hover:grayscale-0"
//             >
//               <source src={videoPrimary} type="video/mp4" />
//             </video>
//             <span
//               className={`pointer-events-none absolute left-4 top-4 rounded-full bg-black/40 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white/90 backdrop-blur-sm`}
//             >
//               {eyebrow}
//             </span>
//           </motion.figure>

//           {/* Kadr drugi — przesunięty */}
//           <motion.figure
//             className={`absolute bottom-2 right-2 z-20 h-[18rem] w-[24rem] max-w-[60%] overflow-hidden rounded-2xl shadow-2xl ring-1 ${t.ring}`}
//             initial={{ opacity: 0, y: -30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
//             viewport={{ once: true }}
//           >
//             <video
//               autoPlay
//               muted
//               loop
//               playsInline
//               className="h-full w-full object-cover grayscale"
//             >
//               <source src={videoSecondary} type="video/mp4" />
//             </video>
//           </motion.figure>
//         </div>

//         {/* ── Treść ───────────────────────────────────────────── */}
//         <div className="flex w-1/2 flex-col">
//           <motion.span
//             className={`text-sm font-medium uppercase tracking-[0.32em] ${t.eyebrow}`}
//             initial={{ opacity: 0, x: 40 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6, ease: "easeOut" }}
//             viewport={{ once: true }}
//           >
//             {eyebrow}
//           </motion.span>

//           <motion.h2
//             className="mt-5 text-6xl font-thin leading-[1.05] tracking-tight"
//             initial={{ opacity: 0, x: 40 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.7, ease: "easeOut", delay: 0.05 }}
//             viewport={{ once: true }}
//           >
//             {titleLead} <span className="font-semibold">{titleStrong}</span>
//           </motion.h2>

//           {/* Podziałka + lead */}
//           <motion.div
//             className="mt-9 flex gap-6"
//             initial={{ opacity: 0, x: 40 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
//             viewport={{ once: true }}
//           >
//             <div className="flex shrink-0 flex-col justify-between py-1">
//               {ticks.map((_, i) => (
//                 <motion.span
//                   key={i}
//                   className={`h-px ${i % 5 === 0 ? `w-5 ${t.tickAccent}` : `w-2.5 ${t.tick}`}`}
//                   initial={{ scaleX: 0, originX: 0 }}
//                   whileInView={{ scaleX: 1 }}
//                   transition={{ duration: 0.4, delay: 0.2 + i * 0.04 }}
//                   viewport={{ once: true }}
//                 />
//               ))}
//             </div>
//             <p className={`max-w-[34rem] text-2xl font-light leading-relaxed ${t.sub}`}>
//               {lead}
//             </p>
//           </motion.div>

//           {/* Tagi zakresu */}
//           <motion.ul
//             className="mt-8 flex flex-wrap gap-2.5"
//             initial={{ opacity: 0, x: 40 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.7, ease: "easeOut", delay: 0.25 }}
//             viewport={{ once: true }}
//           >
//             {tags.map((tag) => (
//               <li
//                 key={tag}
//                 className={`cursor-default rounded-full border px-4 py-1.5 text-sm transition-colors duration-300 ${t.tag}`}
//               >
//                 {tag}
//               </li>
//             ))}
//           </motion.ul>

//           <motion.div
//             className="mt-2 self-start"
//             initial={{ opacity: 0, x: 40 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.7, ease: "easeOut", delay: 0.35 }}
//             viewport={{ once: true }}
//           >
//             <PricingButton variant={buttonVariant} />
//           </motion.div>
//         </div>
//       </div>
//     </motion.div>
//   );
// }

"use client";

import { motion } from "framer-motion";
import type { MotionValue } from "framer-motion";
import PricingButton from "@/components/ui/PricingButton";

type Theme = "dark" | "gold" | "light";

interface OfferSectionProps {
  y: MotionValue<number>;
  theme: Theme;
  eyebrow: string;
  titleLead: string;
  titleStrong: string;
  lead: string;
  tags: string[];
  videoPrimary: string;
  videoSecondary: string;
  buttonVariant: "default" | "reverse" | "black";
}

const themes: Record<
  Theme,
  {
    bg: string;
    text: string;
    sub: string;
    eyebrow: string;
    rule: string;
    tick: string;
    tickAccent: string;
    tag: string;
    glow: string;
    ring: string;
    meta: string;
  }
> = {
  dark: {
    bg: "bg-black",
    text: "text-white",
    sub: "text-white/60",
    eyebrow: "text-[#D4B876]",
    rule: "bg-white/15",
    tick: "bg-white/30",
    tickAccent: "bg-[#D4B876]",
    tag: "border-white/20 text-white/75 hover:border-[#D4B876] hover:text-white",
    glow: "bg-[#D4B876]/25",
    ring: "ring-white/10",
    meta: "text-white/50",
  },
  gold: {
    bg: "bg-[#D4B876]",
    text: "text-black",
    sub: "text-black/70",
    eyebrow: "text-black/80",
    rule: "bg-black/20",
    tick: "bg-black/30",
    tickAccent: "bg-white",
    tag: "border-black/25 text-black/75 hover:border-black hover:text-black",
    glow: "bg-white/40",
    ring: "ring-black/10",
    meta: "text-black/55",
  },
  light: {
    bg: "bg-white",
    text: "text-black",
    sub: "text-black/60",
    eyebrow: "text-[#B8964E]",
    rule: "bg-black/15",
    tick: "bg-black/25",
    tickAccent: "bg-[#D4B876]",
    tag: "border-black/15 text-black/70 hover:border-[#D4B876] hover:text-black",
    glow: "bg-[#D4B876]/30",
    ring: "ring-black/5",
    meta: "text-black/50",
  },
};

// Podziałka z kreskami — sygnaturowy element nawiązujący do mierzenia/szacowania.
const ticks = Array.from({ length: 11 });

export default function OfferSection({
  y,
  theme,
  eyebrow,
  titleLead,
  titleStrong,
  lead,
  tags,
  videoPrimary,
  videoSecondary,
  buttonVariant,
}: OfferSectionProps) {
  const t = themes[theme];

  return (
    <motion.div
      style={{ y }}
      className={`sticky top-0 h-screen w-full overflow-hidden ${t.bg} ${t.text} border-t border-gray-300/30`}
    >
      <div className="mx-auto flex h-full max-w-[1400px] items-center gap-48 px-12">
        {/* ── Media ───────────────────────────────────────────── */}
        <div className="relative flex h-[64vh] w-1/2 items-center justify-center">
          {/* Ambient glow — jedyny element atmosferyczny */}
          <motion.div
            aria-hidden
            className={`absolute h-[26rem] w-[26rem] rounded-full blur-3xl ${t.glow}`}
            animate={{ scale: [1, 1.12, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Kadr główny */}
          <motion.figure
            className={`group relative z-10 h-[28rem] w-[38rem] max-w-full overflow-hidden rounded-3xl shadow-2xl ring-1 ${t.ring}`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              className="h-full w-full object-cover grayscale transition-[filter] duration-700 group-hover:grayscale-0"
            >
              <source src={videoPrimary} type="video/mp4" />
            </video>
            <span
              className={`pointer-events-none absolute left-4 top-4 rounded-full bg-black/40 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white/90 backdrop-blur-sm`}
            >
              {eyebrow}
            </span>
          </motion.figure>

          {/* Kadr drugi — przesunięty bardziej w prawo */}
          <motion.figure
            className={`absolute bottom-2 -right-20 z-20 h-[18rem] w-[24rem] max-w-[60%] overflow-hidden rounded-2xl shadow-2xl ring-1 ${t.ring}`}
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              className="h-full w-full object-cover grayscale"
            >
              <source src={videoSecondary} type="video/mp4" />
            </video>
          </motion.figure>
        </div>

        {/* ── Treść ───────────────────────────────────────────── */}
        <div className="flex w-1/2 flex-col">
          <motion.span
            className={`text-sm font-medium uppercase tracking-[0.32em] ${t.eyebrow}`}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {eyebrow}
          </motion.span>

          <motion.h2
            className="mt-5 text-6xl font-thin leading-[1.05] tracking-tight"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.05 }}
            viewport={{ once: true }}
          >
            {titleLead} <span className="font-semibold">{titleStrong}</span>
          </motion.h2>

          {/* Podziałka + lead */}
          <motion.div
            className="mt-9 flex gap-6"
            initial={{ opacity: 0, x: 40 }}
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
            <p className={`max-w-[34rem] text-2xl font-light leading-relaxed ${t.sub}`}>
              {lead}
            </p>
          </motion.div>

          {/* Tagi zakresu */}
          <motion.ul
            className="mt-8 flex flex-wrap gap-2.5"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.25 }}
            viewport={{ once: true }}
          >
            {tags.map((tag) => (
              <li
                key={tag}
                className={`cursor-default rounded-full border px-4 py-1.5 text-sm transition-colors duration-300 ${t.tag}`}
              >
                {tag}
              </li>
            ))}
          </motion.ul>

          <motion.div
            className="mt-2 self-start"
            initial={{ opacity: 0, x: 40 }}
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