"use client";

import { useState } from "react";
import type { Dictionary, Locale } from "@/i18n";
import { locales } from "@/i18n";
import LanguageSwitcher from "./LanguageSwitcher";
import Logo from "./Logo";

export default function Header({
  dict,
  locale,
}: {
  dict: Dictionary;
  locale: Locale;
}) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  const navItems = [
    { label: dict.nav.home, href: `${basePath}/${locale}/` },
    { label: dict.nav.features, href: "#features" },
    { label: dict.nav.about, href: "#about" },
    { label: dict.nav.contact, href: "#contact" },
  ];

  return (
    <header className="fixed top-0 right-0 left-0 z-50 border-b border-white/10 bg-white/80 backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a
          href={`${basePath}/${locale}/`}
          className="flex items-center gap-2 text-xl font-extrabold tracking-tight"
        >
          <Logo size="sm" />
          <span className="text-red-600">Spice</span>
          <span className="-ml-1 text-green-700">Hub</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-gray-600 transition hover:text-spice-600"
            >
              {item.label}
            </a>
          ))}
          <LanguageSwitcher locale={locale} />
        </nav>

        {/* Mobile Toggle */}
        <button
          aria-label="Toggle menu"
          className="text-gray-600 md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? (
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <nav className="border-t border-gray-100 bg-white px-4 pb-4 md:hidden">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="block py-3 text-sm font-medium text-gray-600 transition hover:text-spice-600"
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <div className="pt-2">
            <LanguageSwitcher locale={locale} />
          </div>
        </nav>
      )}
    </header>
  );
}
