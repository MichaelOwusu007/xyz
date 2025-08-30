import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import AuthModal from "./AuthModal";

const Header = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="w-full py-6 px-4 border-b border-border/50 bg-background/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="/">
           <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-lg bg-black flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">X</span>
          </div>
          <h1 className="text-2xl font-bold text-foreground">XYZ AI</h1>
        </div>
        </a>
        <nav className="hidden md:flex items-center space-x-8">
          {location.pathname === "/" ? (
            <>
              <a href="#features" className="text-muted-foreground hover:text-foreground text-lg font-semibold transition-smooth">
                Features
              </a>
              <a href="#about" className="text-muted-foreground hover:text-foreground text-lg font-semibold transition-smooth">
                About
              </a>
              <a href="/contact" className="text-muted-foreground text-lg font-semibold hover:text-foreground transition-smooth">
                Contact
              </a>
            </>
          ) : (
            <>
              <Link 
                to="/pricing" 
                className={`transition-smooth ${isActive('/pricing') ? 'text-primary font-medium' : 'text-muted-foreground hover:text-foreground'}`}
              >
                Pricing
              </Link>
              <Link 
                to="/support" 
                className={`transition-smooth ${isActive('/support') ? 'text-primary font-medium' : 'text-muted-foreground hover:text-foreground'}`}
              >
                Support
              </Link>
              <Link 
                to="/contact" 
                className={`transition-smooth ${isActive('/contact') ? 'text-primary font-medium' : 'text-muted-foreground hover:text-foreground'}`}
              >
                Contact
              </Link>
            </>
          )}
        </nav>

        <Button 
          variant="outline_hero" 
          size="sm"
          onClick={() => setIsAuthModalOpen(true)}
        >
          Get Started
        </Button>
      </div>
      
      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
      />
    </header>
  );
};

export default Header;