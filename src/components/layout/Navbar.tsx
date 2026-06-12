"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";

const NAV_LINKS = [
  { href: "/#funktionen", label: "Funktionen" },
  { href: "/#demo", label: "Demo" },
  { href: "/#so-funktionierts", label: "So funktioniert's" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-3 pt-3">
      <div
        className={`max-w-5xl mx-auto rounded-full px-4 sm:px-6 transition-all duration-300 border ${
          isScrolled || isMobileMenuOpen
            ? "bg-cream-50/85 backdrop-blur-xl border-line shadow-soft"
            : "bg-transparent border-transparent"
        }`}
      >
        <div className="flex items-center justify-between h-14">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.svg" alt="Clawsistent" width={32} height={32} />
            <span className="text-lg font-bold tracking-tight text-ink-900">Clawsistent</span>
          </Link>

          <div className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-ink-600 hover:text-ink-900 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <Button href="/start" size="sm">
              Jetzt starten
            </Button>
          </div>

          <button
            className="md:hidden p-2 text-ink-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menü öffnen"
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden max-w-5xl mx-auto mt-2 rounded-3xl bg-cream-50/95 backdrop-blur-xl border border-line shadow-soft overflow-hidden">
          <div className="px-5 py-4 space-y-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block py-2.5 font-semibold text-ink-700"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2" onClick={() => setIsMobileMenuOpen(false)}>
              <Button href="/start" className="w-full">
                Jetzt starten
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
