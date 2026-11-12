import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800/80 bg-[#060913] text-slate-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          {/* Col 1: Identity & Bio summary */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-teal-500/20 border border-teal-500/30 flex items-center justify-center font-bold text-teal-300 text-sm">
                GS
              </div>
              <span className="text-base font-semibold text-white tracking-tight">
                Uppalapati Guru Sekhar
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-md">
              First-year B.Tech engineering student at NIAT in collaboration with Joy University.
              Focused on hands-on practical development, crafting responsive web applications with React and AI tools.
            </p>
            <div className="text-xs text-slate-500 space-y-1">
              <p>NIAT · Joy University · Batch of 2026</p>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="text-xs font-semibold text-slate-200 tracking-wider uppercase">
              Navigation
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-teal-300 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-teal-300 transition-colors">
                  About & Education
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-teal-300 transition-colors">
                  Projects Showcase
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-teal-300 transition-colors">
                  Contact Me
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Connect & Socials */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="text-xs font-semibold text-slate-200 tracking-wider uppercase">
              Connect
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://github.com/guna-09-gsb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-teal-300 transition-colors"
                >
                  <Github className="w-4 h-4 text-teal-400" />
                  <span>GitHub (@guna-09-gsb)</span>
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/guru-sekhar-915460431"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-teal-300 transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-teal-400" />
                  <span>LinkedIn (Guru Sekhar)</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:sekharguru931@gmail.com"
                  className="inline-flex items-center gap-2 hover:text-teal-300 transition-colors"
                >
                  <Mail className="w-4 h-4 text-teal-400" />
                  <span>sekharguru931@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Uppalapati Guru Sekhar. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Built with React, Tailwind CSS & Supabase</span>
            <button
              onClick={scrollToTop}
              aria-label="Scroll back to top"
              className="inline-flex items-center gap-1 hover:text-teal-300 transition-colors"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
