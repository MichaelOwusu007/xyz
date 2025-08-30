import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Zap, Shield, TrendingUp, Clock } from "lucide-react";
import AuthModal from "./AuthModal";

const CTA = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const benefits = [
    {
      icon: <Clock className="w-5 h-5" />,
      text: "Save 20+ hours per week"
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      text: "Increase efficiency by 300%"
    },
    {
      icon: <Shield className="w-5 h-5" />,
      text: "Enterprise-grade security"
    },
    {
      icon: <Zap className="w-5 h-5" />,
      text: "Setup in under 5 minutes"
    }
  ];

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <h2 className="text-5xl righteous font-bold text-primary-foreground mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto mb-8">
            Join the businesses already using XYZ AI to automate their operations, 
            boost productivity, and focus on what matters most - growing their business.
          </p>
        </div>

        <Card className="bg-background/95 backdrop-blur-sm border-border/20 shadow-hero-lg p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl righteous font-bold text-foreground mb-6">
                Start Your Free Trial Today
              </h3>
              <p className="text-lg text-muted-foreground mb-8">
                No credit card required. Full access to all features for 14 days. 
                Cancel anytime, no questions asked.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="text-primary">
                      {benefit.icon}
                    </div>
                    <span className="text-card-foreground font-medium">
                      {benefit.text}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary-dark text-primary-foreground shadow-feature group"
                  onClick={() => setIsAuthModalOpen(true)}
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
             
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-hero rounded-2xl p-8 border border-border/20">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full mb-6">
                    <Zap className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h4 className="text-2xl font-bold text-foreground mb-4">
                    Limited Time Offer
                  </h4>
                  <p className="text-muted-foreground mb-6">
                    Get 3 months free when you sign up for an annual plan before the end of this month.
                  </p>
                  <div className="bg-background rounded-lg p-4 border border-border/20">
                    <div className="text-3xl font-bold text-primary mb-2">
                      $0
                    </div>
                    <div className="text-sm text-muted-foreground">
                      For your first 14 days
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent rounded-full animate-float"></div>
              <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-primary rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
            </div>
          </div>
        </Card>

        <div className="text-center mt-12">
          <p className="text-primary-foreground/80 text-lg">
            Trusted by 1000+ businesses worldwide • 99.9% uptime guarantee • 24/7 support
          </p>
        </div>
      </div>
            <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />
    </section>
  );
};

export default CTA;