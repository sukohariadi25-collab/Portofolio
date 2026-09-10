export interface Project {
  id: number;
  title: string;
  category: 'Real Project' | 'Exploration';
  tags: string[];
  image: string;
  link: string;
  longDescription?: string;
  githubUrl?: string;
}

export interface SkillCategory {
  category: string;
  skills: { name: string }[];
}

export interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
  type: 'Work' | 'Education' | 'Organization';
  skillsUsed: string[];
}