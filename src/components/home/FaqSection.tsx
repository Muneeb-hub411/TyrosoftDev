import React from "react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { Accordion } from "@/components/ui/Accordion";
import { Reveal } from "@/components/ui/Reveal";
import { faqsData } from "@/data/faqs";

export default function FaqSection() {
  return (
    <Section id="faq">
      <Container size="md">
        {/* Section Header */}
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <Reveal>
            <Badge variant="purple" className="mb-4">
              07 // FREQUENTLY ASKED QUESTIONS
            </Badge>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-3xl sm:text-5xl font-bold font-display text-[#EDEAF5] tracking-tight">
              Everything You Need to Know <br />
              <span className="text-[#A78BFA]">Before Booking</span>
            </h2>
          </Reveal>
        </div>

        {/* Accordion List */}
        <Reveal delay={0.2}>
          <Accordion items={faqsData} />
        </Reveal>
      </Container>
    </Section>
  );
}
