export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  client: string;
  category: "Web" | "App" | "Design" | "Video" | "Automation";
  summary: string;
  fullStory: string;
  metrics: { label: string; value: string }[];
  tags: string[];
  year: string;
  featured: boolean;
  imageBg: string;
  deliverables: string[];
  link?: string;
}

export const projectsData: ProjectItem[] = [
  {
    id: "nexus-ai-workflow",
    slug: "nexus-ai-workflow",
    title: "Autonomous Invoice & Claim Processing AI",
    client: "Nexus Logistics Group",
    category: "Automation",
    summary:
      "Automated 12,000 monthly freight invoices using custom RAG and Vision AI models, reducing manual processing from 18 mins to 4 seconds per document.",
    fullStory:
      "Nexus Logistics was spending over 150 hours weekly manually reviewing vendor invoices, cross-referencing Bill of Lading documents, and flagging discrepancies. We engineered an autonomous AI workflow using vision models and custom RAG search connected directly to their ERP system.",
    metrics: [
      { label: "Cost Reduced", value: "68%" },
      { label: "Processing Speed", value: "4s / Doc" },
      { label: "Accuracy Rate", value: "99.4%" },
    ],
    tags: ["AI Automation", "Python", "Vision AI", "PostgreSQL", "Next.js Admin"],
    year: "2025",
    featured: true,
    imageBg: "from-purple-900/40 via-violet-950/40 to-black",
    deliverables: [
      "Custom OCR & Vision Pipeline",
      "Human-in-the-Loop Validation UI",
      "SAP & ERP API Integration",
      "Executive Analytics Portal",
    ],
  },
  {
    id: "apex-fintech-app",
    slug: "apex-fintech-app",
    title: "Apex Wealth Mobile Banking & Crypto Vault",
    client: "Apex Financial",
    category: "App",
    summary:
      "Cross-platform iOS and Android wealth management application with biometric security, sub-100ms trade execution, and dark luxury aesthetic.",
    fullStory:
      "Apex required a high-performance mobile application capable of handling high-frequency portfolio tracking, instant fiat-crypto swaps, and private wealth analytics for high-net-worth clients.",
    metrics: [
      { label: "App Store Rating", value: "4.9/5" },
      { label: "Active Users", value: "140,000+" },
      { label: "Latency", value: "<85ms" },
    ],
    tags: ["React Native", "Expo", "TypeScript", "Biometrics", "WebSockets"],
    year: "2025",
    featured: true,
    imageBg: "from-indigo-900/40 via-purple-950/40 to-black",
    deliverables: [
      "Cross-Platform iOS & Android App",
      "Real-time WebSocket Ticker Engine",
      "FaceID / Biometric Vault Security",
      "Apple Pay & Bank Wire APIs",
    ],
  },
  {
    id: "solaris-energy-platform",
    slug: "solaris-energy-platform",
    title: "Solaris Clean Energy Enterprise Portal",
    client: "Solaris Infrastructure",
    category: "Web",
    summary:
      "Next.js 15 enterprise web platform managing real-time solar grid telemetries across 4,500 industrial installations nationwide.",
    fullStory:
      "Solaris needed to replace a slow legacy portal with a modern, high-concurrency web app that renders thousands of energy data points per second with zero UI lag.",
    metrics: [
      { label: "Page Load Speed", value: "0.4s" },
      { label: "Telemetry Items", value: "2.5M / day" },
      { label: "Lighthouse Score", value: "99/100" },
    ],
    tags: ["Next.js App Router", "Tailwind CSS", "Three.js", "Server Components"],
    year: "2024",
    featured: true,
    imageBg: "from-purple-950/50 via-slate-900/50 to-black",
    deliverables: [
      "Next.js App Router Architecture",
      "Interactive 3D Energy Grid Visualizer",
      "Global CDN Caching",
      "SOC2 Compliant Auth",
    ],
  },
  {
    id: "vortex-brand-identity",
    slug: "vortex-brand-identity",
    title: "Vortex Audio Hardware Brand Identity & UI Kit",
    client: "Vortex Labs Inc",
    category: "Design",
    summary:
      "Comprehensive dark editorial visual system, vector typography logo, and Figma design system for a premium studio acoustics brand.",
    fullStory:
      "Vortex required a minimalist, high-end brand identity that resonated with audio engineers and industrial designers. We created an architectural grid system and bespoke dark visual assets.",
    metrics: [
      { label: "Components Built", value: "220+" },
      { label: "Brand Adoption", value: "100%" },
      { label: "Design Award", value: "Nominee" },
    ],
    tags: ["Brand System", "Figma UI Kit", "Vector Art", "Typography"],
    year: "2024",
    featured: false,
    imageBg: "from-violet-900/30 via-zinc-950/40 to-black",
    deliverables: [
      "Vector Logo & Emblem Suite",
      "Dark Editorial Style Guide",
      "Packaging Design Vectors",
      "E-commerce UI Components",
    ],
  },
  {
    id: "lumina-product-launch-video",
    slug: "lumina-product-launch-video",
    title: "Lumina AI Camera Launch Commercial & Motion",
    client: "Lumina Optics",
    category: "Video",
    summary:
      "Cinematic 4K product trailer with kinetic motion graphics, 3D render compositing, and custom sound design for a Y-Combinator startup launch.",
    fullStory:
      "To maximize impact for their Series A launch, Lumina needed a high-octane 60-second launch video that communicated complex AI camera features in seconds.",
    metrics: [
      { label: "Video Views", value: "1.2M+" },
      { label: "Conversion Lift", value: "+34%" },
      { label: "Pre-Orders", value: "8,500+" },
    ],
    tags: ["4K Video Editing", "After Effects", "Kinetic Motion", "Sound Design"],
    year: "2025",
    featured: false,
    imageBg: "from-purple-900/40 via-indigo-950/40 to-black",
    deliverables: [
      "60-Second Master Trailer (4K)",
      "9:16 Vertical Cuts for Ads",
      "Lottie Web Hero Animations",
      "Sound FX Mastering",
    ],
  },
  {
    id: "omni-support-bot",
    slug: "omni-support-bot",
    title: "OmniHealth 24/7 AI Patient Assistant",
    client: "OmniHealth Network",
    category: "Automation",
    summary:
      "HIPAA-compliant conversational AI agent resolving 74% of patient triage inquiries without human intervention.",
    fullStory:
      "OmniHealth call centers were overwhelmed with scheduling and basic prescription queries. We built a fine-tuned RAG assistant that answers patient questions instantly with total medical compliance.",
    metrics: [
      { label: "Deflection Rate", value: "74%" },
      { label: "Response Time", value: "<1.2s" },
      { label: "Patient CSAT", value: "96%" },
    ],
    tags: ["AI Agent", "RAG Pipeline", "LLM Fine-Tuning", "Twilio API"],
    year: "2025",
    featured: false,
    imageBg: "from-purple-950/40 via-violet-900/30 to-black",
    deliverables: [
      "Custom RAG Knowledge Base",
      "HIPAA Safe Guard Encryption",
      "Twilio SMS & Web Voice Bot",
      "Real-Time Escalation Alerts",
    ],
  },
];
