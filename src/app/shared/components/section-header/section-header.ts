import { Component, computed, input } from '@angular/core';
import { NAV_SECTIONS } from '../../../core/data/portfolio.data';
import { TrPipe } from '../../../core/i18n/tr.pipe';

/** Encabezado de sección: el título sale de NAV_SECTIONS. */
@Component({
  selector: 'app-section-header',
  imports: [TrPipe],
  template: `
    <header class="section-header">
      <h2 class="section-header__title" [id]="sectionId() + '-title'">{{ title() | tr }}</h2>
      <span class="section-header__line" aria-hidden="true"></span>
    </header>
  `,
  styles: `
    .section-header {
      display: flex;
      align-items: center;
      gap: var(--space-6);
      margin-bottom: var(--space-12);
    }
    .section-header__title {
      position: relative;
      padding-left: var(--space-4);
      font-size: var(--text-3xl);
      white-space: nowrap;
    }
    .section-header__title::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0.15em;
      bottom: 0.15em;
      width: 4px;
      border-radius: 2px;
      background: var(--color-accent);
    }
    .section-header__line {
      flex: 1;
      max-width: 20rem;
      height: 1px;
      background: var(--color-border);
    }
  `,
})
export class SectionHeader {
  readonly sectionId = input.required<string>();
  protected readonly title = computed(
    () => NAV_SECTIONS.find((s) => s.id === this.sectionId())?.label ?? '',
  );
}
