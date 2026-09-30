"use client";

import React, { useState } from "react";
import { ArrowUpRight, X, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { projectsData, ProjectItem } from "@/data/projects";

const categories = ["All", "Web", "App", "Design", "Video", "Automation"];

export default function WorkGrid() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const filteredProjects =
    selectedCategory === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <div>
      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center gap-2 mb-12">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-mono tracking-wider transition-all ${
                isActive
                  ? "bg-[#6D28D9] text-white shadow-lg shadow-[#6D28D9]/40 border border-[#8B5CF6]"
                  : "bg-[#0F0B16] text-[#8C8799] border border-[rgba(167,139,250,0.12)] hover:text-[#EDEAF5] hover:border-[rgba(167,139,250,0.3)]"
              }`}
            >
              {cat.toUpperCase()}
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, idx) => (
          <Reveal key={project.id} delay={0.05 * (idx + 1)}>
            <SpotlightCard className="h-full flex flex-col justify-between group cursor-pointer">
              <div onClick={() => setActiveModalProject(project)}>
                {/* Top Header */}
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="purple">{project.category}</Badge>
                  <span className="font-mono text-xs text-[#8C8799]">{project.year}</span>
                </div>

                <div className="text-xs font-mono text-[#A78BFA] mb-1">{project.client}</div>
                <h3 className="text-xl font-bold font-display text-[#EDEAF5] mb-3 group-hover:text-white transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-[#8C8799] leading-relaxed mb-6">
                  {project.summary}
                </p>

                {/* Metrics pill strip */}
                <div className="grid grid-cols-3 gap-2 p-3 rounded-xl bg-[#15101F] border border-[rgba(167,139,250,0.1)] mb-6">
                  {project.metrics.map((m, i) => (
                    <div key={i} className="text-center">
                      <div className="text-sm font-bold text-[#EDEAF5] font-display">
                        {m.value}
                      </div>
                      <div className="text-[10px] font-mono text-[#8C8799] uppercase truncate">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* View Case Study Button */}
              <div className="pt-4 border-t border-[rgba(167,139,250,0.08)] flex items-center justify-between">
                <div className="flex gap-1">
                  {project.tags.slice(0, 2).map((t, i) => (
                    <span key={i} className="text-[10px] font-mono text-[#8C8799]">
                      #{t}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => setActiveModalProject(project)}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#A78BFA] group-hover:text-white transition-colors"
                >
                  <span>Details</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </SpotlightCard>
          </Reveal>
        ))}
      </div>

      {/* Project Detail Modal */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-3xl bg-[#0F0B16] border border-[rgba(167,139,250,0.3)] rounded-3xl p-6 sm:p-10 max-h-[90vh] overflow-y-auto shadow-2xl">
            {/* Close Button */}
            <button
              onClick={() => setActiveModalProject(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-[#15101F] text-[#EDEAF5] hover:bg-[#6D28D9] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Badge variant="purple">{activeModalProject.category}</Badge>
                <span className="font-mono text-xs text-[#8C8799]">{activeModalProject.year}</span>
                <span className="font-mono text-xs text-[#A78BFA]">{activeModalProject.client}</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-bold font-display text-[#EDEAF5]">
                {activeModalProject.title}
              </h2>

              {/* Metrics Grid */}
              <div className="grid grid-cols-3 gap-4 p-4 rounded-2xl bg-[#15101F] border border-[rgba(167,139,250,0.15)]">
                {activeModalProject.metrics.map((m, i) => (
                  <div key={i} className="text-center">
                    <div className="text-xl sm:text-2xl font-bold text-[#A78BFA] font-display">
                      {m.value}
                    </div>
                    <div className="text-xs font-mono text-[#8C8799] uppercase">{m.label}</div>
                  </div>
                ))}
              </div>

              <div className="space-y-4 text-sm sm:text-base text-[#8C8799] leading-relaxed">
                <h3 className="text-xs font-mono uppercase tracking-widest text-[#A78BFA]">
                  PROJECT OVERVIEW &amp; CHALLENGE
                </h3>
                <p>{activeModalProject.fullStory}</p>
              </div>

              {/* Deliverables List */}
              <div className="pt-4 border-t border-[rgba(167,139,250,0.1)]">
                <h3 className="text-xs font-mono uppercase tracking-widest text-[#A78BFA] mb-3">
                  DELIVERED SOLUTION
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-[#EDEAF5]">
                  {activeModalProject.deliverables.map((d, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#8B5CF6]" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 flex justify-end gap-3">
                <Button variant="secondary" onClick={() => setActiveModalProject(null)}>
                  Close
                </Button>
                <Button href="/contact" variant="primary">
                  Inquire Similar Project
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
