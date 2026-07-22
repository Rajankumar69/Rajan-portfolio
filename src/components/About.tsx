import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Award, Shield, Cpu, MapPin, Calendar, CheckCircle2, UserCheck } from 'lucide-react';
import { EDUCATION_LIST, PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-slate-950 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-semibold uppercase tracking-wider">
            Background & Education
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About <span className="text-emerald-400">Rajan Kumar</span>
          </h2>
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base">
            Oracle Certified DevOps Engineer passionate about automating cloud infrastructure, ensuring zero-downtime deployments, and continuous system monitoring.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Profile Card & Summary */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-xl space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-700 flex items-center justify-center text-slate-950 font-bold text-xl shadow-lg shadow-emerald-500/20">
                  RK
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{PERSONAL_INFO.name}</h3>
                  <p className="text-xs font-mono text-emerald-400">{PERSONAL_INFO.title}</p>
                  <p className="text-xs text-slate-400 flex items-center gap-1 mt-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" /> {PERSONAL_INFO.location}
                  </p>
                </div>
              </div>

              <div className="space-y-3 text-sm text-slate-300 leading-relaxed border-t border-slate-800/80 pt-5">
                <p>
                  {PERSONAL_INFO.summary}
                </p>
                <p>
                  With specialized training in <strong className="text-slate-100">AWS (EKS, EC2, S3)</strong> and <strong className="text-slate-100">Oracle Cloud Infrastructure (OCI)</strong>, I focus on transforming manual server configurations into automated, version-controlled Infrastructure as Code (IaC) using <strong className="text-slate-100">Terraform</strong> and <strong className="text-slate-100">ArgoCD GitOps workflows</strong>.
                </p>
              </div>

              {/* Key Principles Grid */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
                  <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400">
                    <Shield className="w-4 h-4" /> Security-First
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1">Applying IAM least-privilege and encrypted CI/CD delivery.</p>
                </div>
                <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
                  <div className="flex items-center gap-2 text-xs font-semibold text-sky-400">
                    <Cpu className="w-4 h-4" /> GitOps Native
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1">Declarative ArgoCD synchronization & drift correction.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Academic Degrees Timeline */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 text-lg font-bold text-white">
              <GraduationCap className="w-5 h-5 text-emerald-400" />
              <span>Academic Qualifications</span>
            </div>

            <div className="space-y-6 relative pl-6 border-l-2 border-slate-800">
              {EDUCATION_LIST.map((edu, idx) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className="relative group"
                >
                  {/* Timeline Dot */}
                  <span className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-emerald-400 group-hover:bg-emerald-400 transition-colors" />

                  <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div>
                        <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-[10px] font-mono font-semibold uppercase">
                          {edu.badge}
                        </span>
                        <h4 className="text-base font-bold text-white mt-1">{edu.degree}</h4>
                      </div>
                      <span className="text-xs font-mono text-slate-400 flex items-center gap-1 bg-slate-950 px-2.5 py-1 rounded-md border border-slate-800">
                        <Calendar className="w-3 h-3 text-slate-500" /> {edu.period}
                      </span>
                    </div>

                    <p className="text-xs font-medium text-slate-300">
                      {edu.institution} • <span className="text-slate-400">{edu.location}</span>
                    </p>

                    <ul className="space-y-1.5 pt-1">
                      {edu.highlights.map((h, hIdx) => (
                        <li key={hIdx} className="text-xs text-slate-400 flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
