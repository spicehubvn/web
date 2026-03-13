import Script from "next/script";
import type { Metadata } from "next";
import { locales, getDictionary, type Locale } from "@/i18n";
import "@/app/globals.css";

const GA_ID = "G-WLRKLHZMM8";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(locale as Locale);
  return {
    title: dict.metadata.title,
    description: dict.metadata.description,
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <html lang={locale} className="scroll-smooth">
      <head>
        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
        <link rel="icon" href={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/favicon.svg`} type="image/svg+xml" />
        <link rel="icon" href={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/favicon.png`} type="image/png" sizes="192x192" />
        <link rel="apple-touch-icon" href={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/favicon.png`} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-white text-gray-900 antialiased">{children}</body>
    </html>
  );
}
