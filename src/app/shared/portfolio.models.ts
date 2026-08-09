export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  url: string;
  icon: 'github' | 'linkedin';
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  codeUrl: string;
}

export interface TechItem {
  name: string;
  /** Caminho da imagem do ícone dentro de public/, ex: 'assets/icons/angular.svg' */
  iconPath: string;
  inProgress?: boolean;
}

export interface ContactInfo {
  email: string;
  linkedin: string;
  linkedinLabel: string;
  github: string;
  githubLabel: string;
}