import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, Calendar, CheckCircle2, TrendingUp, Award, Layers } from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-slate-950 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-semibold uppercase tracking-wider">
            Practical Experience
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Industry <span className="text-emerald-400">Virtual Internships</span>
          </h2>
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base">
            Hands-on data analytics, business dashboard visualization, and GenAI risk indicators with Deloitte Australia and TATA.
          </p>
        </div>

        {/* Experience Cards Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {EXPERIENCES.map((exp, idx) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="p-6 sm:p-8 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-emerald-500/40 transition-all shadow-xl flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                {/* Header Row */}
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-4">
                  <div>
                    <span className="px-2.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-[11px] font-mono font-semibold">
                      {exp.type}
                    </span>
                    <h3 className="text-xl font-bold text-white mt-1">{exp.company}</h3>
                    <p className="text-xs font-mono text-slate-300">{exp.role}</p>
                  </div>
                  <span className="px-3 py-1 rounded-md bg-slate-950 text-slate-400 text-xs font-mono border border-slate-800 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-slate-500" />
                    {exp.period}
                  </span>
                </div>

                {/* Highlights List */}
                <ul className="space-y-2.5 text-xs text-slate-300 leading-relaxed">
                  {exp.highlights.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tools Used & Impact */}
              <div className="space-y-3 pt-4 border-t border-slate-800">
                <div className="flex items-center gap-1.5 text-xs text-emerald-300 font-mono font-semibold">
                  <TrendingUp className="w-4 h-4 text-emerald-400" />
                  Key Impact: {exp.impactMetric}
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {exp.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-2 py-0.5 rounded bg-slate-950 text-slate-300 text-[11px] font-mono border border-slate-800"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
