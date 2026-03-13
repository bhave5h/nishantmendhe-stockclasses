import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import content from "@/data/content.json";

import PageTransition from "@/components/PageTransition";

export const metadata: Metadata = {
  title: content.siteMeta.title,
  description: content.siteMeta.description,
  keywords: content.siteMeta.keywords,
  icons: {
    icon: "/Images/Logos/Icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-['SF_Pro_Display',sans-serif] bg-white text-neutral-900 antialiased min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 flex flex-col">
          <PageTransition>
            {children}
          </PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}
