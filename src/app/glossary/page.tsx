import { Metadata } from 'next';
import Link from 'next/link';
import { Section, SectionHeader } from '@/components/Section';
import { glossaryTerms } from '@/data/glossary';

export const metadata: Metadata = {
  title: 'AI Glossary',
  description: 'Understand AI terminology with clear, beginner-friendly definitions. Learn what terms like ChatGPT, machine learning, prompt engineering, and more mean.',
  openGraph: {
    title: 'AI Glossary | How Do I Use AI',
    description: 'Understand AI terminology with clear, beginner-friendly definitions.',
  },
};

export default function GlossaryPage() {
  const schemaOrg = {
    '@context': 'https://schema.org',
    '@type': 'DefinedTermSet',
    name: 'AI Glossary',
    description: 'Comprehensive glossary of artificial intelligence terms and definitions.',
    url: 'https://howdoiuseai.com/glossary',
    hasDefinedTerm: glossaryTerms.map((term) => ({
      '@type': 'DefinedTerm',
      name: term.term,
      description: term.shortDefinition,
      url: `https://howdoiuseai.com/glossary/${term.slug}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
      />

      <Section className="pt-24">
        <SectionHeader
          eyebrow="Learn"
          title="AI Glossary"
          description="Understand AI terminology with clear, beginner-friendly definitions"
        />

        {/* Alphabet Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {['A', 'C', 'G', 'H', 'L', 'M', 'P', 'T'].map((letter) => (
            <a
              key={letter}
              href={`#${letter}`}
              className="w-10 h-10 rounded-lg bg-dark-800 border border-dark-700 flex items-center justify-center text-sm font-medium text-text-secondary hover:text-primary-400 hover:border-primary-500/50 transition-colors"
            >
              {letter}
            </a>
          ))}
        </div>

        {/* Terms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {glossaryTerms.map((term) => (
            <Link
              key={term.slug}
              href={`/glossary/${term.slug}`}
              className="block group"
              id={term.term.charAt(0).toUpperCase()}
            >
              <div className="h-full p-6 bg-dark-800 border border-dark-700 rounded-2xl card-hover group-hover:border-primary-500/50">
                <h2 className="text-xl font-bold text-text-primary group-hover:text-primary-400 transition-colors mb-3">
                  {term.term}
                </h2>
                <p className="text-text-secondary text-sm line-clamp-3">
                  {term.shortDefinition}
                </p>
                <div className="mt-4 flex items-center gap-2 text-sm text-primary-400">
                  Read full definition
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
