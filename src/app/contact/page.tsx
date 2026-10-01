import React from "react";
import type { Metadata } from "next";
import { Mail, MapPin, Clock, ShieldCheck, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import ContactForm from "@/components/contact/ContactForm";
import { companyConfig } from "@/data/company";

export const metadata: Metadata = {
  title: "Book a Free Consultation & Contact",
  description:
    "Schedule a zero-obligation 45-minute technical strategy call with Tyrosoft Dev senior engineers.",
  keywords: [
    "Book Software Consultation",
    "Free Tech Strategy Call",
    "Contact Tyrosoft Dev",
    "Hire AI Automation Agency",
  ],
  alternates: {
    canonical: "https://tyrosoftdev.com/contact",
  },
  openGraph: {
    title: "Book a Free Consultation & Contact | Tyrosoft Dev",
    description:
      "Schedule a technical strategy call with Tyrosoft Dev senior architects.",
    url: "https://tyrosoftdev.com/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="pt-24 pb-20">
      {/* Header */}
      <section className="py-16 sm:py-24 bg-grid-pattern bg-hero-glow border-b border-[rgba(167,139,250,0.12)]">
        <Container size="lg">
          <div className="max-w-3xl">
            <Reveal>
              <Badge variant="purple" className="mb-4">
                LET&apos;S TALK CODE &amp; AUTOMATION
              </Badge>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="text-4xl sm:text-6xl font-bold font-display text-[#EDEAF5] tracking-tight mb-6">
                Book a Free <br />
                <span className="text-[#A78BFA]">45-Minute Strategic Call</span>
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-lg text-[#8C8799] leading-relaxed">
                Directly consult with a senior engineer. We&apos;ll audit your technical requirements or operational bottlenecks and outline a fixed proposal.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Main Form & Info Section */}
      <Section className="py-16">
        <Container size="lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Contact Details & Benefits */}
            <div className="lg:col-span-5 space-y-8">
              <Reveal>
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold font-display text-[#EDEAF5]">
                    What Happens Next?
                  </h2>
                  <p className="text-sm text-[#8C8799] leading-relaxed">
                    Once you submit the form, we review your project specifications within 12 hours and send a calendar invitation for your free 45-minute consultation.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-[#15101F] text-[#A78BFA] border border-[rgba(167,139,250,0.15)]">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-[#EDEAF5]">No High-Pressure Sales</h3>
                      <p className="text-xs text-[#8C8799] mt-0.5">
                        You speak directly with engineers who write code, not commissioned sales reps.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-[#15101F] text-[#A78BFA] border border-[rgba(167,139,250,0.15)]">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-[#EDEAF5]">Mutual NDA &amp; Privacy</h3>
                      <p className="text-xs text-[#8C8799] mt-0.5">
                        All project specifications, codebase links, and data shared are strictly confidential.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-[#15101F] text-[#A78BFA] border border-[rgba(167,139,250,0.15)]">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-[#EDEAF5]">Fast Response Guaranteed</h3>
                      <p className="text-xs text-[#8C8799] mt-0.5">
                        We respond to all qualified inquiries within 12 business hours.
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="p-6 rounded-2xl bg-[#0F0B16] border border-[rgba(167,139,250,0.12)] space-y-4 font-mono text-xs">
                  <div className="text-[#A78BFA] uppercase tracking-wider font-bold">
                    DIRECT CONTACT
                  </div>
                  <div className="flex items-center gap-2 text-[#EDEAF5]">
                    <Mail className="w-4 h-4 text-[#A78BFA]" />
                    <a href={`mailto:${companyConfig.email}`} className="hover:underline">
                      {companyConfig.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-[#EDEAF5]">
                    <MapPin className="w-4 h-4 text-[#A78BFA]" />
                    <span>{companyConfig.location}</span>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7">
              <Reveal delay={0.1}>
                <ContactForm />
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
