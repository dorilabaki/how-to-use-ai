import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Section } from '@/components/Section';
import Button from '@/components/Button';
import MarkdownContent from '@/components/MarkdownContent';
import { articles, getArticle, getAllArticleSlugs } from '@/data/articles';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllArticleSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) {
    return { title: 'Article Not Found' };
  }

  return {
    title: article.title,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      type: 'article',
      publishedTime: article.publishedAt,
      authors: [article.author],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.description,
    },
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) {
    notFound();
  }

  const schemaOrg = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    author: {
      '@type': 'Organization',
      name: article.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'How Do I Use AI',
      logo: {
        '@type': 'ImageObject',
        url: 'https://howdoiuse.ai/logo.png',
      },
    },
    datePublished: article.publishedAt,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://howdoiuse.ai/resources/${article.slug}`,
    },
  };

  const otherArticles = articles.filter((a) => a.slug !== article.slug).slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
      />

      <article>
        <Section className="pt-24 pb-8">
          <div className="max-w-3xl mx-auto">
            {/* Breadcrumb */}
            <nav className="mb-8">
              <ol className="flex items-center gap-2 text-sm text-text-muted">
                <li>
                  <Link href="/" className="hover:text-primary-400 transition-colors">
                    Home
                  </Link>
                </li>
                <li>/</li>
                <li>
                  <Link href="/resources" className="hover:text-primary-400 transition-colors">
                    Resources
                  </Link>
                </li>
                <li>/</li>
                <li className="text-text-secondary">{article.title}</li>
              </ol>
            </nav>

            {/* Header */}
            <header className="mb-12">
              <span className="inline-block px-3 py-1 text-sm font-medium bg-primary-500/10 text-primary-400 rounded-full mb-4">
                {article.category}
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-6">
                {article.title}
              </h1>
              <p className="text-xl text-text-secondary mb-6">
                {article.description}
              </p>
              <div className="flex items-center gap-4 text-sm text-text-muted">
                <span>{article.author}</span>
                <span>•</span>
                <span>{article.readTime}</span>
                <span>•</span>
                <time dateTime={article.publishedAt}>
                  {new Date(article.publishedAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
              </div>
            </header>

            {/* Content */}
            <div className="prose-custom">
              <MarkdownContent content={article.content} />
            </div>

            {/* Share & CTA */}
            <div className="mt-12 pt-8 border-t border-dark-700">
              <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
                <p className="text-text-secondary">Found this helpful? Share it with others!</p>
                <Button
                  href="https://www.linkedin.com/company/how-do-i-use-ai"
                  external
                  variant="secondary"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  Follow for More
                </Button>
              </div>
            </div>
          </div>
        </Section>

        {/* Related Articles */}
        <Section className="bg-dark-900">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-text-primary mb-8">
              Related Articles
            </h2>
            <div className="grid gap-6">
              {otherArticles.map((related) => (
                <Link
                  key={related.slug}
                  href={`/resources/${related.slug}`}
                  className="block p-6 bg-dark-800 border border-dark-700 rounded-xl hover:border-primary-500/50 transition-colors"
                >
                  <span className="text-xs font-medium text-primary-400 mb-2 block">
                    {related.category}
                  </span>
                  <h3 className="text-lg font-semibold text-text-primary mb-2">
                    {related.title}
                  </h3>
                  <p className="text-sm text-text-muted line-clamp-2">
                    {related.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </Section>
      </article>
    </>
  );
}
