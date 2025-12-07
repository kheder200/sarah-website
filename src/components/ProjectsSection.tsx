import ProjectCard from './ProjectCard';

interface Project {
  title: string;
  client: string;
  description: string;
  beforeImage: string;
  afterImage: string;
}

interface ProjectsSectionProps {
  projects: Project[];
}

const ProjectsSection = ({ projects }: ProjectsSectionProps) => {
  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-background to-secondary/30 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-widest">
            Portfolio
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-foreground mt-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Swipe or drag the slider to see the transformation. Each project showcases 
            the power of thoughtful design.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              {...project}
              delay={index * 150}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
