import { ChevronRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Data Collection",
    description: "The CardioScope device captures high-fidelity heart sounds with exceptional clarity",
    iconBg: "bg-blue-500"
  },
  {
    number: "02",
    title: "Signal Processing",
    description: "Advanced algorithms filter and enhance the captured audio for optimal analysis",
    iconBg: "bg-indigo-500"
  },
  {
    number: "03",
    title: "AI Analysis",
    description: "Our machine learning models analyze the heart sounds to identify patterns and anomalies",
    iconBg: "bg-purple-500"
  },
  {
    number: "04",
    title: "Health Insights",
    description: "Receive detailed analysis of your heart health with actionable recommendations",
    iconBg: "bg-pink-500"
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="section-padding bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-on-scroll">
          <div className="inline-block mb-4">
            <span className="bg-primary/10 text-primary text-sm font-medium px-4 py-1.5 rounded-full">
              The Process
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            How CardioScope Works
          </h2>
          
          <p className="text-muted-foreground">
            Our innovative technology combines hardware precision with software intelligence to provide unparalleled heart health insights.
          </p>
        </div>
        
        <div className="relative">
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500 to-pink-500 hidden md:block"></div>
          
          <div className="space-y-12 relative">
            {steps.map((step, index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center reveal-on-scroll">
                <div className={`md:text-right ${index % 2 === 1 ? "md:order-2" : ""}`}>
                  <span className="text-xs font-semibold text-muted-foreground tracking-wider uppercase">
                    Step {step.number}
                  </span>
                  <h3 className="text-2xl font-bold mt-2 mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
                
                <div className={`flex ${index % 2 === 1 ? "md:justify-end" : "md:justify-start"}`}>
                  <div className="relative">
                    <div className={`w-16 h-16 rounded-full ${step.iconBg} text-white flex items-center justify-center text-xl font-bold z-10 relative`}>
                      {step.number}
                    </div>
                    <div className="absolute inset-0 rounded-full bg-white/50 blur-xl opacity-70 scale-150"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-20 text-center max-w-3xl mx-auto reveal-on-scroll">
          <p className="text-xl font-medium text-primary mb-6">
            Ready to experience CardioScope?
          </p>
          <a 
            href="/aiprediction" 
            className="inline-flex items-center justify-center gap-2 text-lg font-medium text-white bg-primary hover:bg-primary/90 rounded-full px-8 py-3 transition-colors"
          >
            Try AI Prediction Demo
            <ChevronRight className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
