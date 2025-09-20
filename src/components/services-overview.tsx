import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, User, TrendingUp, PenTool, Share2, Search, Palette } from "lucide-react";

const ServicesOverview = () => {
  const services = [
    {
      icon: User,
      title: "Personal Branding",
      description: "Build a powerful personal brand that stands out in your industry and attracts opportunities.",
      features: ["Brand Identity Design", "Content Strategy", "Online Presence Optimization"],
    },
    {
      icon: TrendingUp,
      title: "Brand Strategy Building",
      description: "Develop comprehensive brand strategies that drive growth and market positioning.",
      features: ["Market Analysis", "Competitive Research", "Brand Positioning"],
    },
    {
      icon: PenTool,
      title: "Content Marketing",
      description: "Create engaging content that resonates with your audience and drives conversions.",
      features: ["Content Calendar", "Blog Writing", "Video Production"],
    },
    {
      icon: Share2,
      title: "Social Media Marketing",
      description: "Maximize your social media presence with targeted campaigns and engaging content.",
      features: ["Platform Management", "Campaign Creation", "Community Building"],
    },
    {
      icon: Search,
      title: "SEO Services",
      description: "Improve your search engine rankings and drive organic traffic to your website.",
      features: ["Keyword Research", "On-Page SEO", "Technical Optimization"],
    },
    {
      icon: Palette,
      title: "Banner & Poster Design",
      description: "Create eye-catching visuals that communicate your brand message effectively.",
      features: ["Custom Graphics", "Brand Consistency", "Multi-Format Design"],
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Digital Marketing <span className="bg-gradient-hero bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive solutions to elevate your brand and drive measurable results across all digital channels.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border-border/50 hover:border-primary/20"
              >
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
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3 flex-shrink-0"></div>
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all"
                    onClick={() => window.location.href = '/services'}
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-subtle rounded-2xl p-8 border border-border/50">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Digital Presence?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Let's discuss how our services can help you achieve your business goals and drive exceptional results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-accent hover:opacity-90 shadow-glow"
                onClick={() => window.location.href = '/contact'}
              >
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                onClick={() => window.location.href = '/services'}
              >
                View All Services
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;