export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  long_description: string;
  image_url: string;
  tech_stack: string[];
  live_url: string;
  github_url: string;
  featured: boolean;
  created_at: string;
  role?: string;
  highlights?: string[];
}

export interface ContactMessage {
  id?: string;
  name: string;
  email: string;
  message: string;
  created_at?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  collaboration?: string;
  period: string;
  year: string;
  description: string;
  current: boolean;
  courses: string[];
}
