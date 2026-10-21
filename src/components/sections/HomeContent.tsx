"use client";

import SectionArrow from "@/components/navigation/SectionArrow";
import Hero from "@/components/sections/Hero";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import dynamic from "next/dynamic";

const Footer = dynamic(() => import("@/components/layout/Footer"));
const Business = dynamic(() => import("@/components/sections/Business"));
const Property = dynamic(() => import("@/components/sections/Property"));
const TechnicalMeasures = dynamic(
  () => import("@/components/sections/TechnicalMeasures")
);

export default function HomeContent() {
  const { scrollY } = useScroll();

  const cityParallax = useTransform(scrollY, [0, 2000], [0, -200]);

  const qualifications = [
    "Do szacowania nieruchomości, nr 6031 (Minister Infrastruktury i Rozwoju)",
    "Szacowania nieruchomości komercyjnych, nr 23496 (CCIM Institute Chicago)",
    "Do pośrednictwa w obrocie nieruchomościami, nr 17576 (Minister Transportu, Budownictwa i Gospodarki Morskiej)",
    "Do zarządzania nieruchomościami, nr 23783 (Minister Transportu, Budownictwa i Gospodarki Morskiej)",
    "Do sporządzania wycen dla potrzeb zabezpieczenia wierzytelności bankowych, nr 418",
    "Do sporządzania wyceny dla potrzeb zabezpieczenia wierzytelności, nr 10/2018",
    "Do szacowania ruchomości, maszyn, urządzeń i środków technicznych",
  ];

  const tiles = [
    {
      text: "Indywidualne podejście do każdej sprawy",
      bg: "bg-[#D4B876]",
      delay: 0.1,
    },
    { text: "Przejrzyste koszty od początku", bg: "bg-[#D4B876]", delay: 0.2 },
    { text: "Najlepsze ceny", bg: "bg-[#BFA36F]", delay: 0.3 },
    {
      text: "Doświadczenie w sprawach dużych i małych",
      bg: "bg-[#C5A46A]",
      delay: 0.4,
    },
    {
      text: "Rzetelność i uczciwość w działaniu",
      bg: "bg-[#D4B876]",
      delay: 0.5,
    },
    {
      text: "Wieloletnie doświadczenie poparte efektami",
      bg: "bg-[#BFA36F]",
      delay: 0.6,
    },
    {
      text: "Spokój i pewność, że wszystko jest pod kontrolą",
      bg: "bg-[#C5A46A]",
      delay: 0.7,
    },
    { text: "Proste, zrozumiałe procedury", bg: "bg-[#D4B876]", delay: 0.8 },
  ];

  const tilePositions = [1, 3, 4, 6, 9, 11, 12, 14];

  return (
    <div className="font-sans relative z-0">
      <Hero />

      <section className="bg-white min-h-screen w-screen flex flex-col min-[1600px]:flex-row" id="o-nas" data-navbar="dark">
        <div className="flex flex-col w-full min-[1600px]:w-1/2 bg-white px-6 pt-12 min-[1600px]:px-16 min-[1600px]:pt-18">
          {/* <motion.span
            className="text-m font-medium uppercase tracking-[0.32em] text-[#D4B876]"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Rzeczoznawca majątkowy
          </motion.span> */}

          <motion.h2
            className="mt-3 text-5xl font-thin text-black tracking-tight"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.05 }}
            viewport={{ once: true }}
          >
            O nas
          </motion.h2>

          <motion.div
            className="mt-7"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
            viewport={{ once: true }}
          >
            <p className="text-base font-light  text-lg leading-relaxed text-black/70">
              TOLEMA NIERUCHOMOŚCI sp. z o.o. to firma rzeczoznawcza z Grójca.
              Sporządzamy operaty szacunkowe nieruchomości, wyceny maszyn,
              urządzeń i przedsiębiorstw oraz kosztorysy i szacunki szkód - dla
              klientów indywidualnych, firm, banków i sądów. Należymy do
              Warszawskiego Stowarzyszenia Rzeczoznawców Majątkowych i
              znajdujemy się na liście rzeczoznawców rekomendowanych do wycen
              dla sektora bankowego przez Związek Banków Polskich.
            </p>
          </motion.div>

          <div className="mt-10">
            <motion.span
              className="text-m font-medium uppercase tracking-[0.32em] text-[#D4B876]"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              Uprawnienia i certyfikaty
            </motion.span>

            <ul className="mt-5">
              {qualifications.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.05 + index * 0.07 }}
                  viewport={{ once: true }}
                  className="group flex items-start gap-4 py-4 border-b border-black/10 hover:border-[#D4B876] transition-colors duration-300 cursor-default"
                >
                  <span className="text-xs font-medium text-[#D4B876] shrink-0 tabular-nums mt-0.5 w-6">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm font-light leading-snug text-black/70 group-hover:text-black transition-colors duration-300">
                    {item}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        <div className="hidden w-full overflow-hidden min-[1600px]:block min-[1600px]:relative min-[1600px]:w-1/2 min-[1600px]:h-auto">
          <motion.div
            style={{ y: cityParallax }}
            className="absolute inset-0 w-full h-full min-[1600px]:h-screen"
          >
            <div
              className="w-full h-1/3 px-5"
              style={{
                top: "40%",
                position: "absolute",
              }}
            >
              <Image
                src="/city.webp"
                alt="City background"
                fill
                sizes="50vw"
                className="object-cover opacity-70 filter grayscale"
              />
            </div>
          </motion.div>

          <div className="relative z-10 flex-col items-center py-3">
            <div className="text-5xl font-light h-20 mt-18 items-center text-black text-center flex flex-col justify-center">
              Dlaczego TOLEMA?
            </div>

            <div className="grid grid-cols-4 gap-0 p-10 mt-20">
              {Array.from({ length: 16 }, (_, index) => {
                const tileIndex = tilePositions.indexOf(index);
                const isContentTile = tileIndex !== -1;

                if (!isContentTile) {
                  return <div key={index} className="p-4 min-h-30"></div>;
                }

                const tile = tiles[tileIndex];

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0.3, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{
                      backgroundColor: "#ffffff",
                      color: "#000000",
                    }}
                    transition={{
                      duration: 0.4,
                      delay: tile.delay,
                      ease: [0.25, 0.46, 0.45, 0.94],
                      backgroundColor: { duration: 0.3, delay: 0 },
                      color: { duration: 0.3, delay: 0 },
                    }}
                    viewport={{ once: true, margin: "-50px" }}
                    className={`p-4 min-h-30 flex items-center justify-center text-center text-xl font-normal ${tile.bg}`}
                  >
                    {tile.text}
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-50">
              <SectionArrow
                label="ROZWIĄZANIA DLA KLIENTA"
                targetSection="rozwiazania"
                color="black"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        className="relative h-[300vh] bg-black text-white z-10"
        id="rozwiazania"
      >
        <Property />
        <TechnicalMeasures />
        <Business />
      </section>
      <Footer />
    </div>
  );
}
