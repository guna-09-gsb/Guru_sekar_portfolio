import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code2, Sparkles, Terminal, BookOpen, Layers, ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';
import { getProjects } from '../lib/supabase';
import type { Project } from '../types';
import { ProjectCard } from '../components/ProjectCard';

export const Home: React.FC = () => {
  const [featuredProjects, setFeaturedProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    async function load() {
      try {
        const { data } = await getProjects();
        if (mounted) {
          // Select featured projects or top 3
          const featured = data.filter((p) => p.featured);
          setFeaturedProjects(featured.length > 0 ? featured.slice(0, 3) : data.slice(0, 3));
        }
      } catch (err) {
        console.error('Failed to load featured projects:', err);
      } finally {
        if (mounted) setLoading(false);
      }
    }
    load();
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div className="flex flex-col gap-20 md:gap-28 pb-16">
      {/* Hero Section */}
      <section className="relative pt-12 md:pt-20 lg:pt-24 overflow-hidden">
        {/* Subtle background glow effect (behind content, no slop) */}
        <div 
          aria-hidden="true" 
          className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-teal-500/10 blur-[120px] rounded-full pointer-events-none" 
        />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center md:text-left md:flex md:items-center md:justify-between gap-12">
            <div className="max-w-2xl">
              {/* Natural editorial kicker */}
              <div className="inline-flex items-center gap-2 text-xs md:text-sm font-mono text-teal-300 tracking-wide mb-4">
                <Terminal className="w-4 h-4 text-teal-400" />
                <span>B.Tech First-Year · NIAT in collaboration with Joy University</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-teal-100">Guru Sekhar</span>
              </h1>

              {/* Exact Tagline from brief */}
              <p className="mt-4 text-xl sm:text-2xl font-medium text-teal-200/90 leading-snug">
                First-year engineering student building real websites with AI.
              </p>

              {/* Bio summary */}
              <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl">
                I'm passionate about turning ideas into working products and improving a little every day through practical, hands-on learning at NIAT x Joy University.
              </p>

              {/* Two CTA Buttons as requested */}
              <div className="mt-8 flex flex-wrap items-center justify-center md:justify-start gap-4">
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-950 bg-teal-400 hover:bg-teal-300 active:bg-teal-500 rounded-lg transition-all duration-200 shadow-md shadow-teal-950/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400"
                >
                  <span>View Projects</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-200 hover:text-white bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400"
                >
                  <span>Contact Me</span>
                  <Mail className="w-4 h-4 text-teal-400" />
                </Link>
              </div>

              {/* Quick links & handles */}
              <div className="mt-8 pt-6 border-t border-slate-800/80 flex items-center justify-center md:justify-start gap-6 text-xs text-slate-400">
                <a
                  href="https://github.com/guna-09-gsb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-teal-300 transition-colors"
                >
                  <Github className="w-4 h-4 text-slate-400" />
                  <span>github.com/guna-09-gsb</span>
                </a>
                <span className="text-slate-700" aria-hidden="true">·</span>
                <a
                  href="https://linkedin.com/in/guru-sekhar-915460431"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-teal-300 transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-slate-400" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

            {/* Profile Avatar / Visual Frame */}
            <div className="mt-10 md:mt-0 flex justify-center md:block shrink-0">
              <div className="relative group">
                <div 
                  aria-hidden="true" 
                  className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-teal-700 rounded-2xl blur-md opacity-30 group-hover:opacity-60 transition duration-500" 
                />
                <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-2xl overflow-hidden border-2 border-teal-500/30 bg-slate-900 shadow-2xl">
                  <img
                     src="https://qbadsbkvwmpouojnbisw.supabase.co/storage/v1/object/public/project-images/guna.jpeg"
                       alt="Uppalapati Guru Sekhar"
                         className="h-44 w-44 rounded-full object-cover object-top md:h-72 md:w-72"
                                />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080D1A]/80 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-3 right-3 text-center">
                    <span className="text-xs font-semibold text-teal-200 drop-shadow-md">
                      Guru Sekhar · 1st Year B.Tech
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Focus & Engineering Highlights Row */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl bg-[#0D1527] border border-slate-800/80 hover:border-slate-700 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 mb-4">
              <Code2 className="w-5 h-5" />
            </div>
            <h3 className="text-base font-semibold text-white">Hands-on Web Engineering</h3>
            <p className="mt-2 text-sm text-slate-400 leading-relaxed">
              Building dynamic, full-stack applications with React, TypeScript, Tailwind CSS, and Supabase.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#0D1527] border border-slate-800/80 hover:border-slate-700 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 mb-4">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="text-base font-semibold text-white">AI-Assisted Development</h3>
            <p className="mt-2 text-sm text-slate-400 leading-relaxed">
              Harnessing prompt engineering and generative developer workflows to ideate and iterate at modern velocity.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#0D1527] border border-slate-800/80 hover:border-slate-700 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 mb-4">
              <BookOpen className="w-5 h-5" />
            </div>
            <h3 className="text-base font-semibold text-white">NIAT x Joy University</h3>
            <p className="mt-2 text-sm text-slate-400 leading-relaxed">
              Enrolled in a practical, project-centered B.Tech program focused on real output and continuous growth.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects Strip */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="text-xs font-mono text-teal-400 uppercase tracking-wider mb-1">
              Selected Works
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Featured Projects
            </h2>
            <p className="mt-1 text-sm text-slate-400">
              Real web applications built with modern tools and AI workflows.
            </p>
          </div>
          <Link
            to="/projects"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-teal-400 hover:text-teal-300 transition-colors self-start sm:self-auto"
          >
            <span>View all projects</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Loading Skeleton or Projects Grid */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((n) => (
              <div
                key={n}
                className="rounded-xl bg-[#0D1527] border border-slate-800/80 p-4 animate-pulse space-y-4"
              >
                <div className="aspect-[16/10] bg-slate-800/60 rounded-lg" />
                <div className="h-5 bg-slate-800 rounded w-3/4" />
                <div className="h-4 bg-slate-800/70 rounded w-full" />
                <div className="h-4 bg-slate-800/50 rounded w-1/2" />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </section>

      {/* Short About Strip */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-gradient-to-br from-[#0D1527] to-[#0A1020] border border-slate-800 p-8 sm:p-12 relative overflow-hidden">
          <div className="max-w-3xl">
            <span className="text-xs font-mono text-teal-400 uppercase tracking-wider">
              About Uppalapati Guru Sekhar
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Building real products from day one
            </h2>
            <p className="mt-4 text-base text-slate-300 leading-relaxed">
              "I'm Uppalapati Guru Sekhar, a first-year B.Tech student at NIAT in collaboration with Joy University. My program focuses on practical, hands-on learning, where I build real websites using AI tools. I'm passionate about turning ideas into working products and improving a little every day."
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-slate-950 bg-teal-400 hover:bg-teal-300 rounded-lg transition-colors"
              >
                <span>Read Full Bio & Timeline</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700/80 rounded-lg transition-colors"
              >
                <span>Reach Out Directly</span>
                <Mail className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
