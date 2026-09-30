import React from "react";
import HeroSection from "@/components/home/HeroSection";
import ServicesBento from "@/components/home/ServicesBento";
import AiSpotlight from "@/components/home/AiSpotlight";
import ProcessSection from "@/components/home/ProcessSection";
import PortfolioPreview from "@/components/home/PortfolioPreview";
import TechStackMarquee from "@/components/home/TechStackMarquee";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import FaqSection from "@/components/home/FaqSection";
import CtaSection from "@/components/home/CtaSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesBento />
      <AiSpotlight />
      <ProcessSection />
      <PortfolioPreview />
      <TechStackMarquee />
      <TestimonialsSection />
      <FaqSection />
      <CtaSection />
    </>
  );
}
