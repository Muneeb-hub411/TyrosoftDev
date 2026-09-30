import React from "react";
import { ArrowUpRight, Sparkles, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";

export default function CtaSection() {
  return (
    <Section id="cta" className="bg-grid-pattern relative overflow-hidden">
      {/* Background radial purple glow */}
      <div className="pointer-events-none absolute inset-0 bg-radial from-[#6D28D9]/20 via-transparent to-transparent opacity-60" />

      <Container size="lg" className="relative z-10">
        <div className="rounded-3xl bg-[#0F0B16] border border-[rgba(167,139,250,0.25)] p-8 sm:p-14 lg:p-20 text-center relative overflow-hidden shadow-2xl">
          {/* Faint hairline border background */}
          <div className="pointer-events-none absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#8B5CF6] to-transparent" />

          <Reveal>
            <div className="inline-block mb-6">
              <Badge variant="purple" icon={<Sparkles className="w-3.5 h-3.5" />}>
                08 // START YOUR PROJECT
              </Badge>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-display text-[#EDEAF5] tracking-tight max-w-3xl mx-auto mb-6 leading-tight">
              Ready to Cut Costs &amp; Build <br />
              <span className="text-[#A78BFA]">Production-Grade Software?</span>
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-base sm:text-lg text-[#8C8799] max-w-xl mx-auto mb-10 leading-relaxed">
              Book a free 45-minute strategic consultation with a senior engineer. We&apos;ll review your stack, map out AI cost savings, and provide a fixed quote.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                icon={<ArrowUpRight className="w-5 h-5" />}
              >
                Book a Free Consultation
              </Button>
              <Button href="/services" variant="secondary" size="lg">
                Explore Services
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm font-mono text-[#8C8799]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#A78BFA]" />
                <span>Zero Sales Pressure</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#A78BFA]" />
                <span>Fixed Scope &amp; Pricing</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#A78BFA]" />
                <span>100% IP Transfer</span>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
