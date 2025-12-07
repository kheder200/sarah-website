import { Mail, Linkedin, MapPin, Instagram, Dribbble } from 'lucide-react';

const ContactSection = () => {
  const contactLinks = [
    {
      icon: Mail,
      label: 'Email',
      value: 'hello-sarah💗@gmail.com',
      href: 'mailto:hello@sarahdesigns.com',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/sarah-salame',
      href: 'https://www.linkedin.com/in/sarah-salame-29aa0335a/',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Homs, Syria',
      href: null,
    },
  ];

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/sarah-salame-29aa0335a/', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/', label: 'Instagram' },
    { icon: Dribbble, href: 'https://dribbble.com/', label: 'Dribbble' },
    { icon: Mail, href: 'mailto:hello@sarahdesigns.com', label: 'Email' },
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-background to-secondary/20 relative overflow-hidden">
      <div className="absolute top-10 right-10 w-80 h-80 bg-pink-200/25 rounded-full blur-3xl" />
      <div className="absolute -bottom-10 left-0 w-72 h-72 bg-pink-300/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative">
        <div className="grid lg:grid-cols-[1.05fr,1fr] gap-12 items-start">
          <div className="space-y-6 max-w-2xl">
            <span className="text-sm font-medium text-primary uppercase tracking-widest">
              Get in Touch
            </span>
            <div className="space-y-4">
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-foreground leading-tight">
                Let's build something <span className="text-gradient">beautiful</span> together
              </h2>
              <p className="text-muted-foreground text-lg">
                Tell me about your idea, your brand, your vision or just say hi!.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {['Fast replies', 'Freelance available', 'Remote friendly'].map((tag) => (
                <span key={tag} className="px-3 py-1.5 text-xs font-medium rounded-full bg-card border border-border/60 text-foreground/80">
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-12 h-12 bg-card border border-border/60 rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/60 hover:bg-primary/5 transition-all duration-300 hover:-translate-y-1"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>

            <a
              href="mailto:hello@sarahdesigns.com"
              className="inline-flex w-fit items-center gap-2 px-8 py-4 bg-gradient-pink text-primary-foreground font-medium rounded-full shadow-soft hover:shadow-hover transition-all duration-300 hover:-translate-y-1"
            >
              <Mail size={18} />
              Start a conversation
            </a>
          </div>

          <div className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-4">
              {contactLinks.map((contact) => (
                <div
                  key={contact.label}
                  className="flex items-start gap-3 bg-card/70 backdrop-blur-sm border border-border/60 rounded-2xl p-5 hover:border-primary/40 hover:shadow-soft transition-all duration-300"
                >
                  <div className="w-11 h-11 bg-secondary rounded-xl flex items-center justify-center shrink-0 text-primary">
                    <contact.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{contact.label}</p>
                    {contact.href ? (
                      <a
                        href={contact.href}
                        target={contact.href.startsWith('http') ? '_blank' : undefined}
                        rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-foreground hover:text-primary transition-colors font-medium break-words"
                      >
                        {contact.value}
                      </a>
                    ) : (
                      <p className="text-foreground font-medium">{contact.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 rounded-2xl border border-primary/20 bg-gradient-to-r from-pink-100/40 to-pink-50/30">
              <h3 className="font-display text-xl text-foreground mb-2">Prefer a call?</h3>
              <p className="text-muted-foreground mb-4">
                Share a few details and I'll set up a quick intro call to understand what you need.
              </p>
              <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">15 min intro</span>
                <span className="px-3 py-1 rounded-full bg-card text-foreground/80 border border-border/60">Timezone flexible</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

