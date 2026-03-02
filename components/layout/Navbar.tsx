"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import content from "@/data/content.json";

export default function Navbar() {
    const pathname = usePathname();
    const navLinks = [
        { name: "Home", path: "/" },
        { name: "Courses", path: "/#courses" },
        { name: "About", path: "/#about" },
        { name: "FAQs", path: "/#faqs" },
        { name: "Contact", path: "/#contact" },
    ];

    return (
        <header className="fixed top-0 w-full z-50 bg-black/60 backdrop-blur-xl border-b border-white/10 transition-colors duration-300">
            <nav className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
                <Link href="/" className="text-white font-semibold tracking-wide text-lg">
                    NM.
                </Link>
                <ul className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <Link
                                href={link.path}
                                className={`text-sm transition-colors hover:text-white ${pathname === link.path ? "text-white" : "text-neutral-400"
                                    }`}
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className="flex items-center">
                    <Link
                        href="/#courses"
                        className="text-xs bg-white text-black px-4 py-2 rounded-full font-medium hover:bg-neutral-200 transition-colors"
                    >
                        {content.ctas[0].text}
                    </Link>
                </div>
            </nav>
        </header>
    );
}
