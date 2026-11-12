import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github, Calendar, Layers, CheckCircle, Code2, AlertTriangle } from 'lucide-react';
import { getProjectBySlug, getProjects } from '../lib/supabase';
import type { Project } from '../types';
import { ProjectCard } from '../components/ProjectCard';

export const ProjectDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [project, setProject] = useState<Project | null>(null);
  const [otherProjects, setOtherProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    let mounted = true;
    async function loadData() {
      if (!slug) return;
      setLoading(true);
      setImageError(false);
      try {
        const found = await getProjectBySlug(slug);
        if (mounted) {
          setProject(found);
        }

        // Also fetch other projects for related strip
        const allRes = await getProjects();
        if (mounted) {
          const others = allRes.data.filter((p) => p.slug !== slug).slice(0, 2);
          setOtherProjects(others);
        }
      } catch (err) {
        console.error('Failed to load project details:', err);
      } finally {
        if (mounted) setLoading(false);
      }
    }
    loadData();
    return () => {
      mounted = false;
    };
  }, [slug]);

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 animate-pulse space-y-8">
        <div className="h-6 bg-slate-800 rounded w-32" />
        <div className="h-10 bg-slate-800 rounded w-3/4" />
        <div className="aspect-[16/9] bg-slate-800/60 rounded-2xl" />
        <div className="space-y-4">
          <div className="h-4 bg-slate-800 rounded w-full" />
          <div className="h-4 bg-slate-800 rounded w-5/6" />
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="max-w-xl mx-auto px-4 py-20 text-center space-y-6">
        <AlertTriangle className="w-12 h-12 text-teal-400 mx-auto" />
        <h1 className="text-2xl font-bold text-white">Project Not Found</h1>
        <p className="text-slate-400 text-sm">
          The requested project "{slug}" could not be located in the database or showcases.
        </p>
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-slate-950 bg-teal-400 hover:bg-teal-300 rounded-lg transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Projects</span>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 space-y-12">
      {/* Back link */}
      <div>
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-xs font-medium text-slate-400 hover:text-teal-300 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to all projects</span>
        </Link>
      </div>

      {/* Header Info */}
      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-400">
          <span className="text-teal-400">Engineering Case Study</span>
          <span className="text-slate-600">·</span>
          <span>
            {new Date(project.created_at).toLocaleDateString('en-US', {
              month: 'short',
              year: 'numeric',
            })}
          </span>
          {project.role && (
            <>
              <span className="text-slate-600">·</span>
              <span className="text-slate-300">{project.role}</span>
            </>
          )}
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
          {project.title}
        </h1>

        <p className="text-lg text-slate-300 max-w-3xl leading-relaxed">
          {project.description}
        </p>

        {/* Action Links */}
        <div className="pt-2 flex flex-wrap items-center gap-4">
          {project.live_url && (
            <a
              href={project.live_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-slate-950 bg-teal-400 hover:bg-teal-300 active:bg-teal-500 rounded-lg transition-colors shadow-md shadow-teal-950/40"
            >
              <span>Visit Live Demo</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}

          {project.github_url && (
            <a
              href={project.github_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-slate-200 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-700/80 rounded-lg transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>View Source on GitHub</span>
            </a>
          )}
        </div>
      </div>

      {/* Large Featured Project Image */}
      <div className="rounded-2xl overflow-hidden border border-slate-800/90 bg-[#0D1527] shadow-2xl">
        {!imageError ? (
          <img
            src={project.image_url}
            alt={`${project.title} detailed screenshot`}
            referrerPolicy="no-referrer"
            onError={() => setImageError(true)}
            className="w-full aspect-[16/9] object-cover object-top"
          />
        ) : (
          <div className="w-full aspect-[16/9] flex flex-col items-center justify-center p-8 bg-slate-900 text-center">
            <Code2 className="w-12 h-12 text-teal-400 mb-3 opacity-80" />
            <h3 className="text-lg font-semibold text-white">{project.title}</h3>
            <p className="text-xs text-slate-400 mt-1 max-w-md">
              Full-featured web application built during NIAT engineering coursework
            </p>
          </div>
        )}
      </div>

      {/* Deep-Dive Grid: Overview, What I Built, Tech Stack */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
        {/* Main Content Columns: Overview & What I Built */}
        <div className="md:col-span-8 space-y-10">
          {/* Project Overview */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
              <span className="w-1.5 h-4 bg-teal-400 rounded-sm" />
              Project Overview
            </h2>
            <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
              {project.long_description || project.description}
            </p>
          </section>

          {/* What I Built */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
              <span className="w-1.5 h-4 bg-teal-400 rounded-sm" />
              What I Built & Technical Implementation
            </h2>
            <div className="space-y-3">
              {(project.highlights || [
                'Designed responsive interface adhering to strict zero-pill typographic standards',
                'Connected persistent data layer using modern client libraries and backend endpoints',
                'Leveraged AI-assisted rapid prompting to quickly scaffold and refine complex components',
                'Configured seamless routing, loading feedback states, and error resilience'
              ]).map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-3 text-sm text-slate-300">
                  <CheckCircle className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar: Tech Stack & Metadata */}
        <div className="md:col-span-4 space-y-6">
          <div className="p-6 rounded-xl bg-[#0D1527] border border-slate-800/80 space-y-5">
            <h3 className="text-xs font-mono text-teal-400 uppercase tracking-wider">
              Technologies Used
            </h3>
            
            {/* Zero-Pill clean tech tags with borders */}
            <div className="flex flex-wrap gap-2">
              {project.tech_stack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-xs font-medium text-teal-300 bg-slate-900/90 border border-slate-700/60 rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-800/80 space-y-3 text-xs text-slate-400">
              <div className="flex justify-between">
                <span className="text-slate-500">Developer</span>
                <span className="text-slate-200">Guru Sekhar</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Program</span>
                <span className="text-slate-200">NIAT x Joy University</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Year</span>
                <span className="text-slate-200">2026</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Projects Strip */}
      {otherProjects.length > 0 && (
        <section className="pt-10 border-t border-slate-800/80 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-white">More Projects</h3>
            <Link
              to="/projects"
              className="text-xs font-medium text-teal-400 hover:text-teal-300 transition-colors"
            >
              View all
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {otherProjects.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};
