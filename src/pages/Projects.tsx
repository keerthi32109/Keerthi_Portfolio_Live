import GlassCard from "@/components/GlassCard";

const Projects = () => {
  const projects = [
    {
      title: "AI Chat Assistant",
      subtitle: "Full Stack Conversational Platform",
      description: "Built a sophisticated AI-powered chat platform with Java backend, React.js frontend, and Node.js middleware. Integrated OpenAI API for intelligent conversations and deployed on AWS EC2 with Docker for scalability.",
      technologies: ["Java", "React.js", "Node.js", "MongoDB", "OpenAI API", "Docker", "AWS EC2"],
      features: [
        "Secure authentication system",
        "Real-time conversational AI",
        "Modular and scalable architecture",
        "Cloud deployment with Docker"
      ]
    },
    {
      title: "Amazon E-Commerce Clone",
      subtitle: "Full Stack Shopping Platform",
      description: "Built a full-featured Amazon-style e-commerce application with dynamic product listings, cart management, and checkout workflows. Implemented frontend and backend integration with a focus on modular architecture, state management, and real-world e-commerce behavior. Ensured application reliability through unit and behavior-driven testing.",
      technologies: ["JavaScript", "React.js", "HTML5", "CSS3", "Jasmine", "REST APIs", "Backend Services"],
      features: [
        "Dynamic product catalog and UI rendering",
        "Add-to-cart and cart state management",
        "Checkout and order flow implementation",
        "Reusable and modular React components",
        "Unit and behavior testing using Jasmine"
      ]
    },

    {
      title: "CulinaryHub",
      subtitle: "Role-Based Recipe Management System",
      description: "Developed a comprehensive recipe management platform with role-based access control, CRUD operations, and optimized caching for improved performance. Features include recipe submission, approval workflows, and user management.",
      technologies: ["MongoDB", "Bootstrap", "JavaScript", "jQuery", "Node.js"],
      features: [
        "Role-based access control",
        "Recipe approval workflow",
        "CRUD operations",
        "Optimized caching for 40% speed improvement"
      ]
    }
  ];

  return (
    <div className="min-h-screen px-6 py-32">
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-5xl font-bold text-center mb-12 glow-text animate-fade-in-up">
          Projects
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <GlassCard
              key={project.title}
              hover
              className="flex flex-col animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex-1 space-y-4">
                <div>
                  <h2 className="text-2xl font-bold text-primary mb-1">
                    {project.title}
                  </h2>
                  <p className="text-secondary font-medium">{project.subtitle}</p>
                </div>

                <p className="text-foreground/90 leading-relaxed">
                  {project.description}
                </p>

                <div>
                  <h3 className="font-semibold mb-2">Key Features:</h3>
                  <ul className="space-y-1">
                    {project.features.map((feature) => (
                      <li key={feature} className="text-sm text-foreground/80 flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Tech Stack:</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary/20 rounded-full text-sm border border-primary/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
