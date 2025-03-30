import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  Heart, 
  Power, 
  Smartphone, 
  Play, 
  FileText,
  HelpCircle,
  Mail,
  Phone,
  ArrowRight,
  Bluetooth
} from "lucide-react";

const Instructions = () => {
  const [activeStep, setActiveStep] = useState(1);
  
  const steps = [
    {
      id: 1,
      title: "Power On the Device",
      description: "Press the power button to turn on the CardioScope. Wait for the indicator light to blink blue.",
      icon: <Power className="h-8 w-8" />,
      image: "/images/instructions/power-on.gif"
    },
    {
      id: 2,
      title: "Place the Device on Your Chest",
      description: "Ensure the CardioScope is placed correctly on one of the recommended auscultation points for accurate readings.",
      icon: <Heart className="h-8 w-8" />,
      image: "/images/instructions/placing.jpg",
      details: [
        { name: "Aortic Area", location: "Right upper chest (2nd intercostal space, right sternal border)" },
        { name: "Pulmonic Area", location: "Left upper chest (2nd intercostal space, left sternal border)" },
        { name: "Erb's Point", location: "Center of the chest (3rd intercostal space, left sternal border)" },
        { name: "Tricuspid Area", location: "Lower left chest (4th intercostal space, left sternal border)" },
        { name: "Mitral Area (Apex)", location: "Below the left chest (5th intercostal space, midclavicular line)" }
      ]
    },
    {
      id: 3,
      title: "Connect to the Mobile App",
      description: "Open the CardioScope app on your smartphone and connect via Bluetooth. Make sure Bluetooth is enabled on your phone.",
      icon: <Smartphone className="h-8 w-8" />,
      image: "/images/instructions/i3.jpg"
    },
    {
      id: 4,
      title: "Start Monitoring",
      description: "Tap 'Start' in the app to begin heart monitoring. View your heart sounds and patterns in real time.",
      icon: <Play className="h-8 w-8" />,
      image: "/images/instructions/i4.gif"
    },
    {
      id: 5,
      title: "Get Health Insights",
      description: "Once recording is complete, the app will analyze your heart signals and provide useful health insights and recommendations.",
      icon: <FileText className="h-8 w-8" />,
      image: "/images/instructions/i5.jpg"
    }
  ];
  
  const faqs = [
    {
      question: "How do I charge my CardioScope device?",
      answer: "Connect the provided USB-C cable to the charging port on the device. A full charge takes approximately 2 hours and provides up to 8 hours of continuous use."
    },
    {
      question: "My device won't turn on. What should I do?",
      answer: "First, ensure your device is charged. Press and hold the power button for 5 seconds. If it still doesn't turn on, try resetting the device by holding the power button for 10 seconds, then turning it on again."
    },
    {
      question: "The app can't find my device via Bluetooth",
      answer: "Make sure your device is powered on and Bluetooth is enabled on your phone. Try moving the device closer to your phone. If problems persist, restart both your phone and the CardioScope device."
    },
    {
      question: "How often should I update the app?",
      answer: "We recommend keeping your app updated to the latest version for optimal performance and access to new features. Enable automatic updates or check your app store regularly."
    },
    {
      question: "Is the CardioScope waterproof?",
      answer: "The CardioScope has an IPX5 rating, which means it is resistant to water jets but should not be submerged in water. Wipe it with a damp cloth for cleaning."
    }
  ];

  const handleNextStep = () => {
    if (activeStep < steps.length) {
      setActiveStep(activeStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (activeStep > 1) {
      setActiveStep(activeStep - 1);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4 py-12 max-w-7xl">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="bg-primary/10 text-primary text-sm font-medium px-4 py-1.5 rounded-full">
                User Guide
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              How to Use Your CardioScope
            </h1>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Follow these simple steps to start monitoring your heart health with CardioScope. Our intuitive design makes it easy for anyone to use, regardless of technical background.
            </p>
          </div>

          <div className="mb-16">
            <Tabs defaultValue="steps" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="steps">Step-by-Step Guide</TabsTrigger>
                <TabsTrigger value="video">Video Tutorial</TabsTrigger>
              </TabsList>
              
              <TabsContent value="steps" className="mt-0">
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
                  {/* Mobile stepper UI */}
                  <div className="block md:hidden p-6 border-b">
                    <div className="flex items-center justify-between mb-4">
                      <Button 
                        variant="outline" 
                        onClick={handlePrevStep}
                        disabled={activeStep === 1}
                      >
                        Previous
                      </Button>
                      <span className="text-sm font-medium">
                        Step {activeStep} of {steps.length}
                      </span>
                      <Button 
                        onClick={handleNextStep}
                        disabled={activeStep === steps.length}
                      >
                        Next
                      </Button>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5">
                      <div 
                        className="bg-primary h-1.5 rounded-full transition-all duration-300"
                        style={{ width: `${(activeStep / steps.length) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="p-6 md:p-0 md:flex">
                    {/* Desktop sidebar steps */}
                    <div className="hidden md:block md:w-1/3 bg-blue-50 p-6">
                      <div className="space-y-1">
                        {steps.map((step) => (
                          <div 
                            key={step.id}
                            onClick={() => setActiveStep(step.id)}
                            className={`flex items-center p-3 rounded-lg cursor-pointer transition-colors ${
                              activeStep === step.id ? "bg-primary text-white" : "hover:bg-blue-100"
                            }`}
                          >
                            <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
                              activeStep === step.id ? "bg-white text-primary" : "bg-primary/10 text-primary"
                            } mr-3`}>
                              {step.id}
                            </div>
                            <span className="font-medium">{step.title}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Step content */}
                    <div className="md:w-2/3 p-0 md:p-8">
                      {steps.map((step) => (
                        <div 
                          key={step.id} 
                          className={`${activeStep === step.id ? "block" : "hidden"}`}
                        >
                          <div className="mb-6 flex items-center">
                            <div className="bg-primary/10 text-primary p-3 rounded-full mr-4">
                              {step.icon}
                            </div>
                            <h2 className="text-2xl font-bold">Step {step.id}: {step.title}</h2>
                          </div>
                          
                          <div className="mb-6 rounded-xl overflow-hidden bg-gray-100 aspect-video flex items-center justify-center">
                            <img 
                              src={step.image} 
                              alt={`Step ${step.id}: ${step.title}`} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                          
                          <p className="text-lg mb-6">{step.description}</p>
                          
                          {step.id === 2 && step.details && (
                            <div className="bg-blue-50 rounded-xl p-6 mb-6">
                              <h3 className="font-semibold mb-4">Recommended Placement Points:</h3>
                              <ul className="space-y-3">
                                {step.details.map((detail, idx) => (
                                  <li key={idx} className="flex">
                                    <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-2"></div>
                                    <div>
                                      <span className="font-medium">{detail.name}</span> – {detail.location}
                                    </div>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                          
                          <div className="flex justify-between mt-8">
                            <Button 
                              variant="outline" 
                              onClick={handlePrevStep}
                              disabled={step.id === 1}
                            >
                              Previous Step
                            </Button>
                            {step.id < steps.length && (
                              <Button onClick={handleNextStep}>
                                Next Step
                                <ArrowRight className="ml-2 h-4 w-4" />
                              </Button>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="video">
                <div className="bg-white rounded-3xl shadow-xl p-8">
                  <h2 className="text-2xl font-bold mb-6">Video Tutorial</h2>
                  <div className="aspect-video bg-gray-100 rounded-xl overflow-hidden mb-6">
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-center">
                        <Play className="h-16 w-16 text-primary mx-auto mb-4" />
                        <p className="text-muted-foreground">Video tutorial coming soon</p>
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    This video demonstrates all the steps to set up and use your CardioScope device for heart monitoring. 
                    Watch the complete tutorial for a visual guide to get the most out of your device.
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <div className="flex items-center mb-6">
                <HelpCircle className="h-6 w-6 text-primary mr-3" />
                <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
              </div>
              
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, idx) => (
                  <AccordionItem key={idx} value={`faq-${idx}`}>
                    <AccordionTrigger className="text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent>
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
            
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <div className="flex items-center mb-6">
                <Phone className="h-6 w-6 text-primary mr-3" />
                <h2 className="text-2xl font-bold">Need Help?</h2>
              </div>
              
              <p className="mb-6">
                Our support team is available to assist you with any questions or issues you may have with your CardioScope device.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center p-4 bg-blue-50 rounded-lg">
                  <Mail className="h-5 w-5 text-primary mr-3" />
                  <div>
                    <p className="text-sm text-muted-foreground">Email Support</p>
                    <p className="font-medium">support@cardioscope.com</p>
                  </div>
                </div>
                
                <div className="flex items-center p-4 bg-blue-50 rounded-lg">
                  <Phone className="h-5 w-5 text-primary mr-3" />
                  <div>
                    <p className="text-sm text-muted-foreground">Phone Support</p>
                    <p className="font-medium">+1 (800) 123-4567</p>
                  </div>
                </div>
                
                <div className="mt-6">
                  <Button className="w-full">
                    Visit Help Center
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-500 to-indigo-500 rounded-3xl shadow-xl p-8 text-white">
            <div className="text-center max-w-3xl mx-auto">
              <Bluetooth className="h-12 w-12 mx-auto mb-4" />
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to start your heart health journey?
              </h2>
              <p className="mb-8 text-white/90">
                Download the CardioScope app now to get the most out of your device and begin monitoring your heart health.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button className="bg-white text-primary hover:bg-white/90">
                  Download for iOS
                </Button>
                <Button className="bg-white text-primary hover:bg-white/90">
                  Download for Android
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Instructions;
