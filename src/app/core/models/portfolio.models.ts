/**
 * Modelos del portafolio.
 * Todo el contenido del sitio se describe con estos tipos,
 * así TypeScript te avisa si falta algún dato o tiene un formato incorrecto.
 */

export type SocialPlatform = 'github' | 'linkedin' | 'x' | 'email' | 'website';

export interface SocialLink {
  platform: SocialPlatform;
  label: string;
  url: string;
}

export interface Profile {
  name: string;
  /** Nombre corto para la tarjeta de código del hero */
  shortName: string;
  role: string;
  tagline: string;
  location: string;
  email: string;
  /** Áreas de enfoque (se muestran en la tarjeta del hero) */
  focus: string[];
  /** Tecnologías principales (se muestran en la tarjeta del hero) */
  coreStack: string[];
  /** Ruta dentro de /public, p. ej. 'images/avatar.webp' */
  avatar?: string;
  /** Ruta dentro de /public, p. ej. 'cv.pdf' */
  cvUrl?: string;
  /** Texto de la etiqueta de disponibilidad; omítelo para ocultarla */
  availability?: string;
  about: string[];
  socials: SocialLink[];
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface Experience {
  company: string;
  position: string;
  /** Texto libre: '4 meses', 'Ene 2025 — Abr 2025', etc. */
  period: string;
  location?: string;
  summary?: string;
  highlights: string[];
  stack?: string[];
}

export interface Project {
  title: string;
  subtitle: string;
  description: string;
  stack: string[];
  image?: string;
  repoUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export interface Education {
  institution: string;
  degree: string;
  /** Texto libre: 'Finalización: 2026', '2019 — 2023', etc. */
  period?: string;
}

export interface Language {
  name: string;
  level: string;
}

export interface PortfolioData {
  profile: Profile;
  skills: SkillGroup[];
  experience: Experience[];
  projects: Project[];
  education: Education[];
  languages: Language[];
}

export interface NavSection {
  id: string;
  label: string;
}
