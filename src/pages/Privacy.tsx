import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-muted-foreground">
              Your privacy is important to us. Learn how we protect your data.
            </p>
          </div>

          <div className="bg-card rounded-2xl border border-border/50 p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Age Requirement</h2>
              <p className="text-muted-foreground mb-4">
                XYZ AI is intended for users who are 18 years of age or older. By using our service, you confirm that you are at least 18 years old and have the legal capacity to enter into this agreement.
              </p>
              <p className="text-muted-foreground">
                Additionally, to access our business features, you must be a legitimate business owner with proper documentation and registration.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">AI Data Usage</h2>
              <p className="text-muted-foreground mb-4">
                Our AI assistant processes your business data to provide intelligent insights and automation. Here's how we handle your information:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Data is encrypted both in transit and at rest</li>
                <li>AI models are trained on anonymized, aggregated data only</li>
                <li>Your specific business data is never shared with third parties</li>
                <li>You maintain full ownership of your data at all times</li>
                <li>Data processing occurs in secure, compliant cloud environments</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Information We Collect</h2>
              <p className="text-muted-foreground mb-4">
                To provide our AI-powered business assistant, we collect:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Business registration and verification documents</li>
                <li>Contact information and user preferences</li>
                <li>Business metrics and operational data (with your consent)</li>
                <li>Usage patterns to improve our AI recommendations</li>
                <li>Communication data for customer support</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Business Owner Verification</h2>
              <p className="text-muted-foreground mb-4">
                To ensure the security and legitimacy of our platform, we require business owners to provide:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Valid business registration certificate</li>
                <li>Tax identification number</li>
                <li>Proof of business address</li>
                <li>Government-issued identification</li>
                <li>Bank account verification for premium features</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Data Security</h2>
              <p className="text-muted-foreground mb-4">
                We implement enterprise-grade security measures including:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>End-to-end encryption for all data transmission</li>
                <li>Multi-factor authentication for account access</li>
                <li>Regular security audits and penetration testing</li>
                <li>SOC 2 Type II compliance</li>
                <li>GDPR and CCPA compliance frameworks</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Your Rights</h2>
              <p className="text-muted-foreground mb-4">
                You have the right to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Access and download your data at any time</li>
                <li>Request deletion of your personal information</li>
                <li>Opt-out of AI model training (with service limitations)</li>
                <li>Modify your privacy preferences</li>
                <li>Receive notifications about data breaches</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Us</h2>
              <p className="text-muted-foreground">
                If you have any questions about this Privacy Policy or our data practices, please contact our Data Protection Officer at privacy@xyzai.com or visit our Contact page.
              </p>
            </section>

            <div className="text-sm text-muted-foreground border-t border-border/50 pt-6">
              Last updated: August 2025
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Privacy;