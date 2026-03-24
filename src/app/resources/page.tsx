import { Metadata } from 'next';
import { articles } from '@/data/articles';
import ResourcesContent from './ResourcesContent';

export const metadata: Metadata = {
  title: 'AI Resources & Blog',
  description: 'Explore our collection of AI tutorials, tips, and guides. Learn about ChatGPT, AI tools, prompt engineering, and more.',
  openGraph: {
    title: 'AI Resources & Blog | How Do I Use AI',
    description: 'Explore our collection of AI tutorials, tips, and guides.',
  },
};

export default function ResourcesPage() {
  const schemaOrg = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'AI Resources & Blog',
    description: 'Explore our collection of AI tutorials, tips, and guides.',
    url: 'https://howdoiuse.ai/resources',
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
          url: `https://howdoiuse.ai/resources/${article.slug}`,
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
      <ResourcesContent />
    </>
  );
}
