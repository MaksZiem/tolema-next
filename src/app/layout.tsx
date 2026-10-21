import type { Metadata, Viewport } from "next";
import { Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navigation/Navbar";
import CookieConsent from "@/components/consent/CookieConsent";
import { SITE_URL, SITE_NAME, COMPANY } from "@/lib/site";

const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "TOLEMA wyceny | Rzeczoznawca majątkowy Grójec",
    template: "%s",
  },
  description:
    "Profesjonalne wyceny nieruchomości, maszyn i przedsiębiorstw. Rzeczoznawca majątkowy z Grójca - wiedza, praktyka i najwyższe standardy.",
  keywords:
    "rzeczoznawca majątkowy, wycena nieruchomości, rzeczoznawca Grójec, operat szacunkowy, wycena maszyn, wycena przedsiębiorstwa",
  authors: [{ name: SITE_NAME }],
  openGraph: {
    siteName: SITE_NAME,
    locale: "pl_PL",
    type: "website",
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0d0d0d",
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: SITE_NAME,
  description:
    "Rzeczoznawca majątkowy - wyceny nieruchomości, maszyn, środków technicznych i przedsiębiorstw.",
  url: SITE_URL,
  legalName: COMPANY.name,
  taxID: COMPANY.nip,
  email: COMPANY.email,
  telephone: "+48737535554",
  address: {
    "@type": "PostalAddress",
    streetAddress: COMPANY.street,
    postalCode: COMPANY.postalCode,
    addressLocality: COMPANY.city,
    addressCountry: "PL",
  },
  areaServed: {
    "@type": "State",
    name: "Województwo mazowieckie",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body className={`${hanken.variable} font-sans`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <Navbar />
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}