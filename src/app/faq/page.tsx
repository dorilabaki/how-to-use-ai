import { Metadata } from 'next';
import { getFAQsByCategory } from '@/data/faq';
import FaqContent from './FaqContent';

export const metadata: Metadata = {
  title: 'FAQ — AI Questions Answered',
  description: 'Answers to the most common questions about AI, ChatGPT, prompt engineering, and how to get started. Clear, beginner-friendly explanations.',
  openGraph: {
    title: 'AI FAQ | How Do I Use AI',
    description: 'Common questions about AI and ChatGPT answered clearly for beginners and professionals.',
  },
};

export default function FAQPage() {
  const faqsByCategory = getFAQsByCategory();

  const schemaOrg = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: Object.values(faqsByCategory)
      .flat()
      .map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
      />
      <FaqContent />
    </>
  );
}
