import type { Metadata } from "next";
import OfferContent from "@/components/sections/OfferContent";

export const metadata: Metadata = {
  title: "Oferta wycen | TOLEMA – Rzeczoznawca majątkowy",
  description:
    "Kompleksowa oferta wycen: nieruchomości, gruntów, domów, mieszkań, budynków, maszyn budowlanych i rolniczych, środków technicznych, przedsiębiorstw, biznesu, kosztorysów i szkód. Profesjonalny rzeczoznawca majątkowy.",
  keywords:
    "wycena nieruchomości, wycena mieszkania, wycena domu, wycena działki, wycena gruntu, wycena budynku, wycena maszyn, wycena środków technicznych, rzeczoznawca majątkowy, wycena przedsiębiorstwa, wycena biznesu, kosztorys budowlany, wycena szkód, wycena służebności, wycena użytkowania wieczystego",
  openGraph: {
    title: "Oferta wycen | TOLEMA – Rzeczoznawca majątkowy",
    description:
      "Wycena nieruchomości, maszyn, przedsiębiorstw i szkód. Profesjonalne operaty szacunkowe i kosztorysy.",
    type: "website",
    locale: "pl_PL",
  },
};

export default function OfferPage() {
  return <OfferContent />;
}
