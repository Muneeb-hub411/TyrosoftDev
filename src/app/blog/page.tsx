import React from "react";
import type { Metadata } from "next";
import BlogClient from "@/components/blog/BlogClient";
import { blogPosts } from "@/data/blogs";

export const metadata: Metadata = {
  title: "Blog & Technical Insights | AI Automation, Software Engineering & SEO",
  description:
    "Read the latest engineering articles, AI business automation guides, Next.js optimization techniques, and growth strategies from the Tyrosoft Dev team.",
  keywords: [
    "Software Engineering Blog",
    "AI Business Automation Guides",
    "Next.js SEO Best Practices",
    "Custom Software vs SaaS",
    "Mobile App Trends 2026",
    "Tyrosoft Dev Insights",
  ],
  alternates: {
    canonical: "https://tyrosoftdev.com/blog",
  },
  openGraph: {
    title: "Tyrosoft Dev Blog | Software Engineering & AI Automation",
    description:
      "Deep technical insights on software architecture, Next.js, mobile apps, and cutting business costs with AI automation.",
    url: "https://tyrosoftdev.com/blog",
    siteName: "Tyrosoft Dev",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tyrosoft Dev Blog | Engineering & AI Insights",
    description:
      "Articles, tutorials, and strategy guides for software engineering and AI workflow automations.",
  },
};

export default function BlogPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Tyrosoft Dev Insights & Blog",
    description:
      "Engineering insights, AI business automation guides, and tech strategies for scaling enterprises.",
    url: "https://tyrosoftdev.com/blog",
    publisher: {
      "@type": "Organization",
      name: "Tyrosoft Dev",
      logo: {
        "@type": "ImageObject",
        url: "https://tyrosoftdev.com/logo.png",
      },
    },
    blogPost: blogPosts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.description,
      datePublished: post.publishedAt,
      url: `https://tyrosoftdev.com/blog/${post.slug}`,
      author: {
        "@type": "Person",
        name: post.author.name,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogClient />
    </>
  );
}
