export interface FAQ {
  question: string;
  answer: string;
  category: string;
}

export const faqs: FAQ[] = [
  // Getting Started
  {
    category: 'Getting Started',
    question: 'What is ChatGPT and how do I start using it?',
    answer: 'ChatGPT is an AI chatbot by OpenAI that can have conversations, answer questions, and help with various tasks. To start: 1) Go to chat.openai.com 2) Create a free account 3) Type your first message. The free version uses GPT-3.5, while ChatGPT Plus ($20/month) gives access to GPT-4 with better capabilities.'
  },
  {
    category: 'Getting Started',
    question: 'Is ChatGPT free to use?',
    answer: 'Yes, ChatGPT has a free tier that uses GPT-3.5. For more advanced features, ChatGPT Plus costs $20/month and includes GPT-4, faster responses, and priority access during peak times. Many other AI tools like Claude and Gemini also offer free tiers.'
  },
  {
    category: 'Getting Started',
    question: 'What are the best AI tools for beginners?',
    answer: 'For beginners, we recommend: 1) ChatGPT for general assistance and learning 2) Claude for thoughtful conversations and document analysis 3) Gemini for research with current information 4) Grammarly for writing improvement 5) Canva for design with AI features. Start with one tool, learn it well, then expand.'
  },
  {
    category: 'Getting Started',
    question: 'How is AI different from regular software?',
    answer: 'Traditional software follows explicit rules programmed by developers—if X happens, do Y. AI systems learn patterns from data and can handle situations they weren\'t explicitly programmed for. This makes AI more flexible but also less predictable. AI excels at language, images, and pattern recognition but may make unexpected errors.'
  },
  {
    category: 'Getting Started',
    question: 'Do I need technical skills to use AI tools?',
    answer: 'No technical skills are required for most AI tools like ChatGPT or Claude. If you can type a message and read a response, you can use these tools. More advanced uses like API access or custom integrations do require programming knowledge, but consumer AI tools are designed to be accessible to everyone.'
  },
  // Using AI Effectively
  {
    category: 'Using AI Effectively',
    question: 'What is a prompt and how do I write a good one?',
    answer: 'A prompt is the text you type to an AI to get a response. Good prompts include: 1) Context about your situation 2) A clear task description 3) Output format requirements 4) Any constraints. Example: "I\'m a marketing manager. Write 3 LinkedIn posts about our new product launch. Keep each under 200 characters and use a professional tone."'
  },
  {
    category: 'Using AI Effectively',
    question: 'How can I get better responses from AI?',
    answer: 'To get better responses: 1) Be specific—vague prompts get vague answers 2) Provide context about your situation 3) Give examples of what you want 4) Specify the format (bullet points, table, etc.) 5) Iterate—follow up to refine responses 6) Assign a role like "Act as a teacher explaining to a beginner"'
  },
  {
    category: 'Using AI Effectively',
    question: 'What is prompt engineering?',
    answer: 'Prompt engineering is the practice of crafting effective inputs for AI to get better outputs. Key techniques include: role prompting (assigning AI a persona), few-shot learning (providing examples), chain-of-thought (asking for step-by-step reasoning), and structured outputs (specifying format). It\'s becoming an essential skill for working with AI.'
  },
  {
    category: 'Using AI Effectively',
    question: 'Can AI write my emails and documents?',
    answer: 'Yes, AI can draft emails, reports, and other documents. For best results: 1) Provide the context (who, what, why) 2) Specify the tone (formal, casual, friendly) 3) Include key points you want covered 4) Always review and edit—AI drafts are starting points, not finished products. Use AI to overcome blank page syndrome, then refine with your voice.'
  },
  {
    category: 'Using AI Effectively',
    question: 'How do I use AI for research?',
    answer: 'AI is great for research but requires verification. Use it to: 1) Understand topics quickly 2) Identify key questions to research 3) Summarize information 4) Generate outlines. Always verify facts through primary sources. Use tools with citations like Perplexity, and remember AI may have outdated information or make up sources.'
  },
  // AI Limitations and Safety
  {
    category: 'AI Limitations and Safety',
    question: 'Can I trust what AI tells me?',
    answer: 'Not blindly. AI can "hallucinate"—generating plausible-sounding but false information. Always verify important facts, especially statistics, quotes, and historical claims. AI is most reliable for well-established information and less reliable for recent events, niche topics, or claims requiring sources. Use it as a starting point, not a final authority.'
  },
  {
    category: 'AI Limitations and Safety',
    question: 'What are AI hallucinations?',
    answer: 'Hallucinations are when AI generates incorrect or fabricated information that sounds convincing. Examples include made-up statistics, fake citations, or wrong facts stated confidently. This happens because AI predicts likely text rather than consulting a fact database. To protect yourself: verify claims, ask for sources (then check them), and be skeptical of very specific details.'
  },
  {
    category: 'AI Limitations and Safety',
    question: 'Is it safe to share personal information with AI?',
    answer: 'Be cautious. Avoid sharing: social security numbers, passwords, financial details, confidential business information, personal health records, or private conversations. AI companies may use your conversations to train future models (though you can often opt out). For sensitive work, use enterprise versions with stronger privacy guarantees.'
  },
  {
    category: 'AI Limitations and Safety',
    question: 'What are AI\'s biggest limitations?',
    answer: 'Key limitations: 1) Hallucinations—making up facts 2) Knowledge cutoffs—not knowing recent events 3) No real-time information (without tools) 4) Can\'t learn from your conversations 5) May reflect biases from training data 6) Often makes math errors 7) Doesn\'t truly understand—it predicts likely text. Understanding these limitations is key to using AI effectively.'
  },
  {
    category: 'AI Limitations and Safety',
    question: 'Will AI replace my job?',
    answer: 'AI is more likely to transform jobs than replace them entirely. It excels at routine tasks, first drafts, and pattern recognition, but struggles with nuance, creativity, complex judgment, and novel situations. Focus on skills AI can\'t easily replicate: critical thinking, emotional intelligence, creativity, and strategic decision-making. Learn to work with AI as a tool to amplify your capabilities.'
  }
];

export function getFAQsByCategory(): Record<string, FAQ[]> {
  return faqs.reduce((acc, faq) => {
    if (!acc[faq.category]) {
      acc[faq.category] = [];
    }
    acc[faq.category].push(faq);
    return acc;
  }, {} as Record<string, FAQ[]>);
}

export function getAllFAQs(): FAQ[] {
  return faqs;
}
