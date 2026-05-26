import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://milo-gaida-portfolio.vercel.app"),
  title: {
    default: "Milo Gaida",
    template: "%s — Milo Gaida",
  },
  description:
    "Business and data analytics graduate. Intern and Werkstudent roles in fintech, AI/data, energy, and defence. Berlin.",
  keywords: [
    "Milo Gaida",
    "data analytics",
    "business analyst",
    "Berlin",
    "fintech",
    "machine learning",
    "Imperial College",
    "FU Berlin",
  ],
  authors: [{ name: "Milo Gaida" }],
  openGraph: {
    title: "Milo Gaida — Portfolio",
    description:
      "Business and data analytics graduate. Comfortable in an office or a conflict zone.",
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary",
    title: "Milo Gaida — Portfolio",
    description:
      "Business and data analytics graduate. Comfortable in an office or a conflict zone.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="font-sans antialiased bg-canvas text-cream">
        <Nav />
        {children}
      </body>
    </html>
  );
}
