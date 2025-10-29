import { Mail, MapPin, Phone, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import GlassCard from "@/components/GlassCard";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";
import { z } from "zod";
import { EMAILJS_CONFIG } from "@/config/emailjs";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  message: z.string().trim().min(1, "Message is required").max(1000, "Message must be less than 1000 characters")
});

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Validate form data
      const validatedData = contactSchema.parse(formData);
      
      setIsSubmitting(true);

      // Send email using EmailJS
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        {
          from_name: validatedData.name,
          from_email: validatedData.email,
          message: validatedData.message,
          to_email: EMAILJS_CONFIG.TO_EMAIL
        },
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Validation Error",
          description: error.errors[0].message,
          variant: "destructive"
        });
      } else {
        toast({
          title: "Error",
          description: "Failed to send message. Please try again later.",
          variant: "destructive"
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      label: "Location",
      value: "Kansas City, MO (Open to work anywhere in the U.S.)"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (816) 263-9676"
    },
    {
      icon: Mail,
      label: "Email",
      value: "keerthireddymangilipudi@gmail.com"
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/keerthi-mangilipudi"
    }
  ];

  return (
    <div className="min-h-screen px-6 py-32">
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-5xl font-bold text-center mb-6 glow-text animate-fade-in-up">
          Get In Touch
        </h1>
        <p className="text-xl text-center text-foreground/80 mb-16 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          Let's discuss how we can work together
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <GlassCard>
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <div key={info.label} className="flex items-start gap-4">
                    <div className="p-3 bg-primary/20 rounded-lg">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground/90">{info.label}</h3>
                      <p className="text-foreground/70">{info.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-white/10">
                <h3 className="font-semibold mb-4">Connect on Social Media</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 glass-card hover:bg-primary/20 transition-colors group"
                    >
                      <social.icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                    </a>
                  ))}
                </div>
              </div>
            </GlassCard>

            <GlassCard className="bg-gradient-to-br from-primary/10 to-secondary/10">
              <h3 className="text-xl font-bold mb-3">Work Authorization</h3>
              <p className="text-foreground/80 leading-relaxed">
                <span className="text-primary font-semibold">F1-OPT authorized (STEM eligible)</span>
                <br />
                Work eligible in the United States for 3 years without sponsorship.
              </p>
            </GlassCard>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <GlassCard>
              <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-background/50 border-white/20 focus:border-primary"
                    placeholder="Your name"
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-background/50 border-white/20 focus:border-primary"
                    placeholder="your.email@example.com"
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-background/50 border-white/20 focus:border-primary min-h-[150px]"
                    placeholder="Tell me about your project..."
                    disabled={isSubmitting}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </GlassCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
