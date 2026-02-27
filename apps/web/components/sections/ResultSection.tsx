"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import type { StaticImageData } from "next/image";

import { ArrowUpRight } from "lucide-react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { textStyles, colorStyles, spacingStyles, radiusStyles } from "@/lib/token";
import tutorExperience from "@/public/images/results/tutor-experience.jpg";

import mapPeople from "@/public/images/results/map_people.jpg";
import studentsGroup from "@/public/images/results/student-group.jpg";
import review1 from "@/public/images/students/student1.jpg";
import review2 from "@/public/images/students/student2.jpg";
import review3 from "@/public/images/students/student3.jpg";
import review4 from "@/public/images/students/student4.jpg";
import AnimatedSection, { FadeInChild } from "../ui/AnimatedSection";

// ─── Easing & spring presets ─────────────────────────────────────────────────

// const SPRING_SOFT = { type: "spring", stiffness: 180, damping: 26 } as const;
const SPRING_SNAP = { type: "spring", stiffness: 340, damping: 28 } as const;

// ─── AnimatedNumber ──────────────────────────────────────────────────────────

const AnimatedNumber = ({ target, suffix = "" }: { target: number; suffix?: string }) => {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLDivElement>(null);
    const [started, setStarted] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting && !started) setStarted(true); },
            { threshold: 0.5 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [started]);

    useEffect(() => {
        if (!started) return;
        const duration = 1600;
        const startTime = performance.now();

        const tick = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(2, -10 * progress);
            const current = eased * target;

            if (progress < 1) {
                setCount(Number.isInteger(target) ? Math.floor(current) : Math.round(current * 10) / 10);
                requestAnimationFrame(tick);
            } else {
                setCount(target);
            }
        };

        requestAnimationFrame(tick);
    }, [started, target]);

    return (
        <div ref={ref} className={`${textStyles.heading1} !text-[3rem] tabular-nums`}>
            {Number.isInteger(target) ? Math.floor(count) : count.toFixed(1)}
            {suffix}
        </div>
    );
};

// ─── Data ────────────────────────────────────────────────────────────────────

const stats = [
    { value: 7.5, suffix: "+", icon: '/images/results/grade.svg', label: "Students average grade on speaking IELTS/TOEFL." },
    { value: 4.8, suffix: "/5", icon: '/images/results/rating.svg', label: "Rating based on Google Reviews from my students." },
    { value: 92, suffix: "%", icon: '/images/results/stats.svg', label: "Learners report feeling more fluent after 10 lessons." },
    { value: 5, suffix: "K+", icon: '/images/results/professional.svg', label: "Professional, interactive, and tailored lessons delivered." },
    { value: 8, suffix: "+", icon: '/images/results/grade.svg', label: "Years of professional English teaching." },
];

const reviewAvatars = [review1, review2, review3, review4];

// ─── StatCard ────────────────────────────────────────────────────────────────

const StatCard = ({ stat, delay, className }: { stat: typeof stats[0]; delay: number; className?: string }) => (
    <FadeInChild
        delay={delay}
        className={`rounded-[24px] ${colorStyles.bg.dark} ${spacingStyles.p.lg} cursor-default ${className ?? ""}`}
    >
        <div className="flex flex-row justify-between items-center">
            <AnimatedNumber target={stat.value} suffix={stat.suffix} />
            <motion.div
                initial={{ rotate: -15, scale: 0.7, opacity: 0 }}
                whileInView={{ rotate: 0, scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ ...SPRING_SNAP, delay: delay + 0.2 }}
            >
                <Image src={stat.icon} alt={stat.label} width={38} height={38} className={`h-[38px] w-[38px] mt-0.5 shrink-0`} />
            </motion.div>
        </div>
        <div className={`mt-3 flex items-start gap-[16]`}>
            <p className={`${textStyles.bodyMedium}`}>{stat.label}</p>
        </div>
    </FadeInChild>
);

// ─── ResultsSection ──────────────────────────────────────────────────────────

const ResultsSection = () => {
    return (
        <section className={`${spacingStyles.py.section} ${spacingStyles.px.lg} ${colorStyles.bg.deepDark}`} id="results">
            <div className="section-container mx-[16px]">

                {/* Header */}
                <AnimatedSection className={`text-center ${spacingStyles.mb.xl} gap-[20px]`}>
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
                            Results
                        </span>
                    </FadeInChild>

                    <FadeInChild delay={0.1}>
                        <h2 className={`${textStyles.heading2} ${colorStyles.text.white} !text-[3rem]`}>
                            Helping Every Learner <br /> Achieve Their Goals
                        </h2>
                    </FadeInChild>
                    <FadeInChild delay={0.2}>
                        <p className={`${textStyles.bodyLarge} ${colorStyles.text.lightGrey} mt-[24px]`}>
                            Real progress, real outcomes — because your growth matters.
                        </p>
                    </FadeInChild>
                </AnimatedSection>


                {/* Stats grid */}
                <div className={`grid ${spacingStyles.gap.lg} md:grid-cols-2 lg:grid-cols-3`}>
                    {/* Large image card spanning 2 rows */}
                    <FadeInChild
                        delay={0.1}
                        className={`row-span-2 ${radiusStyles.card} object-contain overflow-hidden relative min-h-[320px] bg-gradient-to-t from-[#0f1226]/80 via-[#0f1226]/40 to-transparent pointer-events-none`}
                    >
                        {/* Inner parallax */}
                        <InnerParallaxImage src={tutorExperience} alt="Tutor" />

                        {/* Stat Card */}
                        <div className="absolute inset-x-4 bottom-4 pointer-events-none">
                            <div className="flex justify-between items-center">
                                <AnimatedNumber
                                    target={stats[4].value}
                                    suffix={stats[4].suffix}
                                />
                            </div>

                            <div className="mt-3">
                                <p className={`${textStyles.bodyMedium} text-white/80`}>
                                    {stats[4].label}
                                </p>
                            </div>
                        </div>
                    </FadeInChild>


                    {stats.slice(0, 2).map((stat, i) => (
                        <StatCard key={i} stat={stat} delay={0.1 + i * 0.1} />
                    ))}
                    {stats.slice(2, 4).map((stat, i) => (
                        <StatCard key={i} stat={stat} delay={0.3 + i * 0.1} />
                    ))}
                </div>


                {/* Map + students grid */}
                <div className={`${spacingStyles.mt.lg} grid ${spacingStyles.gap.lg} md:grid-cols-2`}>
                    {/* Map Card */}
                    <FadeInChild delay={0.1} className={`relative ${colorStyles.bg.dark} rounded-2xl p-6 flex flex-col`}>
                        {/* Map Image */}
                        <div className="relative rounded-xl bg-white overflow-hidden flex-1">
                            <Image
                                src={mapPeople.src}
                                alt="Students worldwide"
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Bottom Content */}
                        <div className="mt-6">
                            {/* Stat + avatars */}
                            <div className="flex items-center justify-between w-full">
                                <AnimatedNumber target={500} suffix="+" />
                                <div className="flex -space-x-2">
                                    {reviewAvatars.map((src, i) => (
                                        <Image
                                            key={i}
                                            src={typeof src === "string" ? src : src.src}
                                            alt={`Student ${i + 1}`}
                                            width={38}
                                            height={38}
                                            className="relative h-[38px] w-[38px] rounded-full border-2 border-white object-cover"
                                            style={{ zIndex: reviewAvatars.length - i }}
                                        />
                                    ))}
                                </div>
                            </div>
                            <p className={`${textStyles.bodyMedium} mt-4 text-white/80`}>
                                Learners worldwide trust my lessons to build English confidence.
                            </p>
                        </div>
                    </FadeInChild>

                    {/* Students Card */}
                    <FadeInChild
                        delay={0.2}
                        className={`relative overflow-hidden rounded-2xl flex flex-col`}
                    >
                        {/* Image */}
                        <InnerParallaxImage src={studentsGroup} alt="Students" />

                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0f1226]/80 via-[#0f1226]/40 to-transparent pointer-events-none" />

                        {/* Stat Card */}
                        <div className="absolute inset-x-4 bottom-4 z-10">
                            <div className="flex justify-between items-center">
                                <AnimatedNumber target={stats[4].value} suffix={stats[4].suffix} />
                            </div>
                            <div className="mt-3">
                                <p className={`${textStyles.bodyMedium} text-white/80`}>
                                    {stats[4].label}
                                </p>
                            </div>
                        </div>
                    </FadeInChild>
                </div>

                {/* CTA Button */}
                <FadeInChild
                    delay={0.4}
                    className={`${spacingStyles.mt["2xl"]} w-full flex justify-center items-center`}
                >
                    <motion.a
                        href="#contact"
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.96 }}
                        transition={SPRING_SNAP}
                        className={`inline-flex items-center ${radiusStyles.full} ${colorStyles.bg.orangeAccent} ${colorStyles.text.white} ${textStyles.button}`}
                    >
                        <span className={`${spacingStyles.px.xl} ${spacingStyles.py.sm}`}>
                            Join My Next Lesson
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

            </div >
        </section >
    );
};

// ─── Inner parallax image (for the tall stat card) ───────────────────────────

const InnerParallaxImage = ({ src, alt }: { src: string | StaticImageData; alt: string }) => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
    const yRaw = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);
    const y = useSpring(yRaw, { stiffness: 60, damping: 20 });

    return (
        <div ref={ref} className={`absolute inset-0 overflow-hidden ${radiusStyles.card}`}>
            <Image
                src={typeof src === "string" ? src : src.src}
                alt={alt}
                fill
                className="h-full w-full object-cover scale-110 origin-center"
            />
        </div>
    );
};

export default ResultsSection;
