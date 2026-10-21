import type { Metadata } from "next";
import ProcessContent from "@/components/sections/ProcessContent";
import { processSteps } from "@/data/processSteps";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Jak przebiega wycena nieruchomości – proces krok po kroku | TOLEMA",
  description:
    "Poznaj pełny proces wyceny nieruchomości: od zlecenia i zebrania dokumentacji, przez oględziny i analizę rynku, aż po sporządzenie operatu szacunkowego. 9 etapów wyjaśnionych przez rzeczoznawcę majątkowego.",
  keywords:
    "jak przebiega wycena nieruchomości, proces wyceny nieruchomości, etapy wyceny nieruchomości, operat szacunkowy, rzeczoznawca majątkowy, wycena krok po kroku, metody wyceny nieruchomości",
  alternates: {
    canonical: `${SITE_URL}/process`,
  },
  openGraph: {
    title:
      "Jak przebiega wycena nieruchomości – proces krok po kroku | TOLEMA",
    description:
      "9 etapów wyceny nieruchomości - od zlecenia po operat szacunkowy. Sprawdź, jak pracuje rzeczoznawca majątkowy.",
    type: "website",
    locale: "pl_PL",
    url: `${SITE_URL}/process`,
  },
};

const processJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Jak przebiega wycena nieruchomości",
  description:
    "Proces wyceny nieruchomości przez rzeczoznawcę majątkowego, od zlecenia i ustalenia jego celu, przez oględziny i analizę rynku, aż po sporządzenie i przekazanie operatu szacunkowego.",
  step: processSteps.map((step, i) => ({
    "@type": "HowToStep",
    position: i + 1,
    name: step.name,
    text: step.text,
  })),
};

export default function ProcessPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(processJsonLd) }}
      />
      <ProcessContent />
    </>
  );
}
