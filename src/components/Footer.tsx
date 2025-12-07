import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-secondary/30 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-display text-lg text-foreground">
            Sarah <span className="text-primary">.</span>
          </div>
          
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Made with <Heart size={14} className="text-primary fill-primary" /> love © {currentYear}
          </p>
          
          <div className="flex items-center gap-6">
            <a 
              href="https://www.linkedin.com/in/sarah-salame-29aa0335a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
