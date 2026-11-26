import { Directive, ElementRef, inject } from '@angular/core';

/**
 * Expone la posición del cursor dentro del elemento como variables CSS
 * (--mx, --my), para dibujar un "aura" que sigue al puntero.
 * Uso: <article appSpotlight>…</article>  y en CSS: radial-gradient(at var(--mx) var(--my), …)
 */
@Directive({
  selector: '[appSpotlight]',
  host: {
    '(pointermove)': 'onMove($event)',
  },
})
export class SpotlightDirective {
  private readonly el = inject<ElementRef<HTMLElement>>(ElementRef);

  protected onMove(event: PointerEvent): void {
    const host = this.el.nativeElement;
    const rect = host.getBoundingClientRect();
    host.style.setProperty('--mx', `${event.clientX - rect.left}px`);
    host.style.setProperty('--my', `${event.clientY - rect.top}px`);
  }
}
