import { getDictionary, type Locale } from "@/i18n";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import About from "@/components/About";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import ChatWidget from "@/components/ChatWidget";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = getDictionary(locale as Locale);

  return (
    <>
      <Header dict={dict} locale={locale as Locale} />
      <main>
        <Hero dict={dict} />
        <Features dict={dict} />
        <About dict={dict} />
        <Contact dict={dict} />
        <CTA dict={dict} />
      </main>
      <Footer dict={dict} locale={locale as Locale} />
      <ScrollToTop />
      <ChatWidget dict={dict} />
    </>
  );
}
