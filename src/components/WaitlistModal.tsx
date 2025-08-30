import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Brain, Mail, User, Building, Users, CheckCircle } from "lucide-react";

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const WaitlistModal = ({ isOpen, onClose }: WaitlistModalProps) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    // Here you would normally send the data to your backend
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-md text-center">
          <div className="flex flex-col items-center space-y-4">
            <div className="p-4 bg-green-100 rounded-full">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-foreground">
              You're on the list!
            </h2>
            <p className="text-muted-foreground">
              Thank you for joining our waitlist. We'll notify you as soon as XYZ AI is available for early access.
            </p>
            <div className="bg-muted rounded-lg p-4 w-full">
              <p className="text-sm text-muted-foreground">
                Position in queue: <span className="font-bold text-primary">#247</span>
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-center space-x-2 text-2xl">
            <div className="p-2 bg-gradient-primary rounded-lg">
              <Brain className="w-6 h-6 text-primary-foreground" />
            </div>
            <span>Join the Waitlist</span>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 mt-6">
          <div className="text-center">
            <p className="text-muted-foreground">
              Be among the first to experience the future of AI-powered business automation. Get early access to XYZ AI.
            </p>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative">
                <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="First name" 
                  className="pl-10"
                />
              </div>
              <div className="relative">
                <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Last name" 
                  className="pl-10"
                />
              </div>
            </div>

            <div className="relative">
              <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input 
                type="email" 
                placeholder="Email address" 
                className="pl-10"
              />
            </div>

            <div className="relative">
              <Building className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Company name" 
                className="pl-10"
              />
            </div>

            <div className="relative">
              <Users className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Select>
                <SelectTrigger className="pl-10">
                  <SelectValue placeholder="Company size" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1-10">1-10 employees</SelectItem>
                  <SelectItem value="11-50">11-50 employees</SelectItem>
                  <SelectItem value="51-100">51-100 employees</SelectItem>
                  <SelectItem value="101-500">101-500 employees</SelectItem>
                  <SelectItem value="500+">500+ employees</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Textarea 
                placeholder="Tell us about your business needs and what you're most excited about with AI automation..."
                rows={3}
              />
            </div>

            <div className="bg-muted rounded-lg p-4">
              <h4 className="font-semibold text-foreground mb-2">What you'll get:</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Early access to XYZ AI platform</li>
                <li>• 50% discount on your first 3 months</li>
                <li>• Direct feedback channel to our development team</li>
                <li>• Exclusive webinars and training sessions</li>
              </ul>
            </div>

            <Button className="w-full" size="lg" onClick={handleSubmit}>
              Join Waitlist
            </Button>

            <p className="text-xs text-center text-muted-foreground">
              By joining our waitlist, you agree to receive updates about XYZ AI. 
              You can unsubscribe at any time.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WaitlistModal;