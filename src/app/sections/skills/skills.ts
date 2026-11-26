import { Component, inject } from '@angular/core';
import { PORTFOLIO_DATA } from '../../core/data/portfolio.data';
import { TrPipe } from '../../core/i18n/tr.pipe';
import { SectionHeader } from '../../shared/components/section-header/section-header';
import { SkillIcon, skillColor } from '../../shared/components/skill-icon/skill-icon';
import { RevealDirective } from '../../shared/directives/reveal.directive';

@Component({
  selector: 'app-skills',
  imports: [SectionHeader, RevealDirective, SkillIcon, TrPipe],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  protected readonly skills = inject(PORTFOLIO_DATA).skills;
  protected readonly color = skillColor;
}
