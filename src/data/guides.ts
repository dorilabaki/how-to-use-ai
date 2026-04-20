export interface Guide {
  slug: string;
  title: string;
  description: string;
  content: string;
  readTime: string;
  publishedAt: string;
  author: string;
  chapters: { id: string; title: string }[];
}

export const guides: Guide[] = [
  {
    slug: 'complete-chatgpt-guide',
    title: 'The Complete ChatGPT Guide for Beginners',
    description: 'Everything you need to know to start using ChatGPT effectively. From creating your account to advanced techniques, this comprehensive guide covers it all.',
    readTime: '25 min read',
    publishedAt: '2024-12-01',
    author: 'How Do I Use AI',
    chapters: [
      { id: 'what-is-chatgpt', title: 'What is ChatGPT?' },
      { id: 'getting-started', title: 'Getting Started' },
      { id: 'basic-prompts', title: 'Writing Basic Prompts' },
      { id: 'use-cases', title: 'Common Use Cases' },
      { id: 'advanced-tips', title: 'Advanced Tips' },
      { id: 'limitations', title: 'Limitations to Know' },
      { id: 'best-practices', title: 'Best Practices' },
    ],
    content: `
## What is ChatGPT? {#what-is-chatgpt}

ChatGPT is an AI chatbot developed by OpenAI that can understand and generate human-like text. Released in November 2022, it quickly became the fastest-growing consumer application in history, reaching 100 million users in just two months.

### How ChatGPT Works

ChatGPT is built on a Large Language Model (LLM) trained on vast amounts of text from the internet. It doesn't actually "know" things—it predicts what text should come next based on patterns learned during training.

Key things to understand:

- **It's a conversation**: ChatGPT remembers what you've said earlier in the chat
- **It generates text**: Every response is newly created, not retrieved from a database
- **It can be wrong**: Confident-sounding responses aren't always accurate
- **It has a knowledge cutoff**: Training data has a specific end date

### ChatGPT Versions

- **ChatGPT Free**: Uses GPT-3.5, good for basic tasks
- **ChatGPT Plus ($20/month)**: Uses GPT-4, much more capable
- **ChatGPT Team/Enterprise**: For businesses, additional security features

## Getting Started {#getting-started}

### Creating Your Account

1. Go to chat.openai.com
2. Click "Sign Up"
3. Enter your email or use Google/Microsoft/Apple login
4. Verify your email
5. Complete phone verification

### The Interface

When you log in, you'll see:

- **Chat input**: Where you type your messages
- **New chat**: Starts a fresh conversation
- **History**: Your previous conversations (stored in the sidebar)
- **Model selector**: Choose between GPT-3.5 and GPT-4 (Plus users)

### Your First Conversation

Start simple. Type something like:

"Hi! I'm new to ChatGPT. Can you explain what you can help me with?"

ChatGPT will provide an overview of its capabilities. From there, try asking it to:
- Explain a concept you're curious about
- Help you draft an email
- Answer a question about your work

## Writing Basic Prompts {#basic-prompts}

### The Anatomy of a Good Prompt

Effective prompts typically include:

1. **Context**: Background information
2. **Task**: What you want done
3. **Format**: How you want the response

**Example:**

"I'm preparing for a job interview at a tech startup (context). Give me 5 common interview questions and sample answers (task). Format each as a bullet point with the question followed by a 2-sentence answer (format)."

### Types of Prompts

**Question prompts**: "What is machine learning?"

**Task prompts**: "Write a thank-you email to my interviewer"

**Creative prompts**: "Write a short story about a robot learning to cook"

**Analysis prompts**: "Review this paragraph and suggest improvements"

### Iterating on Responses

Your first response is rarely perfect. Follow up with:

- "Make it shorter"
- "Use a more formal tone"
- "Add more specific examples"
- "Focus more on [specific aspect]"

Think of it as a collaboration, not a single query.

## Common Use Cases {#use-cases}

### Writing Assistance

ChatGPT excels at helping with written content:

- **Emails**: Draft, edit, or improve professional emails
- **Reports**: Structure and outline documents
- **Creative writing**: Brainstorm ideas, overcome writer's block
- **Editing**: Improve clarity, fix grammar, adjust tone

**Prompt template**: "Help me write a [type of content] about [topic]. The tone should be [formal/casual/professional]. Keep it to [length]."

### Learning and Research

Use ChatGPT as a study partner:

- **Explanations**: "Explain quantum computing like I'm 10 years old"
- **Summaries**: "Summarize the key points of [topic]"
- **Q&A**: Ask follow-up questions until you understand
- **Study aids**: "Create 10 flashcard questions about World War II"

### Coding Help

Even non-programmers can benefit:

- **Explain code**: Paste code and ask what it does
- **Debug**: Describe an error and get solutions
- **Write scripts**: Describe what you need in plain English
- **Learn concepts**: "What's the difference between Python and JavaScript?"

### Productivity and Planning

- **Meeting agendas**: "Create an agenda for a 30-minute project kickoff"
- **To-do lists**: "Help me prioritize these tasks: [list]"
- **Decision making**: "What are pros and cons of [decision]?"
- **Brainstorming**: "Give me 20 ideas for [project]"

## Advanced Tips {#advanced-tips}

### Role Prompting

Assign ChatGPT a persona for better results:

"You are an experienced marketing consultant. Review my product description and suggest improvements."

"Act as a skeptical customer. What objections might you have to this pitch?"

### System Prompts (Custom Instructions)

In settings, you can add "Custom Instructions" that apply to all conversations:

- **About you**: Your profession, expertise, preferences
- **Response style**: Format, length, tone preferences

This saves you from repeating context in every chat.

### Using Examples (Few-Shot Learning)

Show ChatGPT what you want:

"Convert these titles to clickbait format:

Original: 'How to Save Money'
Clickbait: 'The Secret Money Trick Banks Don't Want You to Know'

Original: 'Cooking Basics'
Clickbait: 'I Tried This Simple Cooking Hack and Now I'm Never Ordering Takeout Again'

Original: 'Exercise Tips'
Clickbait:"

### Chaining Prompts

Break complex tasks into steps:

1. "Research topic X and give me 5 key points"
2. "Expand on point 3"
3. "Write an introduction using that information"
4. "Now write the conclusion"

### Temperature Analogy

ChatGPT has a "temperature" setting (not directly accessible to users) that affects creativity. By prompting carefully, you can influence this:

- For consistent, factual responses: "Give me a straightforward, factual answer"
- For creative responses: "Be creative and think outside the box"

## Limitations to Know {#limitations}

### Knowledge Cutoff

ChatGPT's training data has a cutoff date. It won't know about recent events, new products, or updated information after that date.

**Workaround**: For current information, use tools with internet access (ChatGPT Plus has browsing) or verify with current sources.

### Hallucinations

ChatGPT sometimes generates plausible-sounding but incorrect information. It might:

- Cite non-existent sources
- Invent statistics
- Misremember facts

**Workaround**: Always verify important facts through reliable sources.

### Lack of True Understanding

ChatGPT predicts likely text—it doesn't truly understand concepts. This means:

- It might miss nuance or context you assume is obvious
- Logic can fail on novel problems
- It can't truly reason about new situations

### Math and Calculation

ChatGPT often makes arithmetic errors. Don't trust it for:

- Complex calculations
- Data analysis
- Financial projections

**Workaround**: Use dedicated tools or ask it to show work step-by-step (reduces errors but doesn't eliminate them).

### No Memory Between Chats

Each new conversation starts fresh. ChatGPT doesn't remember previous conversations (though Plus users can enable some memory features).

## Best Practices {#best-practices}

### Do

- **Be specific**: Clear prompts get better results
- **Iterate**: Refine through follow-up messages
- **Verify**: Double-check important information
- **Experiment**: Try different phrasings
- **Save good prompts**: Keep templates that work well

### Don't

- **Trust blindly**: Always verify critical information
- **Share sensitive data**: Don't input confidential information
- **Expect perfection**: First drafts need editing
- **Use for everything**: Some tasks are better done other ways

### Privacy Considerations

By default, OpenAI may use your conversations to improve their models. If privacy matters:

- Use the settings to opt out of data training
- Avoid sharing personal, financial, or confidential information
- Consider ChatGPT Enterprise for business use

### Building a Workflow

The most productive ChatGPT users:

1. Identify repetitive tasks that could benefit from AI
2. Develop prompt templates for those tasks
3. Create a library of effective prompts
4. Integrate ChatGPT into existing workflows rather than replacing them

## Next Steps

You now have a solid foundation for using ChatGPT effectively. The best way to improve is practice:

1. Use ChatGPT daily for real tasks
2. Experiment with different prompting techniques
3. Note what works and what doesn't
4. Keep up with new features and capabilities

Remember: ChatGPT is a tool. Like any tool, its value depends on how skillfully you use it. Start simple, build gradually, and always maintain a critical eye.

Welcome to the world of AI assistance. Use it wisely.
`
  },
  {
    slug: 'prompt-engineering-101',
    title: 'Prompt Engineering 101: From Basics to Advanced',
    description: 'Master the art of prompt engineering with this comprehensive guide. Learn systematic techniques for getting the best results from any AI model.',
    readTime: '30 min read',
    publishedAt: '2024-11-28',
    author: 'How Do I Use AI',
    chapters: [
      { id: 'fundamentals', title: 'The Fundamentals' },
      { id: 'core-techniques', title: 'Core Techniques' },
      { id: 'advanced-methods', title: 'Advanced Methods' },
      { id: 'domain-specific', title: 'Domain-Specific Prompting' },
      { id: 'troubleshooting', title: 'Troubleshooting' },
      { id: 'optimization', title: 'Optimization Strategies' },
      { id: 'future', title: 'The Future of Prompting' },
    ],
    content: `
## The Fundamentals {#fundamentals}

### What Prompt Engineering Really Is

Prompt engineering is the discipline of designing inputs to get optimal outputs from large language models (LLMs). It's part art, part science, and increasingly part of every knowledge worker's toolkit.

The term "engineering" is intentional—this isn't about random trial and error. It's about systematic approaches that produce reliable, repeatable results.

### Why It Matters

The same AI model can produce vastly different outputs based on how you prompt it. Research shows that well-engineered prompts can improve output quality by 50% or more compared to naive prompting.

### The Prompt Equation

Every prompt interaction follows this pattern:

**Prompt + Model = Output**

You control the prompt. You choose the model. Together, they determine the output.

Since you often can't change the model, prompt engineering is about maximizing the prompt variable.

### Core Principles

**1. Clarity Over Brevity**

Longer, clearer prompts outperform short, ambiguous ones. Don't sacrifice clarity to save tokens.

**2. Structure Matters**

How you organize information affects how the model processes it. Logical structure yields logical outputs.

**3. Specificity Wins**

Vague inputs get vague outputs. Specific inputs get specific outputs.

**4. Iteration Is Expected**

No one writes perfect prompts on the first try. Refinement is part of the process.

## Core Techniques {#core-techniques}

### Technique 1: Role/Persona Assignment

Tell the AI who to be. This shapes expertise, tone, and approach.

**Basic**: "You are a helpful assistant."

**Better**: "You are a senior software architect with 20 years of experience in distributed systems. You value clean code and pragmatic solutions over theoretical perfection."

**Why it works**: LLMs encode different "expertise patterns." Activating a specific persona triggers relevant patterns.

### Technique 2: Task Decomposition

Break complex tasks into sequential steps.

**Instead of**: "Write a marketing strategy"

**Try**:
1. "Identify the target audience for [product]"
2. "What are 5 key pain points for this audience?"
3. "Suggest 3 marketing channels to reach them"
4. "Draft messaging for each channel"

**Why it works**: Reduces cognitive load on the model and gives you control points for refinement.

### Technique 3: Few-Shot Examples

Show, don't just tell. Provide examples of desired outputs.

**Template**:
"Convert product features to benefits:

Feature: 8-hour battery life
Benefit: Work all day without searching for outlets

Feature: Noise-canceling microphone
Benefit: Crystal-clear calls even from busy coffee shops

Feature: Lightweight design
Benefit: [model completes]"

**Why it works**: Examples disambiguate your request and establish patterns for the model to follow.

### Technique 4: Chain-of-Thought (CoT)

Ask the model to reason step-by-step before answering.

**Standard prompt**: "Which is a better investment: Stock A at $50 with 10% projected growth or Stock B at $100 with 8% projected growth?"

**CoT prompt**: "Which is a better investment: Stock A at $50 with 10% projected growth or Stock B at $100 with 8% projected growth? Think through this step by step, showing your calculations."

**Why it works**: Explicit reasoning reduces errors on problems requiring multi-step logic.

### Technique 5: Output Formatting

Specify exactly how you want responses structured.

**Formats to request**:
- Bullet points
- Numbered lists
- Tables
- JSON/structured data
- Specific heading structure
- Length constraints

**Example**: "Provide your analysis as a table with columns: Factor, Current State, Recommendation, Priority (High/Medium/Low)"

### Technique 6: Constraint Setting

Define what you don't want as clearly as what you do want.

**Constraints to consider**:
- Length limits ("Maximum 150 words")
- Style restrictions ("No jargon, 8th-grade reading level")
- Content exclusions ("Don't mention competitors by name")
- Tone parameters ("Professional but approachable")

## Advanced Methods {#advanced-methods}

### Self-Consistency Prompting

Ask the model to solve the same problem multiple ways and compare.

"Approach this problem three different ways. For each approach, solve it completely. Then compare your answers and explain any differences."

**Use case**: Math, logic, analysis where accuracy is critical.

### Recursive Prompting

Use model outputs as inputs for the next prompt.

**Example workflow**:
1. Generate initial draft
2. "Critique this draft for weaknesses"
3. "Revise the draft addressing these weaknesses"
4. "Identify remaining areas for improvement"
5. Repeat until satisfied

### Meta-Prompting

Ask the model to write prompts for itself.

"I want to accomplish [goal]. What prompt should I give you to get the best result? Explain why that prompt structure would work."

Then use the generated prompt.

### Tree of Thoughts

For complex problems, have the model explore multiple solution paths simultaneously.

"Consider three different approaches to solving this problem:
1. Approach A: [description]
2. Approach B: [description]
3. Approach C: [description]

Explore each approach. Rate each on feasibility and quality. Then synthesize the best elements into a final solution."

### Constitutional Prompting

Embed rules that govern all responses.

"When answering, always follow these rules:
1. Cite sources for factual claims
2. Acknowledge uncertainty with 'I'm not certain but...'
3. Offer to clarify if any assumption might be wrong
4. Keep responses under 200 words unless asked for more

Now, answer this question: [question]"

## Domain-Specific Prompting {#domain-specific}

### For Writing Tasks

**Effective elements**:
- Target audience definition
- Desired tone/style
- Examples of preferred voice
- Length specifications
- Purpose/goal of the content

**Template**: "Write a [format] for [audience] about [topic]. The tone should be [tone]. The goal is to [objective]. Length: [words]. Reference this style: [example]"

### For Coding Tasks

**Effective elements**:
- Programming language specification
- Framework/library context
- Input/output examples
- Error handling requirements
- Code style preferences

**Template**: "Write a [language] function that [description]. Input: [examples]. Expected output: [examples]. Handle these edge cases: [list]. Follow [style guide] conventions."

### For Analysis Tasks

**Effective elements**:
- Framework/methodology to apply
- Specific criteria to evaluate
- Format for findings
- Depth/breadth expectations
- Conclusions to draw

**Template**: "Analyze [subject] using [framework]. Evaluate against these criteria: [list]. Present findings in [format]. Conclude with [type of recommendation]."

### For Creative Tasks

**Effective elements**:
- Genre/style parameters
- Mood/atmosphere
- Length constraints
- Specific elements to include/exclude
- Reference works for style

**Template**: "Write a [format] in the style of [reference]. Theme: [theme]. Include: [elements]. Avoid: [elements]. Length: [specification]."

## Troubleshooting {#troubleshooting}

### Problem: Responses are too generic

**Solutions**:
- Add specific examples of what you want
- Include domain context
- Specify a particular angle or perspective
- Use constraints to narrow the output

### Problem: Responses are too long

**Solutions**:
- Set explicit word/sentence limits
- Ask for "concise" or "brief" responses
- Request bullet points instead of paragraphs
- Use "TL;DR format"

### Problem: Wrong format

**Solutions**:
- Show an example of exact desired format
- Use explicit structural instructions
- Request JSON or other structured formats
- Be specific about delimiters and organization

### Problem: Inconsistent quality

**Solutions**:
- Use few-shot examples consistently
- Add quality checks: "Before responding, verify that..."
- Request self-evaluation: "Rate your confidence 1-10"
- Break into smaller, more manageable tasks

### Problem: Factual errors

**Solutions**:
- Ask for source citations
- Request step-by-step reasoning
- Cross-prompt for verification
- Use tools with internet access for current information

## Optimization Strategies {#optimization}

### A/B Testing Prompts

When quality matters, test variations:

1. Write 3-5 versions of your prompt
2. Run each on identical inputs
3. Evaluate outputs systematically
4. Iterate on the best performer

### Prompt Libraries

Build collections of working prompts:

- Document prompts that work well
- Categorize by use case
- Include context on when to use each
- Note variations and their effects

### Temperature and Parameters

When you have access to model parameters:

- **Lower temperature** (0.1-0.3): Factual, consistent outputs
- **Higher temperature** (0.7-0.9): Creative, varied outputs
- **Max tokens**: Set appropriate limits

### Prompt Compression

For cost-sensitive applications, compress without losing effectiveness:

- Remove redundant words
- Use abbreviations for clear concepts
- Rely on examples rather than explanations
- Test comprehension with minimal prompts

## The Future of Prompting {#future}

### Emerging Trends

**Multimodal prompting**: Combining text, images, and other inputs will require new techniques.

**Automated prompt optimization**: Tools that automatically refine prompts based on output quality.

**Prompt chaining interfaces**: Visual tools for building complex prompt workflows.

**Domain-specific prompt languages**: Specialized syntax for particular fields.

### Skills That Will Remain Valuable

Even as prompting evolves, these fundamentals endure:

- Clear communication
- Logical thinking
- Understanding model capabilities
- Systematic experimentation
- Quality evaluation

### Continuous Learning

The field evolves rapidly. Stay current by:

- Following AI research publications
- Experimenting with new models
- Participating in prompt engineering communities
- Building and sharing prompt libraries

## Conclusion

Prompt engineering is a learnable skill with immediate practical value. Start with the fundamentals, practice the core techniques, and gradually incorporate advanced methods as you build expertise.

The most important thing is to start. Every prompt is practice. Every refinement builds intuition. The expertise develops through doing.

You now have the framework. The rest is application.
`
  },
  {
    slug: 'complete-guide-to-ai-powered-research',
    title: 'The Complete Guide to AI-Powered Research for Business Professionals',
    description: 'A practical, end-to-end guide to using AI tools for research that holds up under scrutiny: choosing the right tool, structuring your queries, verifying sources, and avoiding hallucinations.',
    readTime: '28 min read',
    publishedAt: '2026-04-20',
    author: 'How Do I Use AI',
    chapters: [
      { id: 'why-ai-research', title: 'Why AI Research Is Different' },
      { id: 'choosing-the-tool', title: 'Choosing the Right Tool' },
      { id: 'framing-the-question', title: 'Framing the Question' },
      { id: 'scaffolding-a-research-session', title: 'Scaffolding a Research Session' },
      { id: 'sources-and-citations', title: 'Sources and Citations' },
      { id: 'avoiding-hallucinations', title: 'Avoiding Hallucinations' },
      { id: 'synthesis-and-writing', title: 'Synthesis and Writing' },
      { id: 'workflows-and-templates', title: 'Workflows and Templates' },
    ],
    content: `
## Why AI Research Is Different {#why-ai-research}

Research before AI looked like this. You opened a browser, typed keywords, skimmed the first five results, opened a few promising ones in tabs, read them carefully, and synthesised by hand. The skill was query crafting, source vetting, and the patience to read.

Research with AI looks different, and not always in the ways people think. AI has not replaced search. It has added a new layer on top: a synthesiser that can summarise, compare, extract, and structure information at a speed no human can match. It has not replaced the need for source verification. In some ways, it has made verification more important, because AI outputs can be confidently wrong in ways that are difficult to detect without going back to primary sources.

The implication for a working professional is that AI research is not "search, but easier." It is a different practice with different inputs, different steps, and different failure modes. This guide walks through that practice.

## Choosing the Right Tool {#choosing-the-tool}

The tools available for AI-assisted research fall into a handful of categories. Each has strengths, weaknesses, and appropriate use cases.

**General-purpose chatbots** like ChatGPT, Claude, and Gemini are powerful general reasoners. They excel at synthesising known information, explaining complex concepts, and structuring your thinking. They are weak at anything requiring real-time information and can generate plausible-sounding but incorrect facts when asked about specifics outside their training data.

Use them for: frameworks, explanations, brainstorming, writing assistance, and reasoning through problems.

Avoid them for: current events, specific statistics, exact quotes, and anything where the factual accuracy of a specific claim matters and cannot be verified.

**Search-enabled assistants** like Perplexity, ChatGPT with browsing, and Claude with web search combine a language model with live web search. They retrieve current information and cite sources, which changes the research dynamic significantly.

Use them for: current information, statistics that need verification, comparative research across sources, and anything where you need citations.

Avoid them for: tasks where you just need to think, where live search adds friction without adding value.

**Deep research tools** like ChatGPT's Deep Research mode, Perplexity Pro's research mode, and Google's Deep Research are newer entrants that conduct extended, multi-step research over twenty to forty minutes, reading dozens of sources before producing a report.

Use them for: substantial research questions where the trade-off of waiting half an hour for a well-sourced ten-page report is worthwhile.

Avoid them for: quick lookups, where the setup cost exceeds the benefit.

**Domain-specific tools** cover specialised use cases. Consensus for scientific literature. Elicit for academic papers. Scite for citation analysis. These are narrow but deep.

Use them for: the specific domain they cover, where specialised indexing produces better results than general-purpose tools.

The practical upshot is that the right tool depends on the question. A broad "explain X concept" goes to ChatGPT. A "what are the current market statistics for Y" goes to Perplexity. A "do a comprehensive review of Z" goes to Deep Research. Treating one tool as the answer to every question is leaving most of the value on the table.

## Framing the Question {#framing-the-question}

The single largest improvement you can make to AI research output is to reframe your question before you type it.

Weak framing: "Tell me about customer retention strategies."

Stronger framing: "I work in B2B SaaS. I'm trying to reduce involuntary churn specifically — customers who leave because of payment failures, not because of dissatisfaction. Give me the frameworks and tactics that specifically address involuntary churn, with concrete examples of what different companies have done. Focus on mid-market SaaS, not consumer or enterprise."

The stronger framing includes four things the weaker one omits: the industry context, the specific sub-problem, the type of answer wanted (frameworks and tactics with examples), and the scope constraint (mid-market, not consumer or enterprise).

This is not about "prompting." It's about answering the question "what do I actually want to learn?" before asking it. The clarity that produces is valuable regardless of the tool.

A useful discipline is to write the question three times before hitting send. The first version is usually what you typed without thinking. The second is better. The third usually captures what you actually want.

## Scaffolding a Research Session {#scaffolding-a-research-session}

A research session of any substance benefits from a lightweight structure. Not a formal research plan, but a handful of checkpoints that keep you from wandering.

**Define the output first.** Before starting the research, describe what the finished work looks like. "A one-pager I can send to my manager summarising the three most promising options, with a recommendation and brief pros-and-cons for each." This constrains the research to what you actually need to produce.

**List what you already know.** Fifteen seconds of reflection on your current understanding tells you where to focus. AI outputs are more useful when they build on your existing knowledge rather than explaining the basics you already have.

**Draft the open questions.** Three to seven specific questions the research needs to answer. This becomes your checklist — you know you're done when each question has an answer you're confident in.

**Pick the tool.** General chatbot, search-enabled assistant, deep research, or domain-specific. Match the tool to the question type.

**Run the first pass.** Ask the question, get the output, read critically. The first pass is almost never the final answer.

**Verify the key claims.** Any specific numbers, studies, or names that will appear in your output need to be verified at a primary source. More on this in the hallucinations chapter.

**Iterate or expand.** Based on the first pass, either refine the question to dig deeper, or expand into a related area you hadn't considered.

**Synthesise into the output.** The AI helps with this too, but the structure should come from you.

This framework reliably produces better research than a more ad-hoc approach, even though it adds maybe ten minutes of setup. The ten minutes are bought back in reduced wheel-spinning.

## Sources and Citations {#sources-and-citations}

Sources matter more in AI-assisted research than in traditional research, not less. This is counter-intuitive, since AI tools can produce well-phrased summaries quickly. The reason sources still matter is that the AI might be wrong, and the only way to know is to check.

**Always prefer tools that cite sources.** For any research where accuracy matters, use a search-enabled assistant rather than a base chatbot. The citations let you verify claims before using them.

**Open the actual source, not just the citation.** A citation list is reassuring, but it's not verification. Click through to at least the most consequential sources and confirm the AI's summary is accurate. AI tools occasionally mis-summarise or over-generalise from the source.

**Weight the sources.** A peer-reviewed study in a respected journal carries different weight than a blog post by a consultant. AI tools don't always make this distinction clear; you have to bring that judgement.

**Prefer primary sources over secondary ones.** If the AI cites a news article that quotes a study, try to find the study. News coverage of research frequently distorts or simplifies findings in ways that matter.

**Note the date.** Information ages. A 2019 best practice may be outdated. The AI won't always flag this.

A useful habit: for any research that will go into a deliverable, maintain a separate notes file with the verified sources for each key claim. This takes a few minutes and saves hours if anyone later questions the work.

## Avoiding Hallucinations {#avoiding-hallucinations}

Hallucinations are AI outputs that are factually wrong but presented with confidence. They are the single largest reliability issue with AI research.

The important thing to understand is that hallucinations are not random. They occur in predictable patterns, and understanding those patterns makes them much easier to catch.

**Specific numbers are the highest-risk category.** When you ask for statistics, percentages, dates, or quantities, the risk of fabrication is high, especially from base chatbots without search. If the AI tells you "42% of companies do X" or "the market was worth $8.3 billion in 2023," treat that number as unverified until you find the original source.

**Quotes are the second-highest risk.** AI tools will sometimes generate quotes attributed to real people that the person never actually said. This is not deliberate deception; it's a failure mode of how language models work. Any quote that will appear in your output must be verified against a primary source.

**Study citations are the third-highest risk.** AI tools sometimes invent plausible-sounding study names and author combinations. "A 2021 study by Smith and Chen found..." is a pattern that sounds authoritative and is often fictional. Verify by searching for the study directly.

**Very recent events are risky.** If you're researching something that happened last month and your tool doesn't have live search, the output may be hallucinated entirely.

**Obscure topics are risky.** The further you get from well-documented mainstream topics, the more the model is filling in from approximation rather than knowledge.

Practical rules of thumb:

For any claim that will matter in your output — a specific number, a person's name, a study title, a quote — verify it at a primary source. The AI's confidence level is not a reliable signal of truth.

If the AI can't give you a citable source when asked, treat the claim as unverified regardless of how plausible it sounds.

When in doubt, ask the AI directly: "How confident are you in this claim? What might be wrong?" Good tools will give nuanced answers. The act of asking also primes you to look more critically at the response.

## Synthesis and Writing {#synthesis-and-writing}

Once you have verified research material, synthesising it into your deliverable is where AI provides enormous leverage — and where a handful of failure modes still apply.

The core technique is to separate research from synthesis. Use one chat or session to gather and verify information. Use a different chat or session, with the verified information pasted in, to produce the output. This prevents the output AI from inventing new facts during synthesis.

**Paste in your verified notes, then ask for the draft.** "Here are my notes on topic X, gathered from [sources]. Write a two-page brief that covers [structure]."

**Ask for structure before prose.** A one-line outline is cheaper to iterate on than a five-page draft. Nail the structure, then expand.

**Iterate in layers.** First pass: get the full draft. Second pass: fix structural issues. Third pass: tighten language. Fourth pass: check every claim against your source notes. This is faster than trying to perfect everything in one shot.

**Read the output skeptically.** If the AI introduced a number or a claim that wasn't in your notes, that claim needs to be verified or cut. The output AI will sometimes add plausible-sounding embellishments.

**Use your voice, not the AI's.** The default output style of most models is fluent but slightly generic. Give explicit style instructions, or heavily edit the output. A finished document should sound like you, not like a chatbot.

## Workflows and Templates {#workflows-and-templates}

A few workflows, once set up, produce outsized returns when reused.

**The market research workflow.** Define the market. Use a search-enabled assistant to find the three to five most-cited reports. Open each one. Extract the key data points into your notes. Use a chatbot to identify themes and contradictions across sources. Produce the synthesis from verified data.

**The competitive analysis workflow.** List competitors. For each, use a search-enabled tool to gather product offering, positioning, pricing, and recent news. Structure the output as a comparison table. Use a chatbot to identify patterns and strategic implications.

**The technical research workflow.** Describe the problem. Use a general chatbot to identify the relevant concepts and terminology. Use a domain-specific tool (academic search, documentation search) to find specific solutions. Use a search-enabled assistant to find worked examples. Synthesise.

**The decision prep workflow.** Name the decision. List the options. For each option, research pros, cons, and comparable cases. Use a chatbot to stress-test each option ("what's the strongest case against X?"). Produce a one-pager with a recommendation.

**The content briefing workflow.** Define the audience. Use a search-enabled tool to identify the top five pieces of content already written on the topic. Extract what they cover and what they miss. Draft a brief that covers the gaps.

Each of these workflows can be turned into a reusable prompt template. Save them in a notes app or as custom GPTs. The second time you use a workflow, it takes half the time of the first.

## The Long Picture

AI research is a skill that compounds. The first month of serious use produces incremental improvements. The sixth month produces workflows that are genuinely different from how you researched before. The second year produces habits of verification, structuring, and synthesis that carry over to work even when you're not using AI.

The trap is assuming the tools are doing the work for you. The tools are doing part of the work — a large part — but the parts that still require you are the parts that matter most: framing the question, judging the sources, and producing the output that actually ships. Those parts are the job. The AI just makes them easier.

For a companion piece on applying these techniques at the desk, see our article on [how to build custom GPTs that actually save you time](/resources/how-to-build-custom-gpts-that-save-time). And for the broader context of making AI part of a productive workday, [Office Productivity Hacks](https://officeproductivityhacks.com) covers the tools and workflows that sit around AI in the everyday office.

You now have the framework. The rest is the same thing it always is: practice, over months, on real problems.
`
  }
];

export function getGuide(slug: string): Guide | undefined {
  return guides.find(guide => guide.slug === slug);
}

export function getAllGuideSlugs(): string[] {
  return guides.map(guide => guide.slug);
}
