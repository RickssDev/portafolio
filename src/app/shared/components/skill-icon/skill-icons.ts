/**
 * Registro de iconos de habilidades.
 *
 * - `brand`: logo oficial de la tecnología (paquete simple-icons; solo se empaquetan los importados).
 * - `line`: icono de línea propio para conceptos sin logo (REST, CI/CD, Scrum…).
 *
 * Para añadir uno: importa el logo de 'simple-icons' (busca el nombre en https://simpleicons.org)
 * o dibuja trazos en un viewBox de 24×24, y agrégalo a SKILL_ICONS.
 */
import {
  siClaude,
  siCloudflare,
  siCplusplus,
  siCss,
  siDocker,
  siEslint,
  siExpress,
  siGit,
  siGithub,
  siGithubactions,
  siGnubash,
  siJavascript,
  siJest,
  siJsonwebtokens,
  siMariadb,
  siMysql,
  siNginx,
  siNodedotjs,
  siOpenjdk,
  siPhp,
  siPostgresql,
  siReact,
  siTailwindcss,
  siTrivy,
  siTypescript,
  siVite,
  siVitest,
  type SimpleIcon,
} from 'simple-icons';

export interface BrandIcon {
  kind: 'brand';
  path: string;
  /** Color de marca (#hex) o null si es demasiado oscuro y debe usar el color del texto */
  color: string | null;
}

export interface LineIcon {
  kind: 'line';
  paths: string[];
}

export type SkillIconDef = BrandIcon | LineIcon;

/** Logo de marca. `color` permite sobrescribir colores de marca negros o poco visibles. */
function brand(icon: SimpleIcon, color?: string): BrandIcon {
  const hex = color ?? `#${icon.hex}`;
  return { kind: 'brand', path: icon.path, color: isTooDark(hex) ? null : hex };
}

function line(...paths: string[]): LineIcon {
  return { kind: 'line', paths };
}

function isTooDark(hex: string): boolean {
  const n = parseInt(hex.slice(1), 16);
  const [r, g, b] = [(n >> 16) & 255, (n >> 8) & 255, n & 255];
  return 0.2126 * r + 0.7152 * g + 0.0722 * b < 40;
}

export const SKILL_ICONS = {
  // Lenguajes
  java: brand(siOpenjdk, '#E76F00'),
  php: brand(siPhp),
  javascript: brand(siJavascript),
  typescript: brand(siTypescript),
  cplusplus: brand(siCplusplus),
  bash: brand(siGnubash),
  sql: line(
    'M12 8c4.4 0 8-1.3 8-3s-3.6-3-8-3-8 1.3-8 3 3.6 3 8 3Z',
    'M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5',
    'M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3',
  ),

  // Backend y web
  nodejs: brand(siNodedotjs),
  express: brand(siExpress),
  rest: line(
    'M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5a2 2 0 0 0 2 2h1',
    'M16 21h1a2 2 0 0 0 2-2v-5a2 2 0 0 1 2-2 2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1',
  ),
  webhook: line('M13 2 4 14h8l-1 8 9-12h-8l1-8Z'),

  // Frontend
  react: brand(siReact),
  vite: brand(siVite),
  tailwind: brand(siTailwindcss),
  css: brand(siCss),

  // Bases de datos
  mysql: brand(siMysql),
  postgresql: brand(siPostgresql),
  mariadb: brand(siMariadb, '#C0765A'),

  // Seguridad
  jwt: brand(siJsonwebtokens, '#FB015B'),
  oauth: line(
    'M7.5 10a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11Z',
    'M11.4 11.6 21 2',
    'M15.5 7.5l3 3',
    'M18.5 4.5l2 2',
  ),
  trivy: brand(siTrivy, '#2BB5F4'),
  shield: line('M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z', 'M9 12l2 2 4-4'),

  // Pruebas y calidad
  jest: brand(siJest),
  vitest: brand(siVitest, '#6DA13F'),
  eslint: brand(siEslint, '#8080F2'),
  flask: line('M9 2h6', 'M10 2v6L4.2 19.5A1.7 1.7 0 0 0 5.7 22h12.6a1.7 1.7 0 0 0 1.5-2.5L14 8V2', 'M7 15h10'),

  // DevOps y herramientas
  docker: brand(siDocker),
  githubactions: brand(siGithubactions),
  nginx: brand(siNginx),
  cloudflare: brand(siCloudflare),
  git: brand(siGit),
  github: brand(siGithub),
  cicd: line(
    'M21 12a9 9 0 0 1-15.5 6.3L3 16',
    'M3 21v-5h5',
    'M3 12a9 9 0 0 1 15.5-6.3L21 8',
    'M21 3v5h-5',
  ),

  // Contenedores
  layers: line('M12 2 2 7l10 5 10-5-10-5Z', 'M2 17l10 5 10-5', 'M2 12l10 5 10-5'),
  boxes: line('M3 3h7v7H3Z', 'M14 3h7v7h-7Z', 'M3 14h7v7H3Z', 'M14 14h7v7h-7Z'),

  // Arquitectura y prácticas
  modules: line('M4 4h16v16H4Z', 'M4 12h16', 'M12 4v16'),
  network: line(
    'M12 2.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z',
    'M5 16.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z',
    'M19 16.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z',
    'M12 7.5v4m0 0L6.5 17m5.5-5.5 5.5 5.5',
  ),
  agile: line('M17 2l4 4-4 4', 'M3 11v-1a4 4 0 0 1 4-4h14', 'M7 22l-4-4 4-4', 'M21 13v1a4 4 0 0 1-4 4H3'),
  timer: line('M12 22a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z', 'M12 10v4l2 2', 'M10 2h4'),
  kanban: line('M4 3h4v14H4Z', 'M10 3h4v9h-4Z', 'M16 3h4v18h-4Z'),
  search: line('M11 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z', 'M21 21l-4.3-4.3'),
  docs: line('M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z', 'M14 2v6h6', 'M8 13h8', 'M8 17h5'),

  // IA
  claude: brand(siClaude),
  sparkles: line(
    'M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9Z',
    'M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8Z',
  ),
  terminal: line('M4 17l6-6-6-6', 'M12 19h8'),
} satisfies Record<string, SkillIconDef>;

export type SkillIconId = keyof typeof SKILL_ICONS;
