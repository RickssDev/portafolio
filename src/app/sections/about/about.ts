import { Component, inject } from '@angular/core';
import { PORTFOLIO_DATA } from '../../core/data/portfolio.data';
import { SectionHeader } from '../../shared/components/section-header/section-header';
import { RevealDirective } from '../../shared/directives/reveal.directive';

@Component({
  selector: 'app-about',
  imports: [SectionHeader, RevealDirective],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  private readonly data = inject(PORTFOLIO_DATA);
  protected readonly profile = this.data.profile;
  protected readonly education = this.data.education;
  protected readonly languages = this.data.languages;
}
