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
      <div className="flex justify-center mt-14 max-md:mt-0 max-md:pt-8 max-md:[@media(max-height:700px)]:pt-4 min-[1600px]:mt-auto min-[1600px]:pt-12">
        <div className="flex flex-col items-center text-center min-[1600px]:items-stretch min-[1600px]:text-left min-[1600px]:flex-row min-[1600px]:justify-between gap-6 p-4 min-[1600px]:p-8 w-[90%] border-t border-b border-white max-md:grid max-md:grid-cols-2 max-md:gap-x-4 max-md:gap-y-3 max-md:[@media(max-height:700px)]:gap-y-2">
          <div className="w-full min-[1600px]:w-[clamp(280px,21vw,400px)] min-[1600px]:shrink-0 text-l font-normal text-white text-justify hyphens-auto max-md:col-span-2 max-md:mx-auto max-md:max-w-[62ch] max-md:text-pretty max-sm:text-sm max-md:[@media(max-height:660px)]:hidden">
            Sprawy majątkowe i prawne wymagają spokoju, doświadczenia i
            precyzyjnych rozwiązań - dostarczam to, co najważniejsze:
            pewność, bezpieczeństwo i przejrzyste zasady współpracy.
          </div>
          <div className="flex justify-center flex-col">
            <div className="whitespace-nowrap text-l text-center max-sm:text-sm max-[359px]:text-xs">na rynku od</div>
            <div className="whitespace-nowrap text-4xl text-center font-extralight max-sm:text-3xl">
              [ <RandomNumberAnimation value={2017} /> ]
            </div>
          </div>
          <div className="flex justify-center flex-col font-normal text-2xl max-md:order-[90] max-md:col-span-2 max-sm:text-xl min-[1600px]:whitespace-nowrap min-[1600px]:text-center min-[1600px]:text-[clamp(1.125rem,1.3vw,1.5rem)]">
            <h1 className="max-md:text-balance">Rzeczoznawca majątkowy w Grójcu</h1>
          </div>
          <div className="flex justify-center flex-col">
            <div className="whitespace-nowrap text-l text-center max-sm:text-sm max-[359px]:text-xs">ukończonych wycen</div>
            <div className="whitespace-nowrap text-4xl text-center font-extralight max-sm:text-3xl">
              [ +<RandomNumberAnimation value={230} /> ]
            </div>
          </div>
          <div className="text-4xl flex justify-center flex-col min-[1600px]:whitespace-nowrap min-[1600px]:text-[clamp(1.75rem,1.9vw,2.25rem)] max-md:order-last max-md:col-span-2 max-md:text-balance max-md:text-[clamp(1.5rem,8.5vw,2.25rem)] max-md:[@media(max-height:600px)]:text-2xl">
            po prostu TOLEMA.
          </div>
        </div>
      </div>
      <div className="mt-auto flex justify-center pt-5 pb-8 min-[1600px]:mt-0 max-sm:pb-6 max-md:[@media(max-height:700px)]:pt-3 max-md:[@media(max-height:700px)]:pb-4 max-md:[@media(max-height:600px)]:pb-2">
        <SectionArrow inline label={arrowLabel} targetSection={arrowTarget} />
      </div>
    </section>
  );
}
