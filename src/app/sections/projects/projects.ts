import { Component, inject } from '@angular/core';
import { PORTFOLIO_DATA } from '../../core/data/portfolio.data';
import { TrPipe } from '../../core/i18n/tr.pipe';
import { UI } from '../../core/i18n/ui';
import { Project } from '../../core/models/portfolio.models';
import { Icon } from '../../shared/components/icon/icon';
import { SectionHeader } from '../../shared/components/section-header/section-header';
import { RevealDirective } from '../../shared/directives/reveal.directive';

@Component({
  selector: 'app-projects',
  imports: [SectionHeader, RevealDirective, Icon, TrPipe],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  protected readonly ui = UI.projects;

  /** Los destacados (featured) aparecen primero. */
  protected readonly projects: Project[] = [...inject(PORTFOLIO_DATA).projects].sort(
    (a, b) => Number(!!b.featured) - Number(!!a.featured),
  );
}
