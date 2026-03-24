'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Button from '@/components/Button';

const samplePrompts = [
  {
    category: 'Writing & Communication',
    categoryColor: 'text-primary-400',
    categoryBg: 'bg-primary-500/10',
    title: 'Professional Email Rewrite',
    prompt:
      'Rewrite the following email to sound more professional, clear, and concise. Remove any vague language, tighten the subject line, and end with one specific call to action. Original email: [paste your email]',
  },
  {
    category: 'Analysis & Research',
    categoryColor: 'text-accent-400',
    categoryBg: 'bg-accent-500/10',
    title: 'Structured Decision Analysis',
    prompt:
      'I need to decide between [option A] and [option B]. Analyze both options using these criteria: cost, time to implement, risks, and long-term impact. Present the analysis as a comparison table, then give me your recommendation with a one-paragraph rationale.',
  },
  {
    category: 'Creative Thinking',
    categoryColor: 'text-purple-400',
    categoryBg: 'bg-purple-500/10',
    title: '10-Idea Brainstorm Sprint',
    prompt:
      'Generate 10 distinct ideas for [topic or goal]. For each idea: give it a short name, write a one-sentence description, and note its single biggest advantage. Push for variety — include at least two unconventional or contrarian ideas.',
  },
  {
    category: 'Productivity & Planning',
    categoryColor: 'text-orange-400',
    categoryBg: 'bg-orange-500/10',
    title: 'Project Action Plan',
    prompt:
      'I need to complete [project or task] by [deadline]. Break it into a step-by-step action plan. For each step, list: what needs to be done, a realistic time estimate, and any dependencies. Flag the two steps most likely to cause delays.',
  },
  {
    category: 'Learning & Education',
    categoryColor: 'text-blue-400',
    categoryBg: 'bg-blue-500/10',
    title: 'Beginner Explainer',
    prompt:
      'Explain [concept or topic] as if I have zero background in it. Start with a one-sentence core definition, then give three real-world examples that show it in action. End with the single most important thing I should understand before going deeper.',
  },
  {
    category: 'Learning & Education',
    categoryColor: 'text-blue-400',
    categoryBg: 'bg-blue-500/10',
    title: '30-Day Learning Plan',
    prompt:
      'Create a 30-day learning plan to take me from beginner to confident with [skill]. Organize it by week with daily topics. For each week, include: the core concept to master, a suggested resource type (video, book, practice exercise), and one milestone to verify I am on track.',
  },
  {
    category: 'Career & Business',
    categoryColor: 'text-rose-400',
    categoryBg: 'bg-rose-500/10',
    title: 'Resume Bullet Point Upgrade',
    prompt:
      'Rewrite the following resume bullet points to be more impactful. Use strong action verbs, add quantifiable results where possible, and make each point speak to outcomes rather than duties. Bullet points: [paste your bullets]',
  },
  {
    category: 'Career & Business',
    categoryColor: 'text-rose-400',
    categoryBg: 'bg-rose-500/10',
    title: 'LinkedIn Post Writer',
    prompt:
      'Write a LinkedIn post about [topic, insight, or achievement]. Tone: professional but conversational — it should sound like a person, not a press release. Structure: hook in the first line, 3-4 short paragraphs with one key insight each, and close with a question that invites comments. Target length: 150-200 words.',
  },
];

export default function ThankYouPage() {
  return (
    <div className="relative bg-dark-950 overflow-hidden min-h-screen">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-1/4 w-[500px] h-[500px] bg-primary-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 -right-1/4 w-[400px] h-[400px] bg-accent-500/8 rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      {/* Confirmation hero */}
      <section className="relative pt-24 pb-12 lg:pt-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.1, type: 'spring', stiffness: 200 }}
              className="w-20 h-20 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center mx-auto mb-6"
            >
              <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl font-bold text-text-primary mb-4">
              You&apos;re all set!
            </h1>
            <p className="text-lg text-text-secondary mb-2">
              The AI Starter Kit is on its way to your inbox.
            </p>
            <p className="text-text-muted">
              While you wait, here&apos;s a preview of 8 prompts from the kit — start using them right now.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sample prompts */}
      <section className="relative py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center mb-10"
          >
            <span className="inline-block px-4 py-1.5 text-sm font-medium bg-primary-500/10 text-primary-400 rounded-full mb-3">
              Sneak Peek
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-text-primary">
              8 Prompts From the Kit — Copy &amp; Use Now
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {samplePrompts.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.07 }}
                className="p-6 bg-dark-800 border border-dark-700 rounded-2xl flex flex-col gap-4 card-hover hover:border-primary-500/30"
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-base font-semibold text-text-primary">{item.title}</h3>
                  <span className={`text-xs font-medium ${item.categoryColor} ${item.categoryBg} px-2.5 py-1 rounded-full whitespace-nowrap flex-shrink-0`}>
                    {item.category}
                  </span>
                </div>
                <div className="p-4 bg-dark-950 rounded-xl border border-dark-700 font-mono text-sm text-text-secondary leading-relaxed">
                  {item.prompt}
                </div>
                <button
                  onClick={() => navigator.clipboard.writeText(item.prompt)}
                  className="self-end flex items-center gap-1.5 text-xs text-text-muted hover:text-primary-400 transition-colors"
                >
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" />
                  </svg>
                  Copy prompt
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Next steps CTA */}
      <section className="relative py-16 bg-gradient-to-br from-primary-950/40 to-dark-950 border-t border-dark-700">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold text-text-primary mb-4">
              Ready to go deeper?
            </h2>
            <p className="text-text-secondary mb-8">
              The prompts are your starting point. Our guides walk you through how to use them — and build the
              intuition to write your own.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/guides" size="lg">
                Explore the Guides
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Button>
              <Button href="/prompts" variant="secondary" size="lg">
                Browse Full Prompt Library
              </Button>
            </div>
            <p className="mt-8 text-sm text-text-muted">
              Or follow us on{' '}
              <Link
                href="https://www.linkedin.com/company/how-do-i-use-ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-400 hover:text-primary-300 underline underline-offset-2 transition-colors"
              >
                LinkedIn
              </Link>{' '}
              for daily AI tips and prompt ideas.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
