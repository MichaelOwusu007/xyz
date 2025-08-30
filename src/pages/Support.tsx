import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  MessageCircle, 
  BookOpen, 
  Video, 
  Mail, 
  Phone, 
  Clock,
  HelpCircle,
  FileText,
  Users
} from "lucide-react";

const Support = () => {
  const supportOptions = [
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Get instant help from our AI-powered support bot or connect with a human agent",
      availability: "24/7 Available",
      action: "Start Chat"
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Send us a detailed message and we'll respond within 2-4 hours",
      availability: "Response within 4hrs",
      action: "Send Email"
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak directly with our technical experts (Enterprise plan only)",
      availability: "Mon-Fri 9AM-6PM",
      action: "Call Now"
    }
  ];

  const resources = [
    {
      icon: BookOpen,
      title: "Knowledge Base",
      description: "Comprehensive guides and tutorials",
      count: "150+ Articles"
    },
    {
      icon: Video,
      title: "Video Tutorials",
      description: "Step-by-step video walkthroughs",
      count: "50+ Videos"
    },
    {
      icon: FileText,
      title: "API Documentation",
      description: "Complete technical documentation",
      count: "Full Reference"
    },
    {
      icon: Users,
      title: "Community Forum",
      description: "Connect with other users",
      count: "5K+ Members"
    }
  ];

  const faqs = [
    {
      question: "How does the AI business assistant work?",
      answer: "Our AI analyzes your business data to provide insights, automate repetitive tasks, and make intelligent recommendations to improve efficiency."
    },
    {
      question: "Is my business data secure?",
      answer: "Yes, we use enterprise-grade encryption and comply with SOC 2, GDPR, and other security standards to protect your data."
    },
    {
      question: "Can I integrate XYZ AI with my existing tools?",
      answer: "Absolutely! We offer integrations with popular business tools like CRM systems, email platforms, and accounting software."
    },
    {
      question: "What kind of businesses can benefit from XYZ AI?",
      answer: "XYZ AI is designed for SMEs across various industries including retail, services, consulting, and e-commerce."
    },
    {
      question: "How do I upgrade or downgrade my plan?",
      answer: "You can change your plan anytime from your account settings. Changes take effect immediately with prorated billing."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
              How can we
              <span className="bg-gradient-primary bg-clip-text text-transparent"> help you?</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get the support you need to succeed with XYZ AI. We're here to help every step of the way.
            </p>
          </div>

          {/* Support Options */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {supportOptions.map((option, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <option.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <CardTitle>{option.title}</CardTitle>
                  <CardDescription>{option.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground mb-4">
                    <Clock className="w-4 h-4" />
                    <span>{option.availability}</span>
                  </div>
                  <Button className="w-full">{option.action}</Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Resources */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-foreground text-center mb-8">
              Self-Service Resources
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              {resources.map((resource, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer">
                  <CardHeader>
                    <resource.icon className="w-10 h-10 mx-auto mb-3 text-primary" />
                    <CardTitle className="text-lg">{resource.title}</CardTitle>
                    <CardDescription>{resource.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <span className="text-sm font-medium text-primary">{resource.count}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div className="bg-card rounded-2xl border border-border/50 p-8">
            <h2 className="text-3xl font-bold text-foreground text-center mb-8">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-border/50 pb-6 last:border-b-0">
                  <div className="flex items-start space-x-3">
                    <HelpCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {faq.question}
                      </h3>
                      <p className="text-muted-foreground">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact CTA */}
          <div className="text-center mt-16 bg-gradient-primary rounded-2xl p-8 text-primary-foreground">
            <h2 className="text-2xl font-bold mb-4">
              Still need help?
            </h2>
            <p className="mb-6 opacity-90">
              Our support team is always ready to assist you with any questions or issues.
            </p>
            <Button variant="secondary" size="lg">
              Contact Support Team
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Support;