import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { Activity, Brain, Clock, HeartPulse, Radio, Share2, Smartphone, Volume2 } from "lucide-react";

const featuresData = [
  {
    icon: HeartPulse,
    title: "Heart Rate Monitoring",
    description: "Real-time monitoring of heart rate with AI analysis for immediate health insights. CardioScope captures every heartbeat with exceptional precision.",
    bgColor: "bg-blue-50",
    iconColor: "text-blue-500"
  },
  {
    icon: Brain,
    title: "AI-Based Disease Prediction",
    description: "Advanced algorithms detect potential heart issues before they become critical. Our machine learning models have been trained on thousands of heart sound samples.",
    bgColor: "bg-purple-50",
    iconColor: "text-purple-500"
  },
  {
    icon: Activity,
    title: "Real-Time Health Alerts",
    description: "Get immediate notifications about critical changes in heart health patterns. CardioScope can alert you to potential issues as they arise.",
    bgColor: "bg-red-50",
    iconColor: "text-red-500"
  },
  {
    icon: Radio,
    title: "Telehealth Integration",
    description: "Connect with healthcare providers remotely for immediate consultations. Share your heart data securely with your doctor from anywhere in the world.",
    bgColor: "bg-green-50",
    iconColor: "text-green-500"
  },
  {
    icon: Clock,
    title: "Historical Data Analysis",
    description: "Track heart health changes over time to identify long-term patterns. CardioScope maintains a comprehensive record of your heart activity.",
    bgColor: "bg-amber-50",
    iconColor: "text-amber-500"
  },
  {
    icon: Share2,
    title: "Secure Data Sharing",
    description: "Easily share your heart health data with healthcare providers through secure channels. Your privacy and data security are our top priorities.",
    bgColor: "bg-teal-50",
    iconColor: "text-teal-500"
  },
  {
    icon: Volume2,
    title: "Enhanced Audio Clarity",
    description: "State-of-the-art acoustic technology provides unparalleled clarity for heart sounds, capturing even the most subtle murmurs and irregularities.",
    bgColor: "bg-indigo-50",
    iconColor: "text-indigo-500"
  },
  {
    icon: Smartphone,
    title: "Mobile App Integration",
    description: "Access your heart health data on your smartphone or tablet. The CardioScope app provides a comprehensive dashboard of your cardiac health.",
    bgColor: "bg-pink-50",
    iconColor: "text-pink-500"
  }
];

const Features = () => {
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
                  Features & Capabilities
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Powerful Features For Complete Heart Health
              </h1>
              
              <p className="text-lg text-muted-foreground">
                Discover how CardioScope's innovative features can transform your approach to heart health monitoring and care.
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-16 px-6 md:px-12 lg:px-24 bg-white">
          <div className="container mx-auto max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuresData.map((feature, index) => (
                <div 
                  key={index}
                  className="glass rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 reveal-on-scroll"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`p-3 rounded-xl ${feature.bgColor} ${feature.iconColor} w-fit`}>
                    <feature.icon className="h-6 w-6" />
                  </div>
                  
                  <h3 className="text-xl font-semibold mt-5 mb-3">
                    {feature.title}
                  </h3>
                  
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer/>
    </div>
  );
};

export default Features;
