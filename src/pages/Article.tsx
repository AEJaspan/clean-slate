import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { getArticleById } from "@/data/articles";

const Article = () => {
  const { id } = useParams<{ id: string }>();
  const article = id ? getArticleById(id) : undefined;

  if (!article) {
    return <Navigate to="/articles" replace />;
  }

  // Simple markdown-like rendering for content
  const renderContent = (content: string) => {
    const lines = content.trim().split("\n");
    const elements: JSX.Element[] = [];
    let key = 0;

    lines.forEach((line) => {
      const trimmed = line.trim();
      
      if (trimmed.startsWith("# ")) {
        elements.push(
          <h1 key={key++} className="text-3xl font-semibold mt-8 mb-4 first:mt-0">
            {trimmed.slice(2)}
          </h1>
        );
      } else if (trimmed.startsWith("## ")) {
        elements.push(
          <h2 key={key++} className="text-xl font-semibold mt-8 mb-3">
            {trimmed.slice(3)}
          </h2>
        );
      } else if (trimmed.startsWith("### ")) {
        elements.push(
          <h3 key={key++} className="text-lg font-medium mt-6 mb-2">
            {trimmed.slice(4)}
          </h3>
        );
      } else if (trimmed.startsWith("- ")) {
        elements.push(
          <li key={key++} className="ml-4 text-muted-foreground">
            {trimmed.slice(2)}
          </li>
        );
      } else if (/^\d+\./.test(trimmed)) {
        elements.push(
          <li key={key++} className="ml-4 text-muted-foreground list-decimal">
            {trimmed.replace(/^\d+\.\s*/, "")}
          </li>
        );
      } else if (trimmed) {
        elements.push(
          <p key={key++} className="text-muted-foreground leading-relaxed mb-4">
            {trimmed}
          </p>
        );
      }
    });

    return elements;
  };

  return (
    <div className="min-h-screen bg-background">
      <article className="max-w-2xl mx-auto px-6 py-16">
        <Link
          to="/articles"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          All articles
        </Link>

        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-sm text-muted-foreground">{article.date}</span>
            <div className="flex gap-2">
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-0.5 bg-secondary text-muted-foreground rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {article.thumbnail && (
            <div className="w-full aspect-[2/1] rounded-lg overflow-hidden mb-8 bg-secondary">
              <img
                src={article.thumbnail}
                alt={article.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}
        </header>

        <div className="prose prose-neutral dark:prose-invert max-w-none">
          {renderContent(article.content)}
        </div>
      </article>
    </div>
  );
};

export default Article;
