import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";
import ScrollToTop from "@/components/scroll-to-top";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Terms &
              <span className="text-primary block">Conditions</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Please read these terms and conditions carefully before using our services.
            </p>
            <p className="text-sm text-muted-foreground">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-8">
            {/* Agreement */}
            <Card className="border-2 border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl">Agreement to Terms</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  By accessing and using MarkFix's website and services, you accept and agree to be bound by the terms 
                  and provision of this agreement. If you do not agree to abide by the above, please do not use this 
                  service.
                </p>
              </CardContent>
            </Card>

            {/* Services Description */}
            <Card className="border-2 border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl">Services Description</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  MarkFix provides digital marketing services including but not limited to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Personal Branding and Brand Strategy Building</li>
                  <li>Content Marketing and Social Media Marketing</li>
                  <li>Search Engine Optimization (SEO)</li>
                  <li>Meta & Google Ads Management</li>
                  <li>Banner & Poster Design</li>
                  <li>Automation Tools for Social Media Platforms</li>
                  <li>Traditional Marketing Solutions</li>
                </ul>
              </CardContent>
            </Card>

            {/* User Responsibilities */}
            <Card className="border-2 border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl">User Responsibilities</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">By using our services, you agree to:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Provide accurate and complete information when requested</li>
                  <li>Maintain the confidentiality of your account credentials</li>
                  <li>Use our services only for lawful purposes</li>
                  <li>Not interfere with or disrupt our services or servers</li>
                  <li>Not attempt to gain unauthorized access to our systems</li>
                  <li>Comply with all applicable laws and regulations</li>
                  <li>Respect intellectual property rights</li>
                </ul>
              </CardContent>
            </Card>

            {/* Payment Terms */}
            <Card className="border-2 border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl">Payment Terms</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Service Fees</h3>
                  <p className="text-muted-foreground">
                    All fees for our services are as quoted in our proposals or as listed on our website. 
                    Prices are subject to change with 30 days' notice.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Payment Schedule</h3>
                  <p className="text-muted-foreground">
                    Payment terms are typically 50% upfront and 50% upon completion, unless otherwise agreed 
                    in writing. Monthly services require payment in advance.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Late Payments</h3>
                  <p className="text-muted-foreground">
                    Late payment fees may apply to overdue accounts. Services may be suspended for 
                    accounts more than 30 days overdue.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Intellectual Property */}
            <Card className="border-2 border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl">Intellectual Property</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Our Content</h3>
                  <p className="text-muted-foreground">
                    All content on our website, including text, graphics, logos, images, and software, 
                    is the property of MarkFix and is protected by copyright and other intellectual property laws.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Client Content</h3>
                  <p className="text-muted-foreground">
                    Clients retain ownership of their original content. By working with us, clients grant 
                    us a license to use their content for the purpose of providing services.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Work Product</h3>
                  <p className="text-muted-foreground">
                    Upon full payment, clients receive rights to the final deliverables created specifically 
                    for them, excluding our proprietary methodologies and tools.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Service Level Agreement */}
            <Card className="border-2 border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl">Service Level Agreement</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Delivery Timeline</h3>
                  <p className="text-muted-foreground">
                    We strive to meet all agreed-upon deadlines. Delays may occur due to client feedback 
                    cycles, technical issues, or circumstances beyond our control.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Revisions</h3>
                  <p className="text-muted-foreground">
                    Most projects include a specified number of revisions. Additional revisions may 
                    incur extra charges as outlined in the project agreement.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Support</h3>
                  <p className="text-muted-foreground">
                    We provide ongoing support as specified in individual service agreements. 
                    Emergency support may be available for additional fees.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Limitation of Liability */}
            <Card className="border-2 border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl">Limitation of Liability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To the maximum extent permitted by law, MarkFix shall not be liable for any indirect, 
                  incidental, special, consequential, or punitive damages, including without limitation, 
                  loss of profits, data, use, goodwill, or other intangible losses, resulting from your 
                  use of our services.
                </p>
              </CardContent>
            </Card>

            {/* Termination */}
            <Card className="border-2 border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl">Termination</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">By Client</h3>
                  <p className="text-muted-foreground">
                    Clients may terminate services with 30 days' written notice. Fees for work completed 
                    up to the termination date will remain due.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">By MarkFix</h3>
                  <p className="text-muted-foreground">
                    We may terminate services immediately for breach of these terms, non-payment, 
                    or other violations of our policies.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Disclaimer */}
            <Card className="border-2 border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl">Disclaimer</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  While we strive to provide high-quality services, we cannot guarantee specific results 
                  from marketing campaigns. Success depends on various factors including market conditions, 
                  competition, and client cooperation. Our services are provided "as is" without warranties 
                  of any kind.
                </p>
              </CardContent>
            </Card>

            {/* Governing Law */}
            <Card className="border-2 border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl">Governing Law</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  These terms and conditions are governed by and construed in accordance with the laws 
                  of India. Any disputes arising under these terms shall be subject to the exclusive 
                  jurisdiction of the courts in Salem, Tamil Nadu.
                </p>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="border-2 border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl">Contact Information</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  If you have any questions about these Terms and Conditions, please contact us:
                </p>
                <div className="space-y-2 text-muted-foreground">
                  <p><strong>Email:</strong> markfixofficial@gmail.com</p>
                  <p><strong>Phone:</strong> +91 63749 95530</p>
                  <p><strong>Address:</strong> Jalakandapuram, Salem, Tamil Nadu 636303, IN</p>
                </div>
              </CardContent>
            </Card>

            {/* Changes to Terms */}
            <Card className="border-2 border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl">Changes to Terms</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We reserve the right to modify these terms at any time. Changes will be effective 
                  immediately upon posting on our website. Your continued use of our services after 
                  any changes constitutes acceptance of the new terms.
                </p>
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

export default TermsConditions;