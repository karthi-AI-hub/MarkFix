import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";
import Newsletter from "@/components/newsletter";
import ScrollToTop from "@/components/scroll-to-top";
import { useToast } from "@/components/ui/use-toast";
import { Mail, Phone, MapPin, Clock, MessageCircle, Send, CheckCircle, Globe, Users, Headphones, Calendar, TrendingUp, Zap } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string) => (value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate form submission - replace with actual API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Message Sent Successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        budget: "",
        message: "",
      });
    } catch (error) {
      toast({
        title: "Failed to Send Message",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "markfixofficial@gmail.com",
      description: "We'll respond within 24 hours"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+91 63749 95530",
      description: "Mon-Fri 9AM to 6PM IST"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "Jalakandapuram, Salem, Tamil Nadu, IN 636303",
      description: "Our office location"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Mon-Fri: 9AM-6PM, Sat: 10AM-4PM",
      description: "India Standard Time (IST)"
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
              Get In
              <span className="text-primary block">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Ready to transform your digital presence? Let's discuss how we can help your business grow and thrive in the digital landscape.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-4" onClick={() => window.open('https://wa.me/6374995530', '_blank')}>
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp Us
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4" onClick={() => window.location.href = 'tel:+916374995530'}>
                Schedule Call
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Contact Information</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Multiple ways to reach us. Choose what works best for you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <Card key={index} className="border-2 border-primary/20 hover:border-primary/40 transition-colors text-center">
                <CardContent className="p-6">
                  <info.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{info.title}</h3>
                  <p className="text-foreground font-medium mb-2">{info.details}</p>
                  <p className="text-muted-foreground text-sm">{info.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-20 bg-gradient-to-br from-secondary/10 to-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="border-2 border-primary/20">
                <CardHeader>
                  <CardTitle className="text-3xl">Send us a Message</CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </p>
                </CardHeader>
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input 
                        id="name" 
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your full name" 
                        required
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input 
                          id="email" 
                          name="email"
                          type="email" 
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your@email.com" 
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input 
                          id="phone" 
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+91 XXXXX XXXXX" 
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="company">Company Name</Label>
                        <Input 
                          id="company" 
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder="Your company name" 
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="service">Service Interest</Label>
                        <Select onValueChange={handleSelectChange("service")}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select service" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="personal-branding">Personal Branding</SelectItem>
                            <SelectItem value="brand-strategy">Brand Strategy Building</SelectItem>
                            <SelectItem value="content-marketing">Content Marketing</SelectItem>
                            <SelectItem value="social-media">Social Media Marketing</SelectItem>
                            <SelectItem value="seo">SEO Services</SelectItem>
                            <SelectItem value="design">Banner & Poster Design</SelectItem>
                            <SelectItem value="automation">Social Media Automation</SelectItem>
                            <SelectItem value="consultation">Free Consultation</SelectItem>
                            <SelectItem value="support">Support</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="budget">Project Budget (Optional)</Label>
                      <Select onValueChange={handleSelectChange("budget")}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-50k">Under ₹50,000</SelectItem>
                          <SelectItem value="50k-1l">₹50,000 - ₹1,00,000</SelectItem>
                          <SelectItem value="1l-3l">₹1,00,000 - ₹3,00,000</SelectItem>
                          <SelectItem value="3l-5l">₹3,00,000 - ₹5,00,000</SelectItem>
                          <SelectItem value="above-5l">Above ₹5,00,000</SelectItem>
                          <SelectItem value="custom">Let's Discuss</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea 
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us about your project, goals, timeline, and any specific requirements you have..."
                        className="min-h-[120px]"
                        required
                      />
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full text-lg bg-gradient-accent hover:opacity-90"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-5 w-5" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Map and Additional Info */}
            <div className="space-y-8">
              {/* Map */}
              <Card className="border-2 border-primary/20 hover:border-primary/40 transition-colors">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center">
                    <MapPin className="h-6 w-6 text-primary mr-2" />
                    Our Location
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Visit our office for a face-to-face consultation or virtual meeting
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-gradient-subtle rounded-lg p-6 border border-border">
                    <div className="text-center mb-4">
                      <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-3">
                        <MapPin className="w-8 h-8 text-primary-foreground" />
                      </div>
                      <h3 className="font-semibold text-lg">MarkFix Digital Marketing Agency</h3>
                      <p className="text-muted-foreground mt-2">Jalakandapuram, Salem, Tamil Nadu, IN 636303</p>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                      <div className="text-center p-3 bg-card rounded-lg border border-border/50">
                        <Clock className="h-5 w-5 text-primary mx-auto mb-1" />
                        <p className="text-sm font-medium">Office Hours</p>
                        <p className="text-xs text-muted-foreground">Mon-Fri: 9AM-6PM</p>
                      </div>
                      <div className="text-center p-3 bg-card rounded-lg border border-border/50">
                        <Phone className="h-5 w-5 text-primary mx-auto mb-1" />
                        <p className="text-sm font-medium">Direct Line</p>
                        <p className="text-xs text-muted-foreground">+91 63749 95530</p>
                      </div>
                    </div>

                    <div className="flex gap-3 mt-4">
                      <Button 
                        variant="outline" 
                        className="flex-1"
                        onClick={() => window.open('https://www.google.com/maps/search/Jalakandapuram,+Salem,+Tamil+Nadu,+India', '_blank')}
                      >
                        <MapPin className="h-4 w-4 mr-2" />
                        View on Maps
                      </Button>
                      <Button 
                        className="flex-1 bg-gradient-accent hover:opacity-90"
                        onClick={() => window.location.href = '/contact'}
                      >
                        <Calendar className="h-4 w-4 mr-2" />
                        Book Visit
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Contact */}
              {/* Live Google Map */}
              <Card className="border-2 border-primary/20">
                <CardHeader>
                  <CardTitle className="text-2xl">Our Location on Map</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="w-full h-64 rounded-lg overflow-hidden">
                    <iframe
                      title="MarkFix Office Location"
                      src="https://www.google.com/maps?q=Jalakandapuram,+Salem,+Tamil+Nadu,+India&output=embed"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Quick answers to common questions about our services
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                question: "How quickly can you start working on my project?",
                answer: "We typically begin new projects within 1-2 weeks of contract signing, depending on project scope and current workload."
              },
              {
                question: "Do you offer custom packages?",
                answer: "Yes! We create tailored solutions based on your specific needs, budget, and business objectives."
              },
              {
                question: "What's included in your reporting?",
                answer: "Our reports include detailed analytics, performance metrics, ROI analysis, and actionable insights for improvement."
              },
              {
                question: "Do you work with businesses outside India?",
                answer: "Absolutely! While we're based in India, we serve clients globally and adapt our strategies to different markets."
              }
            ].map((faq, index) => (
              <Card key={index} className="border-2 border-primary/20">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Why Choose MarkFix?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're more than just a service provider - we're your growth partner
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: CheckCircle,
                title: "Proven Track Record",
                description: "500+ successful projects with 98% client satisfaction rate",
                badge: "500+ Clients"
              },
              {
                icon: Users,
                title: "Expert Team",
                description: "Certified professionals with 5+ years of industry experience",
                badge: "Certified Experts"
              },
              {
                icon: Headphones,
                title: "24/7 Support",
                description: "Round-the-clock assistance for all your marketing needs",
                badge: "Always Available"
              },
              {
                icon: Globe,
                title: "Global Reach",
                description: "Serving clients across India and internationally",
                badge: "Worldwide Service"
              },
              {
                icon: TrendingUp,
                title: "Data-Driven Results",
                description: "Every strategy backed by analytics and measurable outcomes",
                badge: "ROI Focused"
              },
              {
                icon: Zap,
                title: "Cutting-Edge Tools",
                description: "Latest automation tools and marketing technologies",
                badge: "Advanced Tech"
              }
            ].map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border-border/50">
                  <CardContent className="p-6 text-center">
                    <div className="relative mb-6">
                      <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="h-8 w-8 text-primary-foreground" />
                      </div>
                      <Badge className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-xs">
                        {feature.badge}
                      </Badge>
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quick Contact Options */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Get In Touch Instantly</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Multiple ways to connect with us. Choose what works best for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <Card className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 cursor-pointer" 
                  onClick={() => window.open('https://wa.me/6374995530', '_blank')}>
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <MessageCircle className="h-7 w-7 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2">WhatsApp</h3>
                <p className="text-sm text-muted-foreground">Instant messaging</p>
                <Badge className="mt-2 bg-green-100 text-green-700">Online Now</Badge>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                  onClick={() => window.location.href = 'tel:+916374995530'}>
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="h-7 w-7 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Call Direct</h3>
                <p className="text-sm text-muted-foreground">Immediate response</p>
                <Badge className="mt-2 bg-blue-100 text-blue-700">9AM - 6PM IST</Badge>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                  onClick={() => window.location.href = 'mailto:markfixofficial@gmail.com'}>
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="h-7 w-7 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Email Us</h3>
                <p className="text-sm text-muted-foreground">Detailed inquiries</p>
                <Badge className="mt-2 bg-purple-100 text-purple-700">24h Response</Badge>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 cursor-pointer">
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Calendar className="h-7 w-7 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Schedule Meet</h3>
                <p className="text-sm text-muted-foreground">Video consultation</p>
                <Badge className="mt-2 bg-orange-100 text-orange-700">Book Free Slot</Badge>
              </CardContent>
            </Card>
          </div>

          {/* Emergency Contact */}
          <div className="mt-12 text-center">
            <Card className="bg-gradient-hero text-primary-foreground border-none shadow-glow max-w-md mx-auto">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Urgent Project?</h3>
                <p className="mb-4 text-primary-foreground/90">
                  Need immediate assistance? Our emergency support is available.
                </p>
                <Button 
                  className="bg-accent hover:bg-accent-hover text-accent-foreground"
                  onClick={() => window.open('https://wa.me/6374995530?text=Urgent%20project%20inquiry', '_blank')}
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Emergency Contact
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <Newsletter />

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Contact;