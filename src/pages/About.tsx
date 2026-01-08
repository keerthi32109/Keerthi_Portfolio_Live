import { Download, Mail, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import GlassCard from "@/components/GlassCard";

const About = () => {
  return (
    <div className="min-h-screen px-6 py-32">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-5xl font-bold text-center mb-12 glow-text animate-fade-in-up">
          About Me
        </h1>

        {/* Bio Section */}
        <GlassCard className="mb-12 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
        <p className="text-lg leading-relaxed mb-6">
  I am a <span className="text-primary font-semibold">Full Stack Software Engineer with 5+ years of experience</span> building 
  scalable, production-ready web applications using Java, Spring Boot, React, and modern cloud technologies. 
  I bring strong expertise in backend systems, RESTful APIs, microservices architecture, and clean, maintainable 
  frontend development, with hands-on experience across enterprise and retail environments.
  <ul className="flex flex-wrap gap-x-8 gap-y-4 mt-6">
  <li className="flex items-center gap-2">
    <span className="w-5 h-5 flex items-center justify-center rounded-full bg-primary/20 text-primary text-sm">✓</span>
    <span>5+ years building scalable, production-ready applications</span>
  </li>

  <li className="flex items-center gap-2">
    <span className="w-5 h-5 flex items-center justify-center rounded-full bg-primary/20 text-primary text-sm">✓</span>
    <span>Strong expertise in Java, Spring Boot, React, and cloud technologies</span>
  </li>

  <li className="flex items-center gap-2">
    <span className="w-5 h-5 flex items-center justify-center rounded-full bg-primary/20 text-primary text-sm">✓</span>
    <span>Experience with enterprise and retail environments</span>
  </li>

  <li className="flex items-center gap-2">
    <span className="w-5 h-5 flex items-center justify-center rounded-full bg-primary/20 text-primary text-sm">✓</span>
    <span>RESTful APIs, microservices architecture, and clean code practices</span>
  </li>

  <li className="flex items-center gap-2">
    <span className="w-5 h-5 flex items-center justify-center rounded-full bg-primary/20 text-primary text-sm">✓</span>
    <span>Full-stack development across backend and frontend interfaces</span>
  </li>
</ul>

</p>
          <p className="text-lg leading-relaxed">
            Based in <span className="text-secondary font-semibold">Kansas City, MO</span> and open to opportunities anywhere in the U.S., 
            I am passionate about developing performant, secure, and user-focused software systems.
          </p>
        </GlassCard>

        {/* Education Section */}
        <div className="space-y-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <div className="flex items-center gap-3 mb-6">
            <GraduationCap className="w-8 h-8 text-primary" />
            <h2 className="text-3xl font-bold">Education</h2>
          </div>

          {/* Master's Degree */}
          <GlassCard hover className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-secondary"></div>
            <div className="pl-6">
              <h3 className="text-2xl font-semibold text-primary mb-2">
                Master of Science in Computer Science
              </h3>
              <p className="text-lg font-medium mb-2">University of Central Missouri</p>
              <p className="text-muted-foreground mb-4">May 2025</p>
              <p className="text-muted-foreground mb-4">GPA 3.7/4</p>
              <div className="space-y-2">
                <p className="font-medium">Key Courses:</p>
                <div className="flex flex-wrap gap-2">
                  {["Compiler Design", "Cloud Security", "Information Assurance", "Advanced Networks", "Cloud Computing", "Advanced Database Design", "Advanced Programming in Python"].map((course) => (
                    <span key={course} className="px-3 py-1 bg-primary/20 rounded-full text-sm border border-primary/30">
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </GlassCard>

          {/* Bachelor's Degree */}
          <GlassCard hover className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-secondary to-primary"></div>
            <div className="pl-6">
              <h3 className="text-2xl font-semibold text-secondary mb-2">
                Bachelor of Technology in Computer Science and Engineering
              </h3>
              <p className="text-lg font-medium mb-2">Viswodaya Institute of Technology and Sciences (JNTU-A)</p>
              <p className="text-muted-foreground">June 2022</p>
              <p className="text-muted-foreground mb-4">GPA 3.4/4</p>
              <div className="space-y-2">
  <p className="font-medium">Key Courses:</p>
  <div className="flex flex-wrap gap-2">
    {[
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "Database Management Systems",
      "Operating Systems",
      "Computer Networks",
      "Software Engineering",
      "Design & Analysis of Algorithms",
      "Web Technologies",
      "Compiler Design",
      "Artificial Intelligence",
      "Machine Learning",
      "Discrete Mathematics"
    ].map((course) => (
      <span
        key={course}
        className="px-3 py-1 bg-secondary/20 rounded-full text-sm border border-secondary/30"
      >
        {course}
      </span>
    ))}
  </div>
</div>

            </div>
          </GlassCard>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 justify-center mt-12 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          <Button 
            className="gap-2 bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all hover:scale-105"
            asChild
          >
   <a
  href="https://keerthi32109.github.io/Keerthi_Portfolio_Live/keerthiReddyMangilipudi_Resume.pdf"
  download="Keerthi_Reddy_Mangilipudi_Resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
>
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
      </div>
    </div>
  );
};

export default About;
