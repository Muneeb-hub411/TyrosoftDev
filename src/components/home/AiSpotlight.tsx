"use client";

import React, { useState } from "react";
import { Cpu, ArrowRight, Check, X, ShieldAlert, Sparkles, TrendingDown, Clock, Layers } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";

export default function AiSpotlight() {
  const [activeTab, setActiveTab] = useState<"before" | "after">("after");

  return (
    <Section id="ai-spotlight" className="bg-[#0F0B16]/50">
      <Container size="lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Story & Value Prop */}
          <div className="lg:col-span-6 space-y-6">
            <Reveal>
              <Badge variant="purple" icon={<Cpu className="w-3.5 h-3.5" />}>
                02 // AI AUTOMATION SPOTLIGHT
              </Badge>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="text-3xl sm:text-5xl font-bold font-display text-[#EDEAF5] leading-tight">
                Turn Hours of Manual Labor into <br />
                <span className="bg-gradient-to-r from-[#A78BFA] via-[#8B5CF6] to-white bg-clip-text text-transparent">
                  Seconds of Machine Speed
                </span>
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="text-[#8C8799] text-base leading-relaxed">
                Most companies waste up to 40% of their operational budget paying human teams to copy-paste data between software tools, review routine invoices, and triage support tickets. We engineer autonomous RAG and LLM agent systems that run 24/7 with zero fatigue and near-zero error rates.
              </p>
            </Reveal>

            {/* Metric Callouts */}
            <Reveal delay={0.3}>
              <div className="grid grid-cols-2 gap-4 py-4 border-y border-[rgba(167,139,250,0.12)]">
                <div>
                  <div className="text-3xl sm:text-4xl font-extrabold font-display text-[#A78BFA]">
                    60%
                  </div>
                  <div className="text-xs font-mono text-[#8C8799] uppercase mt-1">
                    Avg Ops Overhead Cut
                  </div>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-extrabold font-display text-[#EDEAF5]">
                    4 Seconds
                  </div>
                  <div className="text-xs font-mono text-[#8C8799] uppercase mt-1">
                    Per Document Processing
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="pt-2 flex items-center gap-4">
                <Button
                  href="/contact"
                  variant="primary"
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Request AI Audit &amp; Demo
                </Button>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Interactive Before / After Story Card */}
          <div className="lg:col-span-6">
            <Reveal delay={0.2}>
              <div className="rounded-3xl bg-[#0F0B16] border border-[rgba(167,139,250,0.2)] p-6 sm:p-8 shadow-2xl relative overflow-hidden">
                {/* Accent glow corner */}
                <div className="pointer-events-none absolute -top-20 -right-20 w-64 h-64 bg-[#6D28D9]/20 blur-3xl rounded-full" />

                {/* Tab Controls */}
                <div className="flex items-center justify-between p-1.5 rounded-xl bg-[#15101F] border border-[rgba(167,139,250,0.12)] mb-8">
                  <button
                    onClick={() => setActiveTab("before")}
                    className={`flex-1 py-2.5 px-4 rounded-lg text-xs font-mono uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                      activeTab === "before"
                        ? "bg-[#07050B] text-rose-400 border border-rose-500/20 shadow-sm"
                        : "text-[#8C8799] hover:text-[#EDEAF5]"
                    }`}
                  >
                    <X className="w-3.5 h-3.5 text-rose-400" />
                    Traditional Manual Workflow
                  </button>

                  <button
                    onClick={() => setActiveTab("after")}
                    className={`flex-1 py-2.5 px-4 rounded-lg text-xs font-mono uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                      activeTab === "after"
                        ? "bg-[#6D28D9] text-white shadow-md shadow-[#6D28D9]/40"
                        : "text-[#8C8799] hover:text-[#EDEAF5]"
                    }`}
                  >
                    <Sparkles className="w-3.5 h-3.5 text-[#A78BFA]" />
                    Tyrosoft AI Automation Engine
                  </button>
                </div>

                {/* Tab Content Display */}
                {activeTab === "before" ? (
                  <div className="space-y-6 animate-fadeIn">
                    <div className="p-4 rounded-xl bg-rose-950/20 border border-rose-500/20 flex items-start gap-3">
                      <ShieldAlert className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-sm font-semibold text-rose-200">High Operational Bottleneck</h4>
                        <p className="text-xs text-rose-300/80 mt-0.5">Human teams spend 15-20 mins per claim verifying PDFs, manual typing into legacy CRM.</p>
                      </div>
                    </div>

                    <div className="space-y-3 font-mono text-xs text-[#8C8799]">
                      <div className="p-3 rounded-lg bg-[#15101F] flex items-center justify-between border border-white/5">
                        <span className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-rose-400" /> Manual Document Parsing
                        </span>
                        <span className="text-rose-400">18.5 mins / invoice</span>
                      </div>

                      <div className="p-3 rounded-lg bg-[#15101F] flex items-center justify-between border border-white/5">
                        <span className="flex items-center gap-2">
                          <Layers className="w-4 h-4 text-rose-400" /> Human Error Rate
                        </span>
                        <span className="text-rose-400">4.2% discrepancy</span>
                      </div>

                      <div className="p-3 rounded-lg bg-[#15101F] flex items-center justify-between border border-white/5">
                        <span className="flex items-center gap-2">
                          <TrendingDown className="w-4 h-4 text-rose-400" /> Monthly Labor Cost
                        </span>
                        <span className="text-rose-400">$18,400 / month</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-6 animate-fadeIn">
                    <div className="p-4 rounded-xl bg-[#6D28D9]/20 border border-[rgba(167,139,250,0.3)] flex items-start gap-3">
                      <Sparkles className="w-5 h-5 text-[#A78BFA] shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-sm font-semibold text-[#EDEAF5]">Autonomous Agent Execution</h4>
                        <p className="text-xs text-[#8C8799] mt-0.5">AI Agent extracts data from PDF invoices, verifies with database, posts to ERP instantly.</p>
                      </div>
                    </div>

                    <div className="space-y-3 font-mono text-xs text-[#EDEAF5]">
                      <div className="p-3 rounded-lg bg-[#15101F] flex items-center justify-between border border-[rgba(167,139,250,0.2)]">
                        <span className="flex items-center gap-2 text-[#A78BFA]">
                          <Clock className="w-4 h-4 text-[#A78BFA]" /> Autonomous AI Parsing
                        </span>
                        <span className="text-emerald-400 font-bold">4.1 seconds / invoice</span>
                      </div>

                      <div className="p-3 rounded-lg bg-[#15101F] flex items-center justify-between border border-[rgba(167,139,250,0.2)]">
                        <span className="flex items-center gap-2 text-[#A78BFA]">
                          <Check className="w-4 h-4 text-[#A78BFA]" /> System Accuracy
                        </span>
                        <span className="text-emerald-400 font-bold">99.4% precision</span>
                      </div>

                      <div className="p-3 rounded-lg bg-[#15101F] flex items-center justify-between border border-[rgba(167,139,250,0.2)]">
                        <span className="flex items-center gap-2 text-[#A78BFA]">
                          <TrendingDown className="w-4 h-4 text-[#A78BFA]" /> Net Monthly Cost
                        </span>
                        <span className="text-emerald-400 font-bold">$4,800 / month (74% saved)</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}
