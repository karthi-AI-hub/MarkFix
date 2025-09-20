import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";
import HeroSection from "@/components/hero-section";
import ServicesOverview from "@/components/services-overview";
import ProductsOverview from "@/components/products-overview";
import Testimonials from "@/components/testimonials";
import ResultsShowcase from "@/components/results-showcase";
import FAQ from "@/components/faq";
import Newsletter from "@/components/newsletter";
import ScrollToTop from "@/components/scroll-to-top";
import LiveChat from "@/components/live-chat";
import CookieConsent from "@/components/cookie-consent";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <ServicesOverview />
        <ProductsOverview />
        <ResultsShowcase />
        <Testimonials />
        <FAQ />
        <Newsletter />
      </main>
      <Footer />
      <ScrollToTop />
      <LiveChat />
      <CookieConsent />
    </div>
  );
};

export default Index;
