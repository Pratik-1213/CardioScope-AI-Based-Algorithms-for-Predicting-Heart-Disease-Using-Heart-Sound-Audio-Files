import { Button } from "@/components/ui/button";
import { Activity, Brain, Clock, Radio } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 px-6 md:px-12 lg:px-24 min-h-screen flex items-center bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-10 -right-10 w-64 h-64 rounded-full bg-blue-100 opacity-50 blur-3xl"></div>
      <div className="absolute top-1/2 -left-20 w-40 h-40 rounded-full bg-blue-100 opacity-50 blur-3xl"></div>
      
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6 z-10">
            <div className="inline-block">
              <span className="bg-primary/10 text-primary text-sm font-medium px-4 py-1.5 rounded-full">
                Revolutionary Healthcare Technology
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance leading-tight">
              AI-Powered System for{" "}
              <span className="text-primary">Heart Disease Prediction</span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-lg">
              CardioScope combines artificial intelligence with precision engineering to revolutionize how we monitor, diagnose, and manage heart health.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Button asChild size="lg" className="rounded-full text-base py-6">
                <Link to="/aiprediction">Try AI Prediction</Link>
              </Button>

              
              <Button asChild variant="outline" size="lg" className="rounded-full text-base bg-white py-6">
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              <div className="flex flex-col items-center text-center gap-2">
                <div className="p-3 rounded-full bg-primary/10">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <span className="text-sm font-medium">AI-Powered Diagnostics</span>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <div className="p-3 rounded-full bg-primary/10">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <span className="text-sm font-medium">Real-Time Monitoring</span>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <div className="p-3 rounded-full bg-primary/10">
                  <Radio className="h-6 w-6 text-primary" />
                </div>
                <span className="text-sm font-medium">Telehealth Integration</span>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <div className="p-3 rounded-full bg-primary/10">
                  <Activity className="h-6 w-6 text-primary" />
                </div>
                <span className="text-sm font-medium">Disease Prediction</span>
              </div>
            </div>
          </div>
          
          <div className="relative z-10 mx-auto lg:mr-0">
            <div className="relative w-full max-w-lg">
              <div className="absolute top-0 -left-4 w-72 h-72 bg-primary/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
              <div className="absolute top-0 -right-4 w-72 h-72 bg-accent/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
              <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-300/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
              
              <div className="relative glass rounded-3xl p-5 shadow-xl">
                <div className="p-6 bg-white rounded-2xl shadow-sm">
                  <div className="w-full h-12 mb-8 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center">
                      <div className="h-[2px] w-full bg-gray-200"></div>
                    </div>
                    <div className="absolute inset-0 flex items-center">
                      <div className="h-[2px] w-1/2 bg-primary transform-origin-left animate-pulse-wave"></div>
                    </div>
                  </div>
                  <video autoPlay loop muted className="w-full h-64 object-cover rounded-xl shadow-sm">
                  <source src="/Heart.mp4" type="video/mp4" />
                   Your browser does not support the video tag.
                  </video>
                  
                  <div className="mt-6 flex gap-4 items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Heart Rate</p>
                      <p className="text-2xl font-semibold">72 BPM</p>
                    </div>
                    <div className="h-16 w-24 relative">
                      <div className="absolute inset-0">
                        <svg viewBox="0 0 100 30" className="w-full h-full">
                          <path 
                            d="M 0,15 Q 10,5 20,15 T 40,15 T 60,15 T 80,15 T 100,15" 
                            fill="none" 
                            stroke="#3B82F6" 
                            strokeWidth="2"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative glass rounded-3xl p-5 shadow-xl">
                <div className="p-6 bg-white rounded-2xl shadow-sm">
                  <div className="w-full h-12 mb-8 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center">
                      <div className="h-[2px] w-full bg-gray-200"></div>
                    </div>
                    <div className="absolute inset-0 flex items-center">
                      <div className="h-[2px] w-1/2 bg-primary transform-origin-left animate-pulse-wave"></div>
                    </div>
                  </div>
                  <img 
                    src="HeartBeat.gif" 
                    alt="CardioScope Device" 
                    className="w-full h-64 object-cover rounded-xl shadow-sm"
                  />
                  
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
