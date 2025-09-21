import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, CheckCircle, ArrowRight, Phone } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { addNewsletterSubmission } from "@/services/firebaseService";

interface NewsletterProps {
  variant?: "default" | "inline" | "footer";
  className?: string;
}

const Newsletter = ({ variant = "default", className = "" }: NewsletterProps) => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [subscribedEmail, setSubscribedEmail] = useState("");
  const { toast } = useToast();

  // Check localStorage on component mount
  useEffect(() => {
    const storedSubscription = localStorage.getItem("markfix-newsletter-subscription");
    if (storedSubscription) {
      try {
        const subscriptionData = JSON.parse(storedSubscription);
        const subscriptionDate = new Date(subscriptionData.date);
        const currentDate = new Date();
        const daysDifference = Math.floor((currentDate.getTime() - subscriptionDate.getTime()) / (1000 * 3600 * 24));
        
        // Consider subscription valid for 30 days (can be adjusted)
        if (daysDifference < 30) {
          setIsSubscribed(true);
          setSubscribedEmail(subscriptionData.email);
        } else {
          // Remove expired subscription
          localStorage.removeItem("markfix-newsletter-subscription");
        }
      } catch (error) {
        // Remove invalid data
        localStorage.removeItem("markfix-newsletter-subscription");
      }
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes("@")) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      const newsletterData = {
        email,
        phone: phone || undefined,
        name: name || undefined,
        status: 'active' as const,
        source: 'newsletter' as const,
        page: window.location.pathname
      };

      await addNewsletterSubmission(newsletterData);
      
      const subscriptionData = {
        email: email,
        date: new Date().toISOString(),
        subscribed: true
      };
      localStorage.setItem("markfix-newsletter-subscription", JSON.stringify(subscriptionData));
      
      setIsSubscribed(true);
      setSubscribedEmail(email);
      setEmail("");
      setPhone("");
      setName("");

      toast({
        title: "Successfully Subscribed!",
        description: "You'll receive our latest updates and exclusive content.",
      });
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      toast({
        title: "Subscription Failed",
        description: "Please try again later or contact support.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleUnsubscribe = () => {
    localStorage.removeItem("markfix-newsletter-subscription");
    setIsSubscribed(false);
    setSubscribedEmail("");
    toast({
      title: "Unsubscribed",
      description: "You've been unsubscribed from our newsletter.",
      variant: "default",
    });
  };

  // If already subscribed, show success message with option to unsubscribe
  if (isSubscribed && variant === "default") {
    return (
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="bg-card border-border/50 shadow-card">
            <CardContent className="p-8">
              <div className="flex items-center justify-center mb-4">
                <CheckCircle className="h-16 w-16 text-success" />
              </div>
              <h2 className="text-3xl font-bold mb-4 text-foreground">You're All Set! 🎉</h2>
              <p className="text-xl text-muted-foreground mb-6">
                Thank you for subscribing with <strong>{subscribedEmail}</strong>. 
                You'll receive our latest digital marketing insights and updates.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="outline"
                  onClick={handleUnsubscribe}
                  className="text-muted-foreground hover:text-foreground"
                >
                  Unsubscribe
                </Button>
                <Button 
                  className="bg-gradient-accent hover:opacity-90"
                  onClick={() => window.location.href = '/services'}
                >
                  Explore Our Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  if (variant === "inline") {
    if (isSubscribed) {
      return (
        <div className={`flex items-center gap-3 max-w-md ${className}`}>
          <CheckCircle className="h-5 w-5 text-success" />
          <span className="text-sm text-muted-foreground">
            Subscribed with {subscribedEmail}
          </span>
          <Button 
            variant="ghost"
            size="sm"
            onClick={handleUnsubscribe}
            className="text-xs text-muted-foreground hover:text-foreground"
          >
            Unsubscribe
          </Button>
        </div>
      );
    }
    
    return (
      <div className={`flex flex-col gap-3 max-w-lg ${className}`}>
        <div className="flex flex-col sm:flex-row gap-2">
          <Input
            type="text"
            placeholder="Your name (optional)"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="flex-1"
            disabled={isLoading}
          />
          <Input
            type="tel"
            placeholder="Phone (optional)"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="flex-1"
            disabled={isLoading}
          />
        </div>
        <div className="flex flex-col sm:flex-row gap-2">
          <Input
            type="email"
            placeholder="Enter your email *"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1"
            disabled={isLoading}
            required
          />
          <Button 
            onClick={handleSubmit}
            disabled={isLoading || !email}
            className="bg-gradient-accent hover:opacity-90"
          >
            {isLoading ? "Subscribing..." : "Subscribe"}
          </Button>
        </div>
      </div>
    );
  }

  if (variant === "footer") {
    if (isSubscribed) {
      return (
        <div className={className}>
          <h4 className="font-semibold text-lg mb-4 text-white">✅ Subscribed!</h4>
          <p className="text-white/90 text-sm mb-4">
            You're all set with <strong>{subscribedEmail}</strong>. Thanks for subscribing!
          </p>
          <Button 
            variant="outline"
            size="sm"
            onClick={handleUnsubscribe}
            className="border-white/70 text-white bg-primary-foreground/10 hover:bg-white/10"
          >
            Unsubscribe
          </Button>
        </div>
      );
    }
    
    return (
      <div className={className}>
        <h4 className="font-semibold text-lg mb-4 text-primary-foreground">Stay Updated</h4>
        <p className="text-primary-foreground/80 text-sm mb-4">
          Get the latest digital marketing insights and tips delivered to your inbox.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <Input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
            disabled={isLoading}
          />
          <div className="flex gap-2">
            <Input
              type="email"
              placeholder="Your email *"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60 flex-1"
              disabled={isLoading}
              required
            />
            <Input
              type="tel"
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60 flex-1"
              disabled={isLoading}
            />
          </div>
          <Button 
            type="submit"
            disabled={isLoading || !email}
            className="bg-accent hover:bg-accent-hover text-accent-foreground"
          >
            {isLoading ? (
              "Subscribing..."
            ) : (
              <>
                Subscribe
                <ArrowRight className="h-4 w-4 ml-2" />
              </>
            )}
          </Button>
        </form>
      </div>
    );
  }

  // Default variant - full section
  return (
    <section className={`py-20 bg-background ${className}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="bg-gradient-hero text-primary-foreground border-none shadow-glow">
          <CardContent className="p-8 md:p-12">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent rounded-full mb-6">
                <Mail className="h-8 w-8 text-accent-foreground" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Stay Ahead of the Curve
              </h2>
              <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
                Subscribe to our newsletter for the latest digital marketing trends, automation tips, 
                and exclusive insights from industry experts.
              </p>
            </div>

            <div className="max-w-md mx-auto">
              {isSubscribed ? (
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-success rounded-full mb-4">
                    <CheckCircle className="h-10 w-10 text-success-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Welcome Aboard!</h3>
                  <p className="text-primary-foreground/90">
                    You'll receive our next newsletter soon. Thank you for joining our community!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-3">
                    <Input
                      type="text"
                      placeholder="Your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
                      disabled={isLoading}
                    />
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Input
                        type="email"
                        placeholder="Enter your email address *"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="flex-1 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
                        disabled={isLoading}
                        required
                      />
                      <Input
                        type="tel"
                        placeholder="Your phone number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="flex-1 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
                        disabled={isLoading}
                      />
                    </div>
                    <Button 
                      type="submit"
                      disabled={isLoading || !email}
                      className="w-full bg-accent hover:bg-accent-hover text-accent-foreground px-8"
                    >
                      {isLoading ? "Subscribing..." : "Subscribe"}
                      {!isLoading && <ArrowRight className="h-4 w-4 ml-2" />}
                    </Button>
                  </div>
                  <p className="text-sm text-primary-foreground/70 text-center">
                    No spam, unsubscribe at any time. We respect your privacy.
                  </p>
                </form>
              )}
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 pt-8 border-t border-primary-foreground/20">
              <div className="text-center">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Mail className="h-6 w-6 text-accent" />
                </div>
                <h4 className="font-semibold mb-1">Weekly Insights</h4>
                <p className="text-sm text-primary-foreground/80">Latest trends and strategies</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="h-6 w-6 text-accent" />
                </div>
                <h4 className="font-semibold mb-1">Exclusive Content</h4>
                <p className="text-sm text-primary-foreground/80">Subscriber-only resources</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <ArrowRight className="h-6 w-6 text-accent" />
                </div>
                <h4 className="font-semibold mb-1">Early Access</h4>
                <p className="text-sm text-primary-foreground/80">New tools and features first</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Newsletter;