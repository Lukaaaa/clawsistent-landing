"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-lg shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.svg" alt="Clawsistent" width={36} height={36} />
            <span className="text-xl font-bold text-navy-900">Clawsistent</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <a href="#demo" className="text-navy-600 hover:text-navy-900 transition-colors">Demo</a>
            <a href="#anwendungen" className="text-navy-600 hover:text-navy-900 transition-colors">Anwendungen</a>
            <a href="#funktionen" className="text-navy-600 hover:text-navy-900 transition-colors">Funktionen</a>
            <a href="#preise" className="text-navy-600 hover:text-navy-900 transition-colors">Preise</a>
            <Button href="/voranmelden" size="sm">Voranmelden</Button>
          </div>

          <button
            className="md:hidden p-2 text-navy-600"
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
        <div className="md:hidden bg-white border-t border-navy-100">
          <div className="px-4 py-4 space-y-3">
            <a href="#demo" className="block py-2 text-navy-600" onClick={() => setIsMobileMenuOpen(false)}>Demo</a>
            <a href="#anwendungen" className="block py-2 text-navy-600" onClick={() => setIsMobileMenuOpen(false)}>Anwendungen</a>
            <a href="#funktionen" className="block py-2 text-navy-600" onClick={() => setIsMobileMenuOpen(false)}>Funktionen</a>
            <a href="#preise" className="block py-2 text-navy-600" onClick={() => setIsMobileMenuOpen(false)}>Preise</a>
            <Button href="/voranmelden" className="w-full">Voranmelden</Button>
          </div>
        </div>
      )}
    </nav>
  );
}
