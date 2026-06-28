"use client";

import OfferSection from "./OfferSection";

export default function Property() {
  return (
    <OfferSection
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