import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import content from "@/data/content.json";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: content.siteMeta.title,
  description: content.siteMeta.description,
  keywords: content.siteMeta.keywords,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.className} bg-black text-white antialiased min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-1 pt-14">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
