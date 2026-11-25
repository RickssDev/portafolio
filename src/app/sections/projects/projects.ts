import { Component, inject } from '@angular/core';
import { PORTFOLIO_DATA } from '../../core/data/portfolio.data';
import { Project } from '../../core/models/portfolio.models';
import { SectionHeader } from '../../shared/components/section-header/section-header';
import { RevealDirective } from '../../shared/directives/reveal.directive';
import { Icon } from '../../shared/components/icon/icon';

@Component({
  selector: 'app-projects',
  imports: [SectionHeader, RevealDirective, Icon],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  /** Los destacados (featured) aparecen primero. */
  protected readonly projects: Project[] = [...inject(PORTFOLIO_DATA).projects].sort(
    (a, b) => Number(!!b.featured) - Number(!!a.featured),
  );
}
