import { Card } from "@/components/ui/card";
import { Zap, BarChart3, Target, ArrowRight } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Zap,
      title: "Smart Automation",
      description: "Automate repetitive tasks like emails, scheduling, and reporting. Save hours every day with intelligent workflows that learn from your business patterns.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: BarChart3,
      title: "AI-Driven Insights",
      description: "Get powerful analytics on sales trends, customer behavior, and business performance. Make data-driven decisions with real-time insights and predictions.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Target,
      title: "Personalized Recommendations",
      description: "Receive tailored suggestions to improve efficiency, reduce costs, and grow your business. Our AI adapts to your unique business needs and goals.",
    
    }
  ];

  return (
    <section id="features" className="py-24 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl righteous md:text-5xl font-bold text-foreground mb-6">
            Powerful Features for
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Modern SMEs</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to transform your business operations and unlock new levels of efficiency
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group p-8 bg-gradient-card border-border/50 hover:shadow-feature transition-all duration-500 hover:-translate-y-2"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br bg-black ${feature.gradient} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-full h-full text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-foreground mb-4 righteous group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                {feature.description}
              </p>
              <a href="/">
              <div className="flex items-center text-primary font-medium group-hover:translate-x-2 transition-transform">
                Learn more
                <ArrowRight className="w-4 h-4 ml-2" />
              </div>
              </a>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;