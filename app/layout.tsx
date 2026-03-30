import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import content from "@/data/content.json";

import PageTransition from "@/components/PageTransition";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: content.siteMeta.title,
  description: content.siteMeta.description,
  keywords: content.siteMeta.keywords,
  openGraph: {
    title: content.siteMeta.title,
    description: content.siteMeta.description,
    url: "/",
    siteName: content.siteMeta.title,
    images: [
      {
        url: "/Images/Nishant.png",
        width: 1200,
        height: 630,
        alt: content.siteMeta.title,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: content.siteMeta.title,
    description: content.siteMeta.description,
    images: ["/Images/Nishant.png"],
  },
  icons: {
    icon: "/Images/Logos/Icon.png",
  },
  alternates: {
    canonical: null,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
             __html: JSON.stringify([
               content.siteMeta.schema,
               {
                 "@context": "https://schema.org",
                 "@type": "FAQPage",
                 "mainEntity": content.faqs.map((faq) => ({
                   "@type": "Question",
                   "name": faq.question,
                   "acceptedAnswer": {
                     "@type": "Answer",
                     "text": faq.answer,
                   },
                 })),
               }
             ])
          }}
        />
      </head>
      <body className="font-['Helvetica Neue',sans-serif] bg-white text-neutral-900 antialiased min-h-screen flex flex-col">
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
