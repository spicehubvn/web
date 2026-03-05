/**
 * Generate sitemap.xml & robots.txt into out/ after build.
 *
 * Env vars:
 *   SITE_URL – full origin, e.g. https://spicehubvn.com
 *   NEXT_PUBLIC_BASE_PATH – e.g. /web  (or empty)
 */
import { writeFileSync } from "fs";
import { resolve } from "path";

const SITE_URL = process.env.SITE_URL || "https://spicehubvn.com";
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";
const BASE = `${SITE_URL}${BASE_PATH}`;

const locales = ["en", "vi"];
const pages = [
  { path: "", changefreq: "weekly", priority: "1.0" },
  { path: "privacy", changefreq: "monthly", priority: "0.5" },
  { path: "terms", changefreq: "monthly", priority: "0.5" },
];

/* ── sitemap.xml ── */
const urls = locales.flatMap((locale) =>
  pages.map(
    (p) => `  <url>
    <loc>${BASE}/${locale}/${p.path ? p.path + "/" : ""}</loc>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`
  )
);

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("\n")}
</urlset>
`;

/* ── robots.txt ── */
const robots = `User-agent: *
Allow: /

Sitemap: ${BASE}/sitemap.xml
`;

/* ── Write into out/ ── */
const outDir = resolve(process.cwd(), "out");
writeFileSync(resolve(outDir, "sitemap.xml"), sitemap);
writeFileSync(resolve(outDir, "robots.txt"), robots);

console.log(`✓ sitemap.xml → ${BASE} (${urls.length} URLs)`);
console.log(`✓ robots.txt  → Sitemap: ${BASE}/sitemap.xml`);
