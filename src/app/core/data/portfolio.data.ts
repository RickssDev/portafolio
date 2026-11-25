import { InjectionToken } from '@angular/core';
import { NavSection, PortfolioData } from '../models/portfolio.models';

/**
 * ✏️  CONTENIDO DEL SITIO.
 * Es el único archivo que necesitas tocar para cambiar el texto del portafolio.
 */
export const PORTFOLIO: PortfolioData = {
  profile: {
    name: 'Ricardo Radilla Rosales',
    shortName: 'Ricardo Radilla',
    role: 'Backend | Full Stack Software Engineer',
    tagline:
      'Diseño e implemento APIs REST, servicios backend y aplicaciones web completas, desde la base de datos hasta el despliegue.',
    location: 'Ciudad de México, México',
    email: 'ricardoradillar@gmail.com',
    focus: ['Backend', 'Full Stack', 'DevOps'],
    coreStack: ['Node.js', 'TypeScript', 'MySQL', 'Docker'],
    avatar: undefined,
    cvUrl: undefined,
    availability: 'Abierto a oportunidades',
    about: [
      'Soy estudiante de Ingeniería en Tecnologías de la Información, próximo a concluir mi formación profesional, con enfoque principal en desarrollo Backend y Full Stack.',
      'He participado en proyectos personales, académicos y profesionales, fortaleciendo mis habilidades en el diseño e implementación de APIs REST, arquitecturas de software, servicios Backend, integración de bases de datos, desarrollo de aplicaciones web y DevOps.',
    ],
    socials: [
      { platform: 'github', label: 'GitHub', url: 'https://github.com/RickssDev' },
      { platform: 'linkedin', label: 'LinkedIn', url: 'https://www.linkedin.com/in/ricardor2005' },
      { platform: 'email', label: 'Correo', url: 'mailto:ricardoradillar@gmail.com' },
    ],
  },

  skills: [
    { category: 'Lenguajes', items: ['Java', 'PHP', 'JavaScript', 'TypeScript', 'C++', 'SQL', 'Bash'] },
    { category: 'Backend y Web', items: ['Node.js', 'Express.js', 'REST APIs', 'Webhooks'] },
    { category: 'Frontend', items: ['React', 'Vite', 'Tailwind CSS', 'CSS'] },
    { category: 'Bases de datos', items: ['MySQL', 'PostgreSQL', 'MariaDB'] },
    { category: 'Seguridad', items: ['JWT', 'OAuth 2.0', 'Trivy', 'Gitleaks'] },
    { category: 'Pruebas y Calidad', items: ['Jest', 'Supertest', 'Vitest', 'ESLint'] },
    {
      category: 'DevOps y Herramientas',
      items: ['Docker', 'GitHub Actions', 'CI/CD', 'Nginx', 'Cloudflare', 'Git', 'GitHub'],
    },
    { category: 'Contenedores', items: ['Docker Compose', 'Multi-stage Builds', 'Arquitectura Multicontenedor'] },
    {
      category: 'Arquitecturas y Prácticas',
      items: ['Monolito Modular', 'Microservicios', 'Arquitectura por capas', 'Ágil', 'Scrum', 'Kanban', 'SEO', 'ADRs'],
    },
    { category: 'IA', items: ['Claude Code', 'ChatGPT', 'Prompt Engineering', 'Desarrollo Asistido por IA'] },
  ],

  experience: [
    {
      company: 'Sysyra Solutions',
      position: 'Pasante de Webmaster',
      period: '4 meses',
      highlights: [
        'Mantenimiento y optimización de plataformas web corporativas, implementando funcionalidades personalizadas que mejoraron la estructura del sitio y la navegación de los usuarios.',
        'Elaboración de documentación técnica y guías de uso de APIs para equipos internos, facilitando la incorporación de nuevos integrantes y el mantenimiento de la plataforma.',
      ],
    },
  ],

  projects: [
    {
      title: 'DentissaApp',
      subtitle: 'Gestión de consultorios dentales',
      description:
        'Plataforma desarrollada con una arquitectura de monolito modular para una mejor escalabilidad, con despliegue en contenedores Docker.',
      stack: ['Node.js', 'Express.js', 'React', 'MySQL', 'Docker'],
      featured: true,
    },
    {
      title: 'InventarioFerretería',
      subtitle: 'Control y gestión de inventario',
      description:
        'Proyecto desarrollado en equipo, empleando una arquitectura modular para una organización más eficaz del código y del trabajo.',
      stack: ['Node.js', 'Express.js', 'React', 'MySQL'],
    },
    {
      title: 'Barbershop',
      subtitle: 'Gestión y administración de citas',
      description:
        'Plataforma construida por etapas según las necesidades del cliente, siguiendo la metodología Kanban.',
      stack: ['Node.js', 'Express.js', 'React', 'Tailwind CSS', 'MySQL'],
    },
  ],

  education: [
    {
      degree: 'Ingeniería en Tecnologías de la Información',
      institution: 'Universidad Tecnológica de la Costa Grande de Guerrero',
      period: 'Desarrollo de Software Multiplataforma · Finalización: 2026',
    },
    {
      degree: 'TSU en Tecnologías de la Información',
      institution: 'Universidad Tecnológica de la Costa Grande de Guerrero',
      period: 'Desarrollo de Software',
    },
  ],

  languages: [
    { name: 'Español', level: 'Nativo' },
    { name: 'Inglés', level: 'B1' },
  ],
};

/**
 * Secciones de la página, en orden. Define el menú y la numeración ("01.", "02."…).
 * El id debe coincidir con el de cada <section>.
 */
export const NAV_SECTIONS: NavSection[] = [
  { id: 'about', label: 'Sobre mí' },
  { id: 'skills', label: 'Habilidades' },
  { id: 'projects', label: 'Proyectos' },
  { id: 'experience', label: 'Experiencia' },
  { id: 'contact', label: 'Contacto' },
];

/** Devuelve '01.', '02.'… según la posición de la sección en NAV_SECTIONS. */
export function sectionNumber(id: string): string {
  const index = NAV_SECTIONS.findIndex((s) => s.id === id);
  return `${String(index + 1).padStart(2, '0')}.`;
}

/**
 * Token de inyección: los componentes piden los datos con `inject(PORTFOLIO_DATA)`.
 * Si más adelante quieres cargarlos desde un JSON o un CMS, solo cambias este proveedor.
 */
export const PORTFOLIO_DATA = new InjectionToken<PortfolioData>('PORTFOLIO_DATA', {
  providedIn: 'root',
  factory: () => PORTFOLIO,
});
