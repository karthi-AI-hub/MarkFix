import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";
import Testimonials from "@/components/testimonials";
import Newsletter from "@/components/newsletter";
import ScrollToTop from "@/components/scroll-to-top";
import { Target, Users, Award, TrendingUp, Lightbulb, Heart, Globe, Calendar, CheckCircle, Star, Rocket, Shield, Zap } from "lucide-react";

const About = () => {
  const stats = [
    { number: "500+", label: "Happy Clients", icon: Users },
    { number: "1000+", label: "Projects Completed", icon: Target },
    { number: "98%", label: "Success Rate", icon: Award },
    { number: "5+", label: "Years Experience", icon: TrendingUp }
  ];

  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We constantly evolve our strategies to stay ahead of digital trends and deliver cutting-edge solutions."
    },
    {
      icon: Heart,
      title: "Authenticity",
      description: "We believe in genuine connections and transparent communication with our clients and partners."
    },
    {
      icon: Target,
      title: "Results-Driven",
      description: "Every campaign is designed with measurable outcomes in mind, ensuring tangible business growth."
    },
    {
      icon: Globe,
      title: "Global Perspective",
      description: "Our team brings diverse experience to create campaigns that resonate across different markets."
    }
  ];

  const team = [
    {
      name: "Munivasan M",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      description: "Digital marketing strategist with 8+ years of experience in building successful campaigns."
    },
    {
      name: "Karthikeyan S",
      role: "CTO & Technical Lead",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      description: "Award-winning designer specializing in brand identity and visual storytelling."
    },
    // {
    //   name: "Rahul Mehta",
    //   role: "Head of Technology",
    //   image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
    //   description: "Tech expert leading our automation and digital platform development initiatives."
    // },
    {
      name: "Anjali Patel",
      role: "Client Success Manager",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      description: "Relationship builder ensuring every client achieves their marketing objectives."
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
              About
              <span className="text-primary block">MarkFix</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              We're a passionate team of digital marketing experts dedicated to helping businesses grow through innovative strategies and authentic connections.
            </p>
            <Button size="lg" className="text-lg px-8 py-4" onClick={() => window.location.href = '/contact'}>
              Get Started With Us
            </Button>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground text-lg">
                <p>
                  Founded in 2019, MarkFix began with a simple yet powerful vision: to bridge the gap between businesses and their audiences through meaningful digital experiences.
                </p>
                <p>
                  What started as a small team of passionate marketers has grown into a comprehensive digital marketing agency that serves clients across industries, from startups to established enterprises.
                </p>
                <p>
                  Today, we're proud to be at the forefront of digital innovation, combining traditional marketing wisdom with cutting-edge technology to deliver results that matter.
                </p>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop" 
                alt="Team collaboration"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-br from-secondary/10 to-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="border-2 border-primary/20 hover:border-primary/40 transition-colors">
              <CardContent className="p-8 text-center">
                <Target className="w-16 h-16 text-primary mx-auto mb-6" />
                <h3 className="text-3xl font-bold text-foreground mb-4">Our Mission</h3>
                <p className="text-muted-foreground text-lg">
                  To empower businesses of all sizes with innovative digital marketing solutions that drive growth, build authentic relationships, and create lasting impact in the digital landscape.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20 hover:border-primary/40 transition-colors">
              <CardContent className="p-8 text-center">
                <Globe className="w-16 h-16 text-primary mx-auto mb-6" />
                <h3 className="text-3xl font-bold text-foreground mb-4">Our Vision</h3>
                <p className="text-muted-foreground text-lg">
                  To be the leading digital marketing partner that businesses trust to navigate the ever-evolving digital world while maintaining authenticity and delivering measurable results.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Impact</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Numbers that reflect our commitment to excellence and client success
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="border-2 border-primary/20 hover:border-primary/40 transition-colors text-center">
                <CardContent className="p-6">
                  <stat.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <div className="text-4xl font-bold text-foreground mb-2">{stat.number}</div>
                  <p className="text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gradient-to-br from-secondary/10 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-2 border-primary/20 hover:border-primary/40 transition-colors text-center">
                <CardContent className="p-6">
                  <value.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The talented individuals behind MarkFix's success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="border-2 border-primary/20 hover:border-primary/40 transition-colors">
                <CardContent className="p-6 text-center">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Journey</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From a small startup to a leading digital marketing agency - here's how we've grown
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20"></div>
              
              {[
                {
                  year: "2019",
                  title: "Company Founded",
                  description: "Started MarkFix with a vision to revolutionize digital marketing for small businesses.",
                  icon: Rocket
                },
                {
                  year: "2020",
                  title: "First 100 Clients",
                  description: "Reached our first major milestone by serving 100 satisfied clients across various industries.",
                  icon: Users
                },
                {
                  year: "2021",
                  title: "Automation Tools Launch",
                  description: "Launched our proprietary social media automation tools, transforming how clients manage their online presence.",
                  icon: Zap
                },
                {
                  year: "2022",
                  title: "Industry Recognition",
                  description: "Received 'Best Digital Marketing Agency' award and expanded our team to 15+ experts.",
                  icon: Award
                },
                {
                  year: "2023",
                  title: "500+ Clients Milestone",
                  description: "Celebrated serving over 500 clients with a 98% satisfaction rate and expanded internationally.",
                  icon: Globe
                },
                {
                  year: "2024",
                  title: "AI Integration",
                  description: "Integrated AI-powered analytics and predictive marketing strategies into our service offerings.",
                  icon: Target
                },
                {
                  year: "2025",
                  title: "Future Ready",
                  description: "Continuing to innovate with cutting-edge technology and expanding our global footprint.",
                  icon: TrendingUp
                }
              ].map((milestone, index) => {
                const IconComponent = milestone.icon;
                return (
                  <div key={index} className="relative flex items-start mb-12 last:mb-0">
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center border-4 border-background shadow-card z-10">
                      <IconComponent className="h-7 w-7 text-primary-foreground" />
                    </div>
                    <div className="ml-8 flex-1">
                      <div className="bg-card rounded-lg p-6 shadow-card border border-border/50 hover:shadow-elegant transition-all duration-300">
                        <div className="flex items-center mb-2">
                          <Badge className="bg-accent text-accent-foreground mr-3">{milestone.year}</Badge>
                          <h3 className="text-xl font-bold text-foreground">{milestone.title}</h3>
                        </div>
                        <p className="text-muted-foreground">{milestone.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Partnerships */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Certifications & Partnerships</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We stay certified and partner with industry leaders to provide you with the best services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Google Partner",
                description: "Certified Google Ads & Analytics Partner",
                icon: Shield,
                color: "text-blue-600"
              },
              {
                name: "Facebook Blueprint",
                description: "Meta Business Partner Certification",
                icon: CheckCircle,
                color: "text-blue-500"
              },
              {
                name: "HubSpot Certified",
                description: "Inbound Marketing Certification",
                icon: Award,
                color: "text-orange-500"
              },
              {
                name: "LinkedIn Partner",
                description: "LinkedIn Marketing Solutions Partner",
                icon: Star,
                color: "text-blue-700"
              }
            ].map((cert, index) => {
              const IconComponent = cert.icon;
              return (
                <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border-border/50">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className={`h-8 w-8 text-primary-foreground`} />
                    </div>
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">{cert.name}</h3>
                    <p className="text-sm text-muted-foreground">{cert.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Newsletter */}
      <Newsletter />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's work together to create marketing strategies that drive real results for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-4" onClick={() => window.location.href = '/contact'}>
                Start Your Journey
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4" onClick={() => window.location.href = '/contact'}>
                Schedule a Call
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default About;