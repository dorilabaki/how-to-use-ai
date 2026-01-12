import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Section } from '@/components/Section';
import Button from '@/components/Button';
import { getGlossaryTerm, getAllGlossaryTermSlugs, glossaryTerms } from '@/data/glossary';

interface PageProps {
  params: Promise<{ term: string }>;
}

export async function generateStaticParams() {
  return getAllGlossaryTermSlugs().map((term) => ({ term }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { term: termSlug } = await params;
  const term = getGlossaryTerm(termSlug);

  if (!term) {
    return { title: 'Term Not Found' };
  }

  return {
    title: `What is ${term.term}?`,
    description: term.shortDefinition,
    openGraph: {
      title: `What is ${term.term}? | AI Glossary`,
      description: term.shortDefinition,
    },
  };
}

export default async function GlossaryTermPage({ params }: PageProps) {
  const { term: termSlug } = await params;
  const term = getGlossaryTerm(termSlug);

  if (!term) {
    notFound();
  }

  const schemaOrg = {
    '@context': 'https://schema.org',
    '@type': 'DefinedTerm',
    name: term.term,
    description: term.shortDefinition,
    url: `https://howdoiuse.ai/glossary/${term.slug}`,
    inDefinedTermSet: {
      '@type': 'DefinedTermSet',
      name: 'AI Glossary',
      url: 'https://howdoiuse.ai/glossary',
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: `What is ${term.term}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: term.shortDefinition,
        },
      },
    ],
  };

  const relatedTerms = glossaryTerms.filter((t) =>
    term.relatedTerms.some((r) => t.term.toLowerCase().includes(r.toLowerCase()))
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
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
                  <Link href="/glossary" className="hover:text-primary-400 transition-colors">
                    Glossary
                  </Link>
                </li>
                <li>/</li>
                <li className="text-text-secondary">{term.term}</li>
              </ol>
            </nav>

            {/* Header */}
            <header className="mb-12">
              <span className="inline-block px-3 py-1 text-sm font-medium bg-primary-500/10 text-primary-400 rounded-full mb-4">
                AI Term
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-6">
                What is {term.term}?
              </h1>

              {/* Quick Definition Box */}
              <div className="p-6 bg-primary-500/10 border border-primary-500/20 rounded-2xl">
                <p className="text-lg text-text-primary font-medium">
                  {term.shortDefinition}
                </p>
              </div>
            </header>

            {/* Full Definition */}
            <div className="prose-custom">
              {term.fullDefinition.split('\n').map((line, i) => {
                if (line.startsWith('## ')) {
                  return (
                    <h2 key={i} className="text-2xl font-bold text-text-primary mt-12 mb-4">
                      {line.replace('## ', '')}
                    </h2>
                  );
                }
                if (line.startsWith('### ')) {
                  return (
                    <h3 key={i} className="text-xl font-semibold text-text-primary mt-8 mb-3">
                      {line.replace('### ', '')}
                    </h3>
                  );
                }
                if (line.startsWith('**') && line.endsWith('**')) {
                  return (
                    <p key={i} className="font-semibold text-text-primary my-4">
                      {line.replace(/\*\*/g, '')}
                    </p>
                  );
                }
                if (line.startsWith('- **')) {
                  const match = line.match(/^- \*\*(.+?)\*\*:?\s*(.*)$/);
                  if (match) {
                    return (
                      <li key={i} className="ml-6 text-text-secondary mb-2">
                        <strong className="text-text-primary">{match[1]}</strong>
                        {match[2] && `: ${match[2]}`}
                      </li>
                    );
                  }
                }
                if (line.startsWith('- ')) {
                  return (
                    <li key={i} className="ml-6 text-text-secondary mb-2">
                      {line.replace('- ', '')}
                    </li>
                  );
                }
                if (line.trim() === '') {
                  return null;
                }
                return (
                  <p key={i} className="text-text-secondary leading-relaxed mb-4">
                    {line}
                  </p>
                );
              })}
            </div>

            {/* Examples */}
            {term.examples && term.examples.length > 0 && (
              <div className="mt-12 p-6 bg-dark-800 border border-dark-700 rounded-2xl">
                <h2 className="text-lg font-semibold text-text-primary mb-4">
                  Examples
                </h2>
                <div className="flex flex-wrap gap-2">
                  {term.examples.map((example) => (
                    <span
                      key={example}
                      className="px-3 py-1.5 bg-dark-700 rounded-lg text-sm text-text-secondary"
                    >
                      {example}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* CTA */}
            <div className="mt-12 pt-8 border-t border-dark-700">
              <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
                <p className="text-text-secondary">
                  Want to learn more AI terms?
                </p>
                <Button href="/glossary" variant="secondary">
                  Browse All Terms
                </Button>
              </div>
            </div>
          </div>
        </Section>

        {/* Related Terms */}
        {relatedTerms.length > 0 && (
          <Section className="bg-dark-900">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-text-primary mb-8">
                Related Terms
              </h2>
              <div className="grid gap-4">
                {relatedTerms.slice(0, 4).map((related) => (
                  <Link
                    key={related.slug}
                    href={`/glossary/${related.slug}`}
                    className="block p-4 bg-dark-800 border border-dark-700 rounded-xl hover:border-primary-500/50 transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-text-primary mb-1">
                      {related.term}
                    </h3>
                    <p className="text-sm text-text-muted line-clamp-2">
                      {related.shortDefinition}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </Section>
        )}
      </article>
    </>
  );
}
