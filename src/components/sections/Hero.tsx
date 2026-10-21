"use client";

import AnimatedSlogan from "@/components/sections/AnimatedSlogan";
import HeroMobileSlider from "@/components/sections/HeroMobileSlider";
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
    <section
      className="relative flex min-h-[100svh] w-full flex-col text-white"
      data-navbar="light"
    >
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
          poster="/temida-poster.webp"
          preload="auto"
          className="fixed top-0 left-0 w-full h-full object-cover -z-10 brightness-50 pointer-events-none select-none"
        >
          <source src="/temida.mp4" type="video/mp4" />
        </video>
      ) : (
        <HeroMobileSlider />
      )}

      <AnimatedSlogan variant="hero" />
      <div className="mt-auto flex justify-center pt-8 [@media(max-height:700px)]:pt-4 min-[1600px]:pt-12">
        <div className="grid w-[90%] grid-cols-2 items-center gap-x-4 gap-y-3 [@media(max-height:700px)]:gap-y-2 border-t border-b border-white p-4 text-center md:grid-cols-4 md:gap-y-5 md:py-5 min-[1600px]:flex min-[1600px]:flex-row min-[1600px]:items-stretch min-[1600px]:justify-between min-[1600px]:gap-8 min-[1600px]:p-8 min-[1600px]:text-left">
          <p className="col-span-2 mx-auto max-w-[62ch] text-pretty text-sm font-thin sm:text-base md:col-span-4 [@media(max-height:660px)]:hidden min-[1600px]:mx-0 min-[1600px]:w-[clamp(280px,21vw,400px)] min-[1600px]:max-w-none min-[1600px]:shrink-0 min-[1600px]:text-sm min-[1800px]:text-base">
            Sprawy majątkowe i prawne wymagają spokoju, doświadczenia
            i&nbsp;precyzyjnych rozwiązań — dostarczam to, co najważniejsze:
            pewność, bezpieczeństwo i&nbsp;przejrzyste zasady współpracy.
          </p>
          <div className="flex flex-col justify-center">
            <div className="text-sm text-center sm:text-base">na rynku od</div>
            <div className="whitespace-nowrap text-3xl text-center font-extralight sm:text-4xl">
              [ <RandomNumberAnimation value={2017} /> ]
            </div>
          </div>
          <div className="order-[90] col-span-2 flex flex-col justify-center font-normal text-xl sm:text-2xl md:order-none md:col-span-1 md:text-xl xl:text-2xl min-[1600px]:text-[clamp(1.125rem,1.3vw,1.5rem)]">
            <h1 className="text-balance">Rzeczoznawca majątkowy w&nbsp;Grójcu</h1>
          </div>
          <div className="flex flex-col justify-center">
            <div className="whitespace-nowrap text-3xl text-center font-extralight sm:text-4xl">
              [ +<RandomNumberAnimation value={230} /> ]
            </div>
            <div className="text-sm text-center sm:text-base min-[1600px]:whitespace-nowrap">ukończonych wycen</div>
          </div>
          <div className="order-last col-span-2 flex flex-col justify-center text-balance text-[clamp(1.5rem,8.5vw,2.25rem)] [@media(max-height:600px)]:text-2xl md:order-none md:col-span-1 md:text-2xl lg:text-3xl xl:text-4xl min-[1600px]:whitespace-nowrap min-[1600px]:text-[clamp(1.75rem,1.9vw,2.25rem)]">
            po prostu TOLEMA.
          </div>
        </div>
      </div>
      <div className="flex justify-center pt-5 pb-6 sm:pb-8 [@media(max-height:700px)]:pt-3 [@media(max-height:700px)]:pb-4 [@media(max-height:600px)]:pb-2">
        <SectionArrow inline label={arrowLabel} targetSection={arrowTarget} />
      </div>
    </section>
  );
}
