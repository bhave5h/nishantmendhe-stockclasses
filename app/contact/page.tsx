import { Metadata } from "next";
import content from "@/data/content.json";
import ContactForm from "@/components/ContactForm";
import ContactVideo from "@/components/ui/ContactVideo";
import { FadeUp } from "@/components/ui/motion";

export const metadata: Metadata = {
  title: `Contact Us | ${content.siteMeta.title}`,
  description:
    "Get in touch with Nishant Mendhe for the best stock market training in Nagpur.",
  openGraph: {
    title: `Contact Us | ${content.siteMeta.title}`,
    description: "Get in touch with Nishant Mendhe for the best stock market training in Nagpur.",
    url: "/contact",
    siteName: content.siteMeta.title,
    images: [
      {
        url: "/Images/Nishant.png",
        width: 1200,
        height: 630,
        alt: "Contact Nishant Mendhe",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Contact Us | ${content.siteMeta.title}`,
    description: "Get in touch with Nishant Mendhe for the best stock market training in Nagpur.",
    images: ["/Images/Nishant.png"],
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white pt-10">

      <div className="max-w-7xl mx-auto p-10 lg:p-10 ">
        <FadeUp className="mb-6 text-center md:text-left ">
          <h1 className="text-3xl md:text-3xl lg:text-4xl font-bold text-neutral-900 tracking-tight mb-6">
            Contact Us
          </h1>
          <p className="text-l md:text-[18px] text-neutral-500 lg:leading-10 md:leading-8 sm:leading-5 font-semibold max-w-2xl">
            Have questions about our stock market classes? Fill out the form
            below or reach out directly.
          </p>
        </FadeUp>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start md:p-10 lg:p-0">
          {/* Left Column: Form Sub-component */}
          <FadeUp
            delay={0.1}
            className="lg:col-span-6 xl:col-span-6 bg-[#f5f5f7] p-8 md:p-12 rounded-[2rem] border border-neutral-200 shadow-sm relative overflow-hidden"
          >
            <h2 className="text-2xl font-bold mb-8">Send a Message</h2>
            <ContactForm />
          </FadeUp>

          {/* Middle Column: Promotional Vertical Video */}
          <FadeUp delay={0.2} className="lg:col-span-3 xl:col-span-3 w-full flex flex-col">
            <h3 className="text-xl font-semibold mb-6 text-center lg:text-left">Why Join Us?</h3>
            <div className="aspect-[9/16] w-full max-w-[320px] mx-auto lg:mx-0 rounded-[2rem] overflow-hidden border border-neutral-200 shadow-sm bg-black relative group cursor-pointer">
              <ContactVideo />
            </div>
          </FadeUp>

          {/* Right Column: Contact Info */}
          <FadeUp
            delay={0.3}
            className="lg:col-span-3 xl:col-span-3 bg-white border border-neutral-200 rounded-[2rem] p-8 shadow-sm w-full h-full min-h-[400px]"
          >
            <h3 className="text-xl font-semibold mb-6">Direct Contact</h3>
            <div className="space-y-6">
              <div>
                <p className="text-sm font-medium text-neutral-400 uppercase tracking-wider mb-2">
                  Email
                </p>
                <a
                  href={`mailto:${content.contact.email}`}
                  className="text-lg font-medium text-black hover:text-blue-600 transition-colors break-words"
                >
                  {content.contact.email}
                </a>
              </div>
              <div className="pt-4">
                <p className="text-sm font-medium text-neutral-400 uppercase tracking-wider mb-4">
                  Follow Us
                </p>
                <div className="flex flex-wrap gap-3">
                  {Object.entries(content.contact.social).map(
                    ([platform, url]) => (
                      <a
                        key={platform}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-[#f5f5f7] rounded-full text-xs font-semibold text-neutral-600 hover:bg-black hover:text-white transition-all capitalize whitespace-nowrap"
                      >
                        {platform}
                      </a>
                    ),
                  )}
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </div>
  );
}
