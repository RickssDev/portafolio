import { Component, DestroyRef, afterNextRender, inject, signal } from '@angular/core';
import { NAV_SECTIONS, PORTFOLIO_DATA } from '../../core/data/portfolio.data';
import { LanguageService } from '../../core/i18n/language.service';
import { TrPipe } from '../../core/i18n/tr.pipe';
import { UI } from '../../core/i18n/ui';
import { ThemeService } from '../../core/services/theme.service';
import { Icon } from '../../shared/components/icon/icon';

@Component({
  selector: 'app-navbar',
  imports: [Icon, TrPipe],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
  host: {
    '[class.is-scrolled]': 'scrolled()',
    '[style.--progress]': 'progress()',
    '(window:scroll)': 'onScroll()',
    '(document:keydown.escape)': 'menuOpen.set(false)',
  },
})
export class Navbar {
  protected readonly profile = inject(PORTFOLIO_DATA).profile;
  protected readonly theme = inject(ThemeService);
  protected readonly i18n = inject(LanguageService);
  protected readonly ui = UI.nav;
  protected readonly sections = NAV_SECTIONS;

  protected readonly menuOpen = signal(false);
  protected readonly scrolled = signal(false);
  /** Avance del scroll de 0 a 1 (barra inferior de la navbar). */
  protected readonly progress = signal(0);
  protected readonly activeId = signal<string | null>(null);

  /** Iniciales del nombre completo: "Ricardo Radilla Rosales" → "RRR". */
  protected readonly initials = this.profile.name
    .split(' ')
    .map((w) => w[0])
    .join('')
    .toUpperCase();

  constructor() {
    const destroyRef = inject(DestroyRef);

    // Scroll-spy: marca el enlace de la sección que ocupa el centro de la pantalla.
    afterNextRender(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (!entry.isIntersecting) continue;
            const id = entry.target.id;
            this.activeId.set(id === 'top' ? null : id);
          }
        },
        { rootMargin: '-45% 0px -50% 0px' },
      );
      for (const id of ['top', ...this.sections.map((s) => s.id)]) {
        const el = document.getElementById(id);
        if (el) observer.observe(el);
      }
      this.onScroll();
      destroyRef.onDestroy(() => observer.disconnect());
    });
  }

  protected onScroll(): void {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    this.scrolled.set(window.scrollY > 8);
    this.progress.set(max > 0 ? Math.min(window.scrollY / max, 1) : 0);
  }
}
