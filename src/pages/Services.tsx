import { Code, Cloud, Brain } from "lucide-react";
import GlassCard from "@/components/GlassCard";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Full Stack Development",
      description: "End-to-end application design and development using Java, Spring Boot, React.js, and modern web technologies. Building scalable, secure, and performant solutions.",
      features: [
        "Custom web applications",
        "RESTful API development",
        "Database design & optimization",
        "Responsive UI/UX implementation"
      ]
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      description: "Scalable cloud deployments on AWS with automated CI/CD pipelines. Expertise in containerization, orchestration, and infrastructure as code.",
      features: [
        "AWS cloud architecture",
        "Docker & Kubernetes",
        "CI/CD with Jenkins & GitHub Actions",
        "Infrastructure automation"
      ]
    },
    {
      icon: Brain,
      title: "AI-Powered Solutions",
      description: "Building intelligent applications with AI integration. Developing chatbots, automation systems, and machine learning powered features.",
      features: [
        "Conversational AI chatbots",
        "OpenAI API integration",
        "Workflow automation",
        "Intelligent data processing"
      ]
    }
  ];

  return (
    <div className="min-h-screen px-6 py-32">
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-5xl font-bold text-center mb-6 glow-text animate-fade-in-up">
          Services
        </h1>
        <p className="text-xl text-center text-foreground/80 mb-16 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          Professional solutions to bring your ideas to life
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <GlassCard
              key={service.title}
              hover
              className="flex flex-col items-center text-center space-y-6 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-4 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl glow-border">
                <service.icon className="w-12 h-12 text-primary" />
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-primary">
                  {service.title}
                </h2>

                <p className="text-foreground/80 leading-relaxed">
                  {service.description}
                </p>

                <div className="pt-4 border-t border-white/10">
                  <ul className="space-y-2 text-left">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="text-sm text-foreground/70 flex items-start gap-2"
                      >
                        <span className="text-secondary mt-1">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

        <div className="mt-16 text-center animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          <GlassCard className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to work together?</h3>
            <p className="text-foreground/80 mb-6">
              Let's discuss how I can help bring your project to life with cutting-edge technology and best practices.
            </p>
            <button
              onClick={() => window.location.href = "/contact"}
              className="px-8 py-3 bg-gradient-to-r from-primary to-secondary rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Get in Touch
            </button>
          </GlassCard>
        </div>
      </div>
    </div>
  );
};

export default Services;
