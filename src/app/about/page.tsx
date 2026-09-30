import React from "react";
import type { Metadata } from "next";
import { Terminal, Shield, Zap, Code2, Users, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { companyConfig } from "@/data/company";

export const metadata: Metadata = {
  title: "About Us & Engineering Philosophy",
  description:
    "Learn about Tyrosoft Dev's mission: building high-impact custom software and AI automations with senior engineering and zero fluff.",
};

const values = [
  {
    icon: <Zap className="w-6 h-6 text-[#A78BFA]" />,
    title: "Senior Engineering, Zero Bloat",
    desc: "We don't assign junior devs to learn on your dime. Every project is architected and built directly by senior engineers.",
  },
  {
    icon: <Terminal className="w-6 h-6 text-[#A78BFA]" />,
    title: "AI Automation First",
    desc: "We look for opportunities to automate operational labor before writing a single line of manual boilerplate.",
  },
  {
    icon: <Shield className="w-6 h-6 text-[#A78BFA]" />,
    title: "100% IP & Code Ownership",
    desc: "You own all code, repositories, Figma designs, and AI prompts upon project completion. No proprietary lock-in.",
  },
  {
    icon: <Code2 className="w-6 h-6 text-[#A78BFA]" />,
    title: "Dark Editorial Aesthetic",
    desc: "We believe professional enterprise software should look drop-dead gorgeous, feel responsive, and amaze users.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-24 pb-20">
      {/* Header */}
      <section className="py-16 sm:py-24 bg-grid-pattern bg-hero-glow border-b border-[rgba(167,139,250,0.12)]">
        <Container size="lg">
          <div className="max-w-3xl">
            <Reveal>
              <Badge variant="purple" className="mb-4">
                ABOUT TYROSOFT DEV
              </Badge>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="text-4xl sm:text-6xl font-bold font-display text-[#EDEAF5] tracking-tight mb-6">
                Engineered for Speed, <br />
                <span className="text-[#A78BFA]">Built for Scale</span>
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-lg text-[#8C8799] leading-relaxed">
                Tyrosoft Dev was founded on a simple premise: software development agencies are too slow, too bloated, and rely on repetitive manual labor. We fix that through senior engineering and cutting-edge AI automation.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Story & Philosophy Section */}
      <Section>
        <Container size="lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <Reveal>
                <h2 className="text-3xl font-bold font-display text-[#EDEAF5]">
                  Our Story &amp; Approach
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="text-[#8C8799] text-base leading-relaxed">
                  We are a lean team of software architects, mobile engineers, UI designers, and AI specialists based in Austin, TX with global partners. We work with ambitious startups and mid-sized enterprises who need high-impact technical execution without agency bureaucracy.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="text-[#8C8799] text-base leading-relaxed">
                  Whether building Next.js web applications, cross-platform mobile apps, or autonomous LLM RAG pipelines that cut operational overhead by 60%, we prioritize clean code, sub-second latency, and transparent communication.
                </p>
              </Reveal>

              <Reveal delay={0.3}>
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[rgba(167,139,250,0.12)]">
                  {companyConfig.stats.slice(0, 2).map((s, i) => (
                    <div key={i}>
                      <div className="text-3xl font-bold font-display text-[#A78BFA]">
                        {s.value}
                      </div>
                      <div className="text-xs font-mono text-[#8C8799] uppercase mt-1">
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* Aesthetic Code / Visual Card */}
            <div className="lg:col-span-6">
              <Reveal delay={0.2}>
                <div className="rounded-3xl bg-[#0F0B16] border border-[rgba(167,139,250,0.2)] p-6 sm:p-8 font-mono text-xs text-[#EDEAF5] space-y-4 shadow-2xl">
                  <div className="flex items-center gap-2 pb-4 border-b border-white/10">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    <span className="text-[#8C8799] ml-2">tyrosoft.config.ts</span>
                  </div>

                  <div className="space-y-2 text-sm">
                    <p className="text-[#A78BFA]">const <span className="text-white">tyrosoftManifest</span> = &#123;</p>
                    <p className="pl-4 text-[#8C8799]">founderMission: <span className="text-emerald-400">&quot;Eliminate manual operational bloat&quot;</span>,</p>
                    <p className="pl-4 text-[#8C8799]">coreStack: [<span className="text-amber-300">&quot;Next.js 15&quot;</span>, <span className="text-amber-300">&quot;Python AI&quot;</span>, <span className="text-amber-300">&quot;Tailwind&quot;</span>],</p>
                    <p className="pl-4 text-[#8C8799]">deliveryModel: <span className="text-emerald-400">&quot;Fixed-Scope Milestones&quot;</span>,</p>
                    <p className="pl-4 text-[#8C8799]">guarantee: <span className="text-emerald-400">&quot;100% IP Transfer &amp; Sub-Second Speed&quot;</span>,</p>
                    <p className="text-[#A78BFA]">&#125;;</p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>

      {/* Values Grid */}
      <Section className="bg-[#0F0B16]">
        <Container size="lg">
          <div className="mb-12">
            <Badge variant="purple" className="mb-3">CORE PRINCIPLES</Badge>
            <h2 className="text-3xl font-bold font-display text-[#EDEAF5]">
              How We Differ From Generic Agencies
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <Reveal key={i} delay={0.1 * (i + 1)}>
                <SpotlightCard className="h-full space-y-4">
                  <div className="p-3 rounded-xl bg-[#15101F] w-fit border border-[rgba(167,139,250,0.15)]">
                    {v.icon}
                  </div>
                  <h3 className="text-lg font-bold font-display text-[#EDEAF5]">
                    {v.title}
                  </h3>
                  <p className="text-sm text-[#8C8799] leading-relaxed">
                    {v.desc}
                  </p>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>
    </div>
  );
}
