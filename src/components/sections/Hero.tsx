/* eslint-disable @next/next/no-img-element */
"use client";

import AnimatedSlogan from "@/components/sections/AnimatedSlogan";
import SectionArrow from "@/components/navigation/SectionArrow";
import RandomNumberAnimation from "@/components/ui/RandomNumberAnimation";
import useIsDesktop from "@/hooks/useIsDesktop";

export default function Hero({
  arrowLabel = "O MNIE",
  arrowTarget = "o mnie",
}: {
  arrowLabel?: string;
  arrowTarget?: string;
}) {
  const isDesktop = useIsDesktop();

  return (
    <section className="relative min-h-screen w-full text-white" data-navbar="light">
      {isDesktop ? (
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
      ) : (
        <img
          src="/city.jpg"
          alt=""
          className="fixed top-0 left-0 w-full h-full object-cover -z-10 grayscale brightness-[0.35] pointer-events-none select-none"
        />
      )}

      <AnimatedSlogan variant="hero" />
      <div className="flex justify-center mt-16 pb-36 min-[1600px]:mt-50 min-[1600px]:pb-0">
        <div className="flex flex-col items-center text-center min-[1600px]:items-stretch min-[1600px]:text-left min-[1600px]:flex-row min-[1600px]:justify-between gap-6 p-4 min-[1600px]:p-8 w-[90%] border-t border-b border-white">
          <div className="w-full min-[1600px]:w-[400px] text-l font-thin ">
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
      <SectionArrow label={arrowLabel} targetSection={arrowTarget} />
    </section>
  );
}
