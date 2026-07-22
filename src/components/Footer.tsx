import React from 'react';
import { Terminal, Github, Linkedin, Mail, ArrowUp, ShieldCheck } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 text-slate-400 text-xs py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Tagline */}
          <div className="space-y-2 text-center md:text-left">
            <a href="#" className="inline-flex items-center gap-2 text-white font-mono font-bold text-lg">
              <div className="p-1.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                <Terminal className="w-4 h-4" />
              </div>
              <span>RAJAN.KUMAR</span>
            </a>
            <p className="text-slate-400 text-xs max-w-md">
              Oracle Certified DevOps Engineer • Building scalable AWS EKS, GitOps pipelines & Kubernetes infrastructure.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 font-medium text-slate-300">
            <a href="#about" className="hover:text-emerald-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-emerald-400 transition-colors">Skills</a>
            <a href="#certificates" className="hover:text-emerald-400 transition-colors">Certifications</a>
            <a href="#projects" className="hover:text-emerald-400 transition-colors">Projects</a>
            <a href="#experience" className="hover:text-emerald-400 transition-colors">Experience</a>
            <a href="#contact" className="hover:text-emerald-400 transition-colors">Contact</a>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="p-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-all cursor-pointer flex items-center gap-1.5 font-mono text-xs"
          >
            <ArrowUp className="w-4 h-4 text-emerald-400" /> Back to Top
          </button>
        </div>

        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px] font-mono">
          <p>© {new Date().getFullYear()} Rajan Kumar. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="hover:text-slate-300 flex items-center gap-1">
              <Github className="w-3.5 h-3.5" /> Rajankumar69
            </a>
            <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-slate-300 flex items-center gap-1">
              <Linkedin className="w-3.5 h-3.5" /> rajankumar69
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
