import { Metadata } from 'next';
import Image from 'next/image';
import { Section, SectionHeader } from '@/components/Section';
import Button from '@/components/Button';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'How Do I Use AI helps beginners and professionals unlock the power of artificial intelligence through tutorials, tips, and guides on ChatGPT, AI tools, and prompt engineering.',
  openGraph: {
    title: 'About How Do I Use AI',
    description: 'Learn about our mission to make AI education accessible to everyone.',
  },
};

const values = [
  {
    icon: '🎯',
    title: 'Practical First',
    description: 'We focus on actionable knowledge you can use immediately, not theoretical concepts.',
  },
  {
    icon: '🌱',
    title: 'Beginner Friendly',
    description: 'Every piece of content is designed to be accessible to those just starting their AI journey.',
  },
  {
    icon: '⚡',
    title: 'Stay Current',
    description: 'AI moves fast. We keep our content updated with the latest tools and techniques.',
  },
  {
    icon: '🤝',
    title: 'Community Driven',
    description: 'Our content is shaped by the questions and needs of our 102,000+ followers.',
  },
];

const team = [
  {
    role: 'What We Cover',
    areas: [
      'ChatGPT Tutorials',
      'AI for Beginners',
      'Prompt Engineering',
      'AI Tools',
      'Machine Learning Basics',
      'AI Productivity',
      'Generative AI',
      'AI Education',
      'Practical AI Applications',
      'AI for Business',
    ],
  },
];

export default function AboutPage() {
  const schemaOrg = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    mainEntity: {
      '@type': 'Organization',
      name: 'How Do I Use AI',
      description: 'How Do I Use AI helps beginners and professionals unlock the power of artificial intelligence through tutorials, tips, and guides.',
      url: 'https://howdoiuse.ai',
      sameAs: ['https://www.linkedin.com/company/how-do-i-use-ai'],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
      />

      {/* Hero */}
      <Section className="pt-24 pb-12">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-primary-500/30 shadow-lg shadow-primary-500/20">
              <Image
                src="/logo.jpeg"
                alt="How Do I Use AI"
                width={96}
                height={96}
                className="object-cover"
              />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            We Teach You How to{' '}
            <span className="gradient-text">Use AI</span>
          </h1>
          <p className="text-xl text-text-secondary">
            How Do I Use AI is your trusted resource for learning artificial intelligence.
            We make complex AI concepts simple and accessible for everyone.
          </p>
        </div>
      </Section>

      {/* Mission */}
      <Section className="bg-dark-900">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-text-primary mb-4">
                Our Mission
              </h2>
              <p className="text-text-secondary mb-4">
                AI is transforming how we work, learn, and create. But for many, getting
                started feels overwhelming. That&apos;s where we come in.
              </p>
              <p className="text-text-secondary mb-4">
                We believe everyone should be able to harness the power of AI, regardless
                of their technical background. Our tutorials, guides, and resources are
                designed to take you from complete beginner to confident AI user.
              </p>
              <p className="text-text-secondary">
                Since our founding, we&apos;ve grown to over 102,000 followers on LinkedIn,
                all learning AI together through practical, actionable content.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-dark-800 border border-dark-700 rounded-2xl text-center">
                <div className="text-4xl font-bold gradient-text mb-2">102K+</div>
                <div className="text-sm text-text-muted">LinkedIn Followers</div>
              </div>
              <div className="p-6 bg-dark-800 border border-dark-700 rounded-2xl text-center">
                <div className="text-4xl font-bold gradient-text mb-2">50+</div>
                <div className="text-sm text-text-muted">Tutorials & Guides</div>
              </div>
              <div className="p-6 bg-dark-800 border border-dark-700 rounded-2xl text-center">
                <div className="text-4xl font-bold gradient-text mb-2">11-50</div>
                <div className="text-sm text-text-muted">Team Members</div>
              </div>
              <div className="p-6 bg-dark-800 border border-dark-700 rounded-2xl text-center">
                <div className="text-4xl font-bold gradient-text mb-2">24/7</div>
                <div className="text-sm text-text-muted">Free Resources</div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Values */}
      <Section>
        <SectionHeader
          eyebrow="What We Believe"
          title="Our Values"
          description="The principles that guide everything we create"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value) => (
            <div
              key={value.title}
              className="p-6 bg-dark-800 border border-dark-700 rounded-2xl"
            >
              <div className="text-4xl mb-4">{value.icon}</div>
              <h3 className="text-lg font-semibold text-text-primary mb-2">
                {value.title}
              </h3>
              <p className="text-sm text-text-muted">{value.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* What We Cover */}
      <Section className="bg-dark-900">
        <SectionHeader
          eyebrow="Specialties"
          title="What We Cover"
          description="Our areas of expertise in AI education"
        />
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {team[0].areas.map((area) => (
              <span
                key={area}
                className="px-4 py-2 bg-dark-800 border border-dark-700 rounded-full text-sm text-text-secondary hover:border-primary-500/50 hover:text-primary-400 transition-colors"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-text-primary mb-4">
            Start Your AI Journey
          </h2>
          <p className="text-lg text-text-secondary mb-8">
            Join over 102,000 learners who are mastering AI with our free resources.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/guides" size="lg">
              Browse Guides
            </Button>
            <Button
              href="https://www.linkedin.com/company/how-do-i-use-ai"
              external
              variant="secondary"
              size="lg"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              Follow on LinkedIn
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
