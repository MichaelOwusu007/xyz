import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import aiAssistantImage from "@/assets/ai-assistant-hero.png"; 
import AuthModal from "./AuthModal";
import WaitlistModal from "./WaitlistModal";

const Hero = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isWaitlistModalOpen, setIsWaitlistModalOpen] = useState(false);
  const floatingRef = useRef<HTMLDivElement>(null);

  // simple floating animation
  useEffect(() => {
    const element = floatingRef.current;
    if (element) {
      const animation = element.animate(
        [
          { transform: "translateY(0px)" },
          { transform: "translateY(-12px)" },
          { transform: "translateY(0px)" },
        ],
        {
          duration: 4000,
          iterations: Infinity,
          easing: "ease-in-out",
        }
      );
      return () => animation.cancel();
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-950 dark:to-black overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - AI Image */}
          <div className="space-y-8 -mt-14 text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <span className="text-sm font-medium">
                Introducing XYZ AI - Your Business Partner
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-6xl font-bold righteous text-foreground leading-tight">
              Your Smart AI
              <br />
              <span className=" hero-h1-gradient bg-clip-text text-transparent">
                Business Assistant
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0">
              Streamline your SME operations with intelligent automation,
              AI-driven insights, and personalized recommendations that grow
              your business.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center poppins lg:justify-start">
              <Button
                size="lg"
                className="group"
                onClick={() => setIsAuthModalOpen(true)}
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                variant="outline_hero"
                size="lg"
                className="group poppins font-semibold"
                onClick={() => setIsWaitlistModalOpen(true)}
              >
                <Play className="mr-2 h-4 w-4" />
                Join Waitlist
              </Button>
            </div>
          </div>
          {/* Right side */}
             <div ref={floatingRef} className="flex justify-center -mt-14 relative">
            {/* Gradient Background Circle */}
            <div className="absolute inset-0 flex justify-center items-center">
              <div className="w-80 h-80 md:w-96 md:h-96 bg-gradient-to-tr from-primary/30 via-purple-400/20 to-pink-400/30 rounded-full blur-3xl opacity-70"></div>
            </div>
            <img
              src={aiAssistantImage}
              alt="AI Assistant"
              className="relative w-full max-w-md h-auto object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* Modals */}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />
      <WaitlistModal
        isOpen={isWaitlistModalOpen}
        onClose={() => setIsWaitlistModalOpen(false)}
      />
    </section>
  );
};

export default Hero;
