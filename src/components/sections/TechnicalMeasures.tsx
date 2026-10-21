"use client";

import OfferSection from "./OfferSection";

export default function TechnicalMeasures() {
  return (
    <OfferSection
      theme="gold"
      titleLead="Wycena"
      titleStrong="środków technicznych"
      lead="Maszyny, pojazdy i linie technologiczne wycenione rzetelnie - od pojedynczego urządzenia po cały park maszynowy."
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
      reverse
    />
  );
}