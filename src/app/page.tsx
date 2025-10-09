"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import CalculatorSection from "@/components/CalculatorSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import CategoriesSection from "@/components/CategoriesSection";
import FAQSection from "@/components/FAQSection";
import TrustSection from "@/components/TrustSection";
import FinalCTASection from "@/components/FinalCTASection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        <HeroSection />
        <ProblemSection />

        {/* Div decorativo sopra CalculatorSection */}
        <div className="h-48 bg-gradient-to-b from-[#8B4FA3]/10 via-transparent to-white" />

        <CalculatorSection />
        <HowItWorksSection />
        <CategoriesSection />
        <FAQSection />
        <TrustSection />
        <FinalCTASection />
      </main>
    </>
  );
}
