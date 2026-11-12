import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Github, ArrowRight, Code2 } from 'lucide-react';
import type { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <article className="group flex flex-col bg-[#0D1527] border border-slate-800/90 hover:border-teal-500/50 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-teal-950/20">
      {/* Project Thumbnail Image with link to detail */}
      <Link
        to={`/projects/${project.slug}`}
        className="relative block aspect-[16/10] overflow-hidden bg-slate-900 border-b border-slate-800/60"
        tabIndex={-1}
      >
        {!imageError ? (
          <img
            src={project.image_url}
            alt={`${project.title} preview screenshot`}
            referrerPolicy="no-referrer"
            onError={() => setImageError(true)}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 to-[#0F1E36] p-6 text-center">
            <Code2 className="w-10 h-10 text-teal-400 mb-2 opacity-80" />
            <span className="text-sm font-semibold text-slate-300">{project.title}</span>
            <span className="text-xs text-slate-500 mt-1">Interactive Web Project</span>
          </div>
        )}

        {project.featured && (
          <div className="absolute top-3 right-3 px-2.5 py-1 text-[11px] font-semibold text-teal-300 bg-slate-950/80 backdrop-blur-md border border-teal-500/40 rounded-md shadow-sm">
            Featured Project
          </div>
        )}
      </Link>

      {/* Card Content */}
      <div className="flex-1 flex flex-col p-6">
        {/* Title */}
        <h3 className="text-lg font-semibold text-white group-hover:text-teal-300 transition-colors">
          <Link
            to={`/projects/${project.slug}`}
            className="focus:outline-none focus-visible:underline"
          >
            {project.title}
          </Link>
        </h3>

        {/* Short Description */}
        <p className="mt-2 text-sm text-slate-400 line-clamp-2 leading-relaxed flex-1">
          {project.description}
        </p>

        {/* Tech Stack - Zero-Pill clean typography with dot separators */}
        <div className="mt-4 pt-4 border-t border-slate-800/60">
          <div className="text-xs text-slate-400 font-mono flex flex-wrap items-center gap-x-2 gap-y-1">
            {project.tech_stack.map((tech, index) => (
              <React.Fragment key={tech}>
                <span className="text-teal-200/90">{tech}</span>
                {index < project.tech_stack.length - 1 && (
                  <span className="text-slate-600 select-none" aria-hidden="true">
                    ·
                  </span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Actions bar */}
        <div className="mt-5 pt-4 border-t border-slate-800/60 flex items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-3">
            {project.live_url && (
              <a
                href={project.live_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-slate-200 hover:text-white bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700/60 transition-colors whitespace-nowrap font-medium"
                aria-label={`Open live demo for ${project.title}`}
              >
                <span>Live Demo</span>
                <ExternalLink className="w-3 h-3 text-teal-400" />
              </a>
            )}

            {project.github_url && (
              <a
                href={project.github_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-slate-300 hover:text-white bg-slate-800/40 hover:bg-slate-800 border border-slate-750 transition-colors whitespace-nowrap font-medium"
                aria-label={`View GitHub repository for ${project.title}`}
              >
                <Github className="w-3 h-3" />
                <span>Code</span>
              </a>
            )}
          </div>

          <Link
            to={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1 text-teal-400 hover:text-teal-300 font-medium transition-colors group-hover:translate-x-0.5"
          >
            <span>Details</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </article>
  );
};
