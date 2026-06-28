"use client";

import type { MotionValue } from "framer-motion";
import OfferSection from "./OfferSection";

interface Props {
  y: MotionValue<number>;
}

export default function TechnicalMeasures({ y }: Props) {
  return (
    <OfferSection
      y={y}
      theme="gold"
      eyebrow="Środki techniczne"
      titleLead="Wycena"
      titleStrong="środków technicznych"
      lead="Maszyny, pojazdy i linie technologiczne wycenione rzetelnie — od pojedynczego urządzenia po cały park maszynowy."
      tags={[
        "Maszyny budowlane",
        "Pojazdy specjalistyczne",
        "Linie technologiczne",
        "Środki trwałe",
        "Sprzęt medyczny",
        "Tabor kolejowy",
      ]}
      videoPrimary="/budowa1.mp4"
      videoSecondary="/budowa2.mp4"
      buttonVariant="reverse"
    />
  );
}