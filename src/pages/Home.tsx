import { ArrowDown, Download, Mail, Linkedin, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import GlassCard from "@/components/GlassCard";
import { 
  SiReact, 
  SiAmazon, 
  SiDocker, 
  SiKubernetes, 
  SiSpringboot,
  SiNodedotjs,
  SiMongodb 
} from "react-icons/si";
import { Code2 } from "lucide-react";

const Home = () => {
  const techStack = [
    { icon: Code2, name: "Java" },
    { icon: SiSpringboot, name: "Spring Boot" },
    { icon: SiReact, name: "React" },
    { icon: SiNodedotjs, name: "Node.js" },
    { icon: SiAmazon, name: "AWS" },
    { icon: SiDocker, name: "Docker" },
    { icon: SiKubernetes, name: "Kubernetes" },
    { icon: SiMongodb, name: "MongoDB" },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-20 relative overflow-hidden">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient mesh background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background/80"></div>
        
        {/* Animated orbs */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary/30 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-secondary/25 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-0 left-1/3 w-[450px] h-[450px] bg-primary/20 rounded-full blur-[90px] animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/50 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-2/3 right-1/3 w-2 h-2 bg-secondary/50 rounded-full animate-ping" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-1/3 left-2/3 w-2 h-2 bg-primary/40 rounded-full animate-ping" style={{ animationDelay: '2.5s' }}></div>
        
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,hsl(var(--background))_100%)]"></div>
      </div>

      <div className="container mx-auto max-w-5xl relative z-10">
        {/* Hero Section - Centered */}
        <div className="text-center space-y-8 animate-fade-in-up">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 glass-card px-6 py-3 mb-6">
              <Sparkles className="w-5 h-5 text-primary" />
              <span className="text-base font-medium">Full Stack Developer</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold leading-tight">
              Hi, I'm <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary glow-text">
                Keerthi Reddy
              </span>
            </h1>
            
            <h2 className="text-3xl md:text-4xl text-secondary font-semibold">
              Java | React | Cloud | AI
            </h2>
          </div>

          <GlassCard className="space-y-6 max-w-3xl mx-auto">
            <p className="text-xl leading-relaxed text-foreground/90">
              A Full Stack Developer who builds <span className="text-primary font-semibold">scalable, secure, and AI-powered applications</span>. 
              Hands-on across backend and frontend, cloud deployments, and CI/CD.
            </p>
            <p className="text-lg leading-relaxed text-foreground/80">
              <span className="text-secondary font-semibold">F1-OPT authorized (STEM eligible)</span> — 
              work eligible in the U.S. for 3 years without sponsorship.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4 justify-center">
              <Button 
                className="gap-2 bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(66,153,225,0.5)]"
                asChild
              >
                <a href="/keerthiReddyMangilipudi_Resume.pdf" download="Keerthi_Reddy_Mangilipudi_Resume.pdf">
                  <Download size={20} />
                  Download Resume
                </a>
              </Button>
              <Button
                variant="outline"
                className="gap-2 border-white/30 hover:bg-white/10 hover:border-white/50 transition-all"
                onClick={() => window.location.href = "mailto:keerthireddymangilipudi@gmail.com"}
              >
                <Mail size={20} />
                Email Me
              </Button>
            </div>

            {/* Social links */}
            <div className="flex gap-4 pt-2 justify-center">
              <a 
                href="https://www.linkedin.com/in/keerthi-mangilipudi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="glass-card p-3 hover:bg-white/20 transition-all hover:scale-110 group"
              >
                <Linkedin className="w-5 h-5 group-hover:text-primary transition-colors" />
              </a>
            </div>
          </GlassCard>
        </div>

        {/* Tech Stack Icons */}
        <div className="mt-16 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <h3 className="text-xl font-semibold text-center mb-8">Tech Stack</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {techStack.map((tech, index) => (
              <div
                key={tech.name}
                className="group flex flex-col items-center gap-2 p-4 glass-card glass-card-hover"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <tech.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                <span className="text-sm">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Arrow */}
        <div className="flex justify-center mt-16 animate-bounce">
          <ArrowDown className="w-8 h-8 text-primary" />
        </div>
      </div>
    </div>
  );
};

export default Home;
