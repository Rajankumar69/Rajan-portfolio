import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Terminal, GitBranch, Layers, ShieldCheck, Cpu, RefreshCw, CheckCircle2, Play } from 'lucide-react';

export const ArchitectureViewer: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      id: 'git',
      name: '1. Git Commit & Push',
      icon: 'GitBranch',
      tool: 'GitHub / GitOps Repository',
      description: 'Code and Kubernetes manifests updated in main branch. ArgoCD monitors commits for drift.',
      snippet: `commit 8f3a9d24c7b1a
Author: Rajan Kumar <kushrajan065@gmail.com>
Date:   Wed Jul 22 03:22:00 2026 +0000

    feat(k8s): update retail checkout deployment strategy to v2.1.0
    - Added horizontal pod autoscaler (HPA) min:2 max:10
    - Configured ingress TLS termination with Let's Encrypt`,
    },
    {
      id: 'terraform',
      name: '2. Terraform IaC Provisioning',
      icon: 'Layers',
      tool: 'Terraform on AWS EKS / OCI',
      description: 'Declarative HCL modules provision VPCs, Subnets, IAM roles, and EKS Managed Node Groups.',
      snippet: `resource "aws_eks_node_group" "main" {
  cluster_name    = aws_eks_cluster.main.name
  node_group_name = "rajan-k8s-workers"
  node_role_arn   = aws_iam_role.node.arn
  subnet_ids      = module.vpc.private_subnets

  scaling_config {
    desired_size = 3
    max_size     = 10
    min_size     = 2
  }
}`,
    },
    {
      id: 'argocd',
      name: '3. ArgoCD GitOps Sync',
      icon: 'RefreshCw',
      tool: 'ArgoCD Automated Delivery',
      description: 'ArgoCD reconciles live cluster state with Git target, applying Helm charts cleanly.',
      snippet: `time="2026-07-22T03:22:15Z" level=info msg="Reconciling app retail-shop-prod"
time="2026-07-22T03:22:16Z" level=info msg="Syncing 12 resources to cluster https://kubernetes.default.svc"
time="2026-07-22T03:22:17Z" level=info msg="Deployment/retail-checkout-service synced & healthy"
time="2026-07-22T03:22:18Z" level=info msg="Ingress/nginx-ingress-main updated with TLS certificate"`,
    },
    {
      id: 'observability',
      name: '4. Prometheus & Grafana Telemetry',
      icon: 'Activity',
      tool: 'Prometheus + Grafana Dashboard',
      description: 'Real-time CPU/Memory metrics scraping, cluster node export, and automated alertmanager notifications.',
      snippet: `# Prometheus Query
sum(rate(container_cpu_usage_seconds_total{namespace="production"}[5m])) by (pod)

# Alertmanager Status
Alert: K8sPodCPUUtilizationHigh
Severity: Critical (0 active alerts - All metrics nominal)`,
    },
  ];

  return (
    <section className="py-20 bg-slate-950 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <span className="px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-400 text-xs font-mono font-semibold uppercase tracking-wider">
            Architecture & Pipeline Visualizer
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            How I Build <span className="text-teal-400">GitOps & K8s Workflows</span>
          </h2>
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base">
            Click any phase of the CI/CD pipeline below to inspect the declarative configuration, automation scripts, and cluster telemetry.
          </p>
        </div>

        {/* Pipeline Steps Selector */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {steps.map((s, idx) => (
            <button
              key={s.id}
              onClick={() => setActiveStep(idx)}
              className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                activeStep === idx
                  ? 'bg-slate-900 border-teal-500 shadow-lg shadow-teal-500/10 text-white'
                  : 'bg-slate-950/60 border-slate-800/80 text-slate-400 hover:text-slate-200 hover:border-slate-700'
              }`}
            >
              <div className="text-xs font-mono font-semibold text-teal-400 mb-1">{s.tool}</div>
              <div className="font-bold text-sm text-slate-100">{s.name}</div>
            </button>
          ))}
        </div>

        {/* Console Box displaying Code/Snippet */}
        <div className="rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden shadow-2xl">
          <div className="px-5 py-3.5 bg-slate-950 border-b border-slate-800 flex items-center justify-between font-mono text-xs text-slate-400">
            <span className="flex items-center gap-2 text-teal-400 font-bold">
              <Terminal className="w-4 h-4" /> {steps[activeStep].tool}
            </span>
            <span className="text-emerald-400 font-semibold flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" /> Pipeline Active
            </span>
          </div>

          <div className="p-6 space-y-4">
            <p className="text-sm text-slate-300 font-sans leading-relaxed">
              {steps[activeStep].description}
            </p>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-teal-300/90 whitespace-pre overflow-x-auto leading-relaxed shadow-inner">
              {steps[activeStep].snippet}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
