export interface Prompt {
  id: string;
  title: string;
  description: string;
  category: string;
  prompt: string;
  variables?: string[];
  tips?: string;
}

export const prompts: Prompt[] = [
  // Writing
  {
    id: 'email-professional',
    title: 'Professional Email Writer',
    description: 'Generate well-structured professional emails for any business situation',
    category: 'Writing',
    prompt: `Write a professional email with the following details:

Purpose: [PURPOSE - e.g., follow-up after meeting, request for information, project update]
Recipient: [RECIPIENT - e.g., client, manager, colleague]
Key Points to Include: [KEY POINTS]
Tone: [TONE - e.g., formal, friendly professional, urgent]

Guidelines:
- Keep it concise (under 150 words)
- Include a clear subject line suggestion
- Use appropriate greeting and sign-off
- Include a specific call-to-action`,
    variables: ['PURPOSE', 'RECIPIENT', 'KEY POINTS', 'TONE'],
    tips: 'Be specific about the relationship with the recipient and the desired outcome.'
  },
  {
    id: 'linkedin-post',
    title: 'LinkedIn Post Generator',
    description: 'Create engaging LinkedIn posts that drive engagement',
    category: 'Writing',
    prompt: `Create a LinkedIn post about [TOPIC].

Requirements:
- Start with a compelling hook (first line is crucial for visibility)
- Include personal insight or experience
- Provide value to readers (tips, lessons, or insights)
- End with a question or call-to-action to encourage comments
- Use line breaks for readability
- Include 3-5 relevant hashtags

Tone: Professional but personable
Length: 150-200 words`,
    variables: ['TOPIC'],
    tips: 'The first line appears in the preview—make it count!'
  },
  {
    id: 'blog-outline',
    title: 'Blog Post Outline',
    description: 'Generate comprehensive outlines for blog posts',
    category: 'Writing',
    prompt: `Create a detailed outline for a blog post titled "[TITLE]".

Target audience: [AUDIENCE]
Goal of the post: [GOAL - inform, persuade, entertain, etc.]

Include:
1. An engaging introduction approach
2. 4-6 main sections with subpoints
3. Key takeaways or action items
4. Conclusion strategy
5. SEO keywords to include naturally
6. Suggested meta description (under 160 characters)

Format as a structured outline I can easily follow when writing.`,
    variables: ['TITLE', 'AUDIENCE', 'GOAL'],
    tips: 'More specific goals lead to more focused outlines.'
  },
  // Productivity
  {
    id: 'meeting-summary',
    title: 'Meeting Summary Generator',
    description: 'Turn meeting notes into professional summaries',
    category: 'Productivity',
    prompt: `Convert the following meeting notes into a clear summary:

Meeting Notes:
[PASTE NOTES HERE]

Create a summary including:
1. Meeting Overview (date, participants, purpose - 1-2 sentences)
2. Key Discussion Points (bullet points)
3. Decisions Made (clearly stated)
4. Action Items (with owners and deadlines if available)
5. Next Steps

Format for easy sharing via email. Keep it under 250 words.`,
    variables: ['PASTE NOTES HERE'],
    tips: 'Even rough, messy notes work—the AI will organize them.'
  },
  {
    id: 'task-prioritization',
    title: 'Task Prioritization Helper',
    description: 'Get help organizing and prioritizing your tasks',
    category: 'Productivity',
    prompt: `Help me prioritize these tasks:

[LIST YOUR TASKS]

For each task, consider:
- Urgency (deadline proximity)
- Importance (impact if not done)
- Effort required (time/energy)
- Dependencies (what needs to happen first)

Provide:
1. A prioritized list with recommended order
2. Reasoning for the top 3 priorities
3. Tasks that could be delegated or eliminated
4. Suggested time blocks for tackling them

My available time today: [HOURS AVAILABLE]`,
    variables: ['LIST YOUR TASKS', 'HOURS AVAILABLE'],
    tips: 'Include deadlines and context for better prioritization.'
  },
  // Learning
  {
    id: 'explain-concept',
    title: 'Concept Explainer',
    description: 'Get clear explanations of complex topics at your level',
    category: 'Learning',
    prompt: `Explain [CONCEPT] to me.

My background: [YOUR KNOWLEDGE LEVEL - e.g., complete beginner, know basics, some experience]

Please:
1. Start with a one-sentence simple definition
2. Provide a relatable analogy
3. Explain how it works in 3-4 key points
4. Give a practical example
5. List common misconceptions to avoid
6. Suggest what to learn next

Use simple language and avoid jargon unless you explain it.`,
    variables: ['CONCEPT', 'YOUR KNOWLEDGE LEVEL'],
    tips: 'Being honest about your current level helps get appropriately pitched explanations.'
  },
  {
    id: 'study-flashcards',
    title: 'Flashcard Generator',
    description: 'Create effective study flashcards from any material',
    category: 'Learning',
    prompt: `Create 10 flashcards from the following material:

[PASTE CONTENT OR DESCRIBE TOPIC]

Format each as:
Q: [Question that tests understanding, not just recall]
A: [Concise answer - 1-2 sentences max]

Guidelines:
- Focus on key concepts and relationships
- Include "why" and "how" questions, not just "what"
- Vary question types (definition, application, comparison)
- Make answers memorable and clear`,
    variables: ['PASTE CONTENT OR DESCRIBE TOPIC'],
    tips: 'Works great with textbook chapters, lecture notes, or article summaries.'
  },
  // Analysis
  {
    id: 'pros-cons',
    title: 'Decision Analysis (Pros/Cons)',
    description: 'Get balanced analysis for decision-making',
    category: 'Analysis',
    prompt: `Help me analyze this decision: [DECISION]

Context: [RELEVANT CONTEXT - timeline, constraints, stakeholders]

Provide:
1. 5 Pros (with brief explanation for each)
2. 5 Cons (with brief explanation for each)
3. Key questions I should answer before deciding
4. Potential compromises or alternatives
5. Recommendation based on the analysis

Be balanced—don't favor either option unless the evidence is clear.`,
    variables: ['DECISION', 'RELEVANT CONTEXT'],
    tips: 'Include your constraints and what matters most to you for tailored analysis.'
  },
  {
    id: 'document-summary',
    title: 'Document Summarizer',
    description: 'Get quick summaries of long documents',
    category: 'Analysis',
    prompt: `Summarize the following document:

[PASTE DOCUMENT]

Provide:
1. TL;DR (1-2 sentences capturing the main point)
2. Key Points (5-7 bullet points)
3. Important Details (anything crucial not in key points)
4. Action Items (if any are mentioned or implied)
5. Questions this raises (gaps or areas needing clarification)

Summary length: [SHORT (~100 words) / MEDIUM (~200 words) / DETAILED (~400 words)]`,
    variables: ['PASTE DOCUMENT', 'SHORT / MEDIUM / DETAILED'],
    tips: 'Works for reports, articles, emails—anything text-based.'
  },
  // Coding
  {
    id: 'code-review',
    title: 'Code Review Assistant',
    description: 'Get a thorough review of your code',
    category: 'Coding',
    prompt: `Review this code:

\`\`\`[LANGUAGE]
[PASTE CODE]
\`\`\`

Analyze for:
1. Bugs or logical errors
2. Security vulnerabilities
3. Performance issues
4. Code style and readability
5. Best practice violations

For each issue found:
- Describe the problem
- Explain why it matters
- Provide the corrected code

Also suggest any general improvements.`,
    variables: ['LANGUAGE', 'PASTE CODE'],
    tips: 'Mention the context (production code, learning project, etc.) for appropriate feedback.'
  }
];

export function getPromptsByCategory(): Record<string, Prompt[]> {
  return prompts.reduce((acc, prompt) => {
    if (!acc[prompt.category]) {
      acc[prompt.category] = [];
    }
    acc[prompt.category].push(prompt);
    return acc;
  }, {} as Record<string, Prompt[]>);
}

export function getPrompt(id: string): Prompt | undefined {
  return prompts.find(p => p.id === id);
}
