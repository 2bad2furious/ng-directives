import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[teta]'
})
export class TetaDirective {

  constructor(
    el: ElementRef<HTMLElement>
  ) {
    el.nativeElement.classList.add('p-3', 'border', 'text-primary');
  }

}
