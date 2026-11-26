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
  protected readonly activeId = signal<string | null>(null);

  protected readonly initials = this.profile.name
    .split(' ')
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase();

  constructor() {
    const destroyRef = inject(DestroyRef);

    // Scroll-spy: resalta el enlace de la sección visible.
    afterNextRender(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) this.activeId.set(entry.target.id);
          }
        },
        { rootMargin: '-45% 0px -50% 0px' },
      );
      for (const { id } of this.sections) {
        const el = document.getElementById(id);
        if (el) observer.observe(el);
      }
      destroyRef.onDestroy(() => observer.disconnect());
    });
  }

  protected onScroll(): void {
    this.scrolled.set(window.scrollY > 8);
  }
}
