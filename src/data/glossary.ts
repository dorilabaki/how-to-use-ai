export interface GlossaryTerm {
  slug: string;
  term: string;
  shortDefinition: string;
  fullDefinition: string;
  relatedTerms: string[];
  examples?: string[];
}

export const glossaryTerms: GlossaryTerm[] = [
  {
    slug: 'artificial-intelligence',
    term: 'Artificial Intelligence (AI)',
    shortDefinition: 'Computer systems designed to perform tasks that typically require human intelligence, such as learning, reasoning, problem-solving, and understanding language.',
    fullDefinition: `
Artificial Intelligence (AI) refers to computer systems designed to perform tasks that typically require human intelligence. These tasks include learning from experience, understanding natural language, recognizing patterns, making decisions, and solving complex problems.

## Types of AI

### Narrow AI (Weak AI)
AI designed for specific tasks—like ChatGPT for conversation, or image recognition systems. This is what exists today.

### General AI (Strong AI)
Theoretical AI that could perform any intellectual task a human can. This doesn't yet exist.

### Superintelligent AI
Hypothetical AI surpassing human intelligence in all areas. Currently science fiction.

## How AI Works

Modern AI typically uses machine learning—algorithms that improve through exposure to data. Rather than being explicitly programmed with rules, AI systems learn patterns from examples.

The most capable current AI systems use deep learning, which employs neural networks with many layers to process information in sophisticated ways.

## AI in Daily Life

AI is already embedded in many everyday technologies:
- Search engines that understand queries
- Recommendation systems on Netflix and Spotify
- Voice assistants like Siri and Alexa
- Email spam filters
- GPS navigation and traffic prediction
- Language translation services

## Key Considerations

AI has limitations: it can encode biases present in training data, make errors confidently, and lacks true understanding of the world. Using AI effectively requires understanding both its capabilities and constraints.
    `,
    relatedTerms: ['Machine Learning', 'Large Language Model', 'Generative AI'],
    examples: ['ChatGPT', 'Image recognition', 'Autonomous vehicles', 'Recommendation systems']
  },
  {
    slug: 'machine-learning',
    term: 'Machine Learning',
    shortDefinition: 'A subset of AI where computer systems learn and improve from experience without being explicitly programmed, by identifying patterns in data.',
    fullDefinition: `
Machine Learning (ML) is a subset of artificial intelligence where systems learn from data rather than following explicitly programmed rules. The system improves its performance on tasks by exposure to more examples.

## How Machine Learning Works

1. **Training**: The system is exposed to large amounts of example data
2. **Pattern Recognition**: Algorithms identify patterns and relationships
3. **Model Creation**: These patterns become a model for making predictions
4. **Inference**: The model applies learned patterns to new, unseen data

## Types of Machine Learning

### Supervised Learning
Learning from labeled examples. The system knows the correct answers during training.
- **Example**: Learning to identify spam by studying emails labeled "spam" or "not spam"

### Unsupervised Learning
Finding patterns in unlabeled data without knowing correct answers.
- **Example**: Grouping customers by purchasing behavior without predefined categories

### Reinforcement Learning
Learning through trial and error with rewards for good decisions.
- **Example**: AI learning to play games by being rewarded for winning

## Applications

- Email filtering (spam detection)
- Product recommendations
- Credit scoring
- Medical diagnosis assistance
- Speech recognition
- Image classification

## Relationship to AI

All machine learning is AI, but not all AI is machine learning. Traditional AI might use fixed rules created by humans, while ML systems derive their own rules from data.

The recent AI revolution is primarily driven by advances in machine learning, particularly deep learning.
    `,
    relatedTerms: ['Artificial Intelligence', 'Large Language Model', 'Token'],
    examples: ['Spam filters', 'Recommendation engines', 'Voice recognition', 'Fraud detection']
  },
  {
    slug: 'chatgpt',
    term: 'ChatGPT',
    shortDefinition: 'An AI chatbot created by OpenAI that can understand and generate human-like text, answer questions, write content, and assist with various tasks through conversation.',
    fullDefinition: `
ChatGPT is an AI chatbot developed by OpenAI, launched in November 2022. It can engage in natural conversations, answer questions, write various types of content, help with coding, and assist with many text-based tasks.

## How ChatGPT Works

ChatGPT is built on GPT (Generative Pre-trained Transformer) technology. It:

1. Was trained on vast amounts of text from the internet
2. Learned patterns in how humans communicate
3. Predicts what text should come next based on the input it receives
4. Uses reinforcement learning from human feedback (RLHF) for better responses

## Versions

### GPT-3.5
The free version of ChatGPT. Capable but less sophisticated than GPT-4.

### GPT-4
Available with ChatGPT Plus ($20/month). More capable, fewer errors, handles complex tasks better.

### GPT-4 Turbo / GPT-4o
Latest iterations with larger context windows and improved capabilities.

## Key Capabilities

- Answering questions
- Writing and editing text
- Coding assistance
- Language translation
- Summarization
- Creative writing
- Problem-solving
- Educational explanations

## Limitations

- Knowledge cutoff date (doesn't know recent events)
- Can generate incorrect information confidently ("hallucinations")
- No access to the internet (in basic versions)
- Cannot learn from your conversations (in most modes)
- May produce biased content

## Impact

ChatGPT was the fastest-growing consumer application in history, reaching 100 million users within two months. It sparked widespread interest in AI and changed how many people work.
    `,
    relatedTerms: ['Large Language Model', 'Prompt Engineering', 'Generative AI', 'Hallucination'],
    examples: ['Writing assistance', 'Code debugging', 'Content creation', 'Research help']
  },
  {
    slug: 'prompt-engineering',
    term: 'Prompt Engineering',
    shortDefinition: 'The practice of designing and optimizing inputs (prompts) for AI systems to get the most accurate, useful, and relevant outputs.',
    fullDefinition: `
Prompt engineering is the skill of crafting effective inputs for AI systems to achieve desired outputs. It's the difference between getting a generic, unhelpful response and getting exactly what you need.

## Why Prompt Engineering Matters

The same AI can produce wildly different results based on how you phrase your request. Well-engineered prompts can:

- Improve response accuracy by 50% or more
- Reduce back-and-forth refinement
- Unlock capabilities you didn't know AI had
- Produce consistent, reproducible results

## Core Components of a Good Prompt

### Context
Background information the AI needs to understand your situation.

### Task
Clear description of what you want the AI to do.

### Format
How you want the output structured.

### Constraints
Limitations, requirements, or guidelines.

## Key Techniques

### Role Prompting
Assigning the AI a persona: "You are an expert marketing consultant..."

### Few-Shot Learning
Providing examples of desired outputs before your request.

### Chain-of-Thought
Asking the AI to reason step-by-step.

### Output Formatting
Specifying exact structure (bullet points, tables, JSON, etc.).

## Example

**Weak prompt**: "Write about marketing"

**Strong prompt**: "You are a B2B marketing expert. Write 5 LinkedIn post ideas for a SaaS startup launching a new project management tool. Each idea should include a hook, key message, and call-to-action. Keep each under 200 words."

The strong prompt provides role, context, task, format, and constraints.

## The Future

As AI becomes more integrated into work, prompt engineering is becoming an essential skill. It's already appearing in job descriptions and becoming a specialized discipline.
    `,
    relatedTerms: ['ChatGPT', 'Large Language Model', 'Token'],
    examples: ['Role prompting', 'Few-shot learning', 'Chain-of-thought prompting', 'Structured outputs']
  },
  {
    slug: 'large-language-model',
    term: 'Large Language Model (LLM)',
    shortDefinition: 'An AI model trained on massive amounts of text data that can understand, generate, and work with human language at a sophisticated level.',
    fullDefinition: `
A Large Language Model (LLM) is an AI system trained on vast amounts of text data to understand and generate human language. These models power tools like ChatGPT, Claude, and Gemini.

## What Makes Them "Large"

LLMs are characterized by:

- **Training data**: Hundreds of billions of words from books, websites, and other text
- **Parameters**: Billions of numerical values the model adjusts during learning (GPT-4 is estimated to have over 1 trillion parameters)
- **Compute**: Training requires massive computing resources

## How LLMs Work

### Training Phase
The model reads massive amounts of text and learns patterns—which words tend to follow which, how sentences are structured, what topics are related.

### Prediction
When given text, the model predicts what should come next based on learned patterns. It's essentially very sophisticated autocomplete.

### Fine-Tuning
After initial training, models are often adjusted for specific tasks or to reduce harmful outputs.

## Capabilities

LLMs can:
- Answer questions on almost any topic
- Write in many styles and formats
- Translate between languages
- Summarize long documents
- Write and explain code
- Engage in multi-turn conversations

## Key LLMs

| Model | Company | Notes |
|-------|---------|-------|
| GPT-4 | OpenAI | Powers ChatGPT Plus |
| Claude | Anthropic | Known for nuanced responses |
| Gemini | Google | Integrated with Google services |
| LLaMA | Meta | Open-source family |

## Limitations

- Don't truly "understand"—predict likely text
- Can generate false information confidently
- Training data has cutoff dates
- Can reflect biases in training data

## The Revolution

LLMs represent a step-change in AI capability. For the first time, AI can engage with human language in a way that feels natural and useful for a wide range of tasks.
    `,
    relatedTerms: ['Artificial Intelligence', 'ChatGPT', 'Token', 'Machine Learning'],
    examples: ['GPT-4', 'Claude', 'Gemini', 'LLaMA']
  },
  {
    slug: 'generative-ai',
    term: 'Generative AI',
    shortDefinition: 'Artificial intelligence systems that can create new content—text, images, audio, video, or code—rather than just analyzing or classifying existing content.',
    fullDefinition: `
Generative AI refers to artificial intelligence systems that create new content—text, images, music, video, code, and more—rather than just analyzing or categorizing existing data.

## What Makes It "Generative"

Traditional AI analyzes and classifies:
- "This email is spam"
- "This image contains a dog"

Generative AI creates:
- Writes new emails
- Creates new images
- Composes music

## Types of Generative AI

### Text Generation
Creates written content: articles, emails, code, conversations.
- Examples: ChatGPT, Claude, Gemini

### Image Generation
Creates images from text descriptions.
- Examples: DALL-E, Midjourney, Stable Diffusion

### Audio Generation
Creates music, speech, or sound effects.
- Examples: Suno, ElevenLabs

### Video Generation
Creates video content from text or images.
- Examples: Sora, Runway

### Code Generation
Writes programming code from descriptions.
- Examples: GitHub Copilot, Cursor

## How It Works

Most generative AI uses:

1. **Training**: Learning from massive examples of the type of content to generate
2. **Patterns**: Extracting the underlying patterns and rules
3. **Generation**: Creating new content following those patterns
4. **Refinement**: Often using human feedback to improve quality

## Applications

- Content creation and marketing
- Design and creative work
- Software development
- Education and tutoring
- Research and analysis
- Entertainment and gaming

## Implications

Generative AI is transforming creative industries, raising questions about:
- Intellectual property and ownership
- Job displacement and creation
- Authenticity and trust
- Educational standards

The technology is evolving rapidly, with new capabilities emerging regularly.
    `,
    relatedTerms: ['Artificial Intelligence', 'Large Language Model', 'ChatGPT'],
    examples: ['ChatGPT (text)', 'DALL-E (images)', 'Sora (video)', 'GitHub Copilot (code)']
  },
  {
    slug: 'token',
    term: 'Token',
    shortDefinition: 'A unit of text that AI language models process—roughly equivalent to about 4 characters or 0.75 words in English. Tokens determine context limits and pricing.',
    fullDefinition: `
In the context of AI language models, a token is a unit of text that the model processes. Understanding tokens is essential for working with AI effectively and managing costs.

## What Is a Token?

A token is roughly:
- 4 characters of English text
- About 0.75 words
- Sometimes a whole word, sometimes a part of a word

The word "hamburger" might become two tokens: "ham" and "burger"
The phrase "I love AI" is 3 tokens

## Why Tokens Matter

### Context Windows
Every AI model has a maximum number of tokens it can process at once. This includes both your input and the model's output.

| Model | Context Window |
|-------|---------------|
| GPT-3.5 | 16K tokens (~12,000 words) |
| GPT-4 | 128K tokens (~96,000 words) |
| Claude | 200K tokens (~150,000 words) |

### Pricing
API usage is typically charged per token. Both input and output tokens count toward your bill.

### Response Limits
Longer prompts leave less room for responses. A very long input may result in truncated outputs.

## Token Counting

Different models tokenize text differently. A sentence that's 20 tokens in GPT-4 might be 22 tokens in another model.

Tools exist to count tokens before sending to an API, helping you stay within limits and estimate costs.

## Practical Implications

### For Users
- Very long conversations may hit limits
- Complex prompts consume tokens from response capacity
- Including unnecessary context wastes tokens

### For Developers
- Token limits affect application design
- Costs scale with token usage
- Efficient prompting saves money

## Tips

- Be concise without sacrificing clarity
- Remove redundant examples and context
- Use summaries instead of full documents when possible
- Monitor token usage for cost management
    `,
    relatedTerms: ['Large Language Model', 'ChatGPT', 'Prompt Engineering'],
    examples: ['Context window limits', 'API pricing', 'Message length limits']
  },
  {
    slug: 'hallucination',
    term: 'Hallucination',
    shortDefinition: 'When an AI generates information that sounds plausible but is actually incorrect, fabricated, or nonsensical—stating false facts with apparent confidence.',
    fullDefinition: `
In AI, hallucination refers to when a model generates plausible-sounding but incorrect or fabricated information. The AI presents false claims with the same confidence as true ones.

## Why AI Hallucinates

AI language models don't actually "know" facts—they predict likely text based on patterns. When the patterns suggest something plausible, the AI may generate it even if it's false.

### Common Types of Hallucinations

**Fabricated facts**: Inventing statistics, dates, or events
- "The Eiffel Tower was built in 1852" (actually 1889)

**Made-up sources**: Creating citations for non-existent papers
- "According to Johnson et al. (2019)..." (paper doesn't exist)

**Confident errors**: Providing wrong answers with certainty
- Giving incorrect code that looks correct

**Invented details**: Adding false specifics to general information
- Including fictional features in product descriptions

## Why This Happens

1. **Training limitations**: Models learn patterns, not truth
2. **No fact database**: There's no internal database being consulted
3. **Optimization for fluency**: Models are trained to generate coherent text
4. **Missing data**: When information is lacking, models fill gaps

## How to Protect Yourself

### Verification
Always check important facts against reliable sources.

### Ask for sources
Request citations, then verify they exist.

### Watch for warning signs
Very specific statistics, obscure references, or answers that perfectly fit your question can indicate hallucinations.

### Use appropriate tools
For current information, use AI with internet access or dedicated search tools.

## Reducing Hallucinations

Some strategies that help:
- Ask the AI to express uncertainty
- Request step-by-step reasoning
- Use retrieval-augmented generation (RAG) systems
- Cross-check with multiple sources

## The Bottom Line

Hallucination is a fundamental limitation of current AI. Models are getting better, but no model is hallucination-free. Critical thinking remains essential when using AI-generated information.
    `,
    relatedTerms: ['Large Language Model', 'ChatGPT', 'Artificial Intelligence'],
    examples: ['Fabricated citations', 'Incorrect statistics', 'Made-up historical facts', 'Non-existent sources']
  }
];

export function getGlossaryTerm(slug: string): GlossaryTerm | undefined {
  return glossaryTerms.find(term => term.slug === slug);
}

export function getAllGlossaryTermSlugs(): string[] {
  return glossaryTerms.map(term => term.slug);
}
