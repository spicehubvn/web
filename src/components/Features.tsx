import type { Dictionary } from "@/i18n";

export default function Features({ dict }: { dict: Dictionary }) {
  return (
    <section id="features" className="scroll-mt-20 bg-gray-50/50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="mb-2 inline-block text-sm font-semibold tracking-wider text-spice-600 uppercase">
            {dict.features.sectionLabel}
          </span>
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {dict.features.title}
          </h2>
          <p className="text-lg text-gray-600">{dict.features.subtitle}</p>
        </div>

        {/* Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {dict.features.items.map((item, i) => (
            <div
              key={i}
              className="group rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition hover:border-spice-200 hover:shadow-md"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-spice-50 text-2xl transition group-hover:scale-110">
                {item.icon}
              </div>
              <h3 className="mb-2 text-lg font-bold text-gray-900">
                {item.title}
              </h3>
              <p className="leading-relaxed text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
