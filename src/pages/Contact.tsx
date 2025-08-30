import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, MessageSquare } from "lucide-react";
import { useRef, useEffect } from "react";
import { useState } from "react";
import 'mapbox-gl/dist/mapbox-gl.css';
import AuthModal from "@/components/AuthModal" ;

const Contact = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
   const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      content: "Accra, Ghana",
      description: "Visit our office at Accra"
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+233 59 2515 464",
      description: "Mon-Fri 9AM-6PM GMT"
    },
    {
      icon: Mail,
      title: "Email",
      content: "hello@xyzai.com",
      description: "We'll respond within 24 hours"
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "Mon-Fri 9AM-6PM",
      description: "Ghana Standard Time (GMT)"
    }
  ];

  useEffect(() => {
    if (!mapContainer.current) return;

    // Note: You'll need to add your Mapbox token here
    // mapboxgl.accessToken = 'your-mapbox-token';
    
    // For now, we'll create a placeholder map container
    // Uncomment the following when you have a Mapbox token:
    
    /*
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: [-0.1870, 5.6037], // Accra coordinates
      zoom: 12,
    });

    // Add marker for office location
    new mapboxgl.Marker({
      color: '#6366f1'
    })
    .setLngLat([-0.1870, 5.6037])
    .setPopup(
      new mapboxgl.Popup().setHTML('<h3>XYZ AI Office</h3><p>Accra, Ghana</p>')
    )
    .addTo(map.current);

    return () => {
      map.current?.remove();
    };
    */
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl righteous md:text-6xl font-bold text-foreground mb-4">
              Get in
              <span className="bg-gradient-primary bg-clip-text text-transparent"> Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to transform your business with AI? We'd love to hear from you.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Contact Form */}
            <Card className="p-8">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MessageSquare className="w-6 h-6 text-primary" />
                  <span>Send us a message</span>
                </CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      First Name *
                    </label>
                    <Input placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Last Name *
                    </label>
                    <Input placeholder="Doe" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <Input type="email" placeholder="john@company.com" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Company Name
                  </label>
                  <Input placeholder="Your Company" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <Input placeholder="+233 XX XXXX XXX" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    How can we help you? *
                  </label>
                  <Textarea 
                    placeholder="Tell us about your business needs and how XYZ AI can help..."
                    rows={5}
                  />
                </div>
                
                <Button className="w-full" size="lg">
                  Send Message
                </Button>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              <div className="grid gap-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <info.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                        <p className="text-foreground font-medium mb-1">{info.content}</p>
                        <p className="text-sm text-muted-foreground">{info.description}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Map */}
              <Card className="p-6">
                <CardHeader className="p-0 mb-4">
                  <CardTitle>Our Location</CardTitle>
                  <CardDescription>Find us in Accra, Ghana</CardDescription>
                </CardHeader>
                <div 
                  ref={mapContainer} 
                  className="w-full h-64 bg-muted rounded-lg flex items-center justify-center"
                >
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-primary mx-auto mb-2" />
                    <p className="text-muted-foreground">
                      Interactive map will be displayed here
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Accra, Ghana
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-primary rounded-2xl p-8 text-primary-foreground">
            <h2 className="text-2xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="mb-6 opacity-90">
              Join thousands of businesses already using XYZ AI to streamline their operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <Button
                size="lg"
                className="group"
                onClick={() => setIsAuthModalOpen(true)}
              >
                Get Started Today
              </Button>
            </div>
          </div>
        </div>
      </main>

        <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />
      <Footer />
    </div>
  );
};

export default Contact;