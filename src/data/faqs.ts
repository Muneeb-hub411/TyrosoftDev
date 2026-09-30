export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: "General" | "AI Automation" | "Engineering" | "Pricing";
}

export const faqsData: FaqItem[] = [
  {
    id: "faq-1",
    category: "AI Automation",
    question: "How does Tyrosoft Dev's AI Automation actually cut operational costs?",
    answer:
      "We identify high-volume, manual tasks (such as invoice entry, email sorting, support ticket routing, or document extraction) and build custom AI agent pipelines. Instead of human operators spending 15 minutes per item, our AI agents process items in seconds with 99%+ accuracy. Clients typically see 40% to 68% reductions in manual labor overhead within the first 60 days.",
  },
  {
    id: "faq-2",
    category: "General",
    question: "What makes Tyrosoft Dev different from traditional software agencies?",
    answer:
      "We don't use generic templates, bloatware UI kits, or offshore junior devs. You work directly with senior Next.js engineers and AI architects. Every project features custom dark editorial design, clean TypeScript codebases, and fixed transparent pricing with no hidden hourly inflation.",
  },
  {
    id: "faq-3",
    category: "Pricing",
    question: "What is your pricing model and project turnaround time?",
    answer:
      "We offer milestone-based fixed project pricing as well as monthly dedicated engineering retainers. Small automation bots ship in 1-2 weeks. Full web platforms and mobile apps typically ship in 4-8 weeks. Book a free consultation to get an exact fixed quote for your scope.",
  },
  {
    id: "faq-4",
    category: "Engineering",
    question: "Will we own the source code and intellectual property?",
    answer:
      "100% yes. Upon completion and milestone settlement, full ownership of all source code, Figma designs, vector assets, and AI pipelines is transferred entirely to your company. We provide clean Git repositories with comprehensive documentation.",
  },
  {
    id: "faq-5",
    category: "Engineering",
    question: "What technology stack do you specialize in?",
    answer:
      "Our core stack includes Next.js (App Router), TypeScript, Tailwind CSS, Framer Motion, React Native / Expo, Node.js, Python for AI/LLM pipelines (LangChain, LlamaIndex, OpenAI, Anthropic), PostgreSQL, and AWS / Vercel cloud infrastructure.",
  },
  {
    id: "faq-6",
    category: "General",
    question: "What happens during the Free Consultation?",
    answer:
      "It is a 45-minute zero-pressure strategic call with a senior engineer. We review your current tech stack or product idea, map out potential AI cost-saving opportunities, and provide you with a clear roadmap and fixed proposal.",
  },
];
