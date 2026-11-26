# Portafolio

Portafolio personal en una sola página (one-page), hecho con Angular 22 y TypeScript.

## Comandos

```bash
npm install      # instalar dependencias
npm start        # servidor de desarrollo en http://localhost:4200
npm test         # tests unitarios (Vitest)
npm run build    # build de producción en dist/portafolio/browser
```

## Dónde cambiar cada cosa

| Quiero cambiar…                   | Archivo                                   |
| --------------------------------- | ----------------------------------------- |
| Textos, experiencia, proyectos    | `src/app/core/data/portfolio.data.ts`     |
| Colores, tipografía, espaciado    | `src/styles/_tokens.scss`                 |
| Título, descripción y SEO         | `src/index.html`                          |
| Foto, CV e imágenes               | carpeta `public/` (p. ej. `public/images`) |

## Estructura

```
src/
├── app/
│   ├── core/
│   │   ├── data/portfolio.data.ts     ← todo el contenido del sitio
│   │   ├── models/                    ← tipos (Profile, Project, Experience…)
│   │   └── services/theme.service.ts  ← tema claro/oscuro
│   ├── layout/                        ← navbar (scroll-spy, menú móvil) y footer
│   ├── sections/                      ← una carpeta por sección de la página
│   │   ├── hero/  about/  skills/
│   │   └── projects/  experience/  contact/
│   └── shared/                        ← piezas reutilizables
│       ├── components/  (icon, section-header)
│       └── directives/  (appReveal: animación al hacer scroll)
└── styles/                            ← tokens de diseño y estilos base
```

### Añadir una sección nueva

1. Crea `src/app/sections/<nombre>/` con su componente (`<section id="<nombre>">`).
2. Agrégalo en `src/app/app.ts` (imports) y en `src/app/app.html`.
3. Añádelo a `NAV_SECTIONS` en `portfolio.data.ts` (define el menú de navegación).
