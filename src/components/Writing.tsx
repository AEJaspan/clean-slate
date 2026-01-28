import { ArrowUpRight } from "lucide-react";

const articles = [
  {
    title: "LLM Classifier Confidence Scores",
    date: "Sep 2025",
    url: "https://aejaspan.github.io/posts/2025-09-01-LLM-Clasifier-Confidence-Scores",
  },
  {
    title: "Negotiation Strategies",
    date: "May 2025",
    url: "https://aejaspan.github.io/posts/2025-05-26-Negotiation-strategies",
  },
  {
    title: "GenAI Connect: Building with LangChain",
    date: "Jul 2024",
    url: "https://aejaspan.github.io/posts/2024-07-19-GenAi%20connect%20-%20building%20with%20LangChain",
  },
];

const Writing = () => {
  return (
    <section id="writing" className="py-16 px-6 bg-secondary/30">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-8">
          Writing
        </h2>
        
        <div className="space-y-1">
          {articles.map((article, index) => (
            <a
              key={index}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between py-4 border-b border-border/50 hover:border-border transition-colors duration-300"
            >
              <div className="flex items-center gap-4">
                <span className="text-foreground group-hover:text-accent transition-colors duration-300">
                  {article.title}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm text-muted-foreground">
                  {article.date}
                </span>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
              </div>
            </a>
          ))}
        </div>
        
        <a
          href="https://aejaspan.github.io/tabs/archive.html"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-6 text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
        >
          View all articles
          <ArrowUpRight className="w-3 h-3" />
        </a>
      </div>
    </section>
  );
};

export default Writing;
