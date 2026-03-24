import type { Metadata } from 'next';
import StarterKitContent from './StarterKitContent';

export const metadata: Metadata = {
  title: 'Free AI Starter Kit: 50 Ready-to-Use Prompts for Work & Life',
  description:
    'Get instant access to 50 proven AI prompts for writing, analysis, creativity, productivity, and learning. Used by 102K+ AI learners on LinkedIn.',
  keywords: [
    'AI prompts',
    'ChatGPT prompts',
    'free AI prompts',
    'prompt engineering',
    'AI productivity',
    'AI starter kit',
    'beginner AI prompts',
  ],
  openGraph: {
    title: 'Free AI Starter Kit: 50 Ready-to-Use Prompts for Work & Life',
    description:
      'Get instant access to 50 proven AI prompts organized by use case. Join 102K+ AI learners.',
    type: 'website',
    url: 'https://howdoiuse.ai/starter-kit',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free AI Starter Kit: 50 Ready-to-Use Prompts',
    description: 'Get 50 proven AI prompts for writing, analysis, creativity, productivity, and learning.',
  },
  alternates: {
    canonical: 'https://howdoiuse.ai/starter-kit',
  },
};

export default function StarterKitPage() {
  return <StarterKitContent />;
}
