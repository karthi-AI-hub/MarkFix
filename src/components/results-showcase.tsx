import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Users, Eye, MousePointer, DollarSign, BarChart3, Target, Zap } from "lucide-react";

const ResultsShowcase = () => {
  const metrics = [
    {
      icon: Users,
      label: "Average Follower Growth",
      value: "+284%",
      description: "Monthly increase in social media followers",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Eye,
      label: "Engagement Rate Improvement", 
      value: "+156%",
      description: "Higher engagement across all platforms",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
    },
    {
      icon: MousePointer,
      label: "Click-Through Rate",
      value: "+89%",
      description: "Improved CTR on campaigns",
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
    {
      icon: DollarSign,
      label: "Return on Investment",
      value: "312%",
      description: "Average ROI for our clients",
      color: "text-success",
      bgColor: "bg-success/10",
    },
  ];

  const caseStudies = [
    {
      company: "E-commerce Fashion Brand",
      industry: "Retail",
      challenge: "Low social media engagement and brand awareness",
      results: [
        "300% increase in Instagram followers",
        "150% boost in online sales",
        "45% improvement in brand recognition"
      ],
      timeframe: "6 months",
      services: ["Social Media Marketing", "Content Creation", "Instagram Automation"]
    },
    {
      company: "SaaS Tech Startup",
      industry: "Technology",
      challenge: "Difficulty generating qualified leads",
      results: [
        "400% increase in qualified leads",
        "250% growth in website traffic",
        "180% improvement in conversion rate"
      ],
      timeframe: "4 months", 
      services: ["SEO Services", "Content Marketing", "LinkedIn Automation"]
    },
    {
      company: "Professional Services Firm",
      industry: "Consulting",
      challenge: "Poor online visibility and client acquisition",
      results: [
        "500% increase in online visibility",
        "200% growth in client inquiries", 
        "165% boost in revenue"
      ],
      timeframe: "8 months",
      services: ["Personal Branding", "SEO Services", "Content Strategy"]
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Proven <span className="bg-gradient-hero bg-clip-text text-transparent">Results</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our data-driven approach delivers measurable results. Here's what our clients achieve 
            when they partner with MarkFix.
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {metrics.map((metric, index) => {
            const IconComponent = metric.icon;
            return (
              <Card 
                key={index}
                className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border-border/50"
              >
                <CardContent className="p-6 text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 ${metric.bgColor} rounded-full mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className={`h-8 w-8 ${metric.color}`} />
                  </div>
                  <div className={`text-3xl font-bold ${metric.color} mb-2 group-hover:scale-105 transition-transform duration-300`}>
                    {metric.value}
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{metric.label}</h3>
                  <p className="text-sm text-muted-foreground">{metric.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Case Studies */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Client Success Stories</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Real businesses, real results. See how we've helped companies across different 
              industries achieve their digital marketing goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <Card 
                key={index}
                className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border-border/50"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-2">
                    <Badge className="bg-gradient-hero text-primary-foreground">
                      {study.industry}
                    </Badge>
                    <span className="text-sm text-muted-foreground">{study.timeframe}</span>
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {study.company}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">{study.challenge}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-success mb-2 flex items-center">
                      <Target className="h-4 w-4 mr-2" />
                      Key Results
                    </h4>
                    <ul className="space-y-1">
                      {study.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="text-sm text-foreground flex items-center">
                          <TrendingUp className="h-3 w-3 text-success mr-2 flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-accent mb-2 flex items-center">
                      <Zap className="h-4 w-4 mr-2" />
                      Services Used
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {study.services.map((service, serviceIndex) => (
                        <Badge 
                          key={serviceIndex}
                          variant="outline" 
                          className="text-xs border-accent/30 text-accent"
                        >
                          {service}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsShowcase;