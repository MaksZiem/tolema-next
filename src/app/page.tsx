/* eslint-disable @next/next/no-img-element */
"use client";

import Footer from "@/components/layout/Footer";
import SectionArrow from "@/components/navigation/SectionArrow";
import Business from "@/components/sections/Business";
import Property from "@/components/sections/Property";
import TechnicalMeasures from "@/components/sections/TechnicalMeasures";
import RandomNumberAnimation from "@/components/ui/RandomNumberAnimation";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Home() {
  const { scrollY } = useScroll();

  const y1 = useTransform(scrollY, [1000, 1500], [0, 0]);
  const y2 = useTransform(scrollY, [1500, 2000], [0, 0]);
  const y3 = useTransform(scrollY, [2000, 2500], [0, 0]);

  // Parallax effect for city - subtle movement
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
      <section className="relative h-screen w-full text-white">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="fixed top-0 left-0 w-full h-full object-cover -z-10 brightness-50"
        >
          <source src="/temida.mp4" type="video/mp4" />
        </video>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="relative z-10 flex pt-70 pl-320 text-7xl font-normal"
        >
          <div className="relative pb-4">
            <span className="text-black text-center">Wiedza i praktyka</span>
            <motion.span
              initial={{ clipPath: "polygon(0 0, 0% 0, 0% 100%, 0 100%)" }}
              animate={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
              transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
              className="absolute top-0 left-0 text-white pb-4 text-center"
            >
              Wiedza i praktyka
            </motion.span>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="relative z-10 flex pl-280 h-20 pt-5 text-6xl font-bold"
        >
          <div className="relative pb-4">
            <span className="text-black text-center">Najwyższe standardy</span>
            <motion.span
              initial={{ clipPath: "polygon(0 0, 0% 0, 0% 100%, 0 100%)" }}
              animate={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
              transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
              className="absolute top-0 left-0 text-white pb-4 text-center"
            >
              Najwyższe standardy
            </motion.span>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="relative z-10 flex pl-280 h-20 pt-10 text-6xl font-extralight"
        >
          <div className="relative pb-4">
            <span className="text-black text-center">Zaangażowanie</span>
            <motion.span
              initial={{ clipPath: "polygon(0 0, 0% 0, 0% 100%, 0 100%)" }}
              animate={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
              transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
              className="absolute top-0 left-0 text-white pb-4 text-center"
            >
              Zaangażowanie
            </motion.span>
          </div>
        </motion.div>
        <div className="flex justify-center mt-50">
          <div className="flex justify-between p-8 w-[90%] border-t border-b border-white">
            <div className="w-[400px] text-l font-thin ">
              Sprawy majątkowe i prawne wymagają spokoju, doświadczenia i
              precyzyjnych rozwiązań — my dostarczamy to, co najważniejsze:
              pewność, bezpieczeństwo i przejrzyste zasady współpracy.
            </div>
            <div className="flex justify-start flex-col">
              <div className="text-l text-center">na rynku od</div>
              <div className="text-4xl text-center font-extralight">
                [ <RandomNumberAnimation value={2017} /> ]
              </div>
            </div>
            <div className="flex justify-center flex-col font-thin text-2xl">
              <div>
                [{" "}
                <RandomNumberAnimation
                  value={new Date().getFullYear() - 2017}
                />{" "}
                ] lat doświadczenia
              </div>
            </div>
            <div className="flex justify-end flex-col">
              <div className="text-4xl text-center font-extralight">
                [ +<RandomNumberAnimation value={230} /> ]
              </div>
              <div className="text-l">ukończonych wycen</div>{" "}
            </div>
            <div className="text-4xl flex justify-center flex-col">
              po prostu TOLEMA.
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 right-5 transform flex w-30 h-15 opacity-50 bg-white items-center justify-center box-shadow-md rounded-xl gap-5">
          <img
            src="/instagram.png"
            alt="instagram"
            title="instgram"
            className="h-2/3 cursor-pointer "
          />
          <img
            src="/facebook.png"
            alt="facebook"
            className="h-2/3 cursor-pointer"
          />
        </div>
        <SectionArrow label="O MNIE" targetSection="o mnie" />
      </section>

      <section className="bg-white h-screen w-screen flex flex-row" id="o mnie">
        <div className="flex justify-between flex-col items-center w-1/2 bg-gradient-to-r from-gray-200 via-gray-100  to-[#e8e6e6] text-white font-bold text-lg px-20 py-3">
          <div className="text-5xl font-light h-20 mt-10 flex items-center text-black">
            O mnie
          </div>

          <div className="border-t border-b border-black py-5 border-solid">
            {/* <div className="font-bold text-2xl  text-justify text-black font-normal indent-8"> */}

            <div className="font-normal text-justify text-xl text-black indent-8">
              Należę do Warszawskiego Stowarzyszenia Rzeczoznawców Majątkowych
              zrzeszonego w Polskiej Federacji Stowarzyszeń Rzeczoznawców
              Majątkowych Jestem absolwentem Wydziału Wiertnictwa Nafty i Gazu
              (specjalność gazownictwo ziemne) oraz Wydziału Górnictwa i
              Geoinżynierii (specjalność zarządzanie i marketing) Akademii
              Górniczo-Hutniczej w Krakowie. Ukończyłem studia MBA na Akademii
              Leona Koźmińskiego w Warszawie. Posiadam certyfikaty „Wycena dla
              potrzeb zabezpieczenia wierzytelności bankowych” (Związek Banków
              Polskich) oraz „Wycena dla potrzeb zabezpieczenia wierzytelności”
              (Polska Federacja Stowarzyszeń Rzeczoznawców Majątkowych). Jestem
              wpisany na listę rzeczoznawców majątkowych rekomendowanych do
              wycen nieruchomości dla sektora bankowego, publikowaną m.in. przez
              Związek Banków Polskich.
            </div>
          </div>
          <div className="w-full h-120">
            <h2 className="text-4xl font-light text-center text-black">
              Uprawnienia i certyfikaty
            </h2>
            <ul className="gap-1 mt-5">
              {qualifications.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start  transition hover:translate-x-2 hover:text-[#2d2d2d] bg-[#D4B876] cursor-default my-1 hover:bg-white duration-300"
                >
                  <div className="font-normal text-xl leading-snug text-black p-2">
                    {item}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="w-1/2 relative overflow-hidden">
          <motion.div
            style={{ y: cityParallax }}
            className="absolute inset-0 w-full h-screen"
          >
            <img
              src="/city.jpg"
              alt="City background"
              className="w-full h-1/3 object-cover opacity-70 px-5 filter grayscale"
              style={{
                top: "40%",
                position: "absolute",
              }}
            />
          </motion.div>

          <div className="relative z-10 flex-col items-center py-3">
            <div className="text-5xl font-light h-20 mt-10 items-center text-black text-center flex flex-col justify-center">
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
        <Property y={y1} />
        <TechnicalMeasures y={y2} />
        <Business y={y3} />
      </section>
      <Footer />
    </div>
  );
}
