import { Component, inject } from '@angular/core';
import { PORTFOLIO_DATA } from '../../core/data/portfolio.data';
import { TrPipe } from '../../core/i18n/tr.pipe';
import { UI } from '../../core/i18n/ui';

@Component({
  selector: 'app-footer',
  imports: [TrPipe],
  template: `
    <footer class="container footer">
      <p>© {{ year }} {{ name }}</p>
      <a href="#top" class="btn">{{ ui.backToTop | tr }}</a>
    </footer>
  `,
  styles: `
    .footer {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      gap: var(--space-4);
      padding-block: var(--space-8);
      border-top: 1px solid var(--color-border);
      font-size: var(--text-sm);
      color: var(--color-text-muted);
    }
    .btn {
      padding: var(--space-2) var(--space-4);
      color: var(--color-text);
    }
    .btn:hover {
      color: var(--color-accent);
    }
  `,
})
export class Footer {
  protected readonly name = inject(PORTFOLIO_DATA).profile.name;
  protected readonly ui = UI.footer;
  protected readonly year = new Date().getFullYear();
}
