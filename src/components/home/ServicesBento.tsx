"use client";

import React from "react";
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
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import { servicesData } from "@/data/services";

// Helper map for dynamic Lucide icons
const iconMap: Record<string, React.ReactNode> = {
  Cpu: <Cpu className="w-6 h-6 text-[#A78BFA]" />,
  Globe: <Globe className="w-6 h-6 text-[#A78BFA]" />,
  Smartphone: <Smartphone className="w-6 h-6 text-[#A78BFA]" />,
  Palette: <Palette className="w-6 h-6 text-[#A78BFA]" />,
  Video: <Video className="w-6 h-6 text-[#A78BFA]" />,
  TrendingUp: <TrendingUp className="w-6 h-6 text-[#A78BFA]" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-[#A78BFA]" />,
  MessageSquare: <MessageSquare className="w-6 h-6 text-[#A78BFA]" />,
};

export default function ServicesBento() {
  return (
    <Section id="services">
      <Container size="lg">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <Reveal>
              <Badge variant="purple" className="mb-4">
                01 // WHAT WE DO
              </Badge>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-3xl sm:text-5xl font-bold font-display text-[#EDEAF5] tracking-tight">
                Engineering Capabilities &amp; <br />
                <span className="text-[#A78BFA]">Business Automation</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <p className="text-[#8C8799] text-base max-w-md">
              We specialize in 8 high-impact disciplines engineered to accelerate your revenue and strip away repetitive operational friction.
            </p>
          </Reveal>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, idx) => {
            const isSpanTwo = idx === 0 || idx === 1; // AI Automation & Web Dev get featured larger bento span
            return (
              <Reveal key={service.id} delay={0.05 * (idx + 1)}>
                <SpotlightCard
                  className={`h-full flex flex-col justify-between group ${
                    isSpanTwo ? "lg:col-span-2 bg-[#15101F]/80" : ""
                  }`}
                >
                  <div>
                    {/* Top Monospace Header Strip */}
                    <div className="flex items-center justify-between mb-6">
                      <span className="font-mono text-xs text-[#A78BFA] tracking-widest uppercase">
                        {service.number} // {service.badge}
                      </span>
                      <div className="p-3 rounded-xl bg-[#15101F] border border-[rgba(167,139,250,0.15)] group-hover:border-[#8B5CF6] transition-colors">
                        {iconMap[service.iconName] || <Globe className="w-6 h-6 text-[#A78BFA]" />}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl font-bold font-display text-[#EDEAF5] mb-3 group-hover:text-white transition-colors">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm sm:text-base text-[#8C8799] leading-relaxed mb-6">
                      {service.shortDescription}
                    </p>

                    {/* Included bullet list previews */}
                    <ul className="space-y-2 mb-8 text-xs sm:text-sm text-[#EDEAF5]/80">
                      {service.included.slice(0, isSpanTwo ? 4 : 3).map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-[#8B5CF6] font-bold">›</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Card Footer Link */}
                  <div className="pt-4 border-t border-[rgba(167,139,250,0.08)] flex items-center justify-between">
                    <span className="text-xs font-mono text-[#A78BFA]">
                      {service.impactMetric}
                    </span>
                    <Link
                      href={`/services#${service.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#EDEAF5] group-hover:text-[#A78BFA] transition-colors"
                    >
                      <span>Explore Service</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </SpotlightCard>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
