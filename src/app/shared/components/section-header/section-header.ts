import { Component, computed, input } from '@angular/core';
import { NAV_SECTIONS, sectionNumber } from '../../../core/data/portfolio.data';

/** Encabezado de sección: número y título salen de NAV_SECTIONS. */
@Component({
  selector: 'app-section-header',
  template: `
    <header class="section-header">
      <h2 class="section-header__title" [id]="sectionId() + '-title'">
        <span class="section-header__number">{{ number() }}</span>
        {{ title() }}
      </h2>
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
      font-size: var(--text-3xl);
      white-space: nowrap;
    }
    .section-header__number {
      font-family: var(--font-mono);
      font-size: 0.6em;
      font-weight: 500;
      color: var(--color-accent);
      margin-right: var(--space-2);
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
  protected readonly number = computed(() => sectionNumber(this.sectionId()));
  protected readonly title = computed(
    () => NAV_SECTIONS.find((s) => s.id === this.sectionId())?.label ?? '',
  );
}
