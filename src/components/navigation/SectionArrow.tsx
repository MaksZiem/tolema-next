"use client";

import { motion } from "framer-motion";

const CustomArrowDown = ({
  size = 44,
  style,
}: {
  size?: number;
  style?: React.CSSProperties;
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    style={style}
  >
    <path
      d="M7 10L12 15L17 10"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const SectionArrow = ({
  label = "SCROLL",
  targetSection,
  color = "white",
  inline = false,
}: {
  label?: string;
  targetSection?: string;
  color?: string;
  inline?: boolean | "mobile";
}) => {
  const scrollToSection = () => {
    if (targetSection) {
      const element = document.getElementById(targetSection);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
    }
  };

  const shadowColor =
    color === "white"
      ? "rgba(255,255,255,0.55)"
      : "rgba(0,0,0,0.35)";

  return (
    <>
      <style>{`
        @keyframes arrow-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(8px); }
        }
      `}</style>
      <motion.button
        type="button"
        aria-label={`Przewiń do sekcji: ${label}`}
        className={`${
          inline === "mobile"
            ? "relative mx-auto md:absolute md:bottom-8 md:left-1/2 md:mx-0 md:-translate-x-1/2"
            : inline
              ? "relative mx-auto"
              : "absolute bottom-8 left-1/2 -translate-x-1/2"
        } cursor-pointer flex flex-col items-center`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        onClick={scrollToSection}
      >
        <span className="block" style={{ animation: "arrow-float 2s ease-in-out infinite", willChange: "transform" }}>
          <CustomArrowDown
            size={44}
            style={{
              color,
              filter: `drop-shadow(0 3px 8px ${shadowColor})`,
            }}
          />
        </span>

        <span
          className="block text-l font-normal mt-3 text-center opacity-70 font-light tracking-widest"
          style={{ color }}
        >
          {label}
        </span>
      </motion.button>
    </>
  );
};

export default SectionArrow;
