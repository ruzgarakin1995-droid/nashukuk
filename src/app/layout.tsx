import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "NAS Hukuk & Danışmanlık | Avukat Süleyman UĞUR - Şişli İstanbul",
  description: "NAS Hukuk & Danışmanlık - Avukat Süleyman UĞUR. Nurol Tower Şişli merkezli, ceza, ticaret, iş ve gayrimenkul davalarında şeffaf, sonuç odaklı ve etik hukuki danışmanlık.",
  keywords: ["NAS Hukuk", "Avukat Süleyman Uğur", "Süleyman Uğur", "Nurol Tower Avukat", "Şişli Hukuk Bürosu", "İstanbul Avukat", "Ağır Ceza Avukatı", "Şirketler Hukuku"],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body className={`${plusJakartaSans.variable} font-sans antialiased bg-[#FAF8F5] text-slate-900`}>
        {children}
      </body>
    </html>
  );
}
