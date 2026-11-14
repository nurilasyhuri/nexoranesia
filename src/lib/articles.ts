import fs from 'node:fs';
import path from 'node:path';

export interface ArticleStep {
  title: string;
  desc: string;
}

export interface ArticleFaq {
  q: string;
  a: string;
}

export interface Article {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  publishDate: string;
  publishedAt: string;
  author: string;
  authorRole: string;
  category: string;
  tags: string[];
  heroImage: string;
  readTime: string;
  intro: string;
  section1Title: string;
  section1Content: string;
  expertTips: string[];
  tableTitle: string;
  tableHeaders: string[];
  tableRows: string[][];
  section3Title: string;
  steps: ArticleStep[];
  faqs: ArticleFaq[];
  ctaTitle?: string;
  ctaText?: string;
}

const articlesDir = path.join(process.cwd(), 'src', 'content', 'articles');

function ensureArticlesDir() {
  if (!fs.existsSync(articlesDir)) {
    fs.mkdirSync(articlesDir, { recursive: true });
  }
}

export function getAllArticles(): Article[] {
  ensureArticlesDir();
  try {
    const files = fs.readdirSync(articlesDir).filter((file) => file.endsWith('.json'));
    const articles: Article[] = [];

    for (const file of files) {
      try {
        const filePath = path.join(articlesDir, file);
        const raw = fs.readFileSync(filePath, 'utf8');
        const data = JSON.parse(raw) as Article;
        if (data.slug && data.title) {
          articles.push(data);
        }
      } catch (err) {
        console.error(`Failed to parse article file: ${file}`, err);
      }
    }

    // Sort by publishedAt descending (newest first)
    return articles.sort((a, b) => {
      const timeA = new Date(a.publishedAt || a.publishDate).getTime();
      const timeB = new Date(b.publishedAt || b.publishDate).getTime();
      return timeB - timeA;
    });
  } catch (error) {
    console.error('Error reading articles directory:', error);
    return [];
  }
}

export function getArticleBySlug(slug: string): Article | null {
  ensureArticlesDir();
  const filePath = path.join(articlesDir, `${slug}.json`);
  if (!fs.existsSync(filePath)) {
    return null;
  }
  try {
    const raw = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(raw) as Article;
  } catch (err) {
    console.error(`Failed to read article ${slug}:`, err);
    return null;
  }
}

export function getRelatedArticles(currentSlug: string, category: string, limit = 3): Article[] {
  const all = getAllArticles();
  const sameCategory = all.filter((a) => a.slug !== currentSlug && a.category === category);
  if (sameCategory.length >= limit) {
    return sameCategory.slice(0, limit);
  }
  const remaining = all.filter((a) => a.slug !== currentSlug && a.category !== category);
  return [...sameCategory, ...remaining].slice(0, limit);
}
