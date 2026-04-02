import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Join Nishant Mendhe for Stock Trading Basics",
  description: "Learn the fundamentals of stock trading and understand how to build a strong foundation in the financial markets with guidance from Nishant Mendhe.",
  openGraph: {
    title: "Join Nishant Mendhe for Stock Trading Basics",
    description: "Learn the fundamentals of stock trading and understand how to build a strong foundation in the financial markets with guidance from Nishant Mendhe.",
    url: "https://www.nishantmendhe.in/webinar",
    siteName: "Nishant Mendhe Stock Market Training",
    images: [
      {
        url: "/Images/OG/webinar.png",
        width: 1200,
        height: 630,
        alt: "Nishant Mendhe Trading Webinar",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Join Nishant Mendhe for Stock Trading Basics",
    description: "Learn the fundamentals of stock trading and understand how to build a strong foundation in the financial markets with guidance from Nishant Mendhe.",
    images: ["/Images/OG/webinar.png"],
  },
};

export default function WebinarLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
