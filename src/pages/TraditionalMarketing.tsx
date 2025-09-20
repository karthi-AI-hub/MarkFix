import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";
import ScrollToTop from "@/components/scroll-to-top";
import { Truck, Zap, MapPin, Clock, Users, Target } from "lucide-react";

const TraditionalMarketing = () => {
  const packages = [
    {
      name: "Bronze Package",
      price: "₹15,000",
      duration: "7 Days",
      features: [
        "City-wide coverage",
        "Basic route planning",
        "Standard display board",
        "Daily progress reports"
      ]
    },
    {
      name: "Silver Package",
      price: "₹25,000", 
      duration: "14 Days",
      features: [
        "Multi-city coverage",
        "Strategic route optimization",
        "HD LED display",
        "Real-time tracking",
        "Performance analytics"
      ]
    },
    {
      name: "Gold Package",
      price: "₹40,000",
      duration: "30 Days",
      features: [
        "State-wide coverage",
        "Premium LED displays",
        "GPS tracking & analytics",
        "Dedicated campaign manager",
        "Custom route planning",
        "Detailed ROI reports"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Traditional Marketing
              <span className="text-primary block">That Gets Results</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Reach your local audience with our mobile advertising solutions. Our LED campaign vans bring your brand directly to your customers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-4">
                Get Quote Now
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-4"
                onClick={() => window.location.href = '/about'}
              >
                View Portfolio
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose from our range of mobile advertising solutions designed to maximize your brand visibility
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Card className="border-2 border-primary/20 hover:border-primary/40 transition-colors">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <Truck className="w-8 h-8 text-primary mr-3" />
                    <CardTitle className="text-2xl">Ad Campaign Van</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">
                    Traditional mobile advertising with static displays. Perfect for local campaigns and community outreach.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <MapPin className="w-5 h-5 text-accent mr-2" />
                      <span>Strategic location targeting</span>
                    </li>
                    <li className="flex items-center">
                      <Clock className="w-5 h-5 text-accent mr-2" />
                      <span>Flexible timing options</span>
                    </li>
                    <li className="flex items-center">
                      <Users className="w-5 h-5 text-accent mr-2" />
                      <span>High foot traffic areas</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="border-2 border-primary/20 hover:border-primary/40 transition-colors">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <Zap className="w-8 h-8 text-primary mr-3" />
                    <CardTitle className="text-2xl">LED Ad Campaign Van</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">
                    High-impact LED displays with dynamic content capabilities. Eye-catching and modern advertising solution.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <Target className="w-5 h-5 text-accent mr-2" />
                      <span>Dynamic content display</span>
                    </li>
                    <li className="flex items-center">
                      <Zap className="w-5 h-5 text-accent mr-2" />
                      <span>Bright LED technology</span>
                    </li>
                    <li className="flex items-center">
                      <Clock className="w-5 h-5 text-accent mr-2" />
                      <span>Day & night visibility</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20 bg-gradient-to-br from-secondary/10 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Choose Your Package</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Flexible packages designed to meet different campaign needs and budgets
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card key={index} className={`border-2 hover:border-primary/40 transition-colors ${index === 1 ? 'border-primary/40 scale-105' : 'border-primary/20'}`}>
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl mb-2">{pkg.name}</CardTitle>
                  <div className="text-4xl font-bold text-primary mb-2">₹ XX,XXX</div>
                  <p className="text-muted-foreground">{pkg.duration}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" variant={index === 1 ? "default" : "outline"}>
                    Choose {pkg.name}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">Get a Custom Quote</h2>
              <p className="text-xl text-muted-foreground">
                Tell us about your campaign needs and we'll create a tailored solution for you
              </p>
            </div>

            <Card className="border-2 border-primary/20">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input id="name" placeholder="Enter your full name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input id="email" type="email" placeholder="your@email.com" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input id="phone" placeholder="+91 XXXXX XXXXX" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company Name</Label>
                      <Input id="company" placeholder="Your company name" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="service">Service Type *</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select service type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="traditional">Ad Campaign Van</SelectItem>
                          <SelectItem value="led">LED Ad Campaign Van</SelectItem>
                          <SelectItem value="both">Both Services</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="package">Preferred Package</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select package" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="bronze">Bronze Package</SelectItem>
                          <SelectItem value="silver">Silver Package</SelectItem>
                          <SelectItem value="gold">Gold Package</SelectItem>
                          <SelectItem value="custom">Custom Package</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="locations">Target Locations</Label>
                    <Input id="locations" placeholder="Cities/areas you want to target" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Campaign Details *</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us about your campaign objectives, target audience, preferred dates, and any specific requirements..."
                      className="min-h-[120px]"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full text-lg">
                    Get Custom Quote
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default TraditionalMarketing;