import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Layout/Header/Header";
import ContactsSection from "@/components/Layout/ContactsSection/ContactsSection";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "CV - Mathéo Deleplanque",
  description: "CV en ligne éco-responsable réalisé avec Next.js.",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="fr">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header />
        <main id="main-content">
          {children}
        </main>
        <ContactsSection />
      </body>
    </html>
  );
};

export default RootLayout;
