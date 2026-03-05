import type { Dictionary } from "@/i18n";

export default function CTA({ dict }: { dict: Dictionary }) {
  return (
    <section
      id="cta"
      className="scroll-mt-20 bg-gradient-to-r from-spice-600 to-spice-700 py-24"
    >
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="mb-4 text-3xl font-extrabold text-white sm:text-4xl">
          {dict.cta.title}
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-spice-100">
          {dict.cta.subtitle}
        </p>
        <a
          href="#"
          className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-3.5 text-sm font-semibold text-spice-700 shadow-lg transition hover:bg-spice-50 hover:shadow-xl"
        >
          {dict.cta.button}
        </a>
        <p className="mt-4 text-sm text-spice-200">{dict.cta.note}</p>
      </div>
    </section>
  );
}
