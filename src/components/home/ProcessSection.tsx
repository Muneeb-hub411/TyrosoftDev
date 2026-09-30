import React from "react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";

const processSteps = [
  {
    number: "01",
    title: "Discovery & Workflow Audit",
    desc: "We analyze your existing software systems, manual team bottlenecks, and operational pain points to map high-ROI opportunities.",
    deliverables: "Technical Audit & ROI Blueprint",
  },
  {
    number: "02",
    title: "Design & Architecture",
    desc: "We architect dark editorial UI systems and design robust data schemas, LLM agent chains, and API integrations with zero fluff.",
    deliverables: "Figma UI Specs & System Architecture",
  },
  {
    number: "03",
    title: "Agile Engineering & AI Build",
    desc: "Our senior engineers write clean, typed TypeScript and Python code, integrating automated testing, security, and edge deployments.",
    deliverables: "Production Codebase & CI/CD Pipelines",
  },
  {
    number: "04",
    title: "Launch, Scale & IP Handoff",
    desc: "We deploy to high-availability cloud infrastructure, train your internal team, and transfer 100% IP ownership directly to you.",
    deliverables: "Live Production & Full IP Transfer",
  },
];

export default function ProcessSection() {
  return (
    <Section id="process">
      <Container size="lg">
        {/* Section Header */}
        <div className="mb-16 max-w-2xl">
          <Reveal>
            <Badge variant="purple" className="mb-4">
              03 // HOW WE WORK
            </Badge>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-3xl sm:text-5xl font-bold font-display text-[#EDEAF5] tracking-tight">
              A 4-Step Process Built for <br />
              <span className="text-[#A78BFA]">Precision &amp; Speed</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-[#8C8799] text-base mt-4">
              No endless committee meetings or bloated sprint cycles. Transparent milestones, rapid execution, and direct senior communication.
            </p>
          </Reveal>
        </div>

        {/* Numbered Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step, idx) => (
            <Reveal key={step.number} delay={0.1 * (idx + 1)}>
              <div className="h-full rounded-2xl bg-[#0F0B16] border border-[rgba(167,139,250,0.12)] p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:border-[#8B5CF6]/40 hover:bg-[#15101F]">
                <div>
                  {/* Monospace Step Number */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-3xl font-extrabold text-[#6D28D9] group-hover:text-[#8B5CF6]">
                      {step.number}
                    </span>
                    <span className="text-xs font-mono text-[#8C8799]">PHASE {idx + 1}</span>
                  </div>

                  <h3 className="text-xl font-bold font-display text-[#EDEAF5] mb-3">
                    {step.title}
                  </h3>

                  <p className="text-sm text-[#8C8799] leading-relaxed mb-6">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-[rgba(167,139,250,0.08)]">
                  <div className="text-xs font-mono text-[#A78BFA]">
                    DELIVERABLE: <span className="text-[#EDEAF5]">{step.deliverables}</span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
