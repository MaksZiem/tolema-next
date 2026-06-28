"use client";

import type { MotionValue } from "framer-motion";
import OfferSection from "./OfferSection";

interface Props {
  y: MotionValue<number>;
}

export default function Property({ y }: Props) {
  return (
    <OfferSection
      y={y}
      theme="dark"
      eyebrow="Nieruchomości"
      titleLead="Wycena"
      titleStrong="nieruchomości"
      lead="Operaty szacunkowe dla mieszkań, gruntów i obiektów komercyjnych — przygotowane tak, by obroniły się przed bankiem, sądem i urzędem."
      tags={[
        "Mieszkania",
        "Grunty",
        "Domy",
        "Lokale komercyjne",
        "Magazyny",
        "Służebności",
        "Użytkowanie wieczyste",
      ]}
      videoPrimary="/nieruchomosc2.mp4"
      videoSecondary="/nieruchomosc1.mp4"
      buttonVariant="default"
    />
  );
}