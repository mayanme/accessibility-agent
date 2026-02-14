"use client";

import { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { brand, nav } from "@/content/copy";

export function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav
      className="sticky top-0 z-50 border-b border-border bg-surface/95 backdrop-blur supports-[backdrop-filter]:bg-surface/80"
      aria-label="Main navigation"
    >
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="text-lg font-semibold text-slate-900 hover:text-accent transition-colors"
          >
            {brand.startupName}
          </Link>

          <div className="hidden md:flex md:items-center md:gap-8">
            <a
              href="#how-it-works"
              className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
            >
              {nav.howItWorks}
            </a>
            <a
              href="#problems"
              className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
            >
              {nav.problems}
            </a>
            <a href="#waitlist">
              <Button size="sm">{nav.earlyAccess}</Button>
            </a>
          </div>

          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-slate-600 hover:bg-surface-subtle hover:text-slate-900"
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
            className="md:hidden border-t border-border py-4 space-y-4"
          >
            <a
              href="#how-it-works"
              className="block text-slate-600 hover:text-slate-900"
              onClick={() => setMobileOpen(false)}
            >
              {nav.howItWorks}
            </a>
            <a
              href="#problems"
              className="block text-slate-600 hover:text-slate-900"
              onClick={() => setMobileOpen(false)}
            >
              {nav.problems}
            </a>
            <a href="#waitlist" onClick={() => setMobileOpen(false)}>
              <Button variant="primary" size="md" className="w-full">
                {nav.earlyAccess}
              </Button>
            </a>
          </div>
        )}
      </Container>
    </nav>
  );
}
