import { Text } from '../models/portfolio.models';

/** Textos fijos de la interfaz (botones, etiquetas, accesibilidad) en ambos idiomas. */
export const UI = {
  meta: {
    title: {
      es: 'Ricardo Radilla Rosales — Backend | Full Stack Software Engineer',
      en: 'Ricardo Radilla Rosales — Backend | Full Stack Software Engineer',
    },
    description: {
      es: 'Portafolio de Ricardo Radilla Rosales, ingeniero de software Backend y Full Stack: APIs REST, Node.js, TypeScript, MySQL y Docker.',
      en: 'Portfolio of Ricardo Radilla Rosales, Backend and Full Stack software engineer: REST APIs, Node.js, TypeScript, MySQL and Docker.',
    },
  },
  skipLink: { es: 'Saltar al contenido', en: 'Skip to content' },
  nav: {
    main: { es: 'Principal', en: 'Main' },
    home: { es: 'inicio', en: 'home' },
    openMenu: { es: 'Abrir menú', en: 'Open menu' },
    closeMenu: { es: 'Cerrar menú', en: 'Close menu' },
    toLight: { es: 'Cambiar a tema claro', en: 'Switch to light theme' },
    toDark: { es: 'Cambiar a tema oscuro', en: 'Switch to dark theme' },
    switchLang: { es: 'Switch to English', en: 'Cambiar a español' },
  },
  hero: {
    greeting: { es: 'Hola, soy', en: "Hi, I'm" },
    viewProjects: { es: 'Ver proyectos', en: 'View projects' },
    downloadCv: { es: 'Descargar CV', en: 'Download CV' },
    contact: { es: 'Contactar', en: 'Get in touch' },
    socials: { es: 'Redes y contacto', en: 'Social links and contact' },
  },
  about: {
    location: { es: 'Ubicación', en: 'Location' },
    focus: { es: 'Enfoque', en: 'Focus' },
    education: { es: 'Formación', en: 'Education' },
    languages: { es: 'Idiomas', en: 'Languages' },
    photoOf: { es: 'Foto de', en: 'Photo of' },
  },
  projects: {
    codeOf: { es: 'Código de', en: 'Source code of' },
    demoOf: { es: 'Demo de', en: 'Live demo of' },
    screenshotOf: { es: 'Captura de', en: 'Screenshot of' },
    empty: { es: 'Pronto habrá proyectos aquí.', en: 'Projects coming soon.' },
  },
  contact: {
    eyebrow: { es: '¿Qué sigue?', en: "What's next?" },
    title: { es: 'Hablemos', en: "Let's talk" },
    text: {
      es: 'Estoy abierto a oportunidades en desarrollo Backend y Full Stack. Si tienes un proyecto o una vacante, escríbeme y te respondo pronto.',
      en: "I'm open to Backend and Full Stack opportunities. If you have a project or a role in mind, drop me a line and I'll get back to you soon.",
    },
  },
  footer: {
    madeWith: { es: 'Hecho con Angular.', en: 'Built with Angular.' },
    backToTop: { es: 'Volver arriba ↑', en: 'Back to top ↑' },
  },
} satisfies Record<string, Record<string, Text | Record<string, Text>>>;
