import React from "react";
import { Container } from "@/components/ui/Container";

const technologies = [
  "NEXT.JS 15",
  "TYPESCRIPT",
  "TAILWIND CSS",
  "PYTHON",
  "OPENAI / RAG",
  "REACT NATIVE",
  "EXPO",
  "POSTGRESQL",
  "AWS / VERCEL",
  "DOCKER",
  "FRAMER MOTION",
  "LANGCHAIN",
];

export default function TechStackMarquee() {
  return (
    <div className="py-12 border-b border-[rgba(167,139,250,0.12)] bg-[#07050B] overflow-hidden">
      <Container size="full">
        <div className="flex items-center gap-4 mb-4 justify-center">
          <span className="text-xs font-mono text-[#8C8799] tracking-widest uppercase">
            05 // BATTLE-TESTED TECH STACK
          </span>
        </div>

        {/* Continuous Marquee Track */}
        <div className="relative flex overflow-x-hidden group">
          {/* Gradient Edges */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#07050B] to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#07050B] to-transparent z-10" />

          <div className="py-2 animate-marquee flex whitespace-nowrap gap-12 items-center">
            {technologies.concat(technologies).map((tech, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 text-sm font-mono text-[#EDEAF5]/70 hover:text-[#A78BFA] transition-colors"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#6D28D9]" />
                <span>{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
