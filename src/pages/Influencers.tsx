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
import { Instagram, Youtube, Linkedin, Twitter, TrendingUp, Users, Star, DollarSign } from "lucide-react";

const Influencers = () => {
  const platforms = [
    { name: "Instagram", icon: Instagram, followers: "10K-1M+" },
    { name: "YouTube", icon: Youtube, followers: "5K-500K+" },
    { name: "LinkedIn", icon: Linkedin, followers: "1K-100K+" },
    { name: "Twitter", icon: Twitter, followers: "5K-200K+" }
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: "Competitive Rates",
      description: "Earn attractive compensation for quality content and authentic engagement"
    },
    {
      icon: TrendingUp,
      title: "Growth Opportunities",
      description: "Work with established brands and grow your personal brand alongside theirs"
    },
    {
      icon: Users,
      title: "Creative Freedom",
      description: "Maintain your authentic voice while creating impactful brand content"
    },
    {
      icon: Star,
      title: "Long-term Partnerships",
      description: "Build lasting relationships with brands that value your unique perspective"
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
              <span className="text-primary block">Influencer Network</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Partner with MarkFix and connect with leading brands. Monetize your social media presence while maintaining your authentic voice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-4">
                Apply Now
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Supported Platforms</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We work with influencers across all major social media platforms
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {platforms.map((platform, index) => (
              <Card key={index} className="border-2 border-primary/20 hover:border-primary/40 transition-colors text-center">
                <CardContent className="p-6">
                  <platform.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{platform.name}</h3>
                  <p className="text-muted-foreground">{platform.followers}</p>
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
            <h2 className="text-4xl font-bold text-foreground mb-4">Why Partner With Us?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join a network that values authenticity and supports your growth as a content creator
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

      {/* Application Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">Influencer Application</h2>
              <p className="text-xl text-muted-foreground">
                Tell us about yourself and let's start building amazing campaigns together
              </p>
            </div>

            <Card className="border-2 border-primary/20">
              <CardContent className="p-6">
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
                        <Label htmlFor="city">City *</Label>
                        <Input id="city" placeholder="Your city" />
                      </div>
                    </div>
                  </div>

                  {/* Platform Information */}
                  <div>
                    <h3 className="text-2xl font-semibold mb-4">Platform Information</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="primaryPlatform">Primary Platform *</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select primary platform" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="instagram">Instagram</SelectItem>
                            <SelectItem value="youtube">YouTube</SelectItem>
                            <SelectItem value="linkedin">LinkedIn</SelectItem>
                            <SelectItem value="twitter">Twitter/X</SelectItem>
                            <SelectItem value="tiktok">TikTok</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="followers">Total Followers *</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select follower range" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1k-5k">1K - 5K</SelectItem>
                            <SelectItem value="5k-10k">5K - 10K</SelectItem>
                            <SelectItem value="10k-50k">10K - 50K</SelectItem>
                            <SelectItem value="50k-100k">50K - 100K</SelectItem>
                            <SelectItem value="100k-500k">100K - 500K</SelectItem>
                            <SelectItem value="500k+">500K+</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-4 mt-6">
                      <Label>Social Media Links</Label>
                      <div className="grid md:grid-cols-2 gap-4">
                        <Input placeholder="Instagram profile URL" />
                        <Input placeholder="YouTube channel URL" />
                        <Input placeholder="LinkedIn profile URL" />
                        <Input placeholder="Twitter profile URL" />
                      </div>
                    </div>
                  </div>

                  {/* Content Information */}
                  <div>
                    <h3 className="text-2xl font-semibold mb-4">Content & Niche</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="niche">Content Niche *</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your niche" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="lifestyle">Lifestyle</SelectItem>
                            <SelectItem value="fashion">Fashion & Beauty</SelectItem>
                            <SelectItem value="fitness">Fitness & Health</SelectItem>
                            <SelectItem value="tech">Technology</SelectItem>
                            <SelectItem value="food">Food & Travel</SelectItem>
                            <SelectItem value="business">Business & Finance</SelectItem>
                            <SelectItem value="education">Education</SelectItem>
                            <SelectItem value="entertainment">Entertainment</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="contentType">Content Type *</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select content type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="photos">Photos</SelectItem>
                            <SelectItem value="videos">Videos</SelectItem>
                            <SelectItem value="reels">Reels/Shorts</SelectItem>
                            <SelectItem value="stories">Stories</SelectItem>
                            <SelectItem value="mixed">Mixed Content</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2 mt-6">
                      <Label htmlFor="portfolio">Portfolio/Media Kit URL</Label>
                      <Input id="portfolio" placeholder="Link to your portfolio or media kit" />
                    </div>
                  </div>

                  {/* Additional Information */}
                  <div>
                    <h3 className="text-2xl font-semibold mb-4">Additional Information</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="experience">Influencer Experience</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select experience level" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="beginner">Beginner (0-1 years)</SelectItem>
                            <SelectItem value="intermediate">Intermediate (1-3 years)</SelectItem>
                            <SelectItem value="experienced">Experienced (3+ years)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="availability">Availability *</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select availability" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="full-time">Full-time</SelectItem>
                            <SelectItem value="part-time">Part-time</SelectItem>
                            <SelectItem value="project-based">Project-based</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2 mt-6">
                      <Label htmlFor="bio">Tell us about yourself *</Label>
                      <Textarea 
                        id="bio" 
                        placeholder="Describe your content style, audience demographics, and why you'd be a great fit for brand partnerships..."
                        className="min-h-[120px]"
                      />
                    </div>
                  </div>

                  {/* Consent */}
                  <div className="flex items-center space-x-2">
                    <Checkbox id="consent" />
                    <Label htmlFor="consent" className="text-sm">
                      I agree to MarkFix's terms and conditions and consent to being contacted about partnership opportunities *
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

export default Influencers;