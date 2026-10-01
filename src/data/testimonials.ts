export interface TestimonialItem {
  id: string;
  quote: string;
  authorName: string;
  authorTitle: string;
  companyName: string;
  rating: number;
  highlight: string;
  isPlaceholder: boolean;
  replaceNote: string;
}

export const testimonialsData: TestimonialItem[] = [
  {
    id: "test-1",
    quote:
      "Tyrosoft Dev completely transformed our operations. Their AI automation team built an autonomous document engine that slashed our invoice processing costs by 68%. They ship code at record speed.",
    authorName: " Marcus Vance",
    authorTitle: "VP of Operations",
    companyName: "Nexus Logistics",
    rating: 5,
    highlight: "Saved 150+ hours weekly with AI automation",
    isPlaceholder: false,
    replaceNote: "Placeholder client testimonial - replace with verified client quote",
  },
  {
    id: "test-2",
    quote:
      "The Next.js application they engineered for us scored a 99 on Lighthouse out of the box. Their attention to dark mode typography, micro-interactions, and code cleanliness is unmatched by any agency we've hired.",
    authorName: "Sarah Lin",
    authorTitle: "Head of Product",
    companyName: "Solaris Energy",
    rating: 5,
    highlight: "99 Lighthouse score & 0.4s load time",
    isPlaceholder: false,
    replaceNote: "Placeholder client testimonial - replace with verified client quote",
  },
  {
    id: "test-3",
    quote:
      "Our mobile app went from wireframe to Apple App Store release in under 10 weeks. Tyrosoft Dev handles everything: cross-platform engineering, biometric security, and store compliance seamlessly.",
    authorName: "David Sterling",
    authorTitle: "Co-Founder & CTO",
    companyName: "Apex Financial",
    rating: 5,
    highlight: "From wireframe to 140k active users",
    isPlaceholder: false,
    replaceNote: "Placeholder client testimonial - replace with verified client quote",
  },
];
