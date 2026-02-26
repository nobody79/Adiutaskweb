import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Problem from "@/components/Problem";
import BeforeAfter from "@/components/BeforeAfter";
import HowItWorks from "@/components/HowItWorks";
import ChatDemo from "@/components/ChatDemo";
import Features from "@/components/Features";
import Universities from "@/components/Universities";
import ForWho from "@/components/ForWho";
import Pricing from "@/components/Pricing";
import TrustBadges from "@/components/TrustBadges";
import Waitlist from "@/components/Waitlist";
import FAQ from "@/components/FAQ";
import CTAFinal from "@/components/CTAFinal";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import CookieBanner from "@/components/CookieBanner";

export default function Home() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60] focus:px-4 focus:py-2 focus:bg-primary-600 focus:text-white focus:rounded-lg focus:text-sm focus:font-medium"
      >
        Saltar al contenido principal
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Stats />
        <Problem />
        <BeforeAfter />
        <HowItWorks />
        <ChatDemo />
        <Features />
        <Universities />
        <ForWho />
        <Pricing />
        <TrustBadges />
        <Waitlist />
        <FAQ />
        <CTAFinal />
      </main>
      <Footer />
      <ScrollToTop />
      <CookieBanner />
    </>
  );
}
