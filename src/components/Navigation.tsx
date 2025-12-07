import { useState, useEffect } from 'react';

const Navigation = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < 100) {
        setIsVisible(true);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsMobileMenuOpen(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="bg-background/60 backdrop-blur-xl border-b border-border/30">
          <div className="container mx-auto px-6 py-4 flex items-center justify-between">
            <a 
              href="#" 
              className="font-display text-xl text-foreground hover:text-primary transition-colors"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              Sarah 🤍💗<span className="text-primary"> website</span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>

            {/* Modern Mobile Menu Button - Animated Dots */}
            <button
              className="md:hidden relative w-10 h-10 flex items-center justify-center"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className="flex flex-col gap-1.5 items-center">
                <div className={`flex gap-1.5 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-[5px]' : ''}`}>
                  <span className={`w-2 h-2 rounded-full bg-primary transition-all duration-300 ${isMobileMenuOpen ? 'scale-75' : ''}`} />
                  <span className={`w-2 h-2 rounded-full bg-primary transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0 scale-0' : ''}`} />
                </div>
                <div className={`flex gap-1.5 transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-[5px]' : ''}`}>
                  <span className={`w-2 h-2 rounded-full bg-primary transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0 scale-0' : ''}`} />
                  <span className={`w-2 h-2 rounded-full bg-primary transition-all duration-300 ${isMobileMenuOpen ? 'scale-75' : ''}`} />
                </div>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Modern Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-background/90 backdrop-blur-xl"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        
        {/* Menu Content */}
        <div className="relative h-full flex flex-col items-center justify-center">
          <div className="space-y-2">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`block text-center text-4xl font-display text-foreground hover:text-primary transition-all duration-300 py-4 transform ${
                  isMobileMenuOpen 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: isMobileMenuOpen ? `${index * 100 + 200}ms` : '0ms' }}
              >
                {link.label}
                <span className="text-primary">.</span>
              </a>
            ))}
          </div>
          
          {/* Decorative elements */}
          <div className={`absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-3 transition-all duration-500 ${
            isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`} style={{ transitionDelay: isMobileMenuOpen ? '500ms' : '0ms' }}>
            <span className="w-2 h-2 rounded-full bg-primary/40" />
            <span className="w-2 h-2 rounded-full bg-primary/60" />
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span className="w-2 h-2 rounded-full bg-primary/60" />
            <span className="w-2 h-2 rounded-full bg-primary/40" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
