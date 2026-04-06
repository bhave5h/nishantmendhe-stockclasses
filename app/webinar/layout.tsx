import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Join Nisshant Menddhe for Free Stock Trading Webinar - RSI Strategy",
  description: "Learn how to use RSI as a Decision-Making System and filter quality trades instantly. Join our free live session and avoid common trading mistakes.",
  openGraph: {
    title: "Join Nisshant Menddhe for Free Stock Trading Webinar",
    description: "Learn how to use RSI as a Decision-Making System and filter quality trades instantly. Join our free live session and avoid common trading mistakes.",
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
    title: "Join Nisshant Menddhe for Free Stock Trading Webinar - RSI Strategy",
    description: "Learn how to use RSI as a Decision-Making System and filter quality trades instantly. Join our free live session and avoid common trading mistakes.",
    images: ["/Images/OG/webinar.png"],
  },
};

export default function WebinarLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
