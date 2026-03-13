import type { Dictionary } from "@/i18n";

export default function Contact({ dict }: { dict: Dictionary }) {
  return (
    <section id="contact" className="scroll-mt-20 bg-gray-50/50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-16 lg:grid-cols-2">
          {/* Left — Info */}
          <div>
            <span className="mb-2 inline-block text-sm font-semibold tracking-wider text-spice-600 uppercase">
              {dict.contact.sectionLabel}
            </span>
            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              {dict.contact.title}
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-gray-600">
              {dict.contact.subtitle}
            </p>

            {/* Contact cards */}
            <div className="space-y-5">
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-spice-100 text-spice-600">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Email</p>
                  <a href="mailto:spicehubvn@gmail.com" className="text-sm text-spice-600 hover:underline">
                    spicehubvn@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-herb-100 text-herb-600">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">{dict.contact.phone}</p>
                  <a href="tel:+84977043137" className="text-sm text-herb-600 hover:underline">
                    (+84) 0977 043 137
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
            <h3 className="mb-6 text-lg font-bold text-gray-900">
              {dict.contact.formTitle}
            </h3>
            <form
              action={`mailto:spicehubvn@gmail.com`}
              method="POST"
              encType="text/plain"
              className="space-y-5"
            >
              {/* Name */}
              <div>
                <label htmlFor="name" className="mb-1 block text-sm font-medium text-gray-700">
                  {dict.contact.nameLabel}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm text-gray-900 outline-none transition focus:border-spice-400 focus:ring-2 focus:ring-spice-100"
                  placeholder={dict.contact.namePlaceholder}
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm text-gray-900 outline-none transition focus:border-spice-400 focus:ring-2 focus:ring-spice-100"
                  placeholder={dict.contact.emailPlaceholder}
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="mb-1 block text-sm font-medium text-gray-700">
                  {dict.contact.messageLabel}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full resize-none rounded-lg border border-gray-200 px-4 py-2.5 text-sm text-gray-900 outline-none transition focus:border-spice-400 focus:ring-2 focus:ring-spice-100"
                  placeholder={dict.contact.messagePlaceholder}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-xl bg-spice-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-spice-700 hover:shadow-lg"
              >
                {dict.contact.send}
                <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
