import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, TrendingUp, Users, Zap } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-subtle min-h-[90vh] flex items-center">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-hero opacity-5"></div>
      <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium">
                <TrendingUp className="h-4 w-4" />
                <span>Digital Marketing Excellence</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                <span className="bg-gradient-hero bg-clip-text text-transparent">MarkFix</span>: India's Leading{" "}
                <span className="bg-gradient-hero bg-clip-text text-transparent">
                  Digital Marketing Agency
                </span>{" "}
                with MarkFix
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Connect with top digital marketing freelancers, collaborate with influencers, and accelerate your business growth with our comprehensive social media automation tools, SEO services, and expert marketing strategies tailored for modern brands.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                <span className="text-foreground">Expert Brand Strategy</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                <span className="text-foreground">Influencer Partnerships</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                <span className="text-foreground">Social Media Automation</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                <span className="text-foreground">SEO & Brand Strategy</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-accent hover:opacity-90 shadow-glow transition-all duration-300 transform hover:scale-105"
                onClick={() => window.location.href = '/contact'}
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                onClick={() => window.location.href = '/services'}
              >
                View Our Services
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center space-x-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Clients Served</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">95%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
            </div>
          </div>

          {/* Visual Elements */}
          <div className="relative">
            <div className="relative z-10 bg-card rounded-2xl shadow-elegant p-8 border border-border">
              {/* Dashboard Preview */}
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-lg">Campaign Performance</h3>
                  <div className="text-success text-sm font-medium">+24% this month</div>
                </div>
                
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-gradient-hero/10 rounded-lg border border-primary/20 hover:shadow-glow transition-all duration-300">
                    <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                    <div className="text-sm text-muted-foreground">Reach</div>
                    <div className="text-lg font-bold text-primary">2.5M</div>
                    <div className="text-xs text-success">+15%</div>
                  </div>
                  <div className="text-center p-4 bg-gradient-hero/10 rounded-lg border border-secondary/20 hover:shadow-glow transition-all duration-300">
                    <TrendingUp className="h-8 w-8 text-secondary mx-auto mb-2" />
                    <div className="text-sm text-muted-foreground">Engagement</div>
                    <div className="text-lg font-bold text-secondary">18.3%</div>
                    <div className="text-xs text-success">+8%</div>
                  </div>
                  <div className="text-center p-4 bg-gradient-hero/10 rounded-lg border border-accent/20 hover:shadow-glow transition-all duration-300">
                    <Zap className="h-8 w-8 text-accent mx-auto mb-2" />
                    <div className="text-sm text-muted-foreground">Conversions</div>
                    <div className="text-lg font-bold text-accent">1,247</div>
                    <div className="text-xs text-success">+22%</div>
                  </div>
                </div>

                <div className="h-32 bg-gradient-subtle rounded-lg border border-border flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-hero opacity-5"></div>
                  <div className="relative z-10">
                    <div className="text-center">
                      <TrendingUp className="h-8 w-8 text-primary mx-auto mb-2" />
                      <div className="text-foreground font-medium">Live Campaign Analytics</div>
                      <div className="text-sm text-muted-foreground">Real-time performance tracking</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-accent rounded-xl shadow-card flex items-center justify-center">
              <TrendingUp className="h-8 w-8 text-accent-foreground" />
            </div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-secondary rounded-lg shadow-card flex items-center justify-center">
              <Zap className="h-6 w-6 text-secondary-foreground" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;