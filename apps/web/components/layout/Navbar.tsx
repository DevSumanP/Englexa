"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { textStyles, colorStyles, radiusStyles } from "@/lib/token";
import Link from "next/link";
import Image from "next/image";

// Note: `englexa-coral` wasn't captured in the brand extraction.
// Add this to your tokens.css:
//   :root { --color-coral: #your-coral-hex; }
// And to colorStyles: coral: "color-coral" / bg.coral: "bg-coral"
// For now it's kept as an inline Tailwind class — replace `bg-[#coral]` with your value.

const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() ?? 0;
        if (latest > previous && latest > 150) {
            setIsVisible(false);
        } else {
            setIsVisible(true);
        }
    });

    const links = ["Home", "Services", "About", "Resources", "Blog"];

    return (
        <motion.nav
            animate={{
                y: isVisible ? 0 : -120,
                opacity: isVisible ? 1 : 0
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={`fixed top-8 left-1/2 -translate-x-1/2 w-[calc(100%-48px)] max-w-[1200px] z-50 ${colorStyles.bg.dark} bg-opacity-80 border ${colorStyles.border.forBorder} ${radiusStyles.full} backdrop-blur-md shadow-2xl`}
        >
            <div className="flex items-center justify-between px-6 py-3">

                {/* Logo & Brand */}
                <Link href="/" className="flex items-center gap-3">
                    <Image
                        src="https://framerusercontent.com/images/jHB3hmJdG9CVzTuvkMOYxEkI5s.svg?width=150&height=32"
                        alt="Englexa Logo"
                        width={150}
                        height={32}
                        className="h-8 w-auto"
                    />
                </Link>

                {/* Desktop Navigation Links */}
                <div className="hidden md:flex items-center gap-10">
                    {links.map((link) => (
                        <Link
                            key={link}
                            href={`#${link.toLowerCase()}`}
                            className={`${textStyles.bodyMedium} ${colorStyles.text.white} opacity-60 hover:opacity-100 transition-all font-medium relative group`}
                        >
                            {link}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all group-hover:w-full" />
                        </Link>
                    ))}
                </div>

                {/* Desktop Action Button */}
                <div className="hidden md:block">
                    <Link
                        href="#contact"
                        className={`${radiusStyles.full} ${colorStyles.bg.orangeAccent} px-8 py-3 ${textStyles.button} ${colorStyles.text.white} hover:scale-105 transition-transform inline-block`}
                    >
                        Get in Touch
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className={`md:hidden p-2 ${colorStyles.text.white}`}
                    onClick={() => setMobileOpen(!mobileOpen)}
                >
                    {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </div>

            {/* Mobile Sidebar Menu */}
            {mobileOpen && (
                <div className={`md:hidden absolute top-full mt-4 left-0 w-full ${colorStyles.bg.dark} border ${colorStyles.border.forBorder} rounded-3xl p-6 shadow-2xl`}>
                    <div className="flex flex-col gap-6">
                        {links.map((link) => (
                            <Link
                                key={link}
                                href={`#${link.toLowerCase()}`}
                                className={`${textStyles.bodyMedium} ${colorStyles.text.white} opacity-80`}
                                onClick={() => setMobileOpen(false)}
                            >
                                {link}
                            </Link>
                        ))}
                        <Link
                            href="#contact"
                            className={`w-full text-center ${radiusStyles.full} ${colorStyles.bg.orangeAccent} py-4 ${textStyles.button} ${colorStyles.text.white}`}
                            onClick={() => setMobileOpen(false)}
                        >
                            Get in Touch
                        </Link>
                    </div>
                </div>
            )}
        </motion.nav>
    );
};

export default Navbar;