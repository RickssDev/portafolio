/**
 * Modelos del portafolio.
 * Todo el contenido del sitio se describe con estos tipos,
 * así TypeScript te avisa si falta algún dato o tiene un formato incorrecto.
 */
import type { SkillIconId } from '../../shared/components/skill-icon/skill-icons';

export type Lang = 'es' | 'en';

/**
 * Texto traducible.
 * - Un string simple se muestra igual en ambos idiomas ('Node.js').
 * - Un objeto { es, en } se muestra según el idioma activo.
 */
export type Text = string | Record<Lang, string>;

export type SocialPlatform = 'github' | 'linkedin' | 'x' | 'email' | 'website';

export interface SocialLink {
  platform: SocialPlatform;
  label: Text;
  url: string;
}

export interface Profile {
  name: string;
  /** Nombre corto (texto alternativo, metadatos) */
  shortName: string;
  role: Text;
  /** Rol que aparece en la tarjeta de código del hero (ricardo.ts) */
  cardRole: Text;
  tagline: Text;
  location: Text;
  email: string;
  /** Áreas de enfoque (tarjeta del hero y "Sobre mí") */
  focus: string[];
  /** Tecnologías principales (tarjeta del hero) */
  coreStack: string[];
  /** Ruta dentro de /public, p. ej. 'images/avatar.webp' */
  avatar?: string;
  /** Ruta dentro de /public, p. ej. 'cv.pdf' */
  cvUrl?: string;
  /** Etiqueta de disponibilidad; omítela para ocultarla */
  availability?: Text;
  about: Text[];
  socials: SocialLink[];
}

export interface Skill {
  name: Text;
  /** Clave del icono en shared/components/skill-icon/skill-icons.ts */
  icon: SkillIconId;
}

export interface SkillGroup {
  category: Text;
  /** Ancho en escritorio: normal = 1/2 de la fila; 'wide' = 2/3; 'narrow' = 1/3 */
  size?: 'wide' | 'narrow';
  items: Skill[];
}

export interface Experience {
  company: string;
  position: Text;
  period: Text;
  location?: Text;
  summary?: Text;
  highlights: Text[];
  stack?: string[];
}

/** completed = terminado (verde) · in-progress = en curso (ámbar) */
export type ProjectStatus = 'completed' | 'in-progress';

export interface Project {
  title: string;
  status: ProjectStatus;
  subtitle: Text;
  description: Text;
  stack: string[];
  image?: string;
  repoUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export interface Education {
  institution: string;
  degree: Text;
  period?: Text;
}

export interface Language {
  name: Text;
  level: Text;
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
  label: Text;
}
