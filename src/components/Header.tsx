import { Github, Linkedin } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border/50">
      <div className="max-w-2xl mx-auto px-6 h-14 flex items-center justify-between">
        <a 
          href="#" 
          className="text-sm font-medium text-foreground hover:text-accent transition-colors duration-300"
        >
          A. E. Jaspan
        </a>
        
        <nav className="flex items-center gap-6">
          <a 
            href="#about" 
            className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            About
          </a>
          <a 
            href="#writing" 
            className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            Writing
          </a>
          <a 
            href="#contact" 
            className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            Contact
          </a>
          <div className="flex items-center gap-3 ml-2 pl-4 border-l border-border">
            <a 
              href="https://github.com/AEJaspan" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a 
              href="https://www.linkedin.com/in/adam-jaspan" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
