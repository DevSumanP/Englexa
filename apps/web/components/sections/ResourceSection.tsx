"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import AnimatedSection, { FadeInChild } from "../ui/AnimatedSection";
import { textStyles, colorStyles, spacingStyles, radiusStyles } from "@/lib/token";
import resourcesImg from "@/public/images/resources/support.jpg";

const ResourceSection = () => {
    return (
        <section className={`${spacingStyles.py.section} ${colorStyles.bg.deepDark} ${spacingStyles.px.lg}`} id="resources">
            <div className={`section-container ${colorStyles.bg.dark} rounded-[12px] py-[24px] pl-[40px] pr-[24px]`}>
                <div className="grid gap-[48px] md:grid-cols-2 items-center">

                    {/* Content */}
                    <AnimatedSection className="flex flex-col items-start text-left">
                        <FadeInChild
                            className={`${spacingStyles.mb.md} inline-flex items-center gap-2 ${radiusStyles.full} bg-white/5 ${spacingStyles.px.sm} py-1.5 backdrop-blur-sm`}
                        >
                            <motion.span
                                className={`text-lg ${colorStyles.text.orangeAccent}`}
                                animate={{ rotate: [0, 15, -10, 0] }}
                                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", repeatDelay: 2 }}
                            >
                                ✦
                            </motion.span>
                            <span className={`${textStyles.label} !font-medium ${colorStyles.text.lightGrey}`}>
                                Resources
                            </span>
                        </FadeInChild>

                        <FadeInChild delay={0.1}>
                            <h2 className={`${textStyles.heading2} ${colorStyles.text.white} !text-[3rem] mb-6`}>
                                Free Tools to Support Your English Journey
                            </h2>
                        </FadeInChild>

                        <FadeInChild delay={0.2}>
                            <p className={`${textStyles.bodyLarge} ${colorStyles.text.lightGrey} mb-8`}>
                                Explore free PDF books, videos, and helpful links designed to support your English learning. Practice anywhere, review key lessons, and keep improving at your own pace.
                            </p>
                        </FadeInChild>

                        {/* CTA */}
                        <FadeInChild delay={0.3} className={`${spacingStyles.mt["2xl"]} inline-flex items-center`}>
                            <motion.a
                                href="#contact"
                                whileHover={{ scale: 1.04 }}
                                whileTap={{ scale: 0.96 }}
                                className={`inline-flex items-center ${radiusStyles.full} ${colorStyles.bg.orangeAccent} ${colorStyles.text.white} ${textStyles.button}`}
                            >
                                <span className={`${spacingStyles.px.xl} ${spacingStyles.py.sm}`}>
                                    Explore More Resources
                                </span>
                            </motion.a>

                            <motion.span
                                whileHover={{ scale: 1.15, rotate: 14 }}
                                whileTap={{ scale: 0.9 }}
                                className={`flex h-12 w-12 items-center justify-center ${radiusStyles.full} ${colorStyles.bg.orangeAccent}`}
                            >
                                <ArrowUpRight className={`h-5 w-5 ${colorStyles.text.white}`} />
                            </motion.span>
                        </FadeInChild>
                    </AnimatedSection>

                    {/* Image */}
                    <FadeInChild delay={0.2} className="relative">
                        <div className={`relative aspect-[4/3] overflow-hidden rounded-[12px] border border-black/5`}>
                            <Image
                                src={resourcesImg}
                                alt="Learning resources"
                                fill
                                className="object-cover transition-transform duration-700 hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent pointer-events-none" />
                        </div>

                        {/* Decorative element */}
                        <div className={`absolute -bottom-6 -right-6 w-32 h-32 ${colorStyles.bg.orangeAccent} opacity-10 blur-3xl -z-10`} />
                    </FadeInChild>

                </div>
            </div>
        </section>
    );
};

export default ResourceSection;
