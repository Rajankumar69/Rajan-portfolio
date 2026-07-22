import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Download, X, Printer, CheckCircle2, ShieldCheck, Mail, Phone, MapPin, ExternalLink, Github, Linkedin } from 'lucide-react';
import { EDUCATION_LIST, EXPERIENCES, PERSONAL_INFO, PROJECTS } from '../data/portfolioData';
import { generateResumePDF } from '../utils/pdfGenerator';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md p-4 sm:p-6 overflow-y-auto flex items-center justify-center"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          className="max-w-4xl w-full bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-8 relative shadow-2xl shadow-black/90 my-8"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top Action Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-5">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              <span className="font-bold text-white text-lg">Official Resume — Rajan Kumar</span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handlePrint}
                className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <Printer className="w-4 h-4 text-slate-400" /> Print
              </button>

              <button
                onClick={generateResumePDF}
                className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center gap-2 shadow-lg shadow-emerald-500/20 transition-all cursor-pointer"
              >
                <Download className="w-4 h-4" /> Download Resume PDF
              </button>

              <button
                onClick={onClose}
                className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Formatted Resume Preview Document (Printable) */}
          <div id="printable-resume" className="bg-slate-950 p-6 sm:p-10 rounded-2xl border border-slate-800 text-slate-200 space-y-6 font-sans">
            {/* Header */}
            <div className="text-center space-y-2 border-b border-slate-800 pb-6">
              <h1 className="text-3xl font-extrabold text-white tracking-tight">{PERSONAL_INFO.name}</h1>
              <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-mono text-slate-400">
                <span>{PERSONAL_INFO.phone}</span>
                <span>•</span>
                <span>{PERSONAL_INFO.email}</span>
                <span>•</span>
                <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="text-emerald-400 hover:underline">
                  github: Rajankumar69
                </a>
                <span>•</span>
                <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="text-emerald-400 hover:underline">
                  LinkedIn: rajankumar69
                </a>
              </div>
            </div>

            {/* Profile Summary */}
            <div className="space-y-2">
              <h2 className="text-xs font-mono font-extrabold uppercase text-emerald-400 tracking-wider border-b border-emerald-500/30 pb-1">
                Profile Summary
              </h2>
              <p className="text-xs text-slate-300 leading-relaxed">
                {PERSONAL_INFO.summary}
              </p>
            </div>

            {/* Education */}
            <div className="space-y-3">
              <h2 className="text-xs font-mono font-extrabold uppercase text-emerald-400 tracking-wider border-b border-emerald-500/30 pb-1">
                Education
              </h2>
              <div className="space-y-3 text-xs">
                {EDUCATION_LIST.map((edu) => (
                  <div key={edu.degree} className="flex flex-wrap justify-between items-start gap-1">
                    <div>
                      <p className="font-bold text-white">{edu.institution}</p>
                      <p className="text-slate-300">{edu.degree}</p>
                    </div>
                    <div className="text-right text-slate-400 font-mono">
                      <p>{edu.location}</p>
                      <p>{edu.period}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div className="space-y-2">
              <h2 className="text-xs font-mono font-extrabold uppercase text-emerald-400 tracking-wider border-b border-emerald-500/30 pb-1">
                Skills
              </h2>
              <div className="text-xs text-slate-300 space-y-1">
                <p><strong className="text-slate-100">Tools:</strong> Python, AWS, S3, EKS, Shell Scripting, Azure, GCP, OCI, Docker, Kubernetes, Jenkins CICD, Terraform, Ansible, ArgoCD, Prometheus, Grafana, SQL, Git, Linux OS, Bash, C, C++, Java, Generative AI, Networking</p>
              </div>
            </div>

            {/* Experience */}
            <div className="space-y-3">
              <h2 className="text-xs font-mono font-extrabold uppercase text-emerald-400 tracking-wider border-b border-emerald-500/30 pb-1">
                Experience
              </h2>
              {EXPERIENCES.map((exp, idx) => (
                <div key={exp.company} className="space-y-1 text-xs">
                  <p className="font-bold text-white">{idx + 1}. {exp.company} : {exp.role}</p>
                  <ul className="list-disc list-inside space-y-1 text-slate-300 pl-2">
                    {exp.highlights.map((h, hIdx) => (
                      <li key={hIdx}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Projects */}
            <div className="space-y-3">
              <h2 className="text-xs font-mono font-extrabold uppercase text-emerald-400 tracking-wider border-b border-emerald-500/30 pb-1">
                Projects
              </h2>
              {PROJECTS.map((proj) => (
                <div key={proj.id} className="space-y-1 text-xs">
                  <p className="font-bold text-white">{proj.title}</p>
                  <ul className="list-disc list-inside space-y-1 text-slate-300 pl-2">
                    {proj.description.map((line, lIdx) => (
                      <li key={lIdx}>{line}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Achievements */}
            <div className="space-y-2">
              <h2 className="text-xs font-mono font-extrabold uppercase text-emerald-400 tracking-wider border-b border-emerald-500/30 pb-1">
                Achievements & Certifications
              </h2>
              <ul className="list-disc list-inside space-y-1 text-xs text-slate-300">
                <li>Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate - <strong className="text-emerald-400">98%</strong></li>
                <li>Oracle Cloud Infrastructure 2025 Certified Foundations Associate - <strong className="text-emerald-400">90%</strong></li>
                <li>Oracle Data Platform 2025 Certified Foundations Associate - <strong className="text-emerald-400">88%</strong></li>
              </ul>
            </div>
          </div>

          {/* Modal Footer Download CTA */}
          <div className="flex items-center justify-between pt-2">
            <span className="text-xs text-slate-400 font-mono">PDF generated with clean typography</span>
            <button
              onClick={generateResumePDF}
              className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center gap-2 transition-all shadow-lg shadow-emerald-500/20 cursor-pointer"
            >
              <Download className="w-4 h-4" /> Download Official PDF Resume
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
