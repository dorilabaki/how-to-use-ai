import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

const LEADS_FILE = path.join(process.cwd(), 'src', 'data', 'leads.json');

interface Lead {
  email: string;
  source: string;
  createdAt: string;
}

async function readLeads(): Promise<Lead[]> {
  try {
    const data = await fs.readFile(LEADS_FILE, 'utf-8');
    return JSON.parse(data) as Lead[];
  } catch {
    return [];
  }
}

async function writeLeads(leads: Lead[]): Promise<void> {
  await fs.writeFile(LEADS_FILE, JSON.stringify(leads, null, 2), 'utf-8');
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: NextRequest) {
  let body: { email?: string; source?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
  }

  const email = (body.email ?? '').trim().toLowerCase();

  if (!email || !isValidEmail(email)) {
    return NextResponse.json({ error: 'A valid email address is required' }, { status: 400 });
  }

  const leads = await readLeads();

  if (leads.some((lead) => lead.email === email)) {
    return NextResponse.json({ error: 'This email is already signed up' }, { status: 409 });
  }

  const newLead: Lead = {
    email,
    source: body.source ?? 'starter-kit',
    createdAt: new Date().toISOString(),
  };

  leads.push(newLead);
  await writeLeads(leads);

  return NextResponse.json({ success: true }, { status: 201 });
}
