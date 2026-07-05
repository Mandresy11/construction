import type { Metadata } from "next";
import { Rethink_Sans } from "next/font/google";
import "./globals.css";

const rethinkSans = Rethink_Sans({
  variable: "--font-body",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: "Nemrod's Emergence Construction, charpente bois & construction à La Réunion",
  description:
    "Charpente traditionnelle et construction bois pour particuliers exigeants. De l'étude à la livraison, nous coordonnons chaque étape de votre projet à La Réunion.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${rethinkSans.variable} h-full antialiased`}
    >
      <body
        className="min-h-full flex flex-col bg-cream text-ink"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
