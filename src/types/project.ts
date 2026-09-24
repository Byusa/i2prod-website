export type ProjectCategory =
  | "AI"
  | "Web"
  | "Mobile"
  | "Platform"
  | "Cloud"
  | "FinTech"
  | "Travel"
  | "PropTech";

export interface ProjectPlatforms {
  web?: string;
  ios?: string;
  android?: string;
}

export interface Project {
  slug: string;
  name: string;
  eyebrow: string;
  description: string;
  categories: ProjectCategory[];
  technologies: string[];
  platforms: ProjectPlatforms;
  featured: boolean;
}