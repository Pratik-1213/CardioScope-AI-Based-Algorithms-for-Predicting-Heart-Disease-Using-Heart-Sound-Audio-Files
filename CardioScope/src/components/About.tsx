import { Button } from "@/components/ui/button";
import { Check, Heart } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1 reveal-on-scroll">
            <div className="relative glass rounded-3xl p-5 shadow-xl">
              <div className="aspect-video bg-gradient-to-br from-primary/10 to-blue-100 rounded-2xl overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Heart className="h-20 w-20 text-primary animate-heartbeat opacity-30" />
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Medical Professional using CardioScope" 
                  className="w-full h-full object-cover rounded-2xl mix-blend-overlay"
                />
              </div>
            </div>
            
            <div className="absolute -bottom-8 -right-8 glass rounded-2xl p-5 shadow-lg z-10 max-w-xs">
              <div className="flex gap-3 items-start">
                <div className="p-2 rounded-full bg-primary/10 text-primary">
                  <Check className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold">Clinically Validated</h4>
                  <p className="text-xs text-muted-foreground mt-1">
                    Our technology has been tested and validated by leading medical institutions
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 reveal-on-scroll">
            <div className="inline-block mb-4">
              <span className="bg-primary/10 text-primary text-sm font-medium px-4 py-1.5 rounded-full">
                About CardioScope
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why CardioScope Is The Future Of Heart Monitoring
            </h2>
            
            <p className="text-muted-foreground mb-6">
              CardioScope combines cutting-edge AI technology with advanced acoustics to provide unparalleled insights into heart health. Our device goes beyond traditional stethoscopes by not just amplifying sounds, but analyzing them for patterns that can indicate potential issues.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex gap-3">
                <div className="p-1 h-6 w-6 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="h-3.5 w-3.5" />
                </div>
                <div>
                  <h4 className="font-medium">Superior Acoustic Sensitivity</h4>
                  <p className="text-sm text-muted-foreground">
                    Captures even the most subtle heart sounds that traditional stethoscopes might miss
                  </p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <div className="p-1 h-6 w-6 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="h-3.5 w-3.5" />
                </div>
                <div>
                  <h4 className="font-medium">AI-Powered Analysis</h4>
                  <p className="text-sm text-muted-foreground">
                    Machine learning algorithms analyze heart sounds to detect abnormalities with high accuracy
                  </p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <div className="p-1 h-6 w-6 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="h-3.5 w-3.5" />
                </div>
                <div>
                  <h4 className="font-medium">Real-Time Feedback</h4>
                  <p className="text-sm text-muted-foreground">
                    Provides immediate insights rather than waiting for lab results or specialist appointments
                  </p>
                </div>
              </div>
            </div>
            
            <Button size="lg" className="rounded-full">
              Learn More About Our Technology
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
