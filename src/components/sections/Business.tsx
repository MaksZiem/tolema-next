"use client";

import type { MotionValue } from "framer-motion";
import OfferSection from "./OfferSection";

interface Props {
  y: MotionValue<number>;
}

export default function Business({ y }: Props) {
  return (
    <OfferSection
      y={y}
      theme="light"
      eyebrow="Biznes"
      titleLead="Wycena"
      titleStrong="biznesu"
      lead="Wartość spółki, udziałów i marki określona na liczbach, nie na przeczuciach — pod realne decyzje, inwestycje i rozliczenia."
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