'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Hero from '@/components/Hero';
import { Section, SectionHeader } from '@/components/Section';
import Card from '@/components/Card';
import Button from '@/components/Button';
import { articles } from '@/data/articles';
import { guides } from '@/data/guides';
import { prompts } from '@/data/prompts';

const pillars = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
      </svg>
    ),
    title: 'ChatGPT Mastery',
    description: 'Learn to use ChatGPT like a pro with step-by-step tutorials and best practices.',
    href: '/guides/complete-chatgpt-guide',
    color: 'from-primary-500 to-primary-600',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
    title: 'Prompt Engineering',
    description: 'Master the art of writing prompts that get you exactly what you need from AI.',
    href: '/guides/prompt-engineering-101',
    color: 'from-accent-500 to-accent-600',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
      </svg>
    ),
    title: 'AI Tools',
    description: 'Discover the best AI tools for productivity, creativity, and business.',
    href: '/resources/ai-tools-save-time',
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
    title: 'AI Glossary',
    description: 'Understand AI terminology with clear, beginner-friendly definitions.',
    href: '/glossary',
    color: 'from-orange-500 to-orange-600',
  },
];

const stats = [
  { value: '+100k', label: 'people learning AI' },
  { value: '50+', label: 'Tutorials & Guides' },
  { value: '100%', label: 'Beginner Friendly' },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Topic Pillars */}
      <Section className="relative -mt-20 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="h-full"
            >
              <Link href={pillar.href} className="block group h-full">
                <div className="h-full p-6 bg-dark-800 border border-dark-700 rounded-2xl card-hover group-hover:border-primary-500/50 flex flex-col">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${pillar.color} flex items-center justify-center text-white mb-4 flex-shrink-0`}>
                    {pillar.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-text-primary group-hover:text-primary-400 transition-colors mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-text-muted flex-grow">
                    {pillar.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Featured Guides */}
      <Section>
        <SectionHeader
          eyebrow="Learn"
          title="Comprehensive Guides"
          description="In-depth tutorials to take you from beginner to confident AI user"
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {guides.map((guide) => (
            <motion.div
              key={guide.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Link href={`/guides/${guide.slug}`} className="block group">
                <div className="h-full p-8 bg-gradient-to-br from-dark-800 to-dark-900 border border-dark-700 rounded-2xl card-hover group-hover:border-primary-500/50">
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-primary-500/10 text-primary-400 rounded-full mb-4">
                    Complete Guide
                  </span>
                  <h3 className="text-2xl font-bold text-text-primary group-hover:text-primary-400 transition-colors mb-3">
                    {guide.title}
                  </h3>
                  <p className="text-text-secondary mb-4">
                    {guide.description}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-text-muted">
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
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Prompt Library Preview */}
      <Section className="bg-dark-900">
        <SectionHeader
          eyebrow="Copy & Paste"
          title="Prompt Library"
          description="Ready-to-use prompts for common tasks"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {prompts.slice(0, 3).map((prompt) => (
            <motion.div
              key={prompt.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 bg-dark-800 border border-dark-700 rounded-2xl"
            >
              <span className="inline-block px-3 py-1 text-xs font-medium bg-accent-500/10 text-accent-400 rounded-full mb-3">
                {prompt.category}
              </span>
              <h3 className="text-lg font-semibold text-text-primary mb-2">
                {prompt.title}
              </h3>
              <p className="text-sm text-text-muted mb-4">
                {prompt.description}
              </p>
              <div className="p-3 bg-dark-950 rounded-lg font-mono text-xs text-text-secondary line-clamp-3">
                {prompt.prompt.substring(0, 120)}...
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center">
          <Button href="/prompts" variant="secondary">
            View All Prompts
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Button>
        </div>
      </Section>

      {/* Latest Articles */}
      <Section>
        <SectionHeader
          eyebrow="Resources"
          title="Latest Articles"
          description="Quick reads to level up your AI skills"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.slice(0, 3).map((article) => (
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
        <div className="text-center mt-8">
          <Button href="/resources" variant="secondary">
            View All Resources
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Button>
        </div>
      </Section>

      {/* Stats & Social Proof */}
      <Section className="bg-gradient-to-br from-primary-950/50 to-dark-950 border-y border-dark-700">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Join Our Growing Community
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Learn alongside thousands of professionals and beginners who are mastering AI
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-text-secondary">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            href="https://www.linkedin.com/company/how-do-i-use-ai"
            external
            size="lg"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
            Follow on LinkedIn
          </Button>
          <Button href="/guides" variant="secondary" size="lg">
            Start Learning Free
          </Button>
        </div>
      </Section>

      {/* Newsletter CTA */}
      <Section>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Ready to Master AI?
          </h2>
          <p className="text-lg text-text-secondary mb-8">
            Start with our beginner-friendly guides and join +100k people learning AI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/guides/complete-chatgpt-guide" size="lg">
              Start with ChatGPT Guide
            </Button>
            <Button href="/glossary" variant="secondary" size="lg">
              Learn AI Terms
            </Button>
          </div>
        </motion.div>
      </Section>
    </>
  );
}
