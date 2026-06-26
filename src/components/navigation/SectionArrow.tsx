"use client";

import { motion } from "framer-motion";

// Niestandardowa strzałka SVG — zadeklarowana poza komponentem,
// żeby nie była tworzona od nowa przy każdym renderze.
const CustomArrowDown = ({
  size = 44,
  className = "",
  style,
}: {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
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
}: {
  label?: string;
  targetSection?: string;
  color?: string;
}) => {
  const scrollToSection = () => {
    if (targetSection) {
      const element = document.getElementById(targetSection);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    } else {
      // Fallback - scroll to next viewport height
      window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {/* Animowana strzałka */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0, duration: 0.8, ease: "easeOut" }}
        onClick={scrollToSection}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative flex flex-col items-center"
        >
          {/* Blur/shadow efekt w tle */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <CustomArrowDown
              size={48}
              className={`blur-sm opacity-60`}
              style={{ color }}
            />
          </motion.div>

          {/* Główna ikona strzałki */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0, duration: 0.5, ease: "easeOut" }}
          >
            <CustomArrowDown
              size={44}
              className="relative z-10"
              style={{ color }}
            />
          </motion.div>

          {/* Glow efekt */}
          <motion.div
            className="absolute inset-0 rounded-full opacity-30 blur-2xl w-24 h-24 flex items-center justify-center"
            style={{ backgroundColor: color }}
            animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        {/* Tekst pod strzałką */}
        <motion.p
          className="text-l font-normal mt-3 text-center opacity-70 font-light tracking-widest"
          style={{ color }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0, duration: 0.6 }}
        >
          {label}
        </motion.p>
      </motion.div>
    </>
  );
};

export default SectionArrow;