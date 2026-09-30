import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { companyConfig } from "@/data/company";

export default function Footer() {
  return (
    <footer className="bg-[#07050B] border-t border-[rgba(167,139,250,0.12)] pt-16 pb-12 relative overflow-hidden">
      {/* Ambient purple blur background bottom */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-[#6D28D9]/10 blur-3xl rounded-full" />

      <Container size="lg">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-[rgba(167,139,250,0.08)]">
          {/* Brand & Mission Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="relative w-11 h-11 rounded-xl overflow-hidden border border-[rgba(167,139,250,0.2)] shadow-md shrink-0">
                <Image
                  src="/logo.png"
                  alt="Tyrosoft Dev Logo"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-extrabold text-lg text-[#EDEAF5] tracking-wider leading-none">
                  TYROSOFT<span className="text-[#A78BFA]">DEV</span>
                </span>
                <span className="text-[10px] font-mono text-[#8C8799] tracking-widest uppercase mt-0.5">
                  COMPANY
                </span>
              </div>
            </Link>
            <p className="text-sm text-[#8C8799] leading-relaxed max-w-sm">
              Engineering high-impact web apps, mobile solutions, AI automations, and modern digital experiences that cut operational costs.
            </p>
            <div className="pt-2 flex flex-col gap-2.5 text-xs text-[#A78BFA] font-mono">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#8B5CF6]" />
                <a href={`mailto:${companyConfig.email}`} className="hover:underline text-[#EDEAF5]">
                  {companyConfig.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#8B5CF6]" />
                <a href={`tel:${companyConfig.phone.replace(/\s+/g, "")}`} className="hover:underline text-[#EDEAF5]">
                  {companyConfig.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#8B5CF6]" />
                <span className="text-[#EDEAF5]">{companyConfig.location}</span>
              </div>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono tracking-widest text-[#A78BFA] uppercase">
              01 // Navigation
            </h4>
            <ul className="space-y-2 text-sm text-[#8C8799]">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  All Services
                </Link>
              </li>
              <li>
                <Link href="/work" className="hover:text-white transition-colors">
                  Selected Work
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Tyrosoft
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Free Consultation
                </Link>
              </li>
            </ul>
          </div>

          {/* Core Services Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono tracking-widest text-[#A78BFA] uppercase">
              02 // Capabilities
            </h4>
            <ul className="space-y-2 text-sm text-[#8C8799]">
              <li>
                <Link href="/services#ai-automation" className="hover:text-white transition-colors">
                  AI Business Automation
                </Link>
              </li>
              <li>
                <Link href="/services#web-development" className="hover:text-white transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/services#app-development" className="hover:text-white transition-colors">
                  Mobile App Engineering
                </Link>
              </li>
              <li>
                <Link href="/services#graphic-design" className="hover:text-white transition-colors">
                  Brand &amp; UI Design
                </Link>
              </li>
              <li>
                <Link href="/services#video-editing" className="hover:text-white transition-colors">
                  Video &amp; Motion Graphics
                </Link>
              </li>
              <li>
                <Link href="/services#marketing" className="hover:text-white transition-colors">
                  Growth Marketing
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono tracking-widest text-[#A78BFA] uppercase">
              03 // Connect
            </h4>
            <ul className="space-y-2 text-sm text-[#8C8799]">
              {companyConfig.socials.map((social) => (
                <li key={social.name}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 hover:text-white transition-colors group"
                  >
                    <span>{social.name}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Copyright Strip - Clean without tech stack reference or Next.js logo */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8C8799]">
          <p>© {new Date().getFullYear()} Tyrosoft Dev LLC. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-mono text-[#A78BFA]">SYSTEM STATUS: OPERATIONAL</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
