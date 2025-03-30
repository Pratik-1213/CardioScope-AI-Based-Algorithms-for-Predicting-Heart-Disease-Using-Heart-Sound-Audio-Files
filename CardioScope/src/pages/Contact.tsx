import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, MessageSquare, Phone, Video } from "lucide-react";

const doctorProfiles = [
  {
    name: "Dr. Sarah Johnson",
    specialty: "Cardiologist",
    experience: "15+ years",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    contact: "+1 (555) 123-4567",
    email: "dr.johnson@cardioscope.com",
    available: true
  },
  {
    name: "Dr. Michael Chen",
    specialty: "Cardiac Surgeon",
    experience: "20+ years",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    contact: "+1 (555) 987-6543",
    email: "dr.chen@cardioscope.com",
    available: true
  },
  {
    name: "Dr. Emily Rodriguez",
    specialty: "Electrophysiologist",
    experience: "12+ years",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    contact: "+1 (555) 456-7890",
    email: "dr.rodriguez@cardioscope.com",
    available: false
  },
  {
    name: "Dr. James Wilson",
    specialty: "Interventional Cardiologist",
    experience: "18+ years",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    contact: "+1 (555) 789-0123",
    email: "dr.wilson@cardioscope.com",
    available: true
  }
];

const Contact = () => {
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
                  Get in Touch
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Contact Our Team
              </h1>
              
              <p className="text-lg text-muted-foreground">
                Have questions about CardioScope or need to consult with a specialist? We're here to help you with all your heart health needs.
              </p>
            </div>
          </div>
        </section>
        
        <section className="py-16 px-6 md:px-12 lg:px-24 bg-white">
          <div className="container mx-auto max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="glass rounded-3xl p-8 shadow-lg reveal-on-scroll">
                <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Your Name
                      </label>
                      <Input id="name" placeholder="John Smith" className="rounded-xl" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email Address
                      </label>
                      <Input id="email" type="email" placeholder="john@example.com" className="rounded-xl" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <Input id="subject" placeholder="How can we help you?" className="rounded-xl" />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea 
                      id="message" 
                      placeholder="Write your message here..." 
                      className="rounded-xl min-h-[120px]" 
                    />
                  </div>
                  
                  <Button type="submit" className="w-full rounded-xl py-6">
                    Send Message
                  </Button>
                </form>
              </div>
              
              <div className="space-y-8 reveal-on-scroll">
                <div className="glass rounded-2xl p-6 shadow-sm">
                  <h4 className="font-semibold mb-4">Company Information</h4>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-full bg-primary/10 text-primary">
                        <MapPin className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="font-medium">Main Office</p>
                        <p className="text-sm text-muted-foreground">
                          123 Innovation Drive, San Francisco, CA 94103
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-full bg-primary/10 text-primary">
                        <Phone className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="font-medium">Phone</p>
                        <p className="text-sm text-muted-foreground">
                          +1 (555) 987-6543
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-full bg-primary/10 text-primary">
                        <Mail className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-sm text-muted-foreground">
                          info@cardioscope.com
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-6">Our Specialists</h3>
                
                <div className="space-y-6">
                  {doctorProfiles.map((doctor, index) => (
                    <div key={index} className="glass rounded-2xl p-5 shadow-sm">
                      <div className="flex items-start gap-4">
                        <img 
                          src={doctor.image} 
                          alt={doctor.name} 
                          className="w-16 h-16 rounded-full object-cover"
                        />
                        <div className="flex-1">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                            <div>
                              <h4 className="font-semibold">{doctor.name}</h4>
                              <p className="text-sm text-muted-foreground">
                                {doctor.specialty} • {doctor.experience}
                              </p>
                            </div>
                            <div className="flex items-center">
                              <span className={`px-2 py-0.5 text-xs font-medium rounded-full ${
                                doctor.available 
                                  ? "bg-green-100 text-green-800" 
                                  : "bg-gray-100 text-gray-800"
                              }`}>
                                {doctor.available ? "Available Now" : "Unavailable"}
                              </span>
                            </div>
                          </div>
                          
                          <div className="mt-4 pt-4 border-t border-gray-100 flex flex-wrap gap-2">
                            <Button variant="outline" size="sm" className="rounded-full gap-1">
                              <Phone className="h-3 w-3" />
                              <span className="text-xs">Call</span>
                            </Button>
                            <Button variant="outline" size="sm" className="rounded-full gap-1">
                              <MessageSquare className="h-3 w-3" />
                              <span className="text-xs">Chat</span>
                            </Button>
                            <Button variant="outline" size="sm" className="rounded-full gap-1">
                              <Video className="h-3 w-3" />
                              <span className="text-xs">Video</span>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
