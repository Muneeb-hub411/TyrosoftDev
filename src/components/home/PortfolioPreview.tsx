"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { projectsData } from "@/data/projects";

export default function PortfolioPreview() {
  const featuredProjects = projectsData.filter((p) => p.featured);

  return (
    <Section id="work">
      <Container size="lg">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <Reveal>
              <Badge variant="purple" className="mb-4">
                04 // SELECTED CASE STUDIES
              </Badge>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-3xl sm:text-5xl font-bold font-display text-[#EDEAF5] tracking-tight">
                Engineering Impact &amp; <br />
                <span className="text-[#A78BFA]">Real Business Results</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <Button href="/work" variant="secondary" icon={<ArrowUpRight className="w-4 h-4" />}>
              View All Projects
            </Button>
          </Reveal>
        </div>

        {/* Featured Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, idx) => (
            <Reveal key={project.id} delay={0.1 * (idx + 1)}>
              <SpotlightCard className="h-full flex flex-col justify-between group">
                <div>
                  {/* Top Tag Header */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs text-[#A78BFA] uppercase tracking-wider">
                      {project.category} // {project.year}
                    </span>
                    <span className="text-xs text-[#8C8799] font-mono">{project.client}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold font-display text-[#EDEAF5] mb-3 group-hover:text-white transition-colors">
                    {project.title}
                  </h3>

                  {/* Summary */}
                  <p className="text-sm text-[#8C8799] leading-relaxed mb-6">
                    {project.summary}
                  </p>

                  {/* Key Metrics Breakdown Grid */}
                  <div className="grid grid-cols-3 gap-2 py-4 px-3 rounded-xl bg-[#15101F] border border-[rgba(167,139,250,0.12)] mb-6">
                    {project.metrics.map((metric, i) => (
                      <div key={i} className="text-center">
                        <div className="text-sm sm:text-base font-bold text-[#EDEAF5] font-display">
                          {metric.value}
                        </div>
                        <div className="text-[10px] text-[#8C8799] uppercase font-mono mt-0.5 truncate">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Tag Strip & Detail Link */}
                <div className="pt-4 border-t border-[rgba(167,139,250,0.08)] flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 2).map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-[rgba(109,40,217,0.12)] text-[#A78BFA]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/work#${project.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#EDEAF5] group-hover:text-[#A78BFA] transition-colors"
                  >
                    <span>Read Case Study</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
