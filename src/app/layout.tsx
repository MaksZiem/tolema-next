import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navigation/Navbar";

export const metadata: Metadata = {
  title: "TOLEMA wyceny",
  description:
    "Profesjonalne wyceny nieruchomości, biznesu i środków technicznych. Wiedza, praktyka i najwyższe standardy.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body className="font-sans">
        <Navbar />
        {children}
      </body>
    </html>
  );
}