'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

interface CardProps {
  title: string;
  description: string;
  href: string;
  icon?: React.ReactNode;
  tag?: string;
  readTime?: string;
}

export default function Card({ title, description, href, icon, tag, readTime }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Link href={href} className="block group">
        <div className="h-full p-6 bg-dark-800 border border-dark-700 rounded-2xl card-hover group-hover:border-primary-500/50">
          {(tag || icon) && (
            <div className="flex items-center justify-between mb-4">
              {icon && (
                <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center text-primary-400">
                  {icon}
                </div>
              )}
              {tag && (
                <span className="px-3 py-1 text-xs font-medium bg-primary-500/10 text-primary-400 rounded-full">
                  {tag}
                </span>
              )}
            </div>
          )}
          <h3 className="text-lg font-semibold text-text-primary group-hover:text-primary-400 transition-colors mb-2">
            {title}
          </h3>
          <p className="text-sm text-text-muted line-clamp-2">
            {description}
          </p>
          {readTime && (
            <div className="mt-4 flex items-center gap-2 text-xs text-text-muted">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {readTime}
            </div>
          )}
        </div>
      </Link>
    </motion.div>
  );
}
