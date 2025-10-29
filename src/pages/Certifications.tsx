import { Award, ExternalLink } from "lucide-react";
import GlassCard from "@/components/GlassCard";

const Certifications = () => {
  const certifications = [
    {
      title: "Microsoft Certified: Azure Fundamentals",
      issuer: "Microsoft",
      date: "2022",
      description: "Foundational knowledge of cloud services and how those services are provided with Microsoft Azure.",
      skills: ["Cloud Computing", "Azure Services", "Cloud Security"]
    },
    {
      title: "Kore.AI Developers Advanced",
      issuer: "Kore.AI",
      date: "2023",
      description: "Advanced certification in building enterprise-grade conversational AI solutions.",
      skills: ["Conversational AI", "Bot Development", "Natural Language Processing"]
    },
    {
      title: "Unqork Associate Configurator",
      issuer: "Unqork",
      date: "2022",
      description: "Proficiency in building no-code applications and workflows using the Unqork platform.",
      skills: ["No-Code Development", "Workflow Design", "Enterprise Applications"]
    },
    {
      title: "UiPath RPA Developer",
      issuer: "UiPath",
      date: "2023",
      description: "Expertise in developing robotic process automation solutions for business process optimization.",
      skills: ["RPA", "Process Automation", "Workflow Optimization"]
    }
  ];

  return (
    <div className="min-h-screen px-6 py-32">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Award className="w-12 h-12 text-primary" />
            <h1 className="text-5xl font-bold glow-text">Certifications</h1>
          </div>
          <p className="text-xl text-foreground/80">
            Professional certifications showcasing continuous learning and expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <GlassCard
              key={cert.title}
              hover
              className="space-y-4 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-primary mb-1">
                    {cert.title}
                  </h2>
                  <p className="text-secondary font-medium">{cert.issuer}</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-primary/20 rounded-full text-sm border border-primary/30">
                    {cert.date}
                  </span>
                </div>
              </div>

              <p className="text-foreground/80 leading-relaxed">
                {cert.description}
              </p>

              <div>
                <h3 className="font-semibold mb-2 text-sm">Skills Acquired:</h3>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-secondary/20 rounded-full text-xs border border-secondary/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <button className="flex items-center gap-2 text-primary hover:text-secondary transition-colors text-sm font-medium mt-4">
                <span>Verify Certificate</span>
                <ExternalLink size={16} />
              </button>
            </GlassCard>
          ))}
        </div>

        <div className="mt-16 text-center animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <GlassCard className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Committed to Continuous Learning</h3>
            <p className="text-foreground/80">
              I believe in staying current with the latest technologies and industry best practices. 
              These certifications represent my dedication to professional growth and technical excellence.
            </p>
          </GlassCard>
        </div>
      </div>
    </div>
  );
};

export default Certifications;
