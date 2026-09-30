import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Cpu,
  Globe,
  Smartphone,
  Palette,
  Video,
  TrendingUp,
  ShieldCheck,
  MessageSquare,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { Reveal } from "@/components/ui/Reveal";
import { servicesData } from "@/data/services";

export const metadata: Metadata = {
  title: "Services & Capabilities",
  description:
    "Explore Tyrosoft Dev's 8 core software engineering, design, marketing, and AI automation services.",
};

const iconMap: Record<string, React.ReactNode> = {
  Cpu: <Cpu className="w-8 h-8 text-[#A78BFA]" />,
  Globe: <Globe className="w-8 h-8 text-[#A78BFA]" />,
  Smartphone: <Smartphone className="w-8 h-8 text-[#A78BFA]" />,
  Palette: <Palette className="w-8 h-8 text-[#A78BFA]" />,
  Video: <Video className="w-8 h-8 text-[#A78BFA]" />,
  TrendingUp: <TrendingUp className="w-8 h-8 text-[#A78BFA]" />,
  ShieldCheck: <ShieldCheck className="w-8 h-8 text-[#A78BFA]" />,
  MessageSquare: <MessageSquare className="w-8 h-8 text-[#A78BFA]" />,
};

export default function ServicesPage() {
  return (
    <div className="pt-24 pb-20">
      {/* Page Header */}
      <section className="py-16 sm:py-24 bg-grid-pattern bg-hero-glow border-b border-[rgba(167,139,250,0.12)]">
        <Container size="lg">
          <div className="max-w-3xl">
            <Reveal>
              <Badge variant="purple" className="mb-4">
                CAPABILITIES &amp; DISCIPLINES
              </Badge>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="text-4xl sm:text-6xl font-bold font-display text-[#EDEAF5] tracking-tight mb-6">
                Engineering Services &amp; <br />
                <span className="text-[#A78BFA]">AI Automations</span>
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-lg text-[#8C8799] leading-relaxed">
                Comprehensive software development, mobile engineering, dark editorial design, and AI workflow automation. Built with zero bloat and fixed pricing.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* 8 Detailed Service Blocks */}
      <div className="space-y-16 py-16">
        <Container size="lg">
          <div className="space-y-24">
            {servicesData.map((service, idx) => (
              <div
                key={service.id}
                id={service.slug}
                className="scroll-mt-32 pt-8 border-t border-[rgba(167,139,250,0.12)] first:border-t-0 first:pt-0"
              >
                <Reveal>
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                    {/* Left Column: Number, Title, Overview */}
                    <div className="lg:col-span-5 space-y-6">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-sm text-[#A78BFA] tracking-wider uppercase">
                          {service.number} // {service.badge}
                        </span>
                      </div>

                      <div className="flex items-center gap-4">
                        <div className="p-3.5 rounded-2xl bg-[#0F0B16] border border-[rgba(167,139,250,0.2)]">
                          {iconMap[service.iconName] || <Globe className="w-8 h-8 text-[#A78BFA]" />}
                        </div>
                        <h2 className="text-2xl sm:text-4xl font-bold font-display text-[#EDEAF5]">
                          {service.title}
                        </h2>
                      </div>

                      <p className="text-base text-[#8C8799] leading-relaxed">
                        {service.fullDescription}
                      </p>

                      <div className="p-4 rounded-xl bg-[#0F0B16] border border-[rgba(167,139,250,0.15)] font-mono text-xs">
                        <span className="text-[#A78BFA] uppercase block mb-1">Impact Metric</span>
                        <span className="text-base font-bold text-[#EDEAF5] font-display">
                          {service.impactMetric}
                        </span>
                      </div>

                      <div className="pt-2">
                        <Button
                          href="/contact"
                          variant="primary"
                          icon={<ArrowRight className="w-4 h-4" />}
                        >
                          Book {service.title}
                        </Button>
                      </div>
                    </div>

                    {/* Right Column: Included & Deliverables Card */}
                    <div className="lg:col-span-7 space-y-6">
                      <SpotlightCard className="h-full space-y-8">
                        <div>
                          <h3 className="text-xs font-mono uppercase tracking-widest text-[#A78BFA] mb-4">
                            WHAT&apos;S INCLUDED
                          </h3>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-[#EDEAF5]">
                            {service.included.map((item, i) => (
                              <div key={i} className="flex items-start gap-2.5">
                                <CheckCircle2 className="w-4 h-4 text-[#8B5CF6] shrink-0 mt-0.5" />
                                <span>{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="pt-6 border-t border-[rgba(167,139,250,0.1)]">
                          <h3 className="text-xs font-mono uppercase tracking-widest text-[#A78BFA] mb-3">
                            TANGIBLE DELIVERABLES
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {service.deliverables.map((d, dIdx) => (
                              <span
                                key={dIdx}
                                className="px-3 py-1 rounded-lg text-xs font-mono bg-[#15101F] text-[#EDEAF5] border border-[rgba(167,139,250,0.15)]"
                              >
                                {d}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="pt-4 border-t border-[rgba(167,139,250,0.1)] text-xs text-[#8C8799]">
                          <span className="font-mono text-[#A78BFA]">IDEAL FOR: </span>
                          <span>{service.targetAudience}</span>
                        </div>
                      </SpotlightCard>
                    </div>
                  </div>
                </Reveal>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* Bottom CTA */}
      <Section className="bg-[#0F0B16]">
        <Container size="md" className="text-center">
          <h2 className="text-3xl font-bold font-display text-[#EDEAF5] mb-4">
            Unsure Which Service Fits Your Bottleneck?
          </h2>
          <p className="text-[#8C8799] mb-8 max-w-lg mx-auto">
            Book our free 45-minute consultation. We&apos;ll analyze your tech stack and tell you exactly what you need.
          </p>
          <Button href="/contact" variant="primary" size="lg">
            Schedule Free Strategy Call
          </Button>
        </Container>
      </Section>
    </div>
  );
}
