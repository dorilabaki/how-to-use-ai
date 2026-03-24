#!/usr/bin/env python3
"""Generate the AI Starter Kit PDF lead magnet for howdoiuse.ai"""

from reportlab.lib.pagesizes import letter
from reportlab.lib.units import inch
from reportlab.lib.colors import HexColor, white, black
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, PageBreak,
    Table, TableStyle, HRFlowable, KeepTogether
)
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_LEFT, TA_CENTER, TA_RIGHT
from reportlab.platypus.flowables import Flowable
from reportlab.pdfgen import canvas as pdfcanvas
from reportlab.lib import colors
import os

# ── Palette ──────────────────────────────────────────────────────────────────
TEAL        = HexColor("#0EA5E9")   # sky-500
TEAL_DARK   = HexColor("#0369A1")   # sky-700
TEAL_LIGHT  = HexColor("#E0F2FE")   # sky-100
TEAL_MID    = HexColor("#38BDF8")   # sky-400
CYAN_ACCENT = HexColor("#06B6D4")   # cyan-500
DARK_BG     = HexColor("#0F172A")   # slate-900
MID_BG      = HexColor("#1E293B")   # slate-800
CARD_BG     = HexColor("#F8FAFC")   # slate-50
BORDER      = HexColor("#E2E8F0")   # slate-200
TEXT_MAIN   = HexColor("#0F172A")   # slate-900
TEXT_MUTED  = HexColor("#64748B")   # slate-500
TEXT_LIGHT  = HexColor("#94A3B8")   # slate-400
ORANGE_ACC  = HexColor("#F97316")   # orange-500
GREEN_ACC   = HexColor("#10B981")   # emerald-500
PURPLE_ACC  = HexColor("#8B5CF6")   # violet-500
PINK_ACC    = HexColor("#EC4899")   # pink-500
YELLOW_ACC  = HexColor("#F59E0B")   # amber-500

PAGE_W, PAGE_H = letter
MARGIN = 0.65 * inch

# ── Canvas callbacks ──────────────────────────────────────────────────────────

def cover_background(canvas, doc):
    """Full-bleed dark gradient cover."""
    canvas.saveState()
    canvas.setFillColor(DARK_BG)
    canvas.rect(0, 0, PAGE_W, PAGE_H, fill=1, stroke=0)

    # Decorative circles
    canvas.setFillColor(HexColor("#0EA5E920"))
    canvas.circle(PAGE_W * 0.85, PAGE_H * 0.75, 160, fill=1, stroke=0)
    canvas.setFillColor(HexColor("#06B6D415"))
    canvas.circle(PAGE_W * 0.1, PAGE_H * 0.2, 120, fill=1, stroke=0)
    canvas.setFillColor(HexColor("#38BDF810"))
    canvas.circle(PAGE_W * 0.5, PAGE_H * 0.05, 80, fill=1, stroke=0)

    # Top accent bar
    canvas.setFillColor(TEAL)
    canvas.rect(0, PAGE_H - 6, PAGE_W, 6, fill=1, stroke=0)

    canvas.restoreState()


def inner_background(canvas, doc):
    """Clean white inner pages with subtle header bar."""
    canvas.saveState()
    canvas.setFillColor(white)
    canvas.rect(0, 0, PAGE_W, PAGE_H, fill=1, stroke=0)

    # Top bar
    canvas.setFillColor(DARK_BG)
    canvas.rect(0, PAGE_H - 40, PAGE_W, 40, fill=1, stroke=0)

    # Brand name in header
    canvas.setFillColor(TEAL_MID)
    canvas.setFont("Helvetica-Bold", 9)
    canvas.drawString(MARGIN, PAGE_H - 26, "HOW DO I USE AI")
    canvas.setFillColor(HexColor("#94A3B8"))
    canvas.setFont("Helvetica", 8)
    canvas.drawRightString(PAGE_W - MARGIN, PAGE_H - 26, "howdoiuse.ai")

    # Footer
    canvas.setFillColor(CARD_BG)
    canvas.rect(0, 0, PAGE_W, 36, fill=1, stroke=0)
    canvas.setFillColor(TEXT_MUTED)
    canvas.setFont("Helvetica", 7.5)
    canvas.drawString(MARGIN, 14, "The AI Starter Kit  •  50 Ready-to-Use Prompts for Work & Life")
    canvas.drawRightString(PAGE_W - MARGIN, 14, f"howdoiuse.ai")

    # Bottom accent line
    canvas.setFillColor(TEAL)
    canvas.rect(0, 36, PAGE_W, 2, fill=1, stroke=0)

    canvas.restoreState()


def back_background(canvas, doc):
    """Dark back cover."""
    canvas.saveState()
    canvas.setFillColor(DARK_BG)
    canvas.rect(0, 0, PAGE_W, PAGE_H, fill=1, stroke=0)
    canvas.setFillColor(HexColor("#0EA5E912"))
    canvas.circle(PAGE_W * 0.15, PAGE_H * 0.8, 130, fill=1, stroke=0)
    canvas.setFillColor(HexColor("#06B6D410"))
    canvas.circle(PAGE_W * 0.9, PAGE_H * 0.25, 100, fill=1, stroke=0)
    canvas.setFillColor(TEAL)
    canvas.rect(0, PAGE_H - 6, PAGE_W, 6, fill=1, stroke=0)
    canvas.restoreState()


# ── Custom Flowables ──────────────────────────────────────────────────────────

class ColorRect(Flowable):
    """A filled rectangle used as a section accent."""
    def __init__(self, width, height, color, radius=4):
        super().__init__()
        self.width = width
        self.height = height
        self.color = color
        self.radius = radius

    def draw(self):
        self.canv.setFillColor(self.color)
        self.canv.roundRect(0, 0, self.width, self.height,
                            self.radius, fill=1, stroke=0)


class HRule(Flowable):
    def __init__(self, width, color=BORDER, thickness=1):
        super().__init__()
        self.width = width
        self.color = color
        self.thickness = thickness

    def draw(self):
        self.canv.setStrokeColor(self.color)
        self.canv.setLineWidth(self.thickness)
        self.canv.line(0, 0, self.width, 0)


# ── Style helpers ─────────────────────────────────────────────────────────────

def make_styles():
    base = getSampleStyleSheet()

    def add(name, **kw):
        base.add(ParagraphStyle(name=name, **kw))

    # Cover
    add("CoverTag",   fontName="Helvetica-Bold", fontSize=10,
        textColor=TEAL_MID, alignment=TA_CENTER, spaceAfter=10)
    add("CoverTitle", fontName="Helvetica-Bold", fontSize=38,
        textColor=white, alignment=TA_CENTER, leading=46, spaceAfter=6)
    add("CoverColon", fontName="Helvetica-Bold", fontSize=38,
        textColor=TEAL, alignment=TA_CENTER, leading=46, spaceAfter=6)
    add("CoverSub",   fontName="Helvetica", fontSize=17,
        textColor=HexColor("#CBD5E1"), alignment=TA_CENTER,
        leading=24, spaceAfter=32)
    add("CoverBadge", fontName="Helvetica-Bold", fontSize=12,
        textColor=DARK_BG, alignment=TA_CENTER)
    add("CoverMeta",  fontName="Helvetica", fontSize=11,
        textColor=HexColor("#94A3B8"), alignment=TA_CENTER, spaceAfter=4)
    add("CoverURL",   fontName="Helvetica-Bold", fontSize=13,
        textColor=TEAL_MID, alignment=TA_CENTER)

    # Section header
    add("SectionTag", fontName="Helvetica-Bold", fontSize=8.5,
        textColor=white, alignment=TA_LEFT, spaceAfter=2)
    add("SectionTitle", fontName="Helvetica-Bold", fontSize=20,
        textColor=TEXT_MAIN, leading=26, spaceAfter=4)
    add("SectionDesc", fontName="Helvetica", fontSize=10,
        textColor=TEXT_MUTED, leading=15, spaceAfter=14)

    # Prompt card
    add("PromptNum",  fontName="Helvetica-Bold", fontSize=9,
        textColor=white, leading=12)
    add("PromptTitle", fontName="Helvetica-Bold", fontSize=10.5,
        textColor=TEXT_MAIN, leading=14, spaceAfter=3)
    add("PromptBody", fontName="Helvetica", fontSize=8.8,
        textColor=HexColor("#334155"), leading=13.5, spaceAfter=0)
    add("PromptTip",  fontName="Helvetica-Oblique", fontSize=8,
        textColor=TEXT_MUTED, leading=12)

    # Back cover
    add("BackTag",    fontName="Helvetica-Bold", fontSize=10,
        textColor=TEAL_MID, alignment=TA_CENTER, spaceAfter=8)
    add("BackTitle",  fontName="Helvetica-Bold", fontSize=30,
        textColor=white, alignment=TA_CENTER, leading=38, spaceAfter=10)
    add("BackBody",   fontName="Helvetica", fontSize=12,
        textColor=HexColor("#CBD5E1"), alignment=TA_CENTER,
        leading=20, spaceAfter=24)
    add("BackURL",    fontName="Helvetica-Bold", fontSize=16,
        textColor=TEAL_MID, alignment=TA_CENTER, spaceAfter=6)
    add("BackSmall",  fontName="Helvetica", fontSize=10,
        textColor=HexColor("#64748B"), alignment=TA_CENTER)
    add("BackCTA",    fontName="Helvetica-Bold", fontSize=13,
        textColor=DARK_BG, alignment=TA_CENTER)

    return base


# ── Data ──────────────────────────────────────────────────────────────────────

SECTIONS = [
    {
        "label": "SECTION 01",
        "color": TEAL,
        "title": "Writing & Communication",
        "icon": "✉",
        "desc": (
            "Save hours every week with these plug-and-play prompts for "
            "emails, meeting notes, reports, and more."
        ),
        "prompts": [
            ("Professional Email Draft",
             'Write a professional email to [RECIPIENT NAME/ROLE] regarding [TOPIC]. '
             'The tone should be [formal/friendly/assertive]. My key points are: [POINT 1], '
             '[POINT 2], [POINT 3]. End with a clear call to action asking them to [DESIRED ACTION]. '
             'Keep it under 150 words.',
             "Replace [PLACEHOLDERS] before sending — then fine-tune the tone."),
            ("Meeting Summary",
             'Here are my raw notes from a meeting about [MEETING TOPIC]: [PASTE NOTES]. '
             'Create a structured meeting summary with: (1) Key decisions made, (2) Action items '
             'with owners and deadlines, (3) Open questions that need follow-up. Format as bullet points.',
             "Paste messy notes directly — AI is great at extracting structure."),
            ("Executive Report",
             'Write a [LENGTH]-page executive summary on [TOPIC] for an audience of [AUDIENCE]. '
             'Include: an overview, key findings, business impact, and recommended next steps. '
             'Use data-driven language. Base it on this information: [CONTEXT/DATA].',
             "Ideal for status updates, board decks, or leadership briefings."),
            ("Difficult Conversation Script",
             'Help me prepare for a difficult conversation where I need to [SITUATION, e.g., give '
             'critical feedback to / decline a request from / address a conflict with] [PERSON/ROLE]. '
             'My main concern is [CONCERN]. Draft 3 ways to open the conversation that are direct '
             'but respectful.',
             "Practice the script out loud before the real conversation."),
            ("LinkedIn Post",
             'Write a LinkedIn post about [TOPIC/EXPERIENCE/ACHIEVEMENT]. My audience is '
             '[TARGET AUDIENCE]. The tone should be [professional/personal/inspiring]. '
             'Include a hook opening line, 2-3 key insights or takeaways, and end with a '
             'question to encourage comments. Use short paragraphs and no hashtag spam.',
             "Great for thought leadership and staying visible to your network."),
            ("Proposal / Pitch",
             'Write a compelling proposal for [PROJECT/SERVICE/IDEA] targeted at [CLIENT/AUDIENCE]. '
             'Include: the problem we solve, our proposed solution, key benefits, timeline, and a '
             'clear next step. Our unique advantage is [YOUR DIFFERENTIATOR]. Keep it persuasive '
             'and under [WORD COUNT] words.',
             "Customize with real numbers and client-specific pain points."),
            ("Newsletter Issue",
             'Write a newsletter issue for my audience of [AUDIENCE DESCRIPTION]. This week\'s '
             'theme is [THEME]. Include: an engaging opener (2-3 sentences), the main insight or '
             'story (150 words), 3 actionable tips, and a closing CTA to [ACTION]. '
             'Tone: [conversational/expert/motivating].',
             "Consistency matters more than perfection — use AI to show up weekly."),
            ("Feedback Response",
             'I received this feedback: "[PASTE FEEDBACK]". Help me write a professional response '
             'that: (1) acknowledges the feedback genuinely, (2) addresses each point specifically, '
             '(3) outlines what I will do differently going forward. Tone: constructive and open.',
             "Turn feedback loops into growth opportunities."),
            ("Apology or Correction Email",
             'Write an apology email to [RECIPIENT] about [MISTAKE/SITUATION]. '
             'Acknowledge what happened, take responsibility without over-explaining, '
             'explain what steps are being taken to fix it, and reassure them it won\'t '
             'happen again. Keep it brief, sincere, and professional.',
             "Own the mistake fully — partial apologies lose trust faster."),
            ("Job Application Cover Letter",
             'Write a cover letter for a [JOB TITLE] position at [COMPANY NAME]. '
             'My background: [BRIEF BACKGROUND]. Key skills relevant to this role: [SKILL 1], '
             '[SKILL 2], [SKILL 3]. The job requires [KEY REQUIREMENT]. '
             'Explain why I\'m excited about this company specifically and keep it under 300 words.',
             "Tailor the company section with real research — it makes a difference."),
        ],
    },
    {
        "label": "SECTION 02",
        "color": CYAN_ACCENT,
        "title": "Analysis & Research",
        "icon": "🔍",
        "desc": (
            "Turn raw data and information overload into clear insights "
            "with these research and analysis prompts."
        ),
        "prompts": [
            ("Competitive Analysis",
             'Analyze the competitive landscape for [YOUR PRODUCT/SERVICE] in the [INDUSTRY] market. '
             'Compare [COMPETITOR 1], [COMPETITOR 2], and [COMPETITOR 3] across: pricing, key features, '
             'target audience, strengths, and weaknesses. Identify gaps in the market and suggest '
             'how we could differentiate.',
             "Feed it competitor website copy and pricing pages for richer output."),
            ("Data Interpretation",
             'Here is a dataset / these are my results: [PASTE DATA OR SUMMARY]. '
             'Analyze this data and tell me: (1) The 3 most important trends or patterns, '
             '(2) Any anomalies or outliers I should investigate, (3) What this data suggests '
             'for [BUSINESS DECISION / STRATEGY]. Explain in plain language.',
             "Works with spreadsheet summaries, survey results, or metrics."),
            ("Long Document Summary",
             'Summarize the following [DOCUMENT TYPE, e.g., report/article/contract] in 3 levels: '
             '(1) A 2-sentence TL;DR, (2) A 5-bullet executive summary, (3) A detailed 200-word '
             'summary with key facts and figures. Here is the document: [PASTE DOCUMENT].',
             "Use this for research papers, legal docs, or lengthy reports."),
            ("SWOT Analysis",
             'Conduct a detailed SWOT analysis for [COMPANY/PRODUCT/IDEA]. '
             'Strengths: focus on internal advantages. Weaknesses: honest internal gaps. '
             'Opportunities: external trends we can leverage. Threats: external risks. '
             'For each quadrant, list 4-5 specific, actionable points. Context: [BACKGROUND INFO].',
             "Honest weaknesses make the SWOT most valuable — don't skip them."),
            ("Research Synthesis",
             'I\'m researching [TOPIC] and have gathered the following sources/information: '
             '[PASTE INFORMATION]. Synthesize the key findings into: main conclusions, '
             'points of agreement across sources, conflicting views, and the most credible '
             'takeaway. Cite which source supports each claim.',
             "Great for literature reviews, due diligence, or topic research."),
            ("Root Cause Analysis",
             'We experienced [PROBLEM/INCIDENT] on [DATE]. Impact: [DESCRIBE IMPACT]. '
             'Known contributing factors: [FACTOR 1], [FACTOR 2]. Using the 5 Whys method, '
             'help identify the root cause and suggest 3 preventive actions to ensure '
             'this does not recur.',
             "Use this after incidents, project failures, or recurring issues."),
            ("Market Sizing",
             'Help me estimate the market size for [PRODUCT/SERVICE] targeting [TARGET CUSTOMER] '
             'in [GEOGRAPHY/MARKET]. Use a bottom-up approach: start with the total addressable '
             'market (TAM), then serviceable addressable market (SAM), then the realistic '
             'serviceable obtainable market (SOM). State your assumptions clearly.',
             "Useful for pitches, business cases, and strategic planning."),
            ("Risk Assessment",
             'List the top 10 risks for [PROJECT/DECISION/INITIATIVE]. For each risk, rate: '
             'likelihood (1-5), impact (1-5), and provide a mitigation strategy. '
             'Prioritize by overall risk score (likelihood × impact). '
             'Context: [BRIEF DESCRIPTION OF THE INITIATIVE].',
             "Add your own domain knowledge to refine the AI\'s initial list."),
            ("Pros & Cons Deep Dive",
             'I\'m deciding whether to [DECISION, e.g., switch vendors / hire a contractor / '
             'launch a new product]. Give me a thorough pros and cons analysis. '
             'For each pro and con, rate its importance (High/Medium/Low) and explain why. '
             'Then give a final recommendation based on [MY PRIORITY: cost / speed / quality / risk].',
             "Forcing a recommendation reveals the clearest trade-offs."),
            ("Survey / Interview Analysis",
             'I conducted [NUMBER] interviews/surveys about [TOPIC]. Here are the key responses: '
             '[PASTE RESPONSES]. Identify: (1) The top 5 themes or patterns, (2) Surprising or '
             'unexpected findings, (3) Verbatim quotes that best represent the overall sentiment, '
             '(4) Recommended actions based on these insights.',
             "Cluster qualitative responses fast with this prompt."),
        ],
    },
    {
        "label": "SECTION 03",
        "color": PURPLE_ACC,
        "title": "Creativity & Brainstorming",
        "icon": "💡",
        "desc": (
            "Defeat the blank page. Use these prompts to unlock fresh ideas "
            "for content, campaigns, products, and more."
        ),
        "prompts": [
            ("Content Ideas Burst",
             'Generate 20 content ideas for [PLATFORM, e.g., LinkedIn/YouTube/Blog] about [TOPIC]. '
             'My audience is [AUDIENCE DESCRIPTION]. Mix formats: how-to guides, opinion pieces, '
             'case studies, listicles, and personal stories. For each idea, write a punchy headline '
             'and one sentence explaining the angle.',
             "Pick 3-5 ideas and batch-create them in one session."),
            ("Marketing Copy Variations",
             'Write 5 different versions of marketing copy for [PRODUCT/SERVICE]. Each version '
             'should use a different emotional hook: (1) Fear of missing out, (2) Aspiration, '
             '(3) Social proof, (4) Curiosity, (5) Direct/logical. Target audience: [AUDIENCE]. '
             'Keep each under 50 words.',
             "A/B test these versions to find what resonates most."),
            ("Product / Feature Naming",
             'I need a name for [PRODUCT/FEATURE/SERVICE]. It should: [LIST CRITERIA, e.g., '
             'be memorable, sound premium, use alliteration, be easy to spell]. '
             'The target audience is [AUDIENCE]. Generate 15 name options with a 1-line '
             'explanation of each. Flag your top 3 recommendations.',
             "Criteria are key — vague briefs produce generic names."),
            ("Tagline Generator",
             'Create 10 taglines for [BRAND/PRODUCT/CAMPAIGN]. The brand personality is '
             '[DESCRIBE: bold/witty/trustworthy/inspiring]. The core value proposition is '
             '[WHAT YOU DO / SOLVE]. Each tagline should be under 8 words and be immediately '
             'memorable. Explain the idea behind each one.',
             "The best taglines pass the \"say it in the shower\" test."),
            ("Campaign Concept",
             'Ideate a marketing campaign concept for [PRODUCT/BRAND] targeting [AUDIENCE] '
             'with a budget of [BUDGET RANGE]. The campaign goal is [GOAL: awareness / leads / '
             'retention]. Include: a campaign theme/hook, 3 key messages, recommended channels, '
             'a hero piece of content, and 3 supporting content ideas.',
             "Use as a creative brief to brief your team or agency."),
            ("Brainstorm Objections",
             'I\'m about to launch / propose / pitch [IDEA/PRODUCT/INITIATIVE]. '
             'Brainstorm the 10 most likely objections from [AUDIENCE/STAKEHOLDERS]. '
             'For each objection, suggest a compelling response or reframe. '
             'Be brutally honest — include the toughest objections I might face.',
             "Preparing for objections in advance builds real confidence."),
            ("Workshop Agenda Designer",
             'Design a [DURATION]-hour workshop agenda on [TOPIC] for [NUMBER] participants '
             'from [AUDIENCE/DEPARTMENT]. Goals: [GOALS]. Include: time blocks, activity types '
             '(breakout/discussion/presentation), energizer moments, and desired outcomes for '
             'each section. Keep it engaging and avoid back-to-back presentations.',
             "Great for team offsites, training sessions, and strategy days."),
            ("Storytelling Framework",
             'Help me structure a story about [TOPIC/EXPERIENCE] using the [Hero\'s Journey / '
             'Problem-Solution-Result / Before-After-Bridge] framework. '
             'Key facts I want to include: [FACT 1], [FACT 2], [FACT 3]. '
             'Audience: [AUDIENCE]. Purpose: [INSPIRE / SELL / EDUCATE / ENTERTAIN].',
             "Stories with clear structure are 22x more memorable than facts alone."),
            ("Analogy Creator",
             'Explain [COMPLEX CONCEPT/PRODUCT/PROCESS] using 5 different analogies for '
             'a [AUDIENCE DESCRIPTION] who has no background in [FIELD]. '
             'Make each analogy vivid and relatable to everyday experiences. '
             'End with the analogy you think is most effective and explain why.',
             "Analogies are the fastest path to genuine understanding."),
            ("Social Proof Story",
             'Help me write a customer success story / case study for [CUSTOMER/PERSONA] '
             'who used [PRODUCT/SERVICE] to solve [PROBLEM]. '
             'Structure: (1) The situation before, (2) The challenge/frustration, '
             '(3) How they used our solution, (4) The measurable result. '
             'Use a compelling narrative style, 200-300 words.',
             "Include real numbers wherever possible — specificity builds trust."),
        ],
    },
    {
        "label": "SECTION 04",
        "color": GREEN_ACC,
        "title": "Productivity & Automation",
        "icon": "⚡",
        "desc": (
            "Work smarter, not harder. These prompts help you plan, "
            "document, and systematize your work so less falls through the cracks."
        ),
        "prompts": [
            ("Weekly Task Planner",
             'Help me plan my week. My top priorities are: [PRIORITY 1], [PRIORITY 2], [PRIORITY 3]. '
             'My recurring commitments are: [LIST MEETINGS/OBLIGATIONS]. I have [NUMBER] hours of '
             'deep work available. Create a day-by-day plan that protects my most important work, '
             'batches similar tasks, and includes buffer time for interruptions.',
             "Review and adjust the plan each Monday morning."),
            ("SOP / Process Documentation",
             'Write a standard operating procedure (SOP) for [PROCESS NAME]. '
             'The person doing this task is [ROLE]. Step me through the process in numbered steps. '
             'For each step include: what to do, why it matters, and any common mistakes to avoid. '
             'Here is how the process currently works: [DESCRIBE CURRENT PROCESS].',
             "Documented processes are the foundation of delegation and scale."),
            ("Decision-Making Framework",
             'I need to decide [DECISION]. The key stakeholders affected are [STAKEHOLDERS]. '
             'My constraints are [TIME / BUDGET / RESOURCES]. '
             'Apply the [RAPID / RACI / Eisenhower / Weighted Criteria] framework to help me '
             'structure this decision. Identify the 3 most important criteria and recommend '
             'a clear path forward.',
             "Use RACI for team decisions, Eisenhower for personal priority."),
            ("Goal Breakdown",
             'I want to achieve [BIG GOAL] by [DATE]. Break this down into: '
             '(1) 3-5 key milestones with target dates, (2) The critical path — what must happen '
             'first, (3) Potential blockers and how to prevent them, (4) Weekly actions I should '
             'take starting this week. Assume I can dedicate [HOURS PER WEEK] to this goal.',
             "Revisit this breakdown monthly and adjust as you learn."),
            ("Email Triage Rules",
             'I receive [NUMBER] emails per day. My role is [YOUR ROLE]. '
             'The types of emails I typically get: [LIST TYPES]. '
             'Create a set of inbox rules and a triage process I can follow in 30 minutes per day. '
             'Suggest which emails to: respond immediately, schedule time for, delegate, '
             'archive, or unsubscribe from. Include template phrases for common responses.',
             "Apply these rules every day for 2 weeks to build the habit."),
            ("Meeting Agenda Creator",
             'Create an agenda for a [DURATION]-minute meeting with [ATTENDEES/ROLES] '
             'about [MEETING TOPIC]. The desired outcome is [OUTCOME]. '
             'Include: time-boxed agenda items, the owner of each item, pre-read materials needed, '
             'and the key question we must answer before the meeting ends. '
             'Add one energizer for a meeting longer than 60 minutes.',
             "Send the agenda 24 hours in advance — it changes the whole dynamic."),
            ("Delegation Brief",
             'I need to delegate [TASK/PROJECT] to [PERSON/ROLE]. '
             'Write a delegation brief that includes: (1) What needs to be done and why it matters, '
             '(2) The definition of done / success criteria, (3) Constraints (budget, tools, '
             'timeline), (4) Check-in points, (5) How I\'d like to be updated. '
             'Tone: clear and empowering, not micromanaging.',
             "Good delegation briefs prevent most follow-up questions."),
            ("Automation Opportunity Finder",
             'Here is a repetitive process I do regularly: [DESCRIBE PROCESS IN DETAIL — '
             'steps, tools used, frequency, time taken]. Analyze this process and suggest: '
             '(1) Which steps can be fully automated, (2) Which can be partially automated, '
             '(3) Recommended tools or workflows (e.g., Zapier, Make, scripts), '
             '(4) Estimated time saved per week.',
             "Start with one automation — small wins build the habit."),
            ("Retrospective Facilitator",
             'Facilitate a team retrospective for [PROJECT/SPRINT/PERIOD]. '
             'We had [X] people involved. Key things that happened: [BRIEF SUMMARY]. '
             'Generate questions for three retrospective sections: '
             '(1) What went well? (2) What could be improved? (3) What will we commit to changing? '
             'Include 2-3 creative prompts to encourage honest, specific responses.',
             "Rotate retrospective formats to keep them fresh and useful."),
            ("Prompt Chain Designer",
             'I want to use AI to automate this multi-step workflow: [DESCRIBE WORKFLOW]. '
             'Break this into a chain of AI prompts where the output of one step feeds into the next. '
             'For each step, write: the prompt to use, the expected output format, and how to '
             'pass that output to the next step. Aim for [NUMBER] steps maximum.',
             "Prompt chains turn AI into a real productivity multiplier."),
        ],
    },
    {
        "label": "SECTION 05",
        "color": ORANGE_ACC,
        "title": "Learning & Career",
        "icon": "🚀",
        "desc": (
            "Accelerate your growth with AI as your personal tutor, "
            "career coach, and thinking partner."
        ),
        "prompts": [
            ("Concept Explainer",
             'Explain [CONCEPT/TOPIC] to me as if I\'m a [complete beginner / experienced '
             'professional in a different field / 10-year-old]. '
             'Use an analogy, a real-world example, and a brief history of where this concept '
             'came from. Then give me 3 follow-up questions I should explore to go deeper.',
             "Ask for the \"feynman technique\" version for maximum clarity."),
            ("Study Plan Creator",
             'Create a [DURATION, e.g., 4-week / 3-month] study plan for learning [SKILL/TOPIC]. '
             'I currently know: [CURRENT LEVEL]. My goal is to be able to [DESIRED OUTCOME]. '
             'I can dedicate [HOURS PER WEEK]. '
             'Include: weekly themes, specific resources (books, courses, practice), '
             'and milestones to measure progress.',
             "The best learning plans include regular practice, not just consumption."),
            ("Interview Preparation",
             'Prepare me for a [JOB TITLE] interview at a [COMPANY TYPE, e.g., startup/enterprise]. '
             'Generate: (1) 10 likely behavioral interview questions, (2) 5 technical or '
             'role-specific questions, (3) 3 questions I should ask the interviewer, '
             '(4) A 2-minute \"tell me about yourself\" answer framework tailored to my background: '
             '[PASTE YOUR BACKGROUND].',
             "Record yourself answering — playback reveals blind spots immediately."),
            ("Skill Gap Analysis",
             'I currently work as [CURRENT ROLE] and want to move to [TARGET ROLE] in [TIMEFRAME]. '
             'Current skills: [LIST YOUR SKILLS]. '
             'Analyze the gap between my current profile and the target role. '
             'List: (1) Critical skills I\'m missing, (2) Skills I have that transfer well, '
             '(3) A prioritized learning roadmap to bridge the gap.',
             "Use job listings for the target role to calibrate the gap analysis."),
            ("Mock Feedback Session",
             'Act as my [MANAGER / MENTOR / COACH] and give me honest, constructive feedback '
             'on this work I produced: [PASTE WORK SAMPLE]. '
             'Focus on: (1) What is strong and why, (2) Where I can improve with specific examples, '
             '(3) One skill I should prioritize developing based on what you see. '
             'Be direct — don\'t soften the feedback.',
             "The \"be direct\" instruction is critical to getting useful output."),
            ("Mental Model Application",
             'I\'m facing this situation: [DESCRIBE SITUATION]. '
             'Apply 3 different mental models to analyze it (e.g., first principles thinking, '
             'inversion, opportunity cost, second-order effects). '
             'For each mental model: explain it briefly, apply it to my situation, '
             'and state what insight or action it suggests.',
             "Mental models reveal blind spots you cannot see on your own."),
            ("Personal Brand Statement",
             'Help me craft my personal brand statement. My professional background: [BACKGROUND]. '
             'My unique strengths and values: [STRENGTHS]. '
             'My target audience (who I want to be known by): [AUDIENCE]. '
             'The problem I help people solve: [PROBLEM]. '
             'Write 3 versions: (1) A 1-sentence elevator pitch, (2) A 3-sentence bio, '
             '(3) A LinkedIn summary (100 words).',
             "Use all three — different contexts call for different lengths."),
            ("Book / Course Debrief",
             'I just finished reading/watching [BOOK/COURSE TITLE] by [AUTHOR/CREATOR]. '
             'Here are my notes and highlights: [PASTE NOTES]. '
             'Help me: (1) Identify the 5 most actionable ideas, (2) Create 3 specific '
             'experiments I can run in the next 30 days, (3) Suggest 2 related resources '
             'to go deeper on the most important theme.',
             "Learning compounds when linked to action — use this within 24 hours of finishing."),
            ("Negotiation Prep",
             'I\'m preparing to negotiate [SALARY / CONTRACT / PARTNERSHIP TERMS] with '
             '[PARTY]. My ask is [YOUR POSITION]. My minimum acceptable outcome is [WALKAWAY POINT]. '
             'Their likely position is [ESTIMATE]. '
             'Prepare: (1) My opening statement, (2) 3 ways to anchor high, '
             '(3) Likely pushback and my responses, (4) Potential trade-offs to offer.',
             "Know your walkaway point before you walk in — it removes anxiety."),
            ("Accountability Coach",
             'Act as my accountability coach for [GOAL]. I committed to [SPECIFIC COMMITMENT] '
             'by [DATE]. My progress so far: [UPDATE]. '
             'Ask me 5 coaching questions to help me reflect on my progress, identify what\'s '
             'getting in the way, and recommit to a specific action for the next [TIME PERIOD]. '
             'Be encouraging but hold me to my commitments.',
             "Regular check-ins — even with AI — dramatically improve follow-through."),
        ],
    },
]

# ── Page builders ─────────────────────────────────────────────────────────────

def build_cover(styles):
    elements = []

    elements.append(Spacer(1, 1.1 * inch))

    # Pill badge
    badge_data = [["  ✦  FREE RESOURCE  ✦  "]]
    badge = Table(badge_data, colWidths=[2.8 * inch])
    badge.setStyle(TableStyle([
        ("BACKGROUND",   (0, 0), (-1, -1), TEAL),
        ("TEXTCOLOR",    (0, 0), (-1, -1), white),
        ("FONTNAME",     (0, 0), (-1, -1), "Helvetica-Bold"),
        ("FONTSIZE",     (0, 0), (-1, -1), 9),
        ("ALIGN",        (0, 0), (-1, -1), "CENTER"),
        ("ROWPADDING",   (0, 0), (-1, -1), 7),
        ("ROUNDEDCORNERS", [12]),
    ]))
    elements.append(Table([[badge]], colWidths=[PAGE_W - 2 * MARGIN]))
    elements.append(Spacer(1, 0.28 * inch))

    elements.append(Paragraph("The AI Starter Kit", styles["CoverTitle"]))
    elements.append(Paragraph(
        '<font color="#0EA5E9">50 Ready-to-Use Prompts</font><br/>for Work &amp; Life',
        styles["CoverSub"]
    ))

    # Divider line
    div = Table([[""]], colWidths=[2 * inch])
    div.setStyle(TableStyle([
        ("LINEBELOW",  (0, 0), (-1, -1), 2, TEAL),
        ("ROWPADDING", (0, 0), (-1, -1), 0),
    ]))
    elements.append(Table([[div]], colWidths=[PAGE_W - 2 * MARGIN]))
    elements.append(Spacer(1, 0.28 * inch))

    # Category pills
    categories = [
        ("✉  Writing",    TEAL),
        ("🔍  Analysis",  CYAN_ACCENT),
        ("💡  Creativity", PURPLE_ACC),
        ("⚡  Productivity", GREEN_ACC),
        ("🚀  Career",    ORANGE_ACC),
    ]
    pill_data = [[]]
    pill_styles = [
        ("ALIGN",      (0, 0), (-1, -1), "CENTER"),
        ("VALIGN",     (0, 0), (-1, -1), "MIDDLE"),
        ("ROWPADDING", (0, 0), (-1, -1), 0),
        ("COLPADDING", (0, 0), (-1, -1), 4),
        ("BOX",        (0, 0), (-1, -1), 0, colors.transparent),
    ]
    col_w = (PAGE_W - 2 * MARGIN) / len(categories)
    for i, (label, color) in enumerate(categories):
        cell = Table([[label]], colWidths=[col_w - 12])
        hex6 = color.hexval().lstrip('#')
        cell.setStyle(TableStyle([
            ("BACKGROUND",   (0, 0), (-1, -1), HexColor(f"#{hex6}30")),
            ("TEXTCOLOR",    (0, 0), (-1, -1), color),
            ("FONTNAME",     (0, 0), (-1, -1), "Helvetica-Bold"),
            ("FONTSIZE",     (0, 0), (-1, -1), 8.5),
            ("ALIGN",        (0, 0), (-1, -1), "CENTER"),
            ("ROWPADDING",   (0, 0), (-1, -1), 7),
            ("ROUNDEDCORNERS", [8]),
        ]))
        pill_data[0].append(cell)

    pill_table = Table(pill_data, colWidths=[col_w] * len(categories))
    pill_table.setStyle(TableStyle([
        ("ALIGN",      (0, 0), (-1, -1), "CENTER"),
        ("VALIGN",     (0, 0), (-1, -1), "MIDDLE"),
        ("ROWPADDING", (0, 0), (-1, -1), 0),
        ("COLPADDING", (0, 0), (-1, -1), 3),
    ]))
    elements.append(pill_table)
    elements.append(Spacer(1, 0.5 * inch))

    # Brand block
    elements.append(Paragraph("From the community at", styles["CoverMeta"]))
    elements.append(Spacer(1, 0.06 * inch))
    elements.append(Paragraph(
        '<font color="#38BDF8" size="22"><b>How Do I Use AI</b></font>',
        ParagraphStyle("t", fontName="Helvetica-Bold", fontSize=22,
                       textColor=TEAL_MID, alignment=TA_CENTER)
    ))
    elements.append(Spacer(1, 0.06 * inch))
    elements.append(Paragraph("howdoiuse.ai", styles["CoverURL"]))
    elements.append(Spacer(1, 0.22 * inch))

    # Stats row
    stats = [
        ("102K+", "Community Members"),
        ("5 Topics", "Covered"),
        ("50", "Copy-Paste Prompts"),
    ]
    stat_cells = []
    for val, lbl in stats:
        inner = Table(
            [[Paragraph(f'<font size="22"><b>{val}</b></font>',
                        ParagraphStyle("sv", fontName="Helvetica-Bold",
                                       fontSize=22, textColor=white,
                                       alignment=TA_CENTER))],
             [Paragraph(lbl, ParagraphStyle("sl", fontName="Helvetica",
                                             fontSize=8.5,
                                             textColor=HexColor("#94A3B8"),
                                             alignment=TA_CENTER))]],
            colWidths=[1.6 * inch]
        )
        inner.setStyle(TableStyle([
            ("BACKGROUND",  (0, 0), (-1, -1), MID_BG),
            ("ROWPADDING",  (0, 0), (-1, -1), 10),
            ("ROUNDEDCORNERS", [10]),
        ]))
        stat_cells.append(inner)

    stats_table = Table([stat_cells],
                        colWidths=[(PAGE_W - 2 * MARGIN) / 3] * 3)
    stats_table.setStyle(TableStyle([
        ("ALIGN",      (0, 0), (-1, -1), "CENTER"),
        ("VALIGN",     (0, 0), (-1, -1), "MIDDLE"),
        ("COLPADDING", (0, 0), (-1, -1), 6),
    ]))
    elements.append(stats_table)

    return elements


def build_section_page(section, styles):
    elements = []
    color = section["color"]
    label = section["label"]
    title = section["title"]
    desc  = section["desc"]
    prompts = section["prompts"]

    # Section header block
    tag_data = [[Paragraph(label, styles["SectionTag"])]]
    tag_table = Table(tag_data, colWidths=[1.4 * inch])
    tag_table.setStyle(TableStyle([
        ("BACKGROUND",  (0, 0), (-1, -1), color),
        ("ROWPADDING",  (0, 0), (-1, -1), 5),
        ("COLPADDING",  (0, 0), (-1, -1), 8),
        ("ROUNDEDCORNERS", [4]),
    ]))
    elements.append(Spacer(1, 0.18 * inch))
    elements.append(tag_table)
    elements.append(Spacer(1, 0.1 * inch))
    elements.append(Paragraph(title, styles["SectionTitle"]))
    elements.append(Paragraph(desc, styles["SectionDesc"]))
    elements.append(HRule(PAGE_W - 2 * MARGIN, color, 2))
    elements.append(Spacer(1, 0.15 * inch))

    # Two-column prompt cards
    col_w = (PAGE_W - 2 * MARGIN - 0.15 * inch) / 2

    rows = []
    for i in range(0, len(prompts), 2):
        row_cells = []
        for j in range(2):
            if i + j < len(prompts):
                pnum, pbody, ptip = prompts[i + j]
                num_label = f"{i + j + 1:02d}"

                # Number badge
                num_badge = Table([[Paragraph(num_label, styles["PromptNum"])]],
                                  colWidths=[0.3 * inch])
                num_badge.setStyle(TableStyle([
                    ("BACKGROUND",  (0, 0), (-1, -1), color),
                    ("ROWPADDING",  (0, 0), (-1, -1), 4),
                    ("COLPADDING",  (0, 0), (-1, -1), 6),
                    ("ROUNDEDCORNERS", [6]),
                    ("ALIGN",       (0, 0), (-1, -1), "CENTER"),
                ]))

                title_p = Paragraph(pnum, styles["PromptTitle"])
                body_p  = Paragraph(pbody, styles["PromptBody"])
                tip_p   = Paragraph(f"<i>Tip: {ptip}</i>", styles["PromptTip"])

                card_inner = Table(
                    [[num_badge, title_p],
                     ["",        body_p],
                     ["",        tip_p]],
                    colWidths=[0.38 * inch, col_w - 0.58 * inch]
                )
                card_inner.setStyle(TableStyle([
                    ("VALIGN",     (0, 0), (-1, -1), "TOP"),
                    ("SPAN",       (1, 1), (1, 1)),
                    ("TOPPADDING", (0, 0), (-1, -1), 0),
                    ("BOTTOMPADDING", (0, 0), (-1, -1), 3),
                ]))

                card = Table([[card_inner]], colWidths=[col_w])
                card.setStyle(TableStyle([
                    ("BACKGROUND",    (0, 0), (-1, -1), CARD_BG),
                    ("BOX",           (0, 0), (-1, -1), 1, BORDER),
                    ("ROWPADDING",    (0, 0), (-1, -1), 8),
                    ("COLPADDING",    (0, 0), (-1, -1), 10),
                    ("ROUNDEDCORNERS", [6]),
                    ("LEFTPADDING",   (0, 0), (-1, -1), 10),
                    ("RIGHTPADDING",  (0, 0), (-1, -1), 10),
                    ("TOPPADDING",    (0, 0), (-1, -1), 10),
                    ("BOTTOMPADDING", (0, 0), (-1, -1), 10),
                ]))
                row_cells.append(card)
            else:
                row_cells.append("")

        row_table = Table([row_cells],
                          colWidths=[col_w, 0.15 * inch + col_w]
                          if len(row_cells) == 2 else [col_w])
        row_table.setStyle(TableStyle([
            ("COLPADDING",     (0, 0), (-1, -1), 0),
            ("RIGHTPADDING",   (0, 0), (0, 0),  7),
            ("LEFTPADDING",    (1, 0), (1, 0),  7),
            ("TOPPADDING",     (0, 0), (-1, -1), 0),
            ("BOTTOMPADDING",  (0, 0), (-1, -1), 0),
            ("VALIGN",         (0, 0), (-1, -1), "TOP"),
        ]))
        rows.append(row_table)
        rows.append(Spacer(1, 0.1 * inch))

    elements.extend(rows)
    return elements


def build_back(styles):
    elements = []
    elements.append(Spacer(1, 1.2 * inch))

    elements.append(Paragraph("READY FOR MORE?", styles["BackTag"]))
    elements.append(Spacer(1, 0.1 * inch))
    elements.append(Paragraph(
        "Join 102K+ People Learning<br/>to Use AI Every Day",
        styles["BackTitle"]
    ))
    elements.append(Spacer(1, 0.12 * inch))

    elements.append(Paragraph(
        "These 50 prompts are just the beginning. Discover new AI tools, "
        "workflows, and techniques every week — explained in plain English "
        "for real people with real work to do.",
        styles["BackBody"]
    ))

    # CTA button
    cta_data = [["  Visit howdoiuse.ai  "]]
    cta = Table(cta_data, colWidths=[3.0 * inch])
    cta.setStyle(TableStyle([
        ("BACKGROUND",   (0, 0), (-1, -1), TEAL),
        ("TEXTCOLOR",    (0, 0), (-1, -1), white),
        ("FONTNAME",     (0, 0), (-1, -1), "Helvetica-Bold"),
        ("FONTSIZE",     (0, 0), (-1, -1), 13),
        ("ALIGN",        (0, 0), (-1, -1), "CENTER"),
        ("ROWPADDING",   (0, 0), (-1, -1), 14),
        ("ROUNDEDCORNERS", [10]),
    ]))
    elements.append(Table([[cta]], colWidths=[PAGE_W - 2 * MARGIN]))
    elements.append(Spacer(1, 0.32 * inch))

    # Divider
    div = Table([[""]], colWidths=[3 * inch])
    div.setStyle(TableStyle([
        ("LINEABOVE",  (0, 0), (-1, -1), 1, HexColor("#334155")),
        ("ROWPADDING", (0, 0), (-1, -1), 0),
    ]))
    elements.append(Table([[div]], colWidths=[PAGE_W - 2 * MARGIN]))
    elements.append(Spacer(1, 0.28 * inch))

    # Social + community block
    elements.append(Paragraph(
        "Find us on LinkedIn", styles["BackBody"]
    ))

    community_data = [[
        Paragraph(
            '<font color="#38BDF8"><b>How Do I Use AI</b></font><br/>'
            '<font color="#64748B" size="9">102K+ Members  •  Free to Join</font>',
            ParagraphStyle("cl", fontName="Helvetica", fontSize=11,
                           textColor=white, alignment=TA_CENTER, leading=18)
        )
    ]]
    community = Table(community_data, colWidths=[3.6 * inch])
    community.setStyle(TableStyle([
        ("BACKGROUND",   (0, 0), (-1, -1), MID_BG),
        ("BOX",          (0, 0), (-1, -1), 1, HexColor("#334155")),
        ("ROWPADDING",   (0, 0), (-1, -1), 16),
        ("ROUNDEDCORNERS", [10]),
    ]))
    elements.append(Table([[community]], colWidths=[PAGE_W - 2 * MARGIN]))
    elements.append(Spacer(1, 0.5 * inch))

    elements.append(Paragraph(
        "© How Do I Use AI  •  howdoiuse.ai  •  Free to share with attribution",
        styles["BackSmall"]
    ))

    return elements


# ── Main ──────────────────────────────────────────────────────────────────────

def generate_pdf(output_path: str):
    styles = make_styles()

    # We'll build each "page" as its own list, then use a custom build
    # approach with per-page canvas callbacks.
    page_contents = []  # list of (elements, callback)

    page_contents.append((build_cover(styles), cover_background))
    for section in SECTIONS:
        page_contents.append((build_section_page(section, styles), inner_background))
    page_contents.append((build_back(styles), back_background))

    # Build using a multi-template approach with BaseDocTemplate
    from reportlab.platypus import BaseDocTemplate, Frame, PageTemplate

    def make_template(name, callback, margin=MARGIN):
        frame = Frame(margin, 50, PAGE_W - 2 * margin, PAGE_H - 50 - 44,
                      id="main", showBoundary=0)
        return PageTemplate(id=name, frames=[frame], onPage=callback)

    doc = BaseDocTemplate(
        output_path,
        pagesize=letter,
        leftMargin=MARGIN, rightMargin=MARGIN,
        topMargin=0.7 * inch, bottomMargin=0.7 * inch,
    )

    templates = []
    all_elements = []

    for idx, (elems, cb) in enumerate(page_contents):
        tname = f"page_{idx}"
        templates.append(make_template(tname, cb))
        if idx > 0:
            # Switch template then add content
            from reportlab.platypus import NextPageTemplate
            all_elements.append(NextPageTemplate(tname))
            all_elements.append(PageBreak())
        else:
            all_elements.append(NextPageTemplate(tname))
        all_elements.extend(elems)

    doc.addPageTemplates(templates)
    doc.build(all_elements)
    print(f"PDF saved to: {output_path}")


if __name__ == "__main__":
    out = "/Users/dorilabaki/PROJECTS/Ecosystem/websites/how-do-i-use-ai/public/ai-starter-kit.pdf"
    os.makedirs(os.path.dirname(out), exist_ok=True)
    generate_pdf(out)
