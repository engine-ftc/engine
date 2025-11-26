
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { TEAM_INFO } from "@/lib/data";
import { useToast } from "@/hooks/use-toast";

export function Contact() {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "Thanks for reaching out! We'll get back to you shortly.",
    });
  };

  return (
    <section id="contact" className="py-24 bg-neutral-950 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute -right-32 -bottom-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">GET IN TOUCH</h2>
            <p className="text-muted-foreground text-lg mb-12 font-tech max-w-md">
              Whether you're interested in joining the team, sponsoring us, or just want to say hi, we'd love to hear from you.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <Mail className="text-primary" />
                </div>
                <div>
                  <h4 className="font-display text-lg font-bold mb-1">Email Us</h4>
                  <p className="text-muted-foreground font-tech">ftcdps@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <MapPin className="text-primary" />
                </div>
                <div>
                  <h4 className="font-display text-lg font-bold mb-1">Visit Us</h4>
                  <p className="text-muted-foreground font-tech">
                    Robotics Lab, Delhi Private School<br />
                    {TEAM_INFO.location}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-black/50 border border-white/10 p-8 backdrop-blur-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="font-tech uppercase text-xs tracking-wider text-muted-foreground">Name</label>
                  <Input id="name" placeholder="Your name" className="bg-white/5 border-white/10 text-white focus:border-primary" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="font-tech uppercase text-xs tracking-wider text-muted-foreground">Email</label>
                  <Input id="email" type="email" placeholder="your@email.com" className="bg-white/5 border-white/10 text-white focus:border-primary" required />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="font-tech uppercase text-xs tracking-wider text-muted-foreground">Subject</label>
                <Input id="subject" placeholder="What's this about?" className="bg-white/5 border-white/10 text-white focus:border-primary" required />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="font-tech uppercase text-xs tracking-wider text-muted-foreground">Message</label>
                <Textarea id="message" placeholder="Your message..." className="bg-white/5 border-white/10 text-white min-h-[150px] focus:border-primary" required />
              </div>

              <Button type="submit" className="w-full bg-white text-black hover:bg-primary font-bold font-tech uppercase tracking-widest py-6">
                Send Transmission
              </Button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
