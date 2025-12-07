import { Palette, Users, Zap, Award } from 'lucide-react';

const AboutSection = () => {
  const stats = [
    { icon: Palette, label: 'Projects', value: '50+' },
    { icon: Users, label: 'Happy Clients', value: '30+' },
    { icon: Zap, label: 'Years Experience', value: '6+' },
    { icon: Award, label: 'Awards', value: '12' },
  ];

  return (
    <section id="about" className="py-24 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-sm font-medium text-primary uppercase tracking-widest">
              About Me
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-foreground mt-4">
              Designing with <span className="text-gradient">Purpose</span>
            </h2>
          </div>

          {/* Bio */}
          <div className="grid lg:grid-cols-5 gap-12 items-center mb-20">
            <div className="lg:col-span-3 space-y-6 text-center lg:text-left">
              <p className="text-lg text-foreground leading-relaxed">
                Hi! I'm Sarah 
                
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I dont know what to write about you Sarah ❤️..there is no words for that ..
              </p>
              <p className="text-muted-foreground leading-relaxed">
The only thing I know about you is your pure heart—and that's what I love most about you ❤️❤️🤍            </p>
            </div>
            
            {/* Skills/Tools */}
            <div className="lg:col-span-2">
              <div className="bg-secondary/50 rounded-2xl p-6 shadow-soft">
                <h3 className="font-display text-lg text-foreground mb-4">
                  Tools I Love 
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['Figma', 'Sketch', 'Adobe XD', ].map((tool) => (
                    <span
                      key={tool}
                      className="px-4 py-2 bg-card text-sm text-foreground rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="bg-card rounded-2xl p-6 text-center shadow-soft hover:shadow-card transition-shadow opacity-0 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
              >
                <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="font-display text-3xl text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
