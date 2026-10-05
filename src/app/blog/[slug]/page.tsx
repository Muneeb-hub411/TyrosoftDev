import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Calendar,
  Clock,
  ArrowLeft,
  User,
  Sparkles,
  ArrowUpRight,
  CheckCircle2,
  Mail,
  Phone,
  MapPin,
  ShieldCheck,
  Send,
  Zap,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { Button } from "@/components/ui/Button";
import { blogPosts, getBlogPostBySlug } from "@/data/blogs";
import { companyConfig } from "@/data/company";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Article Not Found | Tyrosoft Dev",
    };
  }

  const canonicalUrl = `https://tyrosoftdev.com/blog/${post.slug}`;

  return {
    title: `${post.title} | Tyrosoft Dev`,
    description: post.description,
    keywords: post.tags,
    authors: [{ name: post.author.name }],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: canonicalUrl,
      siteName: "Tyrosoft Dev",
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author.name],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

// Helper to parse markdown links, bold, code, and italics
function parseInlineMarkdown(text: string): React.ReactNode {
  const pattern = /(!?\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*|`([^`]+)`|\*([^*]+)\*)/g;
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }

    const fullMatch = match[0];
    if (fullMatch.startsWith("[") && fullMatch.includes("](")) {
      const linkText = match[2];
      const linkUrl = match[3];
      const isInternal = linkUrl.startsWith("/") || linkUrl.startsWith("#");

      if (isInternal) {
        parts.push(
          <Link
            key={`link-${key++}`}
            href={linkUrl}
            className="text-[#A78BFA] hover:text-[#EDEAF5] font-semibold underline decoration-[#8B5CF6]/60 hover:decoration-[#8B5CF6] transition-colors"
          >
            {linkText}
          </Link>
        );
      } else {
        parts.push(
          <a
            key={`ext-${key++}`}
            href={linkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#A78BFA] hover:text-[#EDEAF5] font-semibold underline decoration-[#8B5CF6]/60 hover:decoration-[#8B5CF6] transition-colors"
          >
            {linkText}
          </a>
        );
      }
    } else if (fullMatch.startsWith("**") && fullMatch.endsWith("**")) {
      parts.push(
        <strong key={`bold-${key++}`} className="font-semibold text-[#EDEAF5]">
          {match[4]}
        </strong>
      );
    } else if (fullMatch.startsWith("`") && fullMatch.endsWith("`")) {
      parts.push(
        <code
          key={`code-${key++}`}
          className="px-1.5 py-0.5 rounded-md bg-[#15101F] text-[#C4B5FD] font-mono text-xs sm:text-sm border border-[rgba(167,139,250,0.2)]"
        >
          {match[5]}
        </code>
      );
    } else if (fullMatch.startsWith("*") && fullMatch.endsWith("*")) {
      parts.push(
        <em key={`italic-${key++}`} className="italic text-[#DDD6FE]">
          {match[6]}
        </em>
      );
    }

    lastIndex = pattern.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts.length > 0 ? parts : text;
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        headline: post.title,
        description: post.description,
        datePublished: post.publishedAt,
        dateModified: post.publishedAt,
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `https://tyrosoftdev.com/blog/${post.slug}`,
        },
        author: {
          "@type": "Person",
          name: post.author.name,
          jobTitle: post.author.role,
        },
        publisher: {
          "@type": "Organization",
          name: "Tyrosoft Dev",
          url: "https://tyrosoftdev.com",
          logo: {
            "@type": "ImageObject",
            url: "https://tyrosoftdev.com/logo.png",
          },
        },
        keywords: post.tags.join(", "),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://tyrosoftdev.com",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Insights & Blog",
            item: "https://tyrosoftdev.com/blog",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: post.title,
            item: `https://tyrosoftdev.com/blog/${post.slug}`,
          },
        ],
      },
    ],
  };

  // Rich HTML formatter for markdown sections in content
  const formatContent = (content: string) => {
    const lines = content.trim().split("\n");
    let html: React.ReactNode[] = [];

    lines.forEach((line, index) => {
      const trimmed = line.trim();

      if (trimmed.startsWith("## ")) {
        html.push(
          <h2
            key={index}
            className="text-2xl sm:text-3xl font-bold font-display text-[#EDEAF5] mt-12 mb-4 tracking-tight border-b border-[rgba(167,139,250,0.12)] pb-3"
          >
            {parseInlineMarkdown(trimmed.replace("## ", ""))}
          </h2>
        );
      } else if (trimmed.startsWith("### ")) {
        html.push(
          <h3
            key={index}
            className="text-xl sm:text-2xl font-bold font-display text-[#A78BFA] mt-8 mb-3 tracking-tight"
          >
            {parseInlineMarkdown(trimmed.replace("### ", ""))}
          </h3>
        );
      } else if (trimmed.startsWith("#### ")) {
        html.push(
          <h4
            key={index}
            className="text-lg font-bold font-display text-[#EDEAF5] mt-6 mb-2"
          >
            {parseInlineMarkdown(trimmed.replace("#### ", ""))}
          </h4>
        );
      } else if (trimmed.startsWith("> ")) {
        html.push(
          <blockquote
            key={index}
            className="border-l-4 border-[#8B5CF6] pl-5 py-3 my-6 italic text-[#EDEAF5] bg-[#15101F]/80 border-r border-t border-b border-[rgba(167,139,250,0.15)] rounded-r-2xl text-base sm:text-lg"
          >
            {parseInlineMarkdown(trimmed.replace("> ", "").replace(/"/g, ""))}
          </blockquote>
        );
      } else if (trimmed.startsWith("- ")) {
        html.push(
          <li key={index} className="ml-6 list-disc text-[#A59FB0] my-2 text-base leading-relaxed">
            {parseInlineMarkdown(trimmed.replace("- ", ""))}
          </li>
        );
      } else if (trimmed.startsWith("1. ") || trimmed.startsWith("2. ") || trimmed.startsWith("3. ") || trimmed.startsWith("4. ")) {
        html.push(
          <div key={index} className="flex items-start gap-3 my-2.5 text-base text-[#A59FB0]">
            <CheckCircle2 className="w-5 h-5 text-[#8B5CF6] shrink-0 mt-0.5" />
            <span>{parseInlineMarkdown(trimmed.replace(/^\d+\.\s*/, ""))}</span>
          </div>
        );
      } else if (trimmed.startsWith("👉 ")) {
        // High-converting callout row
        html.push(
          <div
            key={index}
            className="my-8 p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-[#6D28D9]/25 via-[#15101F] to-[#0F0B16] border border-[#8B5CF6]/50 shadow-lg shadow-[#6D28D9]/10 flex items-center justify-between flex-wrap gap-4"
          >
            <div className="flex items-center gap-3 text-base sm:text-lg font-medium text-white">
              <Zap className="w-6 h-6 text-[#A78BFA] shrink-0 animate-pulse" />
              <span>{parseInlineMarkdown(trimmed.replace("👉 ", ""))}</span>
            </div>
          </div>
        );
      } else if (trimmed === "---") {
        html.push(
          <hr
            key={index}
            className="my-10 border-t border-[rgba(167,139,250,0.15)]"
          />
        );
      } else if (trimmed.length > 0) {
        html.push(
          <p
            key={index}
            className="text-base sm:text-lg text-[#A59FB0] leading-relaxed my-4"
          >
            {parseInlineMarkdown(trimmed)}
          </p>
        );
      }
    });

    return html;
  };

  return (
    <div className="pt-24 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header Section */}
      <section className="py-12 sm:py-16 bg-grid-pattern bg-hero-glow border-b border-[rgba(167,139,250,0.12)] relative">
        <Container size="lg">
          <div className="max-w-4xl">
            {/* Back to blog link */}
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-xs font-mono text-[#A78BFA] hover:text-white transition-colors mb-6 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>Back to all insights</span>
            </Link>

            <div className="flex flex-wrap items-center gap-3 mb-4">
              <Badge variant="purple">{post.category}</Badge>
              <span className="flex items-center gap-1 text-xs text-[#8C8799]">
                <Calendar className="w-3.5 h-3.5 text-[#8B5CF6]" />
                {new Date(post.publishedAt).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
              <span className="flex items-center gap-1 text-xs text-[#8C8799]">
                <Clock className="w-3.5 h-3.5 text-[#8B5CF6]" />
                {post.readTime}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-bold font-display text-[#EDEAF5] tracking-tight mb-6 leading-tight">
              {post.title}
            </h1>

            <p className="text-lg text-[#8C8799] leading-relaxed mb-8">
              {post.description}
            </p>

            {/* Author Profile */}
            <div className="flex items-center justify-between pt-6 border-t border-[rgba(167,139,250,0.12)]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#6D28D9]/40 border border-[#8B5CF6]/50 flex items-center justify-center font-bold text-white text-sm">
                  {post.author.name.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#EDEAF5]">
                    {post.author.name}
                  </div>
                  <div className="text-xs text-[#8C8799]">{post.author.role}</div>
                </div>
              </div>

              {/* Tags */}
              <div className="hidden sm:flex flex-wrap items-center gap-2">
                {post.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-md bg-[#0F0B16] text-[11px] font-mono text-[#A78BFA] border border-[rgba(167,139,250,0.15)]"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Main Body */}
      <Section className="py-12 sm:py-16">
        <Container size="lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Article Content Column */}
            <div className="lg:col-span-8">
              <article className="prose prose-invert max-w-none">
                {formatContent(post.content)}
              </article>

              {/* High-Converting Bottom Consultation Callout Box */}
              <div className="mt-14 p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-[#15101F] to-[#0A0710] border border-[rgba(167,139,250,0.3)] shadow-2xl relative overflow-hidden">
                <div className="pointer-events-none absolute top-0 right-0 w-80 h-80 bg-[#6D28D9]/15 blur-3xl rounded-full" />
                <div className="relative z-10 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#6D28D9]/30 text-[#A78BFA] text-xs font-mono border border-[rgba(167,139,250,0.3)]">
                    <Sparkles className="w-3.5 h-3.5 text-[#8B5CF6]" />
                    <span>LET&apos;S ACCELERATE YOUR PRODUCT</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold font-display text-[#EDEAF5] tracking-tight">
                    Ready to Cut Operational Costs by Up to 60% with AI?
                  </h3>

                  <p className="text-sm sm:text-base text-[#8C8799] leading-relaxed">
                    Don&apos;t settle for fragile novelty chatbots. Partner directly with senior software architects at <strong>Tyrosoft Dev</strong> to implement high-speed decision engines, autonomous agent workflows, and hardened web/mobile architectures.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                    <div className="flex items-center gap-2 text-xs text-[#EDEAF5]">
                      <CheckCircle2 className="w-4 h-4 text-[#8B5CF6] shrink-0" />
                      <span>Free 45-Min Strategy Call</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-[#EDEAF5]">
                      <CheckCircle2 className="w-4 h-4 text-[#8B5CF6] shrink-0" />
                      <span>Mutual NDA Protected</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-[#EDEAF5]">
                      <CheckCircle2 className="w-4 h-4 text-[#8B5CF6] shrink-0" />
                      <span>12-Hour Fast Response</span>
                    </div>
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                    <Button
                      href="/contact#consultation-form"
                      variant="primary"
                      size="lg"
                      className="justify-center"
                      icon={<ArrowUpRight className="w-5 h-5" />}
                    >
                      Book Free Technical Consultation
                    </Button>

                    <a
                      href={`mailto:${companyConfig.email}`}
                      className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#0F0B16] text-xs font-mono text-[#A78BFA] hover:text-white border border-[rgba(167,139,250,0.2)] hover:border-[#8B5CF6] transition-all"
                    >
                      <Mail className="w-4 h-4" />
                      <span>{companyConfig.email}</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Tags Section */}
              <div className="mt-12 pt-8 border-t border-[rgba(167,139,250,0.12)] flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono text-[#8C8799]">TAGS:</span>
                  {post.tags.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-full bg-[#0F0B16] text-xs font-mono text-[#A78BFA] border border-[rgba(167,139,250,0.15)]"
                    >
                      #{t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Author Bio Box */}
              <div className="mt-10 p-6 sm:p-8 rounded-3xl bg-[#0F0B16] border border-[rgba(167,139,250,0.18)] flex items-start gap-5">
                <div className="w-14 h-14 rounded-2xl bg-[#6D28D9]/40 border border-[#8B5CF6]/50 flex items-center justify-center font-bold text-white text-xl shrink-0">
                  {post.author.name.charAt(0)}
                </div>
                <div className="space-y-3">
                  <div>
                    <h3 className="text-lg font-bold font-display text-[#EDEAF5]">
                      Written by {post.author.name}
                    </h3>
                    <p className="text-xs text-[#A78BFA] font-mono mt-0.5">
                      {post.author.role}
                    </p>
                  </div>
                  <p className="text-sm text-[#8C8799] leading-relaxed">
                    Senior engineering practitioner and founder specializing in high-speed enterprise AI integrations, Next.js web applications, mobile architectures, and automated operational workflows.
                  </p>
                  <div>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-[#A78BFA] hover:text-white transition-colors"
                    >
                      <span>Connect with Muneeb for a technical audit</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar Sticky CTA */}
            <div className="lg:col-span-4 space-y-6">
              <div className="sticky top-28 space-y-6">
                {/* Main Action Card */}
                <SpotlightCard className="p-6 rounded-3xl bg-[#0F0B16] border border-[rgba(167,139,250,0.25)] space-y-4 shadow-xl">
                  <div className="w-10 h-10 rounded-xl bg-[#6D28D9]/30 border border-[#8B5CF6]/40 flex items-center justify-center text-[#A78BFA]">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold font-display text-[#EDEAF5]">
                    Need AI Automation or Software Built?
                  </h3>
                  <p className="text-xs text-[#8C8799] leading-relaxed">
                    Cut operational costs by up to 60% with custom software, mobile apps, and LLM/decision automation pipelines built by senior architects.
                  </p>
                  <Button
                    href="/contact"
                    variant="primary"
                    size="md"
                    className="w-full justify-center text-xs"
                    icon={<ArrowUpRight className="w-4 h-4" />}
                  >
                    Book Free Consultation
                  </Button>
                </SpotlightCard>

                {/* Company Details & Live Status Widget */}
                <div className="p-6 rounded-3xl bg-[#0F0B16] border border-[rgba(167,139,250,0.15)] space-y-4 text-xs font-mono">
                  <div className="flex items-center justify-between pb-3 border-b border-[rgba(167,139,250,0.1)]">
                    <span className="text-[#8C8799] uppercase">Company</span>
                    <span className="text-[#EDEAF5] font-semibold">{companyConfig.name}</span>
                  </div>

                  <div className="flex items-center justify-between pb-3 border-b border-[rgba(167,139,250,0.1)]">
                    <span className="text-[#8C8799] uppercase">Status</span>
                    <span className="flex items-center gap-1.5 text-emerald-400">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      <span>Accepting Projects</span>
                    </span>
                  </div>

                  <div className="space-y-2.5 pt-1 text-[#8C8799]">
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-[#A78BFA] shrink-0" />
                      <a href={`mailto:${companyConfig.email}`} className="text-[#EDEAF5] hover:text-[#A78BFA] transition-colors truncate">
                        {companyConfig.email}
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-[#A78BFA] shrink-0" />
                      <a href={`tel:${companyConfig.phone.replace(/\s+/g, "")}`} className="text-[#EDEAF5] hover:text-[#A78BFA] transition-colors">
                        {companyConfig.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-[#A78BFA] shrink-0" />
                      <span>{companyConfig.location}</span>
                    </div>
                  </div>

                  <div className="pt-2">
                    <Link
                      href="/contact"
                      className="block text-center py-2.5 rounded-xl bg-[#15101F] text-[#A78BFA] hover:text-white border border-[rgba(167,139,250,0.2)] hover:border-[#8B5CF6] transition-colors text-xs font-semibold"
                    >
                      Fill Out Consultation Form →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Related Posts Section */}
      {relatedPosts.length > 0 && (
        <Section className="bg-[#0F0B16] border-t border-[rgba(167,139,250,0.12)]">
          <Container size="lg">
            <div className="mb-8 flex items-center justify-between">
              <div>
                <Badge variant="purple" className="mb-2">READ NEXT</Badge>
                <h2 className="text-2xl sm:text-3xl font-bold font-display text-[#EDEAF5]">
                  Related Articles &amp; Insights
                </h2>
              </div>
              <Link
                href="/blog"
                className="hidden sm:inline-flex items-center gap-1.5 text-xs font-mono text-[#A78BFA] hover:text-white transition-colors"
              >
                <span>View all articles</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((relPost) => (
                <Link key={relPost.slug} href={`/blog/${relPost.slug}`}>
                  <SpotlightCard className="group h-full flex flex-col justify-between p-6 rounded-2xl bg-[#07050B] border border-[rgba(167,139,250,0.15)] hover:border-[#8B5CF6] transition-all">
                    <div className="space-y-3">
                      <span className="px-2.5 py-1 rounded-md bg-[#6D28D9]/20 text-[#A78BFA] font-mono text-xs">
                        {relPost.category}
                      </span>
                      <h3 className="text-lg font-bold font-display text-[#EDEAF5] group-hover:text-[#A78BFA] transition-colors leading-snug">
                        {relPost.title}
                      </h3>
                      <p className="text-xs text-[#8C8799] line-clamp-2">
                        {relPost.description}
                      </p>
                    </div>

                    <div className="pt-4 mt-4 border-t border-[rgba(167,139,250,0.08)] flex items-center justify-between text-xs text-[#8C8799]">
                      <span>{relPost.readTime}</span>
                      <span className="text-[#A78BFA] group-hover:translate-x-1 transition-transform">
                        Read →
                      </span>
                    </div>
                  </SpotlightCard>
                </Link>
              ))}
            </div>
          </Container>
        </Section>
      )}
    </div>
  );
}
