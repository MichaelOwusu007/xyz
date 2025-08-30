import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Twitter, Linkedin, Github } from "lucide-react";
import AuthModal from "./AuthModal";

const Footer = () => {

    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  return (
    <footer className="bg-muted/50 border-t border-border/50">
      <div className="max-w-7xl text-[16px] mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg bg-black flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">X</span>
              </div>
              <h3 className="text-xl font-bold text-foreground">XYZ AI</h3>
            </div>
            <p className="text-muted-foreground">
              Empowering SMEs with intelligent business automation and AI-driven insights.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Product</h4>
            <div className="space-y-2">
              <Link to="/#features" className="block text-muted-foreground hover:text-primary transition-colors">
                Features
              </Link>
              <Link to="/pricing" className="block text-muted-foreground hover:text-primary transition-colors">
                Pricing
              </Link>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                API
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Documentation
              </a>
            </div>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Support</h4>
            <div className="space-y-2">
              <Link to="/support" className="block text-muted-foreground hover:text-primary transition-colors">
                Help Center
              </Link>
              <Link to="/contact" className="block text-muted-foreground hover:text-primary transition-colors">
                Contact
              </Link>
              <Link to="/privacy" className="block text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <a href="/" className="block text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
          
          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Contact Info</h4>
            <div className="space-y-3 mb-4">
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span>hello@xyzai.com</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>+233 592 515 464</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>Accra, Ghana</span>
              </div>
            </div>
           <Button
                size="lg"
                className="group"
                onClick={() => setIsAuthModalOpen(true)}
              >
                Get Started Today
              </Button>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            © 2025 XYZ AI. All rights reserved.
          </p>
          
          <div className="flex items-center space-x-4">
            {[
              { icon: Twitter, href: "https://twitter.com/Mickerl_dev" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/mickerl-codes/" },
              { icon: Github, href: "https://github.com/MichaelOwusu007" }
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="w-10 h-10 rounded-full bg-muted border border-border hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center justify-center"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
      
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />
    </footer>
  );
};

export default Footer;