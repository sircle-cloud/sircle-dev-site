import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sircle.dev — Expand your dev team in weeks, not months",
  description:
    "Dedicated developers voor Nederlandse bedrijven. Geïntegreerd in jouw team, onder Nederlands management. Vanaf €5.500/maand.",
  keywords:
    "developer outsourcing, dedicated developers, Nederland, team uitbreiden, offshore development",
  openGraph: {
    title: "Sircle.dev — Expand your dev team in weeks, not months",
    description:
      "Dedicated developers voor Nederlandse bedrijven. Vanaf €5.500/maand.",
    type: "website",
    locale: "nl_NL",
    siteName: "Sircle.dev",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className={`${bricolage.variable} ${inter.variable}`}>
      <body className="bg-white antialiased">{children}</body>
    </html>
  );
}
