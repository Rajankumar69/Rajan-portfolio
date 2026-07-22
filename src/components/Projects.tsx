import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Github,
  ExternalLink,
  Layers,
  Server,
  Terminal,
  Activity,
  CheckCircle2,
  Cpu,
  ArrowRight,
  Sparkles,
  X,
  Play,
} from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [simulatingPipeline, setSimulatingPipeline] = useState<boolean>(false);
  const [pipelineStep, setPipelineStep] = useState<number>(0);

  const startPipelineSimulation = () => {
    setSimulatingPipeline(true);
    setPipelineStep(0);
    const interval = setInterval(() => {
      setPipelineStep((prev) => {
        if (prev >= 3) {
          clearInterval(interval);
          return 3;
        }
        return prev + 1;
      });
    }, 1200);
  };

  return (
    <section id="projects" className="py-20 bg-slate-950 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <span className="px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs font-mono font-semibold uppercase tracking-wider">
            Production Implementations
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured <span className="text-sky-400">DevOps & Cloud Projects</span>
          </h2>
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base">
            Architected for continuous delivery, automated cluster provisioning, resilient microservices, and AI vector pipelines.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-sky-500/40 transition-all shadow-xl hover:shadow-2xl hover:shadow-sky-500/10 flex flex-col justify-between group"
            >
              <div className="space-y-5">
                {/* Header Tag & Category */}
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-md bg-slate-950 text-sky-400 text-xs font-mono font-semibold border border-slate-800">
                    {project.category}
                  </span>
                  <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Production Ready
                  </span>
                </div>

                {/* Title & Subtitle */}
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-sky-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono text-slate-400 mt-1">{project.subtitle}</p>
                </div>

                {/* Description Bullets */}
                <ul className="space-y-2 text-xs text-slate-300 leading-relaxed">
                  {project.description.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0 mt-1.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Metrics Pill Grid */}
                <div className="grid grid-cols-3 gap-2 pt-2">
                  {project.metrics.map((m) => (
                    <div key={m.label} className="p-2 rounded-lg bg-slate-950/80 border border-slate-800 text-center">
                      <div className="text-[10px] text-slate-400 font-mono">{m.label}</div>
                      <div className="text-xs font-bold text-sky-300 mt-0.5">{m.value}</div>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Chips */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded bg-slate-950 text-slate-300 text-[11px] font-mono border border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Actions Footer */}
              <div className="pt-6 border-t border-slate-800 mt-6 flex items-center justify-between gap-3">
                <button
                  onClick={() => {
                    setSelectedProject(project);
                    setSimulatingPipeline(false);
                    setPipelineStep(0);
                  }}
                  className="px-3.5 py-2 rounded-xl bg-slate-950 hover:bg-slate-850 text-slate-200 text-xs font-semibold border border-slate-800 flex items-center gap-1.5 transition-all cursor-pointer"
                >
                  <Layers className="w-3.5 h-3.5 text-sky-400" />
                  View Pipeline Details
                </button>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-slate-950 hover:bg-slate-850 text-slate-300 hover:text-white border border-slate-800 transition-all"
                  title="View GitHub Repository"
                >
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal: Interactive Project Architecture & Pipeline Simulator */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md p-4 sm:p-6 overflow-y-auto flex items-center justify-center"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                className="max-w-3xl w-full bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 relative shadow-2xl shadow-black/90"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Modal Title */}
                <div>
                  <span className="px-2.5 py-1 rounded-md bg-sky-500/10 text-sky-400 text-xs font-mono font-semibold">
                    {selectedProject.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white mt-2">{selectedProject.title}</h3>
                  <p className="text-xs text-slate-400 font-mono mt-1">{selectedProject.subtitle}</p>
                </div>

                {/* Architecture Pipeline Interactive Flow */}
                <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-4 font-mono text-xs">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <span className="text-slate-300 font-bold flex items-center gap-2">
                      <Terminal className="w-4 h-4 text-sky-400" />
                      {selectedProject.architecture.title}
                    </span>
                    <button
                      onClick={startPipelineSimulation}
                      disabled={simulatingPipeline && pipelineStep < 3}
                      className="px-3 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-[11px] flex items-center gap-1.5 transition-all disabled:opacity-50 cursor-pointer"
                    >
                      <Play className="w-3.5 h-3.5 fill-slate-950" />
                      {simulatingPipeline ? 'Simulating Exec...' : 'Run Pipeline Simulation'}
                    </button>
                  </div>

                  {/* Sequential Steps */}
                  <div className="space-y-3">
                    {selectedProject.architecture.steps.map((step, sIdx) => {
                      const isCompleted = simulatingPipeline && pipelineStep >= sIdx;
                      const isActive = simulatingPipeline && pipelineStep === sIdx;

                      return (
                        <div
                          key={sIdx}
                          className={`p-3 rounded-xl border transition-all flex items-start gap-3 ${
                            isActive
                              ? 'bg-sky-500/10 border-sky-500/50 text-sky-200'
                              : isCompleted
                              ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-200'
                              : 'bg-slate-900 border-slate-800 text-slate-400'
                          }`}
                        >
                          <div className="w-6 h-6 rounded-full bg-slate-950 border border-slate-700 flex items-center justify-center font-bold text-[11px] shrink-0 mt-0.5">
                            {isCompleted ? '✓' : sIdx + 1}
                          </div>
                          <div>
                            <p className="font-semibold text-slate-200">{step}</p>
                            {isActive && (
                              <p className="text-[10px] text-sky-400 animate-pulse mt-1">
                                [EXEC] Triggering GitOps reconciliation loop...
                              </p>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Tech Stack List */}
                <div className="space-y-2">
                  <p className="text-xs font-mono text-slate-400 uppercase tracking-wider">Technologies Employed:</p>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-md bg-slate-950 text-slate-200 text-xs font-mono border border-slate-800"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Modal Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-800">
                  <span className="text-xs text-slate-400 font-mono">
                    Repository: <span className="text-slate-200">github.com/Rajankumar69</span>
                  </span>
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs flex items-center gap-2"
                  >
                    <Github className="w-4 h-4" /> View Source Code
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
