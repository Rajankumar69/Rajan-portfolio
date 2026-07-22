import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Terminal,
  ShieldCheck,
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Cpu,
  CheckCircle2,
  ExternalLink,
  Copy,
  Check,
  Server,
  Cloud,
  Layers,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'kubectl' | 'argocd' | 'terraform'>('kubectl');

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden flex items-center justify-center bg-slate-950">
      {/* Background Tech Grids & Glowing Gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_rgba(16,185,129,0.08),_transparent_50%),_radial-gradient(circle_at_70%_70%,_rgba(14,165,233,0.08),_transparent_50%)] pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headline & Intro */}
          <div className="lg:col-span-7 space-y-6">
            {/* Status Tag */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-emerald-500/30 text-emerald-300 text-xs font-mono shadow-inner shadow-emerald-500/10"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for DevOps, Cloud & K8s Roles</span>
            </motion.div>

            {/* Main Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-2"
            >
              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold text-white tracking-tight leading-none">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-sky-400">Rajan Kumar</span>
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-slate-300 flex items-center gap-2">
                Oracle Certified DevOps Engineer
              </p>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl"
            >
              Building production-ready <strong className="text-slate-200">GitOps pipelines</strong>, provisioning infrastructure as code with <strong className="text-slate-200">Terraform</strong>, and orchestrating resilient <strong className="text-slate-200">AWS EKS & Kubernetes</strong> workloads with end-to-end observability.
            </motion.p>

            {/* Badges Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center gap-2 pt-1"
            >
              {[
                '3x Oracle Certified (98% Top Score)',
                'AWS EKS & EC2',
                'Kubernetes & Docker',
                'Terraform IaC',
                'ArgoCD GitOps',
                'Prometheus & Grafana',
              ].map((badge) => (
                <span
                  key={badge}
                  className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300 text-xs font-mono flex items-center gap-1.5"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  {badge}
                </span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4 pt-4"
            >
              <a
                href="#projects"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 font-bold text-sm flex items-center gap-2 shadow-lg shadow-emerald-500/25 transition-all cursor-pointer group"
              >
                Explore GitOps Projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={onOpenResume}
                className="px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-850 border border-slate-800 hover:border-slate-700 text-slate-200 font-semibold text-sm flex items-center gap-2 transition-all cursor-pointer"
              >
                <Download className="w-4 h-4 text-emerald-400" />
                Resume PDF
              </button>

              <div className="flex items-center gap-2 pl-2">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-all"
                  title="GitHub Profile"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-all"
                  title="LinkedIn Profile"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </motion.div>

            {/* Quick Email Copy Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="pt-2 flex items-center gap-3 text-xs text-slate-400"
            >
              <span className="font-mono text-slate-500">Contact:</span>
              <button
                onClick={copyEmail}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-emerald-400 transition-all cursor-pointer font-mono"
              >
                {PERSONAL_INFO.email}
                {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3 text-slate-500" />}
              </button>
            </motion.div>
          </div>

          {/* Right Column: Interactive Terminal & Live Cluster Status */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="rounded-2xl bg-slate-900/90 border border-slate-800 shadow-2xl shadow-black/80 overflow-hidden font-mono text-xs">
              {/* Terminal Window Header */}
              <div className="px-4 py-3 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  <span className="ml-2 text-slate-400 font-semibold text-[11px] flex items-center gap-1">
                    <Terminal className="w-3.5 h-3.5 text-emerald-400" /> rajan@devops-cluster:~
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setActiveTab('kubectl')}
                    className={`px-2 py-0.5 rounded text-[10px] font-medium transition-all ${
                      activeTab === 'kubectl' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40' : 'text-slate-500 hover:text-slate-300'
                    }`}
                  >
                    kubectl
                  </button>
                  <button
                    onClick={() => setActiveTab('argocd')}
                    className={`px-2 py-0.5 rounded text-[10px] font-medium transition-all ${
                      activeTab === 'argocd' ? 'bg-sky-500/20 text-sky-300 border border-sky-500/40' : 'text-slate-500 hover:text-slate-300'
                    }`}
                  >
                    argocd
                  </button>
                  <button
                    onClick={() => setActiveTab('terraform')}
                    className={`px-2 py-0.5 rounded text-[10px] font-medium transition-all ${
                      activeTab === 'terraform' ? 'bg-purple-500/20 text-purple-300 border border-purple-500/40' : 'text-slate-500 hover:text-slate-300'
                    }`}
                  >
                    terraform
                  </button>
                </div>
              </div>

              {/* Terminal Content Body */}
              <div className="p-4 space-y-3 min-h-[300px] bg-slate-950/70 text-slate-300 leading-relaxed overflow-x-auto">
                {activeTab === 'kubectl' && (
                  <div className="space-y-2">
                    <p className="text-emerald-400">
                      $ kubectl get pods -n production -o wide
                    </p>
                    <div className="text-[11px] text-slate-400 font-mono whitespace-pre leading-snug">
                      {`NAME                              READY   STATUS    RESTARTS   AGE     NODE
retail-shop-frontend-7f98b9c8d-1   1/1     Running   0          12d     ip-10-0-1-42.ec2.internal
retail-checkout-service-84d94b-4   1/1     Running   0          12d     ip-10-0-1-43.ec2.internal
argo-cd-server-6789bfb-2x         1/1     Running   0          45d     ip-10-0-2-15.ec2.internal
prometheus-k8s-0                  2/2     Running   0          45d     ip-10-0-2-88.ec2.internal
nginx-ingress-controller-4a81b    1/1     Running   0          45d     ip-10-0-1-10.ec2.internal`}
                    </div>
                    <div className="pt-2 border-t border-slate-800 text-[11px]">
                      <span className="text-slate-500">Status: </span>
                      <span className="text-emerald-400 font-bold">● 5/5 Healthy</span>
                      <span className="text-slate-500 ml-3">Cluster: </span>
                      <span className="text-sky-400">AWS EKS v1.29</span>
                    </div>
                  </div>
                )}

                {activeTab === 'argocd' && (
                  <div className="space-y-2">
                    <p className="text-sky-400">
                      $ argocd app get retail-shop-prod
                    </p>
                    <div className="text-[11px] text-slate-400 font-mono space-y-1">
                      <p><span className="text-slate-500">Name:</span> retail-shop-prod</p>
                      <p><span className="text-slate-500">Project:</span> default</p>
                      <p><span className="text-slate-500">Server:</span> https://kubernetes.default.svc</p>
                      <p><span className="text-slate-500">Repo:</span> https://github.com/Rajankumar69/retail-app</p>
                      <p><span className="text-slate-500">Target:</span> main (HEAD)</p>
                      <p><span className="text-slate-500">Health:</span> <span className="text-emerald-400 font-bold">Healthy</span></p>
                      <p><span className="text-slate-500">Sync Status:</span> <span className="text-emerald-400 font-bold">Synced</span> to 8f3a9d2</p>
                    </div>
                    <div className="pt-2 border-t border-slate-800 text-[11px] text-slate-400">
                      Auto-Sync: <span className="text-emerald-400">Prune & Self-Heal Enabled</span>
                    </div>
                  </div>
                )}

                {activeTab === 'terraform' && (
                  <div className="space-y-2">
                    <p className="text-purple-400">
                      $ terraform plan -out=tfplan
                    </p>
                    <div className="text-[11px] text-slate-400 font-mono space-y-1">
                      <p className="text-slate-300">module.eks.aws_eks_cluster.main: Refreshing state...</p>
                      <p className="text-slate-300">module.vpc.aws_subnet.private[0]: Refreshing state...</p>
                      <p className="text-emerald-400">+ aws_iam_role_policy_attachment.eks_node_policy</p>
                      <p className="text-emerald-400">+ aws_eks_node_group.worker_nodes</p>
                      <p className="text-slate-300 pt-1">Plan: 2 to add, 0 to change, 0 to destroy.</p>
                    </div>
                    <div className="pt-2 border-t border-slate-800 text-[11px]">
                      <span className="text-purple-300">State Locked: </span> S3 Remote Backend + DynamoDB
                    </div>
                  </div>
                )}
              </div>

              {/* Terminal Footer Status */}
              <div className="px-4 py-2.5 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Server className="w-3.5 h-3.5 text-emerald-400" /> AWS EKS + OCI Managed
                </span>
                <span className="text-emerald-400 font-semibold flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" /> 100% Validated
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Quick Metrics Bar */}
        <div className="mt-16 pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/80">
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400">1 Year</div>
            <div className="text-xs text-slate-400 mt-1 font-medium">Hands-On Cloud & DevOps</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/80">
            <div className="text-2xl sm:text-3xl font-extrabold text-sky-400">3x Oracle</div>
            <div className="text-xs text-slate-400 mt-1 font-medium">OCI AI, Foundations & Data</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/80">
            <div className="text-2xl sm:text-3xl font-extrabold text-amber-400">98%</div>
            <div className="text-xs text-slate-400 mt-1 font-medium">Top Certification Score</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/80">
            <div className="text-2xl sm:text-3xl font-extrabold text-purple-400">GitOps</div>
            <div className="text-xs text-slate-400 mt-1 font-medium">ArgoCD & EKS Automated</div>
          </div>
        </div>
      </div>
    </section>
  );
};
