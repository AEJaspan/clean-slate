# Dr A. E. Jaspan - Personal Website

A personal portfolio and blog site built with React, TypeScript, and Tailwind CSS.

## Live Site

**🌐 https://aejaspan.github.io/clean-slate/**

The site automatically deploys to GitHub Pages when you push to the `main` branch.

## Adding a New Blog Post

1. Open `src/data/articles.ts`
2. Add a new article object at the **top** of the `articles` array:

```typescript
{
  id: "your-url-slug",           // URL-friendly (lowercase, hyphens)
  title: "Your Article Title",
  date: "Jan 2026",              // Format: "Mon YYYY"
  excerpt: "A brief description that appears in article listings.",
  content: `
# Your Article Title

Your introduction paragraph here.

## Section Heading

Your content with **bold** and *italic* text.

- Bullet point 1
- Bullet point 2

## Conclusion

Wrap up your thoughts here.
  `,
  thumbnail: "https://images.unsplash.com/photo-XXXXX?w=800&h=400&fit=crop",
  tags: ["Tag1", "Tag2", "Tag3"]
},
```

3. Commit and push - the site will auto-deploy in ~2 minutes

**Tips:**
- Find free images at [Unsplash](https://unsplash.com), copy the photo URL and add `?w=800&h=400&fit=crop`
- Use `#` for main title, `##` for sections, `###` for subsections
- Articles appear in array order (first = newest)

## Local Development

```sh
# Install dependencies
npm install

# Start dev server
npm run dev
```

The site runs at http://localhost:8080

## Tech Stack

- **Framework:** React 18 + TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Deployment:** GitHub Pages via GitHub Actions

## Project Structure

```
src/
├── components/     # React components
├── pages/          # Page components (Index, Articles, Article)
├── data/
│   └── articles.ts # Blog posts data (edit this to add posts!)
├── hooks/          # Custom React hooks
└── lib/            # Utilities
```
