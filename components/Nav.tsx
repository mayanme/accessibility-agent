"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { brand, nav } from "@/content/copy";

export function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl border-b border-slate-200/80 shadow-sm"
          : "bg-transparent border-b border-transparent"
      }`}
      aria-label="Main navigation"
    >
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <span
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-indigo-600 via-purple-600 to-teal-500 shadow-md"
              aria-hidden
            >
              <span className="text-white font-bold text-sm">A</span>
            </span>
            <span
              className={`text-lg font-semibold transition-colors ${
                scrolled ? "text-slate-900" : "text-slate-900"
              }`}
            >
              {brand.startupName}
            </span>
          </Link>

          <div className="hidden md:flex md:items-center md:gap-8">
            <a
              href="#problem"
              className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
            >
              {nav.problem}
            </a>
            <a
              href="#problems"
              className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
            >
              {nav.solution}
            </a>
            <a
              href="#how-it-works"
              className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
            >
              {nav.howItWorks}
            </a>
            <a href="#waitlist">
              <Button variant="gradient" size="sm">
                {nav.earlyAccess}
              </Button>
            </a>
          </div>

          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <span className="sr-only">{mobileOpen ? "Close menu" : "Open menu"}</span>
            {mobileOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {mobileOpen && (
          <div
            id="mobile-menu"
            className="md:hidden border-t border-slate-200 py-4 space-y-4"
          >
            <a href="#problem" className="block text-slate-600 hover:text-slate-900" onClick={() => setMobileOpen(false)}>
              {nav.problem}
            </a>
            <a href="#problems" className="block text-slate-600 hover:text-slate-900" onClick={() => setMobileOpen(false)}>
              {nav.solution}
            </a>
            <a href="#how-it-works" className="block text-slate-600 hover:text-slate-900" onClick={() => setMobileOpen(false)}>
              {nav.howItWorks}
            </a>
            <a href="#waitlist" onClick={() => setMobileOpen(false)}>
              <Button variant="gradient" size="md" className="w-full">
                {nav.earlyAccess}
              </Button>
            </a>
          </div>
        )}
      </Container>
    </nav>
  );
}
