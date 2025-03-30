import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { ChevronRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Data Collection",
    description: "The CardioScope device captures high-fidelity heart sounds with exceptional clarity. Our proprietary acoustic sensors detect even the most subtle heart sounds that traditional stethoscopes might miss.",
    details: [
      "High-sensitivity microphones capture the full spectrum of heart sounds",
      "Noise cancellation technology filters out ambient sounds",
      "Optimal positioning guidance ensures accurate sound capture"
    ],
    iconBg: "bg-blue-500",
    image: "https://images.unsplash.com/photo-1511174511562-5f7f18b874f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  },
  {
    number: "02",
    title: "Signal Processing",
    description: "Advanced algorithms filter and enhance the captured audio for optimal analysis. Our proprietary digital signal processing technology transforms raw heart sounds into clear, analyzable data.",
    details: [
      "Advanced filtering isolates relevant heart sounds",
      "Digital enhancement improves clarity and removes artifacts",
      "Temporal segmentation identifies cardiac cycle components"
    ],
    iconBg: "bg-indigo-500",
    image: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  },
  {
    number: "03",
    title: "AI Analysis",
    description: "Our machine learning models analyze the heart sounds to identify patterns and anomalies. Trained on thousands of clinical samples, CardioScope's AI can detect subtle indications of potential heart conditions.",
    details: [
      "Neural networks trained on vast cardiac sound databases",
      "Pattern recognition identifies normal and abnormal heart sounds",
      "Continuous learning improves accuracy over time"
    ],
    iconBg: "bg-purple-500",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  },
  {
    number: "04",
    title: "Health Insights",
    description: "Receive detailed analysis of your heart health with actionable recommendations. CardioScope provides clear, easy-to-understand reports and can connect you with healthcare providers when needed.",
    details: [
      "Comprehensive reports with detailed heart health analysis",
      "Personalized recommendations based on your specific data",
      "Secure sharing options for healthcare provider consultation"
    ],
    iconBg: "bg-pink-500",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
  }
];

const HowItWorks = () => {
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
                  The Process
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                How CardioScope Works
              </h1>
              
              <p className="text-lg text-muted-foreground">
                Our innovative technology combines hardware precision with software intelligence to provide unparalleled heart health insights.
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-16 px-6 md:px-12 lg:px-24 bg-white">
          <div className="container mx-auto max-w-7xl">
            <div className="space-y-24">
              {steps.map((step, index) => (
                <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center reveal-on-scroll">
                  <div className={index % 2 === 1 ? "order-1 lg:order-2" : ""}>
                    <div className="inline-block mb-4">
                      <span className={`text-white text-sm font-medium px-4 py-1.5 rounded-full ${step.iconBg}`}>
                        Step {step.number}
                      </span>
                    </div>
                    
                    <h2 className="text-3xl font-bold mb-4">
                      {step.title}
                    </h2>
                    
                    <p className="text-muted-foreground mb-6">
                      {step.description}
                    </p>
                    
                    <ul className="space-y-3 mb-6">
                      {step.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className={index % 2 === 1 ? "order-2 lg:order-1" : ""}>
                    <div className="glass rounded-3xl p-5 shadow-xl">
                      <img 
                        src={step.image} 
                        alt={step.title} 
                        className="w-full h-64 object-cover rounded-2xl"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HowItWorks;
