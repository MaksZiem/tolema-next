"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const docTop = (el: HTMLElement): number => {
      let top = 0;
      let node: HTMLElement | null = el;
      while (node) {
        top += node.offsetTop;
        node = node.offsetParent as HTMLElement | null;
      }
      return top;
    };

    const update = () => {
      // 72px ≈ navbar height — find what section sits just below the bar
      const threshold = window.scrollY + 72;
      const sections = Array.from(
        document.querySelectorAll<HTMLElement>("[data-navbar]")
      );

      let active: "light" | "dark" = "light";
      for (const s of sections) {
        // offsetTop chain gives natural flow position, unaffected by sticky
        if (docTop(s) <= threshold) {
          active = (s.dataset.navbar as "light" | "dark") ?? "light";
        }
      }
      setTheme(active);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  const color = isOpen ? "#000000" : theme === "light" ? "#ffffff" : "#000000";

  const navLinks = [
    { href: "/offer", label: "Oferta" },
    { href: "/path", label: "Jak przebiega wycena" },
    { href: "/contact", label: "Kontakt" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 py-2 px-6 flex items-center justify-between ${
        isOpen ? "backdrop-blur-sm bg-white/50" : "backdrop-blur-sm bg-white/10"
      }`}
    >
      <Link href="/">
        <div
          className="font-bold text-3xl"
          style={{ color, transition: "color 0.35s ease" }}
        >
          TOLEMA wyceny
        </div>
      </Link>

      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="focus:outline-none"
          style={{ color, transition: "color 0.35s ease" }}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      <ul
        className={`flex flex-col md:flex-row md:items-center absolute md:static top-full left-0 w-full text-2xl md:w-auto transition-all duration-300 ease-in ${
          isOpen ? "block backdrop-blur-sm bg-white/50" : "hidden md:flex"
        }`}
      >
        {navLinks.map(({ href, label }) => (
          <li
            key={href}
            className="py-2 px-4 cursor-pointer relative group"
            style={{ color, transition: "color 0.35s ease" }}
          >
            <Link href={href} className="block">
              {label}
              <div
                className="absolute bottom-0 left-4 right-4 h-0.5 scale-x-0 group-hover:scale-x-100 origin-left"
                style={{
                  backgroundColor: color,
                  transition: "scale 0.3s ease-out, background-color 0.35s ease",
                }}
              />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
