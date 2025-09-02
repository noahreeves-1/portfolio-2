import { StaticImageData } from "next/image";

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  imageSrc: StaticImageData | string;
  additionalImages?: {
    src: StaticImageData | string;
    alt: string;
  }[];
  logoSrc?: StaticImageData | string;
  category: string;
  techStack: {
    frontend?: string[];
    backend?: string[];
    database?: string[];
    other?: string[];
  };
  simpleTechStack?: string[];
  features?: string[];
  metrics?: {
    label: string;
    value: string;
  }[];
  websiteUrl?: string;
  githubUrl?: string;
  challenges?: string[];
  learnings?: string[];
  isFeatured?: boolean;
}