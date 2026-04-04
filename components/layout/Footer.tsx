"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Facebook,
  Linkedin,
  Youtube,
  Twitter,
  Instagram,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import content from "@/data/content.json";

export default function Footer() {
  const pathname = usePathname();
  const { social, email, phone } = content.contact;

  // Map platform names to Lucide icons
  const getSocialIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case "instagram":
        return <Instagram className="w-5 h-5" />;
      case "facebook":
        return <Facebook className="w-5 h-5" />;
      case "linkedin":
        return <Linkedin className="w-5 h-5" />;
      case "youtube":
        return <Youtube className="w-5 h-5" />;
      case "twitter":
        return <Twitter className="w-5 h-5" />;
      default:
        return null;
    }
  };

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string,
  ) => {
    if (pathname === "/") {
      e.preventDefault();
      const elem = document.getElementById(targetId);
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", `/#${targetId}`);
      }
    }
  };

  return (
    <footer className="bg-black text-gray-300 relative overflow-hidden">
      {/* Subtle Top Border/Glow effect */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent opacity-50"></div>

      <div className="max-w-[1000px] mx-auto px-6 md:px-12 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          {/* Brand & About */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <Link href="/" className="mb-6 block">
              <Image
                src="/Images/Logos/Full_logo.svg"
                alt="Nishant Mendhe Logo"
                width={270}
                height={50}
                style={{ width: "270px", height: "auto" }}
                className="max-w-[270px]"
              />
            </Link>
            <p className="text-gray-400 leading-relaxed mb-8 max-w-sm">
              Best Stock Market Training Institute in Nagpur. Elevate your
              trading skills today with expert-led courses and live market
              sessions.
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
              {/* WhatsApp */}
              <a
                href="https://wa.me/919823456789"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-10 h-10 rounded-full bg-gray-800/50 flex items-center justify-center text-gray-400 hover:bg-[#25D366] hover:text-white transition-all duration-300 transform hover:-translate-y-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="text-white font-semibold mb-6 tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/courses"
                  className="text-gray-400 hover:text-white transition-colors duration-200 block w-max"
                >
                  Premium Courses
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-white transition-colors duration-200 block w-max"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/blogs"
                  className="text-gray-400 hover:text-white transition-colors duration-200 block w-max"
                >
                  Blogs & Articles
                </Link>
              </li>
              <li>
                <Link
                  href="/webinar"
                  className="text-gray-400 hover:text-white transition-colors duration-200 block w-max"
                >
                  Webinar
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-white transition-colors duration-200 block w-max"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href={pathname === "/" ? "#faqs" : "/#faqs"}
                  onClick={(e) => handleScroll(e, "faqs")}
                  className="text-gray-400 hover:text-white transition-colors duration-200 block w-max"
                >
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-semibold mb-6 tracking-wide">
              Get in Touch
            </h4>
            <ul className="space-y-5 text-gray-400">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0" />
                <a
                  href={`mailto:${email}`}
                  className="hover:text-white transition-colors duration-200"
                >
                  {email}
                </a>
              </li>
              {phone && (
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  <span className="hover:text-white transition-colors duration-200 cursor-default">
                    {phone}
                  </span>
                </li>
              )}
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
