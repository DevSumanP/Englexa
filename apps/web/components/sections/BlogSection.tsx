"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection, { FadeInChild } from "../ui/AnimatedSection";
import blog1 from "@/public/images/blogs/blog1.jpg";
import blog2 from "@/public/images/blogs/blog2.jpg";
import blog3 from "@/public/images/blogs/blog3.jpg";
import { colorStyles, radiusStyles, spacingStyles, textStyles } from "@/lib/token";

const posts = [
    { image: blog1, date: "May 23, 2025", category: "Speaking English", title: "How to Speak English with Confidence and Quickly" },
    { image: blog2, date: "May 10, 2025", category: "General English", title: "5 Common English Mistakes and How to Fix Them" },
    { image: blog3, date: "Apr 28, 2025", category: "Business English", title: "English Skills for Career Success at Work" },
];

const SPRING_SNAP = { type: "spring", stiffness: 340, damping: 28 } as const;

const BlogSection = () => {
    return (
        <section className={`${spacingStyles.py.section} ${spacingStyles.px.lg} ${colorStyles.bg.deepDark}`} id="blog">
            <div className="section-container">
                <AnimatedSection className="text-center mb-16">
                    <FadeInChild
                        className={`${spacingStyles.mb.md} inline-flex items-center gap-2 ${radiusStyles.full} bg-white/5 ${spacingStyles.px.sm} py-1.5 backdrop-blur-sm mx-auto`}
                    >
                        <motion.span
                            className={`text-lg ${colorStyles.text.orangeAccent}`}
                            animate={{ rotate: [0, 15, -10, 0] }}
                            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", repeatDelay: 2 }}
                        >
                            ✦
                        </motion.span>
                        <span className={`${textStyles.label} !font-medium ${colorStyles.text.lightGrey}`}>
                            Blog & News
                        </span>
                    </FadeInChild>

                    <FadeInChild delay={0.1}>
                        <h2 className={`${textStyles.heading2} ${colorStyles.text.white}`}>
                            Learning English Tips, Insights & Inspiration
                        </h2>
                    </FadeInChild>

                    <FadeInChild delay={0.2}>
                        <p className={`${textStyles.bodyLarge} ${colorStyles.text.lightGrey} mt-6 max-w-2xl mx-auto`}>
                            Practical advice, learning strategies, and motivational stories to help you stay confident on your English journey.
                        </p>
                    </FadeInChild>
                </AnimatedSection>

                <div className="grid gap-8 md:grid-cols-3">
                    {posts.map((post, i) => (
                        <FadeInChild key={post.title} delay={0.1 * i}>
                            <motion.a
                                href="#"
                                whileHover={{
                                    y: -8,
                                    backgroundColor: "var(--color-orange-accent)",
                                    borderColor: "rgba(255, 255, 255, 0)"
                                }}
                                transition={{ duration: 0.1 }}
                                className={`group block h-full overflow-hidden rounded-[32px] ${colorStyles.bg.dark} border border-white/5 transition-all duration-300`}
                            >
                                <div className="p-4 pb-0">
                                    <div className="relative aspect-[16/12] overflow-hidden rounded-[12px]">
                                        <Image
                                            src={post.image}
                                            alt={post.title}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                                    </div>
                                </div>
                                <div className="p-8 pt-6 text-center">
                                    <div className="flex items-center justify-center gap-2 mb-4">
                                        <span className={`${textStyles.bodySmall} ${colorStyles.text.lightGrey} group-hover:text-white/80 transition-colors`}>{post.date}</span>
                                        <span className="text-white/20 group-hover:text-white/40 transition-colors">|</span>
                                        <span className={`${textStyles.bodySmall} ${colorStyles.text.lightGrey} group-hover:text-white/80 transition-colors`}>
                                            {post.category}
                                        </span>
                                    </div>
                                    <h3 className={`${textStyles.heading3} ${colorStyles.text.white} line-clamp-2 leading-tight transition-colors`}>
                                        {post.title}
                                    </h3>
                                </div>
                            </motion.a>
                        </FadeInChild>
                    ))}
                </div>

                <AnimatedSection className="text-center">
                    {/* CTA */}
                    <FadeInChild delay={0.3} className={`${spacingStyles.mt["2xl"]} inline-flex items-center`}>
                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.04 }}
                            whileTap={{ scale: 0.96 }}
                            transition={SPRING_SNAP}
                            className={`inline-flex items-center ${radiusStyles.full} ${colorStyles.bg.orangeAccent} ${colorStyles.text.white} ${textStyles.button}`}
                        >
                            <span className={`${spacingStyles.px.xl} ${spacingStyles.py.sm}`}>
                                View More Posts
                            </span>
                        </motion.a>

                        <motion.span
                            whileHover={{ scale: 1.15, rotate: 14 }}
                            whileTap={{ scale: 0.9 }}
                            transition={SPRING_SNAP}
                            className={`flex h-12 w-12 items-center justify-center ${radiusStyles.full} ${colorStyles.bg.orangeAccent}`}
                        >
                            <ArrowUpRight className={`h-5 w-5 ${colorStyles.text.white}`} />
                        </motion.span>
                    </FadeInChild>
                </AnimatedSection>
            </div>
        </section>
    );
};

export default BlogSection;