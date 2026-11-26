import { Component, computed, inject } from '@angular/core';
import { PORTFOLIO_DATA } from '../../core/data/portfolio.data';
import { LanguageService } from '../../core/i18n/language.service';
import { TrPipe } from '../../core/i18n/tr.pipe';
import { UI } from '../../core/i18n/ui';
import { Icon } from '../../shared/components/icon/icon';

@Component({
  selector: 'app-hero',
  imports: [Icon, TrPipe],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  private readonly data = inject(PORTFOLIO_DATA);
  private readonly i18n = inject(LanguageService);
  protected readonly profile = this.data.profile;
  protected readonly ui = UI.hero;

  /** Idiomas para la tarjeta de código, traducidos: ['Español', 'Inglés'] / ['Spanish', 'English']. */
  protected readonly languages = computed(() =>
    this.list(this.data.languages.map((l) => this.i18n.resolve(l.name))),
  );

  /** Convierte ['a', 'b'] en "['a', 'b']" para la tarjeta de código. */
  protected list(items: string[]): string {
    return `[${items.map((i) => `'${i}'`).join(', ')}]`;
  }
}
