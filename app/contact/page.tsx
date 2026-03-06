import { Metadata } from 'next';
import content from '@/data/content.json';
import ContactForm from '@/components/ContactForm';
import { FadeUp } from '@/components/ui/motion';

export const metadata: Metadata = {
    title: `Contact Us | ${content.siteMeta.title}`,
    description: "Get in touch with Nishant Mendhe for the best stock market training in Nagpur.",
};

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-white text-[#111111] pt-28 pb-20">
            <div className="max-w-7xl mx-auto px-6">
                <FadeUp className="mb-16 text-center md:text-left">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Contact Us</h1>
                    <p className="text-lg text-neutral-500 max-w-2xl bg-balance">
                        Have questions about our stock market classes? Fill out the form below or reach out directly.
                    </p>
                </FadeUp>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
                    {/* Left Column: Form Sub-component */}
                    <FadeUp delay={0.1} className="bg-[#f5f5f7] p-8 md:p-12 rounded-[2rem] border border-neutral-200 shadow-sm relative overflow-hidden">
                        {/* Decorative Background Blob */}
                        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-blue-500/5 blur-3xl pointer-events-none"></div>

                        <h2 className="text-2xl font-bold mb-8">Send a Message</h2>
                        <ContactForm />
                    </FadeUp>

                    {/* Right Column: Promotional Video & Contact Info */}
                    <div className="flex flex-col space-y-12">
                        <FadeUp delay={0.2}>
                            <h3 className="text-xl font-semibold mb-6">Why Join Us?</h3>
                            <div className="aspect-video w-full rounded-[2rem] overflow-hidden border border-neutral-200 shadow-sm bg-neutral-100 relative group">
                                <iframe
                                    src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=0&rel=0"
                                    title="Promotional Video"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="w-full h-full absolute inset-0 z-10"
                                    loading="lazy"
                                ></iframe>
                            </div>
                        </FadeUp>

                        <FadeUp delay={0.3} className="bg-white border border-neutral-200 rounded-[2rem] p-8 shadow-sm">
                            <h3 className="text-xl font-semibold mb-6">Direct Contact</h3>
                            <div className="space-y-6">
                                <div>
                                    <p className="text-sm font-medium text-neutral-400 uppercase tracking-wider mb-2">Email</p>
                                    <a href={`mailto:${content.contact.email}`} className="text-lg font-medium text-black hover:text-blue-600 transition-colors">
                                        {content.contact.email}
                                    </a>
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-neutral-400 uppercase tracking-wider mb-3">Follow Us</p>
                                    <div className="flex flex-wrap gap-4">
                                        {Object.entries(content.contact.social).map(([platform, url]) => (
                                            <a
                                                key={platform}
                                                href={url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="px-4 py-2 bg-[#f5f5f7] rounded-full text-sm font-medium text-neutral-600 hover:bg-black hover:text-white transition-all capitalize"
                                            >
                                                {platform}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </FadeUp>
                    </div>
                </div>
            </div>
        </div>
    );
}
