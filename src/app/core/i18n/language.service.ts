import { DOCUMENT, Injectable, effect, inject, signal } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Lang, Text } from '../models/portfolio.models';
import { UI } from './ui';

const STORAGE_KEY = 'portfolio-lang';

/**
 * Idioma activo (es / en).
 * Elige el idioma guardado o, si no hay, el del navegador; y mantiene
 * sincronizados <html lang>, el <title> y la meta descripción.
 */
@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly document = inject(DOCUMENT);
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);

  readonly lang = signal<Lang>(this.initialLang());

  constructor() {
    effect(() => {
      const lang = this.lang();
      this.document.documentElement.lang = lang;
      this.title.setTitle(this.resolve(UI.meta.title));
      this.meta.updateTag({ name: 'description', content: this.resolve(UI.meta.description) });
      try {
        localStorage.setItem(STORAGE_KEY, lang);
      } catch {
        /* almacenamiento no disponible */
      }
    });
  }

  toggle(): void {
    this.lang.update((l) => (l === 'es' ? 'en' : 'es'));
  }

  /** Devuelve el texto en el idioma activo. */
  resolve(text: Text): string {
    return typeof text === 'string' ? text : text[this.lang()];
  }

  private initialLang(): Lang {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === 'es' || saved === 'en') return saved;
    } catch {
      /* ignorar */
    }
    const browser = this.document.defaultView?.navigator.language ?? 'es';
    return browser.toLowerCase().startsWith('es') ? 'es' : 'en';
  }
}
