import { Component, inject } from '@angular/core';
import { PORTFOLIO_DATA } from '../../core/data/portfolio.data';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="container footer">
      <p>© {{ year }} {{ name }}. Hecho con Angular.</p>
      <a href="#top">Volver arriba ↑</a>
    </footer>
  `,
  styles: `
    .footer {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      gap: var(--space-4);
      padding-block: var(--space-8);
      border-top: 1px solid var(--color-border);
      font-size: var(--text-sm);
      color: var(--color-text-muted);
    }
    a:hover {
      color: var(--color-accent);
    }
  `,
})
export class Footer {
  protected readonly name = inject(PORTFOLIO_DATA).profile.name;
  protected readonly year = new Date().getFullYear();
}
