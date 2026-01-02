import { Metadata } from 'next';
import { Section, SectionHeader } from '@/components/Section';
import Card from '@/components/Card';
import { articles } from '@/data/articles';

export const metadata: Metadata = {
  title: 'AI Resources & Blog',
  description: 'Explore our collection of AI tutorials, tips, and guides. Learn about ChatGPT, AI tools, prompt engineering, and more.',
  openGraph: {
    title: 'AI Resources & Blog | How Do I Use AI',
    description: 'Explore our collection of AI tutorials, tips, and guides.',
  },
};

const categories = [...new Set(articles.map(a => a.category))];

export default function ResourcesPage() {
  const schemaOrg = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'AI Resources & Blog',
    description: 'Explore our collection of AI tutorials, tips, and guides.',
    url: 'https://howdoiuseai.com/resources',
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: articles.length,
      itemListElement: articles.map((article, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'Article',
          name: article.title,
          description: article.description,
          url: `https://howdoiuseai.com/resources/${article.slug}`,
        },
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
      />

      <Section className="pt-24">
        <SectionHeader
          eyebrow="Resources"
          title="AI Tutorials & Guides"
          description="Practical articles to help you master artificial intelligence"
        />

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <span className="px-4 py-2 bg-primary-500/10 text-primary-400 rounded-full text-sm font-medium">
            All
          </span>
          {categories.map((category) => (
            <span
              key={category}
              className="px-4 py-2 bg-dark-800 text-text-secondary rounded-full text-sm font-medium hover:bg-dark-700 cursor-pointer transition-colors"
            >
              {category}
            </span>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <Card
              key={article.slug}
              title={article.title}
              description={article.description}
              href={`/resources/${article.slug}`}
              tag={article.category}
              readTime={article.readTime}
            />
          ))}
        </div>
      </Section>
    </>
  );
}
