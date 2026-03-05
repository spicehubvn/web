import type { Dictionary, Locale } from "@/i18n";
import Logo from "./Logo";

export default function Footer({
  dict,
  locale,
}: {
  dict: Dictionary;
  locale: Locale;
}) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  return (
    <footer className="border-t border-gray-100 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a
              href={`${basePath}/${locale}/`}
              className="mb-4 inline-flex items-center gap-2 text-lg font-extrabold"
            >
              <Logo size="sm" />
              <span className="text-red-600">Spice</span>
              <span className="-ml-1 text-green-700">Hub</span>
            </a>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-gray-500">
              {dict.footer.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold tracking-wider text-gray-900 uppercase">
              {dict.footer.quickLinks}
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={`${basePath}/${locale}/`}
                  className="text-gray-500 transition hover:text-spice-600"
                >
                  {dict.nav.home}
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  className="text-gray-500 transition hover:text-spice-600"
                >
                  {dict.nav.features}
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-500 transition hover:text-spice-600"
                >
                  {dict.nav.about}
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="mb-4 text-sm font-semibold tracking-wider text-gray-900 uppercase">
              {dict.footer.legal}
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={`${basePath}/${locale}/privacy/`}
                  className="text-gray-500 transition hover:text-spice-600"
                >
                  {dict.footer.privacy}
                </a>
              </li>
              <li>
                <a
                  href={`${basePath}/${locale}/terms/`}
                  className="text-gray-500 transition hover:text-spice-600"
                >
                  {dict.footer.terms}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-4 text-sm font-semibold tracking-wider text-gray-900 uppercase">
              {dict.footer.contact}
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="mailto:spicehubvn@gmail.com"
                  className="text-gray-500 transition hover:text-spice-600"
                >
                  spicehubvn@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+84945614800"
                  className="text-gray-500 transition hover:text-spice-600"
                >
                  (+84) 0945 614 800
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-center text-sm text-gray-400">
            {dict.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
