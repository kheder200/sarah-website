import BeforeAfterSlider from './BeforeAfterSlider';

interface ProjectCardProps {
  title: string;
  client: string;
  description: string;
  beforeImage: string;
  afterImage: string;
  delay?: number;
}

const ProjectCard = ({
  title,
  client,
  description,
  beforeImage,
  afterImage,
  delay = 0,
}: ProjectCardProps) => {
  return (
    <div 
      className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-hover transition-all duration-500 opacity-0 animate-fade-up"
      style={{ animationDelay: `${delay}ms`, animationFillMode: 'forwards' }}
    >
      <BeforeAfterSlider
        beforeImage={beforeImage}
        afterImage={afterImage}
      />
      <div className="p-6">
        <span className="text-xs font-medium text-primary uppercase tracking-wider">
          {client}
        </span>
        <h3 className="font-display text-xl mt-2 text-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
