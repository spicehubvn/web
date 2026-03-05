import vi from "./vi.json";
import en from "./en.json";

export const locales = ["vi", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "vi";

const dictionaries: Record<Locale, typeof vi> = { vi, en };

export function getDictionary(locale: Locale) {
  return dictionaries[locale] ?? dictionaries[defaultLocale];
}

export type Dictionary = ReturnType<typeof getDictionary>;
