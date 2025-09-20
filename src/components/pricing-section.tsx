import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ArrowRight, Star } from "lucide-react";

interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
  cta: string;
  badge?: string;
}

interface PricingSectionProps {
  title?: string;
  subtitle?: string;
  plans: PricingPlan[];
  type?: "services" | "products";
}

const PricingSection = ({ 
  title = "Choose Your Plan", 
  subtitle = "Select the perfect plan for your business needs",
  plans,
  type = "services"
}: PricingSectionProps) => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {title.split(' ').slice(0, -1).join(' ')}{' '}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              {title.split(' ').slice(-1)}
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Pricing Cards */}
        <div className={`grid grid-cols-1 ${plans.length === 2 ? 'md:grid-cols-2' : plans.length === 3 ? 'md:grid-cols-3' : 'md:grid-cols-2 lg:grid-cols-4'} gap-8`}>
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`relative group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 ${
                plan.popular 
                  ? 'border-primary/50 shadow-glow ring-2 ring-primary/20' 
                  : 'border-border/50'
              }`}
            >
              {(plan.popular || plan.badge) && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <Badge className={
                    plan.popular
                      ? "bg-gradient-accent text-accent-foreground px-4 py-1"
                      : "bg-secondary text-secondary-foreground px-4 py-1"
                  }>
                    {plan.popular ? (
                      <><Star className="h-3 w-3 mr-1" />Most Popular</>
                    ) : (
                      plan.badge
                    )}
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl font-bold group-hover:text-primary transition-colors">
                  {plan.name}
                </CardTitle>
                <div className="mt-4">
                  <span className="text-4xl md:text-5xl font-bold text-primary">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground text-lg">/{plan.period}</span>
                </div>
                <CardDescription className="text-base mt-4">
                  {plan.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full ${
                    plan.popular 
                      ? 'bg-gradient-accent hover:opacity-90 shadow-glow' 
                      : 'bg-gradient-hero hover:opacity-90'
                  } transition-all duration-300 group-hover:scale-105`}
                  onClick={() => window.location.href = '/contact'}
                >
                  {plan.cta}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>

                {type === "products" && (
                  <Button 
                    variant="outline"
                    className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    onClick={() => window.location.href = '/contact'}
                  >
                    Request Demo
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Custom Solutions CTA */}
        <div className="text-center mt-16">
          <Card className="bg-card border-border/50 shadow-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Need a Custom Solution?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Every business is unique. Let's discuss how we can create a tailored {type} package 
                that perfectly fits your specific requirements and budget.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  className="bg-gradient-accent hover:opacity-90 shadow-glow"
                  onClick={() => window.location.href = '/contact'}
                >
                  Get Custom Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  variant="outline"
                  size="lg"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  onClick={() => window.location.href = 'tel:+916374995530'}
                >
                  Call Us Now
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;