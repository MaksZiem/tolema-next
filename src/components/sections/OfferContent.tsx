"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Footer from "@/components/layout/Footer";

// ── Data ──────────────────────────────────────────────────────────────

const services = [
  {
    id: "nieruchomosci",
    dark: false,
    eyebrow: "Nieruchomości",
    title: "Wycena",
    titleStrong: "nieruchomości",
    description:
      "Sporządzamy operaty szacunkowe dla wszystkich rodzajów nieruchomości — gruntów, budynków, lokali i ograniczonych praw rzeczowych. Wyceny realizujemy zgodnie z obowiązującymi przepisami prawa i standardami zawodowymi rzeczoznawców majątkowych.",
    useCases: [
      "Sprzedaż, zakup i zamiana nieruchomości",
      "Zabezpieczenie wierzytelności bankowych",
      "Postępowania sądowe i egzekucyjne",
      "Aktualizacja opłat rocznych i podatków",
    ],
    tags: [
      "Wycena gruntu",
      "Wycena domu",
      "Wycena działki",
      "Wycena mieszkania",
      "Wycena budynku",
      "Lokal mieszkalny",
      "Lokal użytkowy",
      "Lokal spółdzielczy",
      "Nieruchomości komercyjne",
      "Nieruchomości przemysłowe",
      "Nieruchomości magazynowe",
      "Nieruchomości biurowe",
      "Nieruchomości rolne",
      "Budynki mieszkalne",
      "Kamienice",
      "Osiedla wielorodzinne",
      "Ograniczone prawa rzeczowe",
      "Wycena służebności",
      "Wycena dzierżawy",
      "Prawo użytkowania wieczystego",
      "Prawo dożywocia",
      "Droga konieczna",
      "Przejazd i przechód",
      "Bezumowne korzystanie z nieruchomości",
      "Aktualizacja opłaty rocznej",
      "Wycena czynszu",
    ],
  },
  {
    id: "maszyny",
    dark: true,
    eyebrow: "Maszyny i środki techniczne",
    title: "Wycena maszyn",
    titleStrong: "i urządzeń",
    description:
      "Posiadamy uprawnienia do szacowania ruchomości, maszyn, urządzeń i środków technicznych wszelkich branż i typów. Wyceny obejmują zarówno pojedyncze urządzenia, jak i całe parki maszynowe oraz ciągi technologiczne.",
    useCases: [
      "Sprzedaż, zakup i likwidacja majątku",
      "Ubezpieczenie maszyn i urządzeń",
      "Postępowania sądowe i egzekucyjne",
      "Inwentaryzacja środków trwałych",
    ],
    tags: [
      "Maszyny budowlane",
      "Maszyny drogowe",
      "Maszyny rolnicze",
      "Maszyny leśne",
      "Maszyny przemysłowe",
      "Ciągniki",
      "Koparki",
      "Koparko-ładowarki",
      "Ładowarki",
      "Wózki widłowe i podnośniki",
      "Samochody specjalistyczne",
      "Pojazdy nietypowe",
      "Naczepy, przyczepy i cysterny",
      "Tabor kolejowy",
      "Lokomotywy i wagony",
      "Linie technologiczne",
      "Ciągi technologiczne",
      "Megaukłady techniczne",
      "Maszyny przemysłu drzewnego",
      "Środki trwałe",
      "Środki niskocenne",
      "Urządzenia miernicze i pomiarowe",
    ],
  },
  {
    id: "ruchomosci",
    dark: false,
    eyebrow: "Wyposażenie i ruchomości",
    title: "Wycena",
    titleStrong: "wyposażenia",
    description:
      "Wyceniamy wyposażenie domów, gabinetów specjalistycznych, obiektów sportowych i warsztatów. Przeprowadzamy również kompleksowe inwentaryzacje majątku ruchomego na potrzeby prawne, ubezpieczeniowe i transakcyjne.",
    useCases: [
      "Podział majątku i postępowania spadkowe",
      "Ubezpieczenie wyposażenia",
      "Odszkodowania za uszkodzenie mienia",
      "Inwentaryzacja i wycena zbiorów",
    ],
    tags: [
      "Sprzęt RTV i AGD",
      "Sprzęt komputerowy",
      "Wyposażenie mieszkania",
      "Wyposażenie warsztatu",
      "Wyposażenie parku maszynowego",
      "Sprzęt medyczny",
      "Sprzęt stomatologiczny",
      "Gabinet weterynaryjny",
      "Wyposażenie szpitala",
      "Wyposażenie przychodni",
      "Salon kosmetyczny",
      "Sprzęt fitness i siłownia",
      "Urządzenia myjni",
      "Stany magazynowe",
      "Jachty i sprzęt wodny",
      "Wyposażenie lotniska",
      "Inwentaryzacje",
    ],
  },
  {
    id: "biznes",
    dark: true,
    eyebrow: "Biznes i aktywa niematerialne",
    title: "Wycena",
    titleStrong: "przedsiębiorstwa",
    description:
      "Przygotowujemy wyceny przedsiębiorstw, spółek i aktywów niematerialnych na potrzeby transakcji, postępowań sądowych oraz rozliczeń podatkowych. Stosujemy podejścia dochodowe, majątkowe i porównawcze.",
    useCases: [
      "Transakcje M&A i sukcesja biznesu",
      "Spory wspólnicze i podziały majątku",
      "Rozliczenia podatkowe i apportowe",
      "Restrukturyzacja i likwidacja spółek",
    ],
    tags: [
      "Wycena przedsiębiorstwa",
      "Zorganizowana część przedsiębiorstwa",
      "Wycena spółki",
      "Wycena akcji",
      "Wycena udziałów",
      "Działalność gospodarcza",
      "Znak towarowy i marka",
      "Know-how",
      "Wycena patentów",
      "Aktywa niematerialne",
      "Instrumenty finansowe",
      "Opłacalność inwestycji",
      "Wycena do likwidacji",
      "Strona internetowa i domena",
      "Sklep internetowy",
      "Rozliczenie ze wspólnikiem",
    ],
  },
  {
    id: "kosztorysy",
    dark: false,
    eyebrow: "Kosztorysy i szkody",
    title: "Kosztorysy",
    titleStrong: "i szacowanie szkód",
    description:
      "Sporządzamy rzetelne kosztorysy i szacunki szkód dla celów odszkodowawczych, ubezpieczeniowych i negocjacyjnych. Dysponujemy doświadczeniem w sprawach sądowych dotyczących błędów wykonawczych i zalań.",
    useCases: [
      "Roszczenia odszkodowawcze i ubezpieczeniowe",
      "Spory z wykonawcami budowlanymi",
      "Szkody zalaniowe i pożarowe",
      "Wyceny dla sądu i komornika",
    ],
    tags: [
      "Dla celów odszkodowania",
      "Szacowanie strat",
      "Szkody powykonawcze",
      "Nienależyte wykonanie prac",
      "Kosztorys ubezpieczeniowy",
      "Kosztorys po zalaniu",
      "Zniszczenie i uszkodzenie mienia",
      "Kosztorys dla banku",
      "Negocjacje z wykonawcą",
      "Kosztorys powykonawczy",
      "Wycena szkód drzewostanu",
      "Utracone korzyści",
      "Poszczególne prace budowlane",
    ],
  },
  {
    id: "specyficzne",
    dark: true,
    eyebrow: "Nieruchomości specyficzne",
    title: "Wycena obiektów",
    titleStrong: "specjalistycznych",
    description:
      "Wyceniamy nieruchomości wymagające szczególnej wiedzy branżowej i znajomości specyficznych rynków. Obejmuje to obiekty hotelarskie, sportowe, sakralne, infrastrukturalne i zabytkowe.",
    useCases: [
      "Transakcje inwestycyjne i deweloperskie",
      "Wyceny dla samorządów i instytucji publicznych",
      "Zabezpieczenie kredytów specjalistycznych",
      "Postępowania sądowe i administracyjne",
    ],
    tags: [
      "Hotele i pensjonaty",
      "Restauracje",
      "Dwory i wille",
      "Budynki fabryczne",
      "Zabytki przemysłowe",
      "Baseny i obiekty sportowe",
      "Pola golfowe",
      "Stoki narciarskie",
      "Korty tenisowe i boiska",
      "Obiekty publiczne",
      "Szpitale",
      "Lotniska",
      "Mosty, drogi i wiadukty",
      "Zabytki",
      "Parki rekreacyjne",
      "Stacje benzynowe (CNG/LNG/LPG)",
      "Świątynie i obiekty kultu religijnego",
      "Dworce kolejowe",
      "Obiekty wojskowe",
      "Sady i uprawy",
    ],
  },
];

// ── Tick marks — brand element ────────────────────────────────────────

const ticks = Array.from({ length: 11 });

function TickMarks({ light }: { light: boolean }) {
  return (
    <div className="flex shrink-0 flex-col justify-between py-1 h-24">
      {ticks.map((_, i) => (
        <motion.span
          key={i}
          className={`h-px ${
            i % 5 === 0
              ? "w-5 bg-[#D4B876]"
              : `w-2.5 ${light ? "bg-black/25" : "bg-white/30"}`
          }`}
          initial={{ scaleX: 0, originX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.4, delay: 0.2 + i * 0.04 }}
          viewport={{ once: true }}
        />
      ))}
    </div>
  );
}

// ── ServiceSection ────────────────────────────────────────────────────

function ServiceSection({
  id,
  dark,
  reverse,
  eyebrow,
  title,
  titleStrong,
  description,
  useCases,
  tags,
}: {
  id: string;
  dark: boolean;
  reverse?: boolean;
  eyebrow: string;
  title: string;
  titleStrong: string;
  description: string;
  useCases: string[];
  tags: string[];
}) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Parallax: background gradient drifts slower than scroll
  const bgY = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  const tagClass = dark
    ? "border-white/20 text-white/70 hover:border-[#D4B876] hover:text-white"
    : "border-black/15 text-black/65 hover:border-[#D4B876] hover:text-black";

  const borderRule = dark ? "border-white/10" : "border-black/10";
  const dir = reverse ? -1 : 1;

  return (
    <section
      ref={ref}
      id={id}
      data-navbar={dark ? "light" : "dark"}
      className={`relative overflow-hidden py-32 px-8 md:px-16 lg:px-24 ${
        dark ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      {/* Parallax background accent */}
      <motion.div
        style={{ y: bgY }}
        aria-hidden
        className={`absolute inset-0 pointer-events-none ${
          dark
            ? "bg-[radial-gradient(ellipse_60%_50%_at_80%_50%,_rgba(212,184,118,0.06)_0%,_transparent_100%)]"
            : "bg-[radial-gradient(ellipse_60%_50%_at_20%_50%,_rgba(212,184,118,0.08)_0%,_transparent_100%)]"
        }`}
      />

      <div className="relative z-10 mx-auto max-w-[1400px] grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

        {/* ── Description ───────────────────────────────────── */}
        <div className={`flex flex-col ${reverse ? "lg:order-2" : "lg:order-1"}`}>
          {/* Eyebrow */}
          <motion.div
            className="flex items-center gap-5 mb-6"
            initial={{ opacity: 0, x: -20 * dir }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="h-px w-12 bg-[#D4B876] shrink-0" />
            <span className="text-sm font-medium uppercase tracking-[0.4em] text-[#D4B876]">
              {eyebrow}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-thin leading-[1.05] tracking-tight"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.07 }}
            viewport={{ once: true }}
          >
            {title}{" "}
            <span className="font-semibold">{titleStrong}</span>
          </motion.h2>

          {/* Tick marks + description */}
          <motion.div
            className="mt-10 flex gap-6"
            initial={{ opacity: 0, x: -20 * dir }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            viewport={{ once: true }}
          >
            <TickMarks light={!dark} />
            <p
              className={`text-lg font-light leading-relaxed ${
                dark ? "text-white/65" : "text-black/65"
              }`}
            >
              {description}
            </p>
          </motion.div>

          {/* Use cases list */}
          <motion.ul
            className={`mt-10 border-t pt-8 space-y-4 ${borderRule}`}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            viewport={{ once: true }}
          >
            {useCases.map((uc, i) => (
              <motion.li
                key={uc}
                className={`flex items-start gap-4 text-sm font-light ${
                  dark ? "text-white/60" : "text-black/60"
                }`}
                initial={{ opacity: 0, x: -10 * dir }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.07 }}
                viewport={{ once: true }}
              >
                <span className="text-[#D4B876] shrink-0 mt-0.5 text-xs font-medium tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>{uc}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>

        {/* ── Tags ─────────────────────────────────────────── */}
        <div className={`flex flex-col ${reverse ? "lg:order-1" : "lg:order-2"}`}>
          {/* Tags label */}
          <motion.div
            className={`flex items-center gap-5 mb-6 border-b pb-6 ${borderRule}`}
            initial={{ opacity: 0, x: 20 * dir }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span
              className={`text-xs font-medium uppercase tracking-[0.35em] ${
                dark ? "text-white/35" : "text-black/35"
              }`}
            >
              Zakres usług
            </span>
          </motion.div>

          {/* Tag pills */}
          <motion.div
            className="flex flex-wrap gap-2"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
          >
            {tags.map((tag, i) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.22, delay: 0.08 + i * 0.02 }}
                viewport={{ once: true }}
                className={`cursor-default rounded-full border px-4 py-2 text-sm transition-colors duration-300 ${tagClass}`}
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ── OfferContent ──────────────────────────────────────────────────────

export default function OfferContent() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  // City image drifts up slower than scroll → parallax
  const cityY = useTransform(heroProgress, [0, 1], ["0%", "20%"]);

  return (
    <main>
      {/* ── Hero — bez wideo, split: tekst lewej / miasto prawej ─ */}
      <section
        ref={heroRef}
        className="relative h-screen w-full overflow-hidden bg-black text-white"
        data-navbar="light"
      >
        {/* City image — right 60%, parallax */}
        <motion.div
          style={{ y: cityY }}
          className="absolute inset-0 pointer-events-none"
          aria-hidden
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/city.jpg"
            alt=""
            className="absolute right-0 top-0 h-[115%] w-[62%] object-cover grayscale opacity-45"
          />
        </motion.div>

        {/* Left-to-right gradient: solid black fades into transparent */}
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-r from-black from-35% via-black/75 to-transparent"
        />
        {/* Top vignette for readability */}
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/50"
        />

        {/* Text — left-aligned, different od strony głównej */}
        <div className="relative z-10 flex flex-col justify-center h-full px-12 md:px-20 max-w-3xl">
          <motion.span
            className="text-sm font-medium uppercase tracking-[0.4em] text-[#D4B876] mb-8"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
          >
            Rzeczoznawca majątkowy
          </motion.span>

          {/* Line 1 */}
          <motion.div
            className="overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.1, delay: 0.4 }}
          >
            <motion.div
              className="text-6xl md:text-7xl font-thin leading-tight"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
            >
              Kompleksowe
            </motion.div>
          </motion.div>

          {/* Line 2 */}
          <motion.div
            className="overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.1, delay: 0.55 }}
          >
            <motion.div
              className="text-6xl md:text-7xl font-semibold leading-tight"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.65 }}
            >
              wyceny
            </motion.div>
          </motion.div>

          {/* Line 3 */}
          <motion.div
            className="overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.1, delay: 0.7 }}
          >
            <motion.div
              className="text-5xl md:text-6xl font-extralight leading-tight"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.8 }}
            >
              i kosztorysy
            </motion.div>
          </motion.div>

          {/* Short lead */}
          <motion.p
            className="mt-8 text-lg font-light text-white/55 max-w-sm leading-relaxed"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            Nieruchomości, maszyny, przedsiębiorstwa, środki techniczne —
            każdy składnik majątku wyceniamy z precyzją.
          </motion.p>
        </div>

        {/* Bottom: info strip + navigation strip */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          {/* Info strip */}
          <div className="flex justify-center border-t border-b border-white/20 bg-black/30 backdrop-blur-sm mb-20">
            <div className="flex justify-between p-6 w-[90%]">
              <div className="w-[320px] text-sm font-thin text-white/60 flex items-center">
                Nieruchomości · Maszyny · Biznes · Kosztorysy
              </div>
              <div className="flex flex-col items-center justify-center">
                <div className="text-xs text-white/40 text-center">kategorii wycen</div>
                <div className="text-2xl text-center font-extralight">[ 6 ]</div>
              </div>
              <div className="flex items-center justify-center font-thin text-lg text-white/70">
                [ 100+ ] usług
              </div>
              <div className="text-2xl flex items-center justify-center text-white/80">
                po prostu TOLEMA.
              </div>
            </div>
          </div>

          {/* Navigation strip */}
          <nav
            className="border-t border-white/10 bg-black/50 backdrop-blur-sm hidden lg:flex"
            aria-label="Skocz do sekcji"
          >
            {services.map(({ id, eyebrow }) => (
              <button
                key={id}
                onClick={() => {
                  const el = document.getElementById(id);
                  if (!el) return;
                  const top = el.getBoundingClientRect().top + window.scrollY - 70;
                  window.scrollTo({ top, behavior: "smooth" });
                }}
                className="flex-1 py-3.5 text-center text-xs font-light uppercase tracking-[0.28em] text-white/40 hover:text-[#D4B876] transition-colors duration-300 border-r border-white/10 last:border-r-0 cursor-pointer"
              >
                {eyebrow}
              </button>
            ))}
          </nav>
        </motion.div>
      </section>

      {/* ── Service sections ─────────────────────────────────── */}
      {services.map((svc, i) => (
        <ServiceSection key={svc.id} {...svc} reverse={i % 2 === 1} />
      ))}

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden bg-[#D4B876] py-28 px-8"
        data-navbar="dark"
      >
        <div
          aria-hidden
          className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-white/20 blur-3xl pointer-events-none"
        />

        <div className="relative z-10 mx-auto max-w-[860px] text-center">
          <motion.span
            className="text-sm font-medium uppercase tracking-[0.38em] text-black/55"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Skontaktuj się
          </motion.span>

          <motion.h2
            className="mt-5 text-5xl font-thin text-black tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Masz pytania o{" "}
            <span className="font-semibold">wycenę?</span>
          </motion.h2>

          <motion.p
            className="mt-6 text-xl font-light text-black/65 leading-relaxed max-w-[540px] mx-auto"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Odpowiemy na wszystkie pytania i przygotujemy indywidualną wycenę
            dopasowaną do Twoich potrzeb.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Link href="/contact">
              <button className="group relative mt-10 inline-flex items-center gap-3 overflow-hidden rounded-full border border-black/40 px-8 py-4 cursor-pointer">
                <span className="absolute inset-0 -translate-x-full transition-transform duration-500 ease-out group-hover:translate-x-0 bg-black" />
                <span className="relative z-10 flex items-center gap-3 text-black transition-colors duration-300 group-hover:text-white">
                  <span className="text-lg font-light uppercase tracking-[0.18em]">
                    Kontakt
                  </span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-transform duration-300 ease-out group-hover:translate-x-1"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </span>
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
