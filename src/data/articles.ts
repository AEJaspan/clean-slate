export interface Article {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  thumbnail?: string;
  tags: string[];
}

// Add new articles here - just add a new object to this array
export const articles: Article[] = [
  {
    id: "llm-classifier-confidence-scores",
    title: "LLM Classifier Confidence Scores",
    date: "Sep 2025",
    excerpt: "Exploring methods for extracting and interpreting confidence scores from large language model classifiers.",
    content: `
# LLM Classifier Confidence Scores

Large language models can be used as powerful classifiers, but extracting reliable confidence scores requires careful consideration.

## The Challenge

Traditional classifiers output probability distributions, but LLMs generate text. How do we get meaningful confidence scores?

## Approaches

### 1. Token Probabilities
We can examine the log probabilities of generated tokens to infer confidence.

### 2. Self-Assessment
Prompting the model to rate its own confidence can work, but introduces biases.

### 3. Calibration
Post-hoc calibration methods can improve the reliability of extracted scores.

## Conclusion

Each approach has trade-offs. The best choice depends on your specific use case and accuracy requirements.
    `,
    thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop",
    tags: ["LLM", "Machine Learning", "Classification"]
  },
  {
    id: "negotiation-strategies",
    title: "Negotiation Strategies",
    date: "May 2025",
    excerpt: "Key principles and frameworks for effective negotiation in professional settings.",
    content: `
# Negotiation Strategies

Effective negotiation is a critical skill in both personal and professional contexts.

## Core Principles

### 1. Understand Interests, Not Positions
Focus on the underlying needs rather than stated demands.

### 2. Create Value Before Claiming It
Look for opportunities to expand the pie before dividing it.

### 3. BATNA
Always know your Best Alternative to a Negotiated Agreement.

## Framework

1. **Prepare** - Research and understand all parties
2. **Open** - Set the tone and establish rapport
3. **Explore** - Discover interests and options
4. **Propose** - Make and evaluate offers
5. **Close** - Finalize and document agreement

## Key Takeaways

The best negotiations leave all parties feeling they've achieved a good outcome.
    `,
    thumbnail: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&h=400&fit=crop",
    tags: ["Career", "Communication", "Strategy"]
  },
  {
    id: "genai-connect-langchain",
    title: "GenAI Connect: Building with LangChain",
    date: "Jul 2024",
    excerpt: "A practical guide to building production-ready applications with LangChain and generative AI.",
    content: `
# GenAI Connect: Building with LangChain

LangChain provides a powerful framework for building applications with large language models.

## Getting Started

LangChain abstracts away much of the complexity of working with LLMs.

### Key Components

- **Chains** - Combine multiple operations
- **Agents** - Dynamic decision-making
- **Memory** - Maintain conversation context
- **Retrievers** - Access external knowledge

## Practical Example

Building a document Q&A system:

1. Load and split documents
2. Create embeddings and store in vector database
3. Set up retrieval chain
4. Query with natural language

## Best Practices

- Use streaming for better UX
- Implement proper error handling
- Monitor token usage
- Cache responses when appropriate

## Conclusion

LangChain accelerates development but understanding the fundamentals remains important.
    `,
    thumbnail: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&h=400&fit=crop",
    tags: ["LangChain", "GenAI", "Python"]
  }
];

export const getArticleById = (id: string): Article | undefined => {
  return articles.find(article => article.id === id);
};

export const searchArticles = (query: string): Article[] => {
  const lowerQuery = query.toLowerCase();
  return articles.filter(
    article =>
      article.title.toLowerCase().includes(lowerQuery) ||
      article.excerpt.toLowerCase().includes(lowerQuery) ||
      article.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
  );
};
