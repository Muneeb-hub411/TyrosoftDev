"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Work", href: "/work" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#07050B]/90 backdrop-blur-md border-b border-[rgba(167,139,250,0.12)] py-2.5 shadow-2xl"
          : "bg-transparent py-4"
      }`}
    >
      <Container size="lg">
        <div className="flex items-center justify-between">
          {/* User's Custom Brand Logo */}
          <Link
            href="/"
            className="group flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6] rounded-xl p-1"
          >
            <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-[rgba(167,139,250,0.2)] shadow-md group-hover:border-[#8B5CF6] transition-colors shrink-0">
              <Image
                src="/logo.png"
                alt="Tyrosoft Dev Logo"
                fill
                priority
                className="object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-base sm:text-lg text-[#EDEAF5] tracking-wider leading-none">
                TYROSOFT<span className="text-[#A78BFA]">DEV</span>
              </span>
              <span className="text-[10px] font-mono text-[#8C8799] tracking-widest uppercase mt-0.5">
                COMPANY
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 rounded-full bg-[#0F0B16]/80 px-4 py-1.5 border border-[rgba(167,139,250,0.12)] backdrop-blur-sm">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-1.5 text-sm font-medium transition-colors duration-200 rounded-full ${
                    isActive
                      ? "text-white font-semibold"
                      : "text-[#8C8799] hover:text-[#EDEAF5]"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-[#8B5CF6] rounded-full shadow-[0_0_8px_#8B5CF6]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Primary Action Button */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              href="/contact"
              variant="primary"
              size="sm"
              icon={<ArrowUpRight className="w-4 h-4" />}
            >
              Book Free Consultation
            </Button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="md:hidden p-2.5 rounded-xl bg-[#0F0B16] border border-[rgba(167,139,250,0.15)] text-[#EDEAF5] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6]"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pt-4 pb-6 px-4 rounded-2xl bg-[#0F0B16] border border-[rgba(167,139,250,0.18)] shadow-2xl flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-3 text-base rounded-xl transition-colors ${
                      isActive
                        ? "bg-[#6D28D9]/20 text-white font-semibold border border-[rgba(167,139,250,0.3)]"
                        : "text-[#8C8799] hover:text-[#EDEAF5] hover:bg-[#15101F]"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
            <div className="pt-2 border-t border-[rgba(167,139,250,0.1)]">
              <Button
                href="/contact"
                variant="primary"
                size="md"
                className="w-full"
                onClick={() => setMobileMenuOpen(false)}
                icon={<ArrowUpRight className="w-4 h-4" />}
              >
                Book Free Consultation
              </Button>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}
