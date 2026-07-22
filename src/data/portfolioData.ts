import { Certification, Education, Experience, Project, SkillCategory } from '../types';

export const PERSONAL_INFO = {
  name: 'Rajan Kumar',
  title: 'Oracle Certified DevOps Engineer',
  tagline: 'Automating Scalable Cloud Infrastructure, GitOps Pipelines & Kubernetes Systems',
  phone: '+91 9084388796',
  email: 'kushrajan065@gmail.com',
  github: 'https://github.com/Rajankumar69',
  linkedin: 'https://www.linkedin.com/in/rajankumar69',
  location: 'Uttarakhand, India',
  summary:
    'An Oracle certified DevOps Engineer having 1 year hands-on experience in AWS, Kubernetes, Docker, and implementing scalable CI/CD Pipelines. Proficient in applying security practices for robust application delivery.',
  yearsExperience: '1 Year Hands-On',
  certificationsCount: '3x Oracle Certified',
  topScore: '98%',
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Cloud & Infrastructure',
    iconName: 'Cloud',
    skills: [
      { name: 'AWS (EKS, EC2, S3)', level: 92, description: 'EKS Clusters, Auto-scaling EC2, S3 Buckets, IAM, VPC', badge: 'Primary' },
      { name: 'Terraform', level: 90, description: 'Infrastructure as Code (IaC) provisioning for AWS & OCI', badge: 'IaC' },
      { name: 'OCI (Oracle Cloud)', level: 88, description: 'Compute, Networking, Autonomous DBs, Security', badge: 'Certified' },
      { name: 'Azure & GCP', level: 80, description: 'Virtual Machines, Cloud Storage, Basic Orchestration' },
    ],
  },
  {
    title: 'Containers & GitOps',
    iconName: 'Layers',
    skills: [
      { name: 'Kubernetes (K8s)', level: 94, description: 'Cluster Architecture, Helm Charts, Ingress Controllers, StatefulSets', badge: 'Expert' },
      { name: 'Docker', level: 95, description: 'Multi-stage Containerization, Docker Compose, Image Optimization', badge: 'Core' },
      { name: 'ArgoCD', level: 90, description: 'Declarative GitOps deployment & automated synchronization', badge: 'GitOps' },
      { name: 'Nginx Ingress', level: 85, description: 'Traffic Routing, TLS termination, Reverse Proxying' },
    ],
  },
  {
    title: 'CI/CD & Automation',
    iconName: 'GitBranch',
    skills: [
      { name: 'Jenkins CI/CD', level: 88, description: 'Automated Build Pipelines, Webhooks, Multi-branch Workflows' },
      { name: 'Shell Scripting & Bash', level: 92, description: 'System Automation, Cron Jobs, Deployment Scripts', badge: 'Core' },
      { name: 'Ansible', level: 82, description: 'Configuration Management & Server Automation' },
      { name: 'Git & GitHub Actions', level: 90, description: 'Version Control, Branching Strategy, CI Automation' },
    ],
  },
  {
    title: 'Monitoring & Observability',
    iconName: 'Activity',
    skills: [
      { name: 'Prometheus', level: 88, description: 'Metrics Collection, Alertmanager, Time-series DB', badge: 'Observability' },
      { name: 'Grafana', level: 90, description: 'Real-time Dashboards, Cluster Telemetry Visualization', badge: 'Visuals' },
      { name: 'K8s Dashboards', level: 86, description: 'Resource Utilization, Pod Health & Telemetry Tracking' },
    ],
  },
  {
    title: 'Programming & AI Integration',
    iconName: 'Code',
    skills: [
      { name: 'Python', level: 88, description: 'Scripting, Automation, Data Processing, API Integration', badge: 'Primary' },
      { name: 'Java & C/C++', level: 82, description: 'Backend Logic, OOP Architecture, Systems Fundamentals' },
      { name: 'Generative AI & NLP', level: 85, description: 'LLM Pipelines, ChromaDB Vector Search, Hugging Face', badge: 'GenAI' },
      { name: 'SQL & PostgreSQL', level: 86, description: 'Relational Database Queries, Schema Design, Data Analytics' },
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'retail-gitops',
    title: 'Production-Ready Retail Shop Application',
    subtitle: 'End-to-End GitOps Infrastructure on AWS EKS with Terraform & ArgoCD',
    category: 'GitOps & Cloud',
    description: [
      'Developed an interactive e-commerce application engineered around modern GitOps principles.',
      'UI catalogs and checkout order management services built using Java and Node.js microservices architecture.',
      'Provisioned AWS EKS clusters seamlessly via Terraform, integrating ArgoCD for declarative automated deployments, Helm for package management, and Nginx Ingress Controller for secure external traffic routing.',
    ],
    techStack: ['AWS EKS', 'Terraform', 'ArgoCD', 'Kubernetes', 'Helm', 'Nginx Ingress', 'Java', 'GitOps'],
    architecture: {
      title: 'GitOps Pipeline Workflow',
      steps: [
        'Developer pushes code/manifest changes to GitHub Repository',
        'ArgoCD detects drift between Git state and Live Kubernetes cluster',
        'Terraform provisions EKS Worker Nodes & Load Balancers dynamically',
        'Helm deploys microservice charts with Nginx Ingress SSL routing',
      ],
    },
    githubUrl: 'https://github.com/Rajankumar69',
    featured: true,
    metrics: [
      { label: 'Deployment Method', value: 'GitOps (ArgoCD)' },
      { label: 'Cloud Provider', value: 'AWS EKS' },
      { label: 'Provisioning', value: 'Terraform IaC' },
    ],
  },
  {
    id: 'scalable-k8s-aws',
    title: 'Automated Scalable App on AWS EC2 with K8S & ArgoCD',
    subtitle: 'Automated CI/CD with Real-time Prometheus & Grafana Monitoring',
    category: 'CI/CD & K8s',
    description: [
      'Automated the deployment of scalable applications on AWS EC2 instances utilizing Kubernetes and ArgoCD for continuous delivery and stream management.',
      'Configured comprehensive observability dashboards powered by Prometheus and Grafana for real-time memory, CPU, and network metric tracking.',
      'Orchestrated multi-node Kubernetes clusters with automated pod scaling and resource centralization to guarantee zero-downtime execution.',
    ],
    techStack: ['AWS EC2', 'Kubernetes', 'ArgoCD', 'Prometheus', 'Grafana', 'Docker', 'Shell Scripting'],
    architecture: {
      title: 'Automated Deployment & Observability Stack',
      steps: [
        'Application source bundled into optimized multi-stage Docker images',
        'ArgoCD synchronizes deployment manifests to Kubernetes EC2 cluster',
        'Prometheus scrapes pod-level metrics & cluster node exporters',
        'Grafana visualizes real-time load, alerting on threshold breaches',
      ],
    },
    githubUrl: 'https://github.com/Rajankumar69',
    featured: true,
    metrics: [
      { label: 'Monitoring', value: 'Prometheus & Grafana' },
      { label: 'Compute Engine', value: 'AWS EC2 + K8s' },
      { label: 'Availability', value: 'Zero-Downtime' },
    ],
  },
  {
    id: 'summarize-news-nlp',
    title: 'Summarize News with NLPs & Vector DB',
    subtitle: 'AI-Powered Automated News Summarizer & Personalization Engine',
    category: 'AI & Fullstack',
    description: [
      'Aggregated multi-source news data to perform automated summarization, demand analysis, credibility evaluation, and personalized content recommendations.',
      'Built with a high-performance modern web stack featuring React.js & Next.js for the frontend, robust REST APIs for backend orchestration, and PostgreSQL for relational storage.',
      'Integrated ChromaDB for vector embeddings storage and Hugging Face transformer models for natural language processing.',
    ],
    techStack: ['React.js', 'Next.js', 'PostgreSQL', 'ChromaDB', 'Hugging Face Transformers', 'Python', 'NLP'],
    architecture: {
      title: 'NLP Vector Processing Pipeline',
      steps: [
        'Multi-source scraper ingests raw news feeds into backend pipeline',
        'Hugging Face transformer generates embeddings & text summaries',
        'ChromaDB indexes vector embeddings for similarity-based recommendations',
        'Next.js & React frontend presents credibility metrics and tailored summaries',
      ],
    },
    githubUrl: 'https://github.com/Rajankumar69',
    featured: true,
    metrics: [
      { label: 'AI Engine', value: 'Hugging Face Models' },
      { label: 'Vector Store', value: 'ChromaDB' },
      { label: 'Database', value: 'PostgreSQL' },
    ],
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'oci-ai-2025',
    title: 'Oracle Certified Foundations Associate',
    subtitle: 'Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate',
    score: '98%',
    scoreNumber: 98,
    issueDate: 'August 29, 2025',
    validUntil: 'August 29, 2027',
    credentialId: '102365596OCI25AICFA',
    issuer: 'Oracle Corporation / Oracle University',
    signatory: 'Damien Carey, Senior Vice President, Oracle University',
    verificationUrl: 'https://mylearn.oracle.com/ou/credential/102365596OCI25AICFA',
    badgeType: 'AI',
    skillsValidated: [
      'Generative AI Concepts',
      'LLM Architectures',
      'OCI AI Services',
      'Machine Learning Lifecycles',
      'OCI Infrastructure for AI Workloads',
    ],
  },
  {
    id: 'oci-foundations-2025',
    title: 'Oracle Certified Foundations Associate',
    subtitle: 'Oracle Cloud Infrastructure 2025 Certified Foundations Associate',
    score: '90%',
    scoreNumber: 90,
    issueDate: 'August 19, 2025',
    validUntil: 'August 19, 2027',
    credentialId: '102365596OCI25FNDCFA',
    issuer: 'Oracle Corporation / Oracle University',
    signatory: 'Damien Carey, Senior Vice President, Oracle University',
    verificationUrl: 'https://mylearn.oracle.com/ou/credential/102365596OCI25FNDCFA',
    badgeType: 'OCI',
    skillsValidated: [
      'Cloud Architecture & Core Services',
      'OCI Security & Compliance',
      'Identity & Access Management (IAM)',
      'Billing, Cost Management & Governance',
      'Networking & Virtual Cloud Networks (VCN)',
    ],
  },
  {
    id: 'oracle-data-platform-2025',
    title: 'Oracle Certified Foundations Associate',
    subtitle: 'Oracle Data Platform 2025 Certified Foundations Associate',
    score: '88%',
    scoreNumber: 88,
    issueDate: 'August 23, 2025',
    validUntil: 'August 23, 2027',
    credentialId: '102365596OCI25DCFA',
    issuer: 'Oracle Corporation / Oracle University',
    signatory: 'Damien Carey, Senior Vice President, Oracle University',
    verificationUrl: 'https://mylearn.oracle.com/ou/credential/102365596OCI25DCFA',
    badgeType: 'Data',
    skillsValidated: [
      'Oracle Autonomous Databases',
      'Data Lakehouses & Warehousing',
      'Data Integration & Pipeline ETL',
      'Analytics & Data Security',
      'Oracle Database Services on OCI',
    ],
  },
];

export const EXPERIENCES: Experience[] = [
  {
    company: 'Deloitte Australia',
    role: 'Data Analytics Virtual Intern',
    type: 'Virtual Internship',
    period: '2024',
    highlights: [
      'Evaluated structured data classification and extracted actionable business insights across complex financial & operational datasets.',
      'Designed and deployed dynamic Tableau dashboards highlighting key operational efficiency and financial trajectory trends.',
      'Applied investigative data analytics methodologies to solve real-world enterprise business problems.',
    ],
    tools: ['Tableau', 'Data Classification', 'Exploratory Analytics', 'Structured SQL'],
    impactMetric: 'Built dynamic visual consoles for enterprise trends',
  },
  {
    company: 'TATA',
    role: 'Data Visualization for Business Insights Intern',
    type: 'Virtual Internship',
    period: '2024',
    highlights: [
      'Computed executive-level visual consoles supporting strategic business decisions through rigorous Exploratory Data Analysis (EDA).',
      'Leveraged Generative AI techniques to analyze risk indicators and predict operational compliance risks.',
      'Programmed an AI-powered collection strategy integrating strict compliance standards and sustainable solutions.',
    ],
    tools: ['Generative AI', 'EDA Analysis', 'Business Dashboards', 'Risk Modeling'],
    impactMetric: 'AI-assisted collection & compliance optimization',
  },
];

export const EDUCATION_LIST: Education[] = [
  {
    institution: 'Quantum University',
    degree: 'Master in Computer Applications (MCA)',
    location: 'Roorkee, Uttarakhand',
    period: '2024 – 2026',
    badge: 'Postgraduate',
    highlights: [
      'Specializing in Cloud Computing, Advanced DevOps Practices, and Distributed Systems',
      'Hands-on focus on Kubernetes cluster orchestration, Terraform IaC, and AWS cloud security',
    ],
  },
  {
    institution: 'HNB Garhwal University',
    degree: 'Bachelors in Computer Science (B.Sc CS)',
    location: 'Srinagar, Uttarakhand',
    period: '2021 – 2024',
    badge: 'Undergraduate',
    highlights: [
      'Foundational computer science principles, Object-Oriented Programming (Java, C++), Data Structures & Algorithms',
      'Relational Database Systems (SQL), Operating Systems (Linux Kernel & Bash Scripting), Computer Networks',
    ],
  },
];
