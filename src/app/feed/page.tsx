import { Metadata } from 'next';
import Link from 'next/link';
import { Section, SectionHeader } from '@/components/Section';
import Button from '@/components/Button';
import { articles } from '@/data/articles';
import { guides } from '@/data/guides';
import { glossaryTerms } from '@/data/glossary';

export const metadata: Metadata = {
  title: 'Content Feed',
  description: 'All the latest AI content from How Do I Use AI. Guides, articles, and glossary terms all in one place.',
  openGraph: {
    title: 'Content Feed | How Do I Use AI',
    description: 'All the latest AI content from How Do I Use AI.',
  },
};

type FeedItem = {
  type: 'article' | 'guide' | 'glossary';
  title: string;
  description: string;
  href: string;
  date?: string;
  tag?: string;
};

export default function FeedPage() {
  // Combine all content
  const guideItems: FeedItem[] = guides.map((guide) => ({
    type: 'guide',
    title: guide.title,
    description: guide.description,
    href: `/guides/${guide.slug}`,
    date: guide.publishedAt,
    tag: 'Guide',
  }));

  const articleItems: FeedItem[] = articles.map((article) => ({
    type: 'article',
    title: article.title,
    description: article.description,
    href: `/resources/${article.slug}`,
    date: article.publishedAt,
    tag: article.category,
  }));

  const glossaryItems: FeedItem[] = glossaryTerms.map((term) => ({
    type: 'glossary',
    title: term.term,
    description: term.shortDefinition,
    href: `/glossary/${term.slug}`,
    tag: 'Glossary',
  }));

  const feedItems: FeedItem[] = [...guideItems, ...articleItems, ...glossaryItems].sort((a, b) => {
    if (a.date && b.date) {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    }
    return 0;
  });

  return (
    <Section className="pt-24">
      <SectionHeader
        eyebrow="Everything"
        title="Content Feed"
        description="All our AI learning content in one place"
      />

      <div className="max-w-3xl mx-auto">
        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <Link
            href="/guides"
            className="px-4 py-2 bg-dark-800 text-text-secondary rounded-full text-sm font-medium hover:bg-dark-700 transition-colors"
          >
            Guides ({guides.length})
          </Link>
          <Link
            href="/resources"
            className="px-4 py-2 bg-dark-800 text-text-secondary rounded-full text-sm font-medium hover:bg-dark-700 transition-colors"
          >
            Articles ({articles.length})
          </Link>
          <Link
            href="/glossary"
            className="px-4 py-2 bg-dark-800 text-text-secondary rounded-full text-sm font-medium hover:bg-dark-700 transition-colors"
          >
            Glossary ({glossaryTerms.length})
          </Link>
          <Link
            href="/prompts"
            className="px-4 py-2 bg-dark-800 text-text-secondary rounded-full text-sm font-medium hover:bg-dark-700 transition-colors"
          >
            Prompts (10)
          </Link>
        </div>

        {/* Feed */}
        <div className="space-y-4">
          {feedItems.map((item, i) => (
            <Link
              key={i}
              href={item.href}
              className="block p-6 bg-dark-800 border border-dark-700 rounded-2xl hover:border-primary-500/50 transition-colors group"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span
                      className={`px-2 py-0.5 text-xs font-medium rounded-full ${
                        item.type === 'guide'
                          ? 'bg-primary-500/10 text-primary-400'
                          : item.type === 'glossary'
                          ? 'bg-accent-500/10 text-accent-400'
                          : 'bg-purple-500/10 text-purple-400'
                      }`}
                    >
                      {item.tag}
                    </span>
                    {item.date && (
                      <span className="text-xs text-text-muted">
                        {new Date(item.date).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-semibold text-text-primary group-hover:text-primary-400 transition-colors mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-text-muted line-clamp-2">
                    {item.description}
                  </p>
                </div>
                <svg
                  className="w-5 h-5 text-text-muted group-hover:text-primary-400 group-hover:translate-x-1 transition-all flex-shrink-0 mt-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-text-muted mb-4">
            Want more AI content? Follow us for daily tips!
          </p>
          <Button
            href="https://www.linkedin.com/company/how-do-i-use-ai"
            external
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
            Follow on LinkedIn
          </Button>
        </div>
      </div>
    </Section>
  );
}
