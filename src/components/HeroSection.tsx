import TypewriterText from './TypewriterText';

interface HeroSectionProps {
  heroImage: string;
}

const HeroSection = ({ heroImage }: HeroSectionProps) => {
  const phrases = [
    "someone love me but I dont care",
    "I can hack any network",
    "I'm UI/UX Designer.",
    "I have beautiful blue eyes",
  ];

  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen bg-hero relative overflow-hidden flex items-center">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-pink-200/30 rounded-full blur-3xl animate-pulse-soft" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-pink-300/20 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: '1.5s' }} />
      
      <div className="container mx-auto px-6 pt-24 pb-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <p className="text-sm font-medium text-primary uppercase tracking-widest mb-4 opacity-0 animate-fade-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
              UI/UX Designer
            </p>
            
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight text-foreground mb-6 opacity-0 animate-fade-up" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
              Hello, I'm{' '}
              <span className="text-gradient">Sarah</span>
            </h1>
            
            <div className="text-xl sm:text-2xl lg:text-3xl font-display text-foreground/80 min-h-[3rem] mb-8 opacity-0 animate-fade-up" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
              <TypewriterText phrases={phrases} />
            </div>
            
            <p className="text-muted-foreground text-lg max-w-xl mx-auto lg:mx-0 mb-10 opacity-0 animate-fade-up" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
              I'me currently studying Networking and Cybersecurity at the University of Homs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start opacity-0 animate-fade-up" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-4 bg-gradient-pink text-primary-foreground font-medium rounded-full shadow-soft hover:shadow-hover transition-all duration-300 hover:-translate-y-1"
              >
                View My Work
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-4 bg-card text-foreground font-medium rounded-full border border-border hover:border-primary hover:text-primary transition-all duration-300"
              >
                Get in Touch
              </a>
            </div>
          </div>
          
          {/* Image */}
          <div className="order-1 lg:order-2 flex justify-center opacity-0 animate-fade-up" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-pink rounded-full blur-3xl opacity-20 scale-90 animate-pulse-soft" />
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-pink-200/50 shadow-card animate-float">
                <img
                  src={heroImage}
                  alt="Sarah - UI/UX Designer"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative dots */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full opacity-60" />
              <div className="absolute -bottom-2 -left-6 w-12 h-12 bg-pink-300 rounded-full opacity-40" />
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default HeroSection;
