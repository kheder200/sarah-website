import { Palette, Users, Zap, Award } from 'lucide-react';

const AboutSection = () => {
  const stats = [
    { icon: Palette, label: 'Projects', value: '50+' },
    { icon: Users, label: 'Happy Clients', value: '30+' },
    { icon: Zap, label: 'Years Experience', value: '6+' },
    { icon: Award, label: 'Awards', value: '12' },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-gradient-to-b from-background via-pink-50/40 to-background">
      <div className="absolute -left-20 top-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse-soft" />
      <div className="absolute right-0 bottom-0 w-80 h-80 bg-pink-200/30 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: '1s' }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto bg-card/70 backdrop-blur-lg rounded-3xl border border-white/20 shadow-[0_30px_80px_-35px_rgba(255,105,180,0.5)] p-10 sm:p-12">
          {/* Section Header */}
          <div className="text-center mb-14 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-pink-500/15 via-purple-500/10 to-blue-500/15 border border-white/20 text-primary text-xs font-semibold uppercase tracking-[0.3em]">
              About Me
            </div>
            <div className="relative inline-block">
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-foreground mt-2">
                Designing with <span className="text-gradient">Purpose</span>
              </h2>
              <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-32 h-1 rounded-full bg-gradient-to-r from-primary via-pink-400 to-purple-500 blur-[2px]" />
            </div>
          </div>

          {/* Bio */}
          <div className="grid lg:grid-cols-5 gap-12 items-center mb-16">
            <div className="lg:col-span-3 space-y-6 text-center lg:text-left">
              <p className="text-lg text-foreground leading-relaxed bg-gradient-to-r from-pink-500/10 via-white/0 to-blue-500/10 p-4 rounded-2xl border border-white/15 shadow-soft">
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
              <div className="rounded-2xl p-6 shadow-soft bg-gradient-to-br from-card/80 via-primary/5 to-secondary/60 border border-white/20">
                <h3 className="font-display text-lg text-foreground mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
                  <span className="relative z-10">Tools I Love </span>
                </h3>
                <div className="flex flex-wrap gap-2">
                  {['Figma', 'Sketch', 'Adobe XD', ].map((tool) => (
                    <span
                      key={tool}
                      className="px-4 py-2 bg-white/70 text-sm text-foreground rounded-full border border-white/40 shadow-[0_10px_25px_-18px_rgba(255,105,180,0.8)] hover:-translate-y-0.5 hover:shadow-hover transition-all duration-300"
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
                className="relative overflow-hidden rounded-2xl p-6 text-center bg-gradient-to-br from-white/80 via-card to-pink-50/70 border border-white/30 shadow-soft hover:-translate-y-1 hover:shadow-hover transition-all duration-300 opacity-0 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
              >
                <div className="absolute inset-0 opacity-50 bg-[radial-gradient(circle_at_20%_20%,rgba(255,105,180,0.18),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(99,102,241,0.14),transparent_30%)]" />
                <div className="relative w-12 h-12 bg-secondary rounded-xl flex items-center justify-center mx-auto mb-4 shadow-card">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="relative font-display text-3xl text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="relative text-sm text-muted-foreground">
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
