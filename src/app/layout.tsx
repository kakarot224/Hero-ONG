import type { Metadata } from "next";
import { Providers } from "./providers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hero National — ONG Guinée | Projet Won Fintin",
  description:
    "Hero National est une ONG guinéenne dédiée à faire de Conakry la capitale la plus propre d'Afrique de l'Ouest à travers le projet Won Fintin.",
  keywords: [
    "ONG Guinée",
    "Hero National",
    "Won Fintin",
    "assainissement Conakry",
    "développement durable",
    "bénévolat Guinée",
  ],
  openGraph: {
    title: "Hero National — ONG Guinée",
    description:
      "Faire de Conakry la capitale la plus propre d'Afrique de l'Ouest.",
    type: "website",
    locale: "fr_GN",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
