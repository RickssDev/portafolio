import { TestBed } from '@angular/core/testing';
import { App } from './app';
import { NAV_SECTIONS, PORTFOLIO } from './core/data/portfolio.data';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [App] }).compileComponents();
  });

  it('crea la aplicación', () => {
    const fixture = TestBed.createComponent(App);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('muestra el nombre del perfil en el h1', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('h1')?.textContent).toContain(PORTFOLIO.profile.name);
  });

  it('renderiza una <section> por cada enlace de navegación', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const el = fixture.nativeElement as HTMLElement;
    for (const { id } of NAV_SECTIONS) {
      expect(el.querySelector(`section#${id}`), `falta la sección #${id}`).not.toBeNull();
    }
  });
});
