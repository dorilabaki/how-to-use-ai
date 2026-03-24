'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function LeadMagnetBanner() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [dismissed, setDismissed] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source: 'banner' }),
      });

      const data = await res.json();

      if (!res.ok && res.status !== 409) {
        setError(data.error ?? 'Something went wrong. Please try again.');
        return;
      }

      router.push('/starter-kit/thank-you');
    } catch {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <AnimatePresence>
      {!dismissed && (
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          viewport={{ once: true }}
          className="relative overflow-hidden bg-gradient-to-br from-primary-950/60 via-dark-900 to-dark-950 border-y border-primary-500/20"
        >
          {/* Subtle background glow */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute left-0 top-0 w-[400px] h-full bg-primary-500/5 blur-[80px]" />
            <div className="absolute right-0 top-0 w-[300px] h-full bg-accent-500/5 blur-[80px]" />
          </div>

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 lg:py-12">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              {/* Icon + text */}
              <div className="flex-shrink-0 flex items-start gap-4 lg:max-w-sm xl:max-w-md">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                  </svg>
                </div>
                <div>
                  <span className="inline-block px-2.5 py-0.5 text-xs font-medium bg-primary-500/15 text-primary-400 rounded-full mb-1.5">
                    Free Download
                  </span>
                  <h2 className="text-xl font-bold text-text-primary leading-tight">
                    The AI Starter Kit: 50 Ready-to-Use Prompts
                  </h2>
                  <p className="text-sm text-text-muted mt-1">
                    Writing, analysis, creativity, productivity &amp; more.{' '}
                    <Link href="/starter-kit" className="text-primary-400 hover:text-primary-300 underline underline-offset-2 transition-colors">
                      See what&apos;s inside
                    </Link>
                  </p>
                </div>
              </div>

              {/* Form */}
              <div className="flex-1 w-full lg:max-w-lg">
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email — it's free"
                    required
                    disabled={loading}
                    className="flex-1 px-4 py-2.5 bg-dark-800 border border-dark-600 rounded-xl text-text-primary placeholder-text-muted text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent disabled:opacity-50 transition-colors"
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="px-5 py-2.5 bg-primary-600 hover:bg-primary-500 text-white font-semibold text-sm rounded-xl transition-all duration-200 shadow-lg shadow-primary-600/20 hover:shadow-primary-500/30 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-dark-950"
                  >
                    {loading ? 'Sending...' : 'Get Free Kit'}
                  </button>
                </form>
                {error && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-2 text-xs text-error"
                  >
                    {error}
                  </motion.p>
                )}
                <p className="mt-2 text-xs text-text-muted">No spam. Unsubscribe anytime.</p>
              </div>
            </div>
          </div>

          {/* Dismiss button */}
          <button
            onClick={() => setDismissed(true)}
            aria-label="Dismiss banner"
            className="absolute top-3 right-3 p-1.5 text-text-muted hover:text-text-secondary transition-colors rounded-lg hover:bg-dark-700"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </motion.section>
      )}
    </AnimatePresence>
  );
}
