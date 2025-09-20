import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Instagram, Facebook, Linkedin, MessageSquare, Zap, Users, BarChart3 } from "lucide-react";

const ProductsOverview = () => {
  const products = [
    {
      icon: Instagram,
      title: "Instagram Automation",
      description: "Automate your Instagram marketing with intelligent posting, story management, and engagement tracking.",
      features: ["Auto Posting", "Story Scheduling", "Hashtag Optimization", "Analytics Dashboard"],
      badge: "Most Popular",
      badgeColor: "bg-accent",
    },
    {
      icon: Facebook,
      title: "Facebook Automation",
      description: "Streamline your Facebook presence with automated posts, ad management, and audience insights.",
      features: ["Content Scheduling", "Ad Automation", "Audience Targeting", "Performance Tracking"],
      badge: "Enterprise Ready",
      badgeColor: "bg-secondary",
    },
    {
      icon: Linkedin,
      title: "LinkedIn Automation",
      description: "Professional networking made easy with automated connections, content sharing, and lead generation.",
      features: ["Connection Automation", "Content Publishing", "Lead Generation", "InMail Management"],
      badge: "B2B Focused",
      badgeColor: "bg-primary",
    },
    {
      icon: MessageSquare,
      title: "WhatsApp Automation",
      description: "Transform customer communication with automated WhatsApp messaging and chatbot integration.",
      features: ["Auto Responses", "Broadcast Messages", "Chatbot Integration", "Customer Segmentation"],
      badge: "New",
      badgeColor: "bg-success",
    },
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Automation <span className="bg-gradient-hero bg-clip-text text-transparent">Products</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Powerful automation tools designed to streamline your social media management and maximize your marketing efficiency.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {products.map((product, index) => {
            const IconComponent = product.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border-border/50 hover:border-primary/20 bg-card/80 backdrop-blur"
              >
                <CardHeader className="relative">
                  <div className="absolute top-4 right-4">
                    <Badge className={`${product.badgeColor} text-white`}>
                      {product.badge}
                    </Badge>
                  </div>
                  <div className="w-14 h-14 bg-gradient-hero rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {product.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {product.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm">
                        <Zap className="h-3 w-3 text-accent mr-2 flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <Button 
                      className="flex-1 bg-gradient-accent hover:opacity-90 group-hover:shadow-glow transition-all"
                      onClick={() => window.location.href = '/contact'}
                    >
                      Request Demo
                    </Button>
                    <Button 
                      variant="outline" 
                      className="group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all"
                      onClick={() => window.location.href = '/products'}
                    >
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Benefits Section */}
        <div className="bg-card rounded-2xl p-8 border border-border/50 shadow-card">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Increased Engagement</h3>
              <p className="text-muted-foreground text-sm">Boost audience interaction by up to 300% with our intelligent automation.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Time Savings</h3>
              <p className="text-muted-foreground text-sm">Save 80% of your time on social media management tasks.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-lg mb-2">ROI Growth</h3>
              <p className="text-muted-foreground text-sm">Achieve measurable ROI improvements with data-driven automation.</p>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Automate Your Success?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Experience the power of automation with our cutting-edge tools designed for modern marketers.
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-accent hover:opacity-90 shadow-glow"
              onClick={() => window.location.href = '/contact'}
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsOverview;