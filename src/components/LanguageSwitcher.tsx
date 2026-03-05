"use client";

import type { Locale } from "@/i18n";
import { locales } from "@/i18n";
import { usePathname } from "next/navigation";

const labels: Record<Locale, string> = {
  vi: "🇻🇳 VI",
  en: "🇬🇧 EN",
};

export default function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  function switchPath(newLocale: Locale) {
    // Remove basePath prefix if present
    let path = pathname;
    if (basePath && path.startsWith(basePath)) {
      path = path.slice(basePath.length);
    }
    // Replace locale segment
    const segments = path.split("/");
    segments[1] = newLocale;
    return basePath + segments.join("/");
  }

  return (
    <div className="flex items-center gap-1 rounded-full bg-gray-100 p-1">
      {locales.map((l) => (
        <a
          key={l}
          href={switchPath(l)}
          className={`rounded-full px-3 py-1 text-xs font-semibold transition ${
            l === locale
              ? "bg-white text-spice-600 shadow-sm"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          {labels[l]}
        </a>
      ))}
    </div>
  );
}
