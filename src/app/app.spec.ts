import { TestBed } from '@angular/core/testing';
import { App } from './app';
import { NAV_SECTIONS, PORTFOLIO } from './core/data/portfolio.data';
import { LanguageService } from './core/i18n/language.service';
import { SKILL_ICONS } from './shared/components/skill-icon/skill-icons';

describe('App', () => {
  beforeEach(async () => {
    localStorage.clear();
    await TestBed.configureTestingModule({ imports: [App] }).compileComponents();
  });

  async function render() {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    return { fixture, el: fixture.nativeElement as HTMLElement };
  }

  it('crea la aplicación', async () => {
    const { fixture } = await render();
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('muestra el nombre del perfil en el h1', async () => {
    const { el } = await render();
    expect(el.querySelector('h1')?.textContent).toContain(PORTFOLIO.profile.name);
  });

  it('renderiza una <section> por cada enlace de navegación', async () => {
    const { el } = await render();
    for (const { id } of NAV_SECTIONS) {
      expect(el.querySelector(`section#${id}`), `falta la sección #${id}`).not.toBeNull();
    }
  });

  it('cambia los textos al cambiar de idioma', async () => {
    const { fixture, el } = await render();
    const i18n = TestBed.inject(LanguageService);
    const title = () => el.querySelector('#skills-title')?.textContent ?? '';

    i18n.lang.set('es');
    await fixture.whenStable();
    expect(title()).toContain('Habilidades');
    expect(document.documentElement.lang).toBe('es');

    i18n.lang.set('en');
    await fixture.whenStable();
    expect(title()).toContain('Skills');
    expect(document.documentElement.lang).toBe('en');
  });

  it('todas las habilidades tienen un icono registrado', () => {
    for (const group of PORTFOLIO.skills) {
      for (const skill of group.items) {
        expect(SKILL_ICONS[skill.icon], `sin icono: ${JSON.stringify(skill.name)}`).toBeDefined();
      }
    }
  });
});
