import type { Dictionary } from "@/i18n";

export default function About({ dict }: { dict: Dictionary }) {
  return (
    <section id="about" className="scroll-mt-20 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Text */}
          <div>
            <span className="mb-2 inline-block text-sm font-semibold tracking-wider text-herb-600 uppercase">
              {dict.about.sectionLabel}
            </span>
            <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              {dict.about.title}
            </h2>
            <p className="text-lg leading-relaxed text-gray-600">
              {dict.about.description}
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            {dict.about.stats.map((stat, i) => (
              <div
                key={i}
                className="rounded-2xl border border-gray-100 bg-gradient-to-br from-white to-gray-50 p-8 text-center shadow-sm"
              >
                <div className="mb-1 text-3xl font-extrabold text-spice-600 sm:text-4xl">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-gray-500">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
