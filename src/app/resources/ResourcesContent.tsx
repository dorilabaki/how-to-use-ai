'use client';

import { useState } from 'react';
import { Section, SectionHeader } from '@/components/Section';
import Card from '@/components/Card';
import { articles } from '@/data/articles';

const categories = [...new Set(articles.map((a) => a.category))];

export default function ResourcesContent() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredArticles = activeCategory
    ? articles.filter((a) => a.category === activeCategory)
    : articles;

  return (
    <Section className="pt-24">
      <SectionHeader
        eyebrow="Resources"
        title="AI Tutorials & Guides"
        description="Practical articles to help you master artificial intelligence"
      />

      {/* Category Filter */}
      <div
        className="flex flex-wrap justify-center gap-2 mb-12"
        role="group"
        aria-label="Filter articles by category"
      >
        <button
          onClick={() => setActiveCategory(null)}
          aria-pressed={activeCategory === null}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            activeCategory === null
              ? 'bg-primary-500/10 text-primary-400'
              : 'bg-dark-800 text-text-secondary hover:bg-dark-700'
          }`}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            aria-pressed={activeCategory === category}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === category
                ? 'bg-primary-500/10 text-primary-400'
                : 'bg-dark-800 text-text-secondary hover:bg-dark-700'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredArticles.map((article) => (
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
  );
}
