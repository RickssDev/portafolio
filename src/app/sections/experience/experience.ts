import { Component, inject } from '@angular/core';
import { PORTFOLIO_DATA } from '../../core/data/portfolio.data';
import { TrPipe } from '../../core/i18n/tr.pipe';
import { SectionHeader } from '../../shared/components/section-header/section-header';
import { RevealDirective } from '../../shared/directives/reveal.directive';

@Component({
  selector: 'app-experience',
  imports: [SectionHeader, RevealDirective, TrPipe],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class ExperienceSection {
  protected readonly experience = inject(PORTFOLIO_DATA).experience;
}
