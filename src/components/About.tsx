import { Card } from "@/components/ui/card";
import { CheckCircle, Users, TrendingUp, Shield } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Users, label: "SMEs Supported", value: "20+" },
    { icon: TrendingUp, label: "Efficiency Increase", value: "40%" },
    { icon: CheckCircle, label: "Tasks Automated", value: "1K+" },
    { icon: Shield, label: "Uptime", value: "99.9%" }
  ];

  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl righteous md:text-5xl font-bold text-foreground mb-6">
              About XYZ AI
              <span className="bg-gradient-primary bg-clip-text text-transparent"> Business Assistant</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              XYZ AI is a cutting-edge business assistant designed specifically for small and medium-sized enterprises. 
              Our platform combines the power of artificial intelligence with deep understanding of SME challenges 
              to deliver solutions that actually work.
            </p>
            
            <div className="space-y-4 mb-8">
              {[
                "Seamlessly integrate with your existing tools",
                "No technical expertise required - just plug and play",
                "24/7 AI-powered support and optimization",
                "Scalable solution that grows with your business"
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="p-6 text-center bg-gradient-card border-border/50 hover:shadow-card transition-all duration-300">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;