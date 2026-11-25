import { Component, inject } from '@angular/core';
import { PORTFOLIO_DATA } from '../../core/data/portfolio.data';
import { SectionHeader } from '../../shared/components/section-header/section-header';
import { RevealDirective } from '../../shared/directives/reveal.directive';

@Component({
  selector: 'app-skills',
  imports: [SectionHeader, RevealDirective],
  template: `
    <section id="skills" class="section container" aria-labelledby="skills-title">
      <app-section-header sectionId="skills" />

      <div class="skills">
        @for (group of skills; track group.category) {
          <article class="card skill" appReveal>
            <header class="skill__header">
              <h3><span aria-hidden="true">//</span> {{ group.category }}</h3>
              <span class="skill__count">{{ group.items.length }}</span>
            </header>
            <ul class="tag-list">
              @for (skill of group.items; track skill) {
                <li class="tag">{{ skill }}</li>
              }
            </ul>
          </article>
        }
      </div>
    </section>
  `,
  styles: `
    .skills {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr));
      gap: var(--space-4);
    }
    .skill__header {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      margin-bottom: var(--space-4);
    }
    h3 {
      font-size: var(--text-base);
      font-weight: 600;
    }
    h3 span,
    .skill__count {
      font-family: var(--font-mono);
      color: var(--color-accent);
    }
    .skill__count {
      font-size: var(--text-xs);
    }
  `,
})
export class Skills {
  protected readonly skills = inject(PORTFOLIO_DATA).skills;
}
