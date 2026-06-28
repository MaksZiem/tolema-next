"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Footer from "@/components/layout/Footer";

const ticks = Array.from({ length: 11 });

function TickMarks({ light }: { light: boolean }) {
  return (
    <div className="flex shrink-0 flex-col justify-between py-1 h-20">
      {ticks.map((_, i) => (
        <motion.span
          key={i}
          className={`h-px ${
            i % 5 === 0
              ? `w-5 ${light ? "bg-[#D4B876]" : "bg-[#D4B876]"}`
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

interface ServiceSectionProps {
  id: string;
  dark: boolean;
  eyebrow: string;
  title: string;
  titleStrong: string;
  lead: string;
  tags: string[];
  index: number;
}

function ServiceSection({
  id,
  dark,
  eyebrow,
  title,
  titleStrong,
  lead,
  tags,
  index,
}: ServiceSectionProps) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);
  const flip = index % 2 !== 0;

  return (
    <section
      ref={ref}
      id={id}
      data-navbar={dark ? "light" : "dark"}
      className={`relative overflow-hidden py-28 px-8 md:px-16 lg:px-24 ${
        dark ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      {/* Parallax accent gradient */}
      <motion.div
        style={{ y: bgY }}
        aria-hidden
        className={`absolute inset-0 pointer-events-none ${
          dark
            ? "bg-[radial-gradient(ellipse_at_top_right,_#D4B876_0%,_transparent_55%)] opacity-5"
            : "bg-[radial-gradient(ellipse_at_bottom_left,_#D4B876_0%,_transparent_55%)] opacity-8"
        }`}
      />

      <div
        className={`relative z-10 mx-auto max-w-[1400px] flex flex-col gap-12 ${
          flip ? "lg:flex-row-reverse" : "lg:flex-row"
        } lg:gap-20 items-start`}
      >
        {/* Text column */}
        <div className="lg:w-[38%] flex flex-col">
          <motion.span
            className="text-sm font-medium uppercase tracking-[0.35em] text-[#D4B876]"
            initial={{ opacity: 0, x: flip ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {eyebrow}
          </motion.span>

          <motion.h2
            className="mt-5 text-5xl font-thin leading-[1.05] tracking-tight"
            initial={{ opacity: 0, x: flip ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.06 }}
            viewport={{ once: true }}
          >
            {title}{" "}
            <span className="font-semibold">{titleStrong}</span>
          </motion.h2>

          <motion.div
            className="mt-9 flex gap-6"
            initial={{ opacity: 0, x: flip ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.14 }}
            viewport={{ once: true }}
          >
            <TickMarks light={!dark} />
            <p
              className={`text-lg font-light leading-relaxed ${
                dark ? "text-white/65" : "text-black/65"
              }`}
            >
              {lead}
            </p>
          </motion.div>

          <motion.span
            className={`mt-10 text-7xl font-thin tabular-nums select-none ${
              dark ? "text-white/8" : "text-black/8"
            }`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {String(index + 1).padStart(2, "0")}
          </motion.span>
        </div>

        {/* Tags column */}
        <div className="lg:w-[62%]">
          <motion.ul
            className="flex flex-wrap gap-2.5"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: "easeOut", delay: 0.18 }}
            viewport={{ once: true }}
          >
            {tags.map((tag, i) => (
              <motion.li
                key={tag}
                initial={{ opacity: 0, scale: 0.93 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.28, delay: 0.08 + i * 0.025 }}
                viewport={{ once: true }}
                className={`cursor-default rounded-full border px-4 py-2 text-sm transition-colors duration-300 ${
                  dark
                    ? "border-white/20 text-white/70 hover:border-[#D4B876] hover:text-white"
                    : "border-black/15 text-black/65 hover:border-[#D4B876] hover:text-black"
                }`}
              >
                {tag}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}

const services: Omit<ServiceSectionProps, "index">[] = [
  {
    id: "nieruchomosci",
    dark: false,
    eyebrow: "Nieruchomości",
    title: "Wycena",
    titleStrong: "nieruchomości",
    lead: "Profesjonalne operaty szacunkowe dla każdego rodzaju nieruchomości — od działek i domów po obiekty komercyjne, przemysłowe, magazynowe i ograniczone prawa rzeczowe.",
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
      "Aktualizacja opłaty rocznej za użytkowanie wieczyste",
      "Wycena czynszu",
    ],
  },
  {
    id: "maszyny",
    dark: true,
    eyebrow: "Maszyny i środki techniczne",
    title: "Wycena maszyn",
    titleStrong: "i urządzeń",
    lead: "Szacowanie wartości maszyn budowlanych, rolniczych, przemysłowych, taboru kolejowego, pojazdów specjalistycznych oraz pełnych parków maszynowych i ciągów technologicznych.",
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
    lead: "Wycena wyposażenia domów, gabinetów medycznych, obiektów sportowych, warsztatów, sprzętu RTV/AGD i wszelkich innych ruchomości.",
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
    lead: "Kompleksowa wycena firm, spółek, znaków towarowych, know-how i wszelkich aktywów niematerialnych dla celów transakcyjnych, podatkowych i prawnych.",
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
    lead: "Rzetelne kosztorysy dla celów odszkodowawczych, ubezpieczeniowych i negocjacyjnych. Szacowanie strat po zalaniach, zniszczeniach i błędach wykonawczych.",
    tags: [
      "Dla celów odszkodowania",
      "Szacowanie strat",
      "Szkody powykonawcze",
      "Nienależyte wykonanie prac",
      "Kosztorys ubezpieczeniowy",
      "Kosztorys po zalaniu mieszkania lub domu",
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
    lead: "Hotele, pensjonaty, restauracje, zabytki, obiekty sportowe, sakralne, wojskowe, lotniska, dworce, mosty — nieruchomości wymagające szczególnej wiedzy branżowej.",
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

export default function OfferContent() {
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 420], [1, 0]);
  const heroY = useTransform(scrollY, [0, 600], [0, -130]);

  return (
    <main>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative h-screen w-full text-white overflow-hidden" data-navbar="light">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="fixed top-0 left-0 w-full h-full object-cover -z-10 brightness-50"
        >
          <source src="/nieruchomosc1.mp4" type="video/mp4" />
        </video>

        {/* Dark vignette for readability */}
        <div className="fixed top-0 left-0 w-full h-full -z-10 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />

        <motion.div
          style={{ opacity: heroOpacity, y: heroY }}
          className="relative z-10 flex flex-col justify-center h-full px-12 max-w-[1400px] mx-auto"
        >
          <motion.span
            className="text-sm font-medium uppercase tracking-[0.4em] text-[#D4B876]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Rzeczoznawca majątkowy
          </motion.span>

          <motion.h1
            className="mt-5 text-7xl font-thin leading-[1.05] tracking-tight max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5 }}
          >
            Kompleksowa oferta{" "}
            <span className="font-semibold">wycen</span>
          </motion.h1>

          <motion.p
            className="mt-8 text-xl font-light text-white/65 max-w-[500px] leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Nieruchomości, maszyny, przedsiębiorstwa, środki techniczne —
            szacujemy wartość każdego składnika majątku z najwyższą
            starannością i w oparciu o obowiązujące standardy.
          </motion.p>

          {/* Scroll cue */}
          <motion.div
            className="mt-20 flex items-center gap-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <div className="flex flex-col gap-1 py-1">
              {Array.from({ length: 7 }).map((_, i) => (
                <span
                  key={i}
                  className={`h-px ${
                    i % 3 === 0
                      ? "w-5 bg-[#D4B876]"
                      : "w-2.5 bg-white/30"
                  }`}
                />
              ))}
            </div>
            <span className="text-xs uppercase tracking-[0.35em] text-white/45">
              Przewiń, aby poznać ofertę
            </span>
          </motion.div>
        </motion.div>

        {/* Anchors strip */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 z-10 border-t border-white/10 bg-black/30 backdrop-blur-sm hidden lg:flex"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          {[
            { href: "#nieruchomosci", label: "Nieruchomości" },
            { href: "#maszyny", label: "Maszyny" },
            { href: "#ruchomosci", label: "Ruchomości" },
            { href: "#biznes", label: "Biznes" },
            { href: "#kosztorysy", label: "Kosztorysy" },
            { href: "#specyficzne", label: "Specyficzne" },
          ].map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="flex-1 py-4 text-center text-xs font-light uppercase tracking-[0.28em] text-white/50 hover:text-[#D4B876] transition-colors duration-300 border-r border-white/10 last:border-r-0"
            >
              {label}
            </a>
          ))}
        </motion.div>
      </section>

      {/* ── Service sections ─────────────────────────────────── */}
      {services.map((svc, idx) => (
        <ServiceSection key={svc.id} {...svc} index={idx} />
      ))}

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#D4B876] py-28 px-8" data-navbar="dark">
        {/* Subtle parallax blob */}
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
            Odpowiemy na wszystkie pytania i przygotujemy indywidualną
            wycenę dopasowaną do Twoich potrzeb.
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
