import type { Metadata } from "next";
import ContactContent from "@/components/sections/ContactContent";
import { faqs } from "@/data/faq";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kontakt | TOLEMA – Rzeczoznawca majątkowy",
  description:
    "Skontaktuj się w sprawie wyceny nieruchomości, maszyn, przedsiębiorstwa lub kosztorysu. Formularz kontaktowy, telefon, e-mail oraz adres biura w Grójcu.",
  keywords:
    "kontakt rzeczoznawca majątkowy, wycena nieruchomości kontakt, rzeczoznawca Grójec, zamów wycenę, formularz kontaktowy wycena",
  alternates: {
    canonical: `${SITE_URL}/contact`,
  },
  openGraph: {
    title: "Kontakt | TOLEMA – Rzeczoznawca majątkowy",
    description:
      "Napisz w sprawie wyceny nieruchomości, maszyn lub przedsiębiorstwa - odpowiadamy w ciągu 24 godzin.",
    type: "website",
    locale: "pl_PL",
    url: `${SITE_URL}/contact`,
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <ContactContent />
    </>
  );
}
