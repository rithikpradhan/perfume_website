import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const outfit = Outfit({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "MOCKO — Premium Luxury Fragrances",
  description:
    "Discover distinctive fragrances with an elegant, modern touch — made for those who stand out.",
  keywords: "luxury perfume, premium fragrance, signature scent, MOCKO, designer perfume",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${outfit.variable} ${playfair.variable}`}>
      <body className="min-h-screen bg-[#faf8f5] text-[#1a1a1a] antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
