"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Search, Calendar, Clock, ArrowRight, BookOpen, Tag, Sparkles, User } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { blogPosts, getCategories, BlogPost } from "@/data/blogs";

export default function BlogClient() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = getCategories();

  const featuredPost = blogPosts.find((p) => p.featured) || blogPosts[0];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-24 pb-20">
      {/* Blog Page Hero Header */}
      <section className="py-16 sm:py-24 bg-grid-pattern bg-hero-glow border-b border-[rgba(167,139,250,0.12)] relative overflow-hidden">
        <div className="pointer-events-none absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#6D28D9]/15 blur-3xl rounded-full" />
        <Container size="lg" className="relative z-10">
          <div className="max-w-3xl">
            <Reveal>
              <Badge variant="purple" className="mb-4">
                TYROSOFT INSIGHTS &amp; BLOG
              </Badge>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="text-4xl sm:text-6xl font-bold font-display text-[#EDEAF5] tracking-tight mb-6">
                Engineering Thoughts, <br />
                <span className="text-[#A78BFA]">AI Automation &amp; SEO Strategy</span>
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-lg text-[#8C8799] leading-relaxed">
                Deep dives into modern web engineering, AI workflow automations, custom software architectures, and organic growth strategies for scaling enterprises.
              </p>
            </Reveal>

            {/* Search Input Bar */}
            <Reveal delay={0.3}>
              <div className="mt-8 relative max-w-xl">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#8C8799]" />
                <input
                  type="text"
                  placeholder="Search articles by topic, keyword, or technology..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-[#0F0B16] border border-[rgba(167,139,250,0.2)] text-[#EDEAF5] placeholder-[#8C8799] focus:outline-none focus:border-[#8B5CF6] focus:ring-2 focus:ring-[#8B5CF6]/20 transition-all text-sm shadow-xl"
                />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Main Content Area */}
      <Section className="py-12 sm:py-16">
        <Container size="lg">
          {/* Featured Article Banner (Only shown when not searching) */}
          {!searchQuery && selectedCategory === "All" && featuredPost && (
            <div className="mb-16">
              <Reveal>
                <div className="flex items-center gap-2 mb-4 text-xs font-mono text-[#A78BFA] uppercase tracking-wider">
                  <Sparkles className="w-4 h-4 text-[#8B5CF6]" />
                  <span>Featured Editorial</span>
                </div>
                <Link href={`/blog/${featuredPost.slug}`}>
                  <SpotlightCard className="group relative overflow-hidden border border-[rgba(167,139,250,0.25)] bg-[#0F0B16] p-8 sm:p-10 rounded-3xl hover:border-[#8B5CF6] transition-all">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                      <div className="lg:col-span-8 space-y-4">
                        <div className="flex flex-wrap items-center gap-3">
                          <span className="px-3 py-1 rounded-full text-xs font-medium bg-[#6D28D9]/30 text-[#A78BFA] border border-[rgba(167,139,250,0.3)]">
                            {featuredPost.category}
                          </span>
                          <span className="flex items-center gap-1.5 text-xs text-[#8C8799]">
                            <Calendar className="w-3.5 h-3.5 text-[#8B5CF6]" />
                            {new Date(featuredPost.publishedAt).toLocaleDateString("en-US", {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                            })}
                          </span>
                          <span className="flex items-center gap-1.5 text-xs text-[#8C8799]">
                            <Clock className="w-3.5 h-3.5 text-[#8B5CF6]" />
                            {featuredPost.readTime}
                          </span>
                        </div>

                        <h2 className="text-2xl sm:text-4xl font-bold font-display text-[#EDEAF5] group-hover:text-[#A78BFA] transition-colors leading-tight">
                          {featuredPost.title}
                        </h2>

                        <p className="text-[#8C8799] text-base line-clamp-3 leading-relaxed">
                          {featuredPost.description}
                        </p>

                        <div className="pt-4 flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-[#6D28D9]/40 border border-[rgba(167,139,250,0.3)] flex items-center justify-center text-xs font-bold text-white">
                              {featuredPost.author.name.charAt(0)}
                            </div>
                            <span className="text-xs text-[#8C8799]">
                              {featuredPost.author.name}
                            </span>
                          </div>

                          <div className="inline-flex items-center gap-2 text-sm font-semibold text-[#A78BFA] group-hover:translate-x-1 transition-transform">
                            Read Full Article <ArrowRight className="w-4 h-4" />
                          </div>
                        </div>
                      </div>

                      <div className="lg:col-span-4 hidden lg:block">
                        <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-[#6D28D9]/30 via-[#15101F] to-[#07050B] border border-[rgba(167,139,250,0.2)] p-6 flex flex-col justify-between relative overflow-hidden group-hover:scale-[1.02] transition-transform">
                          <div className="w-12 h-12 rounded-xl bg-[#6D28D9]/40 border border-[#8B5CF6]/40 flex items-center justify-center text-[#A78BFA]">
                            <BookOpen className="w-6 h-6" />
                          </div>
                          <div>
                            <div className="text-xs font-mono text-[#8C8799] uppercase mb-1">
                              Topic Spotlight
                            </div>
                            <div className="text-lg font-bold font-display text-white">
                              {featuredPost.category}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SpotlightCard>
                </Link>
              </Reveal>
            </div>
          )}

          {/* Category Filter Pills */}
          <div className="mb-10 flex flex-wrap items-center justify-between gap-4 border-b border-[rgba(167,139,250,0.12)] pb-6">
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                    selectedCategory === cat
                      ? "bg-[#6D28D9] text-white shadow-[0_0_15px_rgba(109,40,217,0.5)] border border-[#8B5CF6]"
                      : "bg-[#0F0B16] text-[#8C8799] border border-[rgba(167,139,250,0.12)] hover:text-[#EDEAF5] hover:border-[rgba(167,139,250,0.25)]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <span className="text-xs font-mono text-[#8C8799]">
              Showing {filteredPosts.length} {filteredPosts.length === 1 ? "article" : "articles"}
            </span>
          </div>

          {/* Blog Cards Grid */}
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, i) => (
                <Reveal key={post.slug} delay={i * 0.08}>
                  <Link href={`/blog/${post.slug}`}>
                    <SpotlightCard className="group h-full flex flex-col justify-between p-6 rounded-2xl bg-[#0F0B16] border border-[rgba(167,139,250,0.15)] hover:border-[#8B5CF6]/60 transition-all duration-300">
                      <div className="space-y-4">
                        {/* Category & Read time */}
                        <div className="flex items-center justify-between text-xs">
                          <span className="px-2.5 py-1 rounded-md bg-[#6D28D9]/20 text-[#A78BFA] font-mono border border-[rgba(167,139,250,0.2)]">
                            {post.category}
                          </span>
                          <span className="flex items-center gap-1 text-[#8C8799]">
                            <Clock className="w-3 h-3 text-[#8B5CF6]" />
                            {post.readTime}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="text-xl font-bold font-display text-[#EDEAF5] group-hover:text-[#A78BFA] transition-colors leading-snug">
                          {post.title}
                        </h3>

                        {/* Description */}
                        <p className="text-sm text-[#8C8799] line-clamp-3 leading-relaxed">
                          {post.description}
                        </p>
                      </div>

                      <div className="pt-6 mt-6 border-t border-[rgba(167,139,250,0.08)] flex items-center justify-between text-xs text-[#8C8799]">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-[#8B5CF6]" />
                          {new Date(post.publishedAt).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </span>
                        <span className="inline-flex items-center gap-1 text-[#A78BFA] font-medium group-hover:translate-x-1 transition-transform">
                          Read Post <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </SpotlightCard>
                  </Link>
                </Reveal>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-[#0F0B16] rounded-3xl border border-[rgba(167,139,250,0.15)] p-8">
              <BookOpen className="w-12 h-12 text-[#8C8799] mx-auto mb-4 opacity-50" />
              <h3 className="text-xl font-bold text-[#EDEAF5] mb-2">No articles found</h3>
              <p className="text-sm text-[#8C8799] max-w-md mx-auto mb-6">
                We couldn&apos;t find any articles matching &quot;{searchQuery}&quot;. Try selecting another category or clear your search keyword.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                }}
                className="px-5 py-2.5 rounded-xl bg-[#6D28D9] text-white text-xs font-semibold hover:bg-[#7C3AED] transition-colors"
              >
                Clear Search &amp; Filters
              </button>
            </div>
          )}
        </Container>
      </Section>
    </div>
  );
}
