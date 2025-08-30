import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check, Zap, Crown, Rocket } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "Free",
      description: "Perfect for small businesses getting started with AI",
      icon: Zap,
      features: [
        "Up to 100 AI interactions per month",
        "Basic task automation",
        "Email scheduling",
        "Simple reporting",
        "Community support",
        "Mobile app access"
      ],
      buttonText: "Get Started",
      popular: false
    },
    {
      name: "Professional",
      price: "$29",
      period: "/month",
      description: "Advanced AI features for growing businesses",
      icon: Crown,
      features: [
        "Unlimited AI interactions",
        "Advanced automation workflows",
        "AI-driven insights & analytics",
        "Custom integrations",
        "Priority email support",
        "Team collaboration tools",
        "API access",
        "Advanced reporting"
      ],
      buttonText: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$99",
      period: "/month",
      description: "Full-scale AI solution for large organizations",
      icon: Rocket,
      features: [
        "Everything in Professional",
        "Custom AI model training",
        "White-label solutions",
        "Dedicated account manager",
        "24/7 phone support",
        "On-premise deployment option",
        "Advanced security features",
        "Custom SLA agreements"
      ],
      buttonText: "Contact Sales",
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl righteous md:text-6xl font-bold text-foreground mb-4">
              Simple, Transparent
              <span className="bg-gradient-primary bg-clip-text text-transparent"> Pricing</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the perfect plan for your business. Start free and scale as you grow.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {plans.map((plan, index) => (
              <div
                key={plan.name}
                className={`relative bg-card rounded-2xl border p-8 transition-all duration-300 hover:shadow-xl hover:scale-105 ${
                  plan.popular 
                    ? 'border-primary shadow-elegant ring-2 ring-primary/20' 
                    : 'border-border/50 hover:border-primary/50'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <plan.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                    {plan.period && <span className="text-muted-foreground">{plan.period}</span>}
                  </div>
                  <p className="text-muted-foreground">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className="w-full" 
                  variant={plan.popular ? "default" : "outline"}
                  size="lg"
                >
                  {plan.buttonText}
                </Button>
              </div>
            ))}
          </div>

          <div className="text-center bg-card rounded-2xl border border-border/50 p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Need a Custom Solution?
            </h2>
            <p className="text-muted-foreground mb-6">
              We offer tailored AI solutions for unique business requirements. Contact our team to discuss your specific needs.
            </p>
            <Button variant="outline" size="lg">
              Schedule a Consultation
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Pricing;