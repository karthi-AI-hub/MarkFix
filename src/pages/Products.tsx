import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";
import ScrollToTop from "@/components/scroll-to-top";
import PricingSection from "@/components/pricing-section";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Instagram, Facebook, Linkedin, MessageSquare, Zap, Users, BarChart3, CheckCircle, Play, Calendar, Target, Bot } from "lucide-react";

const Products = () => {
  const productPricingPlans = [
    {
      name: "Basic Automation",
      price: "₹XXX",
      period: "month",
      description: "Essential automation tools for small businesses",
      features: [
        "Instagram Auto-posting",
        "Basic Analytics Dashboard",
        "Content Scheduling (50 posts/month)",
        "Hashtag Suggestions",
        "Email Support",
        "Single Account Management"
      ],
      cta: "Start Automating",
      badge: "Most Affordable"
    },
    {
      name: "Professional Suite",
      price: "₹XXX",
      period: "month",
      description: "Complete automation suite for growing businesses",
      features: [
        "Multi-Platform Automation (Instagram, Facebook, LinkedIn)",
        "Advanced Analytics & Reporting",
        "Unlimited Content Scheduling",
        "AI-Powered Hashtag Optimization",
        "WhatsApp Business Integration",
        "Lead Generation Tools",
        "Priority Support",
        "Custom Branded Reports"
      ],
      popular: true,
      cta: "Go Professional",
    },
    {
      name: "Enterprise",
      price: "₹XXX",
      period: "month",
      description: "Full-scale automation for large enterprises",
      features: [
        "All Platform Automation (Instagram, Facebook, LinkedIn, WhatsApp)",
        "Custom API Integrations",
        "Unlimited Account Management",
        "Advanced AI Content Generation",
        "Real-time Performance Monitoring",
        "Dedicated Success Manager",
        "White-label Solutions",
        "Custom Workflow Builder",
        "Advanced Security & Compliance"
      ],
      cta: "Enterprise Solution",
      badge: "Most Powerful"
    },
    {
      name: "Custom Solution",
      price: "Custom",
      period: "pricing",
      description: "Tailored automation solutions for unique business needs",
      features: [
        "Fully Customized Automation Workflows",
        "Bespoke Integration Development",
        "Unlimited Platform Support",
        "Custom AI Model Training",
        "On-premise Deployment Options",
        "24/7 Dedicated Technical Support",
        "SLA Guarantees",
        "Custom Feature Development"
      ],
      cta: "Contact Sales",
      badge: "Enterprise"
    }
  ];

  const products = [
    {
      icon: Instagram,
      title: "Instagram Automation",
      description: "Automate your Instagram marketing with intelligent posting, story management, and engagement tracking for maximum reach and impact.",
      features: [
        "Auto Posting & Scheduling",
        "Story Management",
        "Hashtag Optimization",
        "Analytics Dashboard",
        "Engagement Tracking",
        "Content Planning"
      ],
      badge: "Most Popular",
      badgeColor: "bg-accent",
      demoAvailable: true,
    },
    {
      icon: Facebook,
      title: "Facebook Automation",
      description: "Streamline your Facebook presence with automated posts, ad management, and comprehensive audience insights for better targeting.",
      features: [
        "Content Scheduling",
        "Ad Campaign Automation",
        "Audience Targeting",
        "Performance Tracking",
        "Page Management",
        "Lead Generation"
      ],
      badge: "Enterprise Ready",
      badgeColor: "bg-secondary",
      demoAvailable: true,
    },
    {
      icon: Linkedin,
      title: "LinkedIn Automation",
      description: "Professional networking made easy with automated connections, content sharing, and advanced lead generation capabilities.",
      features: [
        "Connection Automation",
        "Content Publishing",
        "Lead Generation",
        "InMail Management",
        "Profile Optimization",
        "Network Analytics"
      ],
      price: "$XXX/month",
      badge: "B2B Focused",
      badgeColor: "bg-primary",
      demoAvailable: true,
    },
    {
      icon: MessageSquare,
      title: "WhatsApp Automation",
      description: "Transform customer communication with automated WhatsApp messaging, chatbot integration, and intelligent customer segmentation.",
      features: [
        "Auto Responses",
        "Broadcast Messages",
        "Chatbot Integration",
        "Customer Segmentation",
        "Bulk Messaging",
        "Analytics & Reports"
      ],
      badge: "New",
      badgeColor: "bg-success",
      demoAvailable: false,
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
              Automation <span className="bg-gradient-hero bg-clip-text text-transparent">Products</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Powerful automation tools designed to streamline your social media management, maximize marketing efficiency, and deliver measurable results.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="flex items-center justify-center space-x-2">
                <Zap className="h-5 w-5 text-accent" />
                <span className="text-sm font-medium">Save 80% Time</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <BarChart3 className="h-5 w-5 text-success" />
                <span className="text-sm font-medium">3x Better Results</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Users className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">1000+ Users</span>
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {products.map((product, index) => {
                const IconComponent = product.icon;
                return (
                  <Card 
                    key={index} 
                    className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border-border/50 hover:border-primary/20 bg-card/80 backdrop-blur relative"
                  >
                    {product.badge && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                        <Badge className={`${product.badgeColor} text-white`}>{product.badge}</Badge>
                      </div>
                    )}
                    <CardHeader>
                      <div className="w-14 h-14 bg-gradient-hero rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="h-7 w-7 text-primary-foreground" />
                      </div>
                      <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                        {product.title}
                      </CardTitle>
                      <CardDescription className="text-muted-foreground text-base">
                        {product.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 gap-3 mb-8">
                        {product.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center text-sm">
                            <CheckCircle className="h-4 w-4 text-success mr-3 flex-shrink-0" />
                            <span className="text-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <div className="space-y-3">
                        {product.demoAvailable ? (
                          <div className="flex gap-3">
                            <Button 
                              className="flex-1 bg-gradient-accent hover:opacity-90 group-hover:shadow-glow transition-all"
                              onClick={() => window.location.href = '/contact'}
                            >
                              <Play className="mr-2 h-4 w-4" />
                              Request Demo
                            </Button>
                            <Button 
                              variant="outline" 
                              className="group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all"
                            >
                              <ArrowRight className="h-4 w-4" />
                            </Button>
                          </div>
                        ) : (
                          <Button 
                            className="w-full bg-gradient-accent hover:opacity-90 group-hover:shadow-glow transition-all"
                          >
                            Coming Soon
                          </Button>
                        )}
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

        {/* Features Comparison */}
        <section className="py-20 bg-gradient-subtle">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our Automation Tools?</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Built with cutting-edge technology and designed for maximum efficiency and results.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Calendar,
                  title: "Smart Scheduling",
                  description: "AI-powered optimal timing for maximum engagement and reach across all platforms."
                },
                {
                  icon: Target,
                  title: "Precision Targeting",
                  description: "Advanced audience segmentation and targeting for better conversion rates."
                },
                {
                  icon: Bot,
                  title: "AI Integration",
                  description: "Intelligent automation that learns from your audience behavior patterns."
                },
                {
                  icon: BarChart3,
                  title: "Real-time Analytics",
                  description: "Comprehensive reporting and insights to track performance and ROI."
                }
              ].map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-card rounded-2xl p-8 md:p-12 border border-border/50 shadow-card">
              <div className="mb-6">
                <div className="flex justify-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <CheckCircle key={i} className="h-5 w-5 text-accent fill-current" />
                  ))}
                </div>
                <p className="text-xl text-muted-foreground italic mb-4">
                  "MarkFix automation tools have transformed our social media strategy. We've seen a 300% increase in engagement and saved over 20 hours per week. The ROI has been incredible."
                </p>
                <div className="text-sm">
                  <div className="font-semibold">Sarah Johnson</div>
                  <div className="text-muted-foreground">Marketing Director, TechCorp</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <PricingSection 
          title="Automation Packages"
          subtitle="Choose the perfect automation package to scale your social media presence"
          plans={productPricingPlans}
          type="products"
        />

        {/* CTA Section */}
        <section className="py-20 bg-gradient-hero">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-primary-foreground">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Automate Your Success?</h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses already using our automation tools to scale their social media presence and drive real results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary"
                className="bg-white text-primary hover:bg-white/90"
                onClick={() => window.location.href = '/contact'}
              >
                Start Free Trial
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
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Products;