import Link from 'next/link';
import Image from 'next/image';

const footerLinks = {
  learn: [
    { name: 'Getting Started', href: '/guides' },
    { name: 'Prompt Engineering', href: '/guides/prompt-engineering-101' },
    { name: 'ChatGPT Guide', href: '/guides/complete-chatgpt-guide' },
    { name: 'AI Glossary', href: '/glossary' },
  ],
  resources: [
    { name: 'Blog', href: '/resources' },
    { name: 'Prompt Library', href: '/prompts' },
    { name: 'AI Tools', href: '/resources/ai-tools-save-time' },
    { name: 'FAQ', href: '/faq' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/company/how-do-i-use-ai' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-dark-900 border-t border-dark-700">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <Image
                  src="/logo.jpeg"
                  alt="How Do I Use AI"
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
              <span className="font-bold text-lg text-text-primary">
                How Do I Use AI
              </span>
            </Link>
            <p className="mt-4 text-sm text-text-muted max-w-xs">
              Helping beginners and professionals unlock the power of artificial intelligence through tutorials, tips, and guides.
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href="https://www.linkedin.com/company/how-do-i-use-ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-primary-400 transition-colors"
              >
                <span className="sr-only">LinkedIn</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Learn */}
          <div>
            <h3 className="text-sm font-semibold text-text-primary uppercase tracking-wider">
              Learn
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.learn.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-muted hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-text-primary uppercase tracking-wider">
              Resources
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-muted hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-text-primary uppercase tracking-wider">
              Company
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-sm text-text-muted hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-dark-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-text-muted">
              &copy; {new Date().getFullYear()} How Do I Use AI. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <span className="text-sm text-text-muted">
                102,000+ followers learning AI
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
