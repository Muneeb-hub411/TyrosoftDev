export interface ServiceItem {
  id: string;
  slug: string;
  number: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  badge: string;
  isFeatured?: boolean;
  included: string[];
  deliverables: string[];
  targetAudience: string;
  impactMetric: string;
  process: { step: string; title: string; desc: string }[];
}

export const servicesData: ServiceItem[] = [
  {
    id: "ai-automation",
    slug: "ai-automation",
    number: "01",
    title: "AI Automation for Businesses",
    badge: "High ROI Spotlight",
    iconName: "Cpu",
    isFeatured: true,
    shortDescription:
      "Automate manual workflows, customer support, lead sorting, and document processing to eliminate repetitive labor.",
    fullDescription:
      "We build custom AI agents, LLM pipelines, and automated workflow orchestrations tailored to your operational bottlenecks. From intelligent document extraction to automated CRM triage, we turn hours of manual overhead into seconds of machine speed.",
    included: [
      "Custom Autonomous AI Agents & Task Bots",
      "LLM Fine-Tuning & RAG Knowledge Search",
      "Automated CRM & Support Ticket Triage",
      "Document AI (Invoice Parsing, Contract Summary)",
      "Zero-Human-Touch Data Entry Pipelines",
      "Real-time Analytics & Executive Dashboards",
    ],
    deliverables: [
      "Custom AI Engine Deployment",
      "API & Webhook Integrations",
      "Operator Training & Manuals",
      "Ongoing Performance Fine-Tuning",
    ],
    targetAudience:
      "Mid-sized enterprises, SaaS teams, and operations-heavy businesses losing 15+ hours weekly on repetitive manual tasks.",
    impactMetric: "Up to 60% reduction in manual operational overhead",
    process: [
      { step: "01", title: "Workflow Audit", desc: "Map time-wasters and manual bottlenecks." },
      { step: "02", title: "Architecture", desc: "Design RAG workflows and LLM agent toolkits." },
      { step: "03", title: "Implementation", desc: "Integrate APIs into your existing stack." },
      { step: "04", title: "Optimization", desc: "Monitor accuracy and benchmark cost savings." },
    ],
  },
  {
    id: "web-development",
    slug: "web-development",
    number: "02",
    title: "Web Development",
    badge: "Core Engineering",
    iconName: "Globe",
    isFeatured: true,
    shortDescription:
      "Ultra-fast, SEO-optimized Next.js web applications built with modern architectures and dark editorial aesthetics.",
    fullDescription:
      "We design and build production-grade web applications with pixel perfection, lightning performance, and headless CMS integrations. Designed for conversions and zero-latency user experiences.",
    included: [
      "Next.js App Router & Server Components",
      "Tailwind CSS & Framer Motion Animations",
      "Headless CMS Setup (Sanity / Strapi / Payload)",
      "Lighthouse 95+ Performance Optimization",
      "Full Technical SEO & Open Graph Infrastructure",
      "Enterprise Security & Edge API Integration",
    ],
    deliverables: [
      "Full TypeScript Codebase",
      "Vercel / AWS Cloud Deployment",
      "Design System & UI Components",
      "SEO Audit Report",
    ],
    targetAudience:
      "Startups needing a flagship web application or established brands rebranding for a modern market edge.",
    impactMetric: "<0.8s Average First Contentful Paint",
    process: [
      { step: "01", title: "UX Wireframing", desc: "Map site architecture and conversion paths." },
      { step: "02", title: "Design System", desc: "Establish dark tokens, typography, and motion." },
      { step: "03", title: "Next.js Build", desc: "Clean TypeScript code with SSR and edge routes." },
      { step: "04", title: "Global CDN", desc: "Deploy to edge infrastructure with zero downtime." },
    ],
  },
  {
    id: "app-development",
    slug: "app-development",
    number: "03",
    title: "App Development",
    badge: "Mobile & Cross-Platform",
    iconName: "Smartphone",
    isFeatured: true,
    shortDescription:
      "Native and cross-platform mobile apps for iOS and Android with offline sync, biometric security, and fluid motion.",
    fullDescription:
      "From consumer utility apps to enterprise mobile portals, we craft responsive, buttery-smooth mobile applications that users love opening every day.",
    included: [
      "React Native & Expo Ecosystem",
      "iOS App Store & Google Play Publishing",
      "Real-Time Push Notifications & Deep Links",
      "Offline Database Sync & Local Storage",
      "Biometric Authentication & Encryption",
      "In-App Purchases & Stripe Mobile Payments",
    ],
    deliverables: [
      "Production iOS (.ipa) & Android (.apk/.aab) builds",
      "App Store & Play Store Submissions",
      "CI/CD Pipeline Setup",
      "Mobile Design Figma Files",
    ],
    targetAudience:
      "Companies wanting to expand their desktop platform to iOS/Android or launches starting mobile-first.",
    impactMetric: "4.8/5 Star Average App Store User Rating",
    process: [
      { step: "01", title: "Mobile Wireframes", desc: "Touch-first navigation and gestures." },
      { step: "02", title: "Cross-Platform Build", desc: "Shared logic across iOS & Android." },
      { step: "03", title: "Store Compliance", desc: "Prepare metadata, screenshots & privacy policy." },
      { step: "04", title: "Publish", desc: "Launch to Apple App Store & Google Play Store." },
    ],
  },
  {
    id: "graphic-design",
    slug: "graphic-design",
    number: "04",
    title: "Graphic Design",
    badge: "Brand Identity",
    iconName: "Palette",
    included: [
      "Comprehensive Brand Identity Systems",
      "Vector Logo Marks & Typography Suites",
      "Dark Editorial UI Kit & Component Libraries",
      "Social Media & Ad Creative Assets",
      "Pitch Decks & Investor Presentation Decks",
      "Vector Illustration & Custom Icons",
    ],
    deliverables: [
      "Vector Master Files (.SVG, .AI, .EPS)",
      "Brand Style Guide PDF",
      "Figma UI Design Systems",
      "Social Asset Templates",
    ],
    targetAudience:
      "Founders launching new products or established companies seeking a high-end visual repositioning.",
    impactMetric: "100% Custom Vector Art with Zero Stock Clichés",
    process: [
      { step: "01", title: "Visual Discovery", desc: "Uncover brand positioning and aesthetics." },
      { step: "02", title: "Concept Exploration", desc: "Develop 3 unique visual directions." },
      { step: "03", title: "Systemization", desc: "Build typography, colors, and layout rules." },
      { step: "04", title: "Asset Handoff", desc: "Provide high-res vectors and brand guidelines." },
    ],
  },
  {
    id: "video-editing",
    slug: "video-editing",
    number: "05",
    title: "Video Editing",
    badge: "Motion & Media",
    iconName: "Video",
    included: [
      "Product Demo & SaaS Feature Walkthroughs",
      "High-Conversion Social Media Video Ads (Reels, TikTok)",
      "Cinematic Motion Graphics & Visual Effects",
      "Color Grading, Audio Clean-up & Sound Design",
      "Interactive Web Motion Sequences & Lottie Animations",
      "YouTube & Podcast Editing with Kinetic Captions",
    ],
    deliverables: [
      "4K Master Video Renders (MP4, ProRes)",
      "Short-Form Vertical Cuts (9:16)",
      "Web-Optimized Lottie/GIF Animations",
      "Project Source Files",
    ],
    targetAudience:
      "SaaS founders pitching investors, marketing teams launching campaigns, and creators expanding audience reach.",
    impactMetric: "2.4x Higher Viewer Retention on Product Demos",
    process: [
      { step: "01", title: "Storyboarding", desc: "Scripting visual pacing and key beats." },
      { step: "02", title: "Editing & Motion", desc: "Precision cuts, kinetic text, and transitions." },
      { step: "03", title: "Audio & Color", desc: "Pro sound mastering and cinematic grading." },
      { step: "04", title: "Format Exports", desc: "Optimized exports for web, social, and TV." },
    ],
  },
  {
    id: "marketing",
    slug: "marketing",
    number: "06",
    title: "Marketing Strategy & Growth",
    badge: "Revenue Growth",
    iconName: "TrendingUp",
    included: [
      "Performance Ad Campaign Setup (Meta, Google, LinkedIn)",
      "Conversion Rate Optimization (CRO) & A/B Testing",
      "Programmatic SEO & Content Funnel Strategy",
      "Automated Email Marketing & Lifecycle Sequences",
      "Product Launch Playbooks & PR Outreach",
      "Analytics Setup & Attribution Modeling",
    ],
    deliverables: [
      "Growth Strategy Playbook",
      "Live Analytics Dashboard",
      "Ad Copy & Creative Sets",
      "A/B Testing Reports",
    ],
    targetAudience:
      "Businesses with product-market fit ready to scale paid acquisition and organic search traffic.",
    impactMetric: "Average 3.2x Return on Ad Spend (ROAS)",
    process: [
      { step: "01", title: "Audit & Benchmarking", desc: "Analyze unit economics and channels." },
      { step: "02", title: "Funnel Build", desc: "Craft high-converting landing pages and ads." },
      { step: "03", title: "Campaign Launch", desc: "Scale winners and purge underperforming ads." },
      { step: "04", title: "Attribution", desc: "Track exact cost-per-acquisition (CPA)." },
    ],
  },
  {
    id: "it-support-consulting",
    slug: "it-support-consulting",
    number: "07",
    title: "IT Support & Consulting",
    badge: "Infrastructure",
    iconName: "ShieldCheck",
    included: [
      "Cloud Infrastructure Architecture (AWS, GCP, Vercel)",
      "Cybersecurity Audits & Penetration Testing",
      "DevOps, Docker, CI/CD Pipeline Automation",
      "24/7 Monitoring & Emergency Response SLA",
      "Legacy System Migration to Modern Cloud Native",
      "Compliance Frameworks (SOC2, HIPAA Preparation)",
    ],
    deliverables: [
      "Infrastructure Architecture Diagrams",
      "Security Risk Audit Report",
      "Automated Deployment Scripts",
      "24/7 Monitoring Alert Suite",
    ],
    targetAudience:
      "Growing teams seeking rock-solid security, sub-second latency, and expert cloud guidance without hiring full-time DevOps staff.",
    impactMetric: "99.99% Guaranteed Cloud Infrastructure Uptime",
    process: [
      { step: "01", title: "Security Audit", desc: "Scan vulnerabilities and architecture flaws." },
      { step: "02", title: "Cloud Optimization", desc: "Streamline server resources and cost." },
      { step: "03", title: "DevOps Pipeline", desc: "Automate code deployments and backups." },
      { step: "04", title: "24/7 Defense", desc: "Real-time threat monitoring and auto-healing." },
    ],
  },
  {
    id: "free-consultation",
    slug: "free-consultation",
    number: "08",
    title: "Free Strategic Consultation",
    badge: "Zero Risk",
    iconName: "MessageSquare",
    included: [
      "45-Minute 1-on-1 Video Session with Senior Engineer",
      "Tech Stack & Codebase Architectural Review",
      "AI Automation Opportunity Matrix & Cost Breakdown",
      "Custom Project Roadmap & Fixed-Price Proposal",
      "No Obligation & Zero High-Pressure Sales Pitch",
      "Immediate Actionable Takeaways You Can Keep",
    ],
    deliverables: [
      "1-Page Technical Strategy Summary",
      "Project Scope & Fixed Pricing Blueprint",
      "Estimated ROI & Timeline Map",
    ],
    targetAudience:
      "Founders and executives evaluating new projects, migrations, or automation initiatives.",
    impactMetric: "100% Free - 45 Minutes of Direct Senior Expertise",
    process: [
      { step: "01", title: "Book Online", desc: "Pick a time slot that suits your team." },
      { step: "02", title: "Pre-Call Review", desc: "We audit your existing site/systems." },
      { step: "03", title: "Live Deep Dive", desc: "Collaborative roadmap & automation plan." },
      { step: "04", title: "Clear Proposal", desc: "Receive transparent scope, time & price." },
    ],
  },
];
