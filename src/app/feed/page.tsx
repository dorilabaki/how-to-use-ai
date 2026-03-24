import { Metadata } from 'next';
import FeedContent from './FeedContent';

export const metadata: Metadata = {
  title: 'Top LinkedIn Posts — AI Tips & Insights',
  description: 'Our best-performing LinkedIn posts on AI, ChatGPT, and prompt engineering. Real insights from a 102,000+ follower community.',
  openGraph: {
    title: 'Top Posts | How Do I Use AI',
    description: 'Top AI posts and insights from our LinkedIn community of 102,000+ learners.',
  },
};

export default function FeedPage() {
  return <FeedContent />;
}
