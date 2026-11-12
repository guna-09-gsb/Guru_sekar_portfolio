import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Code, Sparkles, Terminal, ArrowRight, Github, Linkedin, Mail, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  const [photoError, setPhotoError] = useState(false);

  // Exact skills required by prompt
  const skillsList = [
    { name: 'HTML', category: 'Frontend Foundation' },
    { name: 'CSS', category: 'Frontend Foundation' },
    { name: 'JavaScript', category: 'Core Programming' },
    { name: 'React', category: 'Frontend Framework' },
    { name: 'Tailwind CSS', category: 'Styling & UI' },
    { name: 'Git & GitHub', category: 'Version Control' },
    { name: 'Supabase', category: 'Database & Backend' },
    { name: 'Vercel', category: 'Deployment & CI/CD' },
    { name: 'AI-assisted development', category: 'Modern Engineering' },
    { name: 'Prompt engineering', category: 'Modern Engineering' },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-16 lg:space-y-20">
      {/* Page Header */}
      <div>
        <div className="text-xs font-mono text-teal-400 uppercase tracking-wider mb-2">
          Profile & Background
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
          About Guru Sekhar
        </h1>
        <p className="mt-3 text-lg text-slate-300 max-w-2xl leading-relaxed">
          First-year engineering student building real websites with AI tools and hands-on practical learning.
        </p>
      </div>

      {/* Main Bio & Photo Grid */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Photo Container */}
        <div className="md:col-span-5 flex flex-col items-center sm:items-start">
          <div className="w-full max-w-sm rounded-2xl overflow-hidden border border-slate-800 bg-[#0D1527] shadow-xl relative group">
            <div className="aspect-square w-full relative">
              {!photoError ? (
                
                  <img
                       src="https://qbadsbkvwmpouojnbisw.supabase.co/storage/v1/object/public/project-images/guna.jpeg"
                           alt="Uppalapati Guru Sekhar"
                              className="h-44 w-44 rounded-full object-cover object-top md:h-72 md:w-72"
                               />
          
                  
                
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-slate-900 text-center">
                  <div className="w-20 h-20 rounded-full bg-teal-500/20 border border-teal-500/30 flex items-center justify-center text-teal-300 font-bold text-2xl mb-3">
                    GS
                  </div>
                  <span className="text-sm font-semibold text-slate-300">Uppalapati Guru Sekhar</span>
                  <span className="text-xs text-slate-500 mt-1">First-Year B.Tech Student</span>
                </div>
              )}
            </div>

            <div className="p-5 border-t border-slate-800/80 bg-[#0D1527]/90 space-y-2 text-xs">
              <div className="flex items-center justify-between text-slate-300">
                <span className="text-slate-500">Full Name</span>
                <span className="font-medium text-white">Uppalapati Guru Sekhar</span>
              </div>
              <div className="flex items-center justify-between text-slate-300">
                <span className="text-slate-500">Degree</span>
                <span className="font-medium text-teal-300">B.Tech Engineering (1st Year)</span>
              </div>
              <div className="flex items-center justify-between text-slate-300">
                <span className="text-slate-500">Institution</span>
                <span className="font-medium text-white">NIAT x Joy University</span>
              </div>
              <div className="flex items-center justify-between text-slate-300">
                <span className="text-slate-500">Batch Year</span>
                <span className="font-medium text-white">2026</span>
              </div>
            </div>
          </div>

          {/* Social Links underneath photo */}
          <div className="mt-5 flex items-center gap-3 w-full max-w-sm justify-center sm:justify-start">
            <a
              href="https://github.com/guna-09-gsb"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-xs text-slate-300 hover:text-white transition-colors"
            >
              <Github className="w-3.5 h-3.5 text-teal-400" />
              <span>GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/guru-sekhar-915460431"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-xs text-slate-300 hover:text-white transition-colors"
            >
              <Linkedin className="w-3.5 h-3.5 text-teal-400" />
              <span>LinkedIn</span>
            </a>
            <a
              href="mailto:sekharguru931@gmail.com"
              className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-xs text-slate-300 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-teal-400" />
              <span>Email</span>
            </a>
          </div>
        </div>

        {/* Bio Content */}
        <div className="md:col-span-7 space-y-6">
          <div className="prose prose-invert max-w-none space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Engineering through action and continuous iteration
            </h2>
            
            {/* The exact quote from the prompt */}
            <blockquote className="border-l-2 border-teal-400/80 pl-4 py-1 text-slate-200 text-base italic leading-relaxed bg-teal-950/10 rounded-r-lg">
              "I'm Uppalapati Guru Sekhar, a first-year B.Tech student at NIAT in collaboration with Joy University. My program focuses on practical, hands-on learning, where I build real websites using AI tools. I'm passionate about turning ideas into working products and improving a little every day."
            </blockquote>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Traditional computer science coursework often delays actual application development until later semesters. At NIAT and Joy University, our curriculum flips that paradigm: we start building real, deployed software from semester one.
            </p>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              By pairing fundamental engineering principles—clean code, version control, component design, database schemas—with modern AI-assisted tooling and prompt engineering, I can build and iterate on production-grade interfaces rapidly.
            </p>
          </div>

          {/* Core Philosophy Highlights */}
          <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-[#0D1527] border border-slate-800">
              <div className="text-xs font-mono text-teal-400 mb-1">01. Principle</div>
              <h3 className="text-sm font-semibold text-white">Hands-on Output Over Theory</h3>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Concepts become solid when tested in code and deployed live on the web.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[#0D1527] border border-slate-800">
              <div className="text-xs font-mono text-teal-400 mb-1">02. Principle</div>
              <h3 className="text-sm font-semibold text-white">AI-Assisted Acceleration</h3>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Using AI not to avoid thinking, but to build deeper, test faster, and ship better.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Education Timeline */}
      <section className="pt-8 border-t border-slate-800/80">
        <div className="mb-8">
          <div className="text-xs font-mono text-teal-400 uppercase tracking-wider mb-1">
            Academic Background
          </div>
          <h2 className="text-2xl font-bold text-white tracking-tight">
            Education Timeline
          </h2>
          <p className="mt-1 text-sm text-slate-400">
            Focused on hands-on practical software engineering and intelligent tooling.
          </p>
        </div>

        <div className="relative border-l border-slate-800 ml-3 sm:ml-4 pl-6 sm:pl-8 space-y-8">
          {/* Milestone 1: NIAT x Joy University */}
          <div className="relative group">
            {/* Timeline node */}
            <div 
              aria-hidden="true" 
              className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-teal-400 ring-4 ring-[#080D1A]" 
            />

            <div className="p-6 rounded-xl bg-[#0D1527] border border-slate-800/90 group-hover:border-teal-500/40 transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <span className="text-xs font-mono text-teal-400 font-medium">
                    2026 – Present · 1st Year
                  </span>
                  <h3 className="text-lg font-bold text-white mt-1">
                    Bachelor of Technology (B.Tech)
                  </h3>
                  <div className="text-sm font-medium text-slate-300 mt-0.5">
                    NIAT (in collaboration with Joy University)
                  </div>
                </div>
                <div className="self-start sm:self-auto px-3 py-1 text-xs font-semibold text-teal-300 bg-teal-950/60 border border-teal-800/50 rounded-md">
                  Currently Enrolled
                </div>
              </div>

              <p className="mt-4 text-sm text-slate-300 leading-relaxed">
                Specialized hands-on engineering program emphasizing practical web engineering, component-based frameworks (React), database integration (Supabase), version control systems, and AI-accelerated workflows.
              </p>

              <div className="mt-4 pt-4 border-t border-slate-800/60 flex flex-wrap gap-2">
                <span className="text-xs text-slate-400 font-mono">Core Focus:</span>
                <span className="text-xs text-slate-300">Modern Frontend Architecture</span>
                <span className="text-slate-600">·</span>
                <span className="text-xs text-slate-300">Full-Stack Prototyping</span>
                <span className="text-slate-600">·</span>
                <span className="text-xs text-slate-300">AI Prompting & Engineering</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section with Zero-Pill Clean Typography */}
      <section className="pt-8 border-t border-slate-800/80">
        <div className="mb-8">
          <div className="text-xs font-mono text-teal-400 uppercase tracking-wider mb-1">
            Technical Competencies
          </div>
          <h2 className="text-2xl font-bold text-white tracking-tight">
            Skills & Technologies
          </h2>
          <p className="mt-1 text-sm text-slate-400">
            Tools and technologies I use to build real, responsive web applications.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillsList.map((skill) => (
            <div
              key={skill.name}
              className="p-4 rounded-xl bg-[#0D1527] border border-slate-800/80 hover:border-teal-500/40 transition-colors flex items-center justify-between group"
            >
              <div>
                <span className="text-base font-semibold text-white group-hover:text-teal-300 transition-colors">
                  {skill.name}
                </span>
                <div className="text-xs text-slate-400 font-mono mt-0.5">
                  {skill.category}
                </div>
              </div>
              <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 opacity-70 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </section>

      {/* Next Step / Contact CTA */}
      <section className="p-8 rounded-2xl bg-gradient-to-r from-teal-950/30 to-slate-900 border border-teal-500/20 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-lg font-bold text-white">Interested in collaborating or seeing more code?</h3>
          <p className="text-sm text-slate-300 mt-1">
            Feel free to check out my repositories or reach out for inquiries.
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <Link
            to="/projects"
            className="px-4 py-2 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 rounded-lg transition-colors"
          >
            Explore Projects
          </Link>
          <Link
            to="/contact"
            className="px-4 py-2 text-xs font-semibold text-slate-950 bg-teal-400 hover:bg-teal-300 rounded-lg transition-colors"
          >
            Contact Me
          </Link>
        </div>
      </section>
    </div>
  );
};
