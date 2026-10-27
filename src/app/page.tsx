import type { Metadata } from "next";
import HomeContent from "@/components/sections/HomeContent";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "TOLEMA nieruchomości | Rzeczoznawca majątkowy Grójec",
  description:
    "TOLEMA NIERUCHOMOŚCI sp. z o.o. - rzeczoznawca majątkowy z Grójca. Profesjonalne wyceny nieruchomości, maszyn, środków technicznych i przedsiębiorstw - wiedza, praktyka i najwyższe standardy.",
  keywords:
    "rzeczoznawca majątkowy Grójec, wycena nieruchomości, operat szacunkowy, wycena maszyn, wycena przedsiębiorstwa, rzeczoznawca majątkowy mazowieckie",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "TOLEMA nieruchomości | Rzeczoznawca majątkowy Grójec",
    description:
      "Wiedza, praktyka i najwyższe standardy w wycenie nieruchomości, maszyn i przedsiębiorstw.",
    type: "website",
    url: SITE_URL,
  },
};

export default function Home() {
  return <HomeContent />;
}
