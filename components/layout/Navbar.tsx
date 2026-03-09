"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import content from "@/data/content.json";

export default function Navbar() {
    const pathname = usePathname();
    const navLinks = [
        { name: "Home", path: "/" },
        { name: "Courses", path: "/#courses" },
        { name: "About", path: "/#about" },
        { name: "FAQs", path: "/#faqs" },
        { name: "Contact", path: "/contact" },
    ];

    return (
        <header className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl border-b border-neutral-200/50 transition-colors duration-300">
            <nav className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
                <Link href="/" className="flex items-center">
                    <Image
                        src="/logo.svg"
                        alt="NM Logo"
                        width={40} // Adjust width as needed
                        height={40} // Adjust height as needed
                        priority
                    />
                </Link>
                <ul className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <Link
                                href={link.path}
                                className={`text-sm transition-colors hover:text-black ${pathname === link.path ? "text-black font-medium" : "text-neutral-500"
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
                        className="text-xs bg-black text-white px-4 py-2 rounded-full font-medium shadow-sm hover:bg-neutral-800 transition-colors"
                    >
                        {content.ctas[0].text}
                    </Link>
                </div>
            </nav>
        </header>
    );
}
