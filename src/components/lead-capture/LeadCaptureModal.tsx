import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { X, Gift, Phone, Mail, User, Building, MapPin, Target } from "lucide-react";
import { toast } from "sonner";
import { addLeadSubmission } from '@/services/firebaseService';

interface LeadData {
  name: string;
  email: string;
  phone: string;
  company: string;
  designation: string;
  city: string;
  state: string;
  businessType: string;
  monthlyBudget: string;
  interestedServices: string[];
  currentChallenges: string;
  timeframe: string;
  referralSource: string;
  timestamp: string;
  userAgent: string;
  pageSource: string;
  sessionId: string;
}

interface LeadCaptureModalProps {
  isOpen: boolean;
  onClose: () => void;
  trigger?: 'page-load' | 'exit-intent' | 'time-spent' | 'scroll' | 'manual';
  offerType?: 'free-consultation' | 'audit' | 'guide' | 'demo';
}

const LeadCaptureModal: React.FC<LeadCaptureModalProps> = ({
  isOpen,
  onClose,
  trigger = 'manual',
  offerType = 'free-consultation'
}) => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [leadData, setLeadData] = useState<LeadData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    designation: '',
    city: '',
    state: '',
    businessType: '',
    monthlyBudget: '',
    interestedServices: [],
    currentChallenges: '',
    timeframe: '',
    referralSource: '',
    timestamp: new Date().toISOString(),
    userAgent: navigator.userAgent,
    pageSource: window.location.pathname,
    sessionId: generateSessionId()
  });

  const offers = {
    'free-consultation': {
      title: '🎯 Get FREE 30-Min Marketing Consultation',
      subtitle: 'Discover how to 3X your business growth with our expert strategies',
      description: 'Join 500+ businesses that transformed their digital presence with MarkFix',
      value: 'Worth ₹5,000 - Absolutely FREE!'
    },
    'audit': {
      title: '📊 FREE Digital Marketing Audit',
      subtitle: 'Get a comprehensive analysis of your online presence',
      description: 'Identify gaps and opportunities to boost your ROI by 300%',
      value: 'Worth ₹10,000 - Limited Time!'
    },
    'guide': {
      title: '📚 FREE Ultimate Marketing Guide',
      subtitle: 'Download our exclusive guide used by top agencies',
      description: '50+ proven strategies to scale your business in 2025',
      value: 'Exclusive Content - FREE Download!'
    },
    'demo': {
      title: '🚀 FREE Automation Tools Demo',
      subtitle: 'See how our tools save 80% time and increase engagement by 300%',
      description: 'Live demonstration of our Instagram, Facebook & LinkedIn automation',
      value: 'Personal Demo - Book Now!'
    }
  };

  const services = [
    'Digital Marketing Strategy',
    'SEO Services',
    'Social Media Marketing',
    'Content Marketing',
    'Social Media Automation',
    'Instagram Automation',
    'Facebook Automation',
    'LinkedIn Automation',
    'WhatsApp Automation',
    'Influencer Marketing',
    'Personal Branding',
    'Freelancer Network',
    'PPC Advertising',
    'Email Marketing',
    'Website Development'
  ];

  function generateSessionId(): string {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  }

  const handleInputChange = (field: keyof LeadData, value: string | string[]) => {
    setLeadData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleServiceToggle = (service: string) => {
    const updatedServices = leadData.interestedServices.includes(service)
      ? leadData.interestedServices.filter(s => s !== service)
      : [...leadData.interestedServices, service];
    
    handleInputChange('interestedServices', updatedServices);
  };

  const validateStep = (stepNumber: number): boolean => {
    switch (stepNumber) {
      case 1:
        return leadData.name.trim() !== '' && 
               leadData.email.trim() !== '' && 
               leadData.phone.trim() !== '';
      case 2:
        return leadData.company.trim() !== '' && 
               leadData.businessType !== '' && 
               leadData.city.trim() !== '';
      case 3:
        return leadData.interestedServices.length > 0 && 
               leadData.monthlyBudget !== '';
      default:
        return true;
    }
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep(step + 1);
    } else {
      toast.error('Please fill in all required fields');
    }
  };

  const handleSubmit = async () => {
    setLoading(true);
    
    try {
      const leadSubmission = {
        ...leadData,
        trigger,
        offerType,
        status: 'new' as const,
        priority: 'medium' as const,
        notes: [],
        source: 'lead-capture-modal' as const
      };
      
      const leadId = await addLeadSubmission(leadSubmission);
      
      const leads = JSON.parse(localStorage.getItem('markfix_leads') || '[]');
      const newLead = {
        ...leadData,
        id: leadId,
        trigger,
        offerType,
        submittedAt: new Date().toISOString()
      };
      
      leads.push(newLead);
      localStorage.setItem('markfix_leads', JSON.stringify(leads));
      
      // Show success message
      toast.success('Thank you! Your information has been saved. Our team will contact you within 24 hours.');
      
      // Track conversion
      try {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        if (typeof window !== 'undefined' && (window as any).gtag) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (window as any).gtag('event', 'lead_conversion', {
            event_category: 'lead_generation',
            event_label: offerType,
            value: 1
          });
        }
      } catch (error) {
        console.log('Analytics tracking error:', error);
      }
      
      // Close modal and reset
      onClose();
      setStep(1);
      setLeadData({
        name: '',
        email: '',
        phone: '',
        company: '',
        designation: '',
        city: '',
        state: '',
        businessType: '',
        monthlyBudget: '',
        interestedServices: [],
        currentChallenges: '',
        timeframe: '',
        referralSource: '',
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        pageSource: window.location.pathname,
        sessionId: generateSessionId()
      });
      
    } catch (error) {
      console.error('Error submitting lead:', error);
      toast.error('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const currentOffer = offers[offerType];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader className="text-center">
          <div className="mx-auto w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-4">
            <Gift className="h-8 w-8 text-white" />
          </div>
          <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {currentOffer.title}
          </DialogTitle>
          <DialogDescription className="text-lg text-muted-foreground">
            {currentOffer.subtitle}
          </DialogDescription>
          <div className="bg-gradient-to-r from-green-100 to-blue-100 p-3 rounded-lg mt-2">
            <p className="text-sm font-semibold text-green-700">{currentOffer.value}</p>
          </div>
        </DialogHeader>

        <div className="mt-6">
          {/* Progress Bar */}
          <div className="mb-6">
            <div className="flex justify-between text-sm text-muted-foreground mb-2">
              <span>Step {step} of 4</span>
              <span>{Math.round((step / 4) * 100)}% Complete</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${(step / 4) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Step 1: Basic Information */}
          {step === 1 && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold flex items-center">
                <User className="h-5 w-5 mr-2" />
                Let's Get Started
              </h3>
              
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    placeholder="Enter your full name"
                    value={leadData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                  />
                </div>
                
                <div>
                  <Label htmlFor="email">Business Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@company.com"
                    value={leadData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                  />
                </div>
                
                <div>
                  <Label htmlFor="phone">WhatsApp Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={leadData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Business Information */}
          {step === 2 && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold flex items-center">
                <Building className="h-5 w-5 mr-2" />
                Business Details
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="company">Company Name *</Label>
                  <Input
                    id="company"
                    placeholder="Your company name"
                    value={leadData.company}
                    onChange={(e) => handleInputChange('company', e.target.value)}
                  />
                </div>
                
                <div>
                  <Label htmlFor="designation">Your Designation</Label>
                  <Input
                    id="designation"
                    placeholder="CEO, Marketing Manager, etc."
                    value={leadData.designation}
                    onChange={(e) => handleInputChange('designation', e.target.value)}
                  />
                </div>
                
                <div>
                  <Label htmlFor="city">City *</Label>
                  <Input
                    id="city"
                    placeholder="Your city"
                    value={leadData.city}
                    onChange={(e) => handleInputChange('city', e.target.value)}
                  />
                </div>
                
                <div>
                  <Label htmlFor="state">State</Label>
                  <Input
                    id="state"
                    placeholder="Your state"
                    value={leadData.state}
                    onChange={(e) => handleInputChange('state', e.target.value)}
                  />
                </div>
                
                <div className="md:col-span-2">
                  <Label htmlFor="businessType">Business Type *</Label>
                  <Select onValueChange={(value) => handleInputChange('businessType', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your business type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="startup">Startup</SelectItem>
                      <SelectItem value="small-business">Small Business</SelectItem>
                      <SelectItem value="medium-enterprise">Medium Enterprise</SelectItem>
                      <SelectItem value="large-enterprise">Large Enterprise</SelectItem>
                      <SelectItem value="agency">Marketing Agency</SelectItem>
                      <SelectItem value="freelancer">Freelancer</SelectItem>
                      <SelectItem value="ecommerce">E-commerce</SelectItem>
                      <SelectItem value="saas">SaaS Company</SelectItem>
                      <SelectItem value="healthcare">Healthcare</SelectItem>
                      <SelectItem value="education">Education</SelectItem>
                      <SelectItem value="real-estate">Real Estate</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Service Requirements */}
          {step === 3 && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold flex items-center">
                <Target className="h-5 w-5 mr-2" />
                Service Requirements
              </h3>
              
              <div>
                <Label>Which services are you interested in? *</Label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-2">
                  {services.map((service) => (
                    <label
                      key={service}
                      className={`flex items-center space-x-2 p-2 rounded-lg border cursor-pointer transition-colors ${
                        leadData.interestedServices.includes(service)
                          ? 'bg-blue-50 border-blue-500 text-blue-700'
                          : 'hover:bg-gray-50'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={leadData.interestedServices.includes(service)}
                        onChange={() => handleServiceToggle(service)}
                        className="rounded"
                      />
                      <span className="text-sm">{service}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              <div>
                <Label htmlFor="budget">Monthly Marketing Budget *</Label>
                <Select onValueChange={(value) => handleInputChange('monthlyBudget', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your budget range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="under-25k">Under ₹25,000</SelectItem>
                    <SelectItem value="25k-50k">₹25,000 - ₹50,000</SelectItem>
                    <SelectItem value="50k-100k">₹50,000 - ₹1,00,000</SelectItem>
                    <SelectItem value="100k-250k">₹1,00,000 - ₹2,50,000</SelectItem>
                    <SelectItem value="250k-500k">₹2,50,000 - ₹5,00,000</SelectItem>
                    <SelectItem value="above-500k">Above ₹5,00,000</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}

          {/* Step 4: Final Details */}
          {step === 4 && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Almost Done!</h3>
              
              <div>
                <Label htmlFor="challenges">Current Marketing Challenges</Label>
                <Textarea
                  id="challenges"
                  placeholder="What are your biggest marketing challenges right now?"
                  value={leadData.currentChallenges}
                  onChange={(e) => handleInputChange('currentChallenges', e.target.value)}
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="timeframe">When do you want to start?</Label>
                  <Select onValueChange={(value) => handleInputChange('timeframe', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select timeframe" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="immediately">Immediately</SelectItem>
                      <SelectItem value="1-week">Within 1 week</SelectItem>
                      <SelectItem value="1-month">Within 1 month</SelectItem>
                      <SelectItem value="3-months">Within 3 months</SelectItem>
                      <SelectItem value="planning">Just planning</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="referral">How did you hear about us?</Label>
                  <Select onValueChange={(value) => handleInputChange('referralSource', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select source" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="google">Google Search</SelectItem>
                      <SelectItem value="social-media">Social Media</SelectItem>
                      <SelectItem value="referral">Friend/Colleague Referral</SelectItem>
                      <SelectItem value="linkedin">LinkedIn</SelectItem>
                      <SelectItem value="facebook">Facebook</SelectItem>
                      <SelectItem value="instagram">Instagram</SelectItem>
                      <SelectItem value="youtube">YouTube</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">What happens next?</h4>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>✅ Our expert will review your requirements</li>
                  <li>✅ You'll receive a call within 24 hours</li>
                  <li>✅ We'll discuss a customized strategy for your business</li>
                  <li>✅ Get your {currentOffer.title.toLowerCase()}</li>
                </ul>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex justify-between mt-6">
            {step > 1 && (
              <Button
                variant="outline"
                onClick={() => setStep(step - 1)}
                disabled={loading}
              >
                Previous
              </Button>
            )}
            
            <div className="ml-auto">
              {step < 4 ? (
                <Button
                  onClick={handleNext}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                >
                  Next Step
                </Button>
              ) : (
                <Button
                  onClick={handleSubmit}
                  disabled={loading}
                  className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700"
                >
                  {loading ? 'Submitting...' : `Get My ${currentOffer.title.split(' ')[1]}`}
                </Button>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LeadCaptureModal;