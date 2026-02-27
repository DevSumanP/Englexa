"use client";

import { Instagram, Facebook, Send, Twitter } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "../ui/AnimatedSection";
import { textStyles, colorStyles, spacingStyles } from "@/lib/token";
import Link from "next/link";
import Image from "next/image";

const SPRING_SOFT = { type: "spring", stiffness: 180, damping: 26 } as const;

const Footer = () => {
    return (
        <footer className={`relative overflow-hidden ${spacingStyles.px.lg} ${colorStyles.bg.deepDark} pt-20 pb-10`}>
            {/* Subtle Grid Background */}
            <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }}
            />

            <div className="section-container relative z-10">
                <AnimatedSection>
                    <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
                        {/* Brand Column */}
                        <div className="max-w-[280px]">
                            <div className="flex items-center group mb-[16px]">
                                {/* Logo */}
                                <Link href="/" className="flex items-center">
                                    <Image
                                        src="https://framerusercontent.com/images/jHB3hmJdG9CVzTuvkMOYxEkI5s.svg?width=172&height=36"
                                        alt="Logo"
                                        width={172}
                                        height={36}
                                        className="h-[36px] w-[172px]"
                                    />
                                </Link>
                            </div>
                            <p className={`${textStyles.bodyMedium} ${colorStyles.text.white} font-medium mb-8 leading-snug`}>
                                Your English Personal Confidence Tutor — Learn. Speak. Succeed.
                            </p>

                            {/* Social Icons */}
                            <div className="flex gap-[24px]">
                                {[
                                    { icon: <Instagram className="w-[20px] h-[20px]" />, href: "#" },
                                    { icon: <Twitter className="w-[20px] h-[20px]" />, href: "#" },
                                    { icon: <Facebook className="w-[20px] h-[20px] " />, href: "#" },
                                    { icon: <Send className="w-[20px] h-[20px]" />, href: "#" },
                                ].map((social, i) => (
                                    <motion.a
                                        key={i}
                                        href={social.href}
                                        whileHover={{ y: -4, color: "white" }}
                                        transition={SPRING_SOFT}
                                        className={`flex items-center justify-center ${colorStyles.text.orangeAccent} transition-colors`}
                                    >
                                        {social.icon}
                                    </motion.a>
                                ))}
                            </div>
                        </div>

                        {/* Links Columns */}
                        <div className="flex flex-col md:flex-row gap-12 md:gap-[96px]">
                            {/* Menu */}
                            <div className="min-w-[120px]">
                                <h4 className={`${textStyles.heading3Extra} ${colorStyles.text.white} mb-[16px]`}>Menu</h4>
                                <div className="flex flex-col gap-[12px]">
                                    {["Home", "My Services", "About", "Resources", "Blog", "Contact"].map((link) => (
                                        <a key={link} href={`#${link.toLowerCase().replace(' ', '-')}`} className={`${textStyles.bodyMedium} text-white/60 hover:text-white transition-colors`}>
                                            {link}
                                        </a>
                                    ))}
                                </div>
                            </div>

                            {/* Services */}
                            <div className="min-w-[200px]">
                                <h4 className={`${textStyles.heading3Extra} ${colorStyles.text.white} mb-[16px]`}>Services</h4>
                                <div className="flex flex-col gap-[12px]">
                                    {[
                                        "Conversational English",
                                        "Business English",
                                        "IELTS or Exam Preparation",
                                        "Grammar and Writing",
                                        "Kids English Classes",
                                        "Specific English"
                                    ].map((link) => (
                                        <a key={link} href="#services" className={`${textStyles.bodyMedium} text-white/60 hover:text-white transition-colors`}>
                                            {link}
                                        </a>
                                    ))}
                                </div>
                            </div>

                            {/* Extra Links */}
                            <div className="min-w-[160px]">
                                <h4 className={`${textStyles.heading3Extra} ${colorStyles.text.white} mb-[16px]`}>Extra Links</h4>
                                <div className="flex flex-col gap-[12px]">
                                    {["Links Page", "Pricing", "FAQs", "Privacy Policy", "Terms and Conditions", "404"].map((link) => (
                                        <a key={link} href="#" className={`${textStyles.bodyMedium} text-white/60 hover:text-white transition-colors`}>
                                            {link}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="pt-[24px] border-t border-white/5 flex flex-col md:flex-row justify-between items-center">
                        <p className={`${textStyles.bodySmall} text-white/60`}>
                            © 2026 Englexa. Tutor
                        </p>
                        <p className={`${textStyles.bodySmall} text-white/60`}>
                            Built in Next.js | Created by <span className="text-white">Suman Pokhrel</span>
                        </p>
                    </div>
                </AnimatedSection>
            </div>
        </footer>
    );
};

export default Footer;
