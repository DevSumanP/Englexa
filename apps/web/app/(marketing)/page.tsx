// 🏠 Homepage — assemble sections here as you build them

import AboutSection from "@/components/sections/AboutSection";
import BlogSection from "@/components/sections/BlogSection";
import CTASection from "@/components/sections/CTASection";
import HeroSection from "@/components/sections/HeroSection";
import OurWorksSection from "@/components/sections/OurWorksSection";
import ResourceSection from "@/components/sections/ResourceSection";
import ResultsSection from "@/components/sections/ResultSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FeaturedSection from "@/components/sections/FeaturedSection";
import Footer from "@/components/layout/Footer";
// import Navbar from "@/components/layout/Navbar";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <FeaturedSection />
      <ResultsSection />
      <AboutSection />
      <OurWorksSection />
      <TestimonialsSection />
      <CTASection />
      <BlogSection />
      <ResourceSection />
      <Footer />
    </main>
  )
}

