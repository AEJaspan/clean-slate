import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { articles } from "@/data/articles";

const Writing = () => {
  return (
    <section id="writing" className="py-16 px-6 bg-secondary/30">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-8">
          Writing
        </h2>
        
        <div className="space-y-1">
          {articles.slice(0, 3).map((article) => (
            <Link
              key={article.id}
              to={`/article/${article.id}`}
              className="group flex items-center justify-between py-4 border-b border-border/50 hover:border-border transition-colors duration-300"
            >
              <div className="flex items-center gap-4">
                {article.thumbnail && (
                  <div className="shrink-0 w-12 h-12 rounded overflow-hidden bg-secondary hidden sm:block">
                    <img
                      src={article.thumbnail}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
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
            </Link>
          ))}
        </div>
        
        <Link
          to="/articles"
          className="inline-flex items-center gap-2 mt-6 text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
        >
          View all articles
          <ArrowUpRight className="w-3 h-3" />
        </Link>
      </div>
    </section>
  );
};

export default Writing;
