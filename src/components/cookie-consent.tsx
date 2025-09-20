import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { X, Cookie, Settings } from "lucide-react";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("markfix-cookie-consent");
    if (!consent) {
      // Show banner after a small delay to avoid flash
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptAllCookies = () => {
    localStorage.setItem("markfix-cookie-consent", JSON.stringify({
      necessary: true,
      analytics: true,
      marketing: true,
      timestamp: new Date().toISOString()
    }));
    setIsVisible(false);
  };

  const acceptNecessaryOnly = () => {
    localStorage.setItem("markfix-cookie-consent", JSON.stringify({
      necessary: true,
      analytics: false,
      marketing: false,
      timestamp: new Date().toISOString()
    }));
    setIsVisible(false);
  };

  const closeBanner = () => {
    setIsVisible(false);
    // Set a temporary flag to not show again this session
    sessionStorage.setItem("markfix-cookie-dismissed", "true");
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md z-50 animate-in slide-in-from-bottom-4 duration-300">
      <Card className="shadow-elegant border-border/50 bg-card/95 backdrop-blur">
        <CardContent className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center space-x-2">
              <Cookie className="h-5 w-5 text-accent" />
              <h3 className="font-semibold text-foreground">We use cookies</h3>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={closeBanner}
              className="h-8 w-8 p-0 text-muted-foreground hover:text-foreground"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          <p className="text-sm text-muted-foreground mb-4">
            We use cookies to enhance your browsing experience, analyze our traffic, and provide 
            personalized content. By clicking "Accept All", you consent to our use of cookies.
          </p>

          {showDetails && (
            <div className="space-y-3 mb-4 text-xs text-muted-foreground border-t border-border pt-4">
              <div>
                <strong className="text-foreground">Necessary Cookies:</strong> Essential for website functionality and security.
              </div>
              <div>
                <strong className="text-foreground">Analytics Cookies:</strong> Help us understand how visitors interact with our website.
              </div>
              <div>
                <strong className="text-foreground">Marketing Cookies:</strong> Used to deliver relevant advertisements and track campaign performance.
              </div>
            </div>
          )}

          <div className="space-y-2">
            <div className="flex flex-col sm:flex-row gap-2">
              <Button 
                onClick={acceptAllCookies}
                className="flex-1 bg-gradient-accent hover:opacity-90 text-accent-foreground"
              >
                Accept All
              </Button>
              <Button 
                onClick={acceptNecessaryOnly}
                variant="outline"
                className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                Necessary Only
              </Button>
            </div>
            
            <Button
              variant="ghost"
              onClick={() => setShowDetails(!showDetails)}
              className="w-full text-xs text-muted-foreground hover:text-foreground"
            >
              <Settings className="h-3 w-3 mr-1" />
              {showDetails ? "Hide Details" : "Cookie Details"}
            </Button>
          </div>

          <div className="mt-3 pt-3 border-t border-border">
            <p className="text-xs text-muted-foreground">
              Read our{" "}
              <button 
                onClick={() => window.location.href = '/privacy-policy'}
                className="text-primary hover:underline"
              >
                Privacy Policy
              </button>{" "}
              and{" "}
              <button 
                onClick={() => window.location.href = '/terms-conditions'}
                className="text-primary hover:underline"
              >
                Terms & Conditions
              </button>.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CookieConsent;