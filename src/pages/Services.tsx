import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";
import ScrollToTop from "@/components/scroll-to-top";
import PricingSection from "@/components/pricing-section";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, User, TrendingUp, PenTool, Share2, Search, Palette, CheckCircle, Star } from "lucide-react";

const Services = () => {
  const servicePricingPlans = [
    {
      name: "Starter",
      price: "₹XXX",
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
      price: "₹XXX",
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
      price: "₹XXX",
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
      title: "Personal Branding",
      description: "Build a powerful personal brand that stands out in your industry and attracts opportunities.",
      features: ["Brand Identity Design", "Content Strategy", "Online Presence Optimization", "Reputation Management"],
      popular: false,
    },
    {
      icon: TrendingUp,
      title: "Brand Strategy Building",
      description: "Develop comprehensive brand strategies that drive growth and market positioning.",
      features: ["Market Analysis", "Competitive Research", "Brand Positioning", "Growth Strategy"],
      popular: true,
    },
    {
      icon: PenTool,
      title: "Content Marketing",
      description: "Create engaging content that resonates with your audience and drives conversions.",
      features: ["Content Calendar", "Blog Writing", "Video Production", "Content Distribution"],
      popular: false,
    },
    {
      icon: Share2,
      title: "Social Media Marketing",
      description: "Maximize your social media presence with targeted campaigns and engaging content.",
      features: ["Platform Management", "Campaign Creation", "Community Building", "Influencer Outreach"],
      popular: false,
    },
    {
      icon: Search,
      title: "SEO Services",
      description: "Improve your search engine rankings and drive organic traffic to your website.",
      features: ["Keyword Research", "On-Page SEO", "Technical Optimization", "Link Building"],
      popular: false,
    },
    {
      icon: Palette,
      title: "Banner & Poster Design",
      description: "Create eye-catching visuals that communicate your brand message effectively.",
      features: ["Custom Graphics", "Brand Consistency", "Multi-Format Design", "Print & Digital"],
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-subtle py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our Digital Marketing <span className="bg-gradient-hero bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Comprehensive digital marketing solutions designed to elevate your brand, engage your audience, and drive measurable results across all channels.
            </p>
            <div className="flex items-center justify-center space-x-8">
              <div className="flex items-center space-x-2">
                <Star className="h-5 w-5 text-accent fill-current" />
                <span className="text-sm font-medium">500+ Happy Clients</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-success" />
                <span className="text-sm font-medium">Proven Results</span>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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