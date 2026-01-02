export interface Article {
  slug: string;
  title: string;
  description: string;
  content: string;
  category: string;
  readTime: string;
  publishedAt: string;
  author: string;
}

export const articles: Article[] = [
  {
    slug: 'how-to-write-your-first-chatgpt-prompt',
    title: 'How to Write Your First ChatGPT Prompt',
    description: 'Learn the fundamentals of writing effective prompts for ChatGPT. This beginner-friendly guide will help you get better responses from AI.',
    category: 'Getting Started',
    readTime: '5 min read',
    publishedAt: '2024-12-15',
    author: 'How Do I Use AI',
    content: `
## What is a Prompt?

A prompt is the text you type into ChatGPT to get a response. Think of it as giving instructions to a very capable assistant. The clearer your instructions, the better the results.

## The Basic Structure of a Good Prompt

Every effective prompt has three key elements:

1. **Context**: Background information about your situation
2. **Task**: What you want ChatGPT to do
3. **Format**: How you want the response structured

### Example of a Basic Prompt

**Bad prompt:** "Write about marketing"

**Good prompt:** "I run a small bakery in Seattle. Write 3 Instagram caption ideas for our new sourdough bread launch. Keep them under 150 characters and include relevant emojis."

Notice how the good prompt includes context (bakery in Seattle), a specific task (3 Instagram captions), and format requirements (character limit, emojis).

## 5 Tips for Writing Better Prompts

### 1. Be Specific About What You Want

Instead of asking vague questions, be precise about your needs. The more details you provide, the more tailored the response will be.

### 2. Assign a Role

Tell ChatGPT who to be. "Act as a marketing expert" or "You are a patient teacher explaining to a 5-year-old" changes the tone and depth of responses.

### 3. Provide Examples

If you want a specific style, show ChatGPT what you're looking for. Include one or two examples of the output you expect.

### 4. Break Complex Tasks into Steps

For complicated requests, break them down. Instead of asking for a complete business plan, ask for sections one at a time.

### 5. Iterate and Refine

Your first prompt rarely gets perfect results. Use follow-up messages to refine the output. Say "Make it more formal" or "Add more specific examples."

## Common Mistakes to Avoid

- **Being too vague**: "Help me with work stuff" won't get useful results
- **Expecting mind-reading**: ChatGPT doesn't know your situation unless you explain it
- **Giving up too quickly**: The first response is just a starting point

## Your First Prompt Exercise

Try this template for your first well-structured prompt:

"I am a [your role/situation]. I need help with [specific task]. Please provide [number] [type of output] that are [requirements]. The tone should be [desired tone]."

## Next Steps

Now that you understand the basics, practice with simple prompts and gradually increase complexity. The key to mastering prompts is experimentation and iteration.

Remember: ChatGPT is a tool that gets better the more precisely you use it. Start simple, be clear, and don't be afraid to ask for revisions.
`
  },
  {
    slug: 'ai-tools-save-time',
    title: '10 AI Tools That Will Save You 10 Hours a Week',
    description: 'Discover the most powerful AI tools for boosting your productivity. From writing assistance to automation, these tools will transform how you work.',
    category: 'Productivity',
    readTime: '7 min read',
    publishedAt: '2024-12-10',
    author: 'How Do I Use AI',
    content: `
## Why AI Tools Matter for Productivity

The average professional spends 40% of their time on repetitive tasks. AI tools can automate many of these, freeing you to focus on work that actually requires human creativity and judgment.

Here are 10 AI tools that deliver real time savings:

## 1. ChatGPT - Your Universal AI Assistant

**Best for:** Writing, brainstorming, research, coding help

ChatGPT handles everything from drafting emails to explaining complex concepts. Use it for first drafts, outlines, and getting unstuck on problems.

**Time saved:** 2-3 hours/week on writing and research

## 2. Claude - Deep Thinking and Analysis

**Best for:** Complex analysis, long documents, nuanced tasks

Claude excels at handling lengthy documents and providing thoughtful, balanced responses. Ideal for summarizing reports and detailed analysis.

**Time saved:** 1-2 hours/week on document review

## 3. Grammarly - Automated Writing Polish

**Best for:** Grammar, tone, clarity improvements

Catches errors in real-time across emails, documents, and messages. The AI suggestions go beyond grammar to improve overall writing quality.

**Time saved:** 30 minutes/day on proofreading

## 4. Otter.ai - Meeting Transcription

**Best for:** Transcribing and summarizing meetings

Automatically transcribes meetings and generates summaries. Never take manual notes again.

**Time saved:** 1 hour/week on meeting notes

## 5. Notion AI - Smart Note Organization

**Best for:** Writing, summarizing, organizing information

Built directly into Notion, it helps draft content, summarize pages, and generate action items from meeting notes.

**Time saved:** 1 hour/week on documentation

## 6. Canva AI - Design Made Simple

**Best for:** Graphics, presentations, social media content

AI-powered features include Magic Write for copy, background removal, and design suggestions. No design skills needed.

**Time saved:** 2 hours/week on visual content

## 7. Zapier AI - Workflow Automation

**Best for:** Connecting apps and automating repetitive tasks

Create automated workflows between apps with natural language instructions. "When I get an email with an attachment, save it to Dropbox."

**Time saved:** 1-2 hours/week on manual transfers

## 8. Copy.ai - Marketing Copy Generator

**Best for:** Ad copy, product descriptions, social posts

Generate multiple variations of marketing copy quickly. Great for A/B testing and overcoming writer's block.

**Time saved:** 1 hour/week on copywriting

## 9. Gamma - Presentation Creator

**Best for:** Creating slide decks from text

Turn outlines into polished presentations automatically. The AI suggests layouts, images, and formatting.

**Time saved:** 1-2 hours per presentation

## 10. Perplexity - AI-Powered Search

**Best for:** Research with cited sources

Combines search with AI to answer questions directly, complete with sources. Faster than traditional research methods.

**Time saved:** 30 minutes/day on research

## How to Start

Don't try to adopt all 10 tools at once. Pick the 2-3 that address your biggest time drains. Master those before adding more.

The goal isn't to replace your judgment—it's to eliminate the busywork so you can focus on what matters.

## The Real Impact

If you save just 10 hours weekly, that's 520 hours per year—or 13 full work weeks. That's time for strategic thinking, creative projects, or simply better work-life balance.

Start with one tool this week. You'll wonder how you worked without it.
`
  },
  {
    slug: 'chatgpt-vs-claude-vs-gemini',
    title: 'ChatGPT vs Claude vs Gemini: Which AI Should You Use?',
    description: 'A comprehensive comparison of the top AI assistants. Learn the strengths and weaknesses of each to choose the right tool for your needs.',
    category: 'Comparisons',
    readTime: '8 min read',
    publishedAt: '2024-12-08',
    author: 'How Do I Use AI',
    content: `
## The Big Three AI Assistants

ChatGPT, Claude, and Gemini are the leading AI assistants in 2024. Each has distinct strengths, and the best choice depends on your specific needs.

## Quick Comparison

| Feature | ChatGPT | Claude | Gemini |
|---------|---------|--------|--------|
| Best For | General tasks, coding | Analysis, writing | Google integration |
| Company | OpenAI | Anthropic | Google |
| Free Tier | Yes (GPT-3.5) | Yes | Yes |
| Internet Access | Yes (Plus) | No | Yes |

## ChatGPT: The Jack of All Trades

### Strengths
- **Ecosystem**: Largest plugin and integration ecosystem
- **Coding**: Excellent code generation and debugging
- **Versatility**: Handles almost any task competently
- **Image Generation**: Built-in DALL-E access

### Weaknesses
- Usage limits on free tier
- Can be verbose
- Sometimes provides outdated information

### Best Use Cases
- Programming assistance
- Creative writing
- General knowledge questions
- Building custom GPTs

## Claude: The Thoughtful Analyst

### Strengths
- **Long Context**: Handles very long documents (200K+ tokens)
- **Nuance**: Excels at balanced, thoughtful responses
- **Safety**: Strong ethical guidelines reduce problematic outputs
- **Writing Quality**: Natural, less "AI-sounding" text

### Weaknesses
- No internet access
- Smaller ecosystem
- More conservative in some responses

### Best Use Cases
- Document analysis
- Long-form content review
- Research requiring nuance
- Professional writing

## Gemini: The Google Powerhouse

### Strengths
- **Google Integration**: Access to Search, YouTube, Drive, Gmail
- **Real-time Information**: Always current via Google Search
- **Multimodal**: Strong image understanding
- **Free Access**: Generous free tier

### Weaknesses
- Newer, still maturing
- Sometimes inconsistent
- Less refined than competitors

### Best Use Cases
- Research requiring current information
- Tasks involving Google Workspace
- Image analysis
- Real-time fact-checking

## Head-to-Head Tests

### Writing Quality
**Winner: Claude**

Claude produces the most natural, human-like prose. ChatGPT is close but can sound formulaic. Gemini is improving but still developing its voice.

### Coding Assistance
**Winner: ChatGPT**

ChatGPT has the edge for coding with better code completion, debugging explanations, and broader language support.

### Research Tasks
**Winner: Gemini**

When you need current information, Gemini's Google Search integration is unbeatable. For research from training data, all three are comparable.

### Long Documents
**Winner: Claude**

Claude's 200K token context window means it can process entire books. ChatGPT and Gemini have smaller windows.

## Pricing Comparison

### Free Tiers
- **ChatGPT**: Limited GPT-3.5 access
- **Claude**: Daily message limits
- **Gemini**: Generous limits with Google account

### Paid Tiers
- **ChatGPT Plus**: $20/month (GPT-4, DALL-E, plugins)
- **Claude Pro**: $20/month (Higher limits, priority)
- **Gemini Advanced**: $20/month (Gemini Ultra, 1TB storage)

## Our Recommendation

**For Beginners**: Start with Gemini (best free tier and familiar Google integration)

**For Writers**: Claude (most natural output, best for long content)

**For Developers**: ChatGPT (strongest coding ecosystem)

**For Researchers**: Use multiple tools (each has different strengths)

## The Bottom Line

There's no single "best" AI assistant. The smartest approach is to use the right tool for each task:

- Quick research? Gemini
- Long document analysis? Claude
- Code debugging? ChatGPT
- Creative brainstorming? Any of the three

Try all three with their free tiers. You'll quickly discover which fits your workflow best.
`
  },
  {
    slug: 'ai-research-without-wrong-answers',
    title: 'How to Use AI for Research Without Getting Wrong Answers',
    description: 'AI can hallucinate facts. Learn proven strategies to verify AI-generated information and use AI as a reliable research assistant.',
    category: 'Best Practices',
    readTime: '6 min read',
    publishedAt: '2024-12-05',
    author: 'How Do I Use AI',
    content: `
## The Hallucination Problem

AI models sometimes generate plausible-sounding but incorrect information—called "hallucinations." This is one of the biggest risks of using AI for research.

A 2024 study found that leading AI models hallucinate facts 3-15% of the time. That's enough to cause serious problems if you're not careful.

## Why AI Hallucinations Happen

AI models predict the most likely next words based on patterns in training data. They don't actually "know" facts—they generate text that sounds correct. This leads to:

- **Fabricated citations**: Fake book titles, made-up studies
- **Incorrect statistics**: Plausible but wrong numbers
- **False attributions**: Quotes no one actually said
- **Outdated information**: Facts that were once true but aren't anymore

## 7 Strategies to Prevent Wrong Answers

### 1. Ask for Sources (Then Verify Them)

Always ask: "What are your sources for this information?"

But don't stop there—verify the sources exist. AI can fabricate convincing-sounding citations. Check that the books, studies, and articles it mentions are real.

### 2. Cross-Reference Critical Facts

For any important fact, verify it through:
- Official websites
- Reputable news sources
- Academic databases
- Primary sources

If it only appears in the AI response and nowhere else, it's likely fabricated.

### 3. Use AI Tools with Citations

Some AI tools provide links to sources:
- **Perplexity**: Cites sources for all claims
- **Bing Chat**: Links to web sources
- **Google's Gemini**: Integrates with Google Search

These aren't perfect, but they're more verifiable than unsourced claims.

### 4. Ask the AI to Rate Its Confidence

Try: "On a scale of 1-10, how confident are you in this answer? What aspects are you less certain about?"

AI won't always be accurate about its confidence, but it can flag areas where information might be shaky.

### 5. Break Complex Questions Into Parts

Instead of: "Tell me everything about climate change policy in Europe"

Try: "What are the EU's current emission reduction targets?" followed by specific follow-up questions.

Smaller, specific questions are more likely to get accurate answers.

### 6. Check Dates and Context

Ask: "When was your training data last updated?"

Then consider: Could this information have changed since then? For rapidly evolving topics, AI knowledge may be outdated.

### 7. Use AI for Structure, Not Facts

The safest use of AI in research:
- Generating outlines
- Suggesting research directions
- Explaining concepts you'll verify elsewhere
- Organizing information you've already confirmed

## Red Flags to Watch For

Be suspicious when AI:
- Uses very specific numbers or statistics
- Cites obscure or very convenient sources
- Provides information that perfectly fits your question
- Gives confident answers on niche or recent topics

## A Practical Research Workflow

1. **Start with AI**: Use it to understand the topic and identify key questions
2. **Generate directions**: Ask for important subtopics, key sources, expert names
3. **Verify everything**: Check facts through authoritative sources
4. **Return to AI**: Use it to help organize and structure verified information
5. **Final check**: Run your conclusions past the AI to catch logical gaps

## The Bottom Line

AI is a powerful research accelerator, not a replacement for verification. Treat AI-generated information as a starting point, not a conclusion.

The researchers who get the most value from AI are those who pair its speed with healthy skepticism. Speed without accuracy isn't actually productive—it's just fast mistakes.

Use AI to work faster. Use verification to stay accurate.
`
  },
  {
    slug: 'beginners-guide-prompt-engineering',
    title: "The Beginner's Guide to Prompt Engineering",
    description: 'Prompt engineering is the skill of writing effective AI instructions. Learn the core techniques that get consistently better results from any AI.',
    category: 'Fundamentals',
    readTime: '9 min read',
    publishedAt: '2024-12-01',
    author: 'How Do I Use AI',
    content: `
## What is Prompt Engineering?

Prompt engineering is the practice of designing inputs that get optimal outputs from AI models. It's the difference between getting a vague, unhelpful response and getting exactly what you need.

Think of it as learning to communicate effectively with a very literal assistant who can do almost anything—if you explain it right.

## Why Prompt Engineering Matters

The same AI model can produce wildly different results based on how you phrase your request. A well-engineered prompt can:

- Get more accurate, relevant responses
- Save time by reducing back-and-forth
- Unlock capabilities you didn't know AI had
- Produce consistent, reproducible results

## The 5 Core Prompt Engineering Techniques

### 1. Role Prompting

Tell the AI who to be. This shapes tone, expertise level, and approach.

**Example:**
"You are a senior software engineer at Google with 15 years of experience. Review this code for potential issues."

vs.

"You are a patient coding teacher. Explain what this code does to someone learning their first programming language."

Same code, completely different responses.

### 2. Few-Shot Learning

Show examples of what you want. The AI learns the pattern and applies it.

**Example:**
"Convert these descriptions to product titles:

Description: A warm jacket for cold weather, made of down, in navy blue
Title: Navy Down Winter Jacket

Description: Running shoes with extra cushioning, breathable mesh, in white
Title: White Cushioned Running Shoes

Description: Leather bag for laptops up to 15 inches, with multiple compartments, in brown
Title:"

The AI will follow the pattern you've established.

### 3. Chain-of-Thought

Ask the AI to think step-by-step. This improves accuracy for complex problems.

**Example:**
"A store sold 150 shirts on Monday. On Tuesday, they sold 20% more than Monday. On Wednesday, they sold half of Tuesday's amount. How many shirts did they sell in total? Think through this step by step."

The AI will show its reasoning, which often leads to more accurate answers.

### 4. Structured Output

Specify exactly how you want the response formatted.

**Example:**
"Analyze this business idea. Provide your response in this format:

## Summary (2 sentences)
## Strengths (3 bullet points)
## Weaknesses (3 bullet points)
## Recommendation (1 sentence)"

You get organized, consistent outputs every time.

### 5. Constraint Setting

Define boundaries and requirements upfront.

**Example:**
"Write a product description. Requirements:
- Maximum 100 words
- Reading level: 8th grade
- Tone: Friendly but professional
- Include one call-to-action
- Avoid superlatives like 'best' or 'amazing'"

Constraints prevent unwanted outputs and keep responses focused.

## Combining Techniques

The most effective prompts combine multiple techniques:

"You are an expert copywriter for tech products (role). Write a product description for wireless earbuds using this style (few-shot example follows). Include: headline, 3 benefit statements, and CTA. Maximum 75 words, conversational tone (constraints)."

## Advanced Tips

### Be Specific About Edge Cases

If there are situations where you want different behavior, specify them:
"If the user's question is unclear, ask a clarifying question instead of guessing."

### Use Delimiters

Clearly separate different parts of your prompt:
"Text to summarize: '''[your text here]'''"

### Iterate Systematically

When a prompt doesn't work:
1. Identify what went wrong
2. Change one element at a time
3. Keep notes on what works

## Common Mistakes

- **Being vague**: "Write something good" gives you nothing useful
- **Overloading**: Too many instructions confuse the model
- **Ignoring context**: Not explaining why you need something
- **Skipping examples**: Showing is often clearer than telling

## Practice Exercises

1. Take a basic prompt you've used and add a role
2. Convert a single-shot prompt to few-shot with 2-3 examples
3. Add explicit formatting requirements to a prompt
4. Try chain-of-thought on a problem you previously got wrong

## Next Steps

Prompt engineering is a skill that improves with practice. Start with these techniques on simple tasks, then gradually apply them to more complex challenges.

The goal isn't to memorize templates—it's to develop intuition for what information helps AI produce better outputs.

Every expert prompt engineer started exactly where you are now. The difference is practice.
`
  }
];

export function getArticle(slug: string): Article | undefined {
  return articles.find(article => article.slug === slug);
}

export function getAllArticleSlugs(): string[] {
  return articles.map(article => article.slug);
}
