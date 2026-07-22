import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, ExternalLink, Award, CheckCircle2, Calendar, Eye, X, Download, Lock } from 'lucide-react';
import { CERTIFICATIONS } from '../data/portfolioData';
import { Certification } from '../types';

export const Certifications: React.FC = () => {
  const [activeCert, setActiveCert] = useState<Certification | null>(null);

  return (
    <section id="certificates" className="py-20 bg-slate-950 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-semibold uppercase tracking-wider">
            Verified Oracle Credentials
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Official <span className="text-amber-400">Oracle Certifications</span>
          </h2>
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base">
            Verified credentials awarded by Oracle Corporation with direct verification links, high-score achievements, and valid eCertificate IDs.
          </p>
        </div>

        {/* Certifications Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CERTIFICATIONS.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-amber-500/40 transition-all shadow-xl hover:shadow-2xl hover:shadow-amber-500/10 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Top Score Badge */}
              <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono font-bold flex items-center gap-1">
                <Award className="w-3.5 h-3.5 text-amber-400" />
                Score: {cert.score}
              </div>

              <div className="space-y-4">
                {/* Visual Certificate Card Preview Graphic */}
                <div
                  onClick={() => setActiveCert(cert)}
                  className="relative rounded-xl bg-slate-950 border border-slate-800 p-4 cursor-pointer group-hover:border-amber-500/50 transition-all overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950"
                >
                  {/* Oracle Red Accent Bar */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 via-rose-500 to-amber-500" />

                  <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
                    <div className="flex items-center gap-2">
                      <div className="px-2 py-0.5 rounded bg-red-600/20 text-red-400 font-serif font-black text-xs border border-red-500/30 tracking-wider">
                        ORACLE
                      </div>
                      <span className="text-[10px] font-mono text-slate-400">University</span>
                    </div>
                    <div className="w-7 h-7 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="py-3 space-y-1">
                    <p className="text-[10px] uppercase font-mono tracking-widest text-slate-400">Certificate of Recognition</p>
                    <p className="text-sm font-bold text-white leading-tight font-serif">{cert.title}</p>
                    <p className="text-xs text-amber-300/90 font-medium">{cert.subtitle}</p>
                  </div>

                  <div className="pt-2 border-t border-slate-800/60 flex items-center justify-between text-[10px] font-mono text-slate-400">
                    <span>ID: {cert.credentialId}</span>
                    <span className="text-emerald-400 font-semibold flex items-center gap-1">
                      <Eye className="w-3 h-3" /> View Zoom
                    </span>
                  </div>
                </div>

                {/* Issuer & Valid Dates */}
                <div className="space-y-1 text-xs">
                  <p className="text-slate-200 font-bold">{cert.subtitle}</p>
                  <p className="text-slate-400 text-[11px]">{cert.issuer}</p>
                </div>

                {/* Validated Skills Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {cert.skillsValidated.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 rounded bg-slate-950 text-slate-300 text-[11px] border border-slate-800 flex items-center gap-1"
                    >
                      <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Verification & Link Actions */}
              <div className="pt-5 border-t border-slate-800 mt-6 flex items-center justify-between gap-3">
                <div className="text-[11px] font-mono text-slate-400">
                  <span>Valid: </span>
                  <span className="text-slate-300">{cert.validUntil}</span>
                </div>

                <a
                  href={cert.verificationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-semibold flex items-center gap-1.5 transition-all"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-amber-400" />
                  Verify Link
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal Lightbox for Full High-Res eCertificate */}
        <AnimatePresence>
          {activeCert && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md p-4 sm:p-6 overflow-y-auto flex items-center justify-center"
              onClick={() => setActiveCert(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="max-w-3xl w-full bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 relative shadow-2xl shadow-black/90"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setActiveCert(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* High-Fidelity Official Oracle eCertificate Visual Replica */}
                <div className="rounded-2xl bg-gradient-to-br from-neutral-50 via-white to-stone-100 p-8 sm:p-12 text-slate-900 border-4 border-amber-500/30 shadow-2xl relative overflow-hidden font-serif">
                  {/* Outer Certificate Frame Border */}
                  <div className="absolute inset-2 border-2 border-red-900/20 pointer-events-none rounded-xl" />

                  {/* Oracle Header */}
                  <div className="flex items-start justify-between border-b-2 border-slate-200 pb-6">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-black font-sans text-red-600 tracking-wider">ORACLE</span>
                        <span className="text-sm font-sans font-light text-slate-600">University</span>
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-3 font-serif">
                        {activeCert.title}
                      </h3>
                      <p className="text-base text-slate-600 font-sans italic">Certificate of Recognition</p>
                    </div>

                    {/* Official Oracle Foundation Seal */}
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-slate-900 border-4 border-amber-500 flex flex-col items-center justify-center text-center p-2 text-white shadow-xl shrink-0">
                      <span className="text-[9px] font-sans font-bold text-amber-400 uppercase tracking-tighter">ORACLE Certified</span>
                      <span className="text-[10px] font-sans font-extrabold text-white uppercase leading-tight mt-0.5">Foundations Associate</span>
                    </div>
                  </div>

                  {/* Recipient Details */}
                  <div className="py-8 space-y-4 font-sans">
                    <div>
                      <p className="text-xs uppercase tracking-widest text-slate-500 font-mono">This certifies that</p>
                      <p className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">Rajan Kumar</p>
                    </div>

                    <div>
                      <p className="text-xs text-slate-500 font-mono">has successfully earned the credential</p>
                      <p className="text-lg font-bold text-red-700 mt-1">{activeCert.subtitle}</p>
                    </div>

                    <p className="text-xs text-slate-600 max-w-xl leading-relaxed">
                      This certifies that the above named is recognized by Oracle Corporation as Oracle Certified. Validated with high achievement score of <strong className="text-slate-900">{activeCert.score}</strong>.
                    </p>
                  </div>

                  {/* Signatures & Issue Dates */}
                  <div className="pt-6 border-t border-slate-200 grid grid-cols-2 gap-6 font-sans text-xs">
                    <div>
                      <p className="text-slate-500 font-mono">Issue Date:</p>
                      <p className="font-bold text-slate-900">{activeCert.issueDate}</p>
                      <p className="text-slate-500 font-mono mt-2">Valid Until:</p>
                      <p className="font-bold text-slate-900">{activeCert.validUntil}</p>
                    </div>

                    <div className="text-right flex flex-col items-end">
                      {/* Signature graphic simulation */}
                      <div className="font-serif italic text-lg text-slate-800 font-bold border-b border-slate-400 pb-1 px-4">
                        Damien Carey
                      </div>
                      <p className="font-bold text-slate-900 mt-1">{activeCert.signatory}</p>
                      <p className="text-[10px] text-slate-500 font-mono">eCertificate ID: {activeCert.credentialId}</p>
                    </div>
                  </div>
                </div>

                {/* Modal Footer Link */}
                <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                  <div className="text-xs text-slate-400 font-mono">
                    Credential ID: <span className="text-emerald-400">{activeCert.credentialId}</span>
                  </div>

                  <a
                    href={activeCert.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center gap-2 transition-all shadow-lg shadow-amber-500/20"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Verify on Official Oracle Portal
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
