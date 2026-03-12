"use client";

import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import aboutTutor from "@/public/images/about/about-tutor.jpg";
import Image from "next/image";
import award1 from "@/public/images/about/award1.svg";
import award2 from "@/public/images/about/award2.svg";
import award3 from "@/public/images/about/award3.svg";
import { textStyles, colorStyles, spacingStyles, radiusStyles } from "@/lib/token";
import AnimatedSection, { FadeInChild } from "../ui/AnimatedSection";

// ─── Easing & spring presets ─────────────────────────────────────────────────

const SPRING_SNAP = { type: "spring", stiffness: 340, damping: 28 } as const;

const awards = [
    award1,
    award2,
    award3,
];

// ─── Component ───────────────────────────────────────────────────────────────

const AboutSection = () => {
    const imgRef = useRef<HTMLDivElement>(null);

    // Subtle inner parallax on the portrait
    // const { scrollYProgress } = useScroll({
    //     target: imgRef,
    //     offset: ["start end", "end start"],
    // });
    /*
    const yRaw = useTransform(scrollYProgress, [0, 1], ["6%", "-6%"]);
    const y = useSpring(yRaw, { stiffness: 60, damping: 20 });
    */

    return (
        <section
            className={`${spacingStyles.py.section} ${spacingStyles.px.lg} ${colorStyles.bg.deepDark}`}
            id="about"
        >
            <div className={`section-container mx-[16px] ${colorStyles.bg.dark} p-[24px] rounded-[24px]`}>
                <div className={`grid ${spacingStyles.gap["2xl"]} md:grid-cols-2 items-center`}>

                    {/* ── Portrait ── */}
                    <AnimatedSection
                        className={`${radiusStyles.card} overflow-hidden h-[622px] relative`}
                    >
                        <div ref={imgRef} className="absolute inset-0 w-full h-full">
                            <Image
                                src={aboutTutor}
                                alt="Jessica Johnson - English Tutor"
                                fill
                                className="object-cover scale-110 origin-center rounded-[12px]"
                            />
                        </div>

                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0f1226]/60 via-[#0f1226]/10 to-transparent pointer-events-none" />

                        {/* Subtle shimmer overlay on hover */}
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 pointer-events-none"
                            whileHover={{ opacity: 1 }}
                            transition={{ duration: 0.4 }}
                        />
                    </AnimatedSection>

                    {/* ── Content ── */}
                    <div>
                        {/* Badge */}
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
                                About Me
                            </span>
                        </FadeInChild>

                        {/* Heading */}
                        <FadeInChild
                            delay={0.1}
                        >
                            <h2 className={`${textStyles.heading2} ${colorStyles.text.white} ${spacingStyles.mb.lg}`}>
                                Meet Your Tutor
                            </h2>
                        </FadeInChild>

                        {/* Body paragraphs */}
                        <FadeInChild
                            delay={0.2}
                        >
                            <p className={`${textStyles.bodyLarge}`}>
                                Hi, I’m Jessica Johnson — an experienced, certified English
                                tutor dedicated to helping students from all over the world
                                communicate with confidence. With over eight years of teaching
                                experience, I offer personalized and supportive lessons that lead
                                to real, lasting results.
                                Let’s make English your strength, not your struggle.
                            </p>
                        </FadeInChild>

                        {/* Italic quote */}
                        <FadeInChild
                            delay={0.3}
                        >
                            <p className={`${textStyles.bodyLarge} ${spacingStyles.mb.xl} ${spacingStyles.mt.lg}`}>
                                Let&apos;s make English your strength, not your struggle.
                            </p>
                        </FadeInChild>

                        {/* Certification badges */}
                        <FadeInChild
                            delay={0.4}
                            className={`flex items-center gap-[24px] ${spacingStyles.mb.xl}`}
                        >
                            {awards.map((cert, index) => (
                                <Image key={index} src={cert} alt="Award" width={100} height={56} />
                            ))}
                        </FadeInChild>

                        {/* CTA */}
                        <FadeInChild
                            delay={0.5}
                            className="flex items-center"
                        >
                            <motion.a
                                href="#contact"
                                whileHover={{ scale: 1.04 }}
                                whileTap={{ scale: 0.96 }}
                                transition={SPRING_SNAP}
                                className={`inline-flex items-center ${radiusStyles.full} ${colorStyles.bg.orangeAccent} ${colorStyles.text.white} ${textStyles.button}`}
                            >
                                <span className={`${spacingStyles.px.xl} ${spacingStyles.py.sm}`}>
                                    Learn More About Me
                                </span>
                            </motion.a>

                            {/* Icon */}
                            <motion.span
                                whileHover={{ scale: 1.15, rotate: 14 }}
                                whileTap={{ scale: 0.9 }}
                                transition={SPRING_SNAP}
                                className={`flex h-12 w-12 items-center justify-center ${radiusStyles.full} ${colorStyles.bg.orangeAccent}`}
                            >
                                <ArrowUpRight className={`h-5 w-5 ${colorStyles.text.white}`} />
                            </motion.span>
                        </FadeInChild>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutSection;
