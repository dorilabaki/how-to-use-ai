import { Metadata } from 'next';
import Link from 'next/link';
import { Section, SectionHeader } from '@/components/Section';
import { guides } from '@/data/guides';

export const metadata: Metadata = {
  title: 'AI Guides',
  description: 'Comprehensive guides to help you master AI, from ChatGPT basics to advanced prompt engineering techniques.',
  openGraph: {
    title: 'AI Guides | How Do I Use AI',
    description: 'Comprehensive guides to help you master AI.',
  },
};

export default function GuidesPage() {
  const schemaOrg = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'AI Guides',
    description: 'Comprehensive guides to help you master AI.',
    url: 'https://howdoiuseai.com/guides',
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: guides.length,
      itemListElement: guides.map((guide, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'Article',
          name: guide.title,
          description: guide.description,
          url: `https://howdoiuseai.com/guides/${guide.slug}`,
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
          eyebrow="Learn"
          title="Comprehensive AI Guides"
          description="In-depth tutorials to take you from beginner to confident AI user"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {guides.map((guide) => (
            <Link
              key={guide.slug}
              href={`/guides/${guide.slug}`}
              className="block group"
            >
              <div className="h-full p-8 bg-gradient-to-br from-dark-800 to-dark-900 border border-dark-700 rounded-2xl card-hover group-hover:border-primary-500/50">
                <span className="inline-block px-3 py-1 text-xs font-medium bg-primary-500/10 text-primary-400 rounded-full mb-4">
                  Complete Guide
                </span>
                <h2 className="text-2xl font-bold text-text-primary group-hover:text-primary-400 transition-colors mb-4">
                  {guide.title}
                </h2>
                <p className="text-text-secondary mb-6">
                  {guide.description}
                </p>

                {/* Chapters Preview */}
                <div className="mb-6">
                  <h3 className="text-sm font-medium text-text-muted mb-3">
                    What you&apos;ll learn:
                  </h3>
                  <ul className="space-y-2">
                    {guide.chapters.slice(0, 4).map((chapter, i) => (
                      <li key={chapter.id} className="flex items-center gap-2 text-sm text-text-secondary">
                        <span className="w-5 h-5 rounded-full bg-dark-700 flex items-center justify-center text-xs text-primary-400">
                          {i + 1}
                        </span>
                        {chapter.title}
                      </li>
                    ))}
                    {guide.chapters.length > 4 && (
                      <li className="text-sm text-text-muted pl-7">
                        + {guide.chapters.length - 4} more chapters
                      </li>
                    )}
                  </ul>
                </div>

                {/* Meta */}
                <div className="flex items-center gap-4 text-sm text-text-muted pt-4 border-t border-dark-700">
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {guide.readTime}
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                    {guide.chapters.length} chapters
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
