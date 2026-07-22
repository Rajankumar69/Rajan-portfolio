export interface SkillCategory {
  title: string;
  iconName: string;
  skills: {
    name: string;
    level: number; // percentage
    description: string;
    badge?: string;
  }[];
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'GitOps & Cloud' | 'CI/CD & K8s' | 'AI & Fullstack';
  description: string[];
  techStack: string[];
  architecture: {
    title: string;
    steps: string[];
  };
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
  metrics: { label: string; value: string }[];
}

export interface Certification {
  id: string;
  title: string;
  subtitle: string;
  score: string;
  scoreNumber: number;
  issueDate: string;
  validUntil: string;
  credentialId: string;
  issuer: string;
  signatory: string;
  verificationUrl: string;
  badgeType: 'AI' | 'OCI' | 'Data';
  skillsValidated: string[];
}

export interface Experience {
  company: string;
  role: string;
  type: string;
  period: string;
  highlights: string[];
  tools: string[];
  impactMetric: string;
}

export interface Education {
  institution: string;
  degree: string;
  location: string;
  period: string;
  badge: string;
  highlights: string[];
}

export interface RecruiterContact {
  name: string;
  email: string;
  company: string;
  roleType: string;
  message: string;
}
