import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";
import ScrollToTop from "@/components/scroll-to-top";
import { Palette, Code, PenTool, Camera, TrendingUp, Clock, DollarSign, Users } from "lucide-react";

const Freelancers = () => {
  const skills = [
    { name: "Graphic Design", icon: Palette, demand: "High" },
    { name: "Web Development", icon: Code, demand: "Very High" },
    { name: "Content Writing", icon: PenTool, demand: "High" },
    { name: "Photography", icon: Camera, demand: "Medium" }
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: "Competitive Payments",
      description: "Get paid fairly for your expertise with transparent pricing and timely payments"
    },
    {
      icon: TrendingUp,
      title: "Skill Development",
      description: "Work on diverse projects that challenge and expand your professional skillset"
    },
    {
      icon: Clock,
      title: "Flexible Schedule",
      description: "Choose projects that fit your schedule and work at your own pace"
    },
    {
      icon: Users,
      title: "Network Growth",
      description: "Connect with other professionals and build lasting business relationships"
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
              Join Our
              <span className="text-primary block">Freelancer Network</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Partner with MarkFix and work on exciting projects with leading brands. Showcase your skills and grow your freelance career.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-4">
                Apply Now
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                View Projects
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Skills in Demand */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Skills in Demand</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're looking for talented professionals across various disciplines
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <Card key={index} className="border-2 border-primary/20 hover:border-primary/40 transition-colors text-center">
                <CardContent className="p-6">
                  <skill.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
                  <span className={`inline-block px-3 py-1 rounded-full text-sm ${
                    skill.demand === 'Very High' ? 'bg-red-100 text-red-700' :
                    skill.demand === 'High' ? 'bg-orange-100 text-orange-700' :
                    'bg-yellow-100 text-yellow-700'
                  }`}>
                    {skill.demand} Demand
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-secondary/10 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Why Freelance With Us?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join a network that values your expertise and supports your professional growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-2 border-primary/20 hover:border-primary/40 transition-colors text-center">
                <CardContent className="p-6">
                  <benefit.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Application Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Simple steps to join our freelancer network
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Apply", description: "Submit your application with portfolio" },
              { step: "2", title: "Review", description: "Our team reviews your skills and experience" },
              { step: "3", title: "Interview", description: "Brief conversation about your expertise" },
              { step: "4", title: "Start", description: "Begin working on exciting projects" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-gradient-to-br from-secondary/10 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">Freelancer Application</h2>
              <p className="text-xl text-muted-foreground">
                Tell us about your skills and experience to join our network
              </p>
            </div>

            <Card className="border-2 border-primary/20">
              <CardContent className="p-8">
                <form className="space-y-6">
                  {/* Personal Information */}
                  <div>
                    <h3 className="text-2xl font-semibold mb-4">Personal Information</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="fullName">Full Name *</Label>
                        <Input id="fullName" placeholder="Enter your full name" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input id="email" type="email" placeholder="your@email.com" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input id="phone" placeholder="+91 XXXXX XXXXX" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="location">Location *</Label>
                        <Input id="location" placeholder="City, Country" />
                      </div>
                    </div>
                  </div>

                  {/* Professional Information */}
                  <div>
                    <h3 className="text-2xl font-semibold mb-4">Professional Information</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="primarySkill">Primary Skill *</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select primary skill" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="graphic-design">Graphic Design</SelectItem>
                            <SelectItem value="web-development">Web Development</SelectItem>
                            <SelectItem value="content-writing">Content Writing</SelectItem>
                            <SelectItem value="seo">SEO Specialist</SelectItem>
                            <SelectItem value="social-media">Social Media Management</SelectItem>
                            <SelectItem value="photography">Photography</SelectItem>
                            <SelectItem value="video-editing">Video Editing</SelectItem>
                            <SelectItem value="digital-marketing">Digital Marketing</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="experience">Years of Experience *</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select experience level" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="0-1">0-1 years</SelectItem>
                            <SelectItem value="1-3">1-3 years</SelectItem>
                            <SelectItem value="3-5">3-5 years</SelectItem>
                            <SelectItem value="5-10">5-10 years</SelectItem>
                            <SelectItem value="10+">10+ years</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2 mt-6">
                      <Label>Additional Skills (Select all that apply)</Label>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {[
                          "UI/UX Design", "Copywriting", "Email Marketing", 
                          "PPC Advertising", "Analytics", "Branding",
                          "WordPress", "E-commerce", "Project Management"
                        ].map((skill) => (
                          <div key={skill} className="flex items-center space-x-2">
                            <Checkbox id={skill} />
                            <Label htmlFor={skill} className="text-sm">{skill}</Label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Portfolio & Rates */}
                  <div>
                    <h3 className="text-2xl font-semibold mb-4">Portfolio & Rates</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="portfolio">Portfolio URL *</Label>
                        <Input id="portfolio" placeholder="Link to your portfolio/website" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="hourlyRate">Hourly Rate (₹) *</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select rate range" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="500-1000">₹500 - ₹1,000</SelectItem>
                            <SelectItem value="1000-2000">₹1,000 - ₹2,000</SelectItem>
                            <SelectItem value="2000-3500">₹2,000 - ₹3,500</SelectItem>
                            <SelectItem value="3500-5000">₹3,500 - ₹5,000</SelectItem>
                            <SelectItem value="5000+">₹5,000+</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2 mt-6">
                      <Label htmlFor="workSamples">Work Samples (Additional URLs)</Label>
                      <Textarea 
                        id="workSamples" 
                        placeholder="Provide links to your best work samples, one per line..."
                        className="min-h-[80px]"
                      />
                    </div>
                  </div>

                  {/* Availability & Preferences */}
                  <div>
                    <h3 className="text-2xl font-semibold mb-4">Availability & Preferences</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="availability">Availability *</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select availability" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="full-time">Full-time (40+ hrs/week)</SelectItem>
                            <SelectItem value="part-time">Part-time (20-40 hrs/week)</SelectItem>
                            <SelectItem value="project-based">Project-based</SelectItem>
                            <SelectItem value="weekends">Weekends only</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="startDate">When can you start? *</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select start date" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="immediately">Immediately</SelectItem>
                            <SelectItem value="1-week">Within 1 week</SelectItem>
                            <SelectItem value="2-weeks">Within 2 weeks</SelectItem>
                            <SelectItem value="1-month">Within 1 month</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2 mt-6">
                      <Label htmlFor="about">Tell us about yourself *</Label>
                      <Textarea 
                        id="about" 
                        placeholder="Describe your professional background, expertise, and what makes you unique as a freelancer..."
                        className="min-h-[120px]"
                      />
                    </div>
                  </div>

                  {/* Consent */}
                  <div className="flex items-center space-x-2">
                    <Checkbox id="consent" />
                    <Label htmlFor="consent" className="text-sm">
                      I agree to MarkFix's terms and conditions and consent to being contacted about freelance opportunities *
                    </Label>
                  </div>

                  <Button type="submit" size="lg" className="w-full text-lg">
                    Submit Application
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

export default Freelancers;