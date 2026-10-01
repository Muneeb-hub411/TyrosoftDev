import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Calendar,
  Clock,
  ArrowLeft,
  Share2,
  Bookmark,
  User,
  Sparkles,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { Button } from "@/components/ui/Button";
import { blogPosts, getBlogPostBySlug } from "@/data/blogs";

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
    title: post.title,
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
  };

  // Basic HTML formatter for markdown sections in content
  const formatContent = (content: string) => {
    const lines = content.trim().split("\n");
    let html: React.ReactNode[] = [];
    let inTable = false;
    let tableRows: string[][] = [];

    lines.forEach((line, index) => {
      const trimmed = line.trim();

      if (trimmed.startsWith("## ")) {
        html.push(
          <h2
            key={index}
            className="text-2xl sm:text-3xl font-bold font-display text-[#EDEAF5] mt-10 mb-4 tracking-tight"
          >
            {trimmed.replace("## ", "")}
          </h2>
        );
      } else if (trimmed.startsWith("### ")) {
        html.push(
          <h3
            key={index}
            className="text-xl sm:text-2xl font-bold font-display text-[#A78BFA] mt-8 mb-3 tracking-tight"
          >
            {trimmed.replace("### ", "")}
          </h3>
        );
      } else if (trimmed.startsWith("#### ")) {
        html.push(
          <h4
            key={index}
            className="text-lg font-bold font-display text-[#EDEAF5] mt-6 mb-2"
          >
            {trimmed.replace("#### ", "")}
          </h4>
        );
      } else if (trimmed.startsWith("> ")) {
        html.push(
          <blockquote
            key={index}
            className="border-l-4 border-[#8B5CF6] pl-4 py-2 my-6 italic text-[#EDEAF5] bg-[#0F0B16] rounded-r-xl text-base sm:text-lg"
          >
            {trimmed.replace("> ", "").replace(/"/g, "")}
          </blockquote>
        );
      } else if (trimmed.startsWith("- ")) {
        html.push(
          <li key={index} className="ml-6 list-disc text-[#8C8799] my-1 text-base leading-relaxed">
            {trimmed.replace("- ", "")}
          </li>
        );
      } else if (trimmed.startsWith("1. ") || trimmed.startsWith("2. ") || trimmed.startsWith("3. ") || trimmed.startsWith("4. ")) {
        html.push(
          <div key={index} className="flex items-start gap-3 my-2 text-base text-[#8C8799]">
            <CheckCircle2 className="w-5 h-5 text-[#8B5CF6] shrink-0 mt-0.5" />
            <span>{trimmed.replace(/^\d+\.\s*/, "")}</span>
          </div>
        );
      } else if (trimmed === "---") {
        html.push(
          <hr
            key={index}
            className="my-8 border-t border-[rgba(167,139,250,0.12)]"
          />
        );
      } else if (trimmed.length > 0) {
        // Handle bolding formatting if present
        html.push(
          <p
            key={index}
            className="text-base sm:text-lg text-[#8C8799] leading-relaxed my-4"
          >
            {trimmed}
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

              {/* Tags & Footer Share */}
              <div className="mt-12 pt-8 border-t border-[rgba(167,139,250,0.12)] flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono text-[#8C8799]">TAGS:</span>
                  {post.tags.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-full bg-[#0F0B16] text-xs font-mono text-[#A78BFA] border border-[rgba(167,139,250,0.15)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Author Bio Box */}
              <div className="mt-10 p-6 sm:p-8 rounded-3xl bg-[#0F0B16] border border-[rgba(167,139,250,0.18)] flex items-start gap-5">
                <div className="w-12 h-12 rounded-2xl bg-[#6D28D9]/40 border border-[#8B5CF6]/50 flex items-center justify-center font-bold text-white text-lg shrink-0">
                  {post.author.name.charAt(0)}
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold font-display text-[#EDEAF5]">
                    Written by {post.author.name}
                  </h3>
                  <p className="text-sm text-[#8C8799] leading-relaxed">
                    Senior practitioner specializing in scalable custom software engineering, Next.js web applications, mobile architectures, and AI workflow optimization.
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar Sticky CTA */}
            <div className="lg:col-span-4 space-y-8">
              <div className="sticky top-28 space-y-6">
                <SpotlightCard className="p-6 rounded-3xl bg-[#0F0B16] border border-[rgba(167,139,250,0.25)] space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-[#6D28D9]/30 border border-[#8B5CF6]/40 flex items-center justify-center text-[#A78BFA]">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold font-display text-[#EDEAF5]">
                    Need Software or AI Automation Built?
                  </h3>
                  <p className="text-sm text-[#8C8799] leading-relaxed">
                    Cut operational costs by up to 60% with custom software, mobile apps, and LLM automation pipelines built by senior architects.
                  </p>
                  <Button
                    href="/contact"
                    variant="primary"
                    size="md"
                    className="w-full justify-center"
                    icon={<ArrowUpRight className="w-4 h-4" />}
                  >
                    Book Free Consultation
                  </Button>
                </SpotlightCard>
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
