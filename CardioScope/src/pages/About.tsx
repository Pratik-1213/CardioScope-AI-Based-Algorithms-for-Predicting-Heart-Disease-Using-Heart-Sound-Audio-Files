import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle, Heart } from "lucide-react";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);
    
    document.querySelectorAll('.reveal-on-scroll').forEach(element => {
      observer.observe(element);
    });
    
    return () => {
      document.querySelectorAll('.reveal-on-scroll').forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        <section className="pt-20 pb-16 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-blue-50 to-white">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center max-w-3xl mx-auto mb-16 reveal-on-scroll">
              <div className="inline-block mb-4">
                <span className="bg-primary/10 text-primary text-sm font-medium px-4 py-1.5 rounded-full">
                  Our Story
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                About CardioScope
              </h1>
              
              <p className="text-lg text-muted-foreground">
                Reimagining heart health monitoring with cutting-edge technology and a passion for saving lives.
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-16 px-6 md:px-12 lg:px-24 bg-white">
          <div className="container mx-auto max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="reveal-on-scroll">
                <div className="inline-block mb-4">
                  <span className="bg-primary/10 text-primary text-sm font-medium px-4 py-1.5 rounded-full">
                    Our Mission
                  </span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Why We Created CardioScope
                </h2>
                
                <p className="text-muted-foreground mb-6">
                  CardioScope was born from a simple observation: traditional stethoscopes haven't fundamentally changed in over 200 years, yet heart disease remains the leading cause of death worldwide.
                </p>
                
                <p className="text-muted-foreground mb-6">
                  Our team of cardiologists, engineers, and AI specialists came together with a shared vision: to create a device that could not only amplify heart sounds but analyze them in real-time to detect problems before they become life-threatening.
                </p>
                
                <p className="text-muted-foreground mb-6">
                  We believe that by combining the power of artificial intelligence with medical expertise, we can revolutionize cardiac care and save countless lives through early detection and intervention.
                </p>
              </div>
              
              <div className="relative order-first lg:order-last reveal-on-scroll">
                <div className="glass rounded-3xl p-5 shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                    alt="Medical team using CardioScope" 
                    className="w-full rounded-2xl"
                  />
                </div>
                
                <div className="absolute -bottom-8 -left-8 glass rounded-2xl p-5 shadow-lg z-10 max-w-xs">
                  <div className="flex gap-3 items-start">
                    <div className="p-2 rounded-full bg-primary/10 text-primary">
                      <Heart className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold">Our Vision</h4>
                      <p className="text-xs text-muted-foreground mt-1">
                        A world where preventable heart conditions are detected early and treated effectively
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 px-6 md:px-12 lg:px-24 bg-blue-50/30">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center max-w-3xl mx-auto mb-12 reveal-on-scroll">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why CardioScope Over Traditional Devices?
              </h2>
              
              <p className="text-muted-foreground">
                CardioScope offers significant advantages over traditional stethoscopes and monitoring devices, bringing cardiac care into the 21st century.
              </p>
            </div>
            
            <div className="max-w-5xl mx-auto glass rounded-3xl p-8 shadow-xl mb-12 reveal-on-scroll">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-center mb-4">Traditional Stethoscopes</h3>
                  
                  <div className="flex items-start gap-3 p-4 bg-white rounded-xl">
                    <div className="text-gray-400 mt-0.5">✓</div>
                    <div>
                      <p className="font-medium">Basic Sound Amplification</p>
                      <p className="text-sm text-muted-foreground">Simple acoustic amplification of heart sounds</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-4 bg-white rounded-xl">
                    <div className="text-gray-400 mt-0.5">✓</div>
                    <div>
                      <p className="font-medium">Manual Interpretation</p>
                      <p className="text-sm text-muted-foreground">Requires extensive training to interpret sounds</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-4 bg-white rounded-xl">
                    <div className="text-gray-400 mt-0.5">✓</div>
                    <div>
                      <p className="font-medium">No Data Storage</p>
                      <p className="text-sm text-muted-foreground">Cannot record or analyze sound patterns over time</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-4 bg-white rounded-xl">
                    <div className="text-gray-400 mt-0.5">✓</div>
                    <div>
                      <p className="font-medium">Limited Insights</p>
                      <p className="text-sm text-muted-foreground">Misses subtle sounds that can indicate early problems</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-center mb-4 text-primary">CardioScope</h3>
                  
                  <div className="flex items-start gap-3 p-4 bg-primary/5 rounded-xl border border-primary/20">
                    <div className="text-primary mt-0.5">
                      <CheckCircle className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium">AI-Powered Analysis</p>
                      <p className="text-sm text-muted-foreground">Machine learning algorithms detect patterns and anomalies</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-4 bg-primary/5 rounded-xl border border-primary/20">
                    <div className="text-primary mt-0.5">
                      <CheckCircle className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium">Automated Diagnostics</p>
                      <p className="text-sm text-muted-foreground">Provides instant analysis with high accuracy</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-4 bg-primary/5 rounded-xl border border-primary/20">
                    <div className="text-primary mt-0.5">
                      <CheckCircle className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium">Comprehensive Data Storage</p>
                      <p className="text-sm text-muted-foreground">Tracks changes over time for better long-term care</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-4 bg-primary/5 rounded-xl border border-primary/20">
                    <div className="text-primary mt-0.5">
                      <CheckCircle className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium">Early Detection Capability</p>
                      <p className="text-sm text-muted-foreground">Identifies problems before they become critical</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center reveal-on-scroll">
              <Button asChild size="lg" className="rounded-full">
                <a href="/features">Explore All Features</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
