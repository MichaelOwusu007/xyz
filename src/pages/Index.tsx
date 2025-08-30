import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import About from "@/components/About";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Features />
      <About />
       <FAQ />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
