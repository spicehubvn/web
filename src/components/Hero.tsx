import type { Dictionary } from "@/i18n";

export default function Hero({ dict }: { dict: Dictionary }) {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 lg:pt-44 lg:pb-32">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-spice-100/60 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-herb-100/50 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-spice-200 bg-spice-50 px-4 py-1.5 text-sm font-medium text-spice-700">
            {dict.hero.badge}
          </div>

          {/* Heading */}
          <h1 className="mb-6 text-4xl leading-tight font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            {dict.hero.title}{" "}
            <span className="bg-gradient-to-r from-spice-500 to-spice-700 bg-clip-text text-transparent">
              {dict.hero.titleHighlight}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-gray-600">
            {dict.hero.subtitle}
          </p>

          {/* CTAs */}
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="#features"
              className="inline-flex items-center justify-center rounded-xl bg-spice-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-spice-500/25 transition hover:bg-spice-700 hover:shadow-xl"
            >
              {dict.hero.cta}
              <svg
                className="ml-2 h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center rounded-xl border border-gray-200 bg-white px-8 py-3.5 text-sm font-semibold text-gray-700 transition hover:border-gray-300 hover:bg-gray-50"
            >
              {dict.hero.ctaSecondary}
            </a>
          </div>
        </div>

        {/* Decorative spice icons */}
        <div className="mt-16 flex justify-center gap-8 text-4xl opacity-60 sm:text-5xl">
          <span className="animate-bounce" style={{ animationDelay: "0s" }}>
            🌶️
          </span>
          <span
            className="animate-bounce"
            style={{ animationDelay: "0.15s" }}
          >
            🧄
          </span>
          <span className="animate-bounce" style={{ animationDelay: "0.3s" }}>
            🫚
          </span>
          <span
            className="animate-bounce"
            style={{ animationDelay: "0.45s" }}
          >
            🌿
          </span>
          <span className="animate-bounce" style={{ animationDelay: "0.6s" }}>
            🍋
          </span>
          <span
            className="animate-bounce"
            style={{ animationDelay: "0.75s" }}
          >
            🧅
          </span>
        </div>
      </div>
    </section>
  );
}
