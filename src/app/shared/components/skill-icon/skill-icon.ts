import { Component, computed, input } from '@angular/core';
import { SKILL_ICONS, SkillIconDef, SkillIconId } from './skill-icons';

/** Dibuja el icono de una habilidad (logo de marca o icono de línea). */
@Component({
  selector: 'app-skill-icon',
  template: `
    <svg viewBox="0 0 24 24" [attr.width]="size()" [attr.height]="size()" aria-hidden="true">
      @switch (icon().kind) {
        @case ('brand') {
          <path [attr.d]="brandPath()" fill="currentColor" />
        }
        @case ('line') {
          @for (d of linePaths(); track $index) {
            <path
              [attr.d]="d"
              fill="none"
              stroke="currentColor"
              stroke-width="1.75"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          }
        }
      }
    </svg>
  `,
  styles: `
    :host {
      display: inline-flex;
    }
  `,
})
export class SkillIcon {
  readonly name = input.required<SkillIconId>();
  readonly size = input(28);

  protected readonly icon = computed<SkillIconDef>(() => SKILL_ICONS[this.name()]);
  protected readonly brandPath = computed(() => {
    const i = this.icon();
    return i.kind === 'brand' ? i.path : '';
  });
  protected readonly linePaths = computed(() => {
    const i = this.icon();
    return i.kind === 'line' ? i.paths : [];
  });
}

/**
 * Color del icono: el de la marca; el del texto si la marca es negra;
 * o el acento del sitio para los iconos de línea.
 */
export function skillColor(id: SkillIconId): string {
  const icon = SKILL_ICONS[id];
  if (icon.kind === 'line') return 'var(--color-accent)';
  return icon.color ?? 'var(--color-text)';
}
