# Dr A. E. Jaspan - Personal Website

A personal portfolio and blog site built with React, TypeScript, Vite, and Tailwind CSS. Automatically deploys to GitHub Pages via GitHub Actions.

**Live Site:** https://aejaspan.github.io/clean-slate/

---

## Table of Contents

- [Prerequisites](#prerequisites)
- [Quick Start](#quick-start)
- [Project Structure](#project-structure)
- [Tech Stack](#tech-stack)
- [Local Development](#local-development)
- [Building for Production](#building-for-production)
- [Deployment](#deployment)
- [Adding Blog Posts](#adding-blog-posts)
- [Configuration](#configuration)
- [Troubleshooting](#troubleshooting)

---

## Prerequisites

Before you begin, ensure you have the following installed:

### Required Software

| Software | Version | Download |
|----------|---------|----------|
| **Node.js** | >= 18.x | [nodejs.org](https://nodejs.org/) or use [nvm](https://github.com/nvm-sh/nvm) |
| **npm** | >= 9.x | Included with Node.js |
| **Git** | >= 2.x | [git-scm.com](https://git-scm.com/) |

### Verify Installation

```bash
node --version    # Should output v18.x.x or higher
npm --version     # Should output 9.x.x or higher
git --version     # Should output 2.x.x or higher
```

### Optional (Recommended)

- **[nvm](https://github.com/nvm-sh/nvm)** - Node Version Manager for managing multiple Node.js versions
- **[VS Code](https://code.visualstudio.com/)** - Recommended editor with extensions:
  - ESLint
  - Tailwind CSS IntelliSense
  - TypeScript Vue Plugin (Volar)

---

## Quick Start

```bash
# 1. Clone the repository
git clone https://github.com/AEJaspan/clean-slate.git
cd clean-slate

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Open in browser
# Navigate to http://localhost:8080
```

---

## Project Structure

```
clean-slate/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions workflow for auto-deployment
├── public/
│   ├── 404.html                # SPA redirect handler for GitHub Pages
│   ├── favicon.ico             # Site favicon
│   └── robots.txt              # Search engine directives
├── src/
│   ├── components/             # Reusable React components
│   │   ├── ui/                 # shadcn/ui base components (Button, Card, etc.)
│   │   ├── Header.tsx          # Navigation header with search
│   │   ├── Hero.tsx            # Landing section with profile
│   │   ├── About.tsx           # About section
│   │   ├── Writing.tsx         # Blog preview section
│   │   ├── Contact.tsx         # Contact section with form
│   │   ├── ContactForm.tsx     # Contact form (Web3Forms integration)
│   │   ├── Footer.tsx          # Site footer
│   │   ├── SearchDialog.tsx    # Article search (Cmd+K)
│   │   └── ThemeToggle.tsx     # Dark/light mode toggle
│   ├── pages/                  # Route-level page components
│   │   ├── Index.tsx           # Home page
│   │   ├── Articles.tsx        # Blog listing page
│   │   ├── Article.tsx         # Individual article page
│   │   └── NotFound.tsx        # 404 page
│   ├── data/
│   │   └── articles.ts         # Blog post content and metadata
│   ├── hooks/                  # Custom React hooks
│   │   ├── use-mobile.tsx      # Mobile detection hook
│   │   └── use-toast.ts        # Toast notification hook
│   ├── lib/
│   │   └── utils.ts            # Utility functions (cn, etc.)
│   ├── App.tsx                 # Root component with routing
│   ├── App.css                 # Component-specific styles
│   ├── index.css               # Global styles and Tailwind directives
│   └── main.tsx                # Application entry point
├── index.html                  # HTML template
├── vite.config.ts              # Vite build configuration
├── tailwind.config.ts          # Tailwind CSS configuration
├── tsconfig.json               # TypeScript configuration
├── tsconfig.app.json           # TypeScript config for app code
├── tsconfig.node.json          # TypeScript config for Node.js
├── postcss.config.js           # PostCSS configuration
├── eslint.config.js            # ESLint configuration
├── components.json             # shadcn/ui configuration
└── package.json                # Dependencies and scripts
```

---

## Tech Stack

### Core Framework

| Technology | Purpose | Documentation |
|------------|---------|---------------|
| **[React 18](https://react.dev/)** | UI library with hooks and concurrent features | [react.dev](https://react.dev/) |
| **[TypeScript 5](https://www.typescriptlang.org/)** | Static type checking | [typescriptlang.org](https://www.typescriptlang.org/docs/) |
| **[Vite 5](https://vitejs.dev/)** | Build tool and dev server with HMR | [vitejs.dev](https://vitejs.dev/guide/) |

### Styling

| Technology | Purpose | Documentation |
|------------|---------|---------------|
| **[Tailwind CSS 3](https://tailwindcss.com/)** | Utility-first CSS framework | [tailwindcss.com](https://tailwindcss.com/docs) |
| **[shadcn/ui](https://ui.shadcn.com/)** | Accessible component primitives | [ui.shadcn.com](https://ui.shadcn.com/docs) |
| **[Radix UI](https://www.radix-ui.com/)** | Headless UI primitives | [radix-ui.com](https://www.radix-ui.com/docs/primitives) |

### Routing & State

| Technology | Purpose | Documentation |
|------------|---------|---------------|
| **[React Router 6](https://reactrouter.com/)** | Client-side routing | [reactrouter.com](https://reactrouter.com/en/main) |
| **[TanStack Query](https://tanstack.com/query)** | Async state management | [tanstack.com/query](https://tanstack.com/query/latest/docs) |
| **[next-themes](https://github.com/pacocoursey/next-themes)** | Dark/light mode theming | [GitHub](https://github.com/pacocoursey/next-themes) |

### Forms & Validation

| Technology | Purpose | Documentation |
|------------|---------|---------------|
| **[React Hook Form](https://react-hook-form.com/)** | Form state management | [react-hook-form.com](https://react-hook-form.com/get-started) |
| **[Zod](https://zod.dev/)** | Schema validation | [zod.dev](https://zod.dev/) |

### Build & Dev Tools

| Technology | Purpose | Documentation |
|------------|---------|---------------|
| **[ESLint 9](https://eslint.org/)** | Code linting | [eslint.org](https://eslint.org/docs/latest/) |
| **[Vitest](https://vitest.dev/)** | Unit testing | [vitest.dev](https://vitest.dev/guide/) |
| **[@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc)** | Fast React transforms via SWC | [GitHub](https://github.com/vitejs/vite-plugin-react-swc) |

---

## Local Development

### Available Scripts

```bash
# Start development server with hot module replacement
npm run dev

# Build for production
npm run build

# Build for development (with source maps)
npm run build:dev

# Preview production build locally
npm run preview

# Run ESLint
npm run lint

# Run tests
npm run test

# Run tests in watch mode
npm run test:watch
```

### Development Server

The development server runs on `http://localhost:8080` by default. Features include:

- **Hot Module Replacement (HMR)**: Changes reflect instantly without full page reload
- **TypeScript checking**: Type errors displayed in terminal and browser overlay
- **Fast refresh**: React components preserve state during edits

### Environment Variables

Create a `.env.local` file for local environment variables:

```bash
# Contact form (Web3Forms)
VITE_WEB3FORMS_ACCESS_KEY=your_access_key_here
```

---

## Building for Production

### Build Command

```bash
npm run build
```

This generates optimized static files in the `dist/` directory:

```
dist/
├── index.html              # Entry HTML with injected scripts
├── assets/
│   ├── index-[hash].css    # Minified CSS bundle (~60KB gzipped: ~10KB)
│   └── index-[hash].js     # Minified JS bundle (~475KB gzipped: ~150KB)
└── [static assets]         # Copied from public/
```

### Build Optimizations

Vite automatically applies:

- **Tree shaking**: Removes unused code
- **Code splitting**: Async chunks for route-based splitting
- **Minification**: Via esbuild (JS) and Lightning CSS (CSS)
- **Asset hashing**: Cache-busting filenames
- **Gzip estimation**: Build output shows compressed sizes

### Preview Production Build

```bash
npm run preview
```

Serves the `dist/` folder locally to verify the production build.

---

## Deployment

### GitHub Pages (Automatic)

The site automatically deploys via GitHub Actions when you push to `main`:

1. **Workflow file**: `.github/workflows/deploy.yml`
2. **Trigger**: Push to `main` or `master` branch
3. **Build**: Runs `npm ci` and `npm run build`
4. **Deploy**: Uploads `dist/` to GitHub Pages

#### First-Time Setup

1. Go to your repository **Settings** → **Pages**
2. Under **Source**, select **GitHub Actions**
3. Push to `main` - the workflow will run automatically

#### Base Path Configuration

The site is configured to deploy to a subdirectory (`/clean-slate/`). This is handled in `vite.config.ts`:

```typescript
base: process.env.GITHUB_ACTIONS ? "/clean-slate/" : "/",
```

React Router is also configured with the correct basename in `src/App.tsx`:

```typescript
<BrowserRouter basename={import.meta.env.BASE_URL}>
```

### SPA Routing on GitHub Pages

GitHub Pages doesn't natively support client-side routing. This is solved with:

1. **`public/404.html`**: Redirects all 404s to `index.html` with path preserved in query string
2. **`index.html` script**: Restores the original path from query string on load

### Manual Deployment

To deploy manually to any static host:

```bash
# Build the site
npm run build

# Upload the dist/ folder to your hosting provider
```

For hosts other than GitHub Pages, update the `base` in `vite.config.ts`:

```typescript
base: "/",  // For root deployment
base: "/my-subdirectory/",  // For subdirectory deployment
```

---

## Adding Blog Posts

### Quick Add

1. Open `src/data/articles.ts`
2. Add a new article object at the **top** of the `articles` array
3. Commit and push - deploys automatically in ~2 minutes

### Article Schema

```typescript
interface Article {
  id: string;        // URL slug (lowercase, hyphens, no spaces)
  title: string;     // Display title
  date: string;      // Format: "Mon YYYY" (e.g., "Jan 2026")
  excerpt: string;   // Short description for listings
  content: string;   // Full article content (markdown-like)
  thumbnail?: string; // Image URL (optional)
  tags: string[];    // Category tags for filtering
}
```

### Full Example

```typescript
{
  id: "my-new-article",
  title: "My New Article Title",
  date: "Jan 2026",
  excerpt: "A brief description that appears in article listings and search results.",
  content: `
# My New Article Title

Introduction paragraph explaining what this article covers.

## First Section

Content with **bold** and *italic* formatting.

### Subsection

- Bullet point 1
- Bullet point 2
- Bullet point 3

## Code Examples

You can include code snippets in your content.

## Conclusion

Wrap up your key points here.

**Links:** [Example](https://example.com)
  `,
  thumbnail: "https://images.unsplash.com/photo-1234567890?w=800&h=400&fit=crop",
  tags: ["Category1", "Category2", "Category3"]
}
```

### Content Formatting

The content field supports a markdown-like syntax:

| Syntax | Renders As |
|--------|------------|
| `# Heading` | H1 heading |
| `## Heading` | H2 heading |
| `### Heading` | H3 heading |
| `**bold**` | **bold** |
| `*italic*` | *italic* |
| `- item` | Bullet list |
| `1. item` | Numbered list |
| `[text](url)` | Hyperlink |

### Thumbnail Images

For free, high-quality images, use [Unsplash](https://unsplash.com):

1. Find an image on Unsplash
2. Copy the photo URL
3. Append `?w=800&h=400&fit=crop` for consistent sizing

Example:
```
https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop
```

---

## Configuration

### Vite Configuration (`vite.config.ts`)

```typescript
export default defineConfig(({ mode }) => ({
  base: process.env.GITHUB_ACTIONS ? "/clean-slate/" : "/",
  server: {
    host: "::",
    port: 8080,
    hmr: { overlay: false },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: { "@": path.resolve(__dirname, "./src") },
  },
}));
```

### Tailwind Configuration (`tailwind.config.ts`)

Customizations include:

- **Custom colors**: HSL-based with CSS variables for theming
- **Dark mode**: Class-based (`class` strategy)
- **Animations**: Custom fade-in, slide-up with stagger delays
- **Typography**: Inter font family

### Path Aliases

The `@` alias maps to `./src` for cleaner imports:

```typescript
// Instead of:
import { Button } from "../../../components/ui/button";

// Use:
import { Button } from "@/components/ui/button";
```

---

## Troubleshooting

### Common Issues

#### Port 8080 already in use

```bash
# Find process using port 8080
lsof -i :8080

# Kill the process
kill -9 <PID>

# Or use a different port
npm run dev -- --port 3000
```

#### Node version mismatch

```bash
# Using nvm, switch to correct version
nvm use 18

# Or install the correct version
nvm install 18
```

#### Build fails with TypeScript errors

```bash
# Check for type errors
npx tsc --noEmit

# Fix errors before building
npm run build
```

#### GitHub Pages shows 404

1. Ensure **Settings** → **Pages** → **Source** is set to **GitHub Actions**
2. Check the Actions tab for workflow errors
3. Verify the `base` path matches your repository name

#### Routing doesn't work on refresh

This is expected on GitHub Pages. The `404.html` redirect handles this automatically. If deploying elsewhere, configure your server to serve `index.html` for all routes.

### Getting Help

- **Issues**: [GitHub Issues](https://github.com/AEJaspan/clean-slate/issues)
- **Vite docs**: [vitejs.dev](https://vitejs.dev/)
- **React docs**: [react.dev](https://react.dev/)
- **Tailwind docs**: [tailwindcss.com](https://tailwindcss.com/)

---

## License

MIT License - feel free to use this as a template for your own site.
