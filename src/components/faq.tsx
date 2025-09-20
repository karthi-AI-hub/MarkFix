import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HelpCircle } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      question: "What services does MarkFix offer?",
      answer: "MarkFix offers comprehensive digital marketing services including personal branding, brand strategy building, content marketing, social media marketing, SEO services, and banner & poster design. We also provide automation tools for Instagram, Facebook, LinkedIn, and WhatsApp."
    },
    {
      question: "How do your automation tools work?",
      answer: "Our automation tools use advanced algorithms to schedule posts, manage engagement, optimize hashtags, and track analytics across multiple social media platforms. They're designed to save you time while maintaining authentic interaction with your audience."
    },
    {
      question: "What makes MarkFix different from other digital marketing agencies?",
      answer: "MarkFix combines strategic marketing expertise with cutting-edge automation technology. We focus on ROI-driven results, provide 24/7 support, and offer both services and products to meet diverse business needs. Our team has a proven track record with 500+ satisfied clients and a 95% success rate."
    },
    {
      question: "How long does it take to see results from your services?",
      answer: "Results vary depending on the service and your specific goals. Typically, you'll start seeing improvements in engagement within 2-4 weeks, while comprehensive brand strategy and SEO results may take 3-6 months. We provide regular reporting to track progress throughout the process."
    },
    {
      question: "Do you offer customized packages?",
      answer: "Yes! We understand that every business has unique needs. Our team works with you to create customized packages that align with your budget, goals, and timeline. Contact us for a free consultation to discuss your specific requirements."
    },
    {
      question: "Is there a free trial available for your automation tools?",
      answer: "Yes, we offer free trials for our automation tools so you can experience their effectiveness before committing. The trial period varies by product, and our team will guide you through the setup and optimization process."
    },
    {
      question: "What kind of support do you provide?",
      answer: "We provide 24/7 customer support through multiple channels including email, phone, and live chat. Our support team includes technical specialists and marketing experts who can help with both strategic guidance and technical troubleshooting."
    },
    {
      question: "Can you help with businesses in specific industries?",
      answer: "Absolutely! Our team has experience across various industries including e-commerce, technology, healthcare, fashion, real estate, and more. We tailor our strategies to your industry's specific audience, trends, and compliance requirements."
    },
    {
      question: "What are your pricing models?",
      answer: "We offer flexible pricing models including project-based pricing, monthly retainers, and subscription plans for our automation tools. Pricing varies based on scope, complexity, and duration. Contact us for a detailed quote based on your specific needs."
    },
    {
      question: "How do you measure success and ROI?",
      answer: "We use comprehensive analytics and KPIs tailored to your goals, including engagement rates, conversion rates, website traffic, lead generation, and revenue attribution. You'll receive detailed monthly reports showing progress and ROI metrics."
    },
    {
      question: "Do you provide training for using your automation tools?",
      answer: "Yes, we provide comprehensive training sessions for all our automation tools, including video tutorials, documentation, and one-on-one training sessions. Our goal is to ensure you can maximize the value of our tools even after the initial setup."
    },
    {
      question: "What happens if I'm not satisfied with the results?",
      answer: "Client satisfaction is our top priority. If you're not seeing the expected results, we'll work with you to adjust the strategy at no additional cost. We also offer satisfaction guarantees on many of our services - contact us to learn more about our specific policies."
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-hero rounded-full mb-6">
            <HelpCircle className="h-8 w-8 text-primary-foreground" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked <span className="bg-gradient-hero bg-clip-text text-transparent">Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our services, products, and how we can help grow your business.
          </p>
        </div>

        {/* FAQ Accordion */}
        <Card className="shadow-elegant border-border/50">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Got Questions? We've Got Answers</CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border border-border/50 rounded-lg px-6 hover:shadow-card transition-all duration-300"
                >
                  <AccordionTrigger className="text-left hover:no-underline hover:text-primary py-6">
                    <span className="font-medium pr-4">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6 pt-2 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Card className="bg-gradient-hero text-primary-foreground border-none shadow-glow">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
              <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
                Our team is here to help! Get in touch for personalized answers and expert guidance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  className="bg-accent hover:bg-accent-hover text-accent-foreground px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 shadow-card"
                  onClick={() => window.location.href = '/contact'}
                >
                  Contact Our Experts
                </button>
                <button 
                  className="bg-transparent border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-3 rounded-lg font-medium transition-all duration-300"
                  onClick={() => window.location.href = 'tel:+916374995530'}
                >
                  Call Us Now
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FAQ;