"use client";

import { motion } from "framer-motion";

import Image from "next/image";
import type { StaticImageData } from "next/image";
import Users from "@/public/images/works/work_icon1.svg";
import Globe from "@/public/images/works/work_icon2.svg";
import Shield from "@/public/images/works/work_icon3.svg";
import Zap from "@/public/images/works/work_icon4.svg";
import Clock from "@/public/images/works/work_icon5.svg";
import Feedback from "@/public/images/works/work_icon6.svg";
import { textStyles, colorStyles, spacingStyles, radiusStyles } from "@/lib/token";
import AnimatedSection, { FadeInChild } from "../ui/AnimatedSection";

// ─── Easing & spring presets ─────────────────────────────────────────────────

const SPRING_SOFT = { type: "spring", stiffness: 180, damping: 26 } as const;
const EXPO_OUT = [0.16, 1, 0.3, 1] as const;

// ─── Data ────────────────────────────────────────────────────────────────────

const features: { icon: StaticImageData; title: string; description: string }[] = [
    { icon: Users, title: "Student-Centered", description: "Lessons carefully tailored to meet your individual needs and learning goals." },
    { icon: Globe, title: "Practical & Real-Life", description: "Focus on speaking, listening, and writing that you'll actually use." },
    { icon: Shield, title: "Confidence First", description: "Build self-assurance and confidence while improving your English fluency." },
    { icon: Zap, title: "Interactive Lessons", description: "Fun, engaging lessons with conversations and practical exercises." },
    { icon: Clock, title: "Flexible & Convenient", description: "Learn at your own schedule, anytime and anywhere that's convenient for you." },
    { icon: Feedback, title: "Supportive Feedback", description: "Patient, supportive guidance to help you improve quickly and confidently." },
];

// ─── FeatureCard ─────────────────────────────────────────────────────────────

const FeatureCard = ({ feature, delay }: { feature: typeof features[0]; delay: number }) => (
    <FadeInChild
        delay={delay}
        className={`group rounded-[24px] ${colorStyles.bg.dark} p-[24px] cursor-default`}
    >
        {/* Icon container */}
        <div className={`${spacingStyles.mb.md} flex h-12 w-12 items-center justify-center gap-[24px]`}>
            <motion.div
                whileHover={{ rotate: 12, scale: 1.1 }}
                transition={SPRING_SOFT}
            >
                <Image src={feature.icon.src} alt={feature.title} width={38} height={38} className="h-[38px] w-[38px]" />
            </motion.div>
        </div>

        <h3 className={`${textStyles.heading4} ${spacingStyles.mb.xs}`}>{feature.title}</h3>
        <p className={`${textStyles.bodyMedium}`}>{feature.description}</p>

        {/* Bottom accent line — reveals on hover */}
        <motion.div
            className={`${spacingStyles.mt.lg} h-[2px] rounded-full bg-[var(--color-orange-accent)] origin-left`}
            initial={{ scaleX: 0 }}
            whileHover={{ scaleX: 1 }}
            transition={{ duration: 0.35, ease: EXPO_OUT }}
        />
    </FadeInChild>
);

// ─── Component ───────────────────────────────────────────────────────────────

const WhyChooseMe = () => (
    <section
        className={`${spacingStyles.py.section} ${spacingStyles.px.lg} ${colorStyles.bg.deepDark}`}
        id="why-choose-me"
    >
        <div className="section-container mx-[16px]">

            {/* Header */}
            <AnimatedSection className={`text-center ${spacingStyles.mb["2xl"]}`}>
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
                        Why Choose Me
                    </span>
                </FadeInChild>

                <FadeInChild delay={0.1}>
                    <h2 className={`${textStyles.heading2} ${colorStyles.text.white}`}>
                        What Makes My Tutoring<br />Stand Out from Others
                    </h2>
                </FadeInChild>

                <FadeInChild delay={0.2}>
                    <p className={`${textStyles.bodyLarge} ${colorStyles.text.lightGrey} ${spacingStyles.mt.lg} max-w-2xl mx-auto`}>
                        Learn English in a way that fits your goals, pace, and learning style.
                    </p>
                </FadeInChild>
            </AnimatedSection>

            {/* Cards grid */}
            <div className={`grid ${spacingStyles.gap.lg} md:grid-cols-2 lg:grid-cols-3`}>
                {features.map((feature, i) => (
                    <FeatureCard key={feature.title} feature={feature} delay={0.1 + i * 0.08} />
                ))}
            </div>

        </div>
    </section>
);

export default WhyChooseMe;
