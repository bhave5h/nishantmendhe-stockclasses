"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import content from "@/data/content.json";

export default function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    // Handle initial load with hash from another page
    useEffect(() => {
        if (pathname === "/") {
            const hash = window.location.hash;
            if (hash) {
                const id = hash.substring(1);
                // Slight delay to ensure element is rendered
                setTimeout(() => {
                    const elem = document.getElementById(id);
                    if (elem) {
                        elem.scrollIntoView({ behavior: "smooth" });
                    }
                }, 100);
            }
        }
    }, [pathname]);

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "Webinar", path: "/webinar" },
        { name: "Contact", path: "/contact" },
        { name: "Courses", path: "/#courses" },
        { name: "About", path: "/#about" },
    ];

    const getHref = (path: string) => {
        if (pathname === "/" && path.startsWith("/#")) {
            return path.substring(1);
        }
        return path;
    };

    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
        const targetPath = getHref(path);
        
        // If it's a hash link and we are on the same page (home), scroll smoothly
        if (targetPath.startsWith("#") && pathname === "/") {
            e.preventDefault();
            const id = targetPath.substring(1);
            const elem = document.getElementById(id);
            if (elem) {
                elem.scrollIntoView({ behavior: "smooth" });
                window.history.pushState(null, "", `/#${id}`);
            }
        }
        
        setIsOpen(false);
    };

    return (
        <header className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl border-b border-neutral-200/50 transition-colors duration-300">
            <nav className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
                <Link href="/" className="flex items-center" onClick={() => setIsOpen(false)}>
                    <Image
                        src="/Images/Logos/Small_logo.svg"
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
                                href={getHref(link.path)}
                                onClick={(e) => handleLinkClick(e, link.path)}
                                className={`text-sm transition-colors hover:text-black ${pathname === link.path ? "text-black font-medium" : "text-neutral-500"
                                    }`}
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
                
                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden p-2 -mr-2 text-neutral-600 hover:text-black focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </nav>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="md:hidden absolute top-14 left-0 w-full bg-white border-b border-neutral-200/50 shadow-lg py-4 px-6 flex flex-col space-y-4">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={getHref(link.path)}
                            className={`text-base font-medium transition-colors hover:text-black ${pathname === link.path ? "text-black" : "text-neutral-600"
                                }`}
                            onClick={(e) => handleLinkClick(e, link.path)}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            )}
        </header>
    );
}
