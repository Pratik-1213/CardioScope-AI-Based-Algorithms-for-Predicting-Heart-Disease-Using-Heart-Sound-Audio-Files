import { Activity, Brain, Clock, HeartPulse, Radio, Share2 } from "lucide-react";

const featureData = [
  {
    icon: HeartPulse,
    title: "Heart Rate Monitoring",
    description: "Real-time monitoring of heart rate with AI analysis for immediate health insights",
    bgColor: "bg-blue-50",
    iconColor: "text-blue-500"
  },
  {
    icon: Brain,
    title: "AI-Based Disease Prediction",
    description: "Advanced algorithms detect potential heart issues before they become critical",
    bgColor: "bg-purple-50",
    iconColor: "text-purple-500"
  },
  {
    icon: Activity,
    title: "Real-Time Health Alerts",
    description: "Get immediate notifications about critical changes in heart health patterns",
    bgColor: "bg-red-50",
    iconColor: "text-red-500"
  },
  {
    icon: Radio,
    title: "Telehealth Integration",
    description: "Connect with healthcare providers remotely for immediate consultations",
    bgColor: "bg-green-50",
    iconColor: "text-green-500"
  },
  {
    icon: Clock,
    title: "Historical Data Analysis",
    description: "Track heart health changes over time to identify long-term patterns",
    bgColor: "bg-amber-50",
    iconColor: "text-amber-500"
  },
  {
    icon: Share2,
    title: "Secure Data Sharing",
    description: "Easily share your heart health data with healthcare providers through secure channels",
    bgColor: "bg-teal-50",
    iconColor: "text-teal-500"
  }
];

const Features = () => {
  return (
    <section id="features" className="section-padding bg-blue-50/50">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-on-scroll">
          <div className="inline-block mb-4">
            <span className="bg-primary/10 text-primary text-sm font-medium px-4 py-1.5 rounded-full">
              Key Features
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Advanced Features For Complete Heart Health
          </h2>
          
          <p className="text-muted-foreground">
            CardioScope combines innovative hardware with powerful software to provide a comprehensive solution for heart health monitoring and disease prevention.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featureData.map((feature, index) => (
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
  );
};

export default Features;
