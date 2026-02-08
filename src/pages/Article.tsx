import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { getArticleById } from "@/data/articles";

const Article = () => {
    const { id } = useParams<{ id: string }>();
    const article = id ? getArticleById(id) : undefined;

    if (!article) {
        return <Navigate to="/articles" replace />;
    }

    // Parse inline markdown (bold, italic, links, inline code)
    const parseInline = (text: string): (string | JSX.Element)[] => {
        const parts: (string | JSX.Element)[] = [];
        let inlineKey = 0;
        // Match: images, links, bold, italic, inline code
        const regex =
            /!\[([^\]]*)\]\(([^)]+)\)|\[([^\]]+)\]\(([^)]+)\)|\*\*(.+?)\*\*|\*(.+?)\*|`([^`]+)`/g;
        let lastIndex = 0;
        let match;

        while ((match = regex.exec(text)) !== null) {
            if (match.index > lastIndex) {
                parts.push(text.slice(lastIndex, match.index));
            }

            if (match[1] !== undefined && match[2] !== undefined) {
                // Image: ![alt](url)
                parts.push(
                    <img
                        key={`inline-${inlineKey++}`}
                        src={match[2]}
                        alt={match[1]}
                        className="rounded-lg my-4 max-w-full"
                    />,
                );
            } else if (match[3] !== undefined && match[4] !== undefined) {
                // Link: [text](url)
                parts.push(
                    <a
                        key={`inline-${inlineKey++}`}
                        href={match[4]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary underline hover:text-primary/80"
                    >
                        {match[3]}
                    </a>,
                );
            } else if (match[5] !== undefined) {
                // Bold: **text**
                parts.push(
                    <strong
                        key={`inline-${inlineKey++}`}
                        className="font-semibold text-foreground"
                    >
                        {match[5]}
                    </strong>,
                );
            } else if (match[6] !== undefined) {
                // Italic: *text*
                parts.push(<em key={`inline-${inlineKey++}`}>{match[6]}</em>);
            } else if (match[7] !== undefined) {
                // Inline code: `text`
                parts.push(
                    <code
                        key={`inline-${inlineKey++}`}
                        className="bg-secondary px-1.5 py-0.5 rounded text-sm"
                    >
                        {match[7]}
                    </code>,
                );
            }

            lastIndex = match.index + match[0].length;
        }

        if (lastIndex < text.length) {
            parts.push(text.slice(lastIndex));
        }

        return parts;
    };

    // Simple markdown-like rendering for content
    const renderContent = (content: string) => {
        const lines = content.trim().split("\n");
        const elements: JSX.Element[] = [];
        let key = 0;
        let i = 0;

        while (i < lines.length) {
            const trimmed = lines[i].trim();

            // Table detection: line starting with |
            if (trimmed.startsWith("|") && trimmed.endsWith("|")) {
                const tableRows: string[] = [];
                while (
                    i < lines.length &&
                    lines[i].trim().startsWith("|") &&
                    lines[i].trim().endsWith("|")
                ) {
                    tableRows.push(lines[i].trim());
                    i++;
                }
                // Parse table
                const parseCells = (row: string) =>
                    row
                        .split("|")
                        .slice(1, -1)
                        .map((c) => c.trim());

                const headerCells = parseCells(tableRows[0]);
                // Skip separator row (row with dashes)
                const dataRows = tableRows.slice(2);

                elements.push(
                    <div key={key++} className="overflow-x-auto my-4">
                        <table className="w-full text-sm border-collapse">
                            <thead>
                                <tr>
                                    {headerCells.map((cell, ci) => (
                                        <th
                                            key={ci}
                                            className="border border-border px-3 py-2 text-left font-semibold bg-secondary"
                                        >
                                            {cell}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {dataRows.map((row, ri) => (
                                    <tr key={ri}>
                                        {parseCells(row).map((cell, ci) => (
                                            <td
                                                key={ci}
                                                className="border border-border px-3 py-2 text-muted-foreground"
                                            >
                                                {parseInline(cell)}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>,
                );
                continue;
            }

            // Image on its own line: ![alt](url)
            const imageMatch = trimmed.match(/^!\[([^\]]*)\]\(([^)]+)\)$/);
            if (imageMatch) {
                elements.push(
                    <figure key={key++} className="my-6">
                        <img
                            src={imageMatch[2]}
                            alt={imageMatch[1]}
                            className="rounded-lg max-w-full"
                        />
                        {imageMatch[1] && (
                            <figcaption className="text-sm text-muted-foreground mt-2 italic">
                                {imageMatch[1]}
                            </figcaption>
                        )}
                    </figure>,
                );
                i++;
                continue;
            }

            if (trimmed.startsWith("# ")) {
                elements.push(
                    <h1
                        key={key++}
                        className="text-3xl font-semibold mt-8 mb-4 first:mt-0"
                    >
                        {parseInline(trimmed.slice(2))}
                    </h1>,
                );
            } else if (trimmed.startsWith("## ")) {
                elements.push(
                    <h2 key={key++} className="text-xl font-semibold mt-8 mb-3">
                        {parseInline(trimmed.slice(3))}
                    </h2>,
                );
            } else if (trimmed.startsWith("### ")) {
                elements.push(
                    <h3 key={key++} className="text-lg font-medium mt-6 mb-2">
                        {parseInline(trimmed.slice(4))}
                    </h3>,
                );
            } else if (trimmed.startsWith("- ")) {
                elements.push(
                    <li key={key++} className="ml-4 text-muted-foreground">
                        {parseInline(trimmed.slice(2))}
                    </li>,
                );
            } else if (/^\d+\./.test(trimmed)) {
                elements.push(
                    <li
                        key={key++}
                        className="ml-4 text-muted-foreground list-decimal"
                    >
                        {parseInline(trimmed.replace(/^\d+\.\s*/, ""))}
                    </li>,
                );
            } else if (trimmed) {
                elements.push(
                    <p
                        key={key++}
                        className="text-muted-foreground leading-relaxed mb-4"
                    >
                        {parseInline(trimmed)}
                    </p>,
                );
            }

            i++;
        }

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
                        <span className="text-sm text-muted-foreground">
                            {article.date}
                        </span>
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
