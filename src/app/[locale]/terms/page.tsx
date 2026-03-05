import { getDictionary, type Locale } from "@/i18n";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default async function TermsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = getDictionary(locale as Locale);

  return (
    <>
      <Header dict={dict} locale={locale as Locale} />
      <main className="pt-28 pb-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="mb-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {dict.terms.title}
          </h1>
          <p className="mb-10 text-sm text-gray-500">
            {dict.terms.lastUpdated}
          </p>
          <div className="space-y-8">
            {dict.terms.sections.map((section, i) => (
              <div key={i}>
                <h2 className="mb-3 text-xl font-bold text-gray-900">
                  {section.title}
                </h2>
                <p className="leading-relaxed text-gray-600">
                  {section.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer dict={dict} locale={locale as Locale} />
    </>
  );
}
