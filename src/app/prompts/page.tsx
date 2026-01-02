'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Section, SectionHeader } from '@/components/Section';
import { getPromptsByCategory, prompts } from '@/data/prompts';

const promptsByCategory = getPromptsByCategory();
const categories = Object.keys(promptsByCategory);

function PromptCard({ prompt }: { prompt: typeof prompts[0] }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(prompt.prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="p-6 bg-dark-800 border border-dark-700 rounded-2xl"
    >
      <div className="flex items-start justify-between gap-4 mb-4">
        <div>
          <span className="inline-block px-3 py-1 text-xs font-medium bg-accent-500/10 text-accent-400 rounded-full mb-2">
            {prompt.category}
          </span>
          <h3 className="text-lg font-semibold text-text-primary">
            {prompt.title}
          </h3>
        </div>
        <button
          onClick={handleCopy}
          className={`flex-shrink-0 px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
            copied
              ? 'bg-primary-500/20 text-primary-400'
              : 'bg-dark-700 text-text-secondary hover:bg-dark-600'
          }`}
        >
          {copied ? (
            <>
              <svg className="w-4 h-4 inline mr-1" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              Copied
            </>
          ) : (
            <>
              <svg className="w-4 h-4 inline mr-1" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" />
              </svg>
              Copy
            </>
          )}
        </button>
      </div>

      <p className="text-sm text-text-muted mb-4">
        {prompt.description}
      </p>

      {/* Prompt Preview */}
      <div className="relative">
        <pre className="p-4 bg-dark-950 rounded-lg font-mono text-xs text-text-secondary overflow-x-auto whitespace-pre-wrap max-h-48">
          {prompt.prompt}
        </pre>
      </div>

      {/* Variables */}
      {prompt.variables && prompt.variables.length > 0 && (
        <div className="mt-4 pt-4 border-t border-dark-700">
          <span className="text-xs font-medium text-text-muted block mb-2">
            Variables to customize:
          </span>
          <div className="flex flex-wrap gap-2">
            {prompt.variables.map((variable) => (
              <code
                key={variable}
                className="px-2 py-1 bg-dark-700 rounded text-xs text-primary-400"
              >
                [{variable}]
              </code>
            ))}
          </div>
        </div>
      )}

      {/* Tips */}
      {prompt.tips && (
        <div className="mt-4 p-3 bg-primary-500/5 border border-primary-500/20 rounded-lg">
          <span className="text-xs font-medium text-primary-400 block mb-1">
            Tip:
          </span>
          <p className="text-xs text-text-secondary">
            {prompt.tips}
          </p>
        </div>
      )}
    </motion.div>
  );
}

export default function PromptsPage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredPrompts = activeCategory
    ? promptsByCategory[activeCategory]
    : prompts;

  const schemaOrg = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'AI Prompt Library',
    description: 'Ready-to-use prompt templates for ChatGPT and other AI tools.',
    url: 'https://howdoiuseai.com/prompts',
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

      <Section className="pt-24">
        <SectionHeader
          eyebrow="Copy & Paste"
          title="AI Prompt Library"
          description="Ready-to-use prompts for ChatGPT and other AI tools"
        />

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveCategory(null)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === null
                ? 'bg-primary-500/10 text-primary-400'
                : 'bg-dark-800 text-text-secondary hover:text-text-primary'
            }`}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category
                  ? 'bg-primary-500/10 text-primary-400'
                  : 'bg-dark-800 text-text-secondary hover:text-text-primary'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Prompts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredPrompts.map((prompt) => (
            <PromptCard key={prompt.id} prompt={prompt} />
          ))}
        </div>
      </Section>

      {/* Usage Tips */}
      <Section className="bg-dark-900">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-text-primary mb-4">
            How to Use These Prompts
          </h2>
          <div className="grid md:grid-cols-3 gap-6 text-left mt-8">
            <div className="p-4 bg-dark-800 border border-dark-700 rounded-xl">
              <div className="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center text-primary-400 mb-3">
                1
              </div>
              <h3 className="font-semibold text-text-primary mb-2">Copy</h3>
              <p className="text-sm text-text-muted">
                Click the copy button to copy the prompt to your clipboard
              </p>
            </div>
            <div className="p-4 bg-dark-800 border border-dark-700 rounded-xl">
              <div className="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center text-primary-400 mb-3">
                2
              </div>
              <h3 className="font-semibold text-text-primary mb-2">Customize</h3>
              <p className="text-sm text-text-muted">
                Replace the [VARIABLES] with your specific information
              </p>
            </div>
            <div className="p-4 bg-dark-800 border border-dark-700 rounded-xl">
              <div className="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center text-primary-400 mb-3">
                3
              </div>
              <h3 className="font-semibold text-text-primary mb-2">Use</h3>
              <p className="text-sm text-text-muted">
                Paste into ChatGPT, Claude, or your preferred AI tool
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
