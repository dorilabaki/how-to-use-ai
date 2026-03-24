import { Metadata } from 'next';
import { prompts } from '@/data/prompts';
import PromptsContent from './PromptsContent';

export const metadata: Metadata = {
  title: 'AI Prompt Library — 50+ Ready-to-Use Prompts',
  description: 'Browse and copy 50+ AI prompts for writing, analysis, creativity, productivity, and learning. Works with ChatGPT, Claude, and all major AI tools.',
  openGraph: {
    title: 'AI Prompt Library | How Do I Use AI',
    description: 'Ready-to-use AI prompts for writing, analysis, creativity, productivity, and learning.',
  },
};

export default function PromptsPage() {
  const schemaOrg = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'AI Prompt Library',
    description: 'Ready-to-use prompt templates for ChatGPT and other AI tools.',
    url: 'https://howdoiuse.ai/prompts',
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: prompts.length,
      itemListElement: prompts.map((prompt, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'HowTo',
          name: prompt.title,
          description: prompt.description,
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
      <PromptsContent />
    </>
  );
}
