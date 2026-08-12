"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const SLIDES = ["/slider1.webp", "/slider2.webp", "/slider4.webp"];
const INTERVAL_MS = 5000;

export default function HeroMobileSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % SLIDES.length);
    }, INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none select-none">
      {SLIDES.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt=""
          fill
          quality={40}
          preload={i === 0}
          fetchPriority={i === 0 ? "high" : "auto"}
          sizes="100vw"
          className={`object-cover grayscale brightness-[0.2] transition-opacity duration-[1500ms] ease-in-out ${
            i === index ? "opacity-90" : "opacity-0"
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-gray-800/30" />
    </div>
  );
}
