import Link from "next/link";
import content from "@/data/content.json";

export default function Footer() {
    const { social, email } = content.contact;
    return (
        <footer className="bg-black text-neutral-400 border-t border-white/10 py-12 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="col-span-1 md:col-span-2">
                    <Link href="/" className="text-white font-semibold text-xl mb-4 block">
                        Nishant Mendhe
                    </Link>
                    <p className="text-sm max-w-sm mb-6">
                        Best Stock Market Training Institute in Nagpur. Elevate your trading skills today.
                    </p>
                </div>
                <div>
                    <h4 className="text-white font-medium mb-4">Quick Links</h4>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="/#courses" className="hover:text-white transition-colors">Courses</Link></li>
                        <li><Link href="/#about" className="hover:text-white transition-colors">About Us</Link></li>
                        <li><Link href="/#faqs" className="hover:text-white transition-colors">FAQs</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-white font-medium mb-4">Contact</h4>
                    <ul className="space-y-2 text-sm">
                        <li><a href={`mailto:${email}`} className="hover:text-white transition-colors">{email}</a></li>
                        <li>
                            <div className="flex space-x-4 mt-4">
                                {Object.entries(social).map(([platform, url]) => (
                                    <a key={platform} href={url} target="_blank" rel="noopener noreferrer" className="hover:text-white capitalize">
                                        {platform}
                                    </a>
                                ))}
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/10 text-xs text-center">
                © {new Date().getFullYear()} All Rights Reserved By Nishant Mendhe.
            </div>
        </footer>
    );
}
