import { useState } from "react";
import { Github, Linkedin, Search } from "lucide-react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import SearchDialog from "./SearchDialog";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border/50">
        <div className="max-w-2xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link 
            to="/" 
            className="text-sm font-medium text-foreground hover:text-accent transition-colors duration-300"
          >
            A. E. Jaspan
          </Link>
          
          <nav className="flex items-center gap-4 sm:gap-6">
            <a 
              href="/#about" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 hidden sm:block"
            >
              About
            </a>
            <Link 
              to="/articles" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              Writing
            </Link>
            <a 
              href="/#contact" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 hidden sm:block"
            >
              Contact
            </a>
            
            <div className="flex items-center gap-1 ml-2 pl-4 border-l border-border">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSearchOpen(true)}
                className="h-8 w-8 text-muted-foreground hover:text-foreground"
                aria-label="Search"
              >
                <Search className="w-4 h-4" />
              </Button>
              <ThemeToggle />
              <a 
                href="https://github.com/AEJaspan" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-foreground transition-colors duration-300"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a 
                href="https://www.linkedin.com/in/adam-jaspan" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-foreground transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </nav>
        </div>
      </header>
      <SearchDialog open={searchOpen} onOpenChange={setSearchOpen} />
    </>
  );
};

export default Header;
