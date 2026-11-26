import { Component, inject } from '@angular/core';
import { PORTFOLIO_DATA } from '../../core/data/portfolio.data';
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
  protected readonly profile = inject(PORTFOLIO_DATA).profile;
  protected readonly ui = UI.hero;

  /** Convierte ['a', 'b'] en "['a', 'b']" para la tarjeta de código. */
  protected list(items: string[]): string {
    return `[${items.map((i) => `'${i}'`).join(', ')}]`;
  }
}
