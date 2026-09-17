import type { Metadata, Viewport } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import ScrollProgress from "./components/ScrollProgress";
import Cursor from "./components/Cursor";
import Grain from "./components/Grain";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Alvin Stark",
  description:
    "Alvin Stark in Switzerland. Ships Marauder and Notebook, built with an AI crew he uses daily. Also investing.",
};

export const viewport: Viewport = {
  themeColor: "#0b0d0e",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={outfit.variable}>
      <body className={outfit.className}>
        <a className="skipLink" href="#main">
          Skip to content
        </a>
        <ScrollProgress />
        <Grain />
        <Cursor />
        <main id="main">{children}</main>
      </body>
    </html>
  );
}
