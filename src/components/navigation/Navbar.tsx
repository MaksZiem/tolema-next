"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const navLinks = [
  { href: "/", label: "Strona główna" },
  { href: "/offer", label: "Oferta" },
  { href: "/process", label: "Proces wyceny" },
  { href: "/contact", label: "Kontakt" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // Route changed - whatever link was tapped, the menu has done its job.
  // Adjusted during render (not in an effect) to avoid an extra render pass.
  const [menuPathname, setMenuPathname] = useState(pathname);
  if (pathname !== menuPathname) {
    setMenuPathname(pathname);
    setIsOpen(false);
  }

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
      // 72px ≈ navbar height - find what section sits just below the bar
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

    // Sections can shift after mount (video/image loads, fonts, etc.),
    // which changes their offsetTop - recompute whenever the page height changes.
    const resizeObserver = new ResizeObserver(update);
    resizeObserver.observe(document.body);

    return () => {
      window.removeEventListener("scroll", update);
      resizeObserver.disconnect();
    };
  }, []);

  // Keep the page still while the mobile panel is open. Closing has no exit
  // animation (see panel below), so unlocking synchronously here can't race it.
  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  const color = isOpen ? "#ffffff" : theme === "light" ? "#ffffff" : "#000000";

  return (
    <nav
      className={`fixed top-0 left-0 z-50 flex w-full items-center justify-between px-6 py-3 transition-colors ${
        isOpen ? "bg-[#0d0d0d]" : "backdrop-blur-sm bg-white/10"
      }`}
      style={{ transitionDuration: isOpen ? "250ms" : "0ms" }}
    >
      <Link href="/">
        <div
          className="text-2xl font-bold min-[900px]:text-3xl"
          style={{ color, transition: isOpen ? "color 0.25s ease" : "color 0ms" }}
        >
          TOLEMA wyceny <span className="font-thin">sp. z o.o.</span>
        </div>
      </Link>

      <ul className="hidden items-center text-xl min-[900px]:flex">
        {navLinks.map(({ href, label }) => {
          const isActive =
            href === "/" ? pathname === "/" : pathname.startsWith(href);

          return (
            <li
              key={href}
              className="group relative"
              style={{ color, transition: "color 0.35s ease" }}
            >
              <Link href={href} className="block px-4 py-2">
                {label}
                <div
                  className={`absolute bottom-0 left-4 right-4 h-0.5 origin-left ${
                    isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                  style={{
                    backgroundColor: color,
                    transition: "scale 0.3s ease-out, background-color 0.35s ease",
                  }}
                />
              </Link>
            </li>
          );
        })}
      </ul>

      <button
        onClick={() => setIsOpen((v) => !v)}
        aria-expanded={isOpen}
        aria-label={isOpen ? "Zamknij menu" : "Otwórz menu"}
        className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-[6px] focus:outline-none min-[900px]:hidden"
      >
        <motion.span
          className="block h-[1.5px] w-6 rounded-full"
          style={{ backgroundColor: color }}
          animate={isOpen ? { rotate: 45, y: 7.5 } : { rotate: 0, y: 0 }}
          transition={{ duration: isOpen ? 0.3 : 0 }}
        />
        <motion.span
          className="block h-[1.5px] w-6 rounded-full"
          style={{ backgroundColor: color }}
          animate={{ opacity: isOpen ? 0 : 1 }}
          transition={{ duration: isOpen ? 0.2 : 0 }}
        />
        <motion.span
          className="block h-[1.5px] w-6 rounded-full"
          style={{ backgroundColor: color }}
          animate={isOpen ? { rotate: -45, y: -7.5 } : { rotate: 0, y: 0 }}
          transition={{ duration: isOpen ? 0.3 : 0 }}
        />
      </button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className="fixed inset-0 top-0 z-40 flex flex-col bg-[#0d0d0d] min-[900px]:hidden"
        >
          <div className="flex flex-1 flex-col justify-center px-8">
            <ul className="flex flex-col">
              {navLinks.map(({ href, label }, i) => {
                const isActive =
                  href === "/" ? pathname === "/" : pathname.startsWith(href);

                return (
                  <motion.li
                    key={href}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.06 * i + 0.1 }}
                    className="border-b border-white/15"
                  >
                    <Link
                      href={href}
                      className="group block py-5"
                    >
                      <span
                        className={`text-4xl font-normal transition-colors duration-300 ${
                          isActive
                            ? "text-[#D4B876]"
                            : "text-white group-hover:text-[#D4B876]"
                        }`}
                      >
                        {label}
                      </span>
                    </Link>
                  </motion.li>
                );
              })}
            </ul>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.35 }}
            className="flex items-center justify-between px-8 py-8 text-base font-normal text-white/80"
          >
            <span>TOLEMA wyceny</span>
            <a
              href="mailto:operat23@gmail.com"
              className="transition-colors duration-300 hover:text-[#D4B876]"
            >
              operat23@gmail.com
            </a>
          </motion.div>
        </motion.div>
      )}
    </nav>
  );
}
