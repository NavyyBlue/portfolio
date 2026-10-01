export interface ProjectImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface ProjectLink {
  label: string;
  href: string;
}

export interface ProjectDetailSection {
  heading: string;
  body: string;
}

export interface PortfolioProject {
  slug: string;
  name: string;
  description: string;
  technologies: readonly string[];
  image?: ProjectImage;
  externalLinks?: readonly ProjectLink[];
  detail?: {
    overview?: string;
    context?: string;
    problem?: string;
    solution?: string;
    role?: string;
    decisions?: readonly ProjectDetailSection[];
    screenshots?: readonly ProjectImage[];
  };
}

export const projects: readonly PortfolioProject[] = [];
