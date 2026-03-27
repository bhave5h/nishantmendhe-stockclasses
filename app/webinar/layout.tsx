import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Join Nishant Mendhe for Stock Trading Basics",
  description: "Learn the fundamentals of stock trading and understand how to build a strong foundation in the financial markets with guidance from Nishant Mendhe.",
  openGraph: {
    title: "Join Nishant Mendhe for Stock Trading Basics",
    description: "Learn the fundamentals of stock trading and understand how to build a strong foundation in the financial markets with guidance from Nishant Mendhe.",
    images: [
      {
        url: "/Images/web1.png",
      },
    ],
  },
};

export default function WebinarLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
