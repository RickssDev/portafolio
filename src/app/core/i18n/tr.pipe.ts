import { Pipe, PipeTransform, inject } from '@angular/core';
import { Text } from '../models/portfolio.models';
import { LanguageService } from './language.service';

/**
 * Traduce un `Text` al idioma activo:  {{ project.description | tr }}
 * Es "impuro" para volver a evaluarse al cambiar de idioma (es una búsqueda trivial).
 */
@Pipe({ name: 'tr', pure: false })
export class TrPipe implements PipeTransform {
  private readonly i18n = inject(LanguageService);

  transform(value: Text | null | undefined): string {
    return value == null ? '' : this.i18n.resolve(value);
  }
}
