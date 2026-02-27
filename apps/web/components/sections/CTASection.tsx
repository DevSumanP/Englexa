"use client";

import Image from "next/image";
import cta1 from "@/public/images/cta/cta1.jpg";
import cta2 from "@/public/images/cta/cta2.jpg";
import cta3 from "@/public/images/cta/cta3.jpg";
import bgImage from "@/public/images/background.svg";
import { textStyles, colorStyles, spacingStyles, radiusStyles } from "@/lib/token";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection, { FadeInChild } from "../ui/AnimatedSection";

const SPRING_SNAP = { type: "spring", stiffness: 380, damping: 30 } as const;

const TutorChip = () => (
    <span
        className={`inline-block align-middle mx-3 overflow-hidden rounded-[12px]`}
        style={{ width: 112, height: 64, flexShrink: 0 }}
    >
        <Image
            src={cta1}
            alt="English tutor Jessica"
            width={112}
            height={64}
            className="w-full h-full object-cover"
        />
    </span>
);

const TutorChip2 = () => (
    <span
        className={`inline-block align-middle mx-3 overflow-hidden rounded-[12px]`}
        style={{ width: 112, height: 64, flexShrink: 0 }}
    >
        <Image
            src={cta2}
            alt="English tutor Jessica"
            width={112}
            height={64}
            className="w-full h-full object-cover"
        />
    </span>
);

const TutorChip3 = () => (
    <span
        className={`inline-block align-middle mx-3 overflow-hidden rounded-[12px]`}
        style={{ width: 112, height: 64, flexShrink: 0 }}
    >
        <Image
            src={cta3}
            alt="English tutor Jessica"
            width={112}
            height={64}
            className="w-full h-full object-cover"
        />
    </span>
);

// ─── Component ───────────────────────────────────────────────────────────────

const CTASection = () => {
    return (
        <section
            className={`relative overflow-hidden ${spacingStyles.py.section} ${spacingStyles.px.lg} flex items-center justify-center ${colorStyles.bg.deepDark}`}
            id="cta"
        >
            {/* Background image */}
            <Image
                src={bgImage}
                alt=""
                fill
                priority
                className="object-cover object-center"
            />

            {/* deepDark colour overlay — 80% opacity */}
            <div className={`absolute inset-0 ${colorStyles.bg.deepDark} opacity-10`} />

            {/* Content */}
            <AnimatedSection className="relative z-10 flex flex-col items-center">
                <FadeInChild
                    className={`${textStyles.heading2} ${colorStyles.text.white} block max-w-5xl text-center gap-[8px] !text-[3rem]`}
                >
                    Book Your <TutorChip /> First Free Lesson and
                    Discover How Personalised <TutorChip2 /> Tutoring
                    Can <TutorChip3 /> Transform Your Confidence.
                </FadeInChild>

                {/* CTA */}
                <FadeInChild delay={0.2} className={`${spacingStyles.mt["2xl"]} flex items-center`}>
                    <motion.a
                        href="#contact"
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.96 }}
                        transition={SPRING_SNAP}
                        className={`inline-flex items-center ${radiusStyles.full} ${colorStyles.bg.orangeAccent} ${colorStyles.text.white} ${textStyles.button}`}
                    >
                        <span className={`${spacingStyles.px.xl} ${spacingStyles.py.sm}`}>
                            Book a Free Trial Lesson
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
        </section>
    );
};

export default CTASection;
