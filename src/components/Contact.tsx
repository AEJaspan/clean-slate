import { Github, Linkedin } from "lucide-react";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section id="contact" className="py-16 px-6">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-8">
          Contact
        </h2>

        <p className="text-foreground/90 leading-relaxed mb-8">
          I'm always open to discussing new opportunities, collaborations, or
          interesting problems. Feel free to reach out.
        </p>

        <ContactForm />

        <div className="flex items-center gap-6 mt-8 pt-8 border-t border-border">
          <a
            href="https://github.com/AEJaspan"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            <Github className="w-5 h-5" />
            <span className="text-sm">GitHub</span>
          </a>

          <a
            href="https://www.linkedin.com/in/adam-jaspan"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            <Linkedin className="w-5 h-5" />
            <span className="text-sm">LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
