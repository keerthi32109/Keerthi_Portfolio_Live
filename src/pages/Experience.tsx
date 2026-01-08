import { Briefcase, Calendar, MapPin } from "lucide-react";
import GlassCard from "@/components/GlassCard";

const Experience = () => {
  const experiences = [
    
      {
        company: "Staples",
        role: "Software Engineer / Full Stack Developer",
        location: "USA",
        period: "Jan 2025 - Present",
        achievements: [
          "Owned end-to-end development of internal enterprise applications using React and Spring Boot supporting business-critical retail workflows",
          "Enhanced backend APIs and optimized application performance to improve system stability and response times",
          "Collaborated closely with product, QA, and DevOps teams in Agile sprints to deliver reliable features and improve CI/CD workflows"
        ],
        technologies: [
          "Java",
          "Spring Boot",
          "React.js",
          "REST APIs",
          "AWS",
          "CI/CD",
          "Agile"
        ]
      },
      {
        company: "Persistent Systems",
        role: "Software Engineer",
        location: "Pune, India",
        period: "Feb 2022 - Nov 2023",
        achievements: [
          "Built and scaled enterprise onboarding platforms for Chubb Insurance using Java, Spring Boot, React.js, and RESTful APIs",
          "Designed event-driven microservices with Kafka and RabbitMQ, handling 500+ API requests per minute",
          "Automated customer support workflows using Unqork and AI-powered chatbots (Kore.AI), reducing manual interactions by 40%",
          "Deployed and maintained cloud-native applications on AWS using Docker, Kubernetes, and CI/CD pipelines, achieving 99.9% uptime"
        ],
        technologies: [
          "Java",
          "Spring Boot",
          "React.js",
          "Kafka",
          "RabbitMQ",
          "AWS",
          "Docker",
          "Kubernetes",
          "CI/CD",
          "REST APIs"
        ]
      },
      {
        company: "BlankBot Technologies",
        role: "Software Developer",
        location: "Bengaluru, India",
        period: "Oct 2019 - Jan 2022",
        achievements: [
          "Designed and developed full-stack web applications using Java, Spring Boot, React.js, and relational databases",
          "Optimized backend queries across MySQL, Oracle, and PostgreSQL, reducing response times by 30%",
          "Built reusable React components and modular APIs to improve maintainability and development efficiency"
        ],
        technologies: [
          "Java",
          "Spring Boot",
          "React.js",
          "MySQL",
          "Oracle",
          "PostgreSQL",
          "REST APIs"
        ]
      }
      
   
  ];

  return (
    <div className="min-h-screen px-6 py-32">
      <div className="container mx-auto max-w-5xl">
        <h1 className="text-5xl font-bold text-center mb-12 glow-text animate-fade-in-up">
          Experience
        </h1>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.company}
                className={`relative flex items-start gap-8 animate-fade-in-up ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background transform -translate-x-1/2 glow-border"></div>

                {/* Content */}
                <div className={`flex-1 ml-16 md:ml-0 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                  <GlassCard hover className="h-full">
                    <div className="space-y-4">
                      <div>
                        <div className="flex items-start justify-between mb-2">
                          <h2 className="text-2xl font-bold text-primary">{exp.role}</h2>
                          <Briefcase className="w-6 h-6 text-secondary" />
                        </div>
                        <h3 className="text-xl font-semibold text-secondary">{exp.company}</h3>
                      </div>

                      <div className="flex flex-wrap gap-4 text-sm text-foreground/70">
                        <div className="flex items-center gap-2">
                          <MapPin size={16} className="text-primary" />
                          {exp.location}
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar size={16} className="text-primary" />
                          {exp.period}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">Key Achievements:</h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="text-sm text-foreground/80 flex items-start gap-2">
                              <span className="text-primary mt-1">•</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-primary/20 rounded-full text-xs border border-primary/30"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </GlassCard>
                </div>

                <div className="hidden md:block flex-1"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
