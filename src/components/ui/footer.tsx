import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react";
import Newsletter from "@/components/newsletter";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <span className="font-bold text-xl text-primary tracking-tight">MarkFix</span>
            </div>
            <p className="text-primary-foreground/80 text-sm">
              Your trusted partner in digital marketing excellence. We help brands grow through 
              innovative strategies and cutting-edge automation tools.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 hover:text-accent cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 hover:text-accent cursor-pointer transition-colors" />
              <Linkedin className="h-5 w-5 hover:text-accent cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 hover:text-accent cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services" onClick={scrollToTop} className="text-primary-foreground/80 hover:text-accent transition-colors">Personal Branding</Link></li>
              <li><Link to="/services" onClick={scrollToTop} className="text-primary-foreground/80 hover:text-accent transition-colors">Brand Strategy</Link></li>
              <li><Link to="/services" onClick={scrollToTop} className="text-primary-foreground/80 hover:text-accent transition-colors">Content Marketing</Link></li>
              <li><Link to="/services" onClick={scrollToTop} className="text-primary-foreground/80 hover:text-accent transition-colors">Social Media Marketing</Link></li>
              <li><Link to="/services" onClick={scrollToTop} className="text-primary-foreground/80 hover:text-accent transition-colors">SEO Services</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Products</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/products" onClick={scrollToTop} className="text-primary-foreground/80 hover:text-accent transition-colors">Instagram Automation</Link></li>
              <li><Link to="/products" onClick={scrollToTop} className="text-primary-foreground/80 hover:text-accent transition-colors">Facebook Automation</Link></li>
              <li><Link to="/products" onClick={scrollToTop} className="text-primary-foreground/80 hover:text-accent transition-colors">LinkedIn Automation</Link></li>
              <li><Link to="/products" onClick={scrollToTop} className="text-primary-foreground/80 hover:text-accent transition-colors">WhatsApp Automation</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contact Us</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span className="text-primary-foreground/80">markfixofficial@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span className="text-primary-foreground/80">+91 63749 95530</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span className="text-primary-foreground/80">Salem, Tamil Nadu, India</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-2 lg:col-span-1">
            <Newsletter variant="footer" />
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-foreground/60 text-sm">
            © {currentYear} MarkFix Digital Marketing Agency. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="text-primary-foreground/60 hover:text-accent text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-conditions" className="text-primary-foreground/60 hover:text-accent text-sm transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;