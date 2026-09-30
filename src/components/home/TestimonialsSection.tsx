import React from "react";
import { Star, AlertCircle, Quote } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { testimonialsData } from "@/data/testimonials";

export default function TestimonialsSection() {
  return (
    <Section id="testimonials" className="bg-[#0F0B16]/30">
      <Container size="lg">
        {/* Section Header */}
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <Reveal>
            <Badge variant="purple" className="mb-4">
              06 // CLIENT TESTIMONIALS
            </Badge>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-3xl sm:text-5xl font-bold font-display text-[#EDEAF5] tracking-tight">
              What Founders &amp; Operators <br />
              <span className="text-[#A78BFA]">Say About Tyrosoft</span>
            </h2>
          </Reveal>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((t, idx) => (
            <Reveal key={t.id} delay={0.1 * (idx + 1)}>
              <SpotlightCard className="h-full flex flex-col justify-between relative group">
                <div>
                  {/* Top Rating & Quote Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-1">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-[#A78BFA] text-[#A78BFA]"
                        />
                      ))}
                    </div>
                    <Quote className="w-8 h-8 text-[#6D28D9]/40 group-hover:text-[#8B5CF6]/60 transition-colors" />
                  </div>

                  {/* Highlight Pill */}
                  <div className="mb-4 inline-block px-3 py-1 rounded-full text-xs font-mono bg-[#15101F] text-[#A78BFA] border border-[rgba(167,139,250,0.15)]">
                    {t.highlight}
                  </div>

                  {/* Quote text */}
                  <p className="text-sm text-[#EDEAF5]/90 leading-relaxed italic mb-8">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                {/* Author Info + Explicit Placeholder Marker Badge */}
                <div className="pt-4 border-t border-[rgba(167,139,250,0.1)] space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-bold text-[#EDEAF5] font-display">
                        {t.authorName}
                      </div>
                      <div className="text-xs text-[#8C8799]">
                        {t.authorTitle} at {t.companyName}
                      </div>
                    </div>

                    {/* Placeholder Marker Notice */}
                    {t.isPlaceholder && (
                      <span
                        title={t.replaceNote}
                        className="inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded bg-amber-950/40 text-amber-400 border border-amber-500/20"
                      >
                        <AlertCircle className="w-3 h-3" />
                        Placeholder
                      </span>
                    )}
                  </div>
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
