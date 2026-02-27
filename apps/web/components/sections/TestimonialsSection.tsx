"use client";

import { useState } from "react";
import Image from "next/image";
import quote from "@/public/images/testimonial/quote.svg";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection, { FadeInChild } from "../ui/AnimatedSection";
import { textStyles, colorStyles, spacingStyles, radiusStyles } from "@/lib/token";

import student1 from "@/public/images/students/student1.jpg";
import student2 from "@/public/images/students/student2.jpg";
import student3 from "@/public/images/students/student3.jpg";
import student4 from "@/public/images/students/student4.jpg";

const testimonials = [
    {
        image: student1,
        title: "From Hesitant to Fluent in 3 Months",
        quote: "At first, I felt nervous every time I had to speak English. My tutor helped me relax, build confidence, and focus on pronunciation and fluency through interactive sessions. The lessons were fun and challenging at the same time — a perfect balance. After just three months, I’m no longer afraid of speaking. I can hold full conversations, express opinions, and even joke in English. My coworkers noticed the change — and so did I.",
        name: "Maria Valova",
        country: "Czech Republic"
    },
    {
        image: student2,
        title: "English Helped Me Grow My Career",
        quote: "English used to hold me back from getting international clients. My tutor focused on professional communication — writing proposals, giving presentations, and speaking naturally in meetings. After a few months, I closed my first deal entirely in English! I now use English every day with confidence, and it’s opened new doors for my career. These lessons were one of the best investments I’ve made.",
        name: "Minseo L.",
        country: "South Korea"
    },
    {
        image: student3,
        title: "Ready for University Abroad",
        quote: "Moving abroad for university was my dream, but I wasn’t confident with academic English. My tutor guided me through essay writing, academic vocabulary, and presentation skills. The lessons felt like real university practice — clear, structured, and challenging in the best way. Now I can write and present confidently in English. I feel completely ready for my studies overseas.",
        name: "Arturo R.",
        country: "Mexico"
    },
    {
        image: student4,
        title: "I Can Finally Speak Naturally with Native Speakers!",
        quote: "I’ve studied English for years but never felt comfortable using it in real conversations. During my lessons, I learned how to think in English and stop worrying about mistakes. My tutor’s patient corrections and natural conversation style helped me improve my pronunciation and rhythm. English finally feels like part of me, not just a school subject. Thanks Jessica. Highly recommend, 5 out of 5!",
        name: "Julia K.",
        country: "Poland"
    },
];

// Slide + blur transition for the carousel
const slideVariants = {
    enter: (d: number) => ({ x: d > 0 ? 60 : -60, opacity: 0, filter: "blur(6px)" }),
    center: { x: 0, opacity: 1, filter: "blur(0px)" },
    exit: (d: number) => ({ x: d > 0 ? -60 : 60, opacity: 0, filter: "blur(6px)" }),
};

// const transition = { duration: 0.55, ease: [0.16, 1, 0.3, 1] };

const TestimonialsSection = () => {
    const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState(1);

    const prev = () => { setDirection(-1); setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1)); };
    const next = () => { setDirection(1); setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1)); };

    const t = testimonials[current];

    return (
        <section className={`${spacingStyles.py.section} ${spacingStyles.px.lg} ${colorStyles.bg.deepDark}`} id="testimonials">
            <div className="section-container mx-[16px]">
                <AnimatedSection className="mb-12 w-full flex flex-row items-end justify-between gap-8">
                    <div className="text-left">
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
                                Testimonials
                            </span>
                        </FadeInChild>

                        <FadeInChild delay={0.1}>
                            <h2 className={`${textStyles.heading2} ${colorStyles.text.white}`}>
                                What My Students Say
                            </h2>
                        </FadeInChild>
                    </div>

                    {/* Nav buttons */}
                    <div className="flex gap-4 mb-2">
                        <motion.button
                            onClick={prev}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className={`flex h-14 w-14 items-center justify-center rounded-full border border-white/20 hover:bg-white/10 transition-colors`}
                            aria-label="Previous testimonial"
                        >
                            <ArrowLeft className={`h-6 w-6 ${colorStyles.text.white}`} />
                        </motion.button>
                        <motion.button
                            onClick={next}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className={`flex h-14 w-14 items-center justify-center rounded-full border border-white/20  hover:bg-white/10 transition-colors`}
                            aria-label="Next testimonial"
                        >
                            <ArrowRight className={`h-6 w-6 ${colorStyles.text.white}`} />
                        </motion.button>
                    </div>
                </AnimatedSection>

                <div className="flex flex-row gap-6 items-center w-full mx-auto overflow-hidden">
                    {/* Image */}
                    <div className="relative aspect-[3/4] rounded-[24px] w-full max-w-[368px] h-[480px] overflow-hidden flex-shrink-0">
                        <AnimatePresence mode="wait" custom={direction}>
                            <motion.div
                                key={current}
                                custom={direction}
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                className="absolute inset-0 w-full h-full"
                            >
                                <Image src={t.image} alt={t.name} fill className="object-cover" />
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Content */}
                    <div className="flex-1 h-[480px] relative overflow-hidden">
                        <AnimatePresence mode="wait" custom={direction}>
                            <motion.div
                                key={current}
                                custom={direction}
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                className={`absolute inset-0 w-full h-full rounded-[24px] ${colorStyles.bg.dark} p-8 flex flex-col justify-between`}
                            >
                                <div>
                                    <div className="flex gap-1 mb-6">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className="h-5 w-5 fill-[var(--color-orange-accent)] text-[var(--color-orange-accent)]"
                                            />
                                        ))}
                                    </div>

                                    <h3 className={`${textStyles.heading3} ${colorStyles.text.white} mb-4`}>
                                        {t.title}
                                    </h3>

                                    <blockquote
                                        className={`${textStyles.bodyLarge} ${colorStyles.text.lightGrey} leading-relaxed`}
                                    >
                                        &quot;{t.quote}&quot;
                                    </blockquote>
                                </div>

                                {/* Bottom Section */}
                                <div className="flex w-full items-end justify-between">
                                    <div className="flex flex-col gap-[8px]">
                                        <p className={`${textStyles.heading4} ${colorStyles.text.white}`}>
                                            {t.name}
                                        </p>
                                        <p className={`${textStyles.label} ${colorStyles.text.lightGrey}`}>
                                            {t.country}
                                        </p>
                                    </div>

                                    <Image
                                        src={quote}
                                        alt="quote"
                                        width={53}
                                        height={41}
                                        className="opacity-20"
                                    />
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>


            </div>
        </section>
    );
};

export default TestimonialsSection;
