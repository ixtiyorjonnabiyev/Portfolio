export interface PersonalInfo {
  name: string;
  uzbekFullName: string;
  tagline: string;
  bio: string;
  location: string;
  email: string;
  phone: string;
  telegram: string;
  github: string;
  linkedin: string;
  avatar: string;
  status: string;
  birthDate: string;
  nationality: string;
}

export interface EducationInfo {
  university: string;
  degree: string;
  major: string;
  faculty: string;
  year: string;
  period: string;
  studyMode: string;
  studentIdNumber: string;
  documentUrl: string;
  description: string;
}

export interface ACCAExam {
  code: string;
  name: string;
  status: 'passed' | 'exempted' | 'in-progress' | 'planned';
  mark?: number;
  session?: string;
  date?: string;
}

export interface ACCAInfo {
  registrationNumber: string;
  registrationDate: string;
  qualification: string;
  transcriptUrl: string;
  exams: ACCAExam[];
}

export interface SkillCategory {
  title: string;
  skills: { name: string; level: number; note?: string }[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  summary: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  verifyUrl?: string;
  fileUrl?: string;
}

export interface PortfolioData {
  personal: PersonalInfo;
  education: EducationInfo;
  acca: ACCAInfo;
  skills: SkillCategory[];
  projects: ProjectItem[];
  certifications: CertificationItem[];
  adminPin: string;
}
