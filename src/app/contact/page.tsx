import { Metadata } from 'next';
import { Section, SectionHeader } from '@/components/Section';
import Button from '@/components/Button';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with How Do I Use AI. Follow us on LinkedIn for the latest AI tutorials, tips, and guides.',
  openGraph: {
    title: 'Contact | How Do I Use AI',
    description: 'Get in touch with How Do I Use AI.',
  },
};

export default function ContactPage() {
  return (
    <Section className="pt-24">
      <SectionHeader
        eyebrow="Contact"
        title="Get in Touch"
        description="Have questions? We'd love to hear from you."
      />

      <div className="max-w-2xl mx-auto">
        <div className="bg-dark-800 border border-dark-700 rounded-2xl p-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-text-primary mb-2">
              Connect With Us on LinkedIn
            </h2>
            <p className="text-text-secondary">
              The best way to reach us is through LinkedIn, where we share daily AI tips and engage with our community of 102,000+ learners.
            </p>
          </div>

          <div className="flex justify-center mb-8">
            <Button
              href="https://www.linkedin.com/company/how-do-i-use-ai"
              external
              size="lg"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              Follow Us on LinkedIn
            </Button>
          </div>

          <div className="border-t border-dark-700 pt-8">
            <h3 className="text-lg font-semibold text-text-primary mb-4 text-center">
              What We Can Help With
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-4 bg-dark-900 rounded-xl">
                <div className="text-2xl mb-2">💡</div>
                <h4 className="font-medium text-text-primary mb-1">AI Questions</h4>
                <p className="text-sm text-text-muted">
                  Ask us anything about AI, ChatGPT, or prompt engineering
                </p>
              </div>
              <div className="p-4 bg-dark-900 rounded-xl">
                <div className="text-2xl mb-2">📚</div>
                <h4 className="font-medium text-text-primary mb-1">Content Suggestions</h4>
                <p className="text-sm text-text-muted">
                  Let us know what topics you'd like us to cover
                </p>
              </div>
              <div className="p-4 bg-dark-900 rounded-xl">
                <div className="text-2xl mb-2">🤝</div>
                <h4 className="font-medium text-text-primary mb-1">Collaboration</h4>
                <p className="text-sm text-text-muted">
                  Interested in working together? Reach out!
                </p>
              </div>
              <div className="p-4 bg-dark-900 rounded-xl">
                <div className="text-2xl mb-2">💬</div>
                <h4 className="font-medium text-text-primary mb-1">Feedback</h4>
                <p className="text-sm text-text-muted">
                  Share your thoughts on our content
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-8 text-center">
          <p className="text-text-muted mb-4">
            Looking for something specific?
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/guides" variant="ghost">
              Browse Guides
            </Button>
            <Button href="/faq" variant="ghost">
              View FAQ
            </Button>
            <Button href="/prompts" variant="ghost">
              Prompt Library
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
