import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Section } from '@/components/Section';
import Button from '@/components/Button';
import MarkdownContent from '@/components/MarkdownContent';
import { getGuide, getAllGuideSlugs, guides } from '@/data/guides';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllGuideSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);

  if (!guide) {
    return { title: 'Guide Not Found' };
  }

  return {
    title: guide.title,
    description: guide.description,
    openGraph: {
      title: guide.title,
      description: guide.description,
      type: 'article',
      publishedTime: guide.publishedAt,
      authors: [guide.author],
    },
  };
}

export default async function GuidePage({ params }: PageProps) {
  const { slug } = await params;
  const guide = getGuide(slug);

  if (!guide) {
    notFound();
  }

  const schemaOrg = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: guide.title,
    description: guide.description,
    author: {
      '@type': 'Organization',
      name: guide.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'How Do I Use AI',
      logo: {
        '@type': 'ImageObject',
        url: 'https://howdoiuseai.com/logo.png',
      },
    },
    datePublished: guide.publishedAt,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://howdoiuseai.com/guides/${guide.slug}`,
    },
    articleSection: guide.chapters.map((c) => c.title),
  };

  const otherGuide = guides.find((g) => g.slug !== guide.slug);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
      />

      <article>
        <Section className="pt-24 pb-8">
          <div className="max-w-4xl mx-auto">
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
                  <Link href="/guides" className="hover:text-primary-400 transition-colors">
                    Guides
                  </Link>
                </li>
                <li>/</li>
                <li className="text-text-secondary">{guide.title}</li>
              </ol>
            </nav>

            {/* Header */}
            <header className="mb-12">
              <span className="inline-block px-3 py-1 text-sm font-medium bg-primary-500/10 text-primary-400 rounded-full mb-4">
                Complete Guide
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-6">
                {guide.title}
              </h1>
              <p className="text-xl text-text-secondary mb-6">
                {guide.description}
              </p>
              <div className="flex items-center gap-4 text-sm text-text-muted">
                <span>{guide.author}</span>
                <span>•</span>
                <span>{guide.readTime}</span>
                <span>•</span>
                <span>{guide.chapters.length} chapters</span>
              </div>
            </header>

            {/* Table of Contents */}
            <div className="mb-12 p-6 bg-dark-800 border border-dark-700 rounded-2xl">
              <h2 className="text-lg font-semibold text-text-primary mb-4">
                Table of Contents
              </h2>
              <nav>
                <ol className="space-y-2">
                  {guide.chapters.map((chapter, i) => (
                    <li key={chapter.id}>
                      <a
                        href={`#${chapter.id}`}
                        className="flex items-center gap-3 text-text-secondary hover:text-primary-400 transition-colors"
                      >
                        <span className="w-6 h-6 rounded-full bg-dark-700 flex items-center justify-center text-xs text-primary-400 flex-shrink-0">
                          {i + 1}
                        </span>
                        {chapter.title}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            </div>

            {/* Content */}
            <div className="prose-custom">
              <MarkdownContent content={guide.content} />
            </div>

            {/* Share & CTA */}
            <div className="mt-16 pt-8 border-t border-dark-700">
              <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
                <p className="text-text-secondary">
                  Found this guide helpful? Share it with others learning AI!
                </p>
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

        {/* Next Guide */}
        {otherGuide && (
          <Section className="bg-dark-900">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-text-primary mb-8">
                Continue Learning
              </h2>
              <Link
                href={`/guides/${otherGuide.slug}`}
                className="block p-8 bg-dark-800 border border-dark-700 rounded-2xl hover:border-primary-500/50 transition-colors"
              >
                <span className="text-sm font-medium text-primary-400 mb-2 block">
                  Next Guide
                </span>
                <h3 className="text-xl font-bold text-text-primary mb-2">
                  {otherGuide.title}
                </h3>
                <p className="text-text-muted mb-4">
                  {otherGuide.description}
                </p>
                <span className="text-sm text-text-muted">
                  {otherGuide.readTime} • {otherGuide.chapters.length} chapters
                </span>
              </Link>
            </div>
          </Section>
        )}
      </article>
    </>
  );
}
