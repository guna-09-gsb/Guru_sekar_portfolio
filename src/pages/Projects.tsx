import React, { useEffect, useState } from 'react';
import { Search, RefreshCw, Layers, Database, Sparkles, AlertCircle } from 'lucide-react';
import { getProjects, isSupabaseConfigured } from '../lib/supabase';
import type { Project } from '../types';
import { ProjectCard } from '../components/ProjectCard';

export const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string>('All');
  const [fromSupabase, setFromSupabase] = useState(false);

  const fetchProjectData = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await getProjects();
      setProjects(res.data);
      setFromSupabase(res.fromSupabase);
      if (res.error && res.fromSupabase) {
        setError(res.error);
      }
    } catch (err: any) {
      setError(err?.message || 'Failed to fetch projects');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjectData();
  }, []);

  // Compute unique tech stack tags from all loaded projects
  const allTags = ['All', ...Array.from(new Set(projects.flatMap((p) => p.tech_stack)))];

  // Filter projects by search query and selected tag
  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tech_stack.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesTag = selectedTag === 'All' || project.tech_stack.includes(selectedTag);

    return matchesSearch && matchesTag;
  });

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-12">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="text-xs font-mono text-teal-400 uppercase tracking-wider mb-2">
            Engineering Portfolio
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Projects & Web Apps
          </h1>
          <p className="mt-2 text-base sm:text-lg text-slate-300 max-w-xl">
            A directory of web applications built with React, modern tools, and AI workflows during my engineering journey.
          </p>
        </div>

        {/* Database Sync Status Badge (zero-pill subtle design) */}
        <div className="self-start md:self-auto flex items-center gap-2 text-xs font-mono px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400">
          <Database className={`w-3.5 h-3.5 ${fromSupabase ? 'text-teal-400' : 'text-slate-500'}`} />
          <span>{fromSupabase ? 'Synced from Supabase database' : 'Active showcase projects'}</span>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          {/* Search Input */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input
              type="text"
              placeholder="Search by title, description, or tech..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-sm bg-[#0D1527] border border-slate-800 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-teal-500/80 focus:ring-1 focus:ring-teal-500/80 transition-colors"
            />
          </div>

          {/* Refresh button */}
          <button
            onClick={fetchProjectData}
            disabled={loading}
            className="inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-lg transition-colors disabled:opacity-50"
            title="Refresh projects list"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin text-teal-400' : ''}`} />
            <span>Reload</span>
          </button>
        </div>

        {/* Interactive Filter Tabs (functional buttons with active state) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none text-xs">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-3 py-1.5 rounded-md font-medium whitespace-nowrap transition-colors ${
                selectedTag === tag
                  ? 'bg-teal-400 text-slate-950 font-semibold shadow-sm'
                  : 'bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800/80'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Error state if fetch failed */}
      {error && (
        <div className="p-4 rounded-xl bg-rose-950/20 border border-rose-500/30 flex items-center justify-between gap-4 text-xs text-rose-300">
          <div className="flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0 text-rose-400" />
            <span>{error}. Loaded verified fallback projects.</span>
          </div>
          <button
            onClick={fetchProjectData}
            className="underline hover:text-white font-medium"
          >
            Retry
          </button>
        </div>
      )}

      {/* Loading Skeletons */}
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((idx) => (
            <div
              key={idx}
              className="rounded-xl bg-[#0D1527] border border-slate-800/80 p-4 animate-pulse space-y-4"
            >
              <div className="aspect-[16/10] bg-slate-800/60 rounded-lg" />
              <div className="h-5 bg-slate-800 rounded w-3/4" />
              <div className="h-4 bg-slate-800/70 rounded w-full" />
              <div className="h-4 bg-slate-800/40 rounded w-2/3" />
            </div>
          ))}
        </div>
      ) : filteredProjects.length > 0 ? (
        /* Projects Grid */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="text-center py-16 px-4 rounded-2xl bg-[#0D1527]/50 border border-slate-800/80 space-y-4">
          <Layers className="w-12 h-12 text-slate-600 mx-auto" />
          <h3 className="text-lg font-semibold text-white">No projects found</h3>
          <p className="text-sm text-slate-400 max-w-sm mx-auto">
            No projects matched the search term "{searchQuery}" or filter "{selectedTag}".
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedTag('All');
            }}
            className="px-4 py-2 text-xs font-semibold text-slate-950 bg-teal-400 hover:bg-teal-300 rounded-lg transition-colors"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
};
