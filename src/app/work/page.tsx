import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import WorkGrid from "@/components/work/WorkGrid";

export const metadata: Metadata = {
  title: "Selected Work & Case Studies",
  description:
    "Explore Tyrosoft Dev's portfolio of web platforms, mobile applications, dark UI design systems, and AI automation engines.",
};

export default function WorkPage() {
  return (
    <div className="pt-24 pb-20">
      {/* Header */}
      <section className="py-16 sm:py-24 bg-grid-pattern bg-hero-glow border-b border-[rgba(167,139,250,0.12)]">
        <Container size="lg">
          <div className="max-w-3xl">
            <Reveal>
              <Badge variant="purple" className="mb-4">
                PORTFOLIO &amp; PROOF
              </Badge>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="text-4xl sm:text-6xl font-bold font-display text-[#EDEAF5] tracking-tight mb-6">
                Selected Work &amp; <br />
                <span className="text-[#A78BFA]">Case Studies</span>
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-lg text-[#8C8799] leading-relaxed">
                Real-world software engineering and AI workflow implementations built for ambitious startups and enterprise leaders.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Filterable Work Grid */}
      <Section className="py-16">
        <Container size="lg">
          <WorkGrid />
        </Container>
      </Section>
    </div>
  );
}
