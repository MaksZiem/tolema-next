"use client";

import OfferSection from "./OfferSection";

export default function Business() {
  return (
    <OfferSection
      theme="light"
      titleLead="Wycena"
      titleStrong="biznesu"
      lead="Wartość spółki, udziałów i marki określona na liczbach, nie na przeczuciach - pod realne decyzje, inwestycje i rozliczenia."
      tags={[
        "Spółki",
        "Akcje i udziały",
        "Znaki towarowe",
        "Know-how",
        "Sklepy internetowe",
        "Rozliczenia ze wspólnikiem",
      ]}
      videoPrimary="/business2.mp4"
      videoSecondary="/business1.mp4"
      buttonVariant="black"
    />
  );
}