"use client";

import Image from "next/image";
import { ArrowUpRight, Star } from "lucide-react";
import background from "@/public/images/background.svg";
import tutorHero from "@/public/images/hero/tutor-hero.jpg";
import play from "@/public/icons/play.png";
import messageBox from "@/public/images/hero/messageBox.svg";
import student1 from "@/public/images/students/student1.jpg";
import student2 from "@/public/images/students/student2.jpg";
import student3 from "@/public/images/students/student3.jpg";
import student4 from "@/public/images/students/student4.jpg";
import { textStyles, colorStyles, spacingStyles, radiusStyles } from "@/lib/token";
import Navbar from "../layout/Navbar";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import { useRef, useState } from "react";
import AnimatedSection, { FadeInChild } from "../ui/AnimatedSection";
import VideoModal from "../ui/VideoModal";

// ─── Easing presets ──────────────────────────────────────────────────────────

// const EXPO_OUT = [0.16, 1, 0.3, 1] as const;
const SPRING_SOFT = { type: "spring", stiffness: 220, damping: 28 } as const;
const SPRING_SNAP = { type: "spring", stiffness: 380, damping: 30 } as const;

// ─── Data ────────────────────────────────────────────────────────────────────

const partners = [
  "/images/partners/logo1.svg",
  "/images/partners/logo2.svg",
  "/images/partners/logo3.svg",
  "/images/partners/logo4.svg",
  "/images/partners/logo5.svg",
  "/images/partners/logo6.svg",
  "/images/partners/logo7.svg",
  "/images/partners/logo8.svg",
];

const students = [student1, student2, student3, student4];

// ─── Component ───────────────────────────────────────────────────────────────

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  // ── Parallax on hero background ──
  const { scrollYProgress: heroProg } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const bgYRaw = useTransform(heroProg, [0, 1], ["0%", "22%"]);
  const bgY = useSpring(bgYRaw, { stiffness: 60, damping: 20, mass: 0.8 });
  const bgOpacity = useTransform(heroProg, [0, 0.75], [1, 0.5]);

  // ── Scroll-reveal scale on video section ──
  const { scrollYProgress: vidProg } = useScroll({
    target: videoRef,
    offset: ["start end", "center center"],
  });
  const vidScale = useTransform(vidProg, [0, 1], [0.93, 1]);
  const vidScaleSpring = useSpring(vidScale, { stiffness: 80, damping: 24 });

  return (
    <section className={`${colorStyles.bg.deepDark}`} id="home">

      {/* ══ Above-the-fold ════════════════════════════════════════════ */}
      <div
        ref={heroRef}
        className="relative flex flex-col pt-[200px] pb-[80px] text-center overflow-hidden"
      >

        {/* Background — parallax */}
        <motion.div
          className="absolute inset-0 z-0 pointer-events-none select-none"
          style={{ y: bgY, opacity: bgOpacity }}
        >
          <Image src={background} alt="" fill priority className="object-cover" />
        </motion.div>

        {/* Navbar */}
        <div
          className={`absolute top-0 left-0 right-0 ${spacingStyles.px.xl} ${spacingStyles.py.lg} z-20`}
        >
          <Navbar />
        </div>

        {/* ── Hero content ── */}
        <AnimatedSection className="relative z-10 flex flex-col items-center container mx-auto px-6">

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
              Online English Tutoring
            </span>
          </FadeInChild>

          {/* Heading */}
          <FadeInChild delay={0.1}>
            <h1 className={`${textStyles.heading1} ${colorStyles.text.white} max-w-4xl text-center !text-[4rem] leading-tight`}>
              The English
              {/* Tutor image chip */}
              <span className="inline-flex items-baseline mx-2 align-middle">
                <Image
                  src={tutorHero}
                  alt="English tutor Jessica"
                  width={112}
                  height={64}
                  className={`${radiusStyles.card} object-cover`}
                />
              </span>
              Tutor <br />
              Who Builds Your Confidence
            </h1>
          </FadeInChild>

          {/* Subtitle */}
          <FadeInChild delay={0.2}>
            <p className={`${textStyles.bodyLarge} ${spacingStyles.mt.lg} max-w-xl text-center`}>
              Personalized online English tutoring designed for your goals.
            </p>
          </FadeInChild>

          {/* CTA */}
          <FadeInChild delay={0.3} className={`${spacingStyles.mt["2xl"]} flex items-center`}>
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

          {/* Social proof */}
          <FadeInChild delay={0.4} className={`${spacingStyles.mt["2xl"]} flex items-center justify-center gap-4`}>
            {/* Avatars */}
            <div className="flex -space-x-3">
              {students.map((src, i) => (
                <div key={i}>
                  <Image
                    src={src}
                    alt={`Student ${i + 1}`}
                    width={56}
                    height={56}
                    className={`h-[56px] w-[56px] ${radiusStyles.full} border-[2.5px] ${colorStyles.border.white} object-cover`}
                  />
                </div>
              ))}
            </div>

            {/* Stars + rating */}
            <div className="text-left">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-[var(--color-orange-accent)] text-[var(--color-orange-accent)]" />
                ))}
                <span className={`ml-1 ${textStyles.bodyMedium} ${colorStyles.text.white}`}>
                  4.8/5
                </span>
              </div>
              <p className={`${textStyles.bodySmall} ${colorStyles.text.lightGrey}`}>
                500+ Satisfied Students
              </p>
            </div>
          </FadeInChild>

        </AnimatedSection>
      </div>

      {/* ══ Video ═════════════════════════════════════════════════════ */}
      <AnimatedSection
        className={`container mx-auto ${spacingStyles.px.lg} mt-[40px] relative z-10`}
      >
        <motion.div
          ref={videoRef}
          style={{ scale: vidScaleSpring }}
          className="relative"
        >
          <Image
            src="https://framerusercontent.com/images/U2J9FnLf7wcsksRIVla3fPfOmVY.jpg"
            alt="Video thumbnail"
            width={1200}
            height={648}
            className={`w-full h-[648px] ${radiusStyles.pill} object-cover`}
          />

          {/* Play button */}
          <motion.button
            className="absolute inset-0 flex items-center justify-center"
            aria-label="Play Video"
            onClick={() => setIsVideoOpen(true)}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.94 }}
            transition={SPRING_SNAP}
          >
            <span className="relative flex items-center justify-center">
              <Image src={play} alt="Play" className="w-[140px] h-[140px] fill-white" />
            </span>
          </motion.button>

          {/* Message Box */}
          <div className="absolute top-[-57px] left-[240px] w-[226px] h-[140px]">
            <motion.div
              className="relative w-full h-full"
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 3.8,
                repeat: Infinity,
                ease: "easeInOut",
                repeatType: "mirror",
              }}
            >
              <Image src={messageBox} alt="" fill className="object-contain" />
              <div className="absolute inset-0 flex items-center justify-center pb-6 px-4">
                <p className={`${textStyles.bodyLarge} ${colorStyles.text.deepDark} text-left break-words`}>
                  Hello, there! <br />
                  I&apos;m Jessica, your personal English tutor!
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </AnimatedSection>

      {/* ══ Partners heading ══════════════════════════════════════════ */}
      <AnimatedSection className="mt-[64px] mb-[32px] text-center">
        <p className={`${textStyles.heading3Extra} ${colorStyles.text.white}`}>
          Partners with
        </p>
      </AnimatedSection>

      {/* ══ Partners marquee ══════════════════════════════════════════ */}
      <div className="w-full pb-[80px] relative">
        <div className="absolute inset-y-0 left-0 w-24 z-10 pointer-events-none"
          style={{ background: `linear-gradient(to right, var(--color-deep-dark), transparent)` }}
        />
        <div className="absolute inset-y-0 right-0 w-24 z-10 pointer-events-none"
          style={{ background: `linear-gradient(to left, var(--color-deep-dark), transparent)` }}
        />

        <div className="overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...partners, ...partners].map((src, i) => (
              <motion.div
                key={i}
                whileHover={{ opacity: 1, scale: 1.12, y: -3 }}
                transition={{ ...SPRING_SOFT, duration: undefined }}
                className={`mx-8 flex items-center justify-center min-w-[120px] ${spacingStyles.p.xs}`}
              >
                <Image
                  src={src}
                  alt=""
                  width={100}
                  height={40}
                  className="h-[40px] w-auto opacity-40 transition-opacity duration-300 hover:opacity-100"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Video Modal ────────────────────────────────────────────── */}
      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        videoUrl="https://framerusercontent.com/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4"
      />
    </section>
  );
};

export default HeroSection;
