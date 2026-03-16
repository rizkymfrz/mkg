import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PT Mitra Kerja Gemilang — Solusi Penyedia Tenaga Kerja Profesional",
  description:
    "PT Mitra Kerja Gemilang menyediakan layanan penyediaan tenaga kerja profesional, rekrutmen, pelatihan, dan konsultasi HR untuk berbagai industri di Indonesia.",
  keywords: [
    "penyedia tenaga kerja",
    "outsourcing",
    "jasa keamanan",
    "rekrutmen",
    "HR consulting",
    "tenaga kerja profesional",
    "Karawang",
  ],
  openGraph: {
    title: "PT Mitra Kerja Gemilang — Solusi Penyedia Tenaga Kerja Profesional",
    description:
      "Layanan penyediaan tenaga kerja profesional, rekrutmen, pelatihan, dan konsultasi HR untuk berbagai industri.",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
