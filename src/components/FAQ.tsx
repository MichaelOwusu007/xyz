import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { MessageCircle, HelpCircle } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      question: "What is XYZ AI and how does it work?",
      answer: "XYZ AI is an advanced business automation platform that uses artificial intelligence to streamline your operations. It integrates with your existing systems to automate tasks like customer service, data analysis, scheduling, and more. Our AI learns from your business processes and continuously improves its performance."
    },
    {
      question: "How quickly can I get started with XYZ AI?",
      answer: "You can get started in less than 5 minutes! Our setup process is designed to be simple and intuitive. Once you sign up, our onboarding wizard will guide you through connecting your systems and configuring your first automation workflows."
    },
    {
      question: "Is my business data secure with XYZ AI?",
      answer: "Absolutely. We employ enterprise-grade security measures including end-to-end encryption, SOC 2 compliance, and regular security audits. Your data is stored in secure, isolated environments and we never share or sell your information to third parties."
    },
    {
      question: "What integrations does XYZ AI support?",
      answer: "XYZ AI integrates with over 500+ popular business tools including CRM systems (Salesforce, HubSpot), communication platforms (Slack, Teams), project management tools (Asana, Trello), and many more. We also provide API access for custom integrations."
    },
    {
      question: "Can XYZ AI scale with my growing business?",
      answer: "Yes! XYZ AI is built to scale from small startups to large enterprises. Our flexible pricing tiers and infrastructure automatically adjust to your business needs. As you grow, you can add more features, users, and automation capabilities."
    },
    {
      question: "What kind of support do you provide?",
      answer: "We offer comprehensive support including 24/7 live chat, email support, phone support for premium plans, extensive documentation, video tutorials, and a community forum. Our success team also provides personalized onboarding and training sessions."
    },
    {
      question: "How much can I expect to save with XYZ AI?",
      answer: "Most customers see a 40-60% reduction in operational costs and a 300% increase in productivity within the first 3 months. The exact savings depend on your current processes, but our ROI calculator can provide personalized estimates based on your business size and industry."
    },
    {
      question: "Can I try XYZ AI before committing to a paid plan?",
      answer: "Yes! We offer a 14-day free trial with full access to all features. No credit card required. During the trial, you'll have access to our support team to help you set up and optimize your workflows for maximum value."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <HelpCircle className="w-8 h-8 text-primary" />
            <h2 className="text-4xl righteous font-bold text-foreground">
              Frequently Asked Questions
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get answers to common questions about XYZ AI and how it can transform your business
          </p>
        </div>

        <Card className="p-8 shadow-card border-border/50">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border-border/50  rounded-lg px-4"
              >
                <AccordionTrigger className="text-left text-lg  font-semibold text-card-foreground hover:text-primary transition-smooth">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-lg leading-relaxed pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Card>

        <div className="mt-12 text-lg text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <MessageCircle className="w-5 h-5 text-primary" />
            <p className="text-muted-foreground">
              Still have questions? We're here to help!
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
            <a 
              href="/contact" 
              className="text-primary hover:text-primary-dark transition-smooth font-medium"
            >
              Contact our support team
            </a>
            <span className="hidden sm:block text-muted-foreground">|</span>
            <a 
              href="/support" 
              className="text-primary hover:text-primary-dark transition-smooth font-medium"
            >
              Visit our help center
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;