import { InjectionToken } from '@angular/core';
import { NavSection, PortfolioData } from '../models/portfolio.models';

/**
 * ✏️  CONTENIDO DEL SITIO.
 * Es el único archivo que necesitas tocar para cambiar el texto del portafolio.
 *
 * Textos traducibles: { es: '...', en: '...' }
 * Textos iguales en ambos idiomas (nombres de tecnologías, etc.): un string simple.
 */
export const PORTFOLIO: PortfolioData = {
  profile: {
    name: 'Ricardo Radilla Rosales',
    shortName: 'Ricardo Radilla',
    role: 'Backend | Full Stack Software Engineer',
    tagline: {
      es: 'Diseño e implemento APIs REST, servicios backend y aplicaciones web completas, desde la base de datos hasta el despliegue.',
      en: 'I design and build REST APIs, backend services and full web applications, from the database all the way to deployment.',
    },
    location: { es: 'Ciudad de México, México', en: 'Mexico City, Mexico' },
    email: 'ricardoradillar@gmail.com',
    focus: ['Backend', 'Full Stack'],
    coreStack: ['Node.js', 'TypeScript', 'MySQL', 'Docker'],
    avatar: undefined,
    cvUrl: undefined,
    availability: { es: 'Abierto a oportunidades', en: 'Open to opportunities' },
    about: [
      {
        es: 'Soy estudiante de Ingeniería en Tecnologías de la Información, próximo a concluir mi formación profesional, con enfoque principal en desarrollo Backend y Full Stack.',
        en: "I'm an Information Technology Engineering student about to complete my degree, focused mainly on Backend and Full Stack development.",
      },
      {
        es: 'He participado en proyectos personales, académicos y profesionales, fortaleciendo mis habilidades en el diseño e implementación de APIs REST, arquitecturas de software, servicios Backend, integración de bases de datos, desarrollo de aplicaciones web y DevOps.',
        en: "I've worked on personal, academic and professional projects, strengthening my skills in designing and implementing REST APIs, software architecture, backend services, database integration, web application development and DevOps.",
      },
    ],
    socials: [
      { platform: 'github', label: 'GitHub', url: 'https://github.com/RickssDev' },
      { platform: 'linkedin', label: 'LinkedIn', url: 'https://www.linkedin.com/in/ricardor2005' },
      { platform: 'email', label: { es: 'Correo', en: 'Email' }, url: 'mailto:ricardoradillar@gmail.com' },
    ],
  },

  // Cada habilidad lleva un `icon`: la lista está en shared/components/skill-icon/skill-icons.ts
  skills: [
    {
      category: { es: 'Lenguajes', en: 'Languages' },
      items: [
        { name: 'Java', icon: 'java' },
        { name: 'PHP', icon: 'php' },
        { name: 'JavaScript', icon: 'javascript' },
        { name: 'TypeScript', icon: 'typescript' },
        { name: 'C++', icon: 'cplusplus' },
        { name: 'SQL', icon: 'sql' },
        { name: 'Bash', icon: 'bash' },
      ],
    },
    {
      category: { es: 'Backend y Web', en: 'Backend & Web' },
      items: [
        { name: 'Node.js', icon: 'nodejs' },
        { name: 'Express.js', icon: 'express' },
        { name: 'REST APIs', icon: 'rest' },
        { name: 'Webhooks', icon: 'webhook' },
      ],
    },
    {
      category: 'Frontend',
      items: [
        { name: 'React', icon: 'react' },
        { name: 'Vite', icon: 'vite' },
        { name: 'Tailwind CSS', icon: 'tailwind' },
        { name: 'CSS', icon: 'css' },
      ],
    },
    {
      category: { es: 'Bases de datos', en: 'Databases' },
      items: [
        { name: 'MySQL', icon: 'mysql' },
        { name: 'PostgreSQL', icon: 'postgresql' },
        { name: 'MariaDB', icon: 'mariadb' },
      ],
    },
    {
      category: { es: 'Seguridad', en: 'Security' },
      items: [
        { name: 'JWT', icon: 'jwt' },
        { name: 'OAuth 2.0', icon: 'oauth' },
        { name: 'Trivy', icon: 'trivy' },
        { name: 'Gitleaks', icon: 'shield' },
      ],
    },
    {
      category: { es: 'Pruebas y Calidad', en: 'Testing & Quality' },
      items: [
        { name: 'Jest', icon: 'jest' },
        { name: 'Supertest', icon: 'flask' },
        { name: 'Vitest', icon: 'vitest' },
        { name: 'ESLint', icon: 'eslint' },
      ],
    },
    {
      category: { es: 'DevOps y Herramientas', en: 'DevOps & Tools' },
      items: [
        { name: 'Docker', icon: 'docker' },
        { name: 'GitHub Actions', icon: 'githubactions' },
        { name: 'CI/CD', icon: 'cicd' },
        { name: 'Nginx', icon: 'nginx' },
        { name: 'Cloudflare', icon: 'cloudflare' },
        { name: 'Git', icon: 'git' },
        { name: 'GitHub', icon: 'github' },
      ],
    },
    {
      category: { es: 'Contenedores', en: 'Containers' },
      items: [
        { name: 'Docker Compose', icon: 'docker' },
        { name: 'Multi-stage Builds', icon: 'layers' },
        { name: { es: 'Arquitectura Multicontenedor', en: 'Multi-container Architecture' }, icon: 'boxes' },
      ],
    },
    {
      category: { es: 'Arquitecturas y Prácticas', en: 'Architecture & Practices' },
      items: [
        { name: { es: 'Monolito Modular', en: 'Modular Monolith' }, icon: 'modules' },
        { name: { es: 'Microservicios', en: 'Microservices' }, icon: 'network' },
        { name: { es: 'Arquitectura por capas', en: 'Layered Architecture' }, icon: 'layers' },
        { name: { es: 'Ágil', en: 'Agile' }, icon: 'agile' },
        { name: 'Scrum', icon: 'timer' },
        { name: 'Kanban', icon: 'kanban' },
        { name: 'SEO', icon: 'search' },
        { name: 'ADRs', icon: 'docs' },
      ],
    },
    {
      category: { es: 'IA', en: 'AI' },
      items: [
        { name: 'Claude Code', icon: 'claude' },
        { name: 'ChatGPT', icon: 'sparkles' },
        { name: 'Prompt Engineering', icon: 'terminal' },
        { name: { es: 'Desarrollo Asistido por IA', en: 'AI-Assisted Development' }, icon: 'sparkles' },
      ],
    },
  ],

  experience: [
    {
      company: 'Sysyra Solutions',
      position: { es: 'Pasante de Webmaster', en: 'Webmaster Intern' },
      period: { es: 'Ene 2025 — Abr 2025', en: 'Jan 2025 — Apr 2025' },
      highlights: [
        {
          es: 'Mantenimiento y optimización de plataformas web corporativas, implementando funcionalidades personalizadas que mejoraron la estructura del sitio y la navegación de los usuarios.',
          en: 'Maintained and optimized corporate web platforms, implementing custom features that improved site structure and user navigation.',
        },
        {
          es: 'Elaboración de documentación técnica y guías de uso de APIs para equipos internos, facilitando la incorporación de nuevos integrantes y el mantenimiento de la plataforma.',
          en: 'Wrote technical documentation and API usage guides for internal teams, easing the onboarding of new members and platform maintenance.',
        },
      ],
      stack: ['PHP', 'Blade', 'Shopify', 'CSS'],
    },
  ],

  projects: [
    {
      title: 'DentissaApp',
      subtitle: { es: 'Gestión de consultorios dentales', en: 'Dental clinic management' },
      description: {
        es: 'Plataforma desarrollada con una arquitectura de monolito modular para una mejor escalabilidad, con despliegue en contenedores Docker.',
        en: 'Platform built on a modular monolith architecture for better scalability, deployed with Docker containers.',
      },
      stack: ['Node.js', 'Express.js', 'React', 'MySQL', 'Docker'],
      featured: true,
    },
    {
      title: 'InventarioFerretería',
      subtitle: { es: 'Control y gestión de inventario', en: 'Inventory control and management' },
      description: {
        es: 'Proyecto desarrollado en equipo, empleando una arquitectura modular para una organización más eficaz del código y del trabajo.',
        en: 'Team project using a modular architecture for a more effective organization of both code and work.',
      },
      stack: ['Node.js', 'Express.js', 'React', 'MySQL'],
    },
    {
      title: 'Barbershop',
      subtitle: { es: 'Gestión y administración de citas', en: 'Appointment management' },
      description: {
        es: 'Plataforma construida por etapas según las necesidades del cliente, siguiendo la metodología Kanban.',
        en: "Platform delivered in stages according to the client's needs, following the Kanban methodology.",
      },
      stack: ['Node.js', 'Express.js', 'React', 'Tailwind CSS', 'MySQL'],
    },
  ],

  education: [
    {
      degree: {
        es: 'Ingeniería en Tecnologías de la Información',
        en: 'B.Eng. in Information Technology',
      },
      institution: 'Universidad Tecnológica de la Costa Grande de Guerrero',
      period: {
        es: 'Desarrollo de Software Multiplataforma · Finalización: 2027',
        en: 'Multiplatform Software Development · Expected: 2027',
      },
    },
    {
      degree: {
        es: 'TSU en Tecnologías de la Información',
        en: 'Associate Degree in Information Technology',
      },
      institution: 'Universidad Tecnológica de la Costa Grande de Guerrero',
      period: { es: 'Desarrollo de Software', en: 'Software Development' },
    },
  ],

  languages: [
    { name: { es: 'Español', en: 'Spanish' }, level: { es: 'Nativo', en: 'Native' } },
    { name: { es: 'Inglés', en: 'English' }, level: 'B1' },
  ],
};

/**
 * Secciones de la página, en orden. Define el menú y la numeración ("01.", "02."…).
 * El id debe coincidir con el de cada <section>.
 */
export const NAV_SECTIONS: NavSection[] = [
  { id: 'about', label: { es: 'Sobre mí', en: 'About' } },
  { id: 'skills', label: { es: 'Habilidades', en: 'Skills' } },
  { id: 'projects', label: { es: 'Proyectos', en: 'Projects' } },
  { id: 'experience', label: { es: 'Experiencia', en: 'Experience' } },
  { id: 'contact', label: { es: 'Contacto', en: 'Contact' } },
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
