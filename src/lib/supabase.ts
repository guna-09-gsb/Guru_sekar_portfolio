import { createClient } from '@supabase/supabase-js';
import type { Project, ContactMessage } from '../types';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

export const isSupabaseConfigured = Boolean(
  supabaseUrl &&
  supabaseAnonKey &&
  supabaseUrl.trim() !== '' &&
  supabaseAnonKey.trim() !== '' &&
  !supabaseUrl.includes('your-project') &&
  !supabaseAnonKey.includes('your-anon')
);

export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl!, supabaseAnonKey!)
  : null;

// High-fidelity fallback projects matching the prompt specifications
export const PLACEHOLDER_PROJECTS: Project[] = [
  {
    id: 'proj-1',
    slug: 'personal-portfolio',
    title: 'Personal Portfolio',
    description: 'A dark, minimal, high-performance portfolio built with React, TypeScript, and Tailwind CSS showcasing engineering projects and AI development workflows.',
    long_description: 'Designed and engineered from scratch with a deep navy and electric teal palette. Features dynamic project routing, Supabase integration with resilient client-side fallbacks, responsive typography, and zero-pill clean visual hierarchy.',
    image_url: '/src/assets/images/portfolio_preview_1794376693939.jpg',
    tech_stack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Supabase'],
    live_url: 'https://github.com/guna-09-gsb',
    github_url: 'https://github.com/guna-09-gsb',
    featured: true,
    created_at: '2026-03-01T10:00:00Z',
    role: 'Lead Frontend Developer & Designer',
    highlights: [
      'Engineered responsive layouts with zero-pill typographic discipline',
      'Integrated Supabase client for remote project queries and contact storage',
      'Configured Vercel rewrites and structured SEO meta tags with GS SVG favicon'
    ]
  },
  {
    id: 'proj-2',
    slug: 'ai-built-landing-page',
    title: 'AI-Built Landing Page',
    description: 'High-conversion, developer-first SaaS landing page built utilizing modern AI prompting and rapid component synthesis.',
    long_description: 'An exploration of rapid AI-assisted development paradigms at NIAT. This project demonstrates how engineering students can translate wireframes and product briefs into accessible, performant React applications in hours rather than weeks, complete with dark mode aesthetics and data visualizers.',
    image_url: '/src/assets/images/landing_preview_1794376694892.jpg',
    tech_stack: ['React', 'Tailwind CSS', 'AI-assisted development', 'Prompt engineering', 'Vercel'],
    live_url: 'https://github.com/guna-09-gsb',
    github_url: 'https://github.com/guna-09-gsb',
    featured: true,
    created_at: '2026-02-15T14:30:00Z',
    role: 'Full-Stack Developer',
    highlights: [
      'Iterative prompt engineering for high-conversion web UI patterns',
      'Integrated responsive visual charting modules for developer telemetry',
      'Optimized Core Web Vitals achieving 99+ PageSpeed scores'
    ]
  },
  {
    id: 'proj-3',
    slug: 'student-project-showcase',
    title: 'Student Project Showcase',
    description: 'Collaborative engineering portal highlighting student initiatives, peer reviews, and interactive demos built during the NIAT curriculum.',
    long_description: 'A platform built for peer collaboration between engineering students at NIAT and Joy University. It organizes student project repositories, tracks development milestones, and provides interactive live previews of coursework applications.',
    image_url: '/src/assets/images/showcase_preview_1794376694839.jpg',
    tech_stack: ['JavaScript', 'React', 'HTML', 'CSS', 'Git & GitHub'],
    live_url: 'https://github.com/guna-09-gsb',
    github_url: 'https://github.com/guna-09-gsb',
    featured: true,
    created_at: '2026-01-20T09:15:00Z',
    role: 'Frontend Architect',
    highlights: [
      'Centralized project dashboard with status filtering and milestone badges',
      'Modular card architecture enabling rapid peer review submissions',
      'Seamless GitHub integration for direct commit exploration'
    ]
  }
];

/**
 * Fetch all projects from Supabase 'projects' table, ordered by created_at desc.
 * Gracefully falls back to PLACEHOLDER_PROJECTS if not configured or on network error.
 */
export async function getProjects(): Promise<{ data: Project[]; fromSupabase: boolean; error?: string }> {
  if (!isSupabaseConfigured || !supabase) {
    return { data: PLACEHOLDER_PROJECTS, fromSupabase: false };
  }

  try {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .order('created_at', { ascending: false });

    if (error || !data || data.length === 0) {
      console.warn('Supabase projects query returned empty or error, using placeholder data:', error?.message);
      return { data: PLACEHOLDER_PROJECTS, fromSupabase: false, error: error?.message };
    }

    // Map rows to ensure all fields match the Project interface
    const formattedProjects: Project[] = data.map((item) => ({
      id: String(item.id),
      slug: item.slug || String(item.id),
      title: item.title,
      description: item.description,
      long_description: item.long_description || item.description,
      image_url: item.image_url || '/src/assets/images/portfolio_preview_1794376693939.jpg',
      tech_stack: Array.isArray(item.tech_stack) ? item.tech_stack : [],
      live_url: item.live_url || 'https://github.com/guna-09-gsb',
      github_url: item.github_url || 'https://github.com/guna-09-gsb',
      featured: Boolean(item.featured),
      created_at: item.created_at || new Date().toISOString(),
      role: item.role,
      highlights: Array.isArray(item.highlights) ? item.highlights : undefined,
    }));

    return { data: formattedProjects, fromSupabase: true };
  } catch (err: any) {
    console.error('Error fetching projects from Supabase:', err);
    return { data: PLACEHOLDER_PROJECTS, fromSupabase: false, error: err?.message };
  }
}

/**
 * Fetch single project by slug from Supabase, or fall back to local placeholder data.
 */
export async function getProjectBySlug(slug: string): Promise<Project | null> {
  if (isSupabaseConfigured && supabase) {
    try {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .eq('slug', slug)
        .single();

      if (!error && data) {
        return {
          id: String(data.id),
          slug: data.slug || String(data.id),
          title: data.title,
          description: data.description,
          long_description: data.long_description || data.description,
          image_url: data.image_url || '/src/assets/images/portfolio_preview_1794376693939.jpg',
          tech_stack: Array.isArray(data.tech_stack) ? data.tech_stack : [],
          live_url: data.live_url || 'https://github.com/guna-09-gsb',
          github_url: data.github_url || 'https://github.com/guna-09-gsb',
          featured: Boolean(data.featured),
          created_at: data.created_at || new Date().toISOString(),
          role: data.role,
          highlights: Array.isArray(data.highlights) ? data.highlights : undefined,
        };
      }
    } catch (err) {
      console.warn('Error fetching project by slug from Supabase, checking placeholders:', err);
    }
  }

  // Fallback
  const found = PLACEHOLDER_PROJECTS.find((p) => p.slug === slug);
  return found || null;
}

/**
 * Inserts message into Supabase 'messages' table: (name, email, message).
 * Falls back to simulated submission if Supabase is unconfigured.
 */
export async function submitContactMessage(message: ContactMessage): Promise<{ success: boolean; message: string; fromSupabase: boolean }> {
  if (!isSupabaseConfigured || !supabase) {
    // Simulate brief network latency for authentic feel
    await new Promise((resolve) => setTimeout(resolve, 600));
    return {
      success: true,
      message: 'Thank you for reaching out! Your message was received and Guru Sekhar will get back to you shortly.',
      fromSupabase: false
    };
  }

  try {
    const { error } = await supabase.from('messages').insert([
      {
        name: message.name.trim(),
        email: message.email.trim(),
        message: message.message.trim(),
      }
    ]);

    if (error) {
      console.error('Supabase message insert error:', error);
      throw error;
    }

    return {
      success: true,
      message: 'Your message has been sent successfully! Guru Sekhar will respond as soon as possible.',
      fromSupabase: true
    };
  } catch (err: any) {
    console.error('Failed to insert message:', err);
    return {
      success: false,
      message: err?.message || 'Failed to send message. Please try emailing directly at sekharguru931@gmail.com.',
      fromSupabase: true
    };
  }
}
