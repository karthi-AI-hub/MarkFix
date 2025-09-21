import { useEffect } from "react";
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
import SEOHead from "@/components/seo/SEOHead";
import LeadCaptureSystem from "@/components/lead-capture/LeadCaptureSystem";
import { VisitorTracker } from "@/components/lead-capture/VisitorTracker";
import { organizationSchema, serviceSchema } from "@/components/seo/StructuredData";

const Index = () => {
  useEffect(() => {
    VisitorTracker.getInstance();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="MarkFix - Top Digital Marketing Agency India | Freelancing Jobs | Influencer Marketing"
        description="MarkFix: India's leading digital marketing agency offering freelancing jobs, influencer marketing, social media automation tools, SEO services & personal branding. Connect with top freelancers & influencers."
        keywords="markfix, digital marketing agency India, freelancing jobs, influencer marketing platform, social media automation, Instagram automation, Facebook automation, LinkedIn automation, WhatsApp automation, SEO services India, digital marketing freelancers, personal branding services, content marketing agency"
        canonicalUrl="https://markfix.in/"
        structuredData={[organizationSchema, serviceSchema]}
      />
      
      <header>
        <Navigation />
      </header>
      
      <main>
        {/* Hero Section with primary keywords */}
        <section aria-label="MarkFix Digital Marketing Agency - Freelancing and Influencer Platform">
          <HeroSection />
        </section>
        
        {/* Services Section for digital marketing keywords */}
        <section aria-label="Digital Marketing Services">
          <ServicesOverview />
        </section>
        
        {/* Products Section for automation keywords */}
        <section aria-label="Social Media Automation Products">
          <ProductsOverview />
        </section>
        
        {/* Results Section for credibility */}
        <section aria-label="Digital Marketing Results and Success Stories">
          <ResultsShowcase />
        </section>
        
        {/* Testimonials Section for social proof */}
        <section aria-label="Client Testimonials and Reviews">
          <Testimonials />
        </section>
        
        {/* FAQ Section for long-tail keywords */}
        <section aria-label="Frequently Asked Questions about Digital Marketing Services">
          <FAQ />
        </section>
        
        {/* Newsletter Section for engagement */}
        <section aria-label="Subscribe to MarkFix Newsletter">
          <Newsletter />
        </section>

        {/* SEO Content Section for additional keywords */}
        <section className="py-16 bg-gradient-subtle" aria-label="About MarkFix Digital Marketing Agency">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Choose MarkFix for Digital Marketing, Freelancing & Influencer Partnerships?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left mt-12">
                <div className="bg-card p-6 rounded-lg border border-border/50">
                  <h3 className="text-xl font-semibold mb-3">Top Digital Marketing Freelancers</h3>
                  <p className="text-muted-foreground">
                    Connect with India's best digital marketing freelancers specializing in SEO, social media marketing, content creation, and marketing automation. Find freelancing jobs that match your expertise.
                  </p>
                </div>
                <div className="bg-card p-6 rounded-lg border border-border/50">
                  <h3 className="text-xl font-semibold mb-3">Influencer Marketing Platform</h3>
                  <p className="text-muted-foreground">
                    Partner with top influencers across Instagram, Facebook, LinkedIn, and other platforms. Our influencer marketing platform connects brands with authentic content creators for maximum reach.
                  </p>
                </div>
                <div className="bg-card p-6 rounded-lg border border-border/50">
                  <h3 className="text-xl font-semibold mb-3">Social Media Automation Tools</h3>
                  <p className="text-muted-foreground">
                    Automate your Instagram, Facebook, LinkedIn, and WhatsApp marketing with our AI-powered automation tools. Save time while increasing engagement and growing your social media presence.
                  </p>
                </div>
                <div className="bg-card p-6 rounded-lg border border-border/50">
                  <h3 className="text-xl font-semibold mb-3">Professional SEO Services</h3>
                  <p className="text-muted-foreground">
                    Boost your search engine rankings with our comprehensive SEO services. From keyword research to technical optimization, we help businesses achieve top rankings on Google and other search engines.
                  </p>
                </div>
                <div className="bg-card p-6 rounded-lg border border-border/50">
                  <h3 className="text-xl font-semibold mb-3">Personal Branding Services</h3>
                  <p className="text-muted-foreground">
                    Build a powerful personal brand that stands out in your industry. Our personal branding services help entrepreneurs, freelancers, and professionals establish their digital authority.
                  </p>
                </div>
                <div className="bg-card p-6 rounded-lg border border-border/50">
                  <h3 className="text-xl font-semibold mb-3">Content Marketing Agency</h3>
                  <p className="text-muted-foreground">
                    Create engaging content that drives results. Our content marketing team specializes in blog writing, video production, social media content, and content strategy development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <Footer />
      </footer>
      
      <ScrollToTop />
      <LiveChat />
      <CookieConsent />
      <LeadCaptureSystem />
    </div>
  );
};

export default Index;
