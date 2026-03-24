/**
 * FEED CONFIGURATION - How Do I Use AI
 *
 * Add your top LinkedIn posts here. Each post needs:
 * - linkedInUrl: Direct link to the LinkedIn post
 * - content: The post text (copy from LinkedIn)
 * - likes, comments, reposts: Current engagement numbers
 * - date: When it was posted (YYYY-MM-DD)
 *
 * Tips:
 * - Feature your 5-10 best performing posts
 * - Update engagement numbers periodically
 * - Put newest/best posts first
 */

export interface FeedPost {
  id: string
  linkedInUrl: string
  content: string
  likes: number
  comments: number
  reposts?: number
  date: string
}

export const feedConfig = {
  pageName: "How Do I Use AI",
  linkedInUrl: "https://www.linkedin.com/company/how-do-i-use-ai",
  followers: "102,000+",
  description: "AI tips, tutorials and insights from our LinkedIn community.",
}

// Add your top posts below - update URLs and engagement numbers as needed
export const feedPosts: FeedPost[] = [
  // EXAMPLE POST - Replace with your actual posts
  {
    id: "1",
    linkedInUrl: "https://www.linkedin.com/company/how-do-i-use-ai/posts/", // Replace with actual post URL
    content: `The best ChatGPT prompts follow this formula:

Role + Task + Context + Constraints

Example:
"You are a senior copywriter. Write a LinkedIn post about AI productivity tips. Keep it under 200 words. Use bullet points."

Simple framework. Better results.`,
    likes: 4500,
    comments: 280,
    reposts: 350,
    date: "2024-01-15",
  },
  {
    id: "2",
    linkedInUrl: "https://www.linkedin.com/company/how-do-i-use-ai/posts/",
    content: `5 AI tools that replaced hours of manual work:

1. ChatGPT → Writing first drafts
2. Midjourney → Creating visuals
3. Otter.ai → Meeting transcription
4. Copy.ai → Marketing copy
5. Notion AI → Summarizing docs

The future isn't about AI replacing you.
It's about you using AI to 10x your output.`,
    likes: 6200,
    comments: 445,
    reposts: 520,
    date: "2024-01-10",
  },
  {
    id: "3",
    linkedInUrl: "https://www.linkedin.com/company/how-do-i-use-ai/posts/",
    content: `Stop asking ChatGPT to "write" things.

Start asking it to:
• Critique your work
• Suggest improvements
• Ask you clarifying questions
• Challenge your assumptions

The best AI results come from conversation, not commands.`,
    likes: 5100,
    comments: 312,
    reposts: 389,
    date: "2024-01-05",
  },
  // --- Scraped 2026-03-24 ---
  {
    id: "4",
    linkedInUrl: "https://www.linkedin.com/company/how-do-i-use-ai/posts/",
    content: `I used Claude AI to build two HR dashboards in 10 minutes.

No code. No designer. No back-and-forth with IT.

Just clear prompts and the right context — and I had two fully functional dashboards ready to share.

The tools are here. It's time to use them.`,
    likes: 26,
    comments: 3,
    date: "2026-03-24",
  },
  {
    id: "5",
    linkedInUrl: "https://www.linkedin.com/company/how-do-i-use-ai/posts/",
    content: `Those avoiding AI today will be irrelevant tomorrow.

That's not a threat. It's a pattern.

Every major technology shift left behind those who waited too long.

The question isn't whether to learn AI. It's how fast you start.`,
    likes: 0,
    comments: 0,
    date: "2026-03-24",
  },
  // Add more posts here...
]
