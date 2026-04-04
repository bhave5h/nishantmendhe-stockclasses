import { Metadata } from 'next';
import Image from 'next/image';
import AboutSection from '@/components/sections/About';
import content from '@/data/content.json';

export const metadata: Metadata = {
    title: `About Us | Stock Market Training Institute in Nagpur, Maharashtra`,
    description: 'Learn more about Nishant Mendhe Stock Market Training Institute in Nagpur. We empower traders in Maharashtra with practical stock market knowledge, swing trading, and technical analysis.',
    keywords: 'stock market classes in Maharashtra, trading institute in Nagpur, Nishant Mendhe about, stock market training center Maharashtra',
    openGraph: {
        title: `About Us | Stock Market Training Institute in Nagpur, Maharashtra`,
        description: 'Learn more about Nishant Mendhe Stock Market Training Institute in Nagpur. We empower traders in Maharashtra with practical stock market knowledge..',
        url: '/about',
        type: 'website',
    },
};

export default function AboutPage() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "EducationalOrganization",
        "name": "Nishant Mendhe Stock Market Training Institute",
        "description": "Premium stock market training institute offering classes on technical analysis and swing trading in Nagpur, Maharashtra.",
        "url": process.env.NEXT_PUBLIC_SITE_URL || "https://www.nishantmendhe.in",
        "logo": `${process.env.NEXT_PUBLIC_SITE_URL}/Images/Logos/Icon.png`,
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Nagpur",
            "addressRegion": "Maharashtra",
            "addressCountry": "IN"
        },
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": content.contact.phone,
            "contactType": "customer service"
        }
    };

    return (
        <main className="min-h-screen bg-white pt-20 pb-5">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
            
            {/* Extended SEO Header for Nagpur, Maharashtra focus */}
            <div className="max-w-[1000px] mx-auto px-6 md:px-12 pt-10 pb-8">
                <div className="text-center">
                     <span className="inline-block py-1 px-3 rounded-full bg-neutral-100 text-neutral-600 text-sm font-semibold mb-4 border border-neutral-200">
                        Based in Nagpur, Maharashtra
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#0F172A] leading-tight">
                        Empowering Traders in <span className="text-transparent bg-clip-text bg-gradient-to-tr from-blue-500 via-teal-500 to-green-500">Central India</span>
                    </h1>
                    <p className="text-lg md:text-xl text-neutral-500 font-medium tracking-wide max-w-3xl mx-auto leading-relaxed">
                        We are recognized as a leading stock market training institute in Maharashtra. Our mission is to demystify financial markets and provide retail traders in Nagpur and beyond with the institutional tools needed to succeed.
                    </p>
                </div>
            </div>

            {/* Reuse the existing About section component */}

            {/* Add extra SEO focused blocks */}
            <div className="max-w-[1000px] mx-auto px-6 md:px-12 mt-1 pt-16 border-t border-gray-100 pr-10 pl-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                        <h2 className="text-3xl font-bold text-[#0F172A] mb-4">Our Vision</h2>
                        <p className="text-neutral-600 leading-relaxed text-lg">
                            To be the premier destination for financial literacy and technical trading education in Central India. We believe that with the right guidance, anyone can uncover the patterns in the market and create sustainable wealth.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold text-[#0F172A] mb-4">Why Choose Us in Nagpur?</h2>
                        <p className="text-neutral-600 leading-relaxed text-lg">
                            Unlike generic online courses, our stock market classes in Nagpur offer a practical, hands-on trading floor environment. Led by Nishant Mendhe, you receive personalized mentoring, live market insights, and a community of dedicated traders right here in Maharashtra.
                        </p>
                    </div>
                </div>
            </div>

            <div>
                <AboutSection />
            </div>
        </main>
    );
}
