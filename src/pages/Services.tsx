import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";
import ScrollToTop from "@/components/scroll-to-top";
import PricingSection from "@/components/pricing-section";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, User, TrendingUp, PenTool, Share2, Search, Palette, CheckCircle, Star } from "lucide-react";
import SEOHead from "@/components/seo/SEOHead";
import { serviceSchema, freelancingJobSchema } from "@/components/seo/StructuredData";

const Services = () => {
  const servicePricingPlans = [
    {
      name: "Starter",
      price: "xxx",
      period: "month",
      description: "Perfect for small businesses starting their digital journey",
      features: [
        "Social Media Management (2 platforms)",
        "Basic SEO Optimization",
        "Content Creation (8 posts/month)",
        "Monthly Performance Report",
        "Email Support",
        "Basic Brand Guidelines"
      ],
      cta: "Start Growing",
      badge: "Best Value"
    },
    {
      name: "Professional",
      price: "xxx",
      period: "month",
      description: "Comprehensive solution for growing businesses",
      features: [
        "Social Media Management (4 platforms)",
        "Advanced SEO & Content Marketing",
        "Content Creation (20 posts/month)",
        "Weekly Performance Reports",
        "Priority Support & Strategy Calls",
        "Complete Brand Identity Package",
        "Google Ads Management",
        "Competitor Analysis"
      ],
      popular: true,
      cta: "Go Professional",
    },
    {
      name: "Enterprise",
      price: "xxx",
      period: "month",
      description: "Full-scale digital marketing for established businesses",
      features: [
        "Unlimited Social Media Management",
        "Full SEO & Content Strategy",
        "Daily Content Creation & Curation",
        "Real-time Analytics Dashboard",
        "Dedicated Account Manager",
        "Complete Rebranding Services",
        "Multi-channel Ad Management",
        "Influencer Collaboration",
        "Custom Automation Tools"
      ],
      cta: "Scale Your Business",
      badge: "Most Popular"
    }
  ];

  const services = [
    {
      icon: User,
      title: "Personal Branding & Freelancer Development",
      description: "Build a powerful personal brand that attracts freelancing opportunities and establishes your authority in digital marketing.",
      features: ["Freelancer Profile Optimization", "Personal Brand Strategy", "LinkedIn Profile Enhancement", "Portfolio Development"],
      popular: false,
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing Strategy & Freelancing",
      description: "Comprehensive digital marketing strategies with access to top freelancers for implementation and scaling.",
      features: ["Freelancer Network Access", "Digital Strategy Development", "Campaign Management", "Performance Analytics"],
      popular: true,
    },
    {
      icon: PenTool,
      title: "Content Marketing & Creator Network",
      description: "Create engaging content with our network of freelance content creators and marketing specialists.",
      features: ["Freelance Content Writers", "Video Production Network", "Content Strategy", "Multi-platform Distribution"],
      popular: false,
    },
    {
      icon: Share2,
      title: "Social Media Marketing & Influencer Partnerships",
      description: "Maximize your social media presence with influencer collaborations and expert freelance social media managers.",
      features: ["Influencer Matchmaking", "Campaign Management", "Freelance Social Media Managers", "Performance Tracking"],
      popular: false,
    },
    {
      icon: Search,
      title: "SEO Services & Freelance SEO Experts",
      description: "Improve your search engine rankings with our team of certified freelance SEO specialists and proven strategies.",
      features: ["Freelance SEO Consultants", "Technical SEO Audit", "Content Optimization", "Local SEO Services"],
      popular: false,
    },
    {
      icon: Palette,
      title: "Design Services & Creative Freelancers",
      description: "Connect with top graphic design freelancers for banner design, branding, and creative marketing materials.",
      features: ["Freelance Graphic Designers", "Brand Design", "Marketing Collateral", "Social Media Graphics"],
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Digital Marketing Services | Freelancing Platform | Influencer Marketing - MarkFix"
        description="Comprehensive digital marketing services with access to top freelancers and influencers. Expert SEO, social media marketing, content creation, and personal branding services in India."
        keywords="digital marketing services, freelancing platform, influencer marketing, SEO services India, social media marketing, personal branding services, content marketing agency, digital marketing freelancers, brand strategy consulting"
        canonicalUrl="https://markfix.in/services"
        structuredData={[serviceSchema, freelancingJobSchema]}
      />
      
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-subtle py-20" aria-label="Digital Marketing Services Hero">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Digital Marketing <span className="bg-gradient-hero bg-clip-text text-transparent">Services</span> | Freelancing Platform | Influencer Marketing
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Comprehensive digital marketing services designed to elevate your brand, connect with top freelancers, partner with influencers, and drive measurable results across all channels. India's leading digital marketing agency for businesses and freelancers.
            </p>
            <div className="flex items-center justify-center space-x-8">
              <div className="flex items-center space-x-2">
                <Star className="h-5 w-5 text-accent fill-current" />
                <span className="text-sm font-medium">500+ Happy Clients</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-success" />
                <span className="text-sm font-medium">1000+ Freelancers</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-success" />
                <span className="text-sm font-medium">Top Influencers</span>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20" aria-label="Digital Marketing Services Portfolio">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Digital Marketing Services & Freelancing Solutions</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                From freelancing opportunities to influencer partnerships and automation tools, we provide end-to-end digital marketing solutions.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <Card 
                    key={index} 
                    className={`group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border-border/50 hover:border-primary/20 relative ${
                      service.popular ? 'ring-2 ring-accent/20' : ''
                    }`}
                  >
                    {service.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <Badge className="bg-accent text-accent-foreground">Most Popular</Badge>
                      </div>
                    )}
                    
                    <CardHeader>
                      <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        {service.title}
                      </CardTitle>
                      <CardDescription className="text-muted-foreground">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent>
                      <ul className="space-y-3 mb-6">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm">
                            <CheckCircle className="h-4 w-4 text-success mr-3 flex-shrink-0" />
                            <span className="text-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <div className="space-y-3">
                        <Button 
                          className={`w-full ${service.popular ? 'bg-gradient-accent hover:opacity-90 shadow-glow' : 'bg-primary hover:bg-primary-hover'}`}
                          onClick={() => window.location.href = '/contact'}
                        >
                          Get Quote
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                        <Button 
                          variant="outline" 
                          className="w-full group-hover:bg-secondary group-hover:text-secondary-foreground group-hover:border-secondary transition-all"
                          onClick={() => window.location.href = '/about'}
                        >
                          Learn More
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-gradient-subtle">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Proven Process</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We follow a strategic approach to ensure your success at every step of the journey.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Discovery", description: "We analyze your business, market, and goals to create a tailored strategy." },
                { step: "02", title: "Strategy", description: "Develop a comprehensive plan with clear objectives and measurable KPIs." },
                { step: "03", title: "Execution", description: "Implement the strategy with precision, creativity, and attention to detail." },
                { step: "04", title: "Optimization", description: "Monitor performance and continuously optimize for better results." },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary-foreground font-bold text-lg">{item.step}</span>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <PricingSection 
          title="Service Packages"
          subtitle="Choose the perfect service package that fits your business goals and budget"
          plans={servicePricingPlans}
          type="services"
        />

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-gradient-hero rounded-2xl p-8 md:p-12 text-primary-foreground">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Brand?</h2>
              <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                Let's discuss how our services can help you achieve your business goals and drive exceptional results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  variant="secondary"
                  className="bg-white text-primary hover:bg-white/90"
                  onClick={() => window.location.href = '/contact'}
                >
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-white/80 text-white bg-transparent hover:bg-white hover:text-primary hover:border-white"
                  onClick={() => window.location.href = '/contact'}
                >
                  Schedule Demo
                </Button>
                {/* <Button 
                  variant="outline" 
                  size="lg"
                  className="border-white/80 text-white bg-transparent hover:bg-white hover:text-primary hover:border-white"
                  onClick={() => window.location.href = '/about'}
                >
                  View Portfolio
                </Button> */}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Services;