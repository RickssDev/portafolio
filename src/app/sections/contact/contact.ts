import { Component, inject } from '@angular/core';
import { PORTFOLIO_DATA, sectionNumber } from '../../core/data/portfolio.data';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { Icon } from '../../shared/components/icon/icon';

@Component({
  selector: 'app-contact',
  imports: [RevealDirective, Icon],
  template: `
    <section id="contact" class="section container" aria-labelledby="contact-title">
      <div class="contact card" appReveal>
        <p class="contact__eyebrow">{{ number }} ¿Qué sigue?</p>
        <h2 id="contact-title" class="contact__title">Hablemos</h2>
        <p class="contact__text">
          Estoy abierto a oportunidades en desarrollo Backend y Full Stack. Si tienes un proyecto
          o una vacante, escríbeme y te respondo pronto.
        </p>
        <div class="contact__actions">
          <a class="btn btn--primary" [href]="'mailto:' + profile.email">
            <app-icon name="email" [size]="18" /> {{ profile.email }}
          </a>
          @for (social of webSocials; track social.url) {
            <a class="btn" [href]="social.url" target="_blank" rel="noopener noreferrer">
              <app-icon [name]="social.platform" [size]="18" /> {{ social.label }}
            </a>
          }
        </div>
      </div>
    </section>
  `,
  styles: `
    .contact {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: var(--space-4);
      padding: var(--space-16) var(--space-6);
      text-align: center;
    }
    .contact:hover {
      transform: none;
    }
    .contact__eyebrow {
      font-family: var(--font-mono);
      font-size: var(--text-sm);
      color: var(--color-accent);
    }
    .contact__title {
      font-size: var(--text-hero);
    }
    .contact__text {
      max-width: 34rem;
      margin-bottom: var(--space-4);
      color: var(--color-text-muted);
    }
    .contact__actions {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: var(--space-3);
    }
  `,
})
export class Contact {
  protected readonly profile = inject(PORTFOLIO_DATA).profile;
  protected readonly webSocials = this.profile.socials.filter((s) => s.platform !== 'email');
  protected readonly number = sectionNumber('contact');
}
