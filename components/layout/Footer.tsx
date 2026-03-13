import Link from "next/link";
import Image from "next/image";
import { Facebook, Linkedin, Youtube, Twitter, Mail, MapPin, Phone } from 'lucide-react';
import content from "@/data/content.json";

export default function Footer() {
    const { social, email, phone } = content.contact;

    // Map platform names to Lucide icons
    const getSocialIcon = (platform: string) => {
        switch (platform.toLowerCase()) {
            case 'facebook': return <Facebook className="w-5 h-5" />;
            case 'linkedin': return <Linkedin className="w-5 h-5" />;
            case 'youtube': return <Youtube className="w-5 h-5" />;
            case 'twitter': return <Twitter className="w-5 h-5" />;
            default: return null;
        }
    };

    return (
        <footer className="bg-black text-gray-300 relative overflow-hidden">
            {/* Subtle Top Border/Glow effect */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent opacity-50"></div>

            <div className="max-w-[1280px] mx-auto px-6 md:px-12 pt-20 pb-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">

                    {/* Brand & About */}
                    <div className="lg:col-span-4 flex flex-col items-start">
                        <Link href="/" className="mb-6 block">
                            <Image
                                src="/Images/Full_logo.svg"
                                alt="Nishant Mendhe Logo"
                                width={270}
                                height={90}
                                className="h-auto w-auto max-w-[270px]"
                            />
                        </Link>
                        <p className="text-gray-400 leading-relaxed mb-8 max-w-sm">
                            Best Stock Market Training Institute in Nagpur. Elevate your trading skills today with expert-led courses and live market sessions.
                        </p>

                        <div className="flex items-center gap-4">
                            {Object.entries(social).map(([platform, url]) => (
                                <a
                                    key={platform}
                                    href={url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full bg-gray-800/50 flex items-center justify-center text-gray-400 hover:bg-white hover:text-[#0F172A] transition-all duration-300 transform hover:-translate-y-1"
                                    aria-label={platform}
                                >
                                    {getSocialIcon(platform)}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="lg:col-span-2 lg:col-start-6">
                        <h4 className="text-white font-semibold mb-6 tracking-wide">Quick Links</h4>
                        <ul className="space-y-4">
                            <li><Link href="/#courses" className="text-gray-400 hover:text-white transition-colors duration-200 block w-max">Premium Courses</Link></li>
                            <li><Link href="/#about" className="text-gray-400 hover:text-white transition-colors duration-200 block w-max">About Us</Link></li>
                            <li><Link href="/webinar" className="text-gray-400 hover:text-white transition-colors duration-200 block w-max">Webinar</Link></li>
                            <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors duration-200 block w-max">Contact</Link></li>
                            <li><Link href="/#faqs" className="text-gray-400 hover:text-white transition-colors duration-200 block w-max">FAQs</Link></li>
                        </ul>
                    </div>

                    {/* Legal/Extra */}
                    <div className="lg:col-span-2">
                        <h4 className="text-white font-semibold mb-6 tracking-wide">Legal</h4>
                        <ul className="space-y-4">
                            <li><Link href="#" className="text-gray-400 hover:text-white transition-colors duration-200 block w-max">Privacy Policy</Link></li>
                            <li><Link href="#" className="text-gray-400 hover:text-white transition-colors duration-200 block w-max">Terms of Service</Link></li>
                            <li><Link href="#" className="text-gray-400 hover:text-white transition-colors duration-200 block w-max">Refund Policy</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="lg:col-span-3">
                        <h4 className="text-white font-semibold mb-6 tracking-wide">Get in Touch</h4>
                        <ul className="space-y-5 text-gray-400">
                            <li className="flex items-start gap-3">
                                <Mail className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0" />
                                <a href={`mailto:${email}`} className="hover:text-white transition-colors duration-200 break-all">{email}</a>
                            </li>
                            {phone && (
                                <li className="flex items-center gap-3">
                                    <Phone className="w-5 h-5 text-gray-500 flex-shrink-0" />
                                    <span className="hover:text-white transition-colors duration-200 cursor-default">{phone}</span>
                                </li>
                            )}
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0" />
                                <span className="leading-relaxed">Nagpur, Maharashtra, India</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-gray-800/80 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-gray-500 text-center md:text-left">
                        © {new Date().getFullYear()} Nishant Mendhe. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
