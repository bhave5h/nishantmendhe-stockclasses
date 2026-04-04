"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

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
        { name: "Courses", path: "/courses" },
        { name: "Blogs", path: "/blogs" },
        { name: "About", path: "/about" },
        { name: "Contact", path: "/contact" },
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
                
                {/* CSS Animated Hamburger */}
                <div className="md:hidden">
                    <style>{`
                        .icon-menu {
                            --gap: 5px;
                            --height-bar: 2.5px;
                            --pos-y-bar-one: 0;
                            --pos-y-bar-three: 0;
                            --scale-bar: 1;
                            --rotate-bar-one: 0;
                            --rotate-bar-three: 0;
                            width: 25px;
                            display: flex;
                            flex-direction: column;
                            gap: var(--gap);
                            cursor: pointer;
                            position: relative;
                        }
                        .bar {
                            position: relative;
                            height: var(--height-bar);
                            width: 100%;
                            border-radius: .5rem;
                            background-color: #000000;
                        }
                        .bar--1 {
                            top: var(--pos-y-bar-one);
                            transform: rotate(var(--rotate-bar-one));
                            transition: top 200ms 100ms, transform 100ms;
                        }
                        .bar--2 {
                            transform: scaleX(var(--scale-bar));
                            transition: transform 150ms 100ms;
                        }
                        .bar--3 {
                            bottom: var(--pos-y-bar-three);
                            transform: rotate(var(--rotate-bar-three));
                            transition: bottom 200ms 100ms, transform 100ms;
                        }
                        .check-icon:checked + .icon-menu > .bar--1 {
                            transition: top 200ms, transform 200ms 100ms;
                        }
                        .check-icon:checked + .icon-menu > .bar--3 {
                            transition: bottom 200ms, transform 200ms 100ms;
                        }
                        .check-icon:checked + .icon-menu {
                            --pos-y-bar-one: calc(var(--gap) + var(--height-bar));
                            --pos-y-bar-three: calc(var(--gap) + var(--height-bar));
                            --scale-bar: 0;
                            --rotate-bar-one: 45deg;
                            --rotate-bar-three: -45deg;
                        }
                    `}</style>
                    <input
                        hidden
                        className="check-icon"
                        id="check-icon"
                        name="check-icon"
                        type="checkbox"
                        checked={isOpen}
                        onChange={() => setIsOpen(!isOpen)}
                    />
                    <label className="icon-menu" htmlFor="check-icon" aria-label="Toggle menu">
                        <div className="bar bar--1" />
                        <div className="bar bar--2" />
                        <div className="bar bar--3" />
                    </label>
                </div>
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
