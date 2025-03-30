import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageSquare, Phone } from "lucide-react";

const doctorProfiles = [
  {
    name: "Dr. Sneha Gurav",
    specialty: "Cardiologist",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    contact: "+1 (555) 123-4567"
  },
  {
    name: "Dr. Pratik Kumbhar",
    specialty: "Cardiac Surgeon",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    contact: "+1 (555) 987-6543"
  },
  {
    name: "Dr. Mayuri Ambale",
    specialty: "Electrophysiologist",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    contact: "+1 (555) 456-7890"
  }
];

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-on-scroll">
          <div className="inline-block mb-4">
            <span className="bg-primary/10 text-primary text-sm font-medium px-4 py-1.5 rounded-full">
              Get in Touch
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Contact Our Specialists
          </h2>
          
          <p className="text-muted-foreground">
            Our team of heart specialists is ready to assist you with any questions or concerns about your heart health.
          </p>
        </div>
        
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
            <h3 className="text-2xl font-bold mb-6">Our Specialists</h3>
            
            <div className="space-y-6">
              {doctorProfiles.map((doctor, index) => (
                <div key={index} className="glass rounded-2xl p-4 flex items-center gap-4">
                  <img 
                    src={doctor.image} 
                    alt={doctor.name} 
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h4 className="font-semibold">{doctor.name}</h4>
                    <p className="text-sm text-muted-foreground">{doctor.specialty}</p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Phone className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-full">
                      <MessageSquare className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="glass rounded-2xl p-6">
              <h4 className="font-semibold mb-4">General Contact</h4>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-full bg-primary/10 text-primary">
                    <Phone className="h-4 w-4" />
                  </div>
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-full bg-primary/10 text-primary">
                    <Mail className="h-4 w-4" />
                  </div>
                  <span>contact@cardioscope.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
