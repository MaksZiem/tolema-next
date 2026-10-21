"use client";

import { motion } from "framer-motion";

const CustomArrowDown = ({
  size = 44,
  style,
  className,
}: {
  size?: number;
  style?: React.CSSProperties;
  className?: string;
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    style={style}
    className={className}
    aria-hidden="true"
  >
    <path
      d="M7 10L12 15L17 10"
      stroke="currentColor"
      strokeWidth="1.75"
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

  return (
    <motion.button
      type="button"
      aria-label={`Przewiń do sekcji: ${label}`}
      className={`${
        inline === "mobile"
          ? "relative mx-auto md:absolute md:bottom-8 md:left-1/2 md:mx-0 md:-translate-x-1/2"
          : inline
            ? "relative mx-auto"
            : "absolute bottom-8 left-1/2 -translate-x-1/2"
      } group cursor-pointer flex flex-col items-center`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      onClick={scrollToSection}
    >
      <span
        className="block text-base md:text-lg font-medium text-center opacity-90 tracking-[0.2em] transition-opacity duration-300 group-hover:opacity-100"
        style={{ color }}
      >
        {label}
      </span>
      <CustomArrowDown
        size={32}
        style={{ color }}
        className="mt-1 transition-transform duration-300 ease-out group-hover:translate-y-1"
      />
    </motion.button>
  );
};

export default SectionArrow;
