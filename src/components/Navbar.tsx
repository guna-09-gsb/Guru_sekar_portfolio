import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Projects', path: '/projects' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-200 ${
        scrolled
          ? 'bg-[#080D1A]/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20'
          : 'bg-[#080D1A]/75 backdrop-blur-sm border-b border-slate-800/40'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-16 md:h-20">
          {/* Zone 1: Brand Wordmark */}
          <Link
            to="/"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 rounded-lg"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center font-bold text-slate-950 text-base tracking-wider shadow-sm group-hover:scale-105 transition-transform duration-200">
              GS
            </div>
            <div className="flex flex-col">
              <span className="text-base font-semibold text-white tracking-tight group-hover:text-teal-300 transition-colors">
                Guru Sekhar
              </span>
              <span className="text-xs text-slate-400 font-normal hidden sm:inline">
                Student & AI Developer
              </span>
            </div>
          </Link>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative py-1 transition-colors whitespace-nowrap ${
                    isActive
                      ? 'text-teal-300 font-semibold'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-teal-400 rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Zone 3: Primary Action & Social (Desktop) */}
          <div className="hidden md:flex items-center gap-4 shrink-0">
            <a
              href="https://github.com/guna-09-gsb"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="p-2 text-slate-400 hover:text-white transition-colors hover:bg-slate-800/60 rounded-lg"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com/in/guru-sekhar-915460431"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="p-2 text-slate-400 hover:text-white transition-colors hover:bg-slate-800/60 rounded-lg"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-950 bg-teal-400 hover:bg-teal-300 active:bg-teal-500 rounded-lg transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080D1A]"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-teal-400" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-800 bg-[#080D1A]/95 backdrop-blur-xl px-4 pt-2 pb-6 space-y-3">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-slate-800/80 text-teal-300 font-semibold'
                      : 'text-slate-300 hover:bg-slate-800/40 hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/guna-09-gsb"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-slate-400 hover:text-white bg-slate-900 rounded-lg"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/in/guru-sekhar-915460431"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-slate-400 hover:text-white bg-slate-900 rounded-lg"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="mailto:sekharguru931@gmail.com"
                className="p-2 text-slate-400 hover:text-white bg-slate-900 rounded-lg"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2 text-xs font-semibold text-slate-950 bg-teal-400 hover:bg-teal-300 rounded-lg transition-colors"
            >
              Contact Me
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
