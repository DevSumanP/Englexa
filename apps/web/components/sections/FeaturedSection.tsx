"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import AnimatedSection, { FadeInChild } from "../ui/AnimatedSection";
import { textStyles, colorStyles, spacingStyles, radiusStyles } from "@/lib/token";

import blog1 from "@/public/images/blogs/blog1.jpg";
import blog2 from "@/public/images/blogs/blog2.jpg";
import blog3 from "@/public/images/blogs/blog3.jpg";
import studentGroup from "@/public/images/results/student-group.jpg";

const services = [
    {
        title: "Conversational English",
        description: "Live conversation practice with a focus on natural speaking and listening skills, based on topic lessons.",
        image: studentGroup
    },
    {
        title: "Business English",
        description: "Lessons for professional skills. Focus on improving fluency, vocabulary, and formal language use.",
        image: blog1
    },
    {
        title: "IELTS or Exam Preparation",
        description: "Practice tests, test-taking strategies, and focused sessions on areas that need improvement.",
        image: blog2
    },
    {
        title: "Grammar and Writing",
        description: "Structured grammar and writing lessons focusing on areas like verb tenses, articles, prepositions, etc.",
        image: blog3
    }
];

const FeaturedSection = () => {
    return (
        <section className={`${spacingStyles.py.section} ${colorStyles.bg.deepDark} ${spacingStyles.px.lg}`}>
            <div className="section-container">
                <AnimatedSection className="text-center mb-[64px]">
                    <FadeInChild className={`${spacingStyles.mb.md} inline-flex items-center gap-2 ${radiusStyles.full} bg-white/5 ${spacingStyles.px.sm} py-1.5 backdrop-blur-sm mx-auto`}>
                        <motion.span
                            className={`text-lg ${colorStyles.text.orangeAccent}`}
                            animate={{ rotate: [0, 15, -10, 0] }}
                            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", repeatDelay: 2 }}
                        >
                            ✦
                        </motion.span>
                        <span className={`${textStyles.label} !font-medium ${colorStyles.text.white}`}>
                            Online English Tutoring
                        </span>
                    </FadeInChild>

                    <FadeInChild delay={0.1}>
                        <h2 className={`${textStyles.heading2} ${colorStyles.text.white} !text-[3rem] max-w-2xl mx-auto`}>
                            Tailored English Lessons for Every Learner
                        </h2>
                    </FadeInChild>
                </AnimatedSection>

                <div className="flex flex-col">
                    {services.map((service, i) => (
                        <FadeInChild key={service.title} delay={0.1 * i + 0.2}>
                            <motion.div
                                initial="initial"
                                whileHover="hover"
                                className="group relative py-1 border-b border-white/10 cursor-pointer"
                            >
                                {/* Hover Background Reveal */}
                                <motion.div
                                    variants={{
                                        initial: { opacity: 0, scaleY: 0.8 },
                                        hover: { opacity: 1, scaleY: 1 }
                                    }}
                                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                                    className={`absolute inset-0 ${colorStyles.bg.orangeAccent} ${radiusStyles.pill} z-0`}
                                />

                                {/* Row Content Area */}
                                <div className="relative z-20 flex flex-col md:flex-row md:items-center justify-between py-[40px] px-[32px]">
                                    <div className="flex-1">
                                        <h3 className={`${textStyles.heading3} ${colorStyles.text.white} !text-[1.75rem] transition-colors duration-300`}>
                                            {service.title}
                                        </h3>
                                    </div>

                                    {/* Central Floating Image (Revealed on Hover) */}
                                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-30">
                                        <motion.div
                                            variants={{
                                                initial: { opacity: 0, scale: 0.5, rotate: 0, y: 20 },
                                                hover: { opacity: 1, scale: 1, rotate: -4, y: 0 }
                                            }}
                                            transition={{ duration: 0.4, ease: "backOut" }}
                                            className="w-[232px] h-[168px]  max-w-[232px] relative overflow-hidden rounded-[20px] shadow-2xl "
                                        >
                                            <Image
                                                src={service.image}
                                                alt={service.title}
                                                fill
                                                className="object-cover"
                                            />
                                        </motion.div>
                                    </div>

                                    <div className="flex items-center gap-8 mt-4 md:mt-0">
                                        <p className={`${textStyles.bodyMedium} !text-[1rem] text-white/50 group-hover:text-white transition-colors duration-300 leading-relaxed max-w-[400px] text-right`}>
                                            {service.description}
                                        </p>

                                        <motion.div
                                            variants={{
                                                initial: { backgroundColor: "rgba(255, 255, 255, 0.1)", color: "#fff", scale: 1 },
                                                hover: { backgroundColor: "#fff", color: "var(--color-orange-accent)", scale: 1.1 }
                                            }}
                                            className={`w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-full transition-all`}
                                        >
                                            <ArrowUpRight className="w-5 h-5" />
                                        </motion.div>
                                    </div>
                                </div>
                            </motion.div>
                        </FadeInChild>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedSection;
