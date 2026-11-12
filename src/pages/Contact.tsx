import React, { useState } from 'react';
import { Mail, Github, Linkedin, Send, CheckCircle2, AlertCircle, ArrowUpRight, MessageSquare, Clock } from 'lucide-react';
import { submitContactMessage } from '../lib/supabase';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{
    type: 'success' | 'error';
    text: string;
  } | null>(null);

  const validate = (): boolean => {
    const errs: FormErrors = {};

    if (!formData.name.trim()) {
      errs.name = 'Please enter your name.';
    } else if (formData.name.trim().length < 2) {
      errs.name = 'Name must be at least 2 characters.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!emailRegex.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address (e.g., name@example.com).';
    }

    if (!formData.message.trim()) {
      errs.message = 'Please write a message.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters long.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatusMessage(null);

    if (!validate()) {
      return;
    }

    setSubmitting(true);
    try {
      const res = await submitContactMessage(formData);
      if (res.success) {
        setStatusMessage({
          type: 'success',
          text: res.message,
        });
        setFormData({ name: '', email: '', message: '' });
        setErrors({});
      } else {
        setStatusMessage({
          type: 'error',
          text: res.message,
        });
      }
    } catch (err: any) {
      setStatusMessage({
        type: 'error',
        text: err?.message || 'Failed to submit form. Please try emailing directly.',
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-12">
      {/* Header */}
      <div>
        <div className="text-xs font-mono text-teal-400 uppercase tracking-wider mb-2">
          Let's Connect
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
          Get in Touch
        </h1>
        <p className="mt-3 text-lg text-slate-300 max-w-2xl leading-relaxed">
          Have an idea, project collaboration, or question about my web development journey? Send a message or connect through social links.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
        {/* Contact Information & Direct Channels */}
        <div className="md:col-span-5 space-y-6">
          <div className="p-6 rounded-2xl bg-[#0D1527] border border-slate-800/90 space-y-6">
            <h2 className="text-base font-semibold text-white">Direct Communication</h2>
            
            <ul className="space-y-4 text-sm">
              {/* Email */}
              <li>
                <a
                  href="mailto:sekharguru931@gmail.com"
                  className="group flex items-start gap-3 p-3 rounded-xl hover:bg-slate-800/60 border border-transparent hover:border-slate-700 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 shrink-0 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-mono">Email Directly</span>
                    <span className="text-sm font-medium text-white group-hover:text-teal-300 transition-colors break-all">
                      sekharguru931@gmail.com
                    </span>
                  </div>
                </a>
              </li>

              {/* GitHub */}
              <li>
                <a
                  href="https://github.com/guna-09-gsb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-3 p-3 rounded-xl hover:bg-slate-800/60 border border-transparent hover:border-slate-700 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 shrink-0 group-hover:scale-105 transition-transform">
                    <Github className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-400 font-mono">GitHub Profile</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-teal-400 transition-colors" />
                    </div>
                    <span className="text-sm font-medium text-white group-hover:text-teal-300 transition-colors">
                      github.com/guna-09-gsb
                    </span>
                  </div>
                </a>
              </li>

              {/* LinkedIn */}
              <li>
                <a
                  href="https://linkedin.com/in/guru-sekhar-915460431"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-3 p-3 rounded-xl hover:bg-slate-800/60 border border-transparent hover:border-slate-700 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 shrink-0 group-hover:scale-105 transition-transform">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-400 font-mono">LinkedIn Profile</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-teal-400 transition-colors" />
                    </div>
                    <span className="text-sm font-medium text-white group-hover:text-teal-300 transition-colors">
                      in/guru-sekhar-915460431
                    </span>
                  </div>
                </a>
              </li>
            </ul>

            <div className="pt-4 border-t border-slate-800/80 flex items-center gap-2.5 text-xs text-slate-400">
              <Clock className="w-4 h-4 text-teal-400 shrink-0" />
              <span>Responses typically sent within 24 hours.</span>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="md:col-span-7">
          <div className="p-6 sm:p-8 rounded-2xl bg-[#0D1527] border border-slate-800/90 shadow-xl">
            <h2 className="text-xl font-bold text-white tracking-tight mb-2">
              Send a Direct Message
            </h2>
            <p className="text-sm text-slate-400 mb-6">
              Messages are saved directly into the database and forwarded to Guru Sekhar.
            </p>

            {/* Success Message Banner */}
            {statusMessage?.type === 'success' ? (
              <div className="p-6 rounded-xl bg-teal-950/40 border border-teal-500/40 space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-teal-400 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-base font-semibold text-white">Message Dispatched!</h3>
                    <p className="mt-1 text-sm text-teal-200/90 leading-relaxed">
                      {statusMessage.text}
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setStatusMessage(null)}
                  className="px-4 py-2 text-xs font-semibold text-slate-950 bg-teal-400 hover:bg-teal-300 rounded-lg transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                {/* Error Banner */}
                {statusMessage?.type === 'error' && (
                  <div className="p-4 rounded-xl bg-rose-950/30 border border-rose-500/40 flex items-center gap-3 text-xs text-rose-300">
                    <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
                    <span>{statusMessage.text}</span>
                  </div>
                )}

                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-xs font-medium text-slate-300 mb-1.5">
                    Your Name <span className="text-teal-400">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: undefined });
                    }}
                    placeholder="e.g. Alex Morgan"
                    className={`w-full px-4 py-2.5 text-sm bg-slate-900 border rounded-lg text-white placeholder-slate-500 focus:outline-none transition-colors ${
                      errors.name
                        ? 'border-rose-500/80 focus:border-rose-400 focus:ring-1 focus:ring-rose-400'
                        : 'border-slate-700/80 focus:border-teal-400 focus:ring-1 focus:ring-teal-400'
                    }`}
                  />
                  {errors.name && (
                    <p className="mt-1.5 text-xs text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-xs font-medium text-slate-300 mb-1.5">
                    Email Address <span className="text-teal-400">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: undefined });
                    }}
                    placeholder="e.g. alex@example.com"
                    className={`w-full px-4 py-2.5 text-sm bg-slate-900 border rounded-lg text-white placeholder-slate-500 focus:outline-none transition-colors ${
                      errors.email
                        ? 'border-rose-500/80 focus:border-rose-400 focus:ring-1 focus:ring-rose-400'
                        : 'border-slate-700/80 focus:border-teal-400 focus:ring-1 focus:ring-teal-400'
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1.5 text-xs text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-xs font-medium text-slate-300 mb-1.5">
                    Message <span className="text-teal-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: undefined });
                    }}
                    placeholder="Hi Guru, I noticed your work on modern web apps and would love to connect about..."
                    className={`w-full px-4 py-2.5 text-sm bg-slate-900 border rounded-lg text-white placeholder-slate-500 focus:outline-none transition-colors resize-y ${
                      errors.message
                        ? 'border-rose-500/80 focus:border-rose-400 focus:ring-1 focus:ring-rose-400'
                        : 'border-slate-700/80 focus:border-teal-400 focus:ring-1 focus:ring-teal-400'
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1.5 text-xs text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-slate-950 bg-teal-400 hover:bg-teal-300 active:bg-teal-500 rounded-lg transition-all duration-200 shadow-md shadow-teal-950/40 disabled:opacity-60 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400"
                >
                  {submitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
