/* eslint-disable @next/next/no-img-element */
"use client";

import AnimatedSlogan from "@/components/sections/AnimatedSlogan";
import SectionArrow from "@/components/navigation/SectionArrow";
import RandomNumberAnimation from "@/components/ui/RandomNumberAnimation";

export default function Hero({
  arrowLabel = "O MNIE",
  arrowTarget = "o mnie",
}: {
  arrowLabel?: string;
  arrowTarget?: string;
}) {
  return (
    <section className="relative h-screen w-full text-white" data-navbar="light">
      <video
        autoPlay
        muted
        loop
        playsInline
        controls={false}
        disablePictureInPicture
        disableRemotePlayback
        tabIndex={-1}
        draggable={false}
        onContextMenu={(e) => e.preventDefault()}
        poster="/temida-poster.jpg"
        preload="auto"
        className="fixed top-0 left-0 w-full h-full object-cover -z-10 brightness-50 pointer-events-none select-none"
      >
        <source src="/temida.mp4" type="video/mp4" />
      </video>

      <AnimatedSlogan variant="hero" />
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
      <SectionArrow label={arrowLabel} targetSection={arrowTarget} />
    </section>
  );
}
