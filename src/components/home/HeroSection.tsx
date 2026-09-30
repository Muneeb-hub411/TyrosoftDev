"use client";

import React from "react";
import { ArrowUpRight, Sparkles, CheckCircle2, ShieldCheck, Zap } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 lg:pt-48 lg:pb-36 overflow-hidden bg-grid-pattern bg-hero-glow border-b border-[rgba(167,139,250,0.12)]">
      {/* Background ambient lighting accents */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#6D28D9]/15 blur-[120px] rounded-full opacity-60" />
      <div className="pointer-events-none absolute top-10 right-10 w-72 h-72 bg-[#8B5CF6]/10 blur-[100px] rounded-full" />

      <Container size="lg" className="relative z-10">
        <div className="flex flex-col items-start max-w-4xl">
          {/* Top Monospace Label Badge */}
          <Reveal delay={0.1}>
            <div className="mb-6 inline-flex items-center gap-2">
              <Badge variant="purple" icon={<Sparkles className="w-3.5 h-3.5" />}>
                00 // SOFTWARE STARTUP &amp; AI AUTOMATION
              </Badge>
              <span className="hidden sm:inline-block text-xs font-mono text-[#8C8799]">
                [AUSTIN, TX &amp; GLOBAL]
              </span>
            </div>
          </Reveal>

          {/* Main Asymmetric Tight-Tracked Editorial Headline */}
          <Reveal delay={0.2}>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#EDEAF5] font-display leading-[1.08] mb-6">
              We Build High-Impact <br />
              <span className="bg-gradient-to-r from-white via-[#EDEAF5] to-[#A78BFA] bg-clip-text text-transparent">
                Software &amp; AI Automations
              </span>{" "}
              <br className="hidden sm:block" />
              That Cut Operating Costs.
            </h1>
          </Reveal>

          {/* One-Line Concise Value Proposition */}
          <Reveal delay={0.3}>
            <p className="text-lg sm:text-xl text-[#8C8799] max-w-2xl font-normal leading-relaxed mb-8">
              From ultra-fast Next.js platforms to autonomous AI workflows that eliminate manual operational labor. Senior engineering, zero bloat, fixed scope.
            </p>
          </Reveal>

          {/* CTA Group */}
          <Reveal delay={0.4}>
            <div className="flex flex-wrap items-center gap-4 mb-12">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                icon={<ArrowUpRight className="w-5 h-5" />}
              >
                Book a Free Consultation
              </Button>
              <Button
                href="/work"
                variant="secondary"
                size="lg"
              >
                See Our Selected Work
              </Button>
            </div>
          </Reveal>

          {/* Trust Highlights Strip */}
          <Reveal delay={0.5}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 pt-8 border-t border-[rgba(167,139,250,0.12)] w-full">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#15101F] text-[#A78BFA] border border-[rgba(167,139,250,0.15)]">
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#EDEAF5]">Sub-Second Speed</div>
                  <div className="text-xs text-[#8C8799]">95+ Lighthouse Performance</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#15101F] text-[#A78BFA] border border-[rgba(167,139,250,0.15)]">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#EDEAF5]">60% Cost Reduction</div>
                  <div className="text-xs text-[#8C8799]">Custom AI Document &amp; CRM Agents</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#15101F] text-[#A78BFA] border border-[rgba(167,139,250,0.15)]">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#EDEAF5]">100% IP Transfer</div>
                  <div className="text-xs text-[#8C8799]">Full Ownership &amp; Clean Code</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
